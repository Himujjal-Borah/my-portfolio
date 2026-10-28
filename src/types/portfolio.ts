export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend'
  icon: string
}

export interface Tool {
  name: string
  icon: string
  color: string
}

export interface ExperienceItem {
  type: 'education' | 'internship'
  title: string
  subtitle: string
  period: string
  description: string
  icon: string
}

export interface Certification {
  title: string
  issuer: string
  period: string
}

export interface AboutInfo {
  highlight: string
  description: string
  education: {
    degree: string
    school: string
    period: string
  }
  certifications: Certification[]
  cards: {
    icon: string
    title: string
    description: string
  }[]
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
  color: string
}

export type Theme = 'dark' | 'light'
