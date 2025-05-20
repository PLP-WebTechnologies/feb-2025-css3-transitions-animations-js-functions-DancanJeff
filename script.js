// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const notification = document.getElementById('notification');

// Theme Management
function setTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('darkTheme', isDark);
    showNotification();
}

function loadTheme() {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    setTheme(isDark);
    updateButtonText(isDark);
}

function updateButtonText(isDark) {
    themeToggle.textContent = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
}

// Notification Animation
function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Event Listeners
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    setTheme(!isDark);
    updateButtonText(!isDark);
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);