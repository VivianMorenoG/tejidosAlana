# Bitácora SCRUM — TEJIDOS ALANA
 
**Proyecto:** Tejidos Alana — Emprendimiento de tejidos artesanales
**Responsable:** Viviana Moreno
**Curso:** CSTI12009 — Desarrollo de Página Web
 
---
 
## Día 1 — 10/09/2026
 
### ¿Qué hice hoy?
- Configuré el entorno de trabajo (VS Code).
- Definí el proyecto: Tejidos Alana (emprendimiento de tejidos hechos a mano).
- Construí el `index.html` con HTML5 semántico (sin `<div>`).
- Establecí las 4 secciones principales: inicio, nosotros, productos y contacto.
 
### ¿Qué aprendí?
- Estructura semántica (`header`, `nav`, `main`, `section`, `footer`).
- Jerarquía correcta de títulos (`h1` a `h3`).
 
### Estado
✅ Día 1 completado
 
---
 
## Día 2 — 11/09/2026
 
### ¿Qué hice hoy?
- Añadí `scroll-behavior: smooth` para navegación fluida entre secciones.
- Agregué `meta description` para SEO básico.
- Incorporé el logotipo real del emprendimiento.
- Organicé la estructura de carpetas (`css/`, `js/`, `img/`).
 
### ¿Qué aprendí?
- Uso de anclas con `id` + `href`.
- Uso de `mailto:` y `tel:` para enlaces funcionales.
- Convención de nombres de archivos en minúsculas.
 
### Estado
✅ Día 2 completado
 
---
 
## Día 3 — 17/09/2026
 
### ¿Qué hice hoy?
- Creé el archivo `style.css` con las variables CSS en `:root`.
- Apliqué `box-sizing: border-box` de forma universal.
- Definí la paleta de colores extraída del logotipo (marrones, beige y crema).
- Implementé tipografía con `clamp()` para hacerla responsiva.
 
### ¿Qué aprendí?
- Variables CSS en `:root` y su reutilización con `var()`.
- Box model moderno.
 
### Estado
✅ Día 3 completado
 
---
 
## Día 4 — 18/09/2026
 
### ¿Qué hice hoy?
- Validé el `index.html` con W3C Markup Validation Service.
- Validé el `style.css` con W3C CSS Validator.
- Ambas validaciones sin errores.
 
### Estado
✅ Día 4 completado
 
---
 
## Día 5 — 23/09/2026
 
### ¿Qué hice hoy?
- Creé el Hero principal con el logotipo y el eslogan "Hecho a mano, pensado para ti".
- Estilicé la cabecera (`header`) con el logotipo fijo y menú horizontal.
 
### ¿Qué aprendí?
- Composición de un Hero profesional.
- Separación de conceptos visuales.
 
### Estado
✅ Día 5 completado
 
---
 
## Día 6 — 29/09/2026
 
### ¿Qué hice hoy?
- Revisé la navegación dentro de `<nav>` con `aria-label`.
- Agregué `:focus-visible` para mejorar la accesibilidad del foco.
- Verifiqué que los enlaces apunten a IDs existentes.
 
### ¿Qué aprendí?
- Importancia de `:focus-visible` para WCAG.
 
### Estado
✅ Día 6 completado
 
---
 
## Día 7 — 29/09/2026
 
### ¿Qué hice hoy?
- Reorganicé la sección de productos usando CSS Grid.
- Usé `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`.
- Apliqué `gap` para una separación consistente entre tarjetas.
 
### ¿Qué aprendí?
- Cómo funciona `auto-fit` + `minmax()` para grids adaptables.
 
### Estado
✅ Día 7 completado
 
---
 
## Día 8 — 30/09/2026
 
### ¿Qué hice hoy?
- Reorganicé el CSS por componentes y bloques lógicos.
- Identifiqué estilos repetidos (tarjetas, botones) y los unifiqué.
- Agregué estilos para las etiquetas de los productos.
 
### Estado
✅ Día 8 completado
 
---
 
## Día 9 — 01/10/2026
 
### ¿Qué hice hoy?
- Probé el sitio en múltiples tamaños de pantalla (móvil, tablet, escritorio).
- Ajusté el header y los menús para que se adaptaran a pantallas pequeñas.
- Aseguré que no hubiera scroll horizontal en ningún tamaño.
 
### Estado
✅ Día 9 completado
 
---
 
## Día 10 — 02/10/2026
 
### ¿Qué hice hoy?
- Consolidé el proyecto mediante un proceso de QA (Control de Calidad).
- Validé HTML y CSS: 0 errores.
- Comprobé el contraste de colores y la accesibilidad.
 
### Estado
✅ Día 10 completado
 
---
 
## Día 11 — 08/10/2026
 
### ¿Qué hice hoy?
- Creé el repositorio del proyecto en GitHub.
- Definí el nombre: `tejidos-alana`.
- Subí todos los archivos y realicé el primer commit.
 
### ¿Qué aprendí?
- Qué es un repositorio, un commit y el control de versiones.
 
### Estado
✅ Día 11 completado
 
---
 
## Día 12 — JavaScript y DOM
 
### ¿Qué hice hoy?
- Conecté el archivo `script.js` con el HTML.
- Añadí funciones para el año dinámico en el footer y el diagnóstico del DOM.
- Creé el botón flotante de "Volver arriba" desde JavaScript.
 
### ¿Qué aprendí?
- `document.addEventListener("DOMContentLoaded")`.
- Manipulación del DOM para crear elementos.
 
### Estado
✅ Día 12 completado
 
---
 
## Día 13 — Menú móvil accesible
 
### ¿Qué hice hoy?
- Añadí un botón real (`<button>`) para el menú móvil (hamburguesa).
- Implementé los atributos ARIA (`aria-expanded`, `aria-label`, `aria-controls`).
- Programé la apertura y cierre del menú con JavaScript.
 
### ¿Qué aprendí?
- Manejo de eventos y `classList.toggle`.
- Accesibilidad en menús desplegables.
 
### Estado
✅ Día 13 completado
 
---
 
## Día 14 — Validación del formulario de contacto
 
### ¿Qué hice hoy?
- Añadí atributos HTML de validación: `required`, `minlength`, `maxlength`, `pattern` y `type="email"`.
- Programé la validación en tiempo real usando JavaScript.
- Personalicé los mensajes de error en español.
 
### ¿Qué aprendí?
- `checkValidity()` y `setCustomValidity()`.
- Uso de `e.preventDefault()` para bloquear envíos no válidos.
 
### Estado
✅ Día 14 completado
 
---
 
## Día 15 — Integración de Formspree y mensaje de confirmación
 
### ¿Qué hice hoy?
- Configuré el formulario para enviar datos reales a Formspree.
- Modifiqué el evento `submit` para que, al validar correctamente, enviara los datos usando `fetch()` (sin recargar la página).
- Añadí un mensaje de éxito/error dinámico (`role="status"`).
 
### ¿Qué aprendí?
- Uso de `fetch()` con `async/await`.
- Manejo de formularios con `FormData`.
 
### Estado
✅ Día 15 completado
 
---
 
## Día 16 — Revisar la navegación completa con teclado
 
### ¿Qué hice hoy?
- Recorrí todo el sitio usando solo Tab, Shift+Tab, Enter y Escape.
- Corregí inconsistencias en el foco visible de los enlaces y campos.
 
### ¿Qué aprendí?
- Importancia de la consistencia visual en el foco.
 
### Estado
✅ Día 16 completado
 
---
 
## Día 17 — Accesibilidad visual y alternativas textuales
 
### ¿Qué hice hoy?
- Verifiqué los ratios de contraste con WebAIM.
- Revisé y mejoré los textos `alt` de las imágenes.
- Probé el zoom al 200% para asegurar que el contenido no se cortara.
 
### Estado
✅ Día 17 completado
 
---
 
## Día 18 — Migración de HTML5/CSS/JS a WordPress Local
 
**Fecha:** 23/10/2026
 
### ¿Qué hice hoy?
- Creé el sitio local en LocalWP (`tejidoalana`).
- Configuré el tema `tejido-alana` en `wp-content/themes`.
- Creé los archivos base: `style.css`, `functions.php`, `header.php`, `footer.php`, `index.php` y `front-page.php`.
- Organicé los recursos (CSS, JS, imágenes) en la carpeta `assets`.
- Activé el tema en WordPress.
- Corregí las rutas de las imágenes usando `get_template_directory_uri()`.
 
### Problemas Solucionados
1. **Rutas de imágenes rotas:** Se solucionó usando las funciones de PHP de WordPress.
2. **Error al crear el sitio en LocalWP:** Se resolvió creando uno nuevo con una contraseña sin caracteres especiales.
 
### Pruebas Realizadas
- Se revisó la consola del navegador (F12) y no hay errores.
- La pestaña Network muestra todas las imágenes con estado 200 (OK).
- El menú hamburguesa funciona en móvil.
 
### Entregables
- Tema comprimido en ZIP (`Moreno-Vivian-tejido-alana.zip`).
- Captura de pantalla del sitio funcionando en WordPress.
 
### Estado
✅ Día 18 completado
 
---
 
## Día 19 — Tema Hijo y Evaluación de Complementos
 
**Fecha:** 30/10/2026
 
### ¿Qué hice hoy?
- **Creación del Tema Hijo:** Se creó la carpeta `tejido-alana-hijo` dentro de `wp-content/themes/`.
- Se crearon los archivos `style.css` (con la cabecera y el `Template: tejido-alana`) y `functions.php` (para encolar los estilos del hijo después del padre).
- **Evaluación de plugins y componentes:** Se determinó que no es necesario instalar plugins adicionales (como Contact Form 7) porque el formulario ya funciona con Formspree. Tampoco se instalan CAPTCHAs porque Formspree ya tiene filtros antispam.
- **Modales y widgets:** Se decidió no implementarlos para mantener el diseño One-Page fluido.
- Se sincronizó el archivo front-page.php y script.js en WordPress con la versión más reciente del proyecto, integrando exitosamente el formulario de contacto con Formspree y comprobando su funcionamiento en el entorno local.

### Pruebas Realizadas
- Se activó el tema hijo y el sitio cargó sin errores. (Se tomó captura).
- Se comprobó que el diseño original se mantiene intacto.
 
### Entregables
- Captura de pantalla del Tema Hijo activado.
- Estructura de carpetas y archivos.
- Justificación de plugins y widgets.
 
### Estado
✅ Día 19 completado
 
---

## Día 20 — Integración del sitio en WordPress

**Fecha:** 30/10/2026

**Objetivo:** Trasladar el proyecto al entorno WordPress y sustituir el formulario de práctica por una solución apropiada para el entorno.

### ¿Qué hice hoy?
- **Estructura del tema:** Se verificó que el HTML de la One-Page (Inicio, Nosotros, Productos, Contacto) esté correctamente integrado en `front-page.php`, cumpliendo con la estructura del tema.
- **Carga de recursos:** Se confirmó que el CSS y JavaScript se cargan mediante las funciones nativas de WordPress en `functions.php` (`wp_enqueue_style` y `wp_enqueue_script`).
- **Comprobación de rutas:** Se revisó la pestaña Network del navegador y todas las imágenes cargan con estado 200 (sin errores 404).
- **Solución del formulario:** Se configuró **Formspree** como la solución de formulario real. Se sincronizó el archivo `script.js` con la lógica de `fetch()` para enviar los datos sin recargar la página.
- **Protección antispam:** Se documentó que Formspree incluye sus propios filtros antispam a nivel de servidor, por lo que no se requieren plugins adicionales.

### Pruebas realizadas
- **Prueba de validación:** El formulario bloquea el envío si hay errores en los campos.
- **Prueba de envío exitoso:** Se llenó el formulario con datos válidos y se verificó que el mensaje de éxito apareciera en pantalla.
- **Prueba de recepción:** Se revisó la bandeja de entrada de Gmail y se confirmó que el correo de Formspree llegó con todos los datos del formulario.
- **Revisión de consola:** La consola del navegador (F12) no muestra errores rojos.
- **Revisión de Network:** No hay archivos con estado 404.

### Entregables
- Sitio integrado en WordPress.
- Prueba de navegación (enlaces y menú funcionando).
- Prueba de formulario (capturas de éxito y recepción del correo).

### Estado
✅ Día 20 completado

## Resumen del proyecto
 
| Día | Tema | Estado |
|---|---|---|
| 1-5 | Estructura HTML5 y CSS Base | ✅ |
| 6-10 | Interactividad y Responsividad | ✅ |
| 11-15 | JavaScript y Formulario (Formspree) | ✅ |
| 16-17 | Accesibilidad y Refinamiento | ✅ |
| 18 | Migración a WordPress LocalWP | ✅ |
| 19 | Tema Hijo y Evaluación de Complementos | ✅ |
| 20 | Integración del sitio en WordPress y Pruebas Finales | ✅ |
 
**Total: 20 días completados**