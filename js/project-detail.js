/* ============================================
   PROJECT DETAIL · rellena proyecto.html
   ============================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const data = window.PROJECTS || {};
  const p = slug && data[slug];

  if (!p) { window.location.replace('work.html'); return; }

  const esc = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const set = (key, value) => {
    document.querySelectorAll(`[data-pj="${key}"]`).forEach(el => {
      el.textContent = value;
    });
  };

  // ── Texto plano ──────────────────────────────
  set('num',        p.num);
  set('category',   p.category);
  set('title',      p.title);
  set('hero-title', p.heroTitle || p.title);
  set('title-cover', p.title);
  set('year',       p.year);
  set('summary',    p.summary || '');
  set('role',       p.role || '');
  set('focus',      p.focus || '');
  set('platform',   p.platform || '');
  set('context',         p.context || '');
  set('challenge-title', p.challengeTitle || '');
  set('analysis-title',  p.analysisTitle || '');

  // ── Challenge: renderiza párrafos e ítems numerados con estilo ──
  const challengeEl = document.querySelector('[data-pj="challenge"]');
  if (challengeEl && p.challenge) {
    const bold = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const lines = p.challenge.split('\n').filter(l => l.trim());
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

  // ── Analysis: renderiza párrafos e ítems numerados con estilo ──
  const analysisEl = document.querySelector('[data-pj="analysis"]');
  if (analysisEl && p.analysis) {
    const bold = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const lines = p.analysis.split('\n').filter(l => l.trim());
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
  document.title = `${p.title} — Patricio Bustamante`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${p.title} — Patricio Bustamante`);
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', p.summary || p.challenge);

  // ── Cover ────────────────────────────────────
  const cover = document.getElementById('pj-cover');
  if (cover) {
    if (p.coverImage) {
      const img = document.createElement('img');
      img.src = p.coverImage;
      img.alt = p.title;
      img.loading = 'lazy';
      cover.prepend(img);
    } else if (p.preview) {
      cover.classList.add('preview-' + p.preview);
    }
  }

  // ── Imágenes + Embeds ────────────────────────
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

  // ── Métricas ─────────────────────────────────
  const metricsHost = document.querySelector('[data-pj="metrics"]');
  if (metricsHost && Array.isArray(p.metrics)) {
    metricsHost.innerHTML = p.metrics.map(m => `
      <div class="pj-metric-card">
        <div class="pj-metric-label">${esc(m.label)}</div>
        <div class="pj-metric-value">${esc(m.value)}</div>
        <div class="pj-metric-row">
          <span class="pj-metric-before"><span>Antes</span>${esc(m.before)}</span>
          <span class="pj-metric-after"><span>Después</span>${esc(m.after)}</span>
        </div>
        <div class="pj-metric-change">${esc(m.change)}</div>
      </div>`).join('');
  }

  // ── Siguiente proyecto (cíclico) ─────────────
  const order = window.PROJECT_ORDER || Object.keys(data);
  const idx = order.indexOf(slug);
  const nextSlug = order[(idx + 1) % order.length];
  const nextProject = data[nextSlug];
  const nextLink = document.querySelector('[data-pj="next"]');
  const nextTitle = document.querySelector('[data-pj="next-title"]');
  if (nextLink && nextProject) {
    nextLink.setAttribute('href', `proyecto.html?slug=${nextSlug}`);
    if (nextTitle) nextTitle.textContent = nextProject.title;
  }
})();
