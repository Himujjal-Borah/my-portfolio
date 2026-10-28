import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDropzone } from 'react-dropzone'
import { z } from 'zod'
import { useProjectStore } from '@/store/useProjectStore'
import { FaTimes, FaPlus, FaSave, FaUpload, FaTrash } from 'react-icons/fa'

const projectSchema = z.object({
  creatorName: z.string().min(1, 'Name is required'),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  techStack: z.string().min(1, 'At least one technology is required'),
  githubLink: z.string().url('Must be a valid URL').or(z.literal('')),
  liveLink: z.string().url('Must be a valid URL').or(z.literal('')),
})

type ProjectFormData = z.infer<typeof projectSchema>

export function AddProjectForm() {
  const { addProject, setFormOpen } = useProjectStore()
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null)

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: { creatorName: '', title: '', description: '', techStack: '', githubLink: '', liveLink: '' },
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImageDataUrl(reader.result as string)
    reader.readAsDataURL(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
    maxSize: 2 * 1024 * 1024, // 2MB
    maxFiles: 1,
  })

  const onSubmit = async (data: ProjectFormData) => {
    await addProject({ ...data, imageUrl: imageDataUrl || '' })
    setImageDataUrl(null)
    reset()
    setFormOpen(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.8rem 1rem', borderRadius: '10px',
    backgroundColor: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)',
    color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '0.95rem',
    transition: 'all 0.3s ease',
  }

  return (
    <div className="project-card" style={{ marginBottom: '2rem', border: '2px solid var(--color-accent)', boxShadow: '0 0 30px rgba(6,182,212,0.12)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)' }}>
          <FaPlus style={{ color: 'var(--color-accent)' }} /> Add Your Project
        </h3>
        <button onClick={() => setFormOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '1.2rem' }}>
          <FaTimes />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
              Your Name *
            </label>
            <input {...register('creatorName')} placeholder="e.g. John Doe" style={{ ...inputStyle, borderColor: errors.creatorName ? 'var(--color-danger)' : 'var(--color-card-border)' }} />
            {errors.creatorName && <p style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.creatorName.message}</p>}
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
              Project Title *
            </label>
            <input {...register('title')} placeholder="e.g. AI ChatBot with RAG" style={{ ...inputStyle, borderColor: errors.title ? 'var(--color-danger)' : 'var(--color-card-border)' }} />
            {errors.title && <p style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.title.message}</p>}
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
            Description *
          </label>
          <textarea {...register('description')} placeholder="Describe your project..." rows={4}
            style={{ ...inputStyle, resize: 'vertical', minHeight: '100px', borderColor: errors.description ? 'var(--color-danger)' : 'var(--color-card-border)' }} />
          {errors.description && <p style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.description.message}</p>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
            Tech Stack * <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>(comma separated)</span>
          </label>
          <input {...register('techStack')} placeholder="e.g. React, Node.js, MongoDB" style={inputStyle} />
          {errors.techStack && <p style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.techStack.message}</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>GitHub Link</label>
            <input {...register('githubLink')} placeholder="https://github.com/..." style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>Live Link</label>
            <input {...register('liveLink')} placeholder="https://..." style={inputStyle} />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
            Project Image <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>(screenshot or preview)</span>
          </label>

          {imageDataUrl ? (
            <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--color-card-border)' }}>
              <img src={imageDataUrl} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', display: 'block' }} />
              <button
                type="button"
                onClick={() => setImageDataUrl(null)}
                style={{
                  position: 'absolute', top: '8px', right: '8px',
                  background: 'rgba(0,0,0,0.7)', color: '#fff', border: 'none',
                  width: '32px', height: '32px', borderRadius: '50%',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <FaTrash size={14} />
              </button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              style={{
                ...inputStyle,
                border: `2px dashed ${isDragActive ? 'var(--color-accent)' : 'var(--color-card-border)'}`,
                padding: '2rem', textAlign: 'center', cursor: 'pointer',
                backgroundColor: isDragActive ? 'rgba(6,182,212,0.05)' : 'var(--color-card-bg)',
                transition: 'all 0.2s ease',
              }}
            >
              <input {...getInputProps()} />
              <FaUpload style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', margin: '0 auto 0.5rem' }} />
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                {isDragActive ? 'Drop image here...' : 'Drag & drop an image, or click to browse'}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                PNG, JPG, GIF or WebP — max 2MB
              </p>
            </div>
          )}
        </div>

        <div className="hero-buttons" style={{ marginTop: '0.5rem' }}>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            <FaSave /> {isSubmitting ? 'Submitting...' : 'Submit Project'}
          </button>
          <button type="button" className="btn-secondary" onClick={() => setFormOpen(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
