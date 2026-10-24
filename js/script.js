

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change button text
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = "Light Mode";
  } else {
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
