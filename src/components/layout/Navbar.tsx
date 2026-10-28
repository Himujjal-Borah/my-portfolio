import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useThemeStore } from '@/store/useThemeStore'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, toggle } = useThemeStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveLink(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="nav-logo">
          HIMUJJAL BORAH
        </a>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-toggle" aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  )
}
