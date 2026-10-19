import { initForm } from './form-handler.js';
import { initAnimations } from './animations.js';

const projects = [
  { title: 'Gestion de Inventario', description: 'Página de gestión de inventario con funcionalidades básicas.', tags: ['HTML5', 'CSS3','JavaScript'], url: '#' },
  { title: 'Lista de tareas', description: 'App que agrega y elimina tareas usando el DOM.', tags: ['JavaScript', 'DOM'], url: '#' },
  { title: 'Blog para fans', description: 'Blog para fans de un artista, funcionalidades de galeria, posts, comentarios.', tags: ['HTML5', 'CSS3','JavaScript'], url: '#' }
];

const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
navList.addEventListener('click', e => {           
  if (e.target.tagName === 'A') navList.classList.remove('open');
});

//Configuración del Tema claro u oscuro 
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
function setTheme(theme) {
  root.dataset.theme = theme;
  themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  localStorage.setItem('theme', theme);
}
setTheme(localStorage.getItem('theme') ||
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

//carga de proyectos en la sección de proyectos
const grid = document.getElementById('projects-grid');
grid.innerHTML = projects.map(p => `
  <article class="card reveal">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <ul>${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
    <a href="${p.url}">Ver proyecto</a>
  </article>`).join('');

document.getElementById('year').textContent = new Date().getFullYear();
initForm();
initAnimations();
