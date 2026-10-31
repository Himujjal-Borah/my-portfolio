import type { BotIntent } from '@/types/chatbot'

export const BOT_RESPONSES: BotIntent[] = [
  // 1. Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy', 'yo', 'namaste', 'sup'],
    responses: [
      "Hello! 👋 I'm Himujjal's AI assistant.\n\nHere's what you can ask me:\n\n• **Skills & Tools** — frontend, backend, n8n, WordPress\n• **Experience** — work, internships, education\n• **Projects** — AI, automation, full-stack\n• **Contact** — email, socials, CV\n\nWhat would you like to know?",
      "Hey there! 👋 I can tell you about Himujjal's:\n\n• **Work** at Spectrus Sustainable Solutions\n• **Skills & tools** like n8n and WordPress\n• **Projects** and **education**\n\nJust ask away!",
    ],
  },
  // 2. About
  {
    keywords: ['about himujjal', 'who is himujjal', 'tell me about', 'about you', 'who are you', 'introduce', 'introduction', 'background', 'bio', 'profile', 'himujjal borah', 'yourself'],
    responses: [
      "**Himujjal Borah** is a Software Developer from Assam, India.\n\n• **Role:** Software Developer @ Spectrus Sustainable Solutions\n• **Focus:** AI-powered automation & full-stack development\n• **Education:** B.Tech CSE, Barak Valley Engineering College\n\nHe builds reliable, efficient systems using **n8n**, **WordPress** and databases.",
    ],
  },
  // 3. Current role / work
  {
    keywords: ['current role', 'job', 'work', 'position', 'employment', 'working', 'company', 'spectrus', 'software developer', 'currently do', 'doing now', 'what do you do', 'where do you work', 'where does he work'],
    responses: [
      "**Software Developer @ Spectrus Sustainable Solutions Pvt Ltd**\n*(Dec 2025 – Present)*\n\nHe builds and maintains software solutions focused on AI-powered automation:\n\n• **AI automation** — designing time-saving workflows\n• **n8n** — automation connecting apps, APIs & AI models\n• **WordPress** — websites, themes & plugins\n• **Databases** — schemas, queries & data management",
    ],
  },
  // 4. Skills
  {
    keywords: ['skills', 'what can you do', 'abilities', 'technologies', 'tech', 'programming', 'coding', 'development', 'stack', 'expertise', 'proficient', 'know'],
    responses: [
      "**Frontend**\n• HTML5 (95%), CSS3 (90%), JavaScript (85%), Bootstrap (80%)\n\n**Backend & Database**\n• Node.js (80%), MySQL (75%), Express.js (75%), Python (70%)\n\n**Tools**\n• n8n, WordPress, Metabase, Git & GitHub, Java",
    ],
  },
  // 5. Tools & technologies
  {
    keywords: ['tools', 'n8n', 'metabase', 'wordpress', 'automation', 'workflow', 'ai tools', 'tech stack'],
    responses: [
      "**Tools & Technologies**\n\n• **n8n** — workflow automation\n• **WordPress** — websites, themes & plugins\n• **Metabase** — data visualization\n• **Git & GitHub** — version control\n• Plus **Java**, **jQuery** and **Bootstrap**",
    ],
  },
  // 6. Projects overview
  {
    keywords: ['projects', 'portfolio', 'work samples', 'what have you built', 'applications', 'apps', 'creations', 'build', 'project'],
    responses: [
      "Here are **5 featured projects**:\n\n• **AI-Powered Chatbot** — n8n + Gemini + Pinecone\n• **Automated Email Reply Workflow** — n8n + Gmail\n• **Warehouse Management System** — React + TypeScript + Ant Design\n• **AI Code Review Bot** — React + Node.js + Gemini\n• **Food Delivery Website** — HTML, CSS & JavaScript\n\nAsk me about any of them for details!",
    ],
  },
  // 7. AI chatbot project
  {
    keywords: ['ai chatbot', 'rag', 'pinecone', 'vector', 'semantic search', 'gemini'],
    responses: [
      "**AI-Powered Chatbot**\n\n• Built with **n8n**, **Google Gemini** & **Pinecone**\n• Documents synced from **Google Drive** into embeddings\n• Semantic search for accurate, intelligent answers",
    ],
  },
  // 8. Email automation project
  {
    keywords: ['gmail', 'email automation', 'automated reply', 'email workflow', 'email response'],
    responses: [
      "**Automated Email Reply Workflow**\n\n• Monitors incoming **Gmail** messages\n• Analyzes content with **AI** and assigns labels\n• Generates structured, professional **HTML replies**",
    ],
  },
  // 9. Warehouse project
  {
    keywords: ['warehouse', 'inventory', 'wms', 'ant design', 'management system'],
    responses: [
      "**Warehouse Management System**\n\n• Built with **React**, **TypeScript** & **Ant Design**\n• Tracks inventory, orders, suppliers & zones\n• Interactive dashboard + reporting (mock data)",
    ],
  },
  // 10. Code review project
  {
    keywords: ['code review', 'review bot', 'code quality', 'vulnerabilities', 'performance issues', 'bug'],
    responses: [
      "**AI Code Review Bot**\n\n• Built with **React**, **Node.js**, **Express** & **Google Gemini**\n• Reviews JavaScript, Python, Java & C++\n• Flags bugs, security & performance issues",
    ],
  },
  // 11. Food delivery project
  {
    keywords: ['food delivery', 'food', 'restaurant', 'menu'],
    responses: [
      "**Food Delivery Website**\n\n• Built with **HTML**, **CSS** & **JavaScript**\n• Food categories, menus & responsive UI\n• Clean front-end components",
    ],
  },
  // 12. Education
  {
    keywords: ['education', 'study', 'college', 'university', 'degree', 'btech', 'b.tech', 'diploma', 'academic', 'school', 'qualification', 'barak valley', 'nowgong', 'polytechnic', 'cse'],
    responses: [
      "**Education**\n\n• **B.Tech CSE** — Barak Valley Engineering College (2022–2025)\n• **Diploma in CS** — Nowgong Polytechnic (2019–2022)",
    ],
  },
  // 13. Internships / experience
  {
    keywords: ['internship', 'experience', 'intern', 'work experience', 'training', 'bootcamp', 'udemy', 'pis it', 'elite computers'],
    responses: [
      "**Internships**\n\n• **Full Web Dev Bootcamp** — Udemy (Jun–Sep 2023)\n• **Web Development Intern** — Pis IT Solutions (May 2022)\n• **IT Hardware & Networking Intern** — Elite Computers (Apr 2021)\n\nHe's now working full-time as a **Software Developer**.",
    ],
  },
  // 14. Certifications
  {
    keywords: ['certification', 'certificate', 'course', 'certified'],
    responses: [
      "**Certifications**\n\n• Full Web Development Bootcamp — Udemy (2023)\n• Web Development Internship — Pis IT Solutions (2022)",
    ],
  },
  // 15. Contact
  {
    keywords: ['contact', 'hire', 'reach', 'email', 'phone', 'message', 'connect', 'get in touch', 'how to reach', 'how to contact'],
    responses: [
      "You can reach Himujjal via:\n\n• **Email:** himujjalofficial@gmail.com\n• **Phone:** +91 9101300899\n• **Location:** Assam, India\n\nOr use the Contact section at the bottom of the page.",
    ],
  },
  // 16. Email address
  {
    keywords: ['email address', 'mail'],
    responses: [
      "📧 **himujjalofficial@gmail.com**\n\nFeel free to reach out for collaboration, freelance work, or just to say hi!",
    ],
  },
  // 17. Socials
  {
    keywords: ['github', 'linkedin', 'social', 'profile link', 'code repository', 'repo', 'twitter', 'codepen'],
    responses: [
      "**Find Himujjal online**\n\n• **GitHub:** github.com/Himujjal-Borah\n• **LinkedIn:** linkedin.com/in/himujjal-borah\n• **Twitter:** twitter.com/himujjal_borah\n• **CodePen:** codepen.io/himujjal-borah",
    ],
  },
  // 18. Location
  {
    keywords: ['location', 'where', 'city', 'country', 'state', 'assam', 'india', 'from', 'live', 'based'],
    responses: [
      "📍 **Assam, India**\n\nHe's open to remote opportunities and collaborations worldwide.",
    ],
  },
  // 19. Hire / opportunity
  {
    keywords: ['hire him', 'job opportunity', 'freelance', 'collaborate', 'work together', 'recruit', 'open position'],
    responses: [
      "Himujjal is open to exciting opportunities!\n\n• **Freelance** projects\n• **Collaborations**\n• **Full-time roles** in development & automation\n\nReach out at **himujjalofficial@gmail.com**!",
    ],
  },
  // 20. CV / Resume
  {
    keywords: ['cv', 'resume', 'download'],
    responses: [
      "📄 Download Himujjal's CV using the **Download CV** button in the hero section.\n\nIt covers his education, experience, skills and certifications.",
    ],
  },
  // 21. Thanks / Goodbye
  {
    keywords: ['thanks', 'thank you', 'bye', 'goodbye', 'see you', 'appreciate', 'helpful', 'great', 'awesome'],
    responses: [
      "You're welcome! 😊\n\nFeel free to ask about his **skills**, **experience** or **projects** anytime. Have a great day!",
      "Happy to help! 💙\n\nDon't hesitate to ask more about **Himujjal's work** or **contact details**. 👋",
    ],
  },
]

export const FALLBACK_RESPONSES = [
  "I'm not sure about that yet! 🤔\n\nTry asking about:\n\n• **Skills & Tools**\n• **Work Experience**\n• **Projects**\n• **Contact**\n\nOr reach Himujjal directly at **himujjalofficial@gmail.com**.",
  "Hmm, I don't have that one covered yet.\n\nYou can ask me about Himujjal's **skills**, **projects**, **education** or **experience** instead!",
]
