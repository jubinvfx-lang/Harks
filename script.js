/* HARKS website settings — update these before publishing. */
const HARKS_CONFIG = {
  contactEmail: "", // Example: "hello@harks.in"
  whatsappNumber: "" // Optional: country code + number, digits only, e.g. "919876543210"
};

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Package buttons preselect the matching package in the enquiry form.
document.querySelectorAll('[data-package]').forEach(button => {
  button.addEventListener('click', () => {
    const message = document.getElementById('message');
    const service = document.getElementById('service');
    if (message) message.value = `I'm interested in the ${button.dataset.package} package. Please share the next steps.`;
    if (service) service.value = 'Monthly package';
  });
});

// Contact form creates an email draft. Configure contactEmail above before launch.
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const service = String(data.get('service') || '').trim();
    const budget = String(data.get('budget') || 'Not sure yet').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`HARKS project enquiry — ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\nEstimated budget: ${budget}\n\nProject details:\n${message || 'Not provided'}`);
    if (HARKS_CONFIG.contactEmail && HARKS_CONFIG.contactEmail.includes('@')) {
      window.location.href = `mailto:${HARKS_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
      if (feedback) feedback.textContent = 'Your email draft is being opened. Please send it to complete your enquiry.';
    } else {
      const fallbackText = `Thanks, ${name}. Your details are ready, but HARKS needs to add its contact email in script.js before this form can send an enquiry. Email: ${email}; Service: ${service}; Budget: ${budget}.`;
      if (feedback) feedback.textContent = fallbackText;
      const copyText = `HARKS PROJECT ENQUIRY\nName: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nDetails: ${message || 'Not provided'}`;
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(copyText).catch(() => {});
    }
  });
}

// Gentle reveal-on-scroll animation.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
