import { useEffect } from 'react'
import { FaPlus, FaFileExcel, FaSpinner } from 'react-icons/fa'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useProjectStore } from '@/store/useProjectStore'
import { AddProjectForm } from './AddProjectForm'
import { ProjectCard } from './ProjectCard'
import { exportProjectsToExcel } from '@/utils/excel'

export function ProjectsSection() {
  const { projects, likes, comments, isLoading, isFormOpen, setFormOpen, fetchProjects, fetchLikesAndComments } =
    useProjectStore()

  useEffect(() => {
    fetchProjects()
    fetchLikesAndComments()
  }, [fetchProjects, fetchLikesAndComments])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle>
          Community <span className="text-gradient">Projects</span>
        </SectionTitle>

        <p style={{ textAlign: 'center', marginTop: '-2rem', marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          Share your project with the community! Add your own or explore what others have built.
        </p>

        {/* Action Bar */}
        <div className="hero-buttons" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <button onClick={() => setFormOpen(true)} className="btn-primary" disabled={isFormOpen}>
            <FaPlus /> Add Your Project
          </button>
          <button
            onClick={() => exportProjectsToExcel(projects, likes, comments)}
            className="btn-secondary"
            disabled={projects.length === 0}
          >
            <FaFileExcel style={{ color: '#10b981' }} /> Export to Excel
          </button>
        </div>

        {isFormOpen && <AddProjectForm />}

        {isLoading && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <FaSpinner className="animate-spin" style={{ fontSize: '2rem', color: 'var(--color-accent)' }} />
          </div>
        )}

        {!isLoading && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {!isLoading && projects.length === 0 && !isFormOpen && (
          <div className="project-card" style={{ textAlign: 'center', padding: '4rem 2rem', border: '2px dashed var(--color-card-border)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-accent)' }}><FaPlus /></div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }}>No projects yet!</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Be the first to share your project with the community.</p>
            <button onClick={() => setFormOpen(true)} className="btn-primary">
              <FaPlus /> Add Your Project
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
