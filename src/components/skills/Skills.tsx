import { SectionTitle } from '@/components/shared/SectionTitle'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { frontendSkills, backendSkills, tools } from '@/data/skills'
import { useState, useEffect } from 'react'

export function Skills() {
  const [sectionRef, isVisible] = useIntersectionObserver()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setAnimate(true), 300)
      return () => clearTimeout(t)
    }
  }, [isVisible])

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="skills"
    >
      <div className="container">
        <SectionTitle>
          My <span className="text-gradient">Skills</span>
        </SectionTitle>

        <div className="skills-container">
          {/* Frontend */}
          <div className="skills-category">
            <h3><i className="fas fa-code" /> Frontend</h3>
            <div className="skill-items">
              {frontendSkills.map((s) => (
                <div key={s.name} className="skill-item">
                  <div className="skill-icon"><i className={s.icon} /></div>
                  <div className="skill-info">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: animate ? `${s.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skills-category">
            <h3><i className="fas fa-database" /> Backend &amp; Database</h3>
            <div className="skill-items">
              {backendSkills.map((s) => (
                <div key={s.name} className="skill-item">
                  <div className="skill-icon"><i className={s.icon} /></div>
                  <div className="skill-info">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: animate ? `${s.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="animated-logos">
          <h3>Tools &amp; Technologies</h3>
          <div className="logos-container">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`logo-item animate-logo ${isVisible ? 'animated' : ''}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tool.logo ? (
                  <img className="tool-logo" src={tool.logo} alt={tool.name} />
                ) : (
                  <i className={tool.icon} style={{ color: tool.color }} />
                )}
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
