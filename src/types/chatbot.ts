export interface BotIntent {
  keywords: string[]
  responses: string[]
}

export interface ChatMessage {
  id: string
  role: 'user' | 'bot'
  text: string
  timestamp: number
}

export interface ChatRequest {
  message: string
  sessionId: string
  context?: ChatMessage[]
}
