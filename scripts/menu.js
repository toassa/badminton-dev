document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarMenu = document.getElementById('navbar-menu');

    if (hamburgerBtn && navbarMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navbarMenu.classList.toggle('open');
            const isExpanded = navbarMenu.classList.contains('open');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
});