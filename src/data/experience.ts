import type { ExperienceItem, AboutInfo } from '@/types/portfolio'

export const experienceItems: ExperienceItem[] = [
  // Work Experience
  {
    type: 'work',
    title: 'Software Developer',
    subtitle: 'Spectrus Sustainable Solutions Pvt Ltd',
    period: 'Dec 2025 - Present',
    description:
      'Software developer building and maintaining software solutions, with a focus on AI-powered automation. I work with databases, n8n, WordPress and Metabase to turn manual processes into reliable, efficient systems with clear data visibility.',
    icon: 'fas fa-briefcase',
    highlights: [
      { label: 'AI-powered automation', text: 'designing workflows that save time and reduce manual effort' },
      { label: 'n8n', text: 'building and maintaining automation workflows that connect apps, APIs and AI models' },
      { label: 'WordPress', text: 'developing and customizing websites, themes and plugins' },
      { label: 'Metabase', text: 'creating dashboards and reports so teams can track metrics and make data-driven decisions' },
      { label: 'Databases', text: 'designing schemas, writing queries and managing data' },
    ],
  },
  // Education
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Barak Valley Engineering College',
    period: '2022 - 2025',
    description: 'Currently pursuing B.Tech in Computer Science and Engineering with focus on software development and AI technologies.',
    icon: 'fas fa-graduation-cap',
  },
  {
    type: 'education',
    title: 'Diploma in Computer Science',
    subtitle: 'Nowgong Polytechnic',
    period: '2019 - 2022',
    description: 'Completed diploma in Computer Science with strong foundation in programming fundamentals and software engineering.',
    icon: 'fas fa-graduation-cap',
  },
  // Internships
  {
    type: 'internship',
    title: 'Full Web Development Bootcamp',
    subtitle: 'Udemy',
    period: 'June 2023 - September 2023',
    description: 'Completed comprehensive full-stack web development bootcamp covering HTML, CSS, JavaScript, Node.js, Express.js, and database management.',
    icon: 'fas fa-laptop-code',
  },
  {
    type: 'internship',
    title: 'Web Development Intern',
    subtitle: 'Pis IT Solutions',
    period: 'May 2022',
    description: 'Worked as a web development intern gaining practical experience in building and maintaining web applications.',
    icon: 'fas fa-briefcase',
  },
  {
    type: 'internship',
    title: 'IT Hardware & Networking Intern',
    subtitle: 'Elite Computers',
    period: 'April 2021',
    description: 'Gained hands-on experience in IT hardware maintenance and networking fundamentals in a professional environment.',
    icon: 'fas fa-network-wired',
  },
]

export const aboutInfo: AboutInfo = {
  highlight:
    'Passionate software developer from Assam, India, specializing in full-stack web development and AI automation. Currently working as a Software Developer at Spectrus Sustainable Solutions.',
  description:
    'I build modern, responsive web applications and love exploring the intersection of AI and automation. With experience in both frontend and backend technologies, I create seamless digital experiences.',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Barak Valley Engineering College',
    period: '2022 - 2025',
  },
  certifications: [
    {
      title: 'Full Web Development Bootcamp',
      issuer: 'Udemy',
      period: '2023',
    },
    {
      title: 'Web Development Internship',
      issuer: 'Pis IT Solutions',
      period: '2022',
    },
  ],
  cards: [
    {
      icon: 'fas fa-rocket',
      title: 'Quick Learner',
      description: 'Rapidly adapt to new technologies and frameworks, staying current with industry trends.',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges with creative and efficient solutions.',
    },
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      description: 'Write maintainable, scalable code following best practices and design patterns.',
    },
  ],
}
