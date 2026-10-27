/* ==========================================================================
   ZIAN PRODUCTIONS — KINETIC TYPOGRAPHY & ODOMETER ROLLS
   Char reveals, mask animations & numerical counters
   ========================================================================== */

function initKineticText() {
  // ─── Numeros y Contadores (Odometer Roll) ───
  const statElements = document.querySelectorAll('.stat-number');

  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetValue = parseInt(el.getAttribute('data-value'), 10) || 0;
          const prefix = el.getAttribute('data-prefix') || '';
          animateCounter(el, targetValue, prefix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statElements.forEach(stat => statObserver.observe(stat));
  } else {
    statElements.forEach(stat => {
      const val = stat.getAttribute('data-value') || '';
      const prefix = stat.getAttribute('data-prefix') || '';
      stat.innerHTML = `<span class="prefix">${prefix}</span>${val}`;
    });
  }

  function animateCounter(element, target, prefix) {
    const duration = 1800;
    const start = performance.now();

    function update(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      element.innerHTML = `<span class="prefix">${prefix}</span>${current}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.innerHTML = `<span class="prefix">${prefix}</span>${target}`;
      }
    }

    requestAnimationFrame(update);
  }

  // ─── Scroll Reveal Observer for Headings & Elements ───
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      rootMargin: '50px 0px -20px 0px',
      threshold: 0.05
    });

    revealElements.forEach(el => revealObserver.observe(el));

    window.refreshRevealObserver = function() {
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach(el => {
        revealObserver.observe(el);
      });
    };
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    window.refreshRevealObserver = function() {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    };
  }
}
