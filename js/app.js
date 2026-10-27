/* ==========================================================================
   ZIAN PRODUCTIONS — MAIN APPLICATION ENTRY POINT
   Module orchestration & dynamic components mounting
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mount Static / Dynamic Sections Data
  mountServices();
  mountClients();
  mountEquipment();
  if (typeof initPortfolio === 'function') initPortfolio();
  if (typeof initTeam === 'function') initTeam();

  // 2. Initialize Subsystems (After all elements are in DOM)
  if (typeof initScrollEngine === 'function') initScrollEngine();
  if (typeof initWebGLHero === 'function') initWebGLHero();
  if (typeof initKineticText === 'function') initKineticText();
  if (typeof initNavigation === 'function') initNavigation();
  if (typeof initTestimonials === 'function') initTestimonials();
  if (typeof initContact === 'function') initContact();
});

// Mount Services Bento Grid
function mountServices() {
  const container = document.getElementById('services-grid');
  if (!container || !ZIAN_DATA || !ZIAN_DATA.services) return;

  container.innerHTML = '';

  ZIAN_DATA.services.forEach(srv => {
    const card = document.createElement('div');
    card.className = `service-card ${srv.featured ? 'service-card--featured' : ''} reveal-on-scroll`;
    card.setAttribute('data-service', srv.id);

    card.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <div class="service-card__top">
          <div class="service-card__icon" style="background: transparent !important; border: none !important; box-shadow: none !important;">${srv.icon}</div>
          <span class="service-card__num">${srv.number}</span>
        </div>
        <h3 class="service-card__title">${srv.title}</h3>
        <p class="service-card__desc">${srv.description}</p>
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; width: 100%; margin-top: auto;">
        <div class="service-card__features">
          ${srv.features.map(f => `<span class="swiss-tag ${srv.featured ? 'swiss-tag--dark' : ''}">${f}</span>`).join('')}
        </div>
        <a href="#portfolio" class="service-card__link" onclick="filterPortfolioByService('${srv.id}')">
          Ver trabajos de ${srv.title}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Global filter helper from service cards
window.filterPortfolioByService = function(serviceId) {
  const filterBtn = document.querySelector(`.portfolio-filter-btn[data-filter="${serviceId}"]`);
  if (filterBtn) {
    filterBtn.click();
  }
};

// Mount Clients Grid
function mountClients() {
  const container = document.getElementById('clients-grid');
  if (!container || !ZIAN_DATA || !ZIAN_DATA.clients) return;

  container.innerHTML = '';

  ZIAN_DATA.clients.forEach(client => {
    const cell = document.createElement('div');
    cell.className = 'client-cell reveal-on-scroll';

    const logoHtml = client.darkBg
      ? `<div class="client-logo-circle"><img src="${client.logo}" alt="${client.name}" loading="lazy" decoding="async" width="130" height="48"></div>`
      : `<img src="${client.logo}" alt="${client.name}" loading="lazy" decoding="async" width="130" height="48">`;

    cell.innerHTML = `
      ${logoHtml}
      <span class="client-cell__name">${client.name}</span>
    `;

    container.appendChild(cell);
  });
}

// Mount Equipment Grid
function mountEquipment() {
  const container = document.getElementById('equipment-grid');
  if (!container || !ZIAN_DATA || !ZIAN_DATA.equipment) return;

  container.innerHTML = '';

  ZIAN_DATA.equipment.forEach(eq => {
    const card = document.createElement('div');
    card.className = 'equipment-card reveal-on-scroll';

    card.innerHTML = `
      <div class="equipment-card__header">
        <div class="equipment-card__icon" style="background: transparent !important; border: none !important; box-shadow: none !important;">${eq.icon}</div>
        <h3 class="equipment-card__title">${eq.title}</h3>
      </div>
      <ul class="equipment-card__list">
        ${eq.items.map(item => `
          <li class="equipment-card__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    `;

    container.appendChild(card);
  });
}
