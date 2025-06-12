// Theme switching
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDarkScheme.matches) {
    setTheme('dark');
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

// Reading progress bar
const progressBar = document.querySelector('.reading-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.transform = `scaleX(${scrolled / 100})`;
  });
}

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(element => fadeObserver.observe(element));

// Typography controls
const typographyControls = document.querySelector('.typography-controls');
if (typographyControls) {
  const fontSizeInput = document.getElementById('font-size');
  const lineHeightInput = document.getElementById('line-height');
  const fontFamilyInput = document.getElementById('font-family');

  function updateTypography() {
    const fontSize = fontSizeInput.value;
    const lineHeight = lineHeightInput.value;
    const fontFamily = fontFamilyInput.value;

    document.documentElement.style.setProperty('--font-size-base', `${fontSize}rem`);
    document.documentElement.style.setProperty('--line-height-base', lineHeight);
    document.documentElement.style.setProperty('--font-sans', fontFamily === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)');
  }

  fontSizeInput.addEventListener('input', updateTypography);
  lineHeightInput.addEventListener('input', updateTypography);
  fontFamilyInput.addEventListener('change', updateTypography);
}

// Initialize theme
initTheme(); 