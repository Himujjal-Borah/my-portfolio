import { SectionTitle } from '@/components/shared/SectionTitle'
import { experienceItems } from '@/data/experience'

export function Experience() {
  const education = experienceItems.filter((e) => e.type === 'education')
  const internships = experienceItems.filter((e) => e.type === 'internship')

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle>
          Experience &amp; <span className="text-gradient">Education</span>
        </SectionTitle>

        <div className="timeline">
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
                </div>
              </div>
            ))}
          </div>

          {/* Internships */}
          <div className="timeline-section">
            <h3><i className="fas fa-briefcase" /> Internships</h3>
            {internships.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p className="timeline-place">{item.subtitle}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
