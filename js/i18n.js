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
      btn_cv: "Download CV",
      btn_contact: "Get in touch",
      stat_projects: "Applied projects",
      stat_training_since: "Training since",
      stat_assoc_prof: "Associate Professor",
      meta_1_html: "<b>PhD</b> — University of Maribor, 2014",
      meta_2_html: "<b>Associate Professor</b> since 2022",
      meta_3_html: "<b>15+</b> peer-reviewed papers",
      meta_4_html: "<b>40+</b> industrial projects",
      about_h2: "About",
      about_edu_h3: "Education",
      about_edu_bsc_msc_html:
        '<strong>BSc &amp; MSc in Mechanical Engineering</strong> — University of Prishtina “Hasan Prishtina”, Faculty of Mechanical Engineering (Kosovo).',
      about_edu_li1_html:
        '<strong>PhD (Dr.sc.)</strong>, Manufacturing &amp; Automation — University of Maribor, Faculty of Mechanical Engineering (Slovenia), 2014. Dissertation: <em>Automated and Intelligent Programming of CNC Machine Tools</em> (“Samodejno in inteligentno programiranje CNC strojev”); supervisor Prof. Jože Balič, co-supervisor Doc. Dr. Mirko Ficko (<a href="https://dk.um.si/IzpisGradiva.php?id=46159&amp;lang=eng" target="_blank" rel="noopener noreferrer">DKUM repository</a>).',
      about_edu_li2_html:
        "<strong>Master’s practical work</strong> (2007–2008) — Juraform E.K. Rechberghausen (Germany), CNC milling using Mastercam.",
      about_career_h3: "Career",
      career_li1:
        "<strong>Associate Professor</strong> — University of Prishtina, Faculty of Mechanical Engineering (September 2022–present).",
      career_li2:
        "<strong>Assistant Professor</strong> — Department of Manufacturing and Automation, same faculty (October 2017–September 2022).",
      career_li5:
        "<strong>CNC trainer</strong> — GIZ &amp; KIMERK Kosova (2017–present): turning, milling, machining centers, CNC plasma, and 3D printing for the metal industry.",
      career_li3:
        "<strong>Autodesk Inventor designer</strong> — MTA2 Hebeprofi (March–August 2013): FMS-style layouts, 2D/3D/assembly design.",
      career_li4:
        "<strong>CNC programmer</strong> — Kosova Steel (2007–2008): milling, lathe, machining centers, CNC plasma.",
      about_ri_h3: "Research interests",
      about_ri_p:
        "Metal cutting and machinability of materials; CNC programming and toolpath optimization; CAD/CAM; optimization of machining parameters using artificial intelligence (genetic algorithms, artificial neural networks, fuzzy logic); surface quality and cutting forces; reverse engineering and product design; flexible manufacturing systems and factory/layout design; deep drawing and sheet-metal forming; hydraulics and pneumatics.",
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
      pub_cross_note:
        "Cross-disciplinary collaborations (surface-roughness / wear measurement, with University of Prishtina dentistry colleagues):",
      teaching_h2: "Teaching",
      teaching_subjects_h3: "Courses",
      teaching_bachelor_h3: "Bachelor",
      teaching_master_h3: "Master",
      teaching_col_course: "Course",
      teaching_col_semester: "Semester",
      teaching_col_year: "Year",
      teaching_col_link: "Link",
      awards_h2: "Awards & recognition",
      awards_li1: "Promotion to Associate Professor (2022)",
      awards_li2_dash: "—",
      students_h2: "Students & mentorship",
      students_intro:
        "Prof. Gjelaj supervises and mentors BSc, MSc, and PhD students in the Department of Manufacturing and Automation, working closely with teaching assistants and PhD researchers on applied, industry-relevant projects.",
      students_topics_h3: "Topics for theses & supervision",
      students_topic1: "CNC programming and toolpath optimization",
      students_topic2: "CAD/CAM and reverse engineering",
      students_topic3: "Machining-parameter optimization with AI (genetic algorithms, neural networks, fuzzy logic)",
      students_topic4: "Factory layout and flexible manufacturing systems (FlexSim)",
      students_prospective_html:
        'Prospective students interested in these areas are welcome to <a href="#contact">get in touch</a>.',
      contact_h2: "Contact",
      contact_email_dt: "Email",
      contact_affil_dt: "Affiliation",
      contact_affil_dd: "Faculty of Mechanical Engineering · University of Prishtina · Prishtina, Kosovo",
      contact_dept_dt: "Department",
      contact_dept_dd: "Manufacturing and Automation",
      contact_profiles_dt: "Profiles",
      extras_univ_short: "University of Prishtina",
      footer_text:
        '© {{YEAR}} Afrim Gjelaj. Academic profile page',
      dots_aria: "Sections",
      cmdk_open: "Search (Ctrl+K)",
      cmdk_placeholder: "Jump to a section or publication…",
      cmdk_empty: "No matches",
      cmdk_section: "Section",
      cmdk_pub: "Publication",
      filter_aria: "Filter publications by topic",
      filter_all: "All",
      filter_cnc: "CNC",
      filter_ai: "AI & optimization",
      filter_cadcam: "CAD/CAM & systems",
      filter_cross: "Cross-disciplinary",
      aria_menu_open: "Open menu",
      aria_menu_close: "Close menu",
      aria_theme_dark: "Switch to dark theme",
      aria_theme_light: "Switch to light theme"
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
      btn_cv: "Shkarko CV",
      btn_contact: "Kontaktoni",
      stat_projects: "Projekte të aplikuara",
      stat_training_since: "Trajnim që nga",
      stat_assoc_prof: "Profesor i asociuar",
      meta_1_html: "<b>Doktoraturë</b> — Universiteti i Mariborit, 2014",
      meta_2_html: "<b>Profesor i asociuar</b> që nga 2022",
      meta_3_html: "<b>15+</b> punime me recension",
      meta_4_html: "<b>40+</b> projekte industriale",
      about_h2: "Rreth meje",
      about_edu_h3: "Arsimi",
      about_edu_bsc_msc_html:
        '<strong>Bachelor &amp; Master në Inxhinieri Mekanike</strong> — Universiteti i Prishtinës “Hasan Prishtina”, Fakulteti i Inxhinierisë Mekanike (Kosovë).',
      about_edu_li1_html:
        '<strong>Doktoraturë (Dr.sc.)</strong>, Prodhimtari &amp; Automatizim — Universiteti i Mariborit, Fakulteti i Inxhinierisë Mekanike (Slloveni), 2014. Disertacioni: <em>Programim i automatizuar dhe inteligjent i makinave CNC</em> (“Samodejno in inteligentno programiranje CNC strojev”); mentor Prof. Jože Balič, komentor Doc. Dr. Mirko Ficko (<a href="https://dk.um.si/IzpisGradiva.php?id=46159&amp;lang=eng" target="_blank" rel="noopener noreferrer">repozitori DKUM</a>).',
      about_edu_li2_html:
        "<strong>Punë praktike master</strong> (2007–2008) — Juraform E.K. Rechberghausen (Gjermani), frezim CNC me Mastercam.",
      about_career_h3: "Karriera",
      career_li1:
        "<strong>Profesor i asociuar</strong> — Universiteti i Prishtinës, Fakulteti i Inxhinierisë Mekanike (shtator 2022–sot).",
      career_li2:
        "<strong>Profesor asistent</strong> — Departamenti i Prodhimtarisë dhe Automatizimit, i njëjti fakultet (tetor 2017–shtator 2022).",
      career_li5:
        "<strong>Trajner CNC</strong> — GIZ &amp; KIMERK Kosova (2017–sot): tornim, frezim, centra përpunimi, plazmë CNC dhe printim 3D për industrinë metalike.",
      career_li3:
        "<strong>Dizajner Autodesk Inventor</strong> — MTA2 Hebeprofi (mars–gusht 2013): aktivitete FMS, vizatim 2D/3D/montim.",
      career_li4:
        "<strong>Programues CNC</strong> — Kosova Steel (2007–2008): frezim, tokar, centra përpunimi, CNC plazë.",
      about_ri_h3: "Interesat kërkimore",
      about_ri_p:
        "Përpunimi me prerje dhe përpunueshmëria e materialeve; programimi CNC dhe optimizimi i trajektores së veglës; CAD/CAM; optimizimi i parametrave të përpunimit me inteligjencë artificiale (algoritme gjenetike, rrjeta neurale artificiale, logjikë fuzzy); cilësia e sipërfaqes dhe forcat e prerjes; inxhinieria e kundërt dhe projektimi i produktit; sistemet fleksibile të prodhimit dhe projektimi i fabrikave; tërheqja e thellë dhe formësimi i fletëmetalit; hidraulika dhe pneumatika.",
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
      pub_cross_note:
        "Bashkëpunime ndërdisiplinore (matje e ashpërsisë së sipërfaqes / konsumit, me kolegë të stomatologjisë në Universitetin e Prishtinës):",
      teaching_h2: "Mësimdhënia",
      teaching_subjects_h3: "Lëndët",
      teaching_bachelor_h3: "Baçelor",
      teaching_master_h3: "Master",
      teaching_col_course: "Lënda",
      teaching_col_semester: "Semestri",
      teaching_col_year: "Viti",
      teaching_col_link: "Linku",
      awards_h2: "Çmime & njohje",
      awards_li1: "Ngritje në Profesor të asociuar (2022)",
      awards_li2_dash: "—",
      students_h2: "Studentët & mentorimi",
      students_intro:
        "Prof. Gjelaj udhëheq dhe mentoron studentë të nivelit bachelor, master dhe doktoraturë në Departamentin e Prodhimtarisë dhe Automatizimit, duke bashkëpunuar ngushtë me asistentë dhe studentë të doktoraturës në projekte të aplikuara me rëndësi për industrinë.",
      students_topics_h3: "Tema për punime & mentorim",
      students_topic1: "Programimi CNC dhe optimizimi i trajektores së veglës",
      students_topic2: "CAD/CAM dhe inxhinieria e kundërt",
      students_topic3: "Optimizimi i parametrave të përpunimit me IA (algoritme gjenetike, rrjeta neurale, logjikë fuzzy)",
      students_topic4: "Projektimi i fabrikave dhe sistemet fleksibile të prodhimit (FlexSim)",
      students_prospective_html:
        'Studentët e interesuar për këto fusha janë të mirëpritur të <a href="#contact">kontaktojnë</a>.',
      contact_h2: "Kontakt",
      contact_email_dt: "Email",
      contact_affil_dt: "Afiliacioni",
      contact_affil_dd: "Fakulteti i Inxhinierisë Mekanike · Universiteti i Prishtinës · Prishtinë, Kosovë",
      contact_dept_dt: "Departamenti",
      contact_dept_dd: "Prodhimtaria dhe automatizimi",
      contact_profiles_dt: "Profile",
      extras_univ_short: "Universiteti i Prishtinës",
      footer_text:
        '© {{YEAR}} Afrim Gjelaj. Faqe profili akademik',
      dots_aria: "Seksionet",
      cmdk_open: "Kërko (Ctrl+K)",
      cmdk_placeholder: "Kalo te një seksion ose publikim…",
      cmdk_empty: "Asnjë përputhje",
      cmdk_section: "Seksion",
      cmdk_pub: "Publikim",
      filter_aria: "Filtro publikimet sipas temës",
      filter_all: "Të gjitha",
      filter_cnc: "CNC",
      filter_ai: "IA & optimizim",
      filter_cadcam: "CAD/CAM & sisteme",
      filter_cross: "Ndërdisiplinore",
      aria_menu_open: "Hap menynë",
      aria_menu_close: "Mbyll menynë",
      aria_theme_dark: "Kalo në temën e errët",
      aria_theme_light: "Kalo në temën e ndritshme"
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

    var themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      var darkOn = document.documentElement.getAttribute("data-theme") === "dark";
      themeToggle.setAttribute("aria-label", darkOn ? pack.aria_theme_light : pack.aria_theme_dark);
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var isThis = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", isThis);
      btn.setAttribute("aria-pressed", isThis ? "true" : "false");
    });

    try {
      document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: lang } }));
    } catch (e) {}
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
