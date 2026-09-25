/* ============================================
   TEJIDOS ALANA — SCRIPT PRINCIPAL
   Funcionalidades: año dinámico + botón volver arriba
   ============================================ */

// ===== 1. AÑO DINÁMICO EN EL FOOTER =====
// Actualiza automáticamente el año del copyright
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('footer p:first-of-type');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
    }
});

// ===== 2. BOTÓN FLOTANTE "VOLVER ARRIBA" =====
// Crea y gestiona un botón flotante para volver al inicio
document.addEventListener('DOMContentLoaded', () => {
    // Crear el botón
    const btnTop = document.createElement('a');
    btnTop.href = '#inicio';
    btnTop.className = 'btn-top';
    btnTop.setAttribute('aria-label', 'Volver arriba');
    btnTop.textContent = '⬆';
    document.body.appendChild(btnTop);

    // Mostrar/ocultar según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTop.classList.add('visible');
        } else {
            btnTop.classList.remove('visible');
        }
    });
});