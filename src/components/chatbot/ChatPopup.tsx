import { useRef, useEffect } from 'react'
import { useChatStore } from '@/store/useChatStore'
import { getSessionId } from '@/utils/sessionId'
import { getKeywordResponse, getN8nChatResponse } from '@/services/chatbotApi'
import { SuggestionChips } from './SuggestionChips'
import { FormattedText } from './FormattedText'

export function ChatPopup() {
  const { messages, isTyping, showChips, addMessage, setTyping, clearMessages, setShowChips } = useChatStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = async (text: string) => {
    const sessionId = getSessionId()
    addMessage({ id: crypto.randomUUID(), role: 'user', text, timestamp: Date.now() })
    if (showChips) setShowChips(false)
    setTyping(true)
    await new Promise((r) => setTimeout(r, 500 + Math.random() * 700))
    const keywordResponse = getKeywordResponse(text)
    const botText = keywordResponse || await getN8nChatResponse(text, sessionId)
    setTyping(false)
    addMessage({ id: crypto.randomUUID(), role: 'bot', text: botText, timestamp: Date.now() })
  }

  return (
    <>
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-avatar">
          <i className="fas fa-robot" />
          <span className="status-dot" />
        </div>
        <div className="chat-header-info">
          <h3>Himujjal&apos;s AI Assistant</h3>
          <span className="status-text">Online — Ask me anything!</span>
        </div>
        <div className="chat-header-actions">
          <button className="chat-clear-btn" onClick={clearMessages} aria-label="Clear chat">
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble ${msg.role === 'bot' ? 'bot-message' : 'user-message'}`}>
            <div className="bubble-avatar">
              <i className={`fas ${msg.role === 'bot' ? 'fa-robot' : 'fa-user'}`} />
            </div>
            <div className="bubble-content">
              {msg.role === 'bot' ? <FormattedText text={msg.text} /> : msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <div className="bubble-avatar"><i className="fas fa-robot" /></div>
            <div className="typing-dots"><span /><span /><span /></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chips */}
      {showChips && <SuggestionChips onChipClick={handleSend} />}

      {/* Input */}
      <div className="chat-input">
        <input
          id="userInput"
          placeholder="Ask me anything..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSend(e.currentTarget.value)
              e.currentTarget.value = ''
            }
          }}
          disabled={isTyping}
        />
        <button
          id="sendBtn"
          disabled={isTyping}
          onClick={() => {
            const input = document.getElementById('userInput') as HTMLInputElement
            if (input && input.value.trim()) {
              handleSend(input.value.trim())
              input.value = ''
            }
          }}
        >
          <i className="fas fa-paper-plane" />
        </button>
      </div>
    </>
  )
}
