(function () {
  "use strict";
  var THEME_STORAGE_KEY = "afrim-gjelaj-theme";

  function currentLangPack() {
    var lang = document.documentElement.lang === "sq" ? "sq" : "en";
    return window.SiteI18n.M[lang];
  }

  function setNavToggleAria(open) {
    var toggle = document.querySelector(".nav-toggle");
    if (!toggle || !window.SiteI18n) return;
    var pack = currentLangPack();
    toggle.setAttribute("aria-label", open ? pack.aria_menu_close : pack.aria_menu_open);
  }

  if (window.SiteI18n) {
    window.SiteI18n.applyLang(window.SiteI18n.getStoredLang());
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    var isLight = theme === "light";
    root.setAttribute("data-theme", isLight ? "light" : "dark");
    if (btn) {
      var icon = btn.querySelector(".theme-toggle-icon");
      var text = btn.querySelector(".theme-toggle-text");
      btn.setAttribute("aria-pressed", isLight ? "true" : "false");
      btn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      if (icon) icon.textContent = isLight ? "☀️" : "🌙";
      if (text) text.textContent = isLight ? "Light" : "Dark";
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isLight ? "light" : "dark");
    } catch (e) {}
  }

  function getPreferredTheme() {
    try {
      var saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  applyTheme(getPreferredTheme());

  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  var heroImg = document.querySelector(".hero-img");
  if (heroImg) {
    heroImg.addEventListener("error", function onHeroImgError() {
      heroImg.removeEventListener("error", onHeroImgError);
      var src = heroImg.getAttribute("src") || "";
      if (src.indexOf("profile.svg") === -1) {
        heroImg.setAttribute("src", "images/profile.svg");
      }
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-set-lang");
      if (window.SiteI18n && (lang === "en" || lang === "sq")) {
        window.SiteI18n.applyLang(lang);
        setNavToggleAria(document.querySelector(".nav-toggle") && document.querySelector(".nav-toggle").getAttribute("aria-expanded") === "true");
      }
    });
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      setNavToggleAria(open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        setNavToggleAria(false);
      });
    });
  }

  function setupRevealAnimations() {
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = document.querySelectorAll(
      "main section, .card, .timeline li, .pub-list li, .contact-dl dt, .contact-dl dd"
    );

    if (reduceMotion) {
      targets.forEach(function (el) {
        el.classList.add("reveal-in");
      });
      return;
    }

    targets.forEach(function (el, idx) {
      el.classList.add("reveal-init");
      var delayClass = "reveal-delay-" + ((idx % 4) + 1);
      el.classList.add(delayClass);
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("reveal-in");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  setupRevealAnimations();
})();
