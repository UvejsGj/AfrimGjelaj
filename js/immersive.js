/* Immersive layer for the profile:
   1. self-drawing CNC toolpath (hero backdrop + section dividers)
   2. command palette (Ctrl/Cmd+K) to jump to sections & publications
   3. explorable publications (topic filter chips)
   4. magnetic hero buttons
   5. cursor-reactive ambient light on section backdrops
   6. timeline connector that draws on scroll
   7. self-drawing section underlines
   8. vertical section-dot nav
   9. brief hero "assembly" on first visit

   All motion is gated behind prefers-reduced-motion / low-power / coarse-pointer. */
(function () {
  "use strict";

  var root = document.documentElement;
  var mm = window.matchMedia ? window.matchMedia.bind(window) : null;
  var reduceMotion = mm && mm("(prefers-reduced-motion: reduce)").matches;
  var lowPower = document.body.classList.contains("is-low-power");
  var coarse = mm && mm("(pointer: coarse)").matches;
  var canHover = mm && mm("(hover: hover)").matches;
  var motionOK = !reduceMotion && !lowPower;
  var pointerFX = motionOK && canHover && !coarse;

  if (!reduceMotion) root.classList.add("fx");

  function lang() {
    return root.getAttribute("lang") === "sq" ? "sq" : "en";
  }
  function t(key, fallback) {
    try {
      var p = window.SiteI18n && window.SiteI18n.M[lang()];
      return (p && p[key]) || fallback;
    } catch (e) {
      return fallback;
    }
  }
  function scrollToEl(el, block) {
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: block || "start" });
  }

  /* ---------- shared rAF pointer dispatcher ---------- */
  var pointerCbs = [];
  var pScheduled = false;
  var px = 0, py = 0;
  function onPointer(e) {
    px = e.clientX;
    py = e.clientY;
    if (pScheduled) return;
    pScheduled = true;
    requestAnimationFrame(function () {
      pScheduled = false;
      for (var i = 0; i < pointerCbs.length; i++) pointerCbs[i](px, py);
    });
  }
  function addPointer(cb) {
    if (!pointerCbs.length) window.addEventListener("pointermove", onPointer, { passive: true });
    pointerCbs.push(cb);
  }

  /* ---------- re-localize JS-built UI when language changes ---------- */
  var localizers = [];
  document.addEventListener("i18n:changed", function () {
    localizers.forEach(function (fn) {
      try {
        fn();
      } catch (e) {}
    });
  });

  /* ---------- shared "draw when visible" observer ---------- */
  var drawObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries, obs) {
            entries.forEach(function (en) {
              if (!en.isIntersecting) return;
              en.target.classList.add("is-drawn");
              obs.unobserve(en.target);
            });
          },
          { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
        )
      : null;
  function drawWhenVisible(el) {
    if (!el) return;
    if (!drawObserver) {
      el.classList.add("is-drawn");
      return;
    }
    drawObserver.observe(el);
  }

  /* ---------- 1a. hero toolpath draws on load ---------- */
  function setupHeroToolpath() {
    var line = document.querySelector(".toolpath--hero .toolpath-line");
    if (!line) return;
    if (!motionOK) {
      line.classList.add("is-drawn");
      return;
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        line.classList.add("is-drawn");
      });
    });
  }

  /* ---------- 1b. inject + draw toolpath dividers between sections ---------- */
  function setupDividers() {
    var secs = Array.prototype.slice
      .call(document.querySelectorAll("main > section[id]"))
      .filter(function (s) {
        return s.id !== "overview";
      });
    secs.forEach(function (s) {
      var ns = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(ns, "svg");
      svg.setAttribute("class", "toolpath toolpath--divider");
      svg.setAttribute("viewBox", "0 0 1200 20");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("aria-hidden", "true");
      var path = document.createElementNS(ns, "path");
      path.setAttribute("class", "toolpath-line");
      path.setAttribute("pathLength", "1");
      path.setAttribute("d", "M0 10 H544 q10 0 14 -6 q4 -6 14 -6 q10 0 14 6 q4 6 14 6 H1200");
      svg.appendChild(path);
      s.insertBefore(svg, s.firstChild);
      if (motionOK) drawWhenVisible(path);
      else path.classList.add("is-drawn");
    });
  }

  /* ---------- 6. timeline connector + 7. self-drawing underlines ---------- */
  function setupDrawnAccents() {
    document.querySelectorAll("main section h2").forEach(function (h) {
      if (motionOK) drawWhenVisible(h);
      else h.classList.add("is-drawn");
    });
    document.querySelectorAll(".timeline").forEach(function (tl) {
      if (motionOK) drawWhenVisible(tl);
      else tl.classList.add("is-drawn");
    });
  }

  /* ---------- 5. cursor-reactive ambient light ---------- */
  function setupCursorGlow() {
    if (!pointerFX) return;
    root.classList.add("fx-glow");
    addPointer(function (x, y) {
      var el = document.elementFromPoint(x, y);
      var sec = el && el.closest ? el.closest(".scene") : null;
      if (!sec) return;
      var r = sec.getBoundingClientRect();
      sec.style.setProperty("--gx", (((x - r.left) / r.width) * 100).toFixed(1) + "%");
      sec.style.setProperty("--gy", (((y - r.top) / r.height) * 100).toFixed(1) + "%");
    });
  }

  /* ---------- 4. magnetic hero buttons ---------- */
  function setupMagnetic() {
    if (!pointerFX) return;
    document.querySelectorAll(".hero-actions .btn").forEach(function (btn) {
      var raf = false;
      btn.addEventListener("pointermove", function (e) {
        if (raf) return;
        raf = true;
        requestAnimationFrame(function () {
          raf = false;
          var r = btn.getBoundingClientRect();
          var mx = e.clientX - (r.left + r.width / 2);
          var my = e.clientY - (r.top + r.height / 2);
          btn.style.transform = "translate(" + (mx * 0.25).toFixed(1) + "px," + (my * 0.4).toFixed(1) + "px)";
        });
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- 8. vertical section-dot nav ---------- */
  function setupSectionDots() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    if (sections.length < 2) return;
    var navLinks = {};
    document.querySelectorAll(".nav-list a").forEach(function (a) {
      navLinks[a.getAttribute("href")] = a;
    });
    var nav = document.createElement("nav");
    nav.className = "section-dots";
    nav.setAttribute("aria-label", t("dots_aria", "Sections"));
    sections.forEach(function (s) {
      var link = navLinks["#" + s.id];
      var label = link ? link.textContent.trim() : s.id;
      var dot = document.createElement("a");
      dot.className = "section-dot";
      dot.href = "#" + s.id;
      dot.dataset.id = s.id;
      dot.setAttribute("aria-label", label);
      dot.innerHTML = '<span class="section-dot-label"></span>';
      dot.querySelector(".section-dot-label").textContent = label;
      nav.appendChild(dot);
    });
    document.body.appendChild(nav);

    function setActive(id) {
      nav.querySelectorAll(".section-dot").forEach(function (d) {
        d.classList.toggle("is-active", d.dataset.id === id);
      });
    }
    // keep labels in sync with language changes
    localizers.push(function () {
      nav.querySelectorAll(".section-dot").forEach(function (d) {
        var link = navLinks["#" + d.dataset.id];
        if (link) {
          var lbl = link.textContent.trim();
          d.setAttribute("aria-label", lbl);
          d.querySelector(".section-dot-label").textContent = lbl;
        }
      });
    });

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) setActive(en.target.id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
      );
      sections.forEach(function (s) {
        io.observe(s);
      });
    }
    setActive(sections[0].id);
  }

  /* ---------- 3. publication topic filter ---------- */
  function setupPublicationFilter() {
    var list = document.querySelector("#publications .pub-list");
    if (!list) return;
    var items = Array.prototype.slice.call(list.querySelectorAll("li"));
    if (!items.length) return;

    var topics = [
      { key: "all", label: t("filter_all", "All") },
      { key: "cnc", label: t("filter_cnc", "CNC") },
      { key: "ai", label: t("filter_ai", "AI & optimization") },
      { key: "cadcam", label: t("filter_cadcam", "CAD/CAM & systems") },
      { key: "cross", label: t("filter_cross", "Cross-disciplinary") }
    ];

    var bar = document.createElement("div");
    bar.className = "pub-filter";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", t("filter_aria", "Filter publications by topic"));
    topics.forEach(function (tp, i) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "pub-chip" + (i === 0 ? " is-active" : "");
      chip.dataset.topic = tp.key;
      chip.textContent = tp.label;
      chip.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      bar.appendChild(chip);
    });
    list.parentNode.insertBefore(bar, list);

    localizers.push(function () {
      var map = {
        all: t("filter_all", "All"),
        cnc: t("filter_cnc", "CNC"),
        ai: t("filter_ai", "AI & optimization"),
        cadcam: t("filter_cadcam", "CAD/CAM & systems"),
        cross: t("filter_cross", "Cross-disciplinary")
      };
      bar.querySelectorAll(".pub-chip").forEach(function (c) {
        if (map[c.dataset.topic]) c.textContent = map[c.dataset.topic];
      });
    });

    function apply(topic) {
      items.forEach(function (li) {
        var topicsAttr = li.getAttribute("data-topic") || "";
        var show = topic === "all" || topicsAttr.split(/\s+/).indexOf(topic) !== -1;
        li.classList.toggle("is-filtered-out", !show);
        if (show) {
          li.removeAttribute("aria-hidden");
          if (li.hasAttribute("tabindex")) li.setAttribute("tabindex", "0");
        } else {
          li.setAttribute("aria-hidden", "true");
          if (li.hasAttribute("tabindex")) li.setAttribute("tabindex", "-1");
        }
      });
    }

    bar.addEventListener("click", function (e) {
      var chip = e.target.closest(".pub-chip");
      if (!chip) return;
      bar.querySelectorAll(".pub-chip").forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
      });
      apply(chip.dataset.topic);
    });
  }

  /* ---------- 2. command palette ---------- */
  function setupCommandPalette() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    if (!sections.length) return;

    // header trigger button (discoverable / touch-friendly)
    var header = document.querySelector(".header-inner");
    var trigger = null;
    if (header) {
      trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "cmdk-trigger";
      trigger.setAttribute("aria-label", t("cmdk_open", "Search (Ctrl+K)"));
      trigger.title = t("cmdk_open", "Search (Ctrl+K)");
      trigger.innerHTML =
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
      var nt = header.querySelector(".nav-toggle");
      header.insertBefore(trigger, nt || null);
    }

    // overlay
    var overlay = document.createElement("div");
    overlay.className = "cmdk";
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="cmdk-backdrop" data-cmdk-close></div>' +
      '<div class="cmdk-panel" role="dialog" aria-modal="true" aria-label="' +
      t("cmdk_open", "Search") +
      '">' +
      '<input class="cmdk-input" type="text" role="combobox" aria-expanded="true" aria-controls="cmdk-results" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="' +
      t("cmdk_placeholder", "Jump to a section or publication…") +
      '" />' +
      '<ul class="cmdk-results" id="cmdk-results" role="listbox"></ul>' +
      '<div class="cmdk-empty" hidden>' +
      t("cmdk_empty", "No matches") +
      "</div>" +
      "</div>";
    document.body.appendChild(overlay);

    var input = overlay.querySelector(".cmdk-input");
    var resultsEl = overlay.querySelector(".cmdk-results");
    var emptyEl = overlay.querySelector(".cmdk-empty");
    var lastFocus = null;
    var results = [];
    var active = 0;

    localizers.push(function () {
      input.placeholder = t("cmdk_placeholder", "Jump to a section or publication…");
      emptyEl.textContent = t("cmdk_empty", "No matches");
      if (trigger) {
        trigger.setAttribute("aria-label", t("cmdk_open", "Search (Ctrl+K)"));
        trigger.title = t("cmdk_open", "Search (Ctrl+K)");
      }
    });

    function buildIndex() {
      var navLinks = {};
      document.querySelectorAll(".nav-list a").forEach(function (a) {
        navLinks[a.getAttribute("href")] = a.textContent.trim();
      });
      var idx = sections.map(function (s) {
        var label = navLinks["#" + s.id] || s.id;
        return {
          type: "section",
          label: label,
          search: label.toLowerCase(),
          sub: t("cmdk_section", "Section"),
          el: s
        };
      });
      document.querySelectorAll("#publications .pub-list li").forEach(function (li) {
        if (li.classList.contains("pub-note")) return;
        var full = li.textContent.replace(/\s+/g, " ").trim();
        var label = full.length > 90 ? full.slice(0, 88) + "…" : full;
        idx.push({ type: "pub", label: label, search: full.toLowerCase(), sub: t("cmdk_pub", "Publication"), el: li });
      });
      return idx;
    }
    var indexData = buildIndex();

    function render(query) {
      var q = query.trim().toLowerCase();
      results = !q
        ? indexData.slice()
        : indexData.filter(function (r) {
            return r.search.indexOf(q) !== -1;
          });
      active = 0;
      resultsEl.innerHTML = "";
      emptyEl.hidden = results.length > 0;
      results.forEach(function (r, i) {
        var li = document.createElement("li");
        li.className = "cmdk-item" + (i === 0 ? " is-active" : "");
        li.id = "cmdk-opt-" + i;
        li.setAttribute("role", "option");
        li.setAttribute("aria-selected", i === 0 ? "true" : "false");
        li.innerHTML =
          '<span class="cmdk-item-label"></span><span class="cmdk-item-kind">' + r.sub + "</span>";
        li.querySelector(".cmdk-item-label").textContent = r.label;
        li.addEventListener("mousemove", function () {
          setActive(i);
        });
        li.addEventListener("click", function () {
          activate(i);
        });
        resultsEl.appendChild(li);
      });
      syncActive();
    }

    function setActive(i) {
      if (i < 0 || i >= results.length || i === active) return;
      active = i;
      syncActive();
    }
    function syncActive() {
      var nodes = resultsEl.children;
      for (var i = 0; i < nodes.length; i++) {
        var on = i === active;
        nodes[i].classList.toggle("is-active", on);
        nodes[i].setAttribute("aria-selected", on ? "true" : "false");
      }
      if (nodes[active]) {
        input.setAttribute("aria-activedescendant", nodes[active].id);
        nodes[active].scrollIntoView({ block: "nearest" });
      }
    }

    function activate(i) {
      var r = results[i];
      if (!r) return;
      close();
      if (r.type === "section") {
        scrollToEl(r.el, "start");
      } else {
        scrollToEl(r.el, "center");
        r.el.classList.add("cmdk-target");
        setTimeout(function () {
          r.el.classList.remove("cmdk-target");
        }, 1800);
      }
    }

    function open() {
      if (!overlay.hidden) return;
      lastFocus = document.activeElement;
      indexData = buildIndex();
      overlay.hidden = false;
      document.body.classList.add("cmdk-open");
      input.value = "";
      render("");
      requestAnimationFrame(function () {
        input.focus();
      });
    }
    function close() {
      if (overlay.hidden) return;
      overlay.hidden = true;
      document.body.classList.remove("cmdk-open");
      input.removeAttribute("aria-activedescendant");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function toggle() {
      overlay.hidden ? open() : close();
    }

    input.addEventListener("input", function () {
      render(input.value);
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive(Math.min(active + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive(Math.max(active - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        activate(active);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    });
    overlay.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-cmdk-close")) close();
    });
    if (trigger) trigger.addEventListener("click", open);
    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        toggle();
      }
    });
  }

  /* ---------- 9. hero "assembly" on first visit ---------- */
  function setupHeroIntro() {
    if (!motionOK) return;
    var seen;
    try {
      seen = localStorage.getItem("afrim-gjelaj-intro-seen");
    } catch (e) {}
    if (seen) return;
    root.classList.add("intro-run");
    try {
      localStorage.setItem("afrim-gjelaj-intro-seen", "1");
    } catch (e) {}
    window.setTimeout(function () {
      root.classList.remove("intro-run");
    }, 2200);
  }

  /* ---------- init ---------- */
  setupHeroToolpath();
  setupDividers();
  setupDrawnAccents();
  setupCursorGlow();
  setupMagnetic();
  setupSectionDots();
  setupPublicationFilter();
  setupCommandPalette();
  setupHeroIntro();
})();
