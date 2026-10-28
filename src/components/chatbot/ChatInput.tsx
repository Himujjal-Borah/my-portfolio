import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled: boolean
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-t" style={{ borderColor: 'var(--color-card-border)' }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask me anything..."
        className="flex-1 px-4 py-2.5 rounded-full text-sm transition-all duration-300 focus:outline-none"
        style={{
          backgroundColor: 'var(--color-primary)',
          border: '1px solid var(--color-input-border)',
          color: 'var(--color-text)',
        }}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !input.trim()}
        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-40"
        style={{ backgroundColor: 'var(--color-accent)' }}
        aria-label="Send message"
      >
        <FaPaperPlane size={14} />
      </button>
    </div>
  )
}
