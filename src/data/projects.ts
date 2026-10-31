export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  icon: string
  githubLink?: string
  liveLink?: string
}

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot',
    icon: 'fas fa-robot',
    description:
      'AI-powered chatbot built using n8n automation, Google Gemini, and Pinecone vector database. Documents are automatically synced from Google Drive and converted into embeddings for semantic search. The chatbot retrieves relevant information and answers user queries intelligently.',
    techStack: ['n8n', 'Google Gemini', 'Pinecone', 'Google Drive'],
  },
  {
    id: 'email-automation',
    title: 'Automated Email Reply Workflow',
    icon: 'fas fa-envelope',
    description:
      'An automated email response workflow built in n8n that monitors incoming Gmail messages, analyzes content using AI, assigns relevant labels, and generates structured, professional HTML replies. Designed to streamline email management, improve response quality, and enhance productivity through intelligent automation.',
    techStack: ['n8n', 'Gmail API', 'AI'],
  },
  {
    id: 'warehouse-management',
    title: 'Warehouse Management System',
    icon: 'fas fa-warehouse',
    description:
      'A modern warehouse management system built with React, TypeScript, and Ant Design. Track inventory, manage orders, suppliers, and warehouse zones with an interactive dashboard and reporting. Fully functional with mock data — ideal for prototyping or as a frontend scaffold for a real WMS backend.',
    techStack: ['React', 'TypeScript', 'Ant Design'],
  },
  {
    id: 'code-review-bot',
    title: 'AI Code Review Bot',
    icon: 'fas fa-code',
    description:
      'AI-powered Code Review Bot built with React, Node.js, Express, and Google Gemini API. Review JavaScript, Python, Java, and C++ code for bugs, security vulnerabilities, performance issues, and code quality improvements with real-time execution output.',
    techStack: ['React', 'Node.js', 'Express', 'Google Gemini'],
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Website',
    icon: 'fas fa-utensils',
    description:
      'A modern Food Delivery website developed with HTML, CSS, and JavaScript. Users can explore different food categories, view menu items, and interact with a user-friendly interface. The project highlights responsive design, clean UI components, and front-end web development skills.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
]
