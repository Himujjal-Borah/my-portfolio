import { SectionTitle } from '@/components/shared/SectionTitle'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle>
          My <span className="text-gradient">Projects</span>
        </SectionTitle>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
