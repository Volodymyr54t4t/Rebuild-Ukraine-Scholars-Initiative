/* ==========================================================================
   projects.js — Project case-study switcher (Vanilla JS)
   --------------------------------------------------------------------------
   The projects page shows three case studies. A tab bar lets the visitor
   switch between them; only one case study is visible at a time.
   Tabs are keyboard accessible (Left/Right arrows + Home/End).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const tabs = Array.prototype.slice.call(document.querySelectorAll(".proj-tab"));
  const panels = Array.prototype.slice.call(document.querySelectorAll(".proj-panel"));
  if (!tabs.length || !panels.length) return;

  function activate(index) {
    tabs.forEach(function (tab, i) {
      const on = i === index;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.setAttribute("tabindex", on ? "0" : "-1");
    });
    panels.forEach(function (panel, i) {
      panel.hidden = i !== index;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { activate(i); });

    // Keyboard navigation between tabs.
    tab.addEventListener("keydown", function (e) {
      let next = null;
      if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      if (next !== null) {
        e.preventDefault();
        activate(next);
        tabs[next].focus();
      }
    });
  });

  // Start on the first project.
  activate(0);
});
