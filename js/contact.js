/* ==========================================================================
   ZIAN PRODUCTIONS — CONTACT & WHATSAPP DISPATCH
   Form validation, clean inline feedback (No toasts), WhatsApp integration
   ========================================================================== */

function initContact() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const whatsappDirectBtn = document.getElementById('btn-whatsapp-direct');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const company = document.getElementById('contact-company').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const service = document.getElementById('contact-service').value;
    const budget = document.getElementById('contact-budget').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showStatus('Por favor completá los campos obligatorios (Nombre, Email y Mensaje).', 'error');
      return;
    }

    // Build WhatsApp message
    const waText = encodeURIComponent(
      `*Consulta Web — Zian Productions*\n\n` +
      `*Nombre:* ${name}\n` +
      `*Empresa:* ${company || 'Particular'}\n` +
      `*Email:* ${email}\n` +
      `*Servicio de Interés:* ${service || 'General'}\n` +
      `*Rango Estimado:* ${budget || 'A definir'}\n\n` +
      `*Mensaje:* ${message}`
    );

    // Number for Zian Productions
    const waNumber = '5492974000000'; // Replaceable with client's exact number
    const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

    showStatus('¡Excelente! Redirigiendo a WhatsApp para iniciar la conversación directamente con nuestro equipo...', 'success');

    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 1200);
  });

  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const directText = encodeURIComponent('Hola Zian Productions! Me gustaría consultar sobre sus servicios de producción multimedia.');
      window.open(`https://wa.me/5492974000000?text=${directText}`, '_blank');
    });
  }

  function showStatus(text, type) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = `form-status ${type}`;
    statusEl.style.display = 'block';

    if (type === 'success') {
      setTimeout(() => {
        statusEl.style.display = 'none';
      }, 7000);
    }
  }
}
