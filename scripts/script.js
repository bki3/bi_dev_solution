// Lightweight enhancements. Keep this file safe for static hosting.
// (No secrets, no API keys.)

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on file name.
  const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = document.querySelectorAll('.navbar .nav-link');

  links.forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href === current) {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
