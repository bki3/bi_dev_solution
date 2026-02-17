// script.js — optional JS interactions for the nav
// 1) Highlights the current page button
// 2) Adds a click ripple-ish effect (simple)

(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a.nav-btn').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');

    a.addEventListener('click', () => {
      a.style.transform = 'translateY(-2px) scale(0.99)';
      setTimeout(() => (a.style.transform = ''), 140);
    });
  });
})();
