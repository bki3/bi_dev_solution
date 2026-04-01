// Lightweight enhancements. Keep this file safe for static hosting.
// (No secrets, no API keys.)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');

  if (!form || !msg) return;

  const showMessage = (text, type) => {
    msg.style.display = 'block';
    msg.classList.remove('alert-success', 'alert-danger', 'alert-warning', 'alert-info');
    msg.classList.add(`alert-${type}`);
    msg.textContent = text;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      showMessage('Please complete the required fields highlighted above.', 'warning');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      const formData = new FormData(form);

      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        form.classList.remove('was-validated');
        showMessage("Thanks — your message was sent successfully. We’ll reply within 1 business day.", 'success');
      } else {
        let data = null;
        try { data = await res.json(); } catch (_) {}

        const errorText =
          (data && data.errors && data.errors[0] && data.errors[0].message) ||
          'Sorry — something went wrong sending your message. Please try again or email support@bidevsolution.com.';

        showMessage(errorText, 'danger');
      }
    } catch (err) {
      showMessage('Network error — please check your connection and try again.', 'danger');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }
  });
});
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

