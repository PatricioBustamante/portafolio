/* ============================================
   <project-card>  · custom element
   Renders a project row in light DOM so existing
   CSS selectors and main.js queries keep working.

   Attributes:
     slug   key from window.PROJECTS
            → renders the full project row HTML

   i18n: los campos traducibles de PROJECTS son
   objetos { es, en }; se resuelven con PB_I18N.localize.
   Se re-renderiza al emitirse 'pb:langchange'.
   ============================================ */

class ProjectCard extends HTMLElement {
  connectedCallback() {
    this.render();
    this._onLang = () => this.render();
    document.addEventListener('pb:langchange', this._onLang);
  }

  disconnectedCallback() {
    if (this._onLang) document.removeEventListener('pb:langchange', this._onLang);
  }

  render() {
    const slug = this.getAttribute('slug');
    const p = window.PROJECTS && window.PROJECTS[slug];
    if (!p) return;

    const L = v => (window.PB_I18N ? window.PB_I18N.localize(v) : v);
    const t = k => (window.PB_I18N ? window.PB_I18N.t(k) : k);

    const inSubpage = window.location.pathname.includes('/pages/');
    const href = inSubpage
      ? `proyecto.html?slug=${slug}`
      : `pages/proyecto.html?slug=${slug}`;

    const esc = s => String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

    const title = L(p.title);
    const category = L(p.category);
    const summary = L(p.summary);
    const tags = L(p.tags) || [];

    const tagsHtml = tags
      .map(t => `<span class="project-tag">${esc(t)}</span>`)
      .join('');

    const initial = p.initial || (p.company ? p.company[0] : '');

    const siblings = this.parentElement
      ? Array.from(this.parentElement.children).filter(el => el.tagName === 'PROJECT-CARD')
      : [];
    const listIndex = siblings.indexOf(this) + 1;
    const num = String(listIndex).padStart(2, '0');

    this.innerHTML = `
<a href="${href}" class="project" data-preview="${esc(p.preview)}" aria-label="${esc(t('card.project'))} ${esc(num)}: ${esc(title)}, ${esc(category)} ${esc(p.year)}">
  <div class="project-num" aria-hidden="true">${num}</div>
  <div class="project-info">
    <div class="company-badge">
      <span class="company-logo-mark" aria-hidden="true">${esc(initial)}</span>
      <span class="company-badge-name">${esc(p.company || '')}</span>
    </div>
    <div class="project-title">${esc(title)}</div>
    <div class="project-subtitle">${esc(category)} &middot; ${esc(p.year)}</div>
  </div>
  <div class="project-desc">${esc(summary)}</div>
  <div class="project-tags">${tagsHtml}</div>
  <span class="project-arrow magnetic" aria-hidden="true">
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" focusable="false">
      <path d="M3 13L13 3M13 3H5M13 3V11"/>
    </svg>
  </span>
</a>`;
  }
}

if (!customElements.get('project-card')) {
  customElements.define('project-card', ProjectCard);
}
