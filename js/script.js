/* ============================================
   TEJIDOS ALANA — SCRIPT PRINCIPAL
   Día 12: JavaScript moderno y DOM
   Funcionalidades: diagnóstico + año dinámico + botón volver arriba
   ============================================ */

/* =====================================================
   1. ELEMENTOS DEL DOM
   ===================================================== */

// Diagnóstico: comprobar que JavaScript se carga
console.log('¡JavaScript está conectado! ✅');

// Elementos principales del sitio
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const navLinks = document.querySelectorAll('.nav-links a');
const productosGrid = document.querySelector('.productos-grid');
const footer = document.querySelector('footer');

// Elementos de interacción
const btnTop = document.querySelector('.btn-top');

/* =====================================================
   2. VARIABLES
   ===================================================== */

// Variable para el año dinámico
const yearElement = document.querySelector('footer p:first-of-type');

/* =====================================================
   3. FUNCIONES
   ===================================================== */

// Función para actualizar el año del footer
const actualizarAño = () => {
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
        console.log('Año actualizado a:', currentYear);
    }
};

// Función para crear el botón flotante
const crearBotonFlotante = () => {
    const btn = document.createElement('a');
    btn.href = '#inicio';
    btn.className = 'btn-top';
    btn.setAttribute('aria-label', 'Volver arriba');
    btn.textContent = '⬆';
    document.body.appendChild(btn);
    console.log('Botón flotante creado ✅');
    return btn;
};

// Función para mostrar/ocultar el botón flotante
const gestionarScroll = (btn) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
};

/* =====================================================
   4. EVENTOS
   ===================================================== */

// Ninguno por ahora (los eventos están en las funciones)

/* =====================================================
   5. FORMULARIOS
   ===================================================== */

// No aplica todavía (se hará en el Día 14)

/* =====================================================
   6. NAVEGACIÓN — MENÚ MÓVIL
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los elementos
    const btnMenu = document.querySelector('#btn-menu');
    const menuPrincipal = document.querySelector('#menu-principal');

    // Comprobar que existen
    if (btnMenu && menuPrincipal) {
        console.log('Menú móvil: elementos encontrados ✅');

        // Función para alternar el menú
        const alternarMenu = () => {
            const abierto = menuPrincipal.classList.toggle('activo');
            btnMenu.setAttribute('aria-expanded', abierto);
            console.log('Menú:', abierto ? 'abierto ✅' : 'cerrado ❌');
        };

        // Evento click en el botón
        btnMenu.addEventListener('click', alternarMenu);

        // Cerrar el menú al hacer clic en un enlace (solo en móvil)
        const enlacesMenu = menuPrincipal.querySelectorAll('a');
        enlacesMenu.forEach((enlace) => {
            enlace.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuPrincipal.classList.remove('activo');
                    btnMenu.setAttribute('aria-expanded', 'false');
                    console.log('Menú cerrado al hacer clic en un enlace ✅');
                }
            });
        });
    }
});


/* =====================================================
   7. MODALES
   ===================================================== */

// No aplica todavía

/* =====================================================
   8. INICIALIZACIÓN
   ===================================================== */

// Código que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Diagnóstico del DOM
    console.log('--- Diagnóstico del DOM ---');
    console.log('Header encontrado:', header);
    console.log('Hero encontrado:', hero);
    console.log('Enlaces del nav encontrados:', navLinks.length);
    console.log('Grid de productos encontrado:', productosGrid);
    console.log('Footer encontrado:', footer);

    // Actualizar el año
    actualizarAño();

    // Crear y gestionar el botón flotante
    const botonFlotante = crearBotonFlotante();
    gestionarScroll(botonFlotante);
});