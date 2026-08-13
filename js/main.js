/* ==========================================================================
   main.js — Shared site interactions (Vanilla JS)
   Handles: sticky nav state, mobile menu, active link, scroll reveal,
   smooth anchor scrolling and the back-to-top button.
   Runs on every page.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initNavScrollState();
  initMobileMenu();
  initActiveLink();
  initScrollReveal();
  initBackToTop();
  initSmoothAnchors();
  initContactForm();
});

/* --------------------------------------------------------------------------
   Sticky nav: add a border/background once the user scrolls a little.
   -------------------------------------------------------------------------- */
function initNavScrollState() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const onScroll = function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   Mobile hamburger menu: toggle the nav links panel.
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  const close = function () {
    toggle.classList.remove("is-open");
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", function () {
    const open = toggle.classList.toggle("is-open");
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    // Prevent background scroll while the menu is open on mobile.
    document.body.style.overflow = open ? "hidden" : "";
  });

  // Close when a link is tapped.
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });

  // Close with Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  // Close if the viewport grows back to desktop.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) close();
  });
}

/* --------------------------------------------------------------------------
   Active link: highlight the nav item matching the current page.
   Uses each link's data-page against <body data-page="...">.
   -------------------------------------------------------------------------- */
function initActiveLink() {
  const current = document.body.getAttribute("data-page");
  if (!current) return;

  document.querySelectorAll(".nav__link").forEach(function (link) {
    if (link.getAttribute("data-page") === current) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* --------------------------------------------------------------------------
   Scroll reveal: fade elements in as they enter the viewport.
   Any element with .reveal or .reveal-stagger is observed.
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!items.length) return;

  // Graceful fallback if IntersectionObserver is unavailable.
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (el) { observer.observe(el); });
}

/* --------------------------------------------------------------------------
   Back-to-top button: appears after scrolling down.
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector(".to-top");
  if (!btn) return;

  const onScroll = function () {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   Shared modal helpers (used by achievements.js and certificates.js).
   Handles: open, close, ESC key, click-outside and focus return.
   Exposed on window so other scripts can call them.
   -------------------------------------------------------------------------- */
let lastFocusedEl = null;

function openModal(modal) {
  if (!modal) return;
  lastFocusedEl = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".modal__close");
  if (closeBtn) closeBtn.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") lastFocusedEl.focus();
}

window.openModal = openModal;
window.closeModal = closeModal;

/* Wire close interactions for every .modal on the page. */
document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".modal");
  if (!modals.length) return;

  modals.forEach(function (modal) {
    // Close button + backdrop click.
    modal.addEventListener("click", function (e) {
      if (e.target.closest(".modal__close") || e.target.classList.contains("modal__backdrop")) {
        closeModal(modal);
      }
    });
  });

  // ESC closes any open modal.
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".modal.is-open").forEach(closeModal);
  });
});

/* --------------------------------------------------------------------------
   Smooth anchor scrolling for in-page links (#id), respecting the sticky nav.
   -------------------------------------------------------------------------- */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
}

/* --------------------------------------------------------------------------
   Contact form: client-side validation + friendly success state.
   This is a static site, so there is no backend — on valid submit we show a
   confirmation message instead of sending. Wire to a real endpoint later.
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = form.querySelector(".form__status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Native constraint validation (required, type="email", etc.).
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;

    if (status) {
      status.textContent = window.i18n
        ? window.i18n.t("contact.success")
        : "Thank you — your message has been recorded.";
      status.classList.add("is-visible");
    }
    form.reset();

    // Re-enable after a short pause so the user sees the confirmation.
    window.setTimeout(function () {
      if (btn) btn.disabled = false;
    }, 1500);
  });
}
