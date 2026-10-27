/* ==========================================================================
   ZIAN PRODUCTIONS — PORTFOLIO & PROJECT MODAL
   Bento Grid rendering, filtering, and gallery dialog
   ========================================================================== */

function initPortfolio() {
  const container = document.getElementById('portfolio-grid');
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!container || !ZIAN_DATA || !ZIAN_DATA.projects) return;

  // Render items
  function renderProjects(category = 'all') {
    container.innerHTML = '';

    const filtered = category === 'all'
      ? ZIAN_DATA.projects
      : ZIAN_DATA.projects.filter(p => p.category === category);

    // Dynamic row packing to prevent solitary items in any row
    // If an item is alone in its row (e.g. single item or odd remainder), it spans 12 columns (full row width).
    // Pairs sharing a row alternate complementary spans that sum exactly to 12 columns.
    const pairPatterns = [
      ['wide', 'narrow'],       // 8 + 4 = 12
      ['standard', 'standard'], // 6 + 6 = 12
      ['narrow', 'wide'],       // 4 + 8 = 12
      ['standard', 'standard']  // 6 + 6 = 12
    ];

    const spans = [];
    let i = 0;
    let patternIdx = 0;

    while (i < filtered.length) {
      const remaining = filtered.length - i;
      if (remaining === 1) {
        // Solitary card in row -> expand across entire row width
        spans.push('full');
        i += 1;
      } else {
        // Pair sharing a row (totals 12 columns)
        const currentPattern = pairPatterns[patternIdx % pairPatterns.length];
        spans.push(currentPattern[0]);
        spans.push(currentPattern[1]);
        i += 2;
        patternIdx += 1;
      }
    }

    filtered.forEach((project, index) => {
      const item = document.createElement('div');
      const assignedSpan = spans[index] || 'full';
      item.className = `portfolio-item portfolio-item--${assignedSpan} reveal-on-scroll`;
      item.setAttribute('data-id', project.id);
      item.setAttribute('data-category', project.category);

      item.innerHTML = `
        <img class="portfolio-item__image" src="${project.image}" alt="${project.title}" loading="lazy" decoding="async">
        <div class="portfolio-item__overlay">
          <span class="portfolio-item__category">${project.categoryLabel} · ${project.year}</span>
          <h3 class="portfolio-item__title">${project.title}</h3>
          <p class="portfolio-item__client">Cliente: ${project.client}</p>
        </div>
        <div class="portfolio-item__action-hint" title="Ver detalle del proyecto">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
      `;

      item.addEventListener('click', () => openProjectModal(project));
      container.appendChild(item);
    });

    // Re-trigger reveal observer
    setTimeout(() => {
      document.querySelectorAll('.portfolio-item.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
      });
    }, 50);
  }

  // Filter interaction
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // Modal open
  function openProjectModal(project) {
    if (!modalOverlay || !modalBody) return;

    const galleryHtml = project.gallery && project.gallery.length > 0
      ? `
        <div class="modal-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          ${project.gallery.map(img => `
            <div style="border: 1px solid var(--color-border-light); background: #000; overflow: hidden; height: 260px; border-radius: var(--radius-md);">
              <img src="${img}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
            </div>
          `).join('')}
        </div>
      `
      : `<img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 440px; object-fit: cover; margin-bottom: 2rem;">`;

    modalBody.innerHTML = `
      <div style="padding: clamp(2rem, 4vw, 3rem);">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <span class="swiss-tag swiss-tag--accent">${project.categoryLabel}</span>
          <span style="font-family: var(--font-mono); font-size: var(--fs-xs); color: var(--color-text-muted);">${project.year}</span>
        </div>
        
        <h2 style="font-size: var(--fs-h2); font-weight: 700; margin-bottom: 0.5rem; color: var(--color-text-dark);">${project.title}</h2>
        <p style="font-family: var(--font-mono); font-size: var(--fs-sm); color: var(--color-accent); margin-bottom: 1.5rem; font-weight: 600;">Cliente: ${project.client}</p>

        ${galleryHtml}

        <div style="border-top: 1px solid var(--color-border-light); padding-top: 1.5rem; margin-bottom: 2rem;">
          <h4 style="font-family: var(--font-mono); font-size: var(--fs-xs); text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.75rem;">Descripción de la Producción</h4>
          <p style="color: var(--color-text-body); line-height: 1.7; font-size: 1.05rem;">${project.description}</p>
        </div>

        <div style="background-color: var(--color-bg-ice); border: 1px solid var(--color-border-light); border-radius: var(--radius-md); padding: 1.5rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.5rem;">
          <div>
            <span style="font-family: var(--font-mono); font-size: var(--fs-xs); text-transform: uppercase; color: var(--color-text-muted); display: block;">Líder de Proyecto</span>
            <strong style="color: var(--color-text-dark); font-size: 1rem;">${project.teamLead || 'Equipo Zian Productions'}</strong>
          </div>
          <a href="#contacto" class="btn btn-primary" onclick="closeModalAndContact('${encodeURIComponent(project.title)}')">
            Solicitar un proyecto similar
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Modal close
  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  window.closeModalAndContact = function(projectTitle) {
    closeModal();
    const serviceSelect = document.getElementById('contact-service');
    const messageInput = document.getElementById('contact-message');
    if (messageInput) {
      messageInput.value = `Hola Zian Productions! Me interesa un proyecto similar a: ${decodeURIComponent(projectTitle)}.`;
    }
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initial render
  renderProjects('all');
}
