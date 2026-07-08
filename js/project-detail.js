/* ============================================
   PROJECT DETAIL · rellena proyecto.html
   --------------------------------------------
   Los campos traducibles de PROJECTS son objetos
   { es, en }; se resuelven con PB_I18N.localize.
   Re-renderiza al emitirse 'pb:langchange'.
   ============================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const data = window.PROJECTS || {};
  const p = slug && data[slug];

  if (!p) { window.location.replace('work.html'); return; }

  const L = v => (window.PB_I18N ? window.PB_I18N.localize(v) : v);
  const t = k => (window.PB_I18N ? window.PB_I18N.t(k) : k);

  const esc = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const set = (key, value) => {
    document.querySelectorAll(`[data-pj="${key}"]`).forEach(el => {
      el.textContent = value;
    });
  };

  function render() {
    const title = L(p.title);

    // ── Texto plano ──────────────────────────────
    set('num',        p.num);
    set('category',   L(p.category));
    set('title',      title);
    set('hero-title', L(p.heroTitle) || title);
    set('title-cover', title);
    set('year',       p.year);
    set('summary',    L(p.summary) || '');
    set('role',       L(p.role) || '');
    set('focus',      L(p.focus) || '');
    set('platform',   L(p.platform) || '');
    set('context',         L(p.context) || '');
    set('challenge-title', L(p.challengeTitle) || '');
    set('analysis-title',  L(p.analysisTitle) || '');

    // ── Challenge: párrafos e ítems numerados ──
    const challengeEl = document.querySelector('[data-pj="challenge"]');
    const challengeTxt = L(p.challenge);
    if (challengeEl && challengeTxt) {
      const bold = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      const lines = challengeTxt.split('\n').filter(l => l.trim());
      const numRe = /^(\d+)\.\s+(.+)$/;
      let html = '';
      let inList = false;
      for (const line of lines) {
        const m = line.match(numRe);
        if (m) {
          if (!inList) { html += '<ol class="analysis-list">'; inList = true; }
          html += `<li><span>${bold(m[2])}</span></li>`;
        } else {
          if (inList) { html += '</ol>'; inList = false; }
          html += `<p>${bold(line)}</p>`;
        }
      }
      if (inList) html += '</ol>';
      challengeEl.innerHTML = html;
    }

    // ── Analysis: párrafos e ítems numerados ──
    const analysisEl = document.querySelector('[data-pj="analysis"]');
    const analysisTxt = L(p.analysis);
    if (analysisEl && analysisTxt) {
      const bold = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      const lines = analysisTxt.split('\n').filter(l => l.trim());
      const numRe = /^(\d+)\.\s+(.+)$/;
      let html = '';
      let inList = false;
      for (const line of lines) {
        const m = line.match(numRe);
        if (m) {
          if (!inList) { html += '<ol class="analysis-list">'; inList = true; }
          const body = m[2];
          const dashIdx = body.indexOf(' — ');
          if (dashIdx !== -1) {
            html += `<li><span><strong class="analysis-list-label">${esc(body.slice(0, dashIdx))}</strong> — ${bold(body.slice(dashIdx + 3))}</span></li>`;
          } else {
            html += `<li><span>${bold(body)}</span></li>`;
          }
        } else {
          if (inList) { html += '</ol>'; inList = false; }
          html += `<p>${bold(line)}</p>`;
        }
      }
      if (inList) html += '</ol>';
      analysisEl.innerHTML = html;
    }

    // ── Company badge ────────────────────────────
    set('company',         p.company || '');
    set('company-initial', p.initial || (p.company ? p.company[0] : ''));

    // ── Document title + meta ────────────────────
    document.title = `${title} — Patricio Bustamante`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} — Patricio Bustamante`);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', L(p.summary) || challengeTxt || '');

    // ── Métricas ─────────────────────────────────
    const metricsHost = document.querySelector('[data-pj="metrics"]');
    if (metricsHost && Array.isArray(p.metrics)) {
      metricsHost.innerHTML = p.metrics.map(m => `
        <div class="pj-metric-card">
          <div class="pj-metric-label">${esc(L(m.label))}</div>
          <div class="pj-metric-value">${esc(L(m.value))}</div>
          <div class="pj-metric-row">
            <span class="pj-metric-before"><span>${esc(t('pj.before'))}</span>${esc(L(m.before))}</span>
            <span class="pj-metric-after"><span>${esc(t('pj.after'))}</span>${esc(L(m.after))}</span>
          </div>
          <div class="pj-metric-change">${esc(L(m.change))}</div>
        </div>`).join('');
    }

    // ── Siguiente proyecto (cíclico) ─────────────
    const order = window.PROJECT_ORDER || Object.keys(data);
    const idx = order.indexOf(slug);
    const nextSlug = order[(idx + 1) % order.length];
    const nextProject = data[nextSlug];
    const nextTitle = document.querySelector('[data-pj="next-title"]');
    if (nextProject && nextTitle) nextTitle.textContent = L(nextProject.title);
  }

  // ── Cover (una sola vez, no depende del idioma) ──
  const cover = document.getElementById('pj-cover');
  if (cover) {
    if (p.coverImage) {
      const img = document.createElement('img');
      img.src = p.coverImage;
      img.alt = L(p.title);
      img.loading = 'lazy';
      cover.prepend(img);
    } else if (p.preview) {
      cover.classList.add('preview-' + p.preview);
    }
  }

  // ── Imágenes + Embeds (una sola vez) ─────────────
  const imagesHost = document.querySelector('[data-pj="images"]');
  if (imagesHost) {
    const items = [];
    if (Array.isArray(p.images) && p.images.length > 0) {
      items.push(...p.images.map(src =>
        `<div class="pj-image-item"><img src="${esc(src)}" alt="" loading="lazy"></div>`
      ));
    }
    if (Array.isArray(p.embeds) && p.embeds.length > 0) {
      items.push(...p.embeds.map(url =>
        `<div class="pj-embed-item"><iframe src="${esc(url)}" allowfullscreen loading="lazy"></iframe></div>`
      ));
    }
    if (items.length > 0) imagesHost.innerHTML = items.join('');
  }

  // ── Enlace "siguiente proyecto" (href, una sola vez) ──
  const order = window.PROJECT_ORDER || Object.keys(data);
  const idx = order.indexOf(slug);
  const nextSlug = order[(idx + 1) % order.length];
  const nextLink = document.querySelector('[data-pj="next"]');
  if (nextLink) nextLink.setAttribute('href', `proyecto.html?slug=${nextSlug}`);

  render();
  document.addEventListener('pb:langchange', render);
})();
