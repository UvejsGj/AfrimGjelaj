(function () {
  "use strict";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lowPower =
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    (navigator.connection && navigator.connection.saveData);
  if (lowPower) {
    document.body.classList.add("is-low-power");
  }

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

  function setupSceneProgressAndNav() {
    var progress = document.querySelector(".scroll-progress-bar");
    var sections = Array.from(document.querySelectorAll("main section[id]"));
    var navLinks = Array.from(document.querySelectorAll(".nav-list a"));
    var navIndicator = document.querySelector(".nav-active-indicator");

    function updateProgress() {
      if (!progress) return;
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
      progress.style.transform = "scaleX(" + ratio + ")";
    }

    function setActiveNav(id) {
      var activeIndex = sections.findIndex(function (section) {
        return section.id === id;
      });
      navLinks.forEach(function (link) {
        var isActive = link.getAttribute("href") === "#" + id;
        link.classList.toggle("is-active", isActive);
        if (isActive && navIndicator) {
          navIndicator.style.width = link.offsetWidth + "px";
          navIndicator.style.transform = "translateX(" + link.offsetLeft + "px)";
        }
      });
      sections.forEach(function (section, index) {
        section.classList.remove("scene-past", "scene-current", "scene-next");
        if (index < activeIndex) section.classList.add("scene-past");
        if (index === activeIndex) section.classList.add("scene-current");
        if (index > activeIndex) section.classList.add("scene-next");
      });
    }

    if ("IntersectionObserver" in window && sections.length) {
      var sectionObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var sectionId = entry.target.getAttribute("id");
            if (sectionId) setActiveNav(sectionId);
          });
        },
        { rootMargin: "-42% 0px -45% 0px", threshold: 0.01 }
      );
      sections.forEach(function (section) {
        sectionObserver.observe(section);
      });
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", function () {
      var current = document.querySelector(".nav-list a.is-active");
      if (current && navIndicator) {
        navIndicator.style.width = current.offsetWidth + "px";
        navIndicator.style.transform = "translateX(" + current.offsetLeft + "px)";
      }
      updateProgress();
    });
    updateProgress();
    if (sections[0]) setActiveNav(sections[0].id);
  }

  function setupRevealAnimations() {
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

  function setupHeroParallax() {
    if (reduceMotion || lowPower) return;
    var hero = document.querySelector("#overview");
    var photo = document.querySelector(".hero-photo-frame");
    var text = document.querySelector(".hero-text");
    if (!hero || !photo || !text) return;

    window.addEventListener(
      "scroll",
      function () {
        var rect = hero.getBoundingClientRect();
        var ratio = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
        photo.style.transform = "translateY(" + ratio * -14 + "px)";
        text.style.transform = "translateY(" + ratio * 8 + "px)";
      },
      { passive: true }
    );
  }

  function setupCardTilt() {
    if (reduceMotion || lowPower) return;
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("mousemove", function (ev) {
        var r = card.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width - 0.5;
        var py = (ev.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(800px) rotateX(" + py * -4 + "deg) rotateY(" + px * 5 + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  function setupPublicationFocus() {
    var list = document.querySelector(".pub-list");
    if (!list) return;
    var items = Array.from(list.querySelectorAll("li"));
    items.forEach(function (item) {
      item.setAttribute("tabindex", "0");
      function activate() {
        list.classList.add("has-focus-item");
        item.classList.add("is-focus-item");
      }
      function clear() {
        list.classList.remove("has-focus-item");
        items.forEach(function (li) {
          li.classList.remove("is-focus-item");
        });
      }
      item.addEventListener("mouseenter", activate);
      item.addEventListener("focus", activate);
      item.addEventListener("mouseleave", clear);
      item.addEventListener("blur", clear);
    });
  }

  function setupTableRowReveal() {
    var rows = document.querySelectorAll(".subjects-table tbody tr");
    if (reduceMotion) {
      rows.forEach(function (row) {
        row.classList.add("row-in");
      });
      return;
    }
    rows.forEach(function (row) {
      row.classList.add("row-init");
    });
    if (!("IntersectionObserver" in window)) {
      rows.forEach(function (row) {
        row.classList.add("row-in");
      });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("row-in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    rows.forEach(function (row) {
      observer.observe(row);
    });
  }

  function setupCounterChips() {
    var stats = document.querySelectorAll("[data-count-to]");
    if (!stats.length) return;
    function runCounter(el) {
      if (el.getAttribute("data-counted") === "1") return;
      el.setAttribute("data-counted", "1");
      var target = Number(el.getAttribute("data-count-to")) || 0;
      if (reduceMotion) {
        el.textContent = String(target);
        return;
      }
      var duration = 900;
      var startTime = performance.now();
      function step(now) {
        var t = Math.min(1, (now - startTime) / duration);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) {
      stats.forEach(runCounter);
      return;
    }
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach(function (stat) {
      observer.observe(stat);
    });
  }

  setupSceneProgressAndNav();
  setupRevealAnimations();
  setupHeroParallax();
  setupCardTilt();
  setupPublicationFocus();
  setupTableRowReveal();
  setupCounterChips();
})();
