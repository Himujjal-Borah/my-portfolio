import { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import type { Project } from '@/types/project'
import { LikeButton } from './LikeButton'
import { CommentSection } from './CommentSection'
import { ProjectModal } from './ProjectModal'

interface ProjectCardProps { project: Project }

export function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="project-card" onClick={() => setShowModal(true)}>
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="project-badge">by {project.creatorName}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.slice(0, 6).map((t) => (
            <span key={t}>{t}</span>
          ))}
          {project.techStack.length > 6 && <span>+{project.techStack.length - 6} more</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
          <LikeButton projectId={project.id} />
          <CommentSection projectId={project.id} />
        </div>
        <div className="project-hover-hint">
          <FaCode style={{ fontSize: '0.8rem' }} /> Click to view details
        </div>
      </div>
      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  )
}
