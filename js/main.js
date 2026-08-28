/* ===========================================================================
   main.js — turns the lists in data.js into HTML.

   You normally do NOT need to edit this file. Edit js/data.js instead.

   How it works: each render function looks for a container element by id.
   If that element is not on the current page, the function quietly does
   nothing — which is why the same script can serve both index.html and
   projects.html.
   =========================================================================== */

/* Small helper: escape text so a stray < or & in your content cannot break
   the page. Everything from data.js goes through this. */
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Called by the <img onerror> below when a logo file is missing: replaces the
   broken image with the initials, so the layout never collapses. */
function logoFallback(img) {
  const initials = img.getAttribute("data-initials") || "";
  img.parentNode.innerHTML = '<span class="initials">' + esc(initials) + '</span>';
}

/* Builds the square logo well. Pass an empty src to show initials directly. */
function logoHTML(src, name) {
  const initials = String(name || "")
    .replace(/[^A-Za-z ]/g, " ")
    .split(/\s+/).filter(Boolean).slice(0, 2)
    .map(w => w[0].toUpperCase()).join("");

  if (!src) return `<div class="logo"><span class="initials">${esc(initials)}</span></div>`;

  return `<div class="logo">
    <img src="${esc(src)}" alt="${esc(name)} logo"
         data-initials="${esc(initials)}" onerror="logoFallback(this)">
  </div>`;
}

function tagsHTML(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tag-row">${tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
}


/* ------------------------------------------------------------- INTRO / HERO */
function renderProfile() {
  const nameEl = document.getElementById("hero-name");
  if (!nameEl) return;

  nameEl.textContent = PROFILE.name;
  document.getElementById("hero-role").textContent = PROFILE.role;
  document.getElementById("hero-intro").innerHTML =
    PROFILE.intro.map(p => `<p>${esc(p)}</p>`).join("");

  document.getElementById("hero-meta").innerHTML = PROFILE.meta
    .map(m => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("");

  // Focus cards
  const focus = document.getElementById("focus-grid");
  if (focus && PROFILE.focus) {
    focus.innerHTML = PROFILE.focus.map(f =>
      `<article class="focus-card reveal">
         <h3>${esc(f.title)}</h3><p>${esc(f.text)}</p>
       </article>`).join("");
  }
}

/* Fills every element that carries a data-profile attribute, e.g.
   <a data-profile="linkedin">. Hides the element if the value is empty. */
function renderProfileLinks() {
  document.querySelectorAll("[data-profile]").forEach(el => {
    const key = el.dataset.profile;
    let value = PROFILE[key] || "";

    if (!value) { el.hidden = true; return; }

    if (key === "email") el.href = "mailto:" + value;
    else if (key === "phone") el.href = "tel:" + value.replace(/\s/g, "");
    else el.href = value;

    if (el.dataset.profileText === "true") el.textContent = value;
  });
}


/* ---------------------------------------------------------------- EXPERIENCE */
function renderExperience() {
  const host = document.getElementById("experience-list");
  if (!host) return;

  host.innerHTML = EXPERIENCE.map(job => `
    <article class="job reveal">
      ${logoHTML(job.logo, job.company)}
      <div>
        <div class="job-head">
          <h3>${esc(job.role)}</h3>
          <span class="period">${esc(job.period)}</span>
        </div>
        <div class="company">${esc(job.company)}${job.location ? " · " + esc(job.location) : ""}</div>
        <ul>${job.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        ${tagsHTML(job.tags)}
      </div>
    </article>`).join("");
}


/* ------------------------------------------------------------------ TIMELINE */
function renderTimeline() {
  const host = document.getElementById("timeline");
  if (!host) return;

  host.innerHTML = TIMELINE.map(item => {
    const isExtra = item.kind === "extracurricular";
    const details = item.details && item.details.length
      ? `<ul>${item.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : "";

    return `
      <div class="tl-item reveal ${isExtra ? "is-extra" : ""}">
        <div class="tl-period">${esc(item.period)}</div>
        <div class="tl-head">
          ${logoHTML(item.logo, item.institution)}
          <div>
            <h3>${esc(item.title)}</h3>
            <div class="tl-institution">${esc(item.institution)}</div>
            ${item.text ? `<p>${esc(item.text)}</p>` : ""}
            ${details}
          </div>
        </div>
      </div>`;
  }).join("");
}


/* ------------------------------------------------------------------ PROJECTS */
function projectCard(p) {
  const media = p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)}">`
    : `<div class="placeholder">Add image · assets/projects/</div>`;

  const links = [];
  if (p.repo) links.push(`<a href="${esc(p.repo)}" target="_blank" rel="noopener">GitHub ↗</a>`);
  if (p.demo) links.push(`<a href="${esc(p.demo)}" target="_blank" rel="noopener">Report ↗</a>`);
  // Placeholder shown while a repo link is still missing.
  if (!links.length) links.push(`<a href="#" aria-disabled="true" title="Add the repo URL in js/data.js">GitHub · add link</a>`);

  return `
    <article class="project reveal" data-tags="${esc((p.tags || []).join("|"))}">
      <div class="project-media">${media}</div>
      <div class="project-body">
        <span class="year">${esc(p.year || "")}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
        <div class="project-links">${links.join("")}</div>
        ${tagsHTML(p.tags)}
      </div>
    </article>`;
}

function renderProjects() {
  const host = document.getElementById("project-grid");
  if (!host) return;

  host.innerHTML = PROJECTS.map(projectCard).join("");
  buildFilters(host);
}

/* How many projects a tag must appear in before it becomes a filter button.
   Set to 1 to get a button for every single tag. */
const FILTER_MIN_COUNT = 2;

/* Filter buttons, plus "All". Cards are simply hidden, not removed. */
function buildFilters(grid) {
  const bar = document.getElementById("filters");
  if (!bar) return;

  // Count how often each tag is used, then keep the recurring ones.
  const counts = {};
  PROJECTS.forEach(p => (p.tags || []).forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
  const tags = Object.keys(counts).filter(t => counts[t] >= FILTER_MIN_COUNT).sort();
  bar.innerHTML =
    `<button class="filter" data-tag="all" aria-pressed="true">All</button>` +
    tags.map(t => `<button class="filter" data-tag="${esc(t)}" aria-pressed="false">${esc(t)}</button>`).join("");

  bar.addEventListener("click", e => {
    const btn = e.target.closest(".filter");
    if (!btn) return;

    bar.querySelectorAll(".filter").forEach(b =>
      b.setAttribute("aria-pressed", String(b === btn)));

    const tag = btn.dataset.tag;
    let shown = 0;
    grid.querySelectorAll(".project").forEach(card => {
      const match = tag === "all" || card.dataset.tags.split("|").includes(tag);
      card.hidden = !match;
      if (match) shown++;
    });

    const empty = document.getElementById("empty-state");
    if (empty) empty.hidden = shown > 0;
  });
}


/* -------------------------------------------------------------- INTERACTIONS */

/* Mobile menu. */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

/* Fade elements in as they enter the viewport. */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

  items.forEach(el => io.observe(el));
}


/* ------------------------------------------------------------------ STARTUP */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");

  renderProfile();
  renderProfileLinks();
  renderExperience();
  renderTimeline();
  renderProjects();

  initNav();
  initReveal();   // must run after rendering, so new .reveal nodes are observed

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
