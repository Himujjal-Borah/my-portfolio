import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '@/data/projects'

interface ProjectCardProps { project: Project }

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card-top">
        <div className="project-icon"><i className={project.icon} /></div>
      </div>
      <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
        {project.title}
      </h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      {(project.githubLink || project.liveLink) && (
        <div className="project-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}
