const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.quote-link').forEach(link => {
  link.addEventListener('click', () => {
    const service = document.getElementById('service');
    const message = document.getElementById('message');
    const plan = link.dataset.plan || '';
    if (service) service.value = 'Monthly content package';
    if (message && !message.value) message.value = `I'm interested in the ${plan}. Please share the next steps.`;
  });
});

// Static website enquiry form: prepares an email draft addressed to HARKS.
const form = document.getElementById('enquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const service = String(data.get('service') || 'Not specified');
    const budget = String(data.get('budget') || 'Not specified');
    const message = String(data.get('message') || '').trim();
    const subject = `HARKS Project Enquiry — ${name}`;
    const body = [
      'Hello HARKS,',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Estimated budget: ${budget}`,
      '',
      'Project details:',
      message,
      '',
      'Please contact me about the next steps.'
    ].join('\n');
    const mailto = `mailto:jubinvfx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Opening your email app with the enquiry details…';
    window.location.href = mailto;
  });
}
