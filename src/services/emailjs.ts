import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/utils/constants'

export interface ContactFormData {
  from_name: string
  from_email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        ...data,
        to_email: EMAILJS_CONFIG.toEmail,
      },
      EMAILJS_CONFIG.publicKey
    )
    return true
  } catch (error) {
    console.error('EmailJS error:', error)
    return false
  }
}
