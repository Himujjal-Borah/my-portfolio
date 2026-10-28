import { SectionTitle } from '@/components/shared/SectionTitle'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { aboutInfo } from '@/data/experience'

export function About() {
  const [cardRef1, isVisible1] = useIntersectionObserver()
  const [cardRef2, isVisible2] = useIntersectionObserver()
  const [cardRef3, isVisible3] = useIntersectionObserver()
  const cardRefs = [cardRef1, cardRef2, cardRef3]
  const cardVisibles = [isVisible1, isVisible2, isVisible3]

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle>
          About <span className="text-gradient">Me</span>
        </SectionTitle>
        <div className="about-content">
          {/* Left */}
          <div className="about-text">
            <p className="highlight-text">{aboutInfo.highlight}</p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-graduation-cap" />
                <div>
                  <h3>{aboutInfo.education.degree}</h3>
                  <p>{aboutInfo.education.school}</p>
                  <p>{aboutInfo.education.period}</p>
                </div>
              </div>
              {aboutInfo.certifications.map((cert, i) => (
                <div key={i} className="detail-item">
                  <i className="fas fa-certificate" />
                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    <p>{cert.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Character Cards */}
          <div className="about-cards">
            {aboutInfo.cards.map((card, i) => (
              <div
                key={i}
                ref={cardRefs[i] as React.RefObject<HTMLDivElement>}
                className={`card animate-card ${cardVisibles[i] ? 'animated' : ''}`}
              >
                <i className={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
