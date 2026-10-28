import { toast } from 'sonner'
import { RESUME_PATH } from '@/utils/constants'

export function HeroButtons() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = 'HimujjalBorah_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('CV downloaded successfully!')
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <div className="hero-buttons">
      <button onClick={() => scrollTo('projects')} className="btn-primary">
        <i className="fas fa-briefcase" /> View My Work
      </button>
      <button onClick={() => scrollTo('contact')} className="btn-secondary">
        Contact Me
      </button>
      <button onClick={handleDownloadCV} className="btn-download-cv">
        <i className="fas fa-download" /> Download CV
      </button>
    </div>
  )
}
