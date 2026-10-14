/* ============================================
   TEJIDOS ALANA — SCRIPT PRINCIPAL
   Día 12: JavaScript moderno y DOM
   Funcionalidades: diagnóstico + año dinámico + botón volver arriba
   ============================================ */

/* =====================================================
   1. ELEMENTOS DEL DOM
   ===================================================== */

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
   5. FORMULARIOS — VALIDACIÓN
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario-contacto');

    if (formulario) {
        console.log('Formulario encontrado ✅');

        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            // Validación HTML5
            if (!formulario.checkValidity()) {
                console.warn('⚠️ El formulario tiene errores');
                formulario.reportValidity();
                return;
            }

            // Obtener valores
            const nombre = document.querySelector('#nombre').value.trim();
            const correo = document.querySelector('#correo').value.trim();
            const telefono = document.querySelector('#telefono').value.trim();
            const provincia = document.querySelector('#provincia').value;
            const mensaje = document.querySelector('#mensaje').value.trim();

            // Validar teléfono (8 dígitos)
            if (!/^[0-9]{8}$/.test(telefono)) {
                console.warn('⚠️ El teléfono debe tener 8 dígitos');
                alert('El teléfono debe tener 8 dígitos (sin guiones ni espacios).');
                return;
            }

            // Validar provincia seleccionada
            if (provincia === '') {
                console.warn('⚠️ Debes seleccionar una provincia');
                alert('Por favor, selecciona tu provincia.');
                return;
            }

            // Éxito (sin mostrar datos sensibles)
            console.log('✅ Formulario enviado correctamente');
            console.log('Nombre:', nombre.length, 'caracteres');
            console.log('Correo: válido');
            console.log('Teléfono: válido (8 dígitos)');
            console.log('Provincia seleccionada:', provincia);
            console.log('Mensaje:', mensaje.length, 'caracteres');

            // Mostrar mensaje de confirmación
            alert(`¡Gracias, ${nombre}! Hemos recibido tu mensaje desde ${provincia.replace('-', ' ')}. Te contactaremos pronto.`);

            // Limpiar formulario
            formulario.reset();
        });

        // Validación en tiempo real
        const campos = formulario.querySelectorAll('input, textarea, select');
        campos.forEach((campo) => {
            campo.addEventListener('blur', () => {
                if (campo.validity.valid) {
                    campo.classList.remove('error');
                    campo.classList.add('valido');
                } else {
                    campo.classList.remove('valido');
                    campo.classList.add('error');
                }
            });
        });
    }
});

/* =====================================================
   6. NAVEGACIÓN — MENÚ MÓVIL
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('#btn-menu');
    const menuPrincipal = document.querySelector('#menu-principal');

    if (btnMenu && menuPrincipal) {
        console.log('Menú móvil: elementos encontrados ✅');

        // ===== Función para cambiar el estado del menú =====
        const cambiarMenu = (abrir) => {
            menuPrincipal.classList.toggle('activo', abrir);
            btnMenu.setAttribute('aria-expanded', String(abrir));
            btnMenu.setAttribute(
                'aria-label',
                abrir ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
            );
            console.log('Menú:', abrir ? 'abierto ✅' : 'cerrado ❌');
        };

        // ===== Evento click en el botón =====
        btnMenu.addEventListener('click', () => {
            const estaAbierto = btnMenu.getAttribute('aria-expanded') === 'true';
            cambiarMenu(!estaAbierto);
        });

        // ===== Cerrar con tecla Escape =====
        document.addEventListener('keydown', (evento) => {
            if (
                evento.key === 'Escape' &&
                btnMenu.getAttribute('aria-expanded') === 'true'
            ) {
                cambiarMenu(false);
                btnMenu.focus();
                console.log('Menú cerrado con Escape ✅');
            }
        });

        // ===== Cerrar al hacer clic en un enlace (solo en móvil) =====
        menuPrincipal.querySelectorAll('a').forEach((enlace) => {
            enlace.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    cambiarMenu(false);
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