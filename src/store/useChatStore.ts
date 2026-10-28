import { create } from 'zustand'
import type { ChatMessage } from '@/types/chatbot'

interface ChatState {
  isOpen: boolean
  messages: ChatMessage[]
  isTyping: boolean
  showChips: boolean

  open: () => void
  close: () => void
  addMessage: (message: ChatMessage) => void
  setTyping: (typing: boolean) => void
  clearMessages: () => void
  setShowChips: (show: boolean) => void
}

export const useChatStore = create<ChatState>()((set) => ({
  isOpen: false,
  messages: [
    {
      id: 'welcome',
      role: 'bot',
      text: "Hi! 👋 I'm Himujjal's AI assistant. Ask me anything about his skills, projects, experience, or how to get in touch!",
      timestamp: Date.now(),
    },
  ],
  isTyping: false,
  showChips: true,

  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setTyping: (typing) => set({ isTyping: typing }),
  clearMessages: () =>
    set({
      messages: [
        {
          id: 'welcome-reset',
          role: 'bot',
          text: "Hi! 👋 I'm Himujjal's AI assistant. Ask me anything about his skills, projects, experience, or how to get in touch!",
          timestamp: Date.now(),
        },
      ],
      showChips: true,
    }),
  setShowChips: (show) => set({ showChips: show }),
}))
