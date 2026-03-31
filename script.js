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
        'Data Analyst',
        'AI Automation Developer',
        'JavaScript Expert',
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
        link.href = 'HimujjalBorah_Resume (4).pdf'; // Your CV filename
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

    /*Contact Form → Send data to Webhook*/
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message")
        };

        try {
            const response = await fetch("http://147.93.29.200:5678/webhook/contact-me", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showNotification("Message sent successfully! 🚀");
                this.reset();
            } else {
                showNotification("Failed to send message.");
            }

        } catch (error) {
            console.error("Error:", error);
            showNotification("Server error. Please try again.");
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
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles for notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
            animation-fill-mode: forwards;
        `;
        
        // Add keyframes for animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
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


const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});


/* CHATBOT SECTION */
function addMessage(text, sender) {

const chatMessages = document.getElementById("chatMessages");

const messageDiv = document.createElement("div");

if(sender === "user"){
messageDiv.className = "user-message";
}else{
messageDiv.className = "bot-message";
}

messageDiv.textContent = text;

chatMessages.appendChild(messageDiv);

chatMessages.scrollTop = chatMessages.scrollHeight;

}
async function sendMessage(){

const message = input.value.trim();

if(!message) return;

addMessage(message,"user");

try{

const response = await fetch("http://147.93.29.200:5678/webhook/chatbot",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
});

const data = await response.json();

addMessage(data.reply,"bot");

}catch(error){

addMessage("Error connecting to chatbot","bot");

}

input.value="";
}

/* CONTACT FORM */

// document.getElementById("contactForm").addEventListener("submit", async function(e){

// e.preventDefault();

// const formData = new FormData(this);

// const data = {
// name: formData.get("name"),
// email: formData.get("email"),
// subject: formData.get("subject"),
// message: formData.get("message")
// };

// await fetch("http://147.93.29.200:5678/webhook/contact-me",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body: JSON.stringify(data)
// });

// alert("Message sent!");

// });


