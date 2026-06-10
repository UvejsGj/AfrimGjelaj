/* Sets the color theme before first paint to avoid a flash of the wrong theme.
   Kept as an external file (not an inline <script>) so the site can ship a strict
   Content-Security-Policy with `script-src 'self'` and no 'unsafe-inline'. */
(function () {
  try {
    var t = localStorage.getItem("afrim-gjelaj-theme");
    if (t !== "dark" && t !== "light") {
      t = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
