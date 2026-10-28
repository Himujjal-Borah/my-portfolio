import { useChatStore } from '@/store/useChatStore'

export function ChatFab() {
  const { isOpen, open, close } = useChatStore()

  return (
    <button
      className={`chat-fab ${isOpen ? 'is-open' : ''}`}
      onClick={() => (isOpen ? close() : open())}
      aria-label="Chat with AI"
    >
      <span className="chat-fab-inner">
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'}`} />
        <span className="chat-fab-label">Ask AI</span>
      </span>
      <span className="chat-fab-badge">1</span>
    </button>
  )
}
