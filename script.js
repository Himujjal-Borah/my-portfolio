// Portfolio JavaScript - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize everything after DOM loads
    initializePortfolio();
});

function initializePortfolio() {
    // Loading Screen
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 2000);

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const texts = [
        'Software Developer',
        'AI Automation Developer',
        'JavaScript',
        'Data Visualization',
        'Python'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            const typeSpeed = isDeleting ? 50 : 100;
            setTimeout(type, typeSpeed);
        }
    }

    // Start typing after loading
    setTimeout(type, 1000);

    // Initialize Particles.js Background
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#3b82f6" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#60a5fa",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Smooth scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Download CV Button
    const downloadBtn = document.querySelector('.btn-download-cv');
    downloadBtn.addEventListener('click', () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = 'HimujjalBorah_Resume.pdf'; // Your CV filename
        link.download = 'HimujjalBorah_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show download confirmation
        showNotification('CV downloaded successfully!');
    });

    // Skills Progress Animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const progressBar = item.querySelector('.skill-progress');
            const skillLevel = item.getAttribute('data-skill');
            
            // Reset width to 0
            progressBar.style.width = '0%';
            
            // Animate to actual width
            setTimeout(() => {
                progressBar.style.width = skillLevel + '%';
            }, 300);
        });
    }

    // Animate on scroll
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate skills when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                
                // Add animation class to cards
                if (entry.target.classList.contains('animate-card')) {
                    entry.target.classList.add('animated');
                }
                
                // Add animation class to logos
                if (entry.target.classList.contains('animate-logo')) {
                    entry.target.classList.add('animated');
                }
            }
        });
    }, observerOptions);

    // Observe sections and elements
    document.querySelectorAll('.skills, .animate-card, .animate-logo').forEach(el => {
        observer.observe(el);
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* ================================================
       CONTACT FORM — EmailJS Integration
       ================================================
       Fill in your 3 EmailJS values below:
       1. Go to https://emailjs.com and sign up free
       2. Add Gmail service → get Service ID
       3. Create email template → get Template ID
       4. Go to Account → get Public Key (already set in index.html)
    ================================================ */

    const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"

    const contactForm = document.querySelector('.contact-form');
    const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name    = formData.get("name").trim();
            const email   = formData.get("email").trim();
            const subject = formData.get("subject").trim();
            const message = formData.get("message").trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification("⚠️ Please fill in all fields.", "warning");
                return;
            }

            // Disable button & show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";

            const templateParams = {
                from_name:  name,
                from_email: email,
                subject:    subject,
                message:    message,
                to_email:   "himujjalofficial@gmail.com"
            };

            try {
                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
                showNotification("✅ Message sent! I'll get back to you soon.");
                this.reset();
            } catch (error) {
                console.error("EmailJS error:", error);
                showNotification("❌ Failed to send. Please try emailing directly at himujjalofficial@gmail.com");
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Message";
            }
        });
    }

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Show notification function
    function showNotification(message, type = "success") {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) existingNotification.remove();

        const colors = { success: "#10b981", warning: "#f59e0b", error: "#ef4444" };
        const icons  = { success: "fa-check-circle", warning: "fa-exclamation-circle", error: "fa-times-circle" };

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${icons[type] || icons.success}"></i>
                <span>${message}</span>
            </div>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type] || colors.success};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 9999;
            max-width: 340px;
            animation: slideIn 0.3s ease, slideOut 0.3s ease 3.7s;
            animation-fill-mode: forwards;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn { from { transform: translateX(110%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(110%); opacity: 0; } }
            .notification-content { display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem; }
        `;

        document.head.appendChild(style);
        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) notification.parentNode.removeChild(notification);
        }, 4000);
    }

    // Random floating shapes animation enhancement
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        // Add random initial rotation
        const randomRotation = Math.random() * 360;
        shape.style.transform = `rotate(${randomRotation}deg)`;
        
        // Add hover effect
        shape.addEventListener('mouseenter', () => {
            shape.style.transform = 'scale(1.2)';
            shape.style.transition = 'transform 0.3s ease';
        });
        
        shape.addEventListener('mouseleave', () => {
            shape.style.transform = `rotate(${randomRotation}deg) scale(1)`;
        });
    });

    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const badge = card.querySelector('.project-badge');
            if (badge) {
                badge.style.transform = 'rotate(5deg) scale(1.1)';
                badge.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const badge = card.querySelector('.project-badge');
            if (badge) {
                badge.style.transform = 'rotate(0) scale(1)';
            }
        });
    });

    // Animate logos on hover
    const logos = document.querySelectorAll('.logo-item');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            const icon = logo.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', () => {
            const icon = logo.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Initialize skill animations
    animateSkills();
}

// Handle window resize
window.addEventListener('resize', () => {
    // Re-initialize particles if needed
    if (window.innerWidth < 768) {
        // Adjust particles density for mobile
        if (typeof particlesJS !== 'undefined' && pJSDom && pJSDom.length > 0) {
            pJSDom[0].pJS.particles.number.value = 40;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
});



/* ================================================
   PORTFOLIO CHATBOT — No API, Pure JavaScript
   Keyword matching against Himujjal's portfolio data
   ================================================ */

const BOT_RESPONSES = [

    // Greetings
    {
        keywords: ["hello", "hi", "hey", "howdy", "greetings", "sup", "good morning", "good evening", "good afternoon"],
        responses: [
            "👋 Hi there! I'm Himujjal's portfolio assistant. Ask me anything about his skills, projects, experience, or how to contact him!",
            "Hello! 😊 Great to meet you. I can tell you all about Himujjal — his work, projects, skills, or anything else on his portfolio!",
            "Hey! Welcome to Himujjal's portfolio. What would you like to know about him?"
        ]
    },

    // Who is Himujjal / About
    {
        keywords: ["who is", "about him", "about himujjal", "tell me about", "introduce", "background", "yourself", "who are you", "himujjal borah"],
        responses: [
            "Himujjal Borah is a passionate Software Developer from Assam, India 🇮🇳. He holds a B.Tech in Computer Science and currently works as a Software Developer at Spectrus Sustainable Solutions Pvt Ltd. He has 15+ projects and 4 internships under his belt, specializing in web development, AI automation, and data tools.",
            "Himujjal is a driven Software Developer based in Assam, India. He completed his B.Tech in Computer Science and is now working full-time at Spectrus Sustainable Solutions. He loves building efficient solutions using modern web tech, automation tools like n8n, and AI-powered applications."
        ]
    },

    // Current Job / Work
    {
        keywords: ["current job", "current role", "working", "work at", "company", "employer", "spectrus", "job", "position", "designation"],
        responses: [
            "Himujjal is currently working as a Software Developer at Spectrus Sustainable Solutions Pvt Ltd. (April 2026 – Present). Before that, he was an IT Tech Intern at the same company from December 2025 to March 2026.",
            "He works as a Software Developer at Spectrus Sustainable Solutions Pvt Ltd. since April 2026. He previously completed an IT Tech internship there from December 2025 to March 2026 before being promoted."
        ]
    },

    // Education
    {
        keywords: ["education", "study", "studied", "college", "university", "degree", "btech", "b.tech", "diploma", "qualification", "academic", "school"],
        responses: [
            "Himujjal's educational background:\n🎓 B.Tech in Computer Science — Barak Valley Engineering College, Shribhumi (2022–2025)\n🎓 Diploma in Computer Engineering — Nowgong Polytechnic, Nagaon (2019–2022)",
            "He completed his B.Tech in Computer Science from Barak Valley Engineering College (2022–2025), and before that earned a Diploma in Computer Engineering from Nowgong Polytechnic, Nagaon (2019–2022)."
        ]
    },

    // Skills — Frontend
    {
        keywords: ["frontend", "front end", "html", "css", "javascript", "bootstrap", "ui", "interface", "web design"],
        responses: [
            "Himujjal's frontend skills:\n💻 HTML5 — 95%\n🎨 CSS3 — 90%\n⚡ JavaScript — 85%\n📦 Bootstrap — 80%\n\nHe builds clean, responsive, and animated web interfaces!",
            "On the frontend side, Himujjal is highly skilled in HTML5 (95%), CSS3 (90%), JavaScript (85%), and Bootstrap (80%). He creates beautiful, responsive UIs."
        ]
    },

    // Skills — Backend
    {
        keywords: ["backend", "back end", "node", "nodejs", "express", "python", "mysql", "database", "server", "php", "api"],
        responses: [
            "Himujjal's backend skills:\n🟢 Node.js — 80%\n🚂 Express.js — 75%\n🐍 Python — 70%\n🗄️ MySQL — 75%\n\nHe builds robust server-side applications and REST APIs.",
            "For backend development, Himujjal works with Node.js (80%), Express.js (75%), Python (70%), and MySQL (75%). He's comfortable building full-stack applications."
        ]
    },

    // Skills — All / General
    {
        keywords: ["skill", "skills", "tech stack", "technologies", "tools", "know", "good at", "expertise", "proficient", "languages"],
        responses: [
            "Himujjal's tech stack:\n\nFrontend: HTML5 (95%), CSS3 (90%), JavaScript (85%), Bootstrap (80%)\nBackend: Node.js (80%), Express.js (75%), MySQL (75%), Python (70%)\nTools: Git, GitHub, jQuery, Java, n8n, Metabase\n\nHe's a well-rounded full-stack developer!",
            "Here's what Himujjal works with:\n🖥️ Frontend — HTML, CSS, JavaScript, Bootstrap\n⚙️ Backend — Node.js, Express.js, Python, MySQL\n🔧 Tools — Git, GitHub, n8n (automation), Metabase (data viz), Java, jQuery"
        ]
    },

    // Projects — General
    {
        keywords: ["project", "projects", "built", "created", "made", "portfolio", "work", "developed", "applications", "apps"],
        responses: [
            "Himujjal has built 15+ projects! Here are some highlights:\n\n📌 Online Coding Discussion Forum (PHP/MySQL)\n📌 Chronic Kidney Disease Prediction (ML/Python)\n📌 Food Delivery Website (HTML/CSS/JS)\n📌 Automated Gmail Reply (n8n)\n📌 AI ChatBot with RAG (Python/AI)\n📌 Music Player\n📌 Drum Kit\n📌 AI Research & Report Generator (n8n)\n📌 AI Resume Analyzer & Job Matcher (Gemini)\n\nAsk me about any specific project for more details!",
            "He's worked on 15+ projects ranging from web apps to AI automation. Key ones include an AI Resume Analyzer, a RAG-powered Chatbot, a Gmail automation system using n8n, a Kidney Disease Predictor using ML, and several frontend projects. Want details on any specific one?"
        ]
    },

    // Project — AI Resume Analyzer
    {
        keywords: ["resume", "analyzer", "job matcher", "resume analyzer"],
        responses: [
            "The AI Resume Analyzer & Job Matcher is one of Himujjal's standout projects! 🚀\n\nIt's an AI-powered system that analyzes uploaded resumes and delivers personalized job recommendations directly to the user's inbox.\n\nTech used: n8n, Gemini AI, JavaScript\n🔗 GitHub: https://github.com/Himujjal-Borah/AI-Resume-Analyzer-Job-Matcher"
        ]
    },

    // Project — Chatbot / RAG
    {
        keywords: ["chatbot", "rag", "retrieval", "ai chatbot", "chat bot"],
        responses: [
            "Himujjal built an AI ChatBot using RAG (Retrieval-Augmented Generation)! 🤖\n\nIt accurately answers specific questions by retrieving relevant data before responding — making it much smarter than a basic chatbot.\n\nTech used: Python, AI/RAG\n🔗 GitHub: https://github.com/Himujjal-Borah/AI-ChatBot-using-n8n"
        ]
    },

    // Project — Gmail Automation
    {
        keywords: ["gmail", "email", "automated", "auto reply", "automation", "n8n"],
        responses: [
            "Himujjal built an Automated Gmail Reply system using n8n! 📧\n\nIt uses n8n workflow nodes to automatically respond to incoming emails — a great example of his AI automation skills.\n\nHe also built an AI Research & Report Generator that researches a topic, creates a PDF report, and emails it automatically.\n\n🔗 GitHub: https://github.com/Himujjal-Borah/AI-ChatBot-using-n8n"
        ]
    },

    // Project — Music Player
    {
        keywords: ["music", "music player", "player"],
        responses: [
            "Himujjal built a responsive Music Player web app! 🎵\n\nFeatures include play/pause controls, track navigation, and dynamic UI updates — all built with pure HTML, CSS, and JavaScript.\n\n🔗 GitHub: https://github.com/Himujjal-Borah/Music-Player"
        ]
    },

    // Project — Drum Kit
    {
        keywords: ["drum", "drum kit"],
        responses: [
            "The Drum Kit is a fun interactive project by Himujjal! 🥁\n\nIt lets you play drum sounds using keyboard keys or mouse clicks, with real-time sound playback built using JavaScript.\n\n🔗 GitHub: https://github.com/Himujjal-Borah/Drum-kit"
        ]
    },

    // Project — Kidney Disease
    {
        keywords: ["kidney", "disease", "prediction", "machine learning", "ml", "data science"],
        responses: [
            "Himujjal built a Chronic Kidney Disease Prediction system! 🏥\n\nIt uses machine learning algorithms in Python to detect kidney disease quickly from medical data — a great example of his data science skills.\n\nTech used: Python, Machine Learning, Data Science"
        ]
    },

    // Project — Food Delivery
    {
        keywords: ["food", "food delivery", "restaurant"],
        responses: [
            "Himujjal built a Food Delivery Website — a responsive frontend project featuring a clean food ordering interface built with HTML, CSS, and JavaScript.\n\n🔗 GitHub: https://github.com/Himujjal-Borah"
        ]
    },

    // Internships / Experience
    {
        keywords: ["internship", "intern", "experience", "work experience", "previous", "past work", "pis", "elite computers"],
        responses: [
            "Himujjal has completed 4 internships:\n\n💼 IT Tech Intern — Spectrus Sustainable Solutions (Dec 2025 – Mar 2026)\n💼 Full Web Dev Bootcamp — Udemy (June–Sept 2023)\n💼 Web Development Intern — Pis IT Solutions Pvt Ltd (May 2022) — HTML, CSS, JS, PHP, MySQL\n💼 IT Hardware & Networking Intern — Elite Computers and Communication Pvt Ltd (April 2021)",
            "He has solid internship experience across software development and IT:\n• Spectrus Sustainable Solutions — IT Tech Intern (2025–2026)\n• Udemy — Full Web Development Bootcamp (2023)\n• Pis IT Solutions — Web Dev Intern using HTML, CSS, JS, PHP, MySQL (2022)\n• Elite Computers — IT Hardware & Networking Intern (2021)"
        ]
    },

    // Certifications
    {
        keywords: ["certification", "certifications", "certificate", "certified", "course", "udemy"],
        responses: [
            "Himujjal holds the following certifications:\n\n🏆 Full Web Development Bootcamp 2023 — Udemy\n🏆 Web Technologies — Pis IT Solutions\n\nHe's always upskilling and staying current with the latest technologies!"
        ]
    },

    // Contact
    {
        keywords: ["contact", "reach", "email", "phone", "hire", "hiring", "available", "connect", "message", "touch", "number"],
        responses: [
            "You can reach Himujjal through:\n\n📧 Email: himujjalofficial@gmail.com\n📞 Phone: +91 9101300899\n📍 Location: Assam, India\n\nOr connect with him on:\n🐙 GitHub: github.com/Himujjal-Borah\n💼 LinkedIn: linkedin.com/in/himujjal-borah-45710a292",
            "Want to get in touch with Himujjal? Here's how:\n\n✉️ himujjalofficial@gmail.com\n📱 +91 9101300899\n\nHe's open to opportunities, collaborations, and freelance projects!"
        ]
    },

    // GitHub / LinkedIn
    {
        keywords: ["github", "linkedin", "social", "profile", "link", "portfolio link"],
        responses: [
            "Find Himujjal online:\n\n🐙 GitHub: https://github.com/Himujjal-Borah\n💼 LinkedIn: https://www.linkedin.com/in/himujjal-borah-45710a292/\n\nHis GitHub has all his projects with source code!"
        ]
    },

    // Location
    {
        keywords: ["location", "where", "city", "state", "country", "based", "from", "assam", "india"],
        responses: [
            "Himujjal is based in Assam, India 🇮🇳. He's currently working at Spectrus Sustainable Solutions and is open to remote opportunities as well!"
        ]
    },

    // Strengths / Personality
    {
        keywords: ["strength", "strengths", "personality", "qualities", "trait", "good at", "best", "passionate"],
        responses: [
            "Himujjal's key strengths:\n\n🚀 Quick Learner — adapts fast to new technologies\n💡 Problem Solver — strong analytical thinking\n🧹 Clean Code — writes maintainable, efficient code\n🤖 AI Enthusiast — experienced with AI tools and automation\n📊 Data-driven — works with data visualization tools like Metabase"
        ]
    },

    // Hire / Open to work
    {
        keywords: ["hire", "hiring", "open to work", "available", "freelance", "opportunity", "job offer", "recruit"],
        responses: [
            "Himujjal is open to exciting opportunities! 🎯\n\nYou can reach him at:\n📧 himujjalofficial@gmail.com\n📞 +91 9101300899\n\nHe's skilled in full-stack development, AI automation, and data tools — a great hire for any tech team!"
        ]
    },

    // Thanks / Bye
    {
        keywords: ["thank", "thanks", "bye", "goodbye", "see you", "great", "awesome", "nice", "cool", "helpful"],
        responses: [
            "You're welcome! 😊 Feel free to ask anything else about Himujjal. Hope to see you connect with him soon!",
            "Glad I could help! 🙌 If you have more questions about Himujjal's work or want to get in touch, feel free to ask anytime.",
            "Thanks for stopping by! 👋 Don't forget to check out Himujjal's GitHub and reach out if you'd like to collaborate!"
        ]
    },

    // CV / Resume download
    {
        keywords: ["cv", "resume", "download", "pdf"],
        responses: [
            "You can download Himujjal's CV using the 'Download CV' button on the home section of this portfolio! 📄\n\nOr contact him directly at himujjalofficial@gmail.com to request his latest resume."
        ]
    }
];

// Fallback responses when no keyword matches
const FALLBACK_RESPONSES = [
    "Hmm, I'm not sure about that specific question. Try asking about Himujjal's skills, projects, experience, education, or how to contact him! 😊",
    "I didn't quite catch that! I can tell you about Himujjal's skills, projects, internships, education, or contact info — what would you like to know?",
    "That's a bit outside what I know! Feel free to ask about Himujjal's work, projects, tech stack, or you can reach him directly at himujjalofficial@gmail.com 📧"
];

function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();

    // Score each intent by how many keywords match
    let bestMatch = null;
    let bestScore = 0;

    for (const intent of BOT_RESPONSES) {
        let score = 0;
        for (const keyword of intent.keywords) {
            if (msg.includes(keyword)) {
                // Longer keyword matches score higher
                score += keyword.split(" ").length;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = intent;
        }
    }

    if (bestMatch && bestScore > 0) {
        const pool = bestMatch.responses;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    // Return a random fallback
    return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

/* ---- UI Functions ---- */

function addMessage(text, sender) {
    const chatMessages = document.getElementById("chatMessages");

    const wrapper = document.createElement("div");
    wrapper.className = `chat-bubble ${sender === "user" ? "user-message" : "bot-message"}`;

    const avatar = document.createElement("div");
    avatar.className = "bubble-avatar";
    avatar.innerHTML = sender === "user"
        ? '<i class="fas fa-user"></i>'
        : '<i class="fas fa-robot"></i>';

    const content = document.createElement("div");
    content.className = "bubble-content";
    content.textContent = text;

    wrapper.appendChild(avatar);
    wrapper.appendChild(content);
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setTyping(visible) {
    const indicator = document.getElementById("typingIndicator");
    indicator.style.display = visible ? "flex" : "none";
    document.getElementById("chatMessages").scrollTop = document.getElementById("chatMessages").scrollHeight;
}

function setInputDisabled(disabled) {
    document.getElementById("userInput").disabled = disabled;
    document.getElementById("sendBtn").disabled = disabled;
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;

    // Hide suggestion chips after first message
    document.getElementById("suggestionChips").style.display = "none";

    addMessage(message, "user");
    input.value = "";
    setInputDisabled(true);
    setTyping(true);

    // Simulate a short typing delay for natural feel
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
        const reply = getBotResponse(message);
        setTyping(false);
        addMessage(reply, "bot");
        setInputDisabled(false);
        input.focus();
    }, delay);
}

/* ---- Event Listeners ---- */

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const clearBtn = document.getElementById("clearChatBtn");
    const chips = document.querySelectorAll(".chip");

    sendBtn.addEventListener("click", sendMessage);

    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });

    clearBtn.addEventListener("click", function () {
        const chatMessages = document.getElementById("chatMessages");
        chatMessages.innerHTML = `
            <div class="bot-message chat-bubble">
                <div class="bubble-avatar"><i class="fas fa-robot"></i></div>
                <div class="bubble-content">
                    👋 Hi! I'm Himujjal's portfolio assistant. Ask me about his skills, projects, experience, or how to contact him!
                </div>
            </div>`;
        document.getElementById("suggestionChips").style.display = "flex";
    });

    chips.forEach(chip => {
        chip.addEventListener("click", function () {
            input.value = this.getAttribute("data-q");
            sendMessage();
        });
    });
});