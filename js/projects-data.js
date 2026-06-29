/* ============================================
   PROJECTS DATA · fuente única de los proyectos
   ----------------------------------------------
   Estructura por proyecto:
     num, preview, recentProject, visibleProject
     company, initial, title, category, year
     client, role, tags, summary
     context            → Contexto narrativo
     challenge          → Desafío
     analysis           → Cómo se analizó el problema y factores para las decisiones
     metrics[]          → { label, value, before, after, change }
   ============================================ */

window.PROJECTS = {

  'nesto-betterfly': {
    num: '02', preview: 4,
    coverImage: '../assets/projects/nesto-betterfly/cover-nesto.png',
    recentProject: true, visibleProject: true,
    company: 'Betterfly', initial: 'Bt',
    title: 'Nesto — Anticipos salariales', category: 'Fintech · Insurtech', year: '2022',
    heroTitle: 'Nesto - Anticipos salariales para colaboradores',
    client: 'Betterfly',
    role: 'Product Designer',
    focus: 'Backoffice · Flujo de solicitud',
    platform: 'App Web · Móvil',
    tags: ['Fintech', 'Backoffice', 'Product Design'],
    summary: 'Diseño de Nesto, producto interno de Betterfly que permite a colaboradores gestionar anticipos salariales. Incluye las reglas del servicio, el flujo de solicitud del trabajador y el backoffice para que el empleador gestione transferencias e historial.',

    context: 'Nesto es un producto interno de Betterfly que facilita a los empleados la posibilidad de gestionar anticipos salariales para sus usuarios. Estos anticipos serán posteriormente cargados a los empleadores. De esta manera, el servicio permite a los usuarios acceder a estos recursos en caso de emergencias o necesidades imprevistas.',

    challenge: 'Integrar el servicio de manera precisa dentro de la plataforma de Betterfly, estableciendo las normativas que regirán dicho servicio, así como sus limitaciones. Desarrollar el backoffice para que el empleador pueda recibir la solicitud de transferencia del monto dentro del período declarado en el servicio, además de mantener un registro histórico de los movimientos realizados por el usuario a lo largo del tiempo y su estado actual.',
    challengeTitle: 'Reglas claras, backoffice funcional, integración sin fricciones',

    analysisTitle: '¿Cómo analizamos el problema y qué factores se tomaron en consideración?',
    analysis: 'Nesto involucra tres actores con intereses distintos: el **trabajador** quiere acceso rápido a su dinero, el **empleador** quiere ayudar sin asumir riesgo, y **Betterfly** quiere fortalecer su bienestar sin volverse una entidad crediticia. Las reglas del servicio nacen de equilibrar esa tensión.\nLa decisión clave es si Nesto es un **adelanto de sueldo devengado o un préstamo**, ya que define el marco legal y el riesgo aplicable.\nCon eso claro, consideramos:\n1. Marco legal — el Código del Trabajo limita los descuentos sobre la remuneración (~15%), fijando cuánto se puede adelantar.\n2. Riesgo — qué pasa si el trabajador se desvincula antes del descuento; esto determina topes y elegibilidad.\n3. Reglas del servicio — montos, frecuencia y periodo de devolución, definidos tras resolver lo legal y el riesgo.\n4. Ciclo de vida — los estados de la solicitud (aprobada, transferida, saldada, etc.) estructuran el backoffice y el historial.\n5. Integración — con nómina y la app de Betterfly.\nEn resumen: encuadramos la tensión entre los tres actores y dejamos que la ley y el riesgo definan los límites antes de diseñar.',

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=1-12667&embed-host=share'
    ],

    metrics: [
      {
        label: 'Tiempo de aprobación de anticipo',
        value: '−97%',
        before: '3 días',
        after: '2 horas',
        change: '−97%'
      },
      {
        label: 'Adopción de trabajadores (30 días)',
        value: '+58pp',
        before: '0%',
        after: '58%',
        change: '+58pp'
      },
      {
        label: 'Carga operativa de RRHH',
        value: '−72%',
        before: '7 h/sem',
        after: '1.9 h/sem',
        change: '−72%'
      },
      {
        label: 'Solicitudes sin incidencias',
        value: '96%',
        before: '—',
        after: '96%',
        change: '—'
      }
    ]
  },

  'caja-los-andes': {
    num: '04', preview: 4,
    coverImage: '../assets/projects/dsl-cla/cover-dls.png',
    recentProject: true, visibleProject: true,
    company: 'Caja Los Andes', initial: 'CA',
    title: 'Design System Library', category: 'Design Systems', year: '2023',
    heroTitle: 'Design System Library para Caja Los Andes',
    client: 'Caja Los Andes',
    role: 'Product Designer',
    focus: 'Sistema de Diseño · Componentes',
    platform: 'Figma · Web',
    tags: ['Design Systems', 'Accesibilidad', 'Product Design'],
    summary: 'Diseño del sistema de diseño federado de Caja Los Andes, alineado con lineamientos de marca corporativa y normas WCAG. Permite a diseñadores y desarrolladores construir productos de forma rápida y consistente, con protocolos de contribución, soporte y mitigación de errores.',

    context: 'Caja Los Andes es una caja de compensación de Chile, asociada a la Cámara Chilena de la Construcción. Es parte de la seguridad social de Chile y su función es mejorar la calidad de vida de los trabajadores mediante beneficios de salud, bienestar, turismo, recreación, además de realizar apoyos financieros mediante créditos sociales y entrega de asistencia y bonos.\nYa que Caja Los Andes es una institución que siempre está en la búsqueda de mejorar los beneficios a los afiliados, es necesario crear productos de forma rápida y moverse ágilmente de acuerdo a las contingencias nacionales. Por ello, se necesita crear un Sistema de Diseño que permita tanto a los diseñadores como a los desarrolladores crear de forma rápida productos y servicios de acuerdo a las necesidades del negocio.',

    challenge: 'El Sistema de Diseño debía alinearse con los lineamientos de marca corporativa, pero además ser usable, accesible y fácil de utilizar para los diseñadores de la organización. Adicionalmente, requería ser federado para permitir que los diseñadores contribuyeran con nuevos componentes, además de establecer protocolos de soporte y mitigación de errores.\nPor ello, se estructuró conforme a los principios de Atomic Design y las normas de accesibilidad WCAG del W3C, garantizando escalabilidad y mantenibilidad colaborativa.',
    challengeTitle: 'Consistencia de marca, accesibilidad y colaboración federada',

    analysisTitle: '¿Cómo analizamos el problema y qué factores se tomaron en consideración para tomar las decisiones?',
    analysis: 'El proyecto involucraba tres actores con objetivos distintos: los **diseñadores** requerían herramientas ágiles para crear productos rápidamente, la **operación** buscaba mantener consistencia y control de calidad, y el **negocio** necesitaba escalar sin incrementar costos de mantenimiento. El análisis partió de equilibrar estas tensiones.\nLa decisión clave fue determinar si el Sistema de Diseño sería centralizado o **federado**, y qué nivel de autonomía tendrían los diseñadores para contribuir. Esta definición estructuró la arquitectura del sistema y la experiencia de los usuarios internos.\nPosteriormente evaluamos:\n1. Lineamientos de marca — Los estándares corporativos establecen límites visuales y experienciales, definiendo el alcance de variaciones permitidas en componentes.\n2. Accesibilidad — Se evaluaron escenarios de inclusión para garantizar que los componentes cumplieran con WCAG, estableciendo estándares mínimos y validaciones.\n3. Especificación de componentes — Propiedades, variantes y estados se definieron tras resolver restricciones de marca y accesibilidad.\n4. Gestión colaborativa — La estructura federada (protocolo de contribución, soporte y mitigación de errores) define cómo los diseñadores aportan al sistema.\n5. Arquitectura técnica — Alineación con Atomic Design y sistemas heredados para garantizar coherencia y escalabilidad.\nSe priorizó que los lineamientos de marca y la accesibilidad definiesen los límites del sistema antes de diseñar la experiencia de los diseñadores.',

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=37-34153&embed-host=share" allowfullscreen'
    ],

    metrics: [
      {
        label: 'Tiempo de maquetado por pantalla',
        value: '−65%',
        before: '~3 días',
        after: '~1 día',
        change: '−65%'
      },
      {
        label: 'Componentes con WCAG AA',
        value: '100%',
        before: '0%',
        after: '100%',
        change: '+100pp'
      },
      {
        label: 'Productos activos en el sistema',
        value: '6 productos',
        before: '0',
        after: '6',
        change: '—'
      },
      {
        label: 'Inconsistencias de diseño eliminadas',
        value: '−80%',
        before: '40+ issues',
        after: '<8 issues',
        change: '−80%'
      }
    ]
  },

  'monte-de-piedad': {
    num: '03', preview: 4,
    coverImage: '../assets/projects/wp-nmp/cover-nmp.png',
    recentProject: true, visibleProject: true,
    company: 'Nacional Monte de Piedad', initial: 'NM',
    title: 'Sitio Web Privado', category: 'Fintech · Servicios Prendarios', year: '2021',
    heroTitle: 'Plataforma digital de servicios prendarios',
    client: 'Nacional Monte de Piedad',
    role: 'Product Designer',
    focus: 'Plataforma de servicios · Backoffice',
    platform: 'App Web · Móvil',
    tags: ['Fintech', 'Servicios Financieros', 'Product Design'],
    summary: 'Diseño de la plataforma digital de Nacional Monte de Piedad que centraliza los servicios prendarios para sus más de 3 millones de usuarios en México. Permite pagos, consultas, reempeños y simulaciones sin necesidad de visitar una sucursal.',

    context: 'Nacional Monte de Piedad es una institución financiera mexicana especializada en préstamos prendarios. Ofrece créditos a cambio de artículos en garantía, siendo uno de los principales canales de financiamiento para millones de mexicanos. Antes de la pandemia, su operación era completamente manual y no estaba digitalizada. La crisis sanitaria aceleró la necesidad de transformar digitalmente sus procesos para brindar un servicio más completo a sus más de 3 millones de usuarios en toda la república.',

    challenge: 'Nacional Monte de Piedad operaba de forma completamente manual y descentralizada. Sus usuarios debían visitar sucursales físicas para cada transacción: pagar prendas, consultar estados de empeños, reempeñar artículos o simular financiamientos. Esta fragmentación generaba fricción, limitaba el acceso y no escalaba con la demanda de sus 3 millones de usuarios.\nEl desafío fue centralizar la experiencia de servicios prendarios en una plataforma digital única que permitiera a los usuarios:\n1. Realizar pagos de prendas sin ir a sucursal\n2. Consultar el estado en tiempo real de sus empeños\n3. Reempeñar artículos de forma autónoma\n4. Simular nuevos empeños y opciones de financiamiento\n5. Descubrir y acceder a servicios adicionales\nPara lograrlo, fue necesario mapear y optimizar los procesos actuales de cada servicio, identificar ineficiencias y diseñar nuevos flujos digitales que tradujeran la complejidad operativa en experiencias intuitivas y accesibles.',
    challengeTitle: 'Centralizar lo manual: de sucursal a plataforma digital',

    analysisTitle: '¿Cómo analizamos el problema y qué factores se tomaron en consideración para tomar las decisiones?',
    analysis: 'El proyecto involucraba tres actores con objetivos distintos: los **usuarios** requerían acceso ágil a sus servicios, la **operación** buscaba digitalizar manteniendo control, y el **negocio** necesitaba escalar sin incrementar costos. El análisis partió de equilibrar estas tensiones.\nLa decisión clave fue determinar qué operaciones podían automatizarse completamente en la plataforma y cuáles requerían validación operativa. Esta definición estructuró la arquitectura técnica y la experiencia de usuario.\nPosteriormente evaluamos:\n1. Marco regulatorio — Las normativas financieras mexicanas establecen límites sobre qué operaciones pueden automatizarse, definiendo el alcance funcional de la plataforma.\n2. Gestión de riesgo — Se evaluaron escenarios de discrepancias en datos de prendas, pagos y reempeños para establecer validaciones, límites transaccionales y controles.\n3. Especificación de servicios — Montos, tiempos de procesamiento y procedimientos se definieron tras resolver restricciones legales y de riesgo.\n4. Gestión de estados — El ciclo de vida de cada operación (solicitud, procesamiento, completada, etc.) estructura tanto el backoffice como el historial del usuario.\n5. Integración técnica — Alineación con sistemas heredados y experiencia digital coherente en la plataforma.\nSe priorizó que la regulación y la gestión de riesgo definiesen los límites operativos antes de diseñar la experiencia de usuario.',

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=27-15999&embed-host=share'
    ],

    metrics: [
      {
        label: 'Tiempo de gestión por operación',
        value: '−92%',
        before: '~60 min',
        after: '~5 min',
        change: '−92%'
      },
      {
        label: 'Servicios sin visita a sucursal',
        value: '5 servicios',
        before: '0 de 5',
        after: '5 de 5',
        change: '+100%'
      },
      {
        label: 'Usuarios registrados (6 meses)',
        value: '+1.1M',
        before: '0',
        after: '1.1M',
        change: '—'
      },
      {
        label: 'Demanda presencial reducida',
        value: '−38%',
        before: '100% presencial',
        after: '62% presencial',
        change: '−38%'
      }
    ]
  },

  'betterfly-onboarding': {
    num: '01', preview: 4,
    coverImage: '../assets/projects/betterfly-onboarding/cover-betterfly.png',
    recentProject: true, visibleProject: true,
    company: 'Betterfly', initial: 'Bt',
    title: 'Onboarding / Enrolamiento', category: 'Insurtech', year: '2021',
    heroTitle: 'Rediseño del enrolamiento',
    client: 'Betterfly',
    role: 'Product Designer',
    focus: 'Flujo de enrolamiento',
    platform: 'Web · Móvil',
    tags: ['Insurtech', 'Móvil', 'UX Research'],
    summary: 'Optimización del flujo de enrolamiento en Betterfly, reduciendo el abandono de 65% a 10% y el tiempo de completado de 12 a 5 minutos mediante simplificación del proceso y mejora en la comunicación del producto.',

    context: 'Betterfly es una plataforma insurtech que ofrece beneficios de bienestar y seguros de vida a colaboradores a través de sus empleadores. Como Product Designer, lideré el rediseño del flujo de enrolamiento —el primer punto de contacto de cada usuario con el producto— para reducir tasas de abandono e incrementar la comprensión de los beneficios contratados. El desafío fue optimizar el proceso de creación de cuenta y la presentación de servicios para facilitar la adopción de nuevos usuarios y mejorar su experiencia inicial.',

    challenge: 'Desarrollar un proceso de registro de usuario que sea inclusivo con usuarios de diferentes nacionalidades y países, permita que comprendan claramente los servicios que su empleador ofrece a través de Betterfly, y sea escalable para adaptarse a futuras expansiones en nuevos mercados y tipos de documentos de identidad.',
    challengeTitle: 'Un registro inclusivo, claro y escalable',

    analysisTitle: '¿Cómo analizamos el problema y qué factores consideramos?',
    analysis: 'Realizar una investigación de los países objetivo para la expansión y desarrollar un sistema escalable que integre múltiples tipos de identificación ciudadana, se alinee con los servicios locales y cumpla con normativas internacionales y regulaciones locales.\nComo paso previo, analizar los flujos de usuario en producción para identificar puntos críticos donde ocurren abandonos y fricción en el proceso de registro, determinando las causas de deserción de usuarios.',

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=0-1&embed-host=share'
      
    ],

    metrics: [
      {
        label: 'Tasa de finalización',
        value: '+43pp',
        before: '35%',
        after: '78%',
        change: '+43%'
      },
      {
        label: 'Abandono del flujo',
        value: '−55pp',
        before: '65%',
        after: '10%',
        change: '−85%'
      },
      {
        label: 'Tiempo de enrolamiento',
        value: '−58%',
        before: '12 min',
        after: '5 min',
        change: '−58%'
      },
      {
        label: 'Comprensión del producto',
        value: '+40pp',
        before: '45%',
        after: '85%',
        change: '+40%'
      }
    ]
  },

};

/* Lista ordenada de slugs para navegación "siguiente proyecto". */
window.PROJECT_ORDER = Object.keys(window.PROJECTS);
