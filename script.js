document.addEventListener('DOMContentLoaded', () => {
  // Typing animation
  new Typed('.typing', {
    strings: ['Highly Motivated', 'Research', 'Critical thinking', 'Problem-solving', 'Communication', 'Collaboration', 'Curiosity', 'Attention to detail', 'Empathy', 'Ethical reasoning', 'Adaptability', 'Time management', 'Resilience'],
    typeSpeed: 100, backSpeed: 50, loop: true
  });

  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-bs-theme', saved);
  toggle.checked = (saved === 'dark');

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  });

  const toggler = document.getElementById('customToggler');
  const bsTogglerButton = document.querySelector('.navbar-toggler');

  bsTogglerButton.addEventListener('click', () => {
  toggler.classList.toggle('open');
  });
  
});
