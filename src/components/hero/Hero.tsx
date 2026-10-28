import { ParticlesBackground } from './ParticlesBackground'
import { TypingAnimation } from './TypingAnimation'
import { LiveClock } from './LiveClock'
import { FloatingShapes } from './FloatingShapes'
import { ProfileCard } from './ProfileCard'
import { HeroButtons } from './HeroButtons'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="animated-background">
        <ParticlesBackground />
      </div>
      <FloatingShapes />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="text-gradient">Himujjal Borah</span>
          </h1>
          <div className="hero-subtitle">
            <TypingAnimation />
          </div>
          <p className="hero-description">
            Building modern web experiences with clean code, AI automation, and a passion
            for solving real-world problems through technology.
          </p>
          <LiveClock />
          <HeroButtons />
        </div>
        <div className="hero-image">
          <ProfileCard />
        </div>
      </div>
    </section>
  )
}
