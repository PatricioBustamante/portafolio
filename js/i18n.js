/* ============================================
   i18n ENGINE · ES / EN
   --------------------------------------------
   - Detecta idioma: ?lang= → localStorage → navegador → 'es'
   - t(key)        → string traducido (fallback a 'es', luego a la key)
   - localize(v)   → resuelve un valor plano o un objeto { es, en }
   - applyTranslations(root) → recorre [data-i18n], [data-i18n-html],
                               [data-i18n-attr] y aplica textos
   - setLang / toggle → cambia idioma, persiste, refleja ?lang= en la
                        URL (compartible / rastreable) y emite
                        'pb:langchange'
   - hreflang → genera <link rel="alternate"> es/en/x-default desde la
                URL actual (sin hardcodear dominio)

   Se carga (bundleado) antes de los Web Components y main.js.
   ============================================ */

(function () {
  const STORAGE_KEY = 'pb:lang';
  const SUPPORTED = ['es', 'en'];
  const DEFAULT = 'es';

  function paramLang() {
    try {
      const p = new URLSearchParams(window.location.search).get('lang');
      if (p && SUPPORTED.includes(p)) return p;
    } catch {}
    return null;
  }

  function detect() {
    const fromUrl = paramLang();
    if (fromUrl) {
      try { localStorage.setItem(STORAGE_KEY, fromUrl); } catch {}
      return fromUrl;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch {}
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('en')) return 'en';
    return DEFAULT;
  }

  let lang = detect();

  function dict() { return window.PB_DICT || {}; }

  function t(key) {
    const d = dict();
    const table = d[lang] || {};
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    const fb = d[DEFAULT] || {};
    return Object.prototype.hasOwnProperty.call(fb, key) ? fb[key] : key;
  }

  // Resuelve un campo que puede ser plano o un objeto { es, en }
  function localize(value) {
    if (value && typeof value === 'object' && !Array.isArray(value) &&
        (('es' in value) || ('en' in value))) {
      if (lang in value && value[lang] !== undefined) return value[lang];
      return value[DEFAULT] !== undefined ? value[DEFAULT] : value.en;
    }
    return value;
  }

  function applyTranslations(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const idx = pair.indexOf(':');
        if (idx === -1) return;
        const attr = pair.slice(0, idx).trim();
        const key = pair.slice(idx + 1).trim();
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
  }

  function updateHtmlLang() { document.documentElement.lang = lang; }

  // Refleja el idioma elegido en la URL (?lang=) sin recargar
  function syncUrl() {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url.href);
    } catch {}
    updateAlternates();
  }

  // Genera / actualiza los <link rel="alternate" hreflang> desde la URL actual
  function updateAlternates() {
    const head = document.head;
    if (!head) return;
    const make = (hreflang, langValue) => {
      let link = head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        head.appendChild(link);
      }
      try {
        const url = new URL(window.location.href);
        if (langValue) url.searchParams.set('lang', langValue);
        else url.searchParams.delete('lang');
        link.setAttribute('href', url.href);
      } catch {}
    };
    make('es', 'es');
    make('en', 'en');
    make('x-default', null);
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    updateHtmlLang();
    applyTranslations(document);
    syncUrl();
    document.dispatchEvent(new CustomEvent('pb:langchange', { detail: { lang } }));
  }

  function toggle() { setLang(lang === 'es' ? 'en' : 'es'); }

  window.PB_I18N = {
    get lang() { return lang; },
    t, localize, setLang, toggle, applyTranslations,
    SUPPORTED, DEFAULT
  };

  updateHtmlLang();
  function init() {
    applyTranslations(document);
    updateAlternates();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
