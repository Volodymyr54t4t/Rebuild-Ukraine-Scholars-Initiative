/* ==========================================================================
   achievements.js — Renders the achievements grid, filtering + proof modal
   --------------------------------------------------------------------------
   All data below is REAL and provided by Volodymyr. Nothing is invented.
   Each item has a `cats` array so it can appear under multiple filters.

   Categories used by the filter bar:
   all · software · web · research · hackathons · startup · iot
   ========================================================================== */

const ACHIEVEMENTS = [
  {
    result: { en: "Gold Medal", ua: "Золота медаль" },
    title: { en: "INFOMATRIX Ukraine 2026", ua: "INFOMATRIX Ukraine 2026" },
    category: { en: "National Competition · Software Development", ua: "Національний конкурс · Розробка ПЗ" },
    year: "2026",
    location: { en: "Ukraine", ua: "Україна" },
    project: null,
    tone: "gold",
    cats: ["software"]
  },
  {
    result: { en: "1st Degree Diploma", ua: "Диплом I ступеня" },
    title: { en: "City Competition for the Best Computer Program", ua: "Міський конкурс на кращу комп'ютерну програму" },
    category: { en: "Software Development", ua: "Розробка ПЗ" },
    year: "2024",
    location: { en: "Zhytomyr, Ukraine", ua: "Житомир, Україна" },
    project: null,
    tone: "accent",
    cats: ["software"]
  },
  {
    result: { en: "1st Degree Diploma", ua: "Диплом I ступеня" },
    title: { en: "City Competition for the Best Computer Program", ua: "Міський конкурс на кращу комп'ютерну програму" },
    category: { en: "Software Development", ua: "Розробка ПЗ" },
    year: "2025",
    location: { en: "Zhytomyr, Ukraine", ua: "Житомир, Україна" },
    project: null,
    tone: "accent",
    cats: ["software"]
  },
  {
    result: { en: "3rd Place", ua: "3 місце" },
    title: { en: "IT Projects GameDev Competition", ua: "Конкурс IT-проєктів GameDev" },
    category: { en: "Game Development", ua: "Розробка ігор" },
    year: null,
    location: null,
    project: { en: "AirRaid — Ready or Not", ua: "AirRaid — Ready or Not" },
    tone: "muted",
    cats: ["software"]
  },
  {
    result: { en: "Absolute Winner", ua: "Абсолютний переможець" },
    title: { en: 'City Youth Web Design Competition "School Website"', ua: 'Міський молодіжний конкурс вебдизайну «Шкільний сайт»' },
    category: { en: "Web Design", ua: "Вебдизайн" },
    year: null,
    location: { en: "Zhytomyr, Ukraine", ua: "Житомир, Україна" },
    project: null,
    tone: "accent",
    cats: ["web"]
  },
  {
    result: { en: "2 × 1st Place + 1 × 2nd Place", ua: "2 × 1 місце + 1 × 2 місце" },
    title: { en: "XXIV International Web Design & Computer Graphics Competition", ua: "XXIV Міжнародний конкурс вебдизайну та комп'ютерної графіки" },
    category: { en: "Best Information Content · Best Graphic Implementation", ua: "Найкращий інформаційний контент · Найкраща графічна реалізація" },
    year: "2026",
    location: { en: "Vinnytsia, Ukraine", ua: "Вінниця, Україна" },
    project: null,
    tone: "accent",
    cats: ["web"]
  },
  {
    result: { en: "3rd Place", ua: "3 місце" },
    title: { en: "CreDiCo 2024", ua: "CreDiCo 2024" },
    category: { en: "Web Design: Software Implementation", ua: "Вебдизайн: програмна реалізація" },
    year: "2024",
    location: null,
    project: null,
    tone: "muted",
    cats: ["web"]
  },
  {
    result: { en: "Absolute Winner", ua: "Абсолютний переможець" },
    title: { en: "Junior Academy of Sciences — Defense of Research Works", ua: "МАН України — Захист науково-дослідницьких робіт" },
    category: { en: "City Stage", ua: "Міський етап" },
    year: "2025",
    location: null,
    project: null,
    tone: "accent",
    cats: ["research"]
  },
  {
    result: { en: "Winner", ua: "Переможець" },
    title: { en: "Junior Academy of Sciences — Defense of Research Works", ua: "МАН України — Захист науково-дослідницьких робіт" },
    category: { en: "Regional Stage", ua: "Обласний етап" },
    year: "2025",
    location: null,
    project: null,
    tone: "accent",
    cats: ["research"]
  },
  {
    result: { en: "2nd Place", ua: "2 місце" },
    title: { en: "Junior Academy of Sciences — Defense of Research Works", ua: "МАН України — Захист науково-дослідницьких робіт" },
    category: { en: "Regional Stage", ua: "Обласний етап" },
    year: "2026",
    location: null,
    project: null,
    tone: "accent",
    cats: ["research"]
  },
  {
    result: { en: "1st Place", ua: "1 місце" },
    title: { en: "Hack The FICT", ua: "Hack The FICT" },
    category: { en: "Hackathon", ua: "Хакатон" },
    year: "2026",
    location: null,
    project: { en: "HelioCore AI", ua: "HelioCore AI" },
    tone: "accent",
    cats: ["hackathons"]
  },
  {
    result: { en: "2nd Place", ua: "2 місце" },
    title: { en: '"3D Printing in STEM" Hackathon', ua: 'Хакатон «3D-друк у STEM»' },
    category: { en: "Hackathon · STEM", ua: "Хакатон · STEM" },
    year: null,
    location: null,
    project: { en: "Innovation Solar System", ua: "Innovation Solar System" },
    tone: "accent",
    cats: ["hackathons", "iot"]
  },
  {
    result: { en: "Participant", ua: "Учасник" },
    title: { en: "Startup School of Zhytomyr Polytechnic", ua: "Стартап-школа Житомирської політехніки" },
    category: { en: "Educational Startup School · DemoDay", ua: "Освітня стартап-школа · DemoDay" },
    year: null,
    location: null,
    project: null,
    tone: "muted",
    cats: ["startup"]
  },
  {
    result: { en: "Participant", ua: "Учасник" },
    title: { en: "Winter School of Radio Electronics and IoT", ua: "Зимова школа радіоелектроніки та IoT" },
    category: { en: "Zhytomyr Polytechnic", ua: "Житомирська політехніка" },
    year: "2026",
    location: null,
    project: null,
    tone: "muted",
    cats: ["iot"]
  },
  {
    result: { en: "Participant", ua: "Учасник" },
    title: { en: "Innovation Hub Accelerator Program", ua: "Акселераційна програма Innovation Hub" },
    category: { en: "Zhytomyr Polytechnic + BGV Group Management", ua: "Житомирська політехніка + BGV Group Management" },
    year: "2026",
    location: null,
    project: { en: "HelioCore AI", ua: "HelioCore AI" },
    tone: "muted",
    cats: ["startup"]
  },
  {
    result: { en: "Participant", ua: "Учасник" },
    title: { en: "CreDiCo 2025", ua: "CreDiCo 2025" },
    category: { en: "Program", ua: "Програма" },
    year: "2025",
    location: null,
    project: null,
    tone: "muted",
    cats: ["startup", "web"]
  },
  {
    result: { en: "3rd Degree Laureate", ua: "Лауреат III ступеня" },
    title: { en: '"World Through the Camera Lens"', ua: '«Світ через об\'єктив камери»' },
    category: { en: "Nature & Landscapes", ua: "Природа та ландшафти" },
    year: null,
    location: null,
    project: null,
    tone: "muted",
    cats: []
  }
];

let activeFilter = "all";

/* Escape helper so any text with < > & is rendered safely. */
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* Build one card's HTML for the current language. */
function achievementCard(item, index) {
  const lang = window.i18n.current;
  const L = function (obj) { return obj ? esc(obj[lang] || obj.en) : ""; };

  const meta = [];
  if (item.year) meta.push('<span>' + esc(item.year) + "</span>");
  if (item.location) meta.push("<span>" + L(item.location) + "</span>");
  if (item.project) meta.push("<span>" + L(item.project) + "</span>");

  return (
    '<article class="ach" data-cats="' + item.cats.join(" ") + '">' +
      '<div class="ach__top">' +
        '<span class="ach__result">' + L(item.result) + "</span>" +
      "</div>" +
      '<h3 class="ach__title">' + L(item.title) + "</h3>" +
      '<p class="ach__meta">' + meta.join("") + "</p>" +
      '<div class="ach__spacer"></div>' +
      '<div class="ach__foot">' +
        '<button class="btn btn--link" data-proof="' + index + '">' +
          "<span>" + window.i18n.t("cta.viewProof") + '</span> <span class="arrow">&rarr;</span>' +
        "</button>" +
      "</div>" +
    "</article>"
  );
}

/* Render all cards that match the active filter. */
function renderAchievements() {
  const grid = document.getElementById("achGrid");
  if (!grid) return;

  const html = ACHIEVEMENTS
    .map(function (item, i) {
      const match = activeFilter === "all" || item.cats.indexOf(activeFilter) !== -1;
      return match ? achievementCard(item, i) : "";
    })
    .join("");

  grid.innerHTML = html;
  wireProofButtons();
}

/* Open the proof modal for a given achievement. */
function wireProofButtons() {
  document.querySelectorAll("[data-proof]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openProofModal(ACHIEVEMENTS[Number(btn.dataset.proof)]);
    });
  });
}

/* --------------------------------------------------------------------------
   Proof modal — reuses the .modal markup present on the achievements page.
   Shows an elegant "certificate image placeholder" (no fake certificates).
   -------------------------------------------------------------------------- */
function openProofModal(item) {
  const modal = document.getElementById("proofModal");
  if (!modal) return;
  const lang = window.i18n.current;
  const L = function (obj) { return obj ? (obj[lang] || obj.en) : "—"; };

  modal.querySelector(".modal__title").textContent = L(item.title);

  const rows = [
    ["Result", L(item.result)],
    ["Category", L(item.category)],
    ["Year", item.year || "[Add information]"],
    ["Location", item.location ? L(item.location) : "[Add information]"]
  ];
  if (item.project) rows.push(["Project", L(item.project)]);

  const info = modal.querySelector(".modal__info");
  info.innerHTML = rows.map(function (r) {
    return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>";
  }).join("");

  openModal(modal);
}

/* --------------------------------------------------------------------------
   Filter bar wiring.
   -------------------------------------------------------------------------- */
function initFilters() {
  const bar = document.querySelector(".filters");
  if (!bar) return;

  bar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    bar.querySelectorAll(".filter").forEach(function (f) {
      const on = f === btn;
      f.classList.toggle("is-active", on);
      f.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderAchievements();
  });
}

/* Boot on the achievements page + re-render when language changes. */
document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("achGrid")) return;
  initFilters();
  renderAchievements();
});
document.addEventListener("languagechange", function () {
  if (document.getElementById("achGrid")) renderAchievements();
});
