/* ==========================================================================
   ZIAN PRODUCTIONS — TESTIMONIALS SLIDER
   Testimonials carousel with progress bar & touch/keyboard navigation
   ========================================================================== */

function initTestimonials() {
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const companyEl = document.getElementById('testimonial-company');
  const progressBar = document.getElementById('testimonial-progress-bar');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (!quoteEl || !ZIAN_DATA || !ZIAN_DATA.testimonials) return;

  const list = ZIAN_DATA.testimonials;
  let currentIndex = 0;
  let autoPlayTimer = null;

  function showTestimonial(index) {
    if (index < 0) index = list.length - 1;
    if (index >= list.length) index = 0;
    currentIndex = index;

    // Fade out
    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(10px)';

    setTimeout(() => {
      quoteEl.textContent = `"${list[currentIndex].quote}"`;
      if (authorEl) authorEl.textContent = list[currentIndex].author;
      if (companyEl) companyEl.textContent = list[currentIndex].company;

      const progressPercent = ((currentIndex + 1) / list.length) * 100;
      if (progressBar) progressBar.style.width = `${progressPercent}%`;

      // Fade in
      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateY(0)';
      quoteEl.style.transition = 'all 0.4s var(--ease-out-expo)';
    }, 200);
  }

  function startAutoplay() {
    stopAutoplay();
    autoPlayTimer = setInterval(() => {
      showTestimonial(currentIndex + 1);
    }, 6000);
  }

  function stopAutoplay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoplay();
      showTestimonial(currentIndex - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoplay();
      showTestimonial(currentIndex + 1);
      startAutoplay();
    });
  }

  const sliderWrap = document.querySelector('.testimonials-slider-wrap');
  if (sliderWrap) {
    sliderWrap.addEventListener('mouseenter', stopAutoplay);
    sliderWrap.addEventListener('mouseleave', startAutoplay);
  }

  // Initial display
  showTestimonial(0);
  startAutoplay();
}
