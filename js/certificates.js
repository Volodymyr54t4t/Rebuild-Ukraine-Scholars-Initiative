/* ==========================================================================
   certificates.js — Certificate gallery, category filter + lightbox modal
   --------------------------------------------------------------------------
   Real certificate files are not provided yet, so each card renders an
   elegant "Certificate image placeholder". Nothing is faked.

   To add a real certificate later:
   - Put the image in assets/images/certificates/
   - Add an `image` path to the matching entry below.
     The modal + card will then show the image instead of the placeholder.
   ========================================================================== */

const CERTIFICATES = [
  {
    title: { en: "INFOMATRIX Ukraine 2026 — Gold Medal", ua: "INFOMATRIX Ukraine 2026 — Золота медаль" },
    sub: { en: "Software Development · National", ua: "Розробка ПЗ · Національний" },
    year: "2026",
    type: "awards",
    image: null
  },
  {
    title: { en: "Best Computer Program — 1st Degree Diploma", ua: "Найкраща комп'ютерна програма — Диплом I ступеня" },
    sub: { en: "City Competition · Zhytomyr", ua: "Міський конкурс · Житомир" },
    year: "2024",
    type: "diplomas",
    image: null
  },
  {
    title: { en: "Best Computer Program — 1st Degree Diploma", ua: "Найкраща комп'ютерна програма — Диплом I ступеня" },
    sub: { en: "City Competition · Zhytomyr", ua: "Міський конкурс · Житомир" },
    year: "2025",
    type: "diplomas",
    image: null
  },
  {
    title: { en: "IT Projects GameDev — 3rd Place", ua: "IT-проєкти GameDev — 3 місце" },
    sub: { en: "Project: AirRaid — Ready or Not", ua: "Проєкт: AirRaid — Ready or Not" },
    year: "[Add information]",
    type: "awards",
    image: null
  },
  {
    title: { en: '"School Website" — Absolute Winner', ua: '«Шкільний сайт» — Абсолютний переможець' },
    sub: { en: "City Youth Web Design · Zhytomyr", ua: "Молодіжний вебдизайн · Житомир" },
    year: "[Add information]",
    type: "awards",
    image: null
  },
  {
    title: { en: "XXIV International Web Design & Computer Graphics", ua: "XXIV Міжнародний конкурс вебдизайну та графіки" },
    sub: { en: "2 × 1st Place + 1 × 2nd Place · Vinnytsia", ua: "2 × 1 місце + 1 × 2 місце · Вінниця" },
    year: "2026",
    type: "awards",
    image: null
  },
  {
    title: { en: "CreDiCo 2024 — 3rd Place", ua: "CreDiCo 2024 — 3 місце" },
    sub: { en: "Web Design: Software Implementation", ua: "Вебдизайн: програмна реалізація" },
    year: "2024",
    type: "diplomas",
    image: null
  },
  {
    title: { en: "Junior Academy of Sciences — Absolute Winner", ua: "МАН України — Абсолютний переможець" },
    sub: { en: "Research Defense · City Stage", ua: "Захист роботи · Міський етап" },
    year: "2025",
    type: "diplomas",
    image: null
  },
  {
    title: { en: "Junior Academy of Sciences — Winner", ua: "МАН України — Переможець" },
    sub: { en: "Research Defense · Regional Stage", ua: "Захист роботи · Обласний етап" },
    year: "2025",
    type: "diplomas",
    image: null
  },
  {
    title: { en: "Junior Academy of Sciences — 2nd Place", ua: "МАН України — 2 місце" },
    sub: { en: "Research Defense · Regional Stage", ua: "Захист роботи · Обласний етап" },
    year: "2026",
    type: "diplomas",
    image: null
  },
  {
    title: { en: "Hack The FICT — 1st Place", ua: "Hack The FICT — 1 місце" },
    sub: { en: "Project: HelioCore AI", ua: "Проєкт: HelioCore AI" },
    year: "2026",
    type: "awards",
    image: null
  },
  {
    title: { en: '"3D Printing in STEM" Hackathon — 2nd Place', ua: 'Хакатон «3D-друк у STEM» — 2 місце' },
    sub: { en: "Project: Innovation Solar System", ua: "Проєкт: Innovation Solar System" },
    year: "[Add information]",
    type: "awards",
    image: null
  },
  {
    title: { en: "Startup School of Zhytomyr Polytechnic", ua: "Стартап-школа Житомирської політехніки" },
    sub: { en: "Educational Program · DemoDay", ua: "Освітня програма · DemoDay" },
    year: "[Add information]",
    type: "programs",
    image: null
  },
  {
    title: { en: "Winter School of Radio Electronics and IoT", ua: "Зимова школа радіоелектроніки та IoT" },
    sub: { en: "Zhytomyr Polytechnic", ua: "Житомирська політехніка" },
    year: "2026",
    type: "programs",
    image: null
  },
  {
    title: { en: "Innovation Hub Accelerator Program", ua: "Акселераційна програма Innovation Hub" },
    sub: { en: "Zhytomyr Polytechnic + BGV Group Management", ua: "Житомирська політехніка + BGV Group Management" },
    year: "2026",
    type: "programs",
    image: null
  },
  {
    title: { en: "CreDiCo 2025 — Participant", ua: "CreDiCo 2025 — Учасник" },
    sub: { en: "Program", ua: "Програма" },
    year: "2025",
    type: "programs",
    image: null
  },
  {
    title: { en: '"World Through the Camera Lens" — 3rd Degree Laureate', ua: '«Світ через об\'єктив камери» — Лауреат III ступеня' },
    sub: { en: "Nature & Landscapes", ua: "Природа та ландшафти" },
    year: "[Add information]",
    type: "certificates",
    image: null
  }
];

let certFilter = "all";

function escC(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* Build one certificate card. */
function certCard(item, index) {
  const lang = window.i18n.current;
  const L = function (obj) { return escC(obj[lang] || obj.en); };

  // Placeholder area or a real image if one has been added.
  const preview = item.image
    ? '<div class="cert__preview"><img src="' + escC(item.image) +
      '" alt="' + L(item.title) + '" loading="lazy"></div>'
    : '<div class="cert__preview">' +
        '<span class="cert__stamp">' + item.type + "</span>" +
        "<span>Certificate image placeholder</span>" +
      "</div>";

  return (
    '<article class="cert" data-type="' + item.type + '">' +
      preview +
      '<div class="cert__body">' +
        '<h3 class="cert__title">' + L(item.title) + "</h3>" +
        '<p class="cert__sub">' + L(item.sub) + "</p>" +
        '<div class="cert__foot">' +
          '<span class="cert__sub">' + escC(item.year) + "</span>" +
          '<button class="btn btn--link" data-cert="' + index + '">' +
            "<span>" + window.i18n.t("cta.viewCertificate") + '</span> <span class="arrow">&rarr;</span>' +
          "</button>" +
        "</div>" +
      "</div>" +
    "</article>"
  );
}

function renderCertificates() {
  const grid = document.getElementById("certGrid");
  if (!grid) return;

  grid.innerHTML = CERTIFICATES
    .map(function (item, i) {
      const match = certFilter === "all" || item.type === certFilter;
      return match ? certCard(item, i) : "";
    })
    .join("");

  document.querySelectorAll("[data-cert]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openCertModal(CERTIFICATES[Number(btn.dataset.cert)]);
    });
  });
}

/* Fullscreen lightbox for a certificate. */
function openCertModal(item) {
  const modal = document.getElementById("certModal");
  if (!modal) return;
  const lang = window.i18n.current;
  const L = function (obj) { return obj[lang] || obj.en; };

  const preview = modal.querySelector(".modal__preview");
  preview.innerHTML = item.image
    ? '<img src="' + escC(item.image) + '" alt="' + escC(L(item.title)) +
      '" style="width:100%;height:100%;object-fit:contain;">'
    : "<span>Certificate image placeholder<br><small>[Add certificate]</small></span>";

  modal.querySelector(".modal__title").textContent = L(item.title);

  const rows = [
    ["Achievement", L(item.sub)],
    ["Year", item.year],
    ["Type", item.type.charAt(0).toUpperCase() + item.type.slice(1)]
  ];
  modal.querySelector(".modal__info").innerHTML = rows.map(function (r) {
    return "<div><dt>" + escC(r[0]) + "</dt><dd>" + escC(r[1]) + "</dd></div>";
  }).join("");

  openModal(modal);
}

function initCertFilters() {
  const bar = document.querySelector(".filters");
  if (!bar) return;
  bar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    certFilter = btn.dataset.filter;
    bar.querySelectorAll(".filter").forEach(function (f) {
      const on = f === btn;
      f.classList.toggle("is-active", on);
      f.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderCertificates();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("certGrid")) return;
  initCertFilters();
  renderCertificates();
});
document.addEventListener("languagechange", function () {
  if (document.getElementById("certGrid")) renderCertificates();
});
