import { FaRobot } from 'react-icons/fa'

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))',
          color: '#fff',
        }}
      >
        <FaRobot size={14} />
      </div>
      <div
        className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
        style={{
          backgroundColor: 'var(--color-primary)',
          borderBottomLeftRadius: '4px',
        }}
      >
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{
            backgroundColor: 'var(--color-text-muted)',
            animation: 'typing-bounce 1.2s ease-in-out infinite',
          }}
        />
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{
            backgroundColor: 'var(--color-text-muted)',
            animation: 'typing-bounce 1.2s ease-in-out 0.2s infinite',
          }}
        />
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{
            backgroundColor: 'var(--color-text-muted)',
            animation: 'typing-bounce 1.2s ease-in-out 0.4s infinite',
          }}
        />
      </div>
    </div>
  )
}
