// Simple JavaScript for navigation active state
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = location.href;
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Loop through each link
    navLinks.forEach(link => {
        // Add active class to current page link
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
    
    // Add animation to stats when they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    stat.style.opacity = 1;
                    stat.style.transform = 'translateY(0)';
                });
            }
        });
    }, { threshold: 0.5 });
    
    // Initialize stat number styles
    statNumbers.forEach(stat => {
        stat.style.opacity = 0;
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Observe the first stat item to trigger animation
    if (statNumbers.length > 0) {
        observer.observe(statNumbers[0].parentElement);
    }
});