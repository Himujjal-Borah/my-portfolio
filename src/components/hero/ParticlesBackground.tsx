import { useEffect, useState } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export function ParticlesBackground() {
  const [particleCount, setParticleCount] = useState(80)

  useEffect(() => {
    const handleResize = () => setParticleCount(window.innerWidth < 768 ? 40 : 80)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const options: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: particleCount, density: { enable: true } },
      color: { value: '#06b6d4' },
      links: { enable: true, color: '#67e8f9', distance: 150, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, outModes: { default: 'bounce' } },
      size: { value: 3 },
      opacity: { value: 0.5 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } },
    },
    retina_detect: true,
  }

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  )
}
