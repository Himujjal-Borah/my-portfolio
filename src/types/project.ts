export interface Project {
  id: string
  timestamp: string
  creatorName: string
  title: string
  description: string
  techStack: string[] // parsed from comma-separated input
  githubLink: string
  liveLink: string
  imageUrl?: string
  sessionId: string
}

export interface ProjectFormData {
  creatorName: string
  title: string
  description: string
  techStack: string // comma-separated string for input
  githubLink: string
  liveLink: string
  imageUrl?: string
}

export interface Comment {
  id: string
  projectId: string
  sessionId: string
  text: string
  timestamp: string
}

export interface LikeData {
  projectId: string
  sessionId: string
  timestamp: string
}
