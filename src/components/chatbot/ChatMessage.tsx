import { FaRobot, FaUser } from 'react-icons/fa'
import type { ChatMessage as ChatMessageType } from '@/types/chatbot'

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'bot'

  return (
    <div
      className={`flex gap-3 mb-4 animate-bubble-in ${isBot ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Avatar */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: isBot
            ? 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))'
            : '#10b981',
          color: '#fff',
        }}
      >
        {isBot ? <FaRobot size={14} /> : <FaUser size={14} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isBot ? '' : ''
        }`}
        style={{
          backgroundColor: isBot ? 'var(--color-primary)' : 'var(--color-accent)',
          color: isBot ? 'var(--color-text)' : '#fff',
          borderBottomLeftRadius: isBot ? '4px' : '16px',
          borderBottomRightRadius: isBot ? '16px' : '4px',
        }}
      >
        {message.text}
      </div>
    </div>
  )
}
