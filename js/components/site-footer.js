/* ============================================
   <site-footer>  · custom element
   Renders the footer in light DOM. Auto-resolves
   relative paths based on URL depth.
   ============================================ */

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const inSubpage = window.location.pathname.includes('/pages/');
    const base = inSubpage ? '../' : '';
    const year = new Date().getFullYear();

    this.innerHTML = `
<footer role="contentinfo">
  <a href="${base}index.html" class="footer-logo magnetic" data-i18n-attr="aria-label:footer.homeAria">
    <img src="${base}assets/isotipo-personal.svg" alt="" class="footer-logo-mark" width="32" height="34">
  </a>
  <p>&copy; ${year} — Patricio Bustamante</p>
  <p class="footer-time" id="localTime" data-i18n-attr="aria-label:footer.timeAria">--:--:-- CLT</p>
  <button type="button" class="cursor-toggle" aria-pressed="true" data-i18n-attr="aria-label:footer.cursorAria">
    <span data-i18n="footer.cursorLabel">Cursor</span> <span class="cursor-toggle-state" aria-hidden="true">Activado</span>
  </button>
  <p data-i18n="footer.made">Hecho con cariño &middot; Chile</p>
</footer>`;

    if (window.PB_I18N) window.PB_I18N.applyTranslations(this);
  }
}

if (!customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooter);
}
