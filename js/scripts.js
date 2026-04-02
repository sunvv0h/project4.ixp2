// Theme toggle + simple menu trigger
document.addEventListener('DOMContentLoaded', function() {
  var menuTrigger = document.querySelector('.js-menu-trigger');
  var themeToggle = document.getElementById('theme-toggle');

  // Menu trigger: toggle class on the header to limit layout scope
  if (menuTrigger) {
    menuTrigger.addEventListener('click', function() {
      var headerEl = document.querySelector('.site-header');
      if (!headerEl) return;
      headerEl.classList.toggle('show-menu');
    });
  }

  // Initialize theme from localStorage and set button label
  var current = localStorage.getItem('theme');
  if (current === 'dark') {
    document.body.classList.add('dark');
  }

  function updateThemeButton() {
    if (!themeToggle) return;
    var isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? 'light' : 'dark';
    themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  updateThemeButton();

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var isDark = document.body.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeButton();
    });
  }
});