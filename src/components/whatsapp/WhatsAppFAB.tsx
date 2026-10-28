import { WHATSAPP_NUMBER } from '@/utils/constants'

export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Himujjal!%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20connect.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      <i className="fab fa-whatsapp" />
    </a>
  )
}
