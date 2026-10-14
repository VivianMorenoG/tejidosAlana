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
   5. FORMULARIOS — VALIDACIÓN SEGURA
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario-contacto');

    if (formulario) {
        console.log('Formulario encontrado ✅');

        // ===== SELECCIÓN DE ELEMENTOS =====
        const nombre = document.querySelector('#nombre');
        const correo = document.querySelector('#correo');
        const telefono = document.querySelector('#telefono');
        const provincia = document.querySelector('#provincia');
        const mensaje = document.querySelector('#mensaje');
        const estado = document.querySelector('#estado-formulario');

        // ===== FUNCIÓN: ESTABLECER ERROR =====
        const establecerError = (campo, elementoError, texto) => {
            campo.setCustomValidity(texto);
            campo.setAttribute('aria-invalid', texto ? 'true' : 'false');
            elementoError.textContent = texto;
        };

        // ===== VALIDAR NOMBRE =====
        const validarNombre = () => {
            const valor = nombre.value.trim();
            let error = '';

            if (valor.length === 0) {
                error = 'Escriba su nombre.';
            } else if (valor.length < 2) {
                error = 'El nombre debe tener al menos 2 caracteres.';
            } else if (valor.length > 80) {
                error = 'El nombre no puede superar 80 caracteres.';
            } else if (/[\u0000-\u001F\u007F]/u.test(valor)) {
                error = 'El nombre contiene caracteres no permitidos.';
            }

            establecerError(nombre, document.querySelector('#error-nombre'), error);
            return error === '';
        };

        // ===== VALIDAR CORREO =====
        const validarCorreo = () => {
            const valor = correo.value.trim();
            let error = '';

            if (valor.length === 0) {
                error = 'Escriba su correo electrónico.';
            } else if (valor.length > 254) {
                error = 'El correo no puede superar 254 caracteres.';
            } else if (/[\s\u0000-\u001F\u007F]/u.test(valor)) {
                error = 'El correo no puede contener espacios.';
            } else if (!correo.validity.valid) {
                error = 'Revise el formato del correo electrónico.';
            } else {
                const partes = valor.split('@');
                if (partes.length !== 2) {
                    error = 'Introduzca una sola dirección de correo.';
                } else {
                    const [usuario, dominio] = partes;
                    const etiquetas = dominio.split('.');

                    if (
                        usuario.length > 64 ||
                        usuario.startsWith('.') ||
                        usuario.endsWith('.') ||
                        usuario.includes('..')
                    ) {
                        error = 'Revise la parte del correo anterior a la arroba.';
                    } else if (
                        etiquetas.length < 2 ||
                        etiquetas.some(
                            (etiqueta) =>
                                etiqueta.length === 0 ||
                                etiqueta.length > 63 ||
                                !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(etiqueta)
                        )
                    ) {
                        error = 'Introduzca un dominio de correo válido.';
                    }
                }
            }

            establecerError(correo, document.querySelector('#error-correo'), error);
            return error === '';
        };

        // ===== VALIDAR TELÉFONO =====
        const validarTelefono = () => {
            const valor = telefono.value.trim();
            let error = '';

            if (valor.length === 0) {
                error = 'Escriba su teléfono.';
            } else if (!/^[0-9]{8}$/.test(valor)) {
                error = 'El teléfono debe tener 8 dígitos (sin espacios).';
            }

            establecerError(telefono, document.querySelector('#error-telefono'), error);
            return error === '';
        };

        // ===== VALIDAR PROVINCIA =====
        const validarProvincia = () => {
            const valor = provincia.value;
            let error = '';

            if (valor === '') {
                error = 'Seleccione su provincia.';
            }

            establecerError(provincia, document.querySelector('#error-provincia'), error);
            return error === '';
        };

        // ===== VALIDAR MENSAJE =====
        const validarMensaje = () => {
            const valor = mensaje.value.trim();
            let error = '';

            if (valor.length === 0) {
                error = 'Escriba su mensaje.';
            } else if (valor.length < 10) {
                error = 'El mensaje debe tener al menos 10 caracteres.';
            } else if (valor.length > 1000) {
                error = 'El mensaje no puede superar 1000 caracteres.';
            } else if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(valor)) {
                error = 'El mensaje contiene caracteres no permitidos.';
            }

            establecerError(mensaje, document.querySelector('#error-mensaje'), error);
            return error === '';
        };

        // ===== VALIDAR AL MODIFICAR LOS CAMPOS =====
        nombre.addEventListener('input', validarNombre);
        correo.addEventListener('input', validarCorreo);
        telefono.addEventListener('input', validarTelefono);
        provincia.addEventListener('change', validarProvincia);
        mensaje.addEventListener('input', validarMensaje);

        // ===== VALIDAR AL ENVIAR =====
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nombreValido = validarNombre();
            const correoValido = validarCorreo();
            const telefonoValido = validarTelefono();
            const provinciaValida = validarProvincia();
            const mensajeValido = validarMensaje();

            // Si hay errores
            if (
                !nombreValido ||
                !correoValido ||
                !telefonoValido ||
                !provinciaValida ||
                !mensajeValido
            ) {
                estado.textContent = 'Revise los campos indicados antes de continuar.';
                estado.className = 'aviso';
                formulario.reportValidity();

                // Enfocar el primer campo inválido
                const primerInvalido = formulario.querySelector('[aria-invalid="true"]');
                if (primerInvalido) {
                    primerInvalido.focus();
                }
                return;
            }

            // Éxito
            estado.textContent = '✅ Validación correcta. Los datos están listos para la siguiente etapa.';
            estado.className = 'exito';

            // NO mostrar datos sensibles en consola
            console.log('✅ Formulario validado correctamente');
            console.log('Todos los campos son válidos');

            // Limpiar formulario
            formulario.reset();

            // Limpiar los estados de error
            const campos = formulario.querySelectorAll('input, textarea, select');
            campos.forEach((campo) => {
                campo.setAttribute('aria-invalid', 'false');
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