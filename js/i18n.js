/* English / Albanian (SQ) copy for the academic profile. */
(function (global) {
  "use strict";

  var STORAGE_KEY = "afrim-gjelaj-lang";

  var M = {
    en: {
      meta_title: "Afrim Gjelaj | Associate Professor — University of Prishtina",
      meta_description:
        "Afrim Gjelaj — Associate Professor at the University of Prishtina. Manufacturing automation, CNC programming, and machining research.",
      skip_link: "Skip to content",
      lang_aria: "Language",
      nav_overview: "Overview",
      nav_about: "About",
      nav_research: "Research",
      nav_publications: "Publications",
      nav_teaching: "Teaching",
      nav_awards: "Awards",
      nav_students: "Students",
      nav_contact: "Contact",
      hero_img_alt: "Afrim Gjelaj, portrait",
      hero_eyebrow: "University of Prishtina · Faculty of Mechanical Engineering",
      hero_tagline: "Associate Professor · Manufacturing, automation & CNC systems",
      hero_lead:
        "Prof. Afrim's work connects advanced manufacturing with industry practice: intelligent CNC programming, process optimization, and metal-cutting research, alongside long-term training and applied engineering projects in Kosovo and the region.",
      highlight_1: "PhD in manufacturing technology & systems (University of Maribor, Slovenia)",
      highlight_2: "Peer-reviewed publications in machining, CNC optimization, and related engineering topics",
      highlight_3:
        "Industry experience: CNC programming, CAD/CAM, and 40+ applied manufacturing projects (per public profile)",
      highlight_4: "Collaboration with GIZ and KIMERK as a CNC / advanced manufacturing trainer (since 2017)",
      btn_scholar: "Google Scholar",
      btn_contact: "Get in touch",
      about_h2: "About",
      about_edu_h3: "Education",
      about_edu_li1_html:
        '<strong>Doctor of Science</strong>, Manufacturing and Automation — University of Maribor, Faculty of Mechanical Engineering (Slovenia). Dissertation: <em>Automated and Intelligent Programming of CNC Machine Tools</em> (<a href="https://dk.um.si/IzpisGradiva.php?id=46159&amp;lang=eng" target="_blank" rel="noopener noreferrer">University of Maribor repository</a>).',
      about_edu_li2_html:
        "<strong>Master’s practical work</strong> (2007–2008) — Juraform E.K. Rechberghausen (Germany), CNC milling using Mastercam.",
      about_career_h3: "Career",
      career_li1:
        "<strong>Associate Professor</strong> — University of Prishtina, Faculty of Mechanical Engineering (September 2022–present).",
      career_li2:
        "<strong>Assistant Professor</strong> — Department of Production and Automation, same faculty (October 2017–September 2022).",
      career_li3:
        "<strong>Autodesk Inventor designer</strong> — MTA2 Hebeprofi (March–August 2013): FMS-style layouts, 2D/3D/assembly design.",
      career_li4:
        "<strong>CNC programmer</strong> — Kosova Steel (2007–2008): milling, lathe, machining centers, CNC plasma.",
      about_ri_h3: "Research interests",
      about_ri_p:
        "Metal cutting and machining; CNC programming and toolpath optimization; CAD/CAM; genetic algorithms and intelligent methods for process optimization; surface quality and cutting forces; simulation and layout of production systems; welding and related mechanical topics in collaboration with colleagues.",
      about_phil_h3: "Teaching & mentorship philosophy",
      about_phil_p:
        "Bridging academic rigor with shop-floor relevance—students learn methods that mirror how modern factories program, measure, and improve processes. Industry projects and trainer work inform examples used in the classroom.",
      research_h2: "Research & projects",
      research_card1_h3: "Intelligent CNC & toolpath optimization",
      research_card1_p:
        "Tool selection, genetic algorithms for cutting conditions, and time-efficient machining—including collaborative work on machine performance and magazine/tool positioning.",
      research_card2_h3: "Process modeling & quality",
      research_card2_p:
        "Milling surface roughness, cutting force optimization, and experimental approaches using computational intelligence.",
      research_card3_h3: "Systems & equipment design",
      research_card3_p:
        "Modular CNC design, welding robot layout for aluminium frames, production-line layout using FlexSim, and vehicle suspension design (collaborative).",
      research_card4_h3: "Industry & training impact",
      research_card4_p:
        "Experience converting manual machines to CNC, FMS-style design in Inventor, and continuous professional training with GIZ and KIMERK in metal cutting, plasma, and additive topics.",
      pub_h2: "Publications",
      pub_view_all: "View all publications on Google Scholar →",
      teaching_h2: "Teaching",
      teaching_courses_h3: "Courses (examples to verify)",
      teaching_course_1: "Computer-aided manufacturing / CNC programming",
      teaching_course_2: "Manufacturing processes and metal cutting",
      teaching_course_3: "Automation and production systems",
      teaching_course_4: "CAD/CAM integrated projects",
      teaching_approach_h3: "Approach",
      awards_h2: "Awards & recognition",
      awards_li1: "Promotion to Associate Professor (2022)",
      awards_li2_dash: "—",
      students_h2: "Students & mentorship",
      contact_h2: "Contact",
      contact_email_dt: "Email",
      contact_affil_dt: "Affiliation",
      contact_affil_dd: "Faculty of Mechanical Engineering · University of Prishtina · Prishtina, Kosovo",
      contact_dept_dt: "Department",
      contact_dept_dd: "Production and Automation",
      contact_profiles_dt: "Profiles",
      extras_univ_short: "University of Prishtina",
      footer_text:
        '© {{YEAR}} Afrim Gjelaj. Academic profile page',
      aria_menu_open: "Open menu",
      aria_menu_close: "Close menu"
    },
    sq: {
      meta_title: "Afrim Gjelaj | Profesor i asociuar — Universiteti i Prishtinës",
      meta_description:
        "Afrim Gjelaj — Profesor i asociuar në Universitetin e Prishtinës. Automatizim i prodhimit, programim CNC dhe kërkim në përpunimin e metaleve.",
      skip_link: "Kalo te përmbajtja",
      lang_aria: "Gjuha",
      nav_overview: "Përmbledhje",
      nav_about: "Rreth meje",
      nav_research: "Kërkimi",
      nav_publications: "Publikime",
      nav_teaching: "Mësimdhënia",
      nav_awards: "Çmime",
      nav_students: "Studentët",
      nav_contact: "Kontakt",
      hero_img_alt: "Afrim Gjelaj, portret",
      hero_eyebrow: "Universiteti i Prishtinës · Fakulteti i Inxhinierisë Mekanike",
      hero_tagline: "Profesor i asociuar · Prodhim, automatizim & sisteme CNC",
      hero_lead:
        "Puna e Prof. Afrim lidh prodhimin e avancuar me praktikën industriale: programim inteligjent CNC, optimizim i proceseve dhe kërkim në përpunimin e metaleve, bashkë me trajnim afatgjatë dhe projekte inxhinierike në Kosovë dhe rajon.",
      highlight_1: "PhD në teknologji & sisteme prodhimi (Universiteti i Mariborit, Slloveni)",
      highlight_2:
        "Publikime me recension në përpunim, optimizim CNC dhe fusha të afërta inxhinierike",
      highlight_3:
        "Përvojë industriale: programim CNC, CAD/CAM dhe mbi 40 projekte prodhimi (sipas profilit publik)",
      highlight_4:
        "Bashkëpunim me GIZ dhe KIMERK si trajner CNC / prodhim i avancuar (që nga 2017)",
      btn_scholar: "Google Scholar",
      btn_contact: "Kontaktoni",
      about_h2: "Rreth meje",
      about_edu_h3: "Arsimi",
      about_edu_li1_html:
        '<strong>Doktor i shkencave</strong>, Prodhimi dhe Automatizimi — Universiteti i Mariborit, Fakulteti i Inxhinierisë Mekanike (Slloveni). Disertacioni: <em>Automated and Intelligent Programming of CNC Machine Tools</em> (<a href="https://dk.um.si/IzpisGradiva.php?id=46159&amp;lang=eng" target="_blank" rel="noopener noreferrer">repozitori i Universitetit të Mariborit</a>).',
      about_edu_li2_html:
        "<strong>Punë praktike master</strong> (2007–2008) — Juraform E.K. Rechberghausen (Gjermani), frezim CNC me Mastercam.",
      about_career_h3: "Karriera",
      career_li1:
        "<strong>Profesor i asociuar</strong> — Universiteti i Prishtinës, Fakulteti i Inxhinierisë Mekanike (shtator 2022–sot).",
      career_li2:
        "<strong>Profesor asistent</strong> — Departamenti i Prodhimit dhe Automatizimit, i njëjti fakultet (tetor 2017–shtator 2022).",
      career_li3:
        "<strong>Dizajner Autodesk Inventor</strong> — MTA2 Hebeprofi (mars–gusht 2013): aktivitete FMS, vizatim 2D/3D/montim.",
      career_li4:
        "<strong>Programues CNC</strong> — Kosova Steel (2007–2008): frezim, tokar, centra përpunimi, CNC plazë.",
      about_ri_h3: "Interesat kërkimore",
      about_ri_p:
        "Prerje dhe përpunim metalash; programim dhe optimizim i trajektorisë së mjetit CNC; CAD/CAM; algoritme gjenetike dhe metoda inteligjente për optimizimin e proceseve; cilësia e sipërfaqes dhe forcat e prerjes; simulim dhe aktivitet i linjave të prodhimit; bashkëpunim në tematika të lidhura me saldimin.",
      about_phil_h3: "Filozofia e mësimdhënies & mentorskës",
      about_phil_p:
        "Lidhja midis rigorozitetit akademik dhe realitetit në hallë—studentët mësojnë metoda që pasqyrojnë mënyrën se si fabrikat moderne programojnë, matin dhe përmirësojnë proceset. Projeket industri dhe roli i trajnerit japin shembuj konkretë në klasë.",
      research_h2: "Kërkimi & projektet",
      research_card1_h3: "CNC inteligjent & optimizim i trajektorisë së mjetit",
      research_card1_p:
        "Zgjedhje mjetesh, algoritme gjenetike për kushte prerjeje dhe përpunim me kohë efikase—bashkë me performancën e makinës dhe pozicionimin e magazinës/mjeteve.",
      research_card2_h3: "Modelimi i proceseve & cilësia",
      research_card2_p:
        "Aspersistesia e sipërfaqes në frezim, optimizimi i forcës së prerjes dhe qasje eksperimentale me inteligjencë kompjuterike.",
      research_card3_h3: "Projektim sistemi & pajisjesh",
      research_card3_p:
        "Projektim modular CNC, aktivitet roboti saldimit për korniza alumini, aktivitet linje prodhimi me FlexSim, dizajn suspensioni (bashkëpunim).",
      research_card4_h3: "Ndikimi në industri & trajnim",
      research_card4_p:
        "Përvojë në konvertimin e makinave manuale në CNC, dizajn FMS në Inventor dhe trajnim profesional me GIZ dhe KIMERK në prerje metalesh, plazë dhe shtresa.",
      pub_h2: "Publikime",
      pub_view_all: "Shiko të gjitha publikimet në Google Scholar →",
      teaching_h2: "Mësimdhënia",
      teaching_courses_h3: "Kurset (shembuj për verifikim)",
      teaching_course_1: "Prodhim i ndihmuar nga kompjuteri / programim CNC",
      teaching_course_2: "Proceset e prodhimit dhe prerja e metaleve",
      teaching_course_3: "Automatizim dhe sisteme prodhimi",
      teaching_course_4: "Projekte të integruara CAD/CAM",
      teaching_approach_h3: "Qasja",
      awards_h2: "Çmime & njohje",
      awards_li1: "Ngritje në Profesor të asociuar (2022)",
      awards_li2_dash: "—",
      students_h2: "Studentët & mentorimi",
      contact_h2: "Kontakt",
      contact_email_dt: "Email",
      contact_affil_dt: "Afiliacioni",
      contact_affil_dd: "Fakulteti i Inxhinierisë Mekanike · Universiteti i Prishtinës · Prishtinë, Kosovë",
      contact_dept_dt: "Departamenti",
      contact_dept_dd: "Prodhimi dhe automatizimi",
      contact_profiles_dt: "Profile",
      extras_univ_short: "Universiteti i Prishtinës",
      footer_text:
        '© {{YEAR}} Afrim Gjelaj. Faqe profili akademik',
      aria_menu_open: "Hap menynë",
      aria_menu_close: "Mbyll menynë"
    }
  };

  function applyLang(lang) {
    if (!M[lang]) lang = "en";
    var pack = M[lang];
    document.documentElement.lang = lang === "sq" ? "sq" : "en";

    document.title = pack.meta_title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", pack.meta_description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && pack[key] != null) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && pack[key] != null) el.innerHTML = pack[key];
    });

    var heroImg = document.querySelector(".hero-img");
    if (heroImg && pack.hero_img_alt) heroImg.setAttribute("alt", pack.hero_img_alt);

    var yearStr = String(new Date().getFullYear());
    var footerPacked = document.querySelector("[data-i18n-footer]");
    if (footerPacked && pack.footer_text) {
      footerPacked.innerHTML = pack.footer_text.replace(/\{\{YEAR\}\}/g, yearStr);
    }

    var skip = document.querySelector(".skip-link");
    if (skip && pack.skip_link) skip.textContent = pack.skip_link;

    var langGroup = document.querySelector(".lang-switch");
    if (langGroup && pack.lang_aria) langGroup.setAttribute("aria-label", pack.lang_aria);

    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", open ? pack.aria_menu_close : pack.aria_menu_open);
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var isThis = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", isThis);
      btn.setAttribute("aria-pressed", isThis ? "true" : "false");
    });
  }

  function getStoredLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === "sq" || v === "en") return v;
    } catch (e) {}
    return "en";
  }

  global.SiteI18n = {
    M: M,
    applyLang: applyLang,
    getStoredLang: getStoredLang,
    STORAGE_KEY: STORAGE_KEY
  };
})(window);
