/* ============================================================
   Nicole P. Marwell — site interactions
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- A11y: main landmark id + skip link ------------------ */
  var mainEl = document.querySelector('main');
  if (mainEl && !mainEl.id) mainEl.id = 'main';
  if (document.body && !document.querySelector('.skip-link')) {
    var skip = document.createElement('a');
    skip.className = 'skip-link'; skip.href = '#main'; skip.textContent = 'Skip to content';
    document.body.insertBefore(skip, document.body.firstChild);
  }

  /* ---- Canonical link (only if not already declared) ------- */
  if (!document.querySelector('link[rel="canonical"]')) {
    var page = location.pathname.split('/').pop() || 'index.html';
    var canon = document.createElement('link');
    canon.rel = 'canonical';
    canon.href = 'https://nicolemarwell.github.io/' + (page === 'index.html' ? '' : page);
    document.head.appendChild(canon);
  }

  /* ---- Sticky nav: condense on scroll ---------------------- */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
      var open = document.body.classList.contains('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close menu when a link is tapped
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Active nav link based on current page --------------- */
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === path) a.classList.add('active');
  });

  /* ---- Missing-image placeholders -------------------------- */
  // <img data-fallback> → on error, mark parent so CSS shows a placeholder.
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    function fail() {
      img.classList.add('is-empty');
      if (img.parentElement) img.parentElement.classList.add('is-empty');
    }
    img.addEventListener('error', fail);
    // if the src is empty or unresolved, trigger now
    if (!img.getAttribute('src')) fail();
    else if (img.complete && img.naturalWidth === 0) fail();
  });

  /* ---- Scroll reveal --------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { revObs.observe(el); });
  }

  /* ---- Count-up stats -------------------------------------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    if (isNaN(target)) return;
    if (reduceMotion) { el.textContent = formatNum(target, el); return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = formatNum(Math.round(target * eased), el);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function formatNum(n, el) {
    return (el.getAttribute('data-prefix') || '') + n +
           (el.getAttribute('data-suffix') || '');
  }
  var counters = document.querySelectorAll('[data-target]');
  if (counters.length) {
    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCount);
    } else {
      var cObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCount(e.target); cObs.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cObs.observe(el); });
    }
  }

  /* ---- Video lightbox (YouTube) ---------------------------- */
  var lb;
  function openLightbox(yt) {
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = '<div class="lightbox-inner"><button class="lightbox-close" aria-label="Close video">&times;</button><iframe allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
      document.body.appendChild(lb);
      lb.addEventListener('click', function (e) {
        if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLightbox();
      });
    }
    lb.querySelector('iframe').src = 'https://www.youtube.com/embed/' + yt + '?autoplay=1';
    lb.classList.add('open');
  }
  function closeLightbox() {
    if (lb) { lb.classList.remove('open'); lb.querySelector('iframe').src = ''; }
  }
  document.querySelectorAll('.js-video[data-yt]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); openLightbox(a.getAttribute('data-yt')); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  /* ---- Current year in footer ------------------------------ */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
