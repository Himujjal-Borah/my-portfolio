import * as XLSX from 'xlsx'
import type { Project, Comment } from '@/types/project'

export function exportProjectsToExcel(
  projects: Project[],
  likes: Record<string, string[]>,
  comments: Record<string, Comment[]>
) {
  const workbook = XLSX.utils.book_new()

  // Sheet 1: Projects
  const projectsData = projects.map((p) => ({
    Timestamp: p.timestamp,
    Creator: p.creatorName,
    Title: p.title,
    Description: p.description,
    'Tech Stack': p.techStack.join(', '),
    'GitHub Link': p.githubLink,
    'Live Link': p.liveLink,
    Likes: (likes[p.id] || []).length,
  }))
  const projectsSheet = XLSX.utils.json_to_sheet(projectsData)
  XLSX.utils.book_append_sheet(workbook, projectsSheet, 'Projects')

  // Sheet 2: Comments
  const commentsData = Object.entries(comments).flatMap(
    ([projectId, commentList]) =>
      commentList.map((c) => ({
        'Project Title':
          projects.find((p) => p.id === projectId)?.title || projectId,
        'Project ID': projectId,
        'User Session': c.sessionId,
        Comment: c.text,
        Timestamp: c.timestamp,
      }))
  )
  const commentsSheet = XLSX.utils.json_to_sheet(commentsData)
  XLSX.utils.book_append_sheet(workbook, commentsSheet, 'Comments')

  // Download
  XLSX.writeFile(
    workbook,
    `portfolio-projects-${new Date().toISOString().split('T')[0]}.xlsx`
  )
}
