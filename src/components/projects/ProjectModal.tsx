import { useEffect } from 'react'
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '@/types/project'

interface ProjectModalProps { project: Project; onClose: () => void }

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="project-modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="project-modal">
        <button className="modal-close-btn" onClick={onClose}><FaTimes /></button>

        <div className="modal-icon-wrap">
          <div className="modal-icon"><i className="fas fa-code" /></div>
        </div>
        <div className="modal-badge">
          <span>by {project.creatorName}</span>
        </div>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-desc">{project.description}</p>

        <div className="modal-section-label">Tech Stack</div>
        <div className="modal-tech">
          {project.techStack.map((t) => <span key={t}>{t}</span>)}
        </div>

        {(project.githubLink || project.liveLink) && (
          <div className="modal-actions">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-btn-github">
                <FaGithub /> GitHub
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="modal-btn-live">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          Submitted {new Date(project.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  )
}
