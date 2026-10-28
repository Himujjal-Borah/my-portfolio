import type { ContactInfo, SocialLink } from '@/types/portfolio'

export const contactInfo: ContactInfo[] = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'himujjalofficial@gmail.com',
    href: 'mailto:himujjalofficial@gmail.com',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Assam, India',
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+91 9101300899',
    href: 'tel:+919101300899',
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/Himujjal-Borah',
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/himujjal-borah/',
    color: '#0a66c2',
  },
  {
    name: 'Twitter',
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/himujjal_borah',
    color: '#1da1f2',
  },
  {
    name: 'CodePen',
    icon: 'fab fa-codepen',
    url: 'https://codepen.io/himujjal-borah',
    color: '#ffffff',
  },
]
