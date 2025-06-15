// main.js

// Function to update copyright year and last modified date
function updateFooterDates() {
    // Get current year
    const currentYear = new Date().getFullYear();
    
    // Update copyright year
    document.getElementById('currentyear').textContent = currentYear;
    
    // Update last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Function to initialize portal functionality
function initPortal() {
    const portalLink = document.getElementById('portal-link');
    const portalModal = document.getElementById('portal-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Portal link click handler
    portalLink.addEventListener('click', (e) => {
        e.preventDefault();
        portalModal.classList.remove('hidden');
    });
    
    // Close modal handlers
    closeModal.addEventListener('click', () => {
        portalModal.classList.add('hidden');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === portalModal) {
            portalModal.classList.add('hidden');
        }
    });
    
    // Portal login form handler
    const portalLoginForm = document.getElementById('portal-login');
    const portalMessage = document.getElementById('portal-message');
    
    portalLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation (in a real app, this would be more secure)
        if (username && password) {
            portalMessage.textContent = "Login successful! Redirecting...";
            portalMessage.style.color = "green";
            portalMessage.classList.remove('hidden');
            
            // Simulate redirect
            setTimeout(() => {
                portalModal.classList.add('hidden');
                portalMessage.classList.add('hidden');
                portalLoginForm.reset();
                alert(`Welcome, ${username}! This is a demo portal.`);
            }, 1500);
        } else {
            portalMessage.textContent = "Please enter both username and password";
            portalMessage.style.color = "red";
            portalMessage.classList.remove('hidden');
        }
    });
}

// Mobile menu toggle functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');
    
    mobileMenuToggle.addEventListener('click', () => {
        const visibility = primaryNavigation.getAttribute('data-visible');
        
        if (visibility === "false") {
            primaryNavigation.setAttribute('data-visible', "true");
            mobileMenuToggle.setAttribute('aria-expanded', "true");
        } else {
            primaryNavigation.setAttribute('data-visible', "false");
            mobileMenuToggle.setAttribute('aria-expanded', "false");
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateFooterDates();
    initPortal();
    initMobileMenu();
});