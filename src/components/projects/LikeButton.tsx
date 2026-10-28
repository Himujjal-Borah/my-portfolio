import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useProjectStore } from '@/store/useProjectStore'

interface LikeButtonProps {
  projectId: string
}

export function LikeButton({ projectId }: LikeButtonProps) {
  const { toggleLike, getLikeCount, hasLiked } = useProjectStore()
  const [animating, setAnimating] = useState(false)

  const liked = hasLiked(projectId)
  const count = getLikeCount(projectId)

  const handleClick = () => {
    setAnimating(true)
    toggleLike(projectId)
    setTimeout(() => setAnimating(false), 400)
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
        animating ? 'animate-like-bounce' : ''
      }`}
      style={{
        backgroundColor: liked ? 'rgba(239, 68, 68, 0.1)' : 'var(--color-card-bg)',
        border: `1px solid ${liked ? 'rgba(239, 68, 68, 0.3)' : 'var(--color-card-border)'}`,
        color: liked ? '#ef4444' : 'var(--color-text-muted)',
      }}
      aria-label={liked ? 'Unlike' : 'Like'}
    >
      <FaHeart size={14} className={liked ? '' : 'opacity-60'} />
      <span>{count || ''}</span>
    </button>
  )
}
