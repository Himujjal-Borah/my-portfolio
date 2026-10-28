import type { BotIntent } from '@/types/chatbot'

export const BOT_RESPONSES: BotIntent[] = [
  // 1. Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy', 'yo'],
    responses: [
      "Hello! 👋 How can I help you learn about Himujjal today?",
      "Hi there! Feel free to ask about Himujjal's skills, projects, or experience!",
      "Hey! I'm Himujjal's AI assistant. What would you like to know?",
    ],
  },
  // 2. About Himujjal
  {
    keywords: ['about himujjal', 'who is himujjal', 'tell me about', 'about you', 'who are you', 'introduce', 'introduction', 'background', 'bio', 'profile', 'himujjal borah', 'yourself'],
    responses: [
      "Himujjal Borah is a Software Developer from Assam, India. He's passionate about full-stack web development and AI automation. He's currently pursuing B.Tech in CSE at Barak Valley Engineering College (2022-2025) and working as a Software Developer at Spectrus Sustainable Solutions.",
      "Himujjal is a versatile developer skilled in both frontend and backend technologies. He loves building AI-powered applications and automating workflows with n8n. Want to know more about his specific skills or projects?",
    ],
  },
  // 3. Current job/role
  {
    keywords: ['current role', 'job', 'work', 'position', 'employment', 'working', 'company', 'spectrus', 'software developer', 'currently do', 'doing now', 'what do you do'],
    responses: [
      "Himujjal is currently working as a Software Developer at Spectrus Sustainable Solutions (since April 2026). He builds and maintains software solutions while also pursuing his B.Tech degree.",
    ],
  },
  // 4. Education
  {
    keywords: ['education', 'study', 'college', 'university', 'degree', 'btech', 'b.tech', 'diploma', 'academic', 'school', 'qualification', 'barak valley', 'nowgong', 'polytechnic', 'cse'],
    responses: [
      "Himujjal is pursuing B.Tech in Computer Science & Engineering at Barak Valley Engineering College (2022-2025). He also holds a Diploma in Computer Science from Nowgong Polytechnic (2019-2022).",
    ],
  },
  // 5. Frontend skills
  {
    keywords: ['frontend', 'front-end', 'front end', 'html', 'css', 'javascript', 'bootstrap', 'ui', 'ux', 'web design'],
    responses: [
      "Himujjal's frontend skills include HTML5 (95%), CSS3 (90%), JavaScript (85%), and Bootstrap (80%). He builds responsive, modern user interfaces with smooth animations and great UX.",
    ],
  },
  // 6. Backend skills
  {
    keywords: ['backend', 'back-end', 'back end', 'node', 'express', 'mysql', 'database', 'server', 'api', 'python', 'sql', 'nodejs', 'node.js'],
    responses: [
      "On the backend, Himujjal works with Node.js (80%), Express.js (75%), MySQL (75%), and Python (70%). He builds RESTful APIs and full-stack applications.",
    ],
  },
  // 7. Tools
  {
    keywords: ['tools', 'n8n', 'metabase', 'automation', 'workflow', 'ai tools', 'technologies', 'tech stack'],
    responses: [
      "Himujjal uses a variety of tools including n8n for workflow automation, Metabase for data visualization, Git/GitHub for version control, and various AI tools. He's also experienced with Java and jQuery.",
    ],
  },
  // 8. General skills
  {
    keywords: ['skills', 'what can you do', 'abilities', 'technologies', 'tech', 'programming', 'coding', 'development', 'stack', 'expertise', 'proficient', 'know'],
    responses: [
      "Himujjal is skilled in: Frontend (HTML5, CSS3, JavaScript, Bootstrap), Backend (Node.js, Express.js, Python), Database (MySQL), and Tools (n8n, Metabase, Git, AI/ML). He's also experienced with Java and automation workflows. Want details on any specific area?",
    ],
  },
  // 9. Projects overview
  {
    keywords: ['projects', 'portfolio', 'work samples', 'what have you built', 'applications', 'apps', 'creations', 'build'],
    responses: [
      "Himujjal has built several projects including an Online Coding Discussion Forum (PHP/MySQL), Chronic Kidney Disease Prediction (ML/Python), Food Delivery Website, Automated Gmail Reply system (n8n), AI ChatBot with RAG (Python/AI), Music Player, Drum Kit, AI Research & Report Generator (n8n), and an AI Resume Analyzer & Job Matcher (Gemini AI). Check out the Projects section for details!",
    ],
  },
  // 10. Resume Analyzer
  {
    keywords: ['resume analyzer', 'job matcher'],
    responses: [
      "The AI Resume Analyzer & Job Matcher is one of Himujjal's featured projects. It uses Google Gemini AI to analyze resumes and match them with job descriptions, providing insights on skill gaps and compatibility scores.",
    ],
  },
  // 11. AI Chatbot / RAG
  {
    keywords: ['chatbot', 'rag', 'ai chat', 'gemini', 'langchain'],
    responses: [
      "Himujjal built an AI ChatBot with RAG (Retrieval-Augmented Generation) using Python and AI technologies. It can answer questions based on provided documents, making it great for knowledge base applications.",
    ],
  },
  // 12. Gmail automation
  {
    keywords: ['gmail', 'email automation', 'automated reply'],
    responses: [
      "The Automated Gmail Reply system is an n8n workflow that automatically responds to incoming emails based on content analysis. It demonstrates Himujjal's expertise in business process automation.",
    ],
  },
  // 13. Music player
  {
    keywords: ['music player', 'audio player'],
    responses: [
      "Himujjal built a Music Player web app using HTML, CSS, and JavaScript. It features play/pause, skip, volume control, progress bar, and a playlist interface with a clean modern design.",
    ],
  },
  // 14. Drum kit
  {
    keywords: ['drum kit', 'drum'],
    responses: [
      "The Drum Kit is an interactive web app where you can play drum sounds by clicking buttons or pressing keyboard keys. It's a fun project built with vanilla JavaScript and CSS animations.",
    ],
  },
  // 15. Kidney disease / ML
  {
    keywords: ['kidney', 'disease', 'machine learning', 'ml', 'prediction', 'health', 'medical'],
    responses: [
      "The Chronic Kidney Disease Prediction project uses Machine Learning (Python) to predict the likelihood of kidney disease based on patient data. It demonstrates Himujjal's skills in data science and ML model development.",
    ],
  },
  // 16. Food delivery
  {
    keywords: ['food delivery', 'food', 'restaurant'],
    responses: [
      "The Food Delivery Website is a frontend project built with HTML, CSS, and JavaScript. It features a modern restaurant-style landing page with menu sections, ordering interface, and responsive design.",
    ],
  },
  // 17. Internship / Experience
  {
    keywords: ['internship', 'experience', 'intern', 'work experience', 'training', 'bootcamp', 'udemy', 'pis it'],
    responses: [
      "Himujjal has completed 3 internships: Full Web Development Bootcamp at Udemy (June-Sept 2023), Web Development Intern at Pis IT Solutions (May 2022), and IT Hardware & Networking Intern at Elite Computers (April 2021). He's now working professionally as a Software Developer.",
    ],
  },
  // 18. Certifications
  {
    keywords: ['certification', 'certificate', 'course', 'certified'],
    responses: [
      "Himujjal holds certifications including the Full Web Development Bootcamp from Udemy (2023) and a Web Development Internship certificate from Pis IT Solutions (2022).",
    ],
  },
  // 19. Contact / Hire
  {
    keywords: ['contact', 'hire', 'reach', 'email', 'phone', 'message', 'connect', 'get in touch', 'how to reach', 'how to contact'],
    responses: [
      "You can contact Himujjal via email at himujjalofficial@gmail.com, on LinkedIn, GitHub, or Twitter. Check the Contact section at the bottom of the page for all his social links!",
    ],
  },
  // 20. Email
  {
    keywords: ['email address', 'gmail', 'mail'],
    responses: [
      "Himujjal's email is himujjalofficial@gmail.com. Feel free to reach out for collaboration, freelance work, or just to say hi!",
    ],
  },
  // 21. GitHub / LinkedIn
  {
    keywords: ['github', 'linkedin', 'social', 'profile link', 'code repository', 'repo'],
    responses: [
      "You can find Himujjal on GitHub at github.com/Himujjal-Borah and on LinkedIn at linkedin.com/in/himujjal-borah. His GitHub showcases all his projects and contributions!",
    ],
  },
  // 22. Location
  {
    keywords: ['location', 'where', 'city', 'country', 'state', 'assam', 'india', 'from', 'live', 'based'],
    responses: [
      "Himujjal is based in Assam, India. He's open to remote opportunities and collaborations regardless of location!",
    ],
  },
  // 23. Strengths
  {
    keywords: ['strength', 'strengths', 'good at', 'best', 'speciality', 'specialize'],
    responses: [
      "Himujjal's key strengths are quick learning, problem-solving, and writing clean maintainable code. He particularly excels at AI automation, full-stack development, and creating intuitive user experiences.",
    ],
  },
  // 24. Hire / opportunity
  {
    keywords: ['hire him', 'job opportunity', 'freelance', 'collaborate', 'work together', 'recruit', 'open position'],
    responses: [
      "Himujjal is open to exciting opportunities! He's available for freelance work, collaborations, and full-time roles in software development, AI automation, and full-stack engineering. Reach out at himujjalofficial@gmail.com!",
    ],
  },
  // 25. CV / Resume
  {
    keywords: ['cv', 'resume', 'download'],
    responses: [
      "You can download Himujjal's resume/CV by clicking the 'Download CV' button in the hero section. It includes his full education, experience, skills, and project details.",
    ],
  },
  // 26. Thanks / Goodbye
  {
    keywords: ['thanks', 'thank you', 'bye', 'goodbye', 'see you', 'appreciate', 'helpful', 'great', 'awesome'],
    responses: [
      "You're welcome! 😊 Feel free to come back if you have more questions. Have a great day!",
      "Happy to help! 💙 Don't forget to check out Himujjal's projects and get in touch if you'd like to connect!",
      "Anytime! 👋 If you want to know more, try asking about specific projects or skills. Have a wonderful day!",
    ],
  },
]

export const FALLBACK_RESPONSES = [
  "I'm not sure about that, but you can ask me about Himujjal's skills, projects, education, experience, or how to contact him!",
  "Hmm, I don't have information on that specific topic. Try asking about Himujjal's projects, skills, or experience instead!",
  "I'm still learning! For that question, you might want to reach out to Himujjal directly at himujjalofficial@gmail.com.",
]
