document.addEventListener('DOMContentLoaded', () => {
    // Simple reveal animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.plan-card').forEach(card => {
        // Initially invisible for scroll reveal (optional, since we have CSS fade-in for hero)
        // card.style.opacity = '0';
        // observer.observe(card);
    });
});
