import { useState } from 'react'
import { toast } from 'sonner'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { contactInfo, socialLinks } from '@/data/contact'
import { sendContactEmail } from '@/services/emailjs'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.warning('Please fill in all fields')
      return
    }
    setSending(true)
    const success = await sendContactEmail({
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    })
    setSending(false)
    if (success) {
      toast.success('Message sent successfully!')
      setForm({ name: '', email: '', subject: '', message: '' })
    } else {
      toast.error('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle>
          Get In <span className="text-gradient">Touch</span>
        </SectionTitle>

        <div className="contact-container">
          {/* Left: Contact Info */}
          <div className="contact-info">
            {contactInfo.map((item, i) => (
              <div key={i} className="contact-item">
                <i className={item.icon} />
                <div>
                  <h3>{item.label}</h3>
                  {item.href ? (
                    <a href={item.href}><p>{item.value}</p></a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <i className={`fab fa-${link.name.toLowerCase()}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>
              <i className="fas fa-paper-plane" /> {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
