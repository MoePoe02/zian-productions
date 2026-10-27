/* ==========================================================================
   ZIAN PRODUCTIONS — TEAM & PROFILE MODAL
   Render team cards and profile dialog
   ========================================================================== */

function initTeam() {
  const container = document.getElementById('team-grid');
  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-body');

  if (!container || !ZIAN_DATA || !ZIAN_DATA.team) return;

  container.innerHTML = '';

  ZIAN_DATA.team.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card reveal-on-scroll is-revealed';
    card.setAttribute('data-id', member.id);

    card.innerHTML = `
      <div class="team-card__image">
        <img src="${member.photo}" alt="${member.name}" style="object-position: center 15%;">
      </div>
      <div class="team-card__content">
        <h3 class="team-card__name">${member.name}</h3>
        <p class="team-card__role">${member.role}</p>
        <p class="team-card__bio-preview">${member.bio}</p>
        <div style="margin-top: 1.25rem;">
          <span class="btn-text">Ver Perfil Completo →</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openTeamModal(member));
    container.appendChild(card);
  });

  function openTeamModal(member) {
    if (!modalOverlay || !modalBody) return;

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
        <div style="background-color: var(--color-bg-dark-deep); height: 100%; min-height: 400px; overflow: hidden;">
          <img src="${member.photo}" alt="${member.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
        </div>
        <div style="padding: clamp(2rem, 4vw, 3.5rem); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="swiss-tag swiss-tag--accent" style="margin-bottom: 1rem;">INTEGRANTE ZIAN</span>
            <h2 style="font-size: var(--fs-h2); font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.35rem;">${member.name}</h2>
            <p style="font-family: var(--font-mono); font-size: var(--fs-sm); color: var(--color-accent); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; margin-bottom: 1.5rem;">${member.role}</p>

            <h4 style="font-family: var(--font-mono); font-size: var(--fs-xs); text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.75rem;">Especialidades</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem;">
              ${member.specialties.map(s => `<span class="swiss-tag">${s}</span>`).join('')}
            </div>

            <h4 style="font-family: var(--font-mono); font-size: var(--fs-xs); text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.75rem;">Bio & Trayectoria</h4>
            <p style="color: var(--color-text-body); line-height: 1.7; margin-bottom: 2rem;">${member.bio}</p>
          </div>

          <div style="border-top: 1px solid var(--color-border-light); padding-top: 1.5rem;">
            <a href="#contacto" class="btn btn-primary" onclick="closeModalAndContact('${encodeURIComponent('Hablar con ' + member.name)}')">
              Contactar a ${member.name.split(' ')[0]}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
