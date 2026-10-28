import { create } from 'zustand'
import type { Project, ProjectFormData, Comment } from '@/types/project'
import { getSessionId } from '@/utils/sessionId'
import { N8N_WEBHOOKS } from '@/utils/constants'
import { toast } from 'sonner'

interface ProjectState {
  projects: Project[]
  likes: Record<string, string[]> // projectId → sessionId[]
  comments: Record<string, Comment[]> // projectId → comments[]
  isLoading: boolean
  isFormOpen: boolean

  // Actions
  fetchProjects: () => Promise<void>
  fetchLikesAndComments: () => Promise<void>
  addProject: (data: ProjectFormData) => Promise<void>
  toggleLike: (projectId: string) => void
  addComment: (projectId: string, text: string) => void
  setFormOpen: (open: boolean) => void
  getLikeCount: (projectId: string) => number
  hasLiked: (projectId: string) => boolean
}

export const useProjectStore = create<ProjectState>()((set, get) => ({
  projects: [],
  likes: {},
  comments: {},
  isLoading: false,
  isFormOpen: false,

  fetchProjects: async () => {
    set({ isLoading: true })
    try {
      const res = await fetch(N8N_WEBHOOKS.projectList)
      if (res.ok) {
        const data = await res.json()
        set({ projects: data.projects || [] })
      }
    } catch {
      // n8n offline — use empty array, data persists in localStorage exports
      console.warn('n8n webhook unreachable for project list')
    } finally {
      set({ isLoading: false })
    }
  },

  fetchLikesAndComments: async () => {
    try {
      const res = await fetch(N8N_WEBHOOKS.likesAndComments)
      if (res.ok) {
        const data = await res.json()
        // Transform flat arrays into grouped records
        const likes: Record<string, string[]> = {}
        for (const like of data.likes || []) {
          if (!likes[like.projectId]) likes[like.projectId] = []
          likes[like.projectId].push(like.sessionId)
        }
        const comments: Record<string, Comment[]> = {}
        for (const comment of data.comments || []) {
          if (!comments[comment.projectId]) comments[comment.projectId] = []
          comments[comment.projectId].push(comment)
        }
        set({ likes, comments })
      }
    } catch {
      console.warn('n8n webhook unreachable for likes/comments')
    }
  },

  addProject: async (data) => {
    const sessionId = getSessionId()
    const project: Project = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      creatorName: data.creatorName,
      title: data.title,
      description: data.description,
      techStack: data.techStack.split(',').map((s) => s.trim()).filter(Boolean),
      githubLink: data.githubLink,
      liveLink: data.liveLink,
      imageUrl: data.imageUrl || undefined,
      sessionId,
    }

    // Optimistic local add
    set((state) => ({ projects: [project, ...state.projects] }))

    // Post to n8n webhook
    try {
      const res = await fetch(N8N_WEBHOOKS.projectSubmit, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      })
      if (res.ok) {
        toast.success('Project added successfully!')
      } else {
        toast.warning('Project saved locally (server sync pending)')
      }
    } catch {
      toast.warning('Project saved locally (n8n webhook unreachable)')
    }
  },

  toggleLike: (projectId) => {
    const sessionId = getSessionId()
    set((state) => {
      const current = state.likes[projectId] || []
      const hasLiked = current.includes(sessionId)
      const updated = hasLiked
        ? current.filter((id) => id !== sessionId)
        : [...current, sessionId]
      return { likes: { ...state.likes, [projectId]: updated } }
    })

    // Fire-and-forget to n8n
    fetch(N8N_WEBHOOKS.likeSubmit, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectId, sessionId }),
    }).catch(() => {})
  },

  addComment: (projectId, text) => {
    const sessionId = getSessionId()
    const comment: Comment = {
      id: crypto.randomUUID(),
      projectId,
      sessionId,
      text,
      timestamp: new Date().toISOString(),
    }

    set((state) => ({
      comments: {
        ...state.comments,
        [projectId]: [...(state.comments[projectId] || []), comment],
      },
    }))

    // Fire-and-forget to n8n
    fetch(N8N_WEBHOOKS.commentSubmit, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    }).catch(() => {})
  },

  setFormOpen: (open) => set({ isFormOpen: open }),

  getLikeCount: (projectId) => (get().likes[projectId] || []).length,

  hasLiked: (projectId) => {
    const sessionId = getSessionId()
    return (get().likes[projectId] || []).includes(sessionId)
  },
}))
