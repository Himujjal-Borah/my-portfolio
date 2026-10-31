import type { Skill, Tool } from '@/types/portfolio'

export const frontendSkills: Skill[] = [
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'fab fa-html5' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', level: 85, category: 'frontend', icon: 'fab fa-js' },
  { name: 'Bootstrap', level: 80, category: 'frontend', icon: 'fab fa-bootstrap' },
]

export const backendSkills: Skill[] = [
  { name: 'Node.js', level: 80, category: 'backend', icon: 'fab fa-node-js' },
  { name: 'MySQL', level: 75, category: 'backend', icon: 'fas fa-database' },
  { name: 'Express.js', level: 75, category: 'backend', icon: 'fas fa-server' },
  { name: 'Python', level: 70, category: 'backend', icon: 'fab fa-python' },
]

export const tools: Tool[] = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#264de4' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#f0db4f' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
  { name: 'Java', icon: 'fab fa-java', color: '#f89820' },
  { name: 'Metabase', icon: 'fas fa-chart-bar', color: '#509ee3' },
  { name: 'n8n', icon: 'fas fa-project-diagram', color: '#6366f1' },
  { name: 'Claude', logo: '/claude.svg' },
  { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
  { name: 'GitHub', icon: 'fab fa-github', color: 'var(--text)' },
  { name: 'jQuery', icon: 'fas fa-code', color: '#0868ac' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
  { name: 'Express.js', icon: 'fas fa-server', color: '#68a063' },
]
