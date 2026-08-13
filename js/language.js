/* ==========================================================================
   language.js — UA / EN language switching (Vanilla JS, no libraries)
   --------------------------------------------------------------------------
   How it works:
   1. Every translatable element in the HTML has a data-i18n="key" attribute.
   2. The translations object below holds the text for each key in `en` + `ua`.
   3. setLanguage(lang) walks the DOM and swaps textContent for each element.
   4. The chosen language is saved to localStorage so it persists across pages.

   To add a new string:
   - Add data-i18n="section.myKey" to the element in the HTML.
   - Add "section.myKey" to BOTH `en` and `ua` below.
   ========================================================================== */

const translations = {
  en: {
    /* ---- Navigation (shared on every page) ---- */
    "nav.home": "Home",
    "nav.about": "About",
    "nav.achievements": "Achievements",
    "nav.projects": "Projects",
    "nav.journey": "Journey",
    "nav.rebuild": "Rebuild Ukraine",
    "nav.motivation": "Motivation",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "brand.role": "Software Engineering",

    /* ---- Shared / footer ---- */
    "footer.tagline": "Personal scholarship portfolio — Rebuild Ukraine Scholars Initiative, Zhytomyr Polytechnic State University.",
    "footer.rights": "Built with HTML, CSS & JavaScript.",
    "cta.viewAll": "View all achievements",
    "cta.viewProject": "View project",
    "cta.readMotivation": "Read my motivation",
    "cta.exploreJourney": "Explore my journey",
    "cta.viewProof": "View proof",
    "cta.viewCertificate": "View certificate",

    /* ---- Home ---- */
    "hero.badge": "Rebuild Ukraine Scholars Initiative · 2026",
    "hero.subtitle": "Software Engineering Student",
    "hero.lead": "Building my skills in software development, research and innovation to contribute to Ukraine's technological future.",
    "hero.metaProgram": "F2 · Software Engineering",
    "hero.metaUni": "Zhytomyr Polytechnic State University",
    "hero.metaYear": "2026",
    "portrait.label": "Professional portrait",
    "portrait.hint": "[Add your photo here]",
    "stats.title": "A record of consistent development",
    "stat1.num": "15+",
    "stat1.label": "Achievements & activities",
    "stat2.num": "2024–2026",
    "stat2.label": "Active development",
    "stat3.num": "F2",
    "stat3.label": "Software Engineering",
    "stat4.num": "Multiple",
    "stat4.label": "National & international competitions",
    "featured.eyebrow": "Featured achievements",
    "featured.title": "Recognised at national and international level",
    "fa1.result": "Gold Medal",
    "fa1.title": "INFOMATRIX Ukraine 2026",
    "fa1.sub": "Software Development",
    "fa2.result": "1st Place",
    "fa2.title": "Hack The FICT",
    "fa2.sub": "HelioCore AI",
    "fa3.result": "Absolute Winner",
    "fa3.title": "School Website Competition",
    "fa3.sub": "Youth Web Design",
    "fp.eyebrow": "Featured project",
    "fp.badge": "1st Place — Hack The FICT · 2026",
    "fp.title": "HelioCore AI",
    "fp.desc": "An innovative technology project focused on energy-related solutions, combining software and hardware concepts to explore practical approaches to energy management and resilience.",
    "fp.panel": "Project visual — [Add image]",
    "home.statement1": "I want to learn.",
    "home.statement2": "I want to build.",
    "home.statement3": "I want to contribute.",

    /* ---- About ---- */
    "about.title": "About Me",
    "about.sub": "Who I am. What I do. Where I am going.",
    "about.p1": "My name is Volodymyr Chyzhevskyi. I am a first-year Software Engineering student at Zhytomyr Polytechnic State University.",
    "about.p2": "My interests are focused on software development, web technologies, scientific research, startups, IoT and technological innovation.",
    "about.p3": "My development has grown through competitions, research, hackathons, startup programs, software projects, and STEM and IoT activities — each step building on the last.",
    "about.interestsTitle": "My Interests",
    "int1": "Software Development",
    "int2": "Web Technologies",
    "int3": "Scientific Research",
    "int4": "Startups & Innovation",
    "int5": "IoT & STEM",
    "about.approachTitle": "My Approach",
    "app1.title": "Learn",
    "app1.text": "Continuously develop knowledge and understand new technologies.",
    "app2.title": "Build",
    "app2.text": "Turn knowledge and ideas into practical projects.",
    "app3.title": "Contribute",
    "app3.text": "Use technology and professional development to create useful solutions.",

    /* ---- Achievements ---- */
    "ach.title": "Achievements",
    "ach.sub": "Competitions, research, hackathons and programs that shaped my development.",
    "filter.all": "All",
    "filter.software": "Software",
    "filter.web": "Web Design",
    "filter.research": "Research",
    "filter.hackathons": "Hackathons",
    "filter.startup": "Startup",
    "filter.iot": "IoT / STEM",

    /* ---- Projects ---- */
    "proj.title": "Projects",
    "proj.sub": "From ideas to practical technological solutions.",

    /* ---- Journey ---- */
    "journey.title": "My Journey",
    "journey.sub": "From first competitions to Software Engineering — a continuous line of development.",
    "journey.evoTitle": "How my direction evolved",

    /* ---- Rebuild Ukraine ---- */
    "rebuild.title": "Rebuild Ukraine",
    "rebuild.sub": "How can technology contribute to Ukraine's future?",
    "rebuild.intro1": "Ukraine's future will require specialists capable of developing modern technologies, digital services and innovative solutions.",
    "rebuild.intro2": "My contribution begins with the field I know and want to develop — software engineering.",
    "rebuild.areasTitle": "Four areas where technology matters",
    "imp1.title": "Digitalization",
    "imp1.text": "Software and digital services for education, business and public services.",
    "imp2.title": "Energy",
    "imp2.text": "Technology related to energy management and resilience.",
    "imp3.title": "Security",
    "imp3.text": "Digital technologies and technological resilience.",
    "imp4.title": "Innovation",
    "imp4.text": "Research, startups and technological products.",
    "rebuild.mapTitle": "How my projects connect",
    "rebuild.position": "I do not expect to rebuild an entire country through one project. I want to contribute through my profession — developing software, learning continuously and creating useful technological solutions.",

    /* ---- Motivation ---- */
    "mot.title": "My Motivation",
    "mot.sub": "Why I am applying for the Rebuild Ukraine Scholars Initiative.",
    "mot1.title": "Where I am now",
    "mot2.title": "What I have achieved",
    "mot3.title": "Why Software Engineering",
    "mot4.title": "Why this scholarship",
    "mot5.title": "Why I am a strong candidate",
    "mot6.title": "What I want to do next",

    /* ---- Certificates ---- */
    "cert.title": "Certificates & Proof",
    "cert.sub": "Every achievement has its proof.",
    "certFilter.all": "All",
    "certFilter.awards": "Awards",
    "certFilter.diplomas": "Diplomas",
    "certFilter.certificates": "Certificates",
    "certFilter.programs": "Programs",

    /* ---- Contact ---- */
    "contact.title": "Let's Connect",
    "contact.sub": "Interested in technology, education and innovation?",
    "contact.emailLabel": "Email",
    "contact.linkedinLabel": "LinkedIn",
    "contact.githubLabel": "GitHub",
    "contact.portfolioLabel": "Portfolio",
    "contact.placeholder": "[Add link]",
    "contact.statement": "The future is built by people who are willing to learn, create and take responsibility."
  },

  ua: {
    /* ---- Навігація ---- */
    "nav.home": "Головна",
    "nav.about": "Про мене",
    "nav.achievements": "Досягнення",
    "nav.projects": "Проєкти",
    "nav.journey": "Шлях",
    "nav.rebuild": "Відбудова України",
    "nav.motivation": "Мотивація",
    "nav.certificates": "Сертифікати",
    "nav.contact": "Контакти",
    "brand.role": "Інженерія програмного забезпечення",

    /* ---- Загальне / футер ---- */
    "footer.tagline": "Особисте стипендіальне портфоліо — Rebuild Ukraine Scholars Initiative, Державний університет «Житомирська політехніка».",
    "footer.rights": "Створено за допомогою HTML, CSS та JavaScript.",
    "cta.viewAll": "Усі досягнення",
    "cta.viewProject": "Переглянути проєкт",
    "cta.readMotivation": "Читати мою мотивацію",
    "cta.exploreJourney": "Мій шлях",
    "cta.viewProof": "Переглянути підтвердження",
    "cta.viewCertificate": "Переглянути сертифікат",

    /* ---- Головна ---- */
    "hero.badge": "Rebuild Ukraine Scholars Initiative · 2026",
    "hero.subtitle": "Студент інженерії програмного забезпечення",
    "hero.lead": "Розвиваю навички у розробці програмного забезпечення, дослідженнях та інноваціях, щоб долучитися до технологічного майбутнього України.",
    "hero.metaProgram": "F2 · Інженерія ПЗ",
    "hero.metaUni": "Державний університет «Житомирська політехніка»",
    "hero.metaYear": "2026",
    "portrait.label": "Професійне фото",
    "portrait.hint": "[Додайте своє фото тут]",
    "stats.title": "Послідовний розвиток у цифрах",
    "stat1.num": "15+",
    "stat1.label": "Досягнень та активностей",
    "stat2.num": "2024–2026",
    "stat2.label": "Активний розвиток",
    "stat3.num": "F2",
    "stat3.label": "Інженерія ПЗ",
    "stat4.num": "Багато",
    "stat4.label": "Національних та міжнародних конкурсів",
    "featured.eyebrow": "Ключові досягнення",
    "featured.title": "Визнання на національному та міжнародному рівні",
    "fa1.result": "Золота медаль",
    "fa1.title": "INFOMATRIX Ukraine 2026",
    "fa1.sub": "Розробка ПЗ",
    "fa2.result": "1 місце",
    "fa2.title": "Hack The FICT",
    "fa2.sub": "HelioCore AI",
    "fa3.result": "Абсолютний переможець",
    "fa3.title": "Конкурс «Шкільний сайт»",
    "fa3.sub": "Молодіжний вебдизайн",
    "fp.eyebrow": "Ключовий проєкт",
    "fp.badge": "1 місце — Hack The FICT · 2026",
    "fp.title": "HelioCore AI",
    "fp.desc": "Інноваційний технологічний проєкт, зосереджений на енергетичних рішеннях, що поєднує програмні та апаратні концепції для дослідження практичних підходів до управління енергією та стійкості.",
    "fp.panel": "Візуалізація проєкту — [Додати зображення]",
    "home.statement1": "Я хочу вчитися.",
    "home.statement2": "Я хочу створювати.",
    "home.statement3": "Я хочу долучатися.",

    /* ---- Про мене ---- */
    "about.title": "Про мене",
    "about.sub": "Хто я. Чим займаюся. Куди рухаюся.",
    "about.p1": "Мене звати Володимир Чижевський. Я студент першого курсу спеціальності «Інженерія програмного забезпечення» у Державному університеті «Житомирська політехніка».",
    "about.p2": "Мої інтереси зосереджені на розробці програмного забезпечення, вебтехнологіях, наукових дослідженнях, стартапах, IoT та технологічних інноваціях.",
    "about.p3": "Мій розвиток формувався через конкурси, дослідження, хакатони, стартап-програми, програмні проєкти та діяльність у сфері STEM та IoT — кожен крок будувався на попередньому.",
    "about.interestsTitle": "Мої інтереси",
    "int1": "Розробка ПЗ",
    "int2": "Вебтехнології",
    "int3": "Наукові дослідження",
    "int4": "Стартапи та інновації",
    "int5": "IoT та STEM",
    "about.approachTitle": "Мій підхід",
    "app1.title": "Вчитися",
    "app1.text": "Постійно розвивати знання та розуміти нові технології.",
    "app2.title": "Створювати",
    "app2.text": "Перетворювати знання та ідеї на практичні проєкти.",
    "app3.title": "Долучатися",
    "app3.text": "Використовувати технології та професійний розвиток для створення корисних рішень.",

    /* ---- Досягнення ---- */
    "ach.title": "Досягнення",
    "ach.sub": "Конкурси, дослідження, хакатони та програми, що сформували мій розвиток.",
    "filter.all": "Усі",
    "filter.software": "Софтвер",
    "filter.web": "Вебдизайн",
    "filter.research": "Дослідження",
    "filter.hackathons": "Хакатони",
    "filter.startup": "Стартапи",
    "filter.iot": "IoT / STEM",

    /* ---- Проєкти ---- */
    "proj.title": "Проєкти",
    "proj.sub": "Від ідей до практичних технологічних рішень.",

    /* ---- Шлях ---- */
    "journey.title": "Мій шлях",
    "journey.sub": "Від перших конкурсів до інженерії програмного забезпечення — безперервна лінія розвитку.",
    "journey.evoTitle": "Як розвивався мій напрям",

    /* ---- Відбудова України ---- */
    "rebuild.title": "Відбудова України",
    "rebuild.sub": "Як технології можуть долучитися до майбутнього України?",
    "rebuild.intro1": "Майбутнє України потребуватиме фахівців, здатних розробляти сучасні технології, цифрові сервіси та інноваційні рішення.",
    "rebuild.intro2": "Мій внесок починається зі сфери, яку я знаю і хочу розвивати, — інженерії програмного забезпечення.",
    "rebuild.areasTitle": "Чотири напрями, де технології мають значення",
    "imp1.title": "Цифровізація",
    "imp1.text": "Програмне забезпечення та цифрові сервіси для освіти, бізнесу та державних послуг.",
    "imp2.title": "Енергетика",
    "imp2.text": "Технології, пов'язані з управлінням енергією та стійкістю.",
    "imp3.title": "Безпека",
    "imp3.text": "Цифрові технології та технологічна стійкість.",
    "imp4.title": "Інновації",
    "imp4.text": "Дослідження, стартапи та технологічні продукти.",
    "rebuild.mapTitle": "Як пов'язані мої проєкти",
    "rebuild.position": "Я не очікую відбудувати цілу країну одним проєктом. Я хочу долучатися через свою професію — розробляючи програмне забезпечення, постійно навчаючись і створюючи корисні технологічні рішення.",

    /* ---- Мотивація ---- */
    "mot.title": "Моя мотивація",
    "mot.sub": "Чому я подаюся на Rebuild Ukraine Scholars Initiative.",
    "mot1.title": "Де я зараз",
    "mot2.title": "Чого я досяг",
    "mot3.title": "Чому інженерія ПЗ",
    "mot4.title": "Чому ця стипендія",
    "mot5.title": "Чому я сильний кандидат",
    "mot6.title": "Що я хочу робити далі",

    /* ---- Сертифікати ---- */
    "cert.title": "Сертифікати та підтвердження",
    "cert.sub": "Кожне досягнення має своє підтвердження.",
    "certFilter.all": "Усі",
    "certFilter.awards": "Нагороди",
    "certFilter.diplomas": "Дипломи",
    "certFilter.certificates": "Сертифікати",
    "certFilter.programs": "Програми",

    /* ---- Контакти ---- */
    "contact.title": "Зв'яжімося",
    "contact.sub": "Цікавитеся технологіями, освітою та інноваціями?",
    "contact.emailLabel": "Email",
    "contact.linkedinLabel": "LinkedIn",
    "contact.githubLabel": "GitHub",
    "contact.portfolioLabel": "Портфоліо",
    "contact.placeholder": "[Додати посилання]",
    "contact.statement": "Майбутнє будують люди, готові вчитися, творити і брати на себе відповідальність."
  }
};

/* Expose translations so page scripts (achievements/projects/certificates)
   can localise dynamically generated content too. */
window.i18n = {
  translations: translations,
  current: "en",
  t: function (key) {
    const lang = window.i18n.current;
    return (translations[lang] && translations[lang][key]) || key;
  }
};

/**
 * Apply a language to the whole page.
 * @param {"en"|"ua"} lang
 */
function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  window.i18n.current = lang;

  // Swap text for every element that declares a translation key.
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  // Update <html lang="...">
  document.documentElement.setAttribute("lang", lang);

  // Update the language switcher buttons' active state.
  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  // Persist choice so it carries across pages.
  try { localStorage.setItem("vc-lang", lang); } catch (e) { /* ignore */ }

  // Let page-specific scripts know so they can re-render dynamic content.
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
}

/* Initialise language as early as possible. */
(function initLanguage() {
  let saved = "en";
  try { saved = localStorage.getItem("vc-lang") || "en"; } catch (e) { /* ignore */ }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(saved);

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.dataset.lang);
      });
    });
  });
})();
