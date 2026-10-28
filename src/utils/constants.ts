// n8n webhook endpoints (update these with your actual n8n instance URL)
export const N8N_BASE_URL = import.meta.env.VITE_N8N_BASE_URL || 'https://your-n8n-instance.com'

export const N8N_WEBHOOKS = {
  projectSubmit: `${N8N_BASE_URL}/webhook/project-submit`,
  projectList: `${N8N_BASE_URL}/webhook/project-list`,
  likeSubmit: `${N8N_BASE_URL}/webhook/like`,
  commentSubmit: `${N8N_BASE_URL}/webhook/comment`,
  likesAndComments: `${N8N_BASE_URL}/webhook/likes-comments`,
  chatbot: `${N8N_BASE_URL}/webhook/chatbot`,
  contactForm: `${N8N_BASE_URL}/webhook/contact-me`,
} as const

// EmailJS configuration (update with your actual keys)
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  toEmail: 'himujjalofficial@gmail.com',
} as const

// WhatsApp
export const WHATSAPP_NUMBER = '919101300899'

// Resume
export const RESUME_PATH = '/HimujjalBorah_Resume.pdf'

// Profile image
export const PROFILE_IMAGE_PATH = '/image.jpeg'
