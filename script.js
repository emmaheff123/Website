const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
