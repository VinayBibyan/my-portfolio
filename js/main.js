/* =====================================================
   RESUME LINK — update only this URL to change everywhere
   ===================================================== */
const RESUME_URL = 'https://drive.google.com/file/d/1fQrrbtTrHsTQ8P53qcyI2Dqlj_3KIwqw/view?usp=sharing';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-resume-link]').forEach(el => {
    el.href = RESUME_URL;
  });
});

/* =====================================================
   SCROLL PROGRESS BAR
   ===================================================== */
const progressBar = document.querySelector('.scroll-progress-bar');
const siteHeader = document.querySelector('.site-header');

function updateScrollProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const current = window.scrollY;
  progressBar.style.width = (current / total * 100) + '%';
}

/* =====================================================
   HEADER SCROLL STATE
   ===================================================== */
function updateHeaderState() {
  if (window.scrollY > 50) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
}

/* =====================================================
   ACTIVE NAV LINK HIGHLIGHTING
   ===================================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navigation-links a');

function updateActiveNavLink() {
  let current = '';

  sections.forEach((section) => {
    const top = section.offsetTop - 160;
    const height = section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* =====================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ===================================================== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

/* =====================================================
   EVENT LISTENERS
   ===================================================== */
window.addEventListener('scroll', () => {
  updateScrollProgress();
  updateHeaderState();
  updateActiveNavLink();
});

// Initialise on page load
updateScrollProgress();
