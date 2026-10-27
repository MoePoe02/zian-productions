/* ==========================================================================
   ZIAN PRODUCTIONS — NAVIGATION & PRECISION CURSOR
   Sticky navbar, active section spy, mobile drawer & cursor physics
   ========================================================================== */

function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Active Section Spy
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile Drawer Toggle
  if (navToggleBtn && mobileDrawer) {
    navToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        navToggleBtn.classList.remove('active');
        document.body.style.overflow = '';
      } else {
        mobileDrawer.classList.add('open');
        navToggleBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Precision Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let hasMoved = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      if (!hasMoved) {
        followerX = mouseX;
        followerY = mouseY;
        hasMoved = true;
        document.body.classList.add('cursor-active');
      }
    }, { passive: true });

    function renderFollower() {
      if (hasMoved) {
        followerX += (mouseX - followerX) * 0.16;
        followerY += (mouseY - followerY) * 0.16;
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
      }
      requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    // Event delegation for all current and dynamically created interactive elements
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, input, textarea, select, .portfolio-item, .service-card, .team-card, .client-cell, .swiss-tag, .tab-btn, .btn, label')) {
        document.body.classList.add('cursor-hover');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, input, textarea, select, .portfolio-item, .service-card, .team-card, .client-cell, .swiss-tag, .tab-btn, .btn, label')) {
        document.body.classList.remove('cursor-hover');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-active');
    });

    document.addEventListener('mouseenter', () => {
      if (hasMoved) {
        document.body.classList.add('cursor-active');
      }
    });
  }
}
