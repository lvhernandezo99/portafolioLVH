# Entregables de las Fases 1 y 2 (Requerimientos, Wireframe, Arquitectura, Guía de estilos)

Portafolio personal con HTML5 semántico, CSS3 responsivo (Flexbox + Grid) y JavaScript vanilla.

## Entregable 1.1: Requerimientos

**Funcionales**
1. Mostrar una sección de presentación personal con foto, nombre y resumen.
2. Listar mínimo 3 proyectos, cargados dinámicamente desde un array de objetos.
3. Formulario de contacto con nombre, correo y mensaje, con envío simulado en JavaScript.
4. Validar el formulario en tiempo real y mostrar mensajes de error claros.
5. Permitir la navegación entre secciones con un menú, que en móvil es una hamburguesa.
6. Cambiar entre tema claro y oscuro y recordar la elección.

**No funcionales**
1. Diseño responsivo con 3 breakpoints (móvil, tablet 768px, desktop 1024px).
2. Accesibilidad básica: `alt` en imágenes, `label` asociados, foco visible y navegación por teclado.
3. Mantenibilidad: CSS y JS en archivos separados, con variables CSS.
4. Rendimiento: sin librerías externas, solo las fuentes de Google; carga rápida.
5. Compatibilidad con navegadores (Chrome, Firefox, Edge, Safari).
6. Disponible públicamente en GitHub Pages.

## Entregable 1.2: Wireframe (baja fidelidad)

Versión digital: ver `wireframe.svg` 

Puntos de interacción JS: menú hamburguesa, botón de tema, tarjetas generadas desde el array, validación y envío del formulario, animación al hacer scroll.

## Entregable 2.1: Arquitectura y justificación

```
mi-portafolio/
├── index.html
├── css/  reset.css · variables.css · layout.css · components.css
├── js/   main.js · form-handler.js · animations.js
├── assets/  images/ · icons/
└── README.md
```
**¿Por qué separar el CSS?** Cada archivo tiene una responsabilidad: `reset` iguala navegadores, `variables` concentra colores y fuentes, `layout` organiza la página y `components` estiliza piezas reutilizables. Así se encuentra y modifica cada cosa sin afectar el resto, y el orden de carga controla la cascada.

**¿Por qué modularizar el JS?** Con módulos ES (`import`/`export`) cada archivo hace una sola tarea (interfaz, formulario, animaciones), lo que facilita leer, analizar, reutilizar y trabajar en equipo con Git sin conflictos. Los módulos exigen un servidor (GitHub Pages o Live Server).

**Arquitectura cliente-servidor:** el navegador (cliente) pide `index.html` por HTTP; el servidor de GitHub Pages responde con los archivos estáticos, y el navegador pide también los CSS, JS e imágenes que el HTML referencia. Todo lo demás se ejecuta en el cliente.

## Entregable 2.2: Guía de estilos

La paleta combina lila para botones y enlaces, aguamarina para detalles de interacción y rosa palo para el foco. El tema claro usa fondos beige; el tema oscuro mantiene los mismos tonos con fondos oscuros.

| Elemento | Tema claro | Tema oscuro | Variable CSS |
|---|---|---|---|
| Primario (botones y enlaces) | `#76539B` | `#B99ADD` | `--color-primary` |
| Secundario (interacción del menú) | `#287F7C` | `#7CCFC6` | `--color-secondary` |
| Acento (foco) | `#C77F91` | `#E6B6C1` | `--color-accent` |
| Fondo | `#F3EDE3` | `#211C24` | `--bg` |
| Superficie | `#FCF8F1` | `#2B2430` | `--surface` |
| Texto | `#302B33` | `#F1EAF2` | `--text` |
| Texto secundario | `#685F68` | `#C2B5C5` | `--muted` |
| Borde | `#D9CEC2` | `#493D4D` | `--border` |
| Títulos | Bricolage Grotesque 600/800 | Bricolage Grotesque 600/800 | `--font-heading` |
| Cuerpo | Source Sans 3 400/600 | Source Sans 3 400/600 | `--font-body` |
| Componentes | `.btn`, `.btn-outline`, `.card`, `.field` (input/textarea) | `.btn`, `.btn-outline`, `.card`, `.field` (input/textarea) | `--radius`, `--transition` |

