import { useChatStore } from '@/store/useChatStore'
import { ChatFab } from './ChatFab'
import { ChatPopup } from './ChatPopup'

export function ChatBot() {
  const { isOpen, close } = useChatStore()

  return (
    <>
      <ChatFab />
      <div className={`chat-overlay ${isOpen ? 'open' : ''}`} onClick={close} />
      <div className={`chat-popup ${isOpen ? 'open' : ''}`}>
        <ChatPopup />
      </div>
    </>
  )
}
