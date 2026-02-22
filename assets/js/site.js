const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const animatedNodes = document.querySelectorAll('.service-card, .service-detail article, .testimonial, .hero-card, .capability-item');
animatedNodes.forEach((node, index) => {
  node.classList.add('fade-in');
  node.style.animationDelay = `${Math.min(index * 70, 350)}ms`;
});

const form = document.querySelector('.quote-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Request Submitted';
      button.setAttribute('disabled', 'true');
    }
    const notice = document.createElement('p');
    notice.className = 'eyebrow';
    notice.textContent = 'Thanks. We will contact you shortly.';
    form.append(notice);
    form.reset();
  });
}
