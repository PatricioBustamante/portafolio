/* ============================================
   i18n DICTIONARY · textos de UI estáticos
   --------------------------------------------
   Solo UI/estructura. El contenido de proyectos
   vive en projects-data.js (campos { es, en }).
   Claves con markup usan data-i18n-html.
   ============================================ */

window.PB_DICT = {
  es: {
    /* ── Común ── */
    'common.skip': 'Saltar al contenido principal',
    'common.loading': 'Cargando sitio',
    'common.home': 'Inicio',
    'common.breadcrumb': 'Migas de pan',
    'common.newWindow': '(abre en nueva ventana)',
    'common.downloadCv': 'Descargar CV',
    'common.contactMe': 'Contáctame',
    'common.statYears': 'Años de experiencia',
    'card.project': 'Proyecto',

    /* ── Nav / header ── */
    'nav.aria': 'Principal',
    'nav.logoAria': 'Patricio Bustamante — Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.statusSr': 'Estado: ',
    'nav.status': 'Disponible',
    'nav.menuOpen': 'Abrir menú',
    'nav.menuClose': 'Cerrar menú',
    'lang.groupAria': 'Seleccionar idioma',
    'lang.esAria': 'Cambiar a español',
    'lang.enAria': 'Cambiar a inglés',

    /* ── Footer ── */
    'footer.homeAria': 'Volver al inicio',
    'footer.timeAria': 'Hora local en Chile',
    'footer.cursorAria': 'Activar o desactivar cursor personalizado',
    'footer.cursorLabel': 'Cursor',
    'footer.cursorOn': 'Activado',
    'footer.cursorOff': 'Desactivado',
    'footer.made': 'Hecho con cariño · Chile',

    /* ── Contacto (compartido) ── */
    'contact.label': '03 — Hablemos',
    'contact.headlineIdea': '¿Tienes una<br><em>idea</em>? Hablemos.',
    'contact.headlineSaw': '¿Te gustó lo que<br><em>viste</em>? Hablemos.',
    'contact.emailAria': 'Enviar email a pbustamanteinzunza@gmail.com',
    'contact.location': 'Ubicación',
    'contact.locationContent': 'Concepción, Chile<br>Trabajando remoto<br>globalmente',
    'contact.social': 'Social',
    'contact.services': 'Servicios',
    'contact.servicesContent': 'Diseño de Producto<br>Sistemas de Diseño<br>Consultoría UX',
    'contact.currently': 'Actualmente',
    'contact.currentlyLead': 'Aceptando proyectos<br>para Q3 — Q4 2026<br>',

    /* ── Home ── */
    'meta.homeTitle': 'Patricio Bustamante — Diseñador de Producto',
    'meta.homeDesc': 'Diseñador de Producto enfocado en crear experiencias digitales con propósito. UX/UI, sistemas de diseño y estrategia de producto.',
    'home.heroEyebrow': 'Diseñador de Producto — Chile',
    'home.heroTitle': '<span class="line" aria-hidden="true"><span class="line-inner">Diseño</span></span><span class="line" aria-hidden="true"><span class="line-inner">productos <em>que</em></span></span><span class="line" aria-hidden="true"><span class="line-inner"><em>importan</em>.</span></span><span class="sr-only">Diseño productos que importan.</span>',
    'home.heroIntro': 'Soy <strong>Patricio Bustamante</strong>, product designer enfocado en crear experiencias digitales con propósito. Trabajo en la intersección de estrategia, investigación y craft visual.',
    'home.linkedinAria': 'LinkedIn (abre en nueva ventana)',
    'home.scroll': 'Desliza',
    'home.heroMeta': '<span>Disponibilidad</span>Aceptando proyectos<br>Q3 / Q4 2026',
    'home.workLabel': '01 — Proyectos seleccionados',
    'home.workTitle': 'Proyectos<br><em>recientes</em>',
    'home.viewAll': 'Ver todos los proyectos',
    'home.aboutLabel': '02 — About',
    'home.aboutHeadline': 'Combino <em>estrategia, investigación y craft visual</em> para diseñar productos digitales que no solo funcionan, sino que <em>se sienten bien</em> al usarse.',
    'home.aboutBody': '9+ años diseñando productos digitales para startups y empresas en LATAM. Mi enfoque integra estrategia de producto, investigación de usuarios y sistemas de diseño para crear experiencias que generan impacto real en el negocio y en las personas que las usan.',
    'home.statProjects': 'Proyectos entregados',
    'home.statCountries': 'Países / clientes',
    'home.skillsLabel': 'Herramientas y habilidades',

    /* ── Marquee home ── */
    'mq.productDesign': 'Diseño de Producto',
    'mq.designSystems': 'Design Systems',
    'mq.userResearch': 'Investigación de Usuarios',
    'mq.digitalBanking': 'Banca Digital',
    'mq.productStrategy': 'Estrategia de Producto',
    'mq.ia': 'Arquitectura de Información',
    'mq.prototyping': 'Prototipado',
    'mq.dataDriven': 'Data Driven Design',
    'mq.b2c': 'Diseño B2C / B2B',
    'mq.usability': 'Usability Testing',

    /* ── Marquee work ── */
    'mqw.fintech': 'Fintech',
    'mqw.saas': 'SaaS',
    'mqw.ecommerce': 'E-commerce',
    'mqw.wellness': 'Bienestar',
    'mqw.editorial': 'Editorial',
    'mqw.designSystems': 'Sistemas de Diseño',

    /* ── Skills pills (home) ── */
    'skill.prototyping': 'Prototipado',
    'skill.designSystems': 'Sistemas de Diseño',
    'skill.userResearch': 'Investigación de usuarios',
    'skill.usability': 'Test de usabilidad',
    'skill.ia': 'Arquitectura de información',
    'skill.productStrategy': 'Estrategia de producto',
    'skill.dataDriven': 'Diseño basado en datos',

    /* ── Work page ── */
    'meta.workTitle': 'Proyectos — Patricio Bustamante',
    'meta.workDesc': 'Selección de proyectos recientes de diseño de producto, UX/UI y sistemas de diseño por Patricio Bustamante.',
    'work.heroMeta': '<span>Período</span>2023 — 2026<br>12 proyectos destacados',

    /* ── About page ── */
    'meta.aboutTitle': 'Sobre mí — Patricio Bustamante',
    'meta.aboutDesc': 'Sobre Patricio Bustamante: Diseñador de Producto chileno con más de 8 años de experiencia en banca, retail, telecomunicaciones y seguros en entornos B2C, B2B y B2B2C.',
    'about.eyebrow': '02 — Sobre mí',
    'about.title': 'Sobre<br><em>mí</em>',
    'about.heroMeta': '<span>Base</span>Santiago, Chile<br>Disponible para proyectos remotos',
    'about.profile': 'Perfil',
    'about.headline': 'Combino <em>estrategia, investigación y craft visual</em> para diseñar productos digitales centrados en el usuario que <em>generan impacto real</em> en el negocio.',
    'about.body1': 'Soy Diseñador de Producto con <strong>más de 9 años</strong> de experiencia en el desarrollo de soluciones digitales para sectores como <strong>banca, retail, telecomunicaciones y seguros</strong>, en entornos B2C, B2B y B2B2C.',
    'about.body2': 'Mi enfoque integra estrategia de producto, investigación de usuarios y sistemas de diseño para maximizar la experiencia del usuario y el impacto en el negocio. He trabajado en Caja Los Andes, Betterfly, 2Brains, Banco Ripley, Santander, BCI, Coopeuch, Liberty Seguros, Consorcio y Nacional Monte de Piedad (México).',
    'about.statCompanies': 'Empresas / consultoras',
    'about.statSectors': 'Sectores industriales',
    'about.experience': 'Experiencia profesional',
    'about.education': 'Educación y certificaciones',
    'about.methods': 'Metodologías y técnicas',
    'about.tools': 'Herramientas',
    'about.soft': 'Habilidades blandas',
    'about.languages': 'Idiomas',

    /* Timeline — experiencia */
    'about.exp1Date': 'Mar. 2025 — Presente',
    'about.exp1Detail': 'Implementé un Design System Federado que estandarizó componentes UI/UX en toda la organización, reduciendo el tiempo de desarrollo en un 25%. Lideré la documentación para 8 equipos de productos digitales, logrando adopción del 90% en los primeros 3 meses.',
    'about.exp2Date': 'Sept. 2024 — Dic. 2024',
    'about.exp2Detail': 'Lideré la implementación de Scrum capacitando al equipo en prácticas ágiles, diseñé el roadmap estratégico y ejecuté mejoras de rendimiento y estabilidad en la app móvil.',
    'about.exp3Date': 'Jun. 2022 — Agost. 2024',
    'about.exp3Detail': 'Rediseñé la plataforma de productos prendarios del Nacional Monte de Piedad (+20% eficiencia en pago y liberación). Optimicé servicios API para Banco Security mediante research, reduciendo el tiempo de procesamiento en 15%.',
    'about.exp4Date': 'May. 2021 — Jun. 2022',
    'about.exp4Detail': 'Diseñé experiencias para usuarios internos y externos (+25% adopción digital). Lideré la implementación en España, Perú y México. Realicé A/B testing optimizando conversiones en un 18% y mentoreé a 3 diseñadores junior.',
    'about.exp5Date': 'Dic. 2020 — May. 2021',
    'about.exp5Detail': 'Desarrollé la experiencia de la app híbrida en los flujos de Crédito de Consumo, Avance, Súper Avance y Seguros. Tests de usabilidad, entrevistas de usuario y mejoras visuales sobre el sistema de diseño.',
    'about.exp6Date': 'Agost. 2019 — Dic. 2020',
    'about.exp6Detail': 'Consultor en UI para Banco BCI (design Sprint con GoPlaceit para créditos hipotecarios, plataforma de cuentas Pyme) y Coopeuch (auditoría y construcción del sistema de diseño para todas sus plataformas).',
    'about.exp7Date': 'May. 2019 — Agost. 2019',
    'about.exp7Detail': 'Proyectos internos en Banco Santander para las áreas de Facturación y Recursos Humanos: plataformas de gestión de empleados y facturación de proveedores.',
    'about.exp8Date': 'May. 2019 — Agost. 2019',
    'about.exp8Detail': 'Banco BCI: bajada de negocio e interfaz de plataforma jurídica. Consorcio: proceso de Discovery con benchmark visual y operacional. Liberty Seguros: investigación y rediseño de la plataforma de Seguimiento de Siniestros.',

    /* Timeline — educación */
    'about.edu1Role': 'ChatGPT para Product Designers',
    'about.edu2Role': 'Scrum Foundation Professional Certification',
    'about.edu3Role': 'Diplomado en Arquitectura de Información y UX',
    'about.edu4Role': 'Curso UX Design · 72 horas',
    'about.edu5Role': 'Diseño Gráfico Profesional',
    'about.eduOnline': 'Online',

    /* Metodologías */
    'meth.doubleDiamond': 'Doble diamante',
    'meth.tripleDiamond': 'Triple diamante',
    'meth.userResearch': 'Investigación de usuarios',
    'meth.userInterviews': 'Entrevistas con usuarios',
    'meth.userArchetypes': 'Arquetipos de usuario',
    'meth.prototyping': 'Prototipado',
    'meth.usability': 'Test de usabilidad',
    'meth.designSystems': 'Sistemas de Diseño',
    'meth.mobileDesign': 'Diseño móvil',
    'meth.roadmapping': 'Hoja de ruta y backlogs',
    'meth.ia': 'Arquitectura de información',
    'meth.abTesting': 'Pruebas A/B',

    /* Soft skills */
    'soft.communication': 'Comunicación',
    'soft.negotiation': 'Negociación',
    'soft.autonomy': 'Autonomía',
    'soft.teamwork': 'Trabajo en equipo',
    'soft.adaptability': 'Adaptabilidad',
    'soft.empathy': 'Empatía',
    'soft.openFeedback': 'Feedback abierto',
    'soft.problemSolving': 'Resolución de problemas',

    /* Idiomas */
    'lng.spanish': 'Español — Nativo',
    'lng.english': 'Inglés — B1',

    /* ── Detalle de proyecto ── */
    'meta.projectTitle': 'Proyecto — Patricio Bustamante',
    'meta.projectDesc': 'Detalle de proyecto · Patricio Bustamante, Diseñador de Producto.',
    'pj.role': 'Rol',
    'pj.focus': 'Foco',
    'pj.platform': 'Plataforma',
    'pj.year': 'Año',
    'pj.context': 'Contexto',
    'pj.challenge': 'Desafío',
    'pj.analysis': 'Análisis',
    'pj.imagesAria': 'Imágenes del proyecto',
    'pj.impactLabel': '04 — Impacto',
    'pj.impactTitle': 'Impacto <em>medible</em>',
    'pj.nextLabel': 'Siguiente proyecto',
    'pj.backToProjects': 'Volver a proyectos',
    'pj.before': 'Antes',
    'pj.after': 'Después'
  },

  en: {
    /* ── Common ── */
    'common.skip': 'Skip to main content',
    'common.loading': 'Loading site',
    'common.home': 'Home',
    'common.breadcrumb': 'Breadcrumb',
    'common.newWindow': '(opens in a new window)',
    'common.downloadCv': 'Download CV',
    'common.contactMe': 'Get in touch',
    'common.statYears': 'Years of experience',
    'card.project': 'Project',

    /* ── Nav / header ── */
    'nav.aria': 'Main',
    'nav.logoAria': 'Patricio Bustamante — Home',
    'nav.projects': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.statusSr': 'Status: ',
    'nav.status': 'Available',
    'nav.menuOpen': 'Open menu',
    'nav.menuClose': 'Close menu',
    'lang.groupAria': 'Select language',
    'lang.esAria': 'Switch to Spanish',
    'lang.enAria': 'Switch to English',

    /* ── Footer ── */
    'footer.homeAria': 'Back to home',
    'footer.timeAria': 'Local time in Chile',
    'footer.cursorAria': 'Toggle custom cursor',
    'footer.cursorLabel': 'Cursor',
    'footer.cursorOn': 'On',
    'footer.cursorOff': 'Off',
    'footer.made': 'Made with care · Chile',

    /* ── Contacto (compartido) ── */
    'contact.label': '03 — Let’s talk',
    'contact.headlineIdea': 'Got an<br><em>idea</em>? Let’s talk.',
    'contact.headlineSaw': 'Like what you<br><em>saw</em>? Let’s talk.',
    'contact.emailAria': 'Send an email to pbustamanteinzunza@gmail.com',
    'contact.location': 'Location',
    'contact.locationContent': 'Concepción, Chile<br>Working remotely<br>worldwide',
    'contact.social': 'Social',
    'contact.services': 'Services',
    'contact.servicesContent': 'Product Design<br>Design Systems<br>UX Consulting',
    'contact.currently': 'Currently',
    'contact.currentlyLead': 'Accepting projects<br>for Q3 — Q4 2026<br>',

    /* ── Home ── */
    'meta.homeTitle': 'Patricio Bustamante — Product Designer',
    'meta.homeDesc': 'Product Designer focused on building purposeful digital experiences. UX/UI, design systems and product strategy.',
    'home.heroEyebrow': 'Product Designer — Chile',
    'home.heroTitle': '<span class="line" aria-hidden="true"><span class="line-inner">I design</span></span><span class="line" aria-hidden="true"><span class="line-inner">products <em>that</em></span></span><span class="line" aria-hidden="true"><span class="line-inner"><em>matter</em>.</span></span><span class="sr-only">I design products that matter.</span>',
    'home.heroIntro': 'I’m <strong>Patricio Bustamante</strong>, a product designer focused on building purposeful digital experiences. I work at the intersection of strategy, research and visual craft.',
    'home.linkedinAria': 'LinkedIn (opens in a new window)',
    'home.scroll': 'Scroll',
    'home.heroMeta': '<span>Availability</span>Accepting projects<br>Q3 / Q4 2026',
    'home.workLabel': '01 — Selected work',
    'home.workTitle': 'Recent<br><em>work</em>',
    'home.viewAll': 'View all projects',
    'home.aboutLabel': '02 — About',
    'home.aboutHeadline': 'I blend <em>strategy, research and visual craft</em> to design digital products that don’t just work, but <em>feel right</em> to use.',
    'home.aboutBody': '9+ years designing digital products for startups and companies across LATAM. My approach combines product strategy, user research and design systems to create experiences that drive real impact for the business and the people who use them.',
    'home.statProjects': 'Projects delivered',
    'home.statCountries': 'Countries / clients',
    'home.skillsLabel': 'Tools & skills',

    /* ── Marquee home ── */
    'mq.productDesign': 'Product Design',
    'mq.designSystems': 'Design Systems',
    'mq.userResearch': 'User Research',
    'mq.digitalBanking': 'Digital Banking',
    'mq.productStrategy': 'Product Strategy',
    'mq.ia': 'Information Architecture',
    'mq.prototyping': 'Prototyping',
    'mq.dataDriven': 'Data Driven Design',
    'mq.b2c': 'B2C / B2B Design',
    'mq.usability': 'Usability Testing',

    /* ── Marquee work ── */
    'mqw.fintech': 'Fintech',
    'mqw.saas': 'SaaS',
    'mqw.ecommerce': 'E-commerce',
    'mqw.wellness': 'Wellness',
    'mqw.editorial': 'Editorial',
    'mqw.designSystems': 'Design Systems',

    /* ── Skills pills (home) ── */
    'skill.prototyping': 'Prototyping',
    'skill.designSystems': 'Design Systems',
    'skill.userResearch': 'User research',
    'skill.usability': 'Usability testing',
    'skill.ia': 'Information architecture',
    'skill.productStrategy': 'Product strategy',
    'skill.dataDriven': 'Data-driven design',

    /* ── Work page ── */
    'meta.workTitle': 'Work — Patricio Bustamante',
    'meta.workDesc': 'A selection of recent product design, UX/UI and design systems work by Patricio Bustamante.',
    'work.heroMeta': '<span>Period</span>2023 — 2026<br>12 featured projects',

    /* ── About page ── */
    'meta.aboutTitle': 'About — Patricio Bustamante',
    'meta.aboutDesc': 'About Patricio Bustamante: Chilean Product Designer with 8+ years of experience across banking, retail, telecom and insurance in B2C, B2B and B2B2C settings.',
    'about.eyebrow': '02 — About',
    'about.title': 'About<br><em>me</em>',
    'about.heroMeta': '<span>Based in</span>Santiago, Chile<br>Available for remote projects',
    'about.profile': 'Profile',
    'about.headline': 'I blend <em>strategy, research and visual craft</em> to design user-centered digital products that <em>drive real impact</em> for the business.',
    'about.body1': 'I’m a Product Designer with <strong>9+ years</strong> of experience building digital solutions across <strong>banking, retail, telecom and insurance</strong>, in B2C, B2B and B2B2C settings.',
    'about.body2': 'My approach combines product strategy, user research and design systems to maximize both user experience and business impact. I’ve worked with Caja Los Andes, Betterfly, 2Brains, Banco Ripley, Santander, BCI, Coopeuch, Liberty Seguros, Consorcio and Nacional Monte de Piedad (Mexico).',
    'about.statCompanies': 'Companies / agencies',
    'about.statSectors': 'Industry sectors',
    'about.experience': 'Professional experience',
    'about.education': 'Education & certifications',
    'about.methods': 'Methodologies & techniques',
    'about.tools': 'Tools',
    'about.soft': 'Soft skills',
    'about.languages': 'Languages',

    /* Timeline — experiencia */
    'about.exp1Date': 'Mar 2025 — Present',
    'about.exp1Detail': 'Implemented a federated Design System that standardized UI/UX components across the organization, cutting development time by 25%. Led documentation for 8 digital product teams, reaching 90% adoption within the first 3 months.',
    'about.exp2Date': 'Sep 2024 — Dec 2024',
    'about.exp2Detail': 'Led the adoption of Scrum by coaching the team on agile practices, designed the strategic roadmap and shipped performance and stability improvements to the mobile app.',
    'about.exp3Date': 'Jun 2022 — Aug 2024',
    'about.exp3Detail': 'Redesigned Nacional Monte de Piedad’s pawn-loan platform (+20% efficiency in payment and release). Optimized API services for Banco Security through research, reducing processing time by 15%.',
    'about.exp4Date': 'May 2021 — Jun 2022',
    'about.exp4Detail': 'Designed experiences for internal and external users (+25% digital adoption). Led rollouts in Spain, Peru and Mexico. Ran A/B testing that improved conversions by 18% and mentored 3 junior designers.',
    'about.exp5Date': 'Dec 2020 — May 2021',
    'about.exp5Detail': 'Built the hybrid app experience for the Consumer Credit, Cash Advance, Super Advance and Insurance flows. Usability testing, user interviews and visual improvements on top of the design system.',
    'about.exp6Date': 'Aug 2019 — Dec 2020',
    'about.exp6Detail': 'UI consultant for Banco BCI (Design Sprint with GoPlaceit for mortgage loans, SME accounts platform) and Coopeuch (audit and build of the design system across all its platforms).',
    'about.exp7Date': 'May 2019 — Aug 2019',
    'about.exp7Detail': 'Internal projects at Banco Santander for the Billing and HR areas: employee management and supplier billing platforms.',
    'about.exp8Date': 'May 2019 — Aug 2019',
    'about.exp8Detail': 'Banco BCI: business framing and UI for a legal platform. Consorcio: Discovery process with visual and operational benchmarking. Liberty Seguros: research and redesign of the Claims Tracking platform.',

    /* Timeline — educación */
    'about.edu1Role': 'ChatGPT for Product Designers',
    'about.edu2Role': 'Scrum Foundation Professional Certification',
    'about.edu3Role': 'Postgraduate Diploma in Information Architecture & UX',
    'about.edu4Role': 'UX Design Course · 72 hours',
    'about.edu5Role': 'Professional Graphic Design',
    'about.eduOnline': 'Online',

    /* Metodologías */
    'meth.doubleDiamond': 'Double diamond',
    'meth.tripleDiamond': 'Triple diamond',
    'meth.userResearch': 'User research',
    'meth.userInterviews': 'User interviews',
    'meth.userArchetypes': 'User archetypes',
    'meth.prototyping': 'Prototyping',
    'meth.usability': 'Usability testing',
    'meth.designSystems': 'Design Systems',
    'meth.mobileDesign': 'Mobile design',
    'meth.roadmapping': 'Roadmapping & backlogs',
    'meth.ia': 'Information architecture',
    'meth.abTesting': 'A/B testing',

    /* Soft skills */
    'soft.communication': 'Communication',
    'soft.negotiation': 'Negotiation',
    'soft.autonomy': 'Autonomy',
    'soft.teamwork': 'Teamwork',
    'soft.adaptability': 'Adaptability',
    'soft.empathy': 'Empathy',
    'soft.openFeedback': 'Open feedback',
    'soft.problemSolving': 'Problem solving',

    /* Idiomas */
    'lng.spanish': 'Spanish — Native',
    'lng.english': 'English — B1',

    /* ── Detalle de proyecto ── */
    'meta.projectTitle': 'Project — Patricio Bustamante',
    'meta.projectDesc': 'Project detail · Patricio Bustamante, Product Designer.',
    'pj.role': 'Role',
    'pj.focus': 'Focus',
    'pj.platform': 'Platform',
    'pj.year': 'Year',
    'pj.context': 'Context',
    'pj.challenge': 'Challenge',
    'pj.analysis': 'Analysis',
    'pj.imagesAria': 'Project images',
    'pj.impactLabel': '04 — Impact',
    'pj.impactTitle': 'Measurable <em>impact</em>',
    'pj.nextLabel': 'Next project',
    'pj.backToProjects': 'Back to projects',
    'pj.before': 'Before',
    'pj.after': 'After'
  }
};
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
// ===== Auto-render project lists =====
(function renderProjectLists() {
  const projects = window.PROJECTS || {};
  document.querySelectorAll('[data-projects]').forEach(container => {
    const filter = container.getAttribute('data-projects');
    const slugs = Object.keys(projects).filter(slug => {
      const p = projects[slug];
      if (!p.visibleProject) return false;
      if (filter === 'recent') return p.recentProject === true;
      return true;
    });
    container.innerHTML = slugs.map(slug => `<project-card slug="${slug}"></project-card>`).join('');
  });
})();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

// i18n helper (PB_I18N se carga antes que bundle.js)
const t = k => (window.PB_I18N ? window.PB_I18N.t(k) : k);

// ===== Disable browser zoom (keyboard + scroll) =====
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey) {
    if (['+', '-', '=', '_', '0'].includes(e.key)) e.preventDefault();
  }
}, { passive: false });
document.addEventListener('wheel', e => {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// ===== Loader =====
const loaderBar = document.getElementById('loaderBar');
const loader = document.getElementById('loader');

function finishLoader() {
  if (!loader) return;
  loader.classList.add('done');
  loader.setAttribute('aria-hidden', 'true');
  setTimeout(() => { loader.style.display = 'none'; }, reduceMotion.matches ? 0 : 1200);
}

if (reduceMotion.matches) {
  if (loaderBar) loaderBar.style.width = '100%';
  finishLoader();
} else {
  let progress = 0;
  const loaderInterval = setInterval(() => {
    progress += Math.random() * 12 + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loaderInterval);
      setTimeout(finishLoader, 300);
    }
    if (loaderBar) loaderBar.style.width = progress + '%';
  }, 80);
}

// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
const CURSOR_PREF_KEY = 'pb:cursor';
const cursorSupported = cursor && finePointer.matches && !reduceMotion.matches;

function readCursorPref() {
  try { return localStorage.getItem(CURSOR_PREF_KEY); } catch { return null; }
}
function writeCursorPref(val) {
  try { localStorage.setItem(CURSOR_PREF_KEY, val); } catch {}
}

let cursorEnabled = cursorSupported && readCursorPref() !== 'off';

function applyCursorState() {
  if (cursorEnabled) {
    cursor.style.display = '';
    document.body.classList.add('has-custom-cursor');
  } else {
    if (cursor) cursor.style.display = 'none';
    document.body.classList.remove('has-custom-cursor');
  }
  document.querySelectorAll('.cursor-toggle').forEach(btn => {
    btn.setAttribute('aria-pressed', String(cursorEnabled));
    const stateEl = btn.querySelector('.cursor-toggle-state');
    if (stateEl) stateEl.textContent = cursorEnabled ? t('footer.cursorOn') : t('footer.cursorOff');
  });
}

// Refresca textos dependientes de estado cuando cambia el idioma
document.addEventListener('pb:langchange', () => applyCursorState());

let cursorRafId = null;
let cursorTick = null;

if (cursorSupported) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let cursorLastTime = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  cursorTick = function(timestamp) {
    const delta = cursorLastTime ? Math.min(timestamp - cursorLastTime, 50) : 16.67;
    cursorLastTime = timestamp;
    const k = 1 - Math.pow(0.65, delta / 16.67);
    cursorX += (mouseX - cursorX) * k;
    cursorY += (mouseY - cursorY) * k;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorRafId = requestAnimationFrame(cursorTick);
  };
  cursorRafId = requestAnimationFrame(cursorTick);

  document.querySelectorAll('a, button, .project, .magnetic').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
  document.querySelectorAll('p, .about-body, .hero-intro').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('text'); cursor.classList.remove('hover'); });
    el.addEventListener('mouseleave', () => cursor.classList.remove('text'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && cursorEnabled) document.body.classList.remove('has-custom-cursor');
  });
  document.addEventListener('mousemove', () => {
    if (cursorEnabled) document.body.classList.add('has-custom-cursor');
  });
}

document.querySelectorAll('.cursor-toggle').forEach(btn => {
  if (!cursorSupported) { btn.hidden = true; return; }
  btn.addEventListener('click', () => {
    cursorEnabled = !cursorEnabled;
    writeCursorPref(cursorEnabled ? 'on' : 'off');
    applyCursorState();
  });
});

applyCursorState();

// Pausa los bucles rAF cuando el usuario cambia de tab
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (cursorRafId) { cancelAnimationFrame(cursorRafId); cursorRafId = null; }
  } else {
    if (cursorTick && !cursorRafId) cursorRafId = requestAnimationFrame(cursorTick);
  }
});

// ===== Magnetic Buttons =====
if (finePointer.matches && !reduceMotion.matches) {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// ===== Scroll Reveal =====
if (reduceMotion.matches) {
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      // Libera la capa GPU compuesta después de que termina la transición
      entry.target.addEventListener('transitionend', () => {
        entry.target.style.willChange = 'auto';
      }, { once: true });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });
}

// ===== Hero mark parallax =====
const heroMark = document.querySelector('.hero-mark');
if (heroMark && !reduceMotion.matches) {
  let parallaxFrame = null;
  function updateParallax() {
    parallaxFrame = null;
    const ratio = Math.min(window.scrollY / window.innerHeight, 1);
    heroMark.style.setProperty('--parallax-y', `${-ratio * 60}px`);
    heroMark.style.setProperty('--parallax-x', `${ratio * 40}px`);
  }
  window.addEventListener('scroll', () => {
    if (parallaxFrame === null) parallaxFrame = requestAnimationFrame(updateParallax);
  }, { passive: true });
  updateParallax();
}

// ===== Count-up animation =====
function animateCountUp(el, target, duration = 1400) {
  if (reduceMotion.matches) { el.textContent = target + (el.dataset.suffix || ''); return; }
  const suffix = el.dataset.suffix || '';
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length) {
  const statObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const match = el.textContent.trim().match(/^(\d+)(.*)$/);
      if (match) {
        el.dataset.suffix = match[2];
        animateCountUp(el, parseInt(match[1], 10));
      }
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  statNumbers.forEach(el => statObserver.observe(el));
}

// ===== Smooth Scroll =====
document.querySelectorAll('.nav-links a, .nav-logo').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }
  });
});

// ===== Local Time =====
function updateTime() {
  const el = document.getElementById('localTime');
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/Santiago', hour12: false,
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }) + ' CLT';
}
updateTime();
setInterval(updateTime, 1000);

// ===== Mobile nav =====
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

function setMenuOpen(open) {
  document.body.classList.toggle('menu-open', open);
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? t('nav.menuClose') : t('nav.menuOpen'));
  }
  if (open) {
    const firstLink = navLinksEl && navLinksEl.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    if (navToggle) navToggle.focus();
  }
}

function trapMenuFocus(e) {
  if (!document.body.classList.contains('menu-open') || e.key !== 'Tab') return;
  const focusables = [navToggle, ...navLinksEl.querySelectorAll('a')].filter(Boolean);
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => setMenuOpen(!document.body.classList.contains('menu-open')));
  navLinksEl.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setMenuOpen(false);
  });
  document.addEventListener('keydown', trapMenuFocus);
  window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => { if (e.matches) setMenuOpen(false); });
}

// ===== Nav scroll =====
const nav = document.querySelector('.nav');
if (nav) {
  const navScrollMQ = window.matchMedia('(min-width: 769px)');
  window.addEventListener('scroll', () => {
    if (!navScrollMQ.matches) { nav.style.padding = ''; return; }
    nav.style.padding = window.scrollY > 100
      ? 'var(--space-2) var(--container-px)'
      : 'var(--space-3) var(--container-px)';
  }, { passive: true });
}
