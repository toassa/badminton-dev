document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // Alterar Tamanho da Fonte (Accessibility)
    // ==========================================

    const fontSubmenu = document.getElementById('submenu-font');
    const setFontSize = (size) => {
        document.body.classList.remove('font-small', 'font-large');
        
        if (size !== 'medium') {
            document.body.classList.add(`font-${size}`);
        }

        if (fontSubmenu) {
            fontSubmenu.querySelectorAll('a').forEach(link => {
                link.classList.remove('font-active');
            });
            const activeLink = fontSubmenu.querySelector(`[data-font-size="${size}"]`);
            if (activeLink) {
                activeLink.classList.add('font-active');
            }
        }
        
        localStorage.setItem('fontSize', size);
    };

    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    setFontSize(savedFontSize);

    if (fontSubmenu) {
        fontSubmenu.addEventListener('click', (event) => {
            const link = event.target.closest('a[data-font-size]');
            if (link) {
                event.preventDefault(); 
                const size = link.getAttribute('data-font-size');
                setFontSize(size);
            }
        });
    }
});