// Genera metadatos SEO, una página estática por proyecto y sitemap.xml.
// Uso: node scripts/build-seo.mjs  (lo llama build.sh)
import fs from 'node:fs';
import vm from 'node:vm';

const BASE = 'https://patriciobustamante.github.io/portafolio/';
const PHOTO = BASE + 'assets/photo-perfil.webp';
const OG_IMAGE = BASE + 'assets/og-image.jpg';
const PERSON_ID = BASE + '#person';

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('js/projects-data.js', 'utf8'), ctx);
const PROJECTS = ctx.window.PROJECTS;
const visible = Object.entries(PROJECTS).filter(([, p]) => p.visibleProject);

// Devuelve la versión en español de un campo { es, en } (o el valor tal cual).
const es = v => (v && typeof v === 'object' && 'es' in v ? v.es : v) || '';
// Escapa texto para usarlo dentro de un atributo HTML.
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
// Escapa texto para usarlo como contenido HTML.
const text = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Convierte una ruta relativa de assets en URL absoluta del sitio.
const absAsset = rel => BASE + rel.replace(/^(\.\.\/)+/, '');

const person = {
  '@type': 'Person', '@id': PERSON_ID,
  name: 'Patricio Bustamante', jobTitle: 'Product Designer',
  url: BASE, image: PHOTO, email: 'mailto:pbustamanteinzunza@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Concepción', addressCountry: 'CL' },
  sameAs: ['https://linkedin.com/in/patrbustamante'],
  knowsAbout: ['Diseño de Producto', 'UX', 'UI', 'Sistemas de Diseño', 'Investigación de Usuarios',
    'Estrategia de Producto', 'Arquitectura de Información', 'Banca Digital', 'Fintech'],
};

// Datos estructurados de migas de pan (Inicio / Sección / Página) para Google.
const breadcrumbs = items => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
});

// Genera el bloque SEO del <head>: canonical, Open Graph, Twitter y JSON-LD.
function headBlock({ url, title, desc, type = 'website', image = OG_IMAGE, graph }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/</g, '\\u003c');
  return `<!-- seo:start · generado por scripts/build-seo.mjs -->
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#fa3e33">

<!-- Open Graph -->
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="Patricio Bustamante">
<meta property="og:locale" content="es_CL">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:image" content="${image}">
<meta property="og:image:alt" content="${attr(title)}">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(title)}">
<meta name="twitter:description" content="${attr(desc)}">
<meta name="twitter:image" content="${image}">

<script type="application/ld+json">
${json}
</script>
<!-- seo:end -->`;
}

// Reemplaza lo que haya entre <!-- seo:start --> y <!-- seo:end --> por un bloque nuevo.
const withHead = (html, cfg) => html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, headBlock(cfg));

const staticPages = {
  'index.html': {
    url: BASE,
    title: 'Patricio Bustamante — Diseñador de Producto',
    desc: 'Diseñador de Producto enfocado en crear experiencias digitales con propósito. UX/UI, sistemas de diseño y estrategia de producto.',
    graph: [
      { '@type': 'WebSite', '@id': BASE + '#website', url: BASE, name: 'Patricio Bustamante', inLanguage: ['es', 'en'], publisher: { '@id': PERSON_ID } },
      person,
    ],
  },
  'pages/about.html': {
    url: BASE + 'pages/about.html',
    type: 'profile',
    title: 'Sobre mí — Patricio Bustamante',
    desc: 'Sobre Patricio Bustamante: Diseñador de Producto chileno con más de 9 años de experiencia en banca, retail, telecomunicaciones y seguros en entornos B2C, B2B y B2B2C.',
    graph: [
      {
        '@type': 'ProfilePage', url: BASE + 'pages/about.html',
        mainEntity: {
          ...person,
          worksFor: { '@type': 'Organization', name: 'Caja de Compensación Los Andes' },
          alumniOf: ['Pontificia Universidad Católica de Valparaíso', 'Pontificia Universidad Católica de Chile', 'Duoc UC']
            .map(name => ({ '@type': 'EducationalOrganization', name })),
        },
      },
      breadcrumbs([['Inicio', BASE], ['Sobre mí', BASE + 'pages/about.html']]),
    ],
  },
  'pages/work.html': {
    url: BASE + 'pages/work.html',
    title: 'Proyectos — Patricio Bustamante',
    desc: 'Selección de proyectos recientes de diseño de producto, UX/UI y sistemas de diseño por Patricio Bustamante.',
    graph: [
      {
        '@type': 'CollectionPage', url: BASE + 'pages/work.html', name: 'Proyectos', author: { '@id': PERSON_ID },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: visible.map(([slug, p], i) => ({
            '@type': 'ListItem', position: i + 1, name: es(p.title), url: `${BASE}pages/${slug}.html`,
          })),
        },
      },
      breadcrumbs([['Inicio', BASE], ['Proyectos', BASE + 'pages/work.html']]),
    ],
  },
};

// Actualiza el <head> de inicio, "Sobre mí" y "Proyectos".
for (const [file, cfg] of Object.entries(staticPages)) {
  fs.writeFileSync(file, withHead(fs.readFileSync(file, 'utf8'), cfg));
}

// proyecto.html queda como plantilla y redirección de enlaces antiguos (?slug=)
const template = fs.readFileSync('pages/proyecto.html', 'utf8');

// Crea pages/<slug>.html por proyecto a partir de la plantilla, con título, H1 y resumen ya escritos para buscadores.
for (const [slug, p] of visible) {
  const url = `${BASE}pages/${slug}.html`;
  const title = `${es(p.title)} — Patricio Bustamante`;
  const desc = es(p.summary);
  const image = p.coverImage ? absAsset(p.coverImage) : OG_IMAGE;

  let html = withHead(template, {
    url, title, desc, type: 'article', image,
    graph: [
      {
        '@type': 'CreativeWork', '@id': url + '#work', url,
        name: es(p.heroTitle) || es(p.title), headline: es(p.title), description: desc,
        image, dateCreated: p.year, inLanguage: 'es',
        keywords: (es(p.tags) || []).join(', '), genre: es(p.category),
        author: { '@id': PERSON_ID }, creator: { '@type': 'Person', '@id': PERSON_ID, name: 'Patricio Bustamante' },
        ...(p.client ? { sourceOrganization: { '@type': 'Organization', name: p.client } } : {}),
      },
      breadcrumbs([['Inicio', BASE], ['Proyectos', BASE + 'pages/work.html'], [es(p.title), url]]),
    ],
  });

  html = html
    .replace('<html lang="es">', `<html lang="es" data-slug="${slug}">`)
    .replace(/<title[^>]*>[^<]*<\/title>/, `<title>${text(title)}</title>`)
    .replace(/(<meta name="description")[^>]*>/, `$1 content="${attr(desc)}">`)
    .replace('data-pj="hero-title"></h1>', `data-pj="hero-title">${text(es(p.heroTitle) || es(p.title))}</h1>`)
    .replace('data-pj="summary"></p>', `data-pj="summary">${text(desc)}</p>`);

  fs.writeFileSync(`pages/${slug}.html`, html);
}

// Escribe sitemap.xml con todas las páginas públicas.
const urls = [BASE, BASE + 'pages/work.html', BASE + 'pages/about.html', ...visible.map(([slug]) => `${BASE}pages/${slug}.html`)];
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);

console.log(`SEO OK · ${visible.length} páginas de proyecto + sitemap.xml`);
