const rules = {
  name: v => v.trim().length >= 3 || 'Escribe tu nombre (mínimo 3 letras).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Escribe un correo válido, por ejemplo nombre@dominio.com.',
  message: v => v.trim().length >= 10 || 'El mensaje debe tener al menos 10 caracteres.'
};

function validate(field) {
  const result = rules[field.name](field.value);
  const ok = result === true;
  document.getElementById(`${field.name}-error`).textContent = ok ? '' : result;
  field.classList.toggle('invalid', !ok);
  field.classList.toggle('valid', ok);
  field.setAttribute('aria-invalid', !ok);
  return ok;
}

export function initForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const fields = [...form.querySelectorAll('input, textarea')];

  fields.forEach(f => f.addEventListener('input', () => validate(f)));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const validationResult = fields.map(validate).every(Boolean);  
    if (!validationResult) { status.textContent = 'Verifica los campos marcados.'; return; }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.textContent = 'Enviando...';
    setTimeout(() => {                   
      status.textContent = '¡Mensaje enviado! Me comunicaré contigo pronto.';
      form.reset();
      fields.forEach(f => f.classList.remove('valid', 'invalid'));
      btn.disabled = false;
    }, 1200);
  });
}
