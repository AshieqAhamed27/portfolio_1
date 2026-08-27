const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

if (themeToggle) {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const setTheme = (theme) => {
        const isDark = theme === 'dark';
        root.dataset.theme = theme;
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        themeToggle.querySelector('.theme-label').textContent = isDark ? 'Light mode' : 'Dark mode';
        localStorage.setItem('portfolio-theme', theme);
    };

    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    themeToggle.addEventListener('click', () => {
        setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
}
