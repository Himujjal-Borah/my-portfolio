import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initTheme } from '@/store/useThemeStore'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { Skills } from '@/components/skills/Skills'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { Experience } from '@/components/experience/Experience'
import { Contact } from '@/components/contact/Contact'
import { ChatBot } from '@/components/chatbot/ChatBot'
import { SnakeGame } from '@/components/easteregg/SnakeGame'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { WhatsAppFAB } from '@/components/whatsapp/WhatsAppFAB'
import { useChatStore } from '@/store/useChatStore'

function HomePage() {
  const isChatOpen = useChatStore((s) => s.isOpen)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
      {!isChatOpen && <WhatsAppFAB />}
      <ChatBot />
      <SnakeGame />
    </>
  )
}

export default function App() {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}
