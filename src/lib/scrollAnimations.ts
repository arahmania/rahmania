/**
 * Scroll Animation Handler
 * Menggunakan Intersection Observer API untuk trigger animations saat elements masuk viewport
 */

export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animation class
  document.querySelectorAll('.scroll-animation').forEach((el) => {
    observer.observe(el);
  });

  // Observe all cards
  document.querySelectorAll('[data-animate="card"]').forEach((el) => {
    observer.observe(el);
  });

  // Observe section titles
  document.querySelectorAll('[data-animate="section-title"]').forEach((el) => {
    observer.observe(el);
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
