import { SectionTitle } from '@/components/shared/SectionTitle'
import { experienceItems } from '@/data/experience'

export function Experience() {
  const work = experienceItems.filter((e) => e.type === 'work')
  const internships = experienceItems.filter((e) => e.type === 'internship')
  const education = experienceItems.filter((e) => e.type === 'education')

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle>
          Experience &amp; <span className="text-gradient">Education</span>
        </SectionTitle>

        <div className="timeline">
          {/* Work Experience */}
          <div className="timeline-section">
            <h3><i className="fas fa-briefcase" /> Work Experience</h3>
            {work.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p className="timeline-place">{item.subtitle}</p>
                  <p>{item.description}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="timeline-highlights">
                      {item.highlights.map((h, j) => (
                        <li key={j}><strong>{h.label}:</strong> {h.text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Internships */}
          <div className="timeline-section">
            <h3><i className="fas fa-laptop-code" /> Internships</h3>
            {internships.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p className="timeline-place">{item.subtitle}</p>
                  <p>{item.description}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="timeline-highlights">
                      {item.highlights.map((h, j) => (
                        <li key={j}><strong>{h.label}:</strong> {h.text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="timeline-section">
            <h3><i className="fas fa-graduation-cap" /> Education</h3>
            {education.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p className="timeline-place">{item.subtitle}</p>
                  <p>{item.description}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="timeline-highlights">
                      {item.highlights.map((h, j) => (
                        <li key={j}><strong>{h.label}:</strong> {h.text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
