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

    // Scroll → update active nav
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });

    // ── Floating Chat FAB ──
    const chatFab      = document.getElementById("chatFab");
    const chatPopup    = document.getElementById("chatPopup");
    const chatCloseBtn = document.getElementById("chatCloseBtn");
    const chatFabBadge = document.getElementById("chatFabBadge");

    const chatOverlay = document.getElementById("chatOverlay");

    function openChat() {
        chatPopup.classList.add("open");
        chatOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
        chatFab.style.display = "none";
        if (chatFabBadge) chatFabBadge.style.display = "none";
        setTimeout(() => document.getElementById("userInput").focus(), 300);
    }

    function closeChat() {
        chatPopup.classList.remove("open");
        chatOverlay.classList.remove("open");
        document.body.style.overflow = "";
        chatFab.style.display = "flex";
        const inner = document.getElementById("chatFabInner");
        if (inner) inner.innerHTML = '<i class="fas fa-robot"></i><span class="chat-fab-label">Ask AI</span>';
    }

    chatFab.addEventListener("click", () => {
        chatPopup.classList.contains("open") ? closeChat() : openChat();
    });

    if (chatCloseBtn) chatCloseBtn.addEventListener("click", closeChat);



    chatOverlay.addEventListener("click", closeChat);

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
   PORTFOLIO CHATBOT — Pure JavaScript, No API
   Keyword matching using Himujjal's portfolio data
   ================================================ */

const BOT_RESPONSES = [
    {
        keywords: ["hello", "hi", "hey", "howdy", "greetings", "good morning", "good evening", "good afternoon", "sup"],
        responses: [
            "👋 Hi there! I'm Himujjal's portfolio assistant. Ask me anything about his skills, projects, experience, or how to contact him!",
            "Hello! 😊 I can tell you all about Himujjal — his work, projects, skills, or anything else. What would you like to know?",
            "Hey! Welcome to Himujjal's portfolio. What would you like to know about him?"
        ]
    },
    {
        keywords: ["who is", "about him", "about himujjal", "tell me about", "introduce", "background", "yourself", "himujjal borah", "who are you"],
        responses: [
            "Himujjal Borah is a passionate Data Analyst and Full Stack Developer from Assam, India 🇮🇳.\n\nHe currently works as a Software Developer at Spectrus Sustainable Solutions Pvt Ltd. With 15+ projects and 4 internships, he specializes in web development, AI automation, and data tools like n8n and Metabase.",
            "Himujjal is a driven Full Stack Developer and Data Analyst based in Assam, India. He works at Spectrus Sustainable Solutions and loves building efficient solutions using modern web tech and automation tools."
        ]
    },
    {
        keywords: ["current job", "current role", "working", "work at", "company", "employer", "spectrus", "job", "position", "designation", "where does he work"],
        responses: [
            "Himujjal is currently working as a Software Developer at Spectrus Sustainable Solutions Pvt Ltd. (April 2026 – Present).\n\nBefore that, he served as an IT Tech Intern at the same company from December 2025 to March 2026.",
            "He works as a Software Developer at Spectrus Sustainable Solutions Pvt Ltd. since April 2026, having been promoted from his IT Tech Intern role there."
        ]
    },
    {
        keywords: ["education", "study", "studied", "college", "university", "degree", "btech", "b.tech", "diploma", "qualification", "academic", "school", "barak", "nowgong"],
        responses: [
            "Himujjal Borah's education details are:\n• B.Tech Computer Science — Barak Valley Engineering College, Shribhumi (2022–2025)\n• Diploma in Computer Engineering — Nowgong Polytechnic, Nagaon (2019–2022)"
        ]
    },
    {
        keywords: ["frontend", "front end", "html", "css", "javascript", "bootstrap", "jquery", "ui", "interface", "web design"],
        responses: [
            "Himujjal's frontend skills:\n💻 HTML — 95%\n🎨 CSS — 90%\n⚡ JavaScript — 85%\n📦 Bootstrap — 80%\n🔧 jQuery\n\nHe builds clean, responsive, and animated web interfaces!"
        ]
    },
    {
        keywords: ["backend", "back end", "node", "nodejs", "express", "python", "mysql", "database", "server", "api", "java"],
        responses: [
            "Himujjal's backend skills:\n🟢 Node.js — 80%\n🚂 Express.js — 75%\n🐍 Python — 70%\n🗄️ MySQL — 75%\n☕ Java\n\nHe builds robust server-side applications and REST APIs."
        ]
    },
    {
        keywords: ["n8n", "automation", "metabase", "data", "workflow", "tools", "git", "github"],
        responses: [
            "Himujjal's tools & specialties:\n⚙️ n8n — workflow automation expert\n📊 Metabase — data visualization\n🐙 Git & GitHub — version control\n\nHe's especially strong in automating workflows and building data dashboards!"
        ]
    },
    {
        keywords: ["skill", "skills", "tech stack", "technologies", "know", "good at", "expertise", "proficient", "languages", "what can he do"],
        responses: [
            "Himujjal's full tech stack:\n\n🖥️ Frontend: HTML (95%), CSS (90%), JavaScript (85%), Bootstrap (80%), jQuery\n⚙️ Backend: Node.js (80%), Express.js (75%), MySQL (75%), Python (70%), Java\n🔧 Tools: n8n, Metabase, Git, GitHub\n\nRole: Data Analyst & Full Stack Developer 🚀"
        ]
    },
    {
        keywords: ["project", "projects", "built", "created", "made", "developed", "applications", "apps", "all projects"],
        responses: [
            "Himujjal has built 15+ projects! Here are the highlights:\n\n📌 AI ChatBot with RAG (Python, AI)\n📌 Automated Gmail Reply (n8n)\n📌 Online Coding Discussion Forum (PHP, MySQL)\n📌 Music Player (HTML, CSS, JS)\n📌 Chronic Kidney Disease Prediction (ML, Python)\n📌 Food Delivery Website (HTML, CSS, JS)\n📌 Drum Kit (JavaScript)\n📌 AI Research & Report Generator (n8n)\n📌 AI Resume Analyzer & Job Matcher (Gemini AI)\n📌 Portfolio Website (this site!)\n\nAsk me about any specific project!"
        ]
    },
    {
        keywords: ["resume", "analyzer", "job matcher"],
        responses: [
            "The AI Resume Analyzer & Job Matcher is one of Himujjal's standout projects! 🚀\n\nIt uses Gemini AI to analyze resumes and send personalized job recommendations via email.\n\nTech: n8n, Gemini AI, JavaScript\n🔗 GitHub: github.com/Himujjal-Borah/AI-Resume-Analyzer-Job-Matcher"
        ]
    },
    {
        keywords: ["chatbot", "rag", "retrieval", "ai chatbot"],
        responses: [
            "Himujjal built an AI ChatBot using RAG (Retrieval-Augmented Generation)! 🤖\n\nIt accurately answers specific questions by retrieving relevant data before responding.\n\nTech: Python, AI/RAG\n🔗 GitHub: github.com/Himujjal-Borah/AI-ChatBot-using-n8n"
        ]
    },
    {
        keywords: ["gmail", "email automation", "auto reply", "n8n workflow"],
        responses: [
            "Himujjal built an Automated Gmail Reply system using n8n! 📧\n\nIt automatically responds to incoming emails using n8n workflow nodes.\n\nHe also built an AI Research & Report Generator that researches a topic, creates a PDF, and emails it!\n\n🔗 GitHub: github.com/Himujjal-Borah"
        ]
    },
    {
        keywords: ["music", "music player"],
        responses: [
            "Himujjal built a responsive Music Player web app! 🎵\n\nFeatures: play/pause controls, track navigation, and dynamic UI — built with pure HTML, CSS, and JavaScript.\n\n🔗 GitHub: github.com/Himujjal-Borah/Music-Player"
        ]
    },
    {
        keywords: ["drum", "drum kit"],
        responses: [
            "The Drum Kit is a fun interactive project! 🥁\n\nPlay drum sounds using keyboard keys or mouse clicks, with real-time sound playback built in JavaScript.\n\n🔗 GitHub: github.com/Himujjal-Borah/Drum-kit"
        ]
    },
    {
        keywords: ["kidney", "disease", "prediction", "machine learning", "ml", "data science"],
        responses: [
            "Himujjal built a Chronic Kidney Disease Prediction system! 🏥\n\nUses machine learning in Python to detect kidney disease from medical data — a great showcase of his data science skills.\n\nTech: Python, Machine Learning"
        ]
    },
    {
        keywords: ["food", "food delivery"],
        responses: [
            "Himujjal built a Food Delivery Website — a responsive frontend project with a clean ordering interface.\n\nTech: HTML, CSS, JavaScript\n🔗 GitHub: github.com/Himujjal-Borah"
        ]
    },
    {
        keywords: ["internship", "intern", "experience", "work experience", "previous", "past work", "pis", "elite"],
        responses: [
            "Himujjal's internship experience:\n\n💼 IT Tech Intern — Spectrus Sustainable Solutions (Dec 2025 – Mar 2026)\n💼 Full Web Dev Bootcamp — Udemy (June–Sept 2023)\n💼 Web Dev Intern — Pis IT Solutions (May 2022) — HTML, CSS, JS, PHP, MySQL\n💼 IT Hardware & Networking Intern — Elite Computers (April 2021)"
        ]
    },
    {
        keywords: ["certification", "certifications", "certificate", "certified", "course", "udemy"],
        responses: [
            "Himujjal's certifications:\n\n🏆 Full Web Development Bootcamp 2023 — Udemy\n🏆 Web Technologies — Pis IT Solutions\n\nHe's always upskilling and learning new technologies!"
        ]
    },
    {
        keywords: ["contact", "reach", "phone", "hire", "hiring", "available", "connect", "touch", "number", "how to contact"],
        responses: [
            "You can contact Himujjal Borah via:\n• Phone: 9101300899\n• Email: himujjalofficial@gmail.com\n• LinkedIn: linkedin.com/in/himujjal-borah-45710a292\n• GitHub: github.com/Himujjal-Borah"
        ]
    },
    {
        keywords: ["email", "mail", "gmail"],
        responses: [
            "You can email Himujjal at:\n📧 himujjalofficial@gmail.com\n\nHe's open to opportunities, collaborations, and freelance projects!"
        ]
    },
    {
        keywords: ["github", "linkedin", "social", "profile", "link"],
        responses: [
            "Find Himujjal online:\n\n🐙 GitHub: github.com/Himujjal-Borah\n💼 LinkedIn: linkedin.com/in/himujjal-borah-45710a292\n\nHis GitHub has all his project source code!"
        ]
    },
    {
        keywords: ["location", "where", "city", "state", "country", "based", "from", "assam", "india"],
        responses: [
            "Himujjal is based in Assam, India 🇮🇳. He's currently working at Spectrus Sustainable Solutions and is open to remote opportunities as well!"
        ]
    },
    {
        keywords: ["strength", "strengths", "best at", "good at", "qualities", "passionate"],
        responses: [
            "Himujjal's key strengths:\n\n🚀 Quick Learner — adapts fast to new tech\n💡 Problem Solver — strong analytical thinking\n🧹 Clean Code — writes maintainable, efficient code\n🤖 Automation Expert — experienced with n8n workflows\n📊 Data-Driven — Metabase dashboards and data visualization"
        ]
    },
    {
        keywords: ["hire", "open to work", "freelance", "opportunity", "job offer", "recruit", "available for"],
        responses: [
            "Himujjal is open to exciting opportunities! 🎯\n\n📧 himujjalofficial@gmail.com\n📞 9101300899\n\nHe's skilled in full-stack development, data analysis, and AI automation — a great hire for any tech team!"
        ]
    },
    {
        keywords: ["cv", "resume", "download"],
        responses: [
            "You can download Himujjal's CV using the 'Download CV' button on the home section of this portfolio! 📄\n\nOr contact him at himujjalofficial@gmail.com to request his latest resume."
        ]
    },
    {
        keywords: ["thank", "thanks", "bye", "goodbye", "see you", "great", "awesome", "nice", "cool", "helpful", "good"],
        responses: [
            "You're welcome! 😊 Feel free to ask anything else about Himujjal!",
            "Glad I could help! 🙌 Don't forget to check out his GitHub and reach out if you'd like to collaborate!",
            "Thanks for stopping by! 👋 Hope to see you connect with Himujjal soon!"
        ]
    }
];

const FALLBACK_RESPONSES = [
    "Hmm, I'm not sure about that. Try asking about Himujjal's skills, projects, experience, education, or how to contact him! 😊",
    "I didn't quite catch that! Ask me about his skills, projects, internships, education, or contact info.",
    "That's a bit outside what I know! You can also reach Himujjal directly at himujjalofficial@gmail.com 📧"
];

function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    for (const intent of BOT_RESPONSES) {
        let score = 0;
        for (const keyword of intent.keywords) {
            if (msg.includes(keyword)) {
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

    document.getElementById("suggestionChips").style.display = "none";
    addMessage(message, "user");
    input.value = "";
    setInputDisabled(true);
    setTyping(true);

    const delay = 500 + Math.random() * 700;
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
    const input    = document.getElementById("userInput");
    const sendBtn  = document.getElementById("sendBtn");
    const clearBtn = document.getElementById("clearChatBtn");
    const chips    = document.querySelectorAll(".chip");

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


/* ================================================
   PARTICLES.JS CONFIG — Hero Background
   ================================================ */
document.addEventListener("DOMContentLoaded", function () {
    if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 900 } },
                color: { value: "#06b6d4" },
                shape: { type: "circle" },
                opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1 } },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 140, color: "#06b6d4", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1.8, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 160, line_linked: { opacity: 0.5 } }, push: { particles_nb: 3 } }
            },
            retina_detect: true
        });
    }
});

/* ================================================
   PROJECT DETAIL MODALS
   ================================================ */
const PROJECTS = [
    {
        icon: "fas fa-comments", badge: "PHP/MySQL", title: "Online Coding Discussion Forum",
        desc: "A full-stack PHP and MySQL web application where users can register accounts, share ideas, post questions, and discuss various coding topics in a community forum.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        features: ["User registration and login system", "Create, edit, and delete discussion posts", "Comment and reply functionality", "Category-based topic filtering", "Responsive design for all devices"],
        github: "https://github.com/Himujjal-Borah", live: "#"
    },
    {
        icon: "fas fa-heartbeat", badge: "Machine Learning", title: "Chronic Kidney Disease Prediction",
        desc: "A machine learning project that uses predictive algorithms to detect chronic kidney disease from patient data. Built with Python and trained on medical datasets.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Science"],
        features: ["Preprocessing and cleaning medical datasets", "Feature selection and correlation analysis", "Multiple ML model comparison", "Accuracy metrics and evaluation reports", "Early disease detection capability"],
        github: "https://github.com/Himujjal-Borah", live: "#"
    },
    {
        icon: "fas fa-utensils", badge: "Frontend", title: "Food Delivery Website",
        desc: "A fully responsive food delivery frontend built with HTML, CSS, and JavaScript. Features a modern UI with food categories, cart interaction, and smooth animations.",
        tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        features: ["Responsive layout for mobile and desktop", "Food category browsing", "Interactive cart UI", "Smooth CSS animations", "Clean modern design"],
        github: "https://github.com/Himujjal-Borah", live: "#"
    },
    {
        icon: "fas fa-envelope-open-text", badge: "Automation", title: "Automated Gmail Reply",
        desc: "An intelligent email automation system built with n8n that monitors your Gmail inbox and automatically sends smart replies based on predefined rules and AI logic.",
        tech: ["n8n", "Gmail API", "JavaScript", "Automation", "Webhooks"],
        features: ["Auto-detect incoming emails by keyword or sender", "AI-generated smart reply content", "Custom reply templates", "Trigger-based workflow execution", "Email logging and tracking"],
        github: "https://github.com/Himujjal-Borah/AI-ChatBot-using-n8n", live: "#"
    },
    {
        icon: "fas fa-robot", badge: "AI/ML", title: "AI ChatBot with RAG",
        desc: "An intelligent chatbot powered by Retrieval-Augmented Generation (RAG). It retrieves context from a knowledge base before answering, making responses highly accurate.",
        tech: ["Python", "RAG", "LLM", "Vector DB", "AI"],
        features: ["Document ingestion and vector embedding", "Semantic search for context retrieval", "LLM-powered answer generation", "Conversation memory", "Accurate domain-specific responses"],
        github: "https://github.com/Himujjal-Borah/AI-ChatBot-using-n8n", live: "#"
    },
    {
        icon: "fas fa-music", badge: "Frontend", title: "Music Player",
        desc: "A responsive music player web application with a sleek UI. Features full playback controls, dynamic track info updates, and smooth user experience.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
        features: ["Play, pause, next, previous controls", "Dynamic track title and artist display", "Progress bar with seek functionality", "Volume control", "Responsive and animated UI"],
        github: "https://github.com/Himujjal-Borah/Music-Player", live: "#"
    },
    {
        icon: "fas fa-drum", badge: "Interactive", title: "Drum Kit",
        desc: "An interactive browser-based drum kit that lets you play drum sounds using keyboard keys or mouse clicks. Built entirely with vanilla JavaScript.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
        features: ["9 drum pad sounds mapped to keyboard keys", "Mouse click support for all pads", "Visual feedback on key press", "Smooth animations on hit", "Zero dependencies — pure vanilla JS"],
        github: "https://github.com/Himujjal-Borah/Drum-kit", live: "#"
    },
    {
        icon: "fas fa-file-alt", badge: "Automation", title: "AI Research & Report Generator",
        desc: "An advanced n8n workflow that takes a user-submitted research topic, uses AI to research it thoroughly, generates a formatted PDF report, and emails the insights automatically.",
        tech: ["n8n", "AI/LLM", "PDF Generation", "Gmail API", "Webhooks"],
        features: ["Topic intake via webhook trigger", "AI-powered web research and summarization", "Automatic PDF report formatting", "Email delivery with attachment", "End-to-end automation — zero manual steps"],
        github: "https://github.com/Himujjal-Borah/AI-Research-and-Report-generatort", live: "#"
    },
    {
        icon: "fas fa-briefcase", badge: "AI/Automation", title: "AI Resume Analyzer & Job Matcher",
        desc: "An AI-powered system that accepts uploaded resumes, analyzes skills and experience using Gemini AI, and automatically sends personalized job recommendations directly to the candidate's inbox.",
        tech: ["n8n", "Gemini AI", "JavaScript", "Gmail API", "PDF Parsing"],
        features: ["Resume PDF upload and text extraction", "AI skill and experience analysis", "Job matching algorithm using Gemini", "Personalized recommendation email", "Fully automated end-to-end pipeline"],
        github: "https://github.com/Himujjal-Borah/AI-Resume-Analyzer-Job-Matcher", live: "#"
    }
];

function openModal(idx) {
    const p = PROJECTS[idx];
    document.getElementById("modalIcon").innerHTML = '<i class="' + p.icon + '"></i>';
    document.getElementById("modalBadge").innerHTML = '<span>' + p.badge + '</span>';
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDesc").textContent = p.desc;
    document.getElementById("modalTech").innerHTML = p.tech.map(t => '<span>' + t + '</span>').join('');
    document.getElementById("modalFeatures").innerHTML = p.features.map(f => '<li>' + f + '</li>').join('');
    document.getElementById("modalActions").innerHTML =
        '<a href="' + p.github + '" target="_blank" class="modal-btn-github"><i class="fab fa-github"></i> View Code</a>' +
        (p.live !== '#' ? '<a href="' + p.live + '" target="_blank" class="modal-btn-live"><i class="fas fa-external-link-alt"></i> Live Demo</a>' : '');
    document.getElementById("projectModalOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("projectModalOverlay").classList.remove("open");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
});

