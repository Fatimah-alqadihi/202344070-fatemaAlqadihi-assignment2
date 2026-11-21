

const toggleBtn = document.getElementById('theme-toggle');
const themeMessage = document.getElementById('theme-message');

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = "Light Mode";
} else {
    toggleBtn.textContent = "Dark Mode";
}

// Function to show message
function showThemeMessage() {
    themeMessage.classList.remove('hidden');
    themeMessage.classList.add('show');

    setTimeout(() => {
        themeMessage.classList.remove('show');
        setTimeout(() => {
            themeMessage.classList.add('hidden');
        }, 400);
    }, 1500);
}

// Toggle theme + save preference
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = "Dark Mode";
    }

    // Show feedback message
    showThemeMessage();
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

const repoContainer = document.getElementById("repo-container");

fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")
  .then(response => response.json())
  .then(data => {
    data.slice(0, 5).forEach(repo => {
      const repoCard = document.createElement("div");

      repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;

      repoContainer.appendChild(repoCard);
    });
  })
  .catch(error => {
    repoContainer.innerHTML =
      "<p>Unable to load repositories at the moment.</p>";
  });
