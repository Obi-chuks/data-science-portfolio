// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = `
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    `;
    document.querySelector('nav').appendChild(burger);

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
};

// Scroll reveal animation
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Form validation and submission
const validateForm = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    
    if (name && email && message) {
        // Prepare email content
        const mailtoLink = `mailto:obichuks30@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Message sent successfully!';
        form.appendChild(successMessage);
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Clear form
        form.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
    
    return false;
};

// Typing effect for hero section
const typeWriter = () => {
    const text = "Transforming data into actionable insights";
    const heroP = document.querySelector('.hero-content p');
    heroP.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            heroP.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    type();
};

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    createMobileNav();
    typeWriter();
    window.addEventListener('scroll', revealOnScroll);
    
    // Add form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
}); 