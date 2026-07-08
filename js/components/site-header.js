/* ============================================
   <site-header>  · custom element
   Renders the nav in light DOM so existing CSS
   selectors and main.js queries keep working.

   Attributes:
     current   "work" | "about" | (empty for home)
                 → marks the matching nav link with .is-active

   i18n: textos vía data-i18n; el control segmentado
   .lang-switch (ES / EN con banderas) cambia de idioma
   con PB_I18N.setLang() y marca el idioma activo.
   ============================================ */

const PB_FLAG_ES = `<svg class="lang-flag" viewBox="0 0 900 600" aria-hidden="true" focusable="false"><rect width="900" height="600" fill="#fff"/><rect y="300" width="900" height="300" fill="#D52B1E"/><rect width="300" height="300" fill="#0039A6"/><path fill="#fff" d="M150 70 169 124 226 125 180 160 197 215 150 182 103 215 120 160 74 125 131 124Z"/></svg>`;

const PB_FLAG_EN = `<svg class="lang-flag" viewBox="0 0 190 100" aria-hidden="true" focusable="false"><rect width="190" height="100" fill="#fff"/><g fill="#B22234"><rect width="190" height="7.7"/><rect y="15.4" width="190" height="7.7"/><rect y="30.8" width="190" height="7.7"/><rect y="46.2" width="190" height="7.7"/><rect y="61.5" width="190" height="7.7"/><rect y="76.9" width="190" height="7.7"/><rect y="92.3" width="190" height="7.7"/></g><rect width="76" height="53.8" fill="#3C3B6E"/><g fill="#fff"><circle cx="12" cy="13" r="3.4"/><circle cx="26" cy="13" r="3.4"/><circle cx="40" cy="13" r="3.4"/><circle cx="54" cy="13" r="3.4"/><circle cx="68" cy="13" r="3.4"/><circle cx="19" cy="27" r="3.4"/><circle cx="33" cy="27" r="3.4"/><circle cx="47" cy="27" r="3.4"/><circle cx="61" cy="27" r="3.4"/><circle cx="12" cy="41" r="3.4"/><circle cx="26" cy="41" r="3.4"/><circle cx="40" cy="41" r="3.4"/><circle cx="54" cy="41" r="3.4"/><circle cx="68" cy="41" r="3.4"/></g></svg>`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = (this.getAttribute('current') || '').toLowerCase();
    const inSubpage = window.location.pathname.includes('/pages/');
    const base = inSubpage ? '../' : '';
    const workHref = inSubpage ? 'work.html' : 'pages/work.html';
    const aboutHref = inSubpage ? 'about.html' : 'pages/about.html';
    const isWork = current === 'work' ? ' is-active' : '';
    const isAbout = current === 'about' ? ' is-active' : '';

    this.innerHTML = `
<nav class="nav" data-i18n-attr="aria-label:nav.aria">
  <a href="${base}index.html" class="nav-logo magnetic" data-i18n-attr="aria-label:nav.logoAria">
    <img src="${base}assets/isotipo-personal.svg" alt="" class="nav-logo-mark" width="32" height="34">
    <span class="nav-logo-text">Patricio Bustamante</span>
  </a>

  <div class="nav-links" id="navLinks">
    <a href="${workHref}" class="magnetic${isWork}"${isWork ? ' aria-current="page"' : ''}><span class="nav-num">01</span><span data-i18n="nav.projects">Proyectos</span></a>
    <a href="${aboutHref}" class="magnetic${isAbout}"${isAbout ? ' aria-current="page"' : ''}><span class="nav-num">02</span><span data-i18n="nav.about">Sobre mí</span></a>
    <a href="${base}index.html#contact" class="magnetic"><span class="nav-num">03</span><span data-i18n="nav.contact">Contacto</span></a>
  </div>

  <div class="lang-switch" role="group" data-i18n-attr="aria-label:lang.groupAria">
    <button type="button" class="lang-opt" data-lang="es" data-i18n-attr="aria-label:lang.esAria">${PB_FLAG_ES}<span class="lang-opt-text">ES</span></button>
    <button type="button" class="lang-opt" data-lang="en" data-i18n-attr="aria-label:lang.enAria">${PB_FLAG_EN}<span class="lang-opt-text">EN</span></button>
  </div>

  <p class="nav-status" role="status">
    <span class="status-dot" aria-hidden="true"></span>
    <span class="sr-only" data-i18n="nav.statusSr">Estado: </span><span data-i18n="nav.status">Disponible</span>
  </p>

  <button class="nav-toggle" id="navToggle" data-i18n-attr="aria-label:nav.menuOpen" aria-expanded="false" aria-controls="navLinks">
    <span class="nav-toggle-bar" aria-hidden="true"></span>
    <span class="nav-toggle-bar" aria-hidden="true"></span>
    <span class="nav-toggle-bar" aria-hidden="true"></span>
  </button>
</nav>`;

    if (window.PB_I18N) window.PB_I18N.applyTranslations(this);

    const opts = Array.from(this.querySelectorAll('.lang-opt'));
    const syncActive = () => {
      const active = window.PB_I18N ? window.PB_I18N.lang : 'es';
      opts.forEach(btn => {
        const on = btn.getAttribute('data-lang') === active;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
    };
    opts.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.PB_I18N) window.PB_I18N.setLang(btn.getAttribute('data-lang'));
      });
    });
    document.addEventListener('pb:langchange', syncActive);
    syncActive();
  }
}

if (!customElements.get('site-header')) {
  customElements.define('site-header', SiteHeader);
}
