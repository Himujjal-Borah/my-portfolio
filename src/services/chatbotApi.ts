import { BOT_RESPONSES, FALLBACK_RESPONSES } from '@/data/chatbotResponses'
import { N8N_WEBHOOKS } from '@/utils/constants'

/**
 * Client-side keyword matching engine.
 * Returns a response string if a keyword match is found, null otherwise.
 */
export function getKeywordResponse(message: string): string | null {
  const msg = message.toLowerCase().trim()
  let bestScore = 0
  let bestMatch: (typeof BOT_RESPONSES)[number] | null = null

  for (const intent of BOT_RESPONSES) {
    let score = 0
    for (const keyword of intent.keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        score += keyword.split(' ').length // multi-word keywords score higher
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = intent
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)]
  }

  return null
}

/**
 * Get a random fallback response.
 */
export function getFallbackResponse(): string {
  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
}

/**
 * Send a message to the n8n/Gemini chatbot webhook.
 * Used as fallback when keyword matching finds no response.
 */
export async function getN8nChatResponse(
  message: string,
  sessionId: string
): Promise<string> {
  try {
    const res = await fetch(N8N_WEBHOOKS.chatbot, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sessionId }),
    })
    if (res.ok) {
      const data = await res.json()
      return data.reply || data.output || getFallbackResponse()
    }
    return getFallbackResponse()
  } catch {
    return getFallbackResponse()
  }
}

/**
 * Main response function — tries keyword match first, then n8n fallback.
 */
export async function getBotResponse(
  message: string,
  sessionId: string
): Promise<string> {
  // Try keyword match first (instant)
  const keywordResponse = getKeywordResponse(message)
  if (keywordResponse) {
    return keywordResponse
  }

  // Fallback to n8n/Gemini
  return getN8nChatResponse(message, sessionId)
}
