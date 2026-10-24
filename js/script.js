

const toggleBtn = document.getElementById('theme-toggle');

// 1. Load saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = "Light Mode";
} else {
    toggleBtn.textContent = "Dark Mode";
}

// 2. Toggle theme + save preference
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = "Dark Mode";
    }
});

// Show / Hide Project Details
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;

    if (details.style.display === "block") {
      details.style.display = "none";
      btn.textContent = "Show Details";
    } else {
      details.style.display = "block";
      btn.textContent = "Hide Details";
    }
  });
});
