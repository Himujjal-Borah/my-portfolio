import { useState } from 'react'
import { FaComment, FaPaperPlane } from 'react-icons/fa'
import { useProjectStore } from '@/store/useProjectStore'
import { getSessionId } from '@/utils/sessionId'

interface CommentSectionProps {
  projectId: string
}

export function CommentSection({ projectId }: CommentSectionProps) {
  const { comments, addComment } = useProjectStore()
  const [text, setText] = useState('')
  const [expanded, setExpanded] = useState(false)

  const projectComments = comments[projectId] || []
  const sessionId = getSessionId()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    addComment(projectId, text.trim())
    setText('')
  }

  return (
    <div className="mt-3">
      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-sm transition-colors hover:opacity-80"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <FaComment size={14} />
        <span>{projectComments.length > 0 ? `${projectComments.length} comments` : 'Comment'}</span>
      </button>

      {/* Expanded section */}
      {expanded && (
        <div className="mt-3 space-y-3 animate__animated animate__fadeIn">
          {/* Existing comments */}
          {projectComments.map((comment) => (
            <div
              key={comment.id}
              className="p-3 rounded-lg text-sm"
              style={{
                backgroundColor: 'var(--color-primary)',
                border: '1px solid var(--color-card-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {comment.sessionId === sessionId ? 'You' : '👤'}
                </span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {new Date(comment.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }}>{comment.text}</p>
            </div>
          ))}

          {/* Comment input */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 px-4 py-2 rounded-lg text-sm transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor: 'var(--color-input-bg)',
                border: '1px solid var(--color-input-border)',
                color: 'var(--color-text)',
              }}
            />
            <button
              type="submit"
              disabled={!text.trim()}
              className="px-3 py-2 rounded-lg text-white transition-all duration-200 disabled:opacity-40"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <FaPaperPlane size={12} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
