// Smooth scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = 'Chuyển <i class="bi bi-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.innerHTML = 'Chuyển <i class="bi bi-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Kiểm tra theme khi tải trang
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = 'Chuyển <i class="bi bi-sun"></i>';
} else {
    themeToggleBtn.innerHTML = 'Chuyển <i class="bi bi-moon"></i>';
}