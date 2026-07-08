/* ============================================
   PROJECTS DATA · fuente única de los proyectos
   ----------------------------------------------
   Campos traducibles = objeto { es, en }.
   Se resuelven con PB_I18N.localize en los
   componentes / project-detail.js.

   No traducibles: num, preview, coverImage,
   recentProject, visibleProject, company, initial,
   year, embeds.
   ============================================ */

window.PROJECTS = {

  'nesto-betterfly': {
    num: '02', preview: 4,
    coverImage: '../assets/projects/nesto-betterfly/cover-nesto.png',
    recentProject: true, visibleProject: true,
    company: 'Betterfly', initial: 'Bt',
    year: '2022',
    title: {
      es: 'Nesto — Anticipos salariales',
      en: 'Nesto — Salary advances'
    },
    category: {
      es: 'Fintech · Insurtech',
      en: 'Fintech · Insurtech'
    },
    heroTitle: {
      es: 'Nesto - Anticipos salariales para colaboradores',
      en: 'Nesto — Salary advances for employees'
    },
    client: 'Betterfly',
    role: {
      es: 'Product Designer',
      en: 'Product Designer'
    },
    focus: {
      es: 'Backoffice · Flujo de solicitud',
      en: 'Backoffice · Request flow'
    },
    platform: {
      es: 'App Web · Móvil',
      en: 'Web App · Mobile'
    },
    tags: {
      es: ['Fintech', 'Backoffice', 'Product Design'],
      en: ['Fintech', 'Backoffice', 'Product Design']
    },
    summary: {
      es: 'Diseño de Nesto, producto interno de Betterfly que permite a colaboradores gestionar anticipos salariales. Incluye las reglas del servicio, el flujo de solicitud del trabajador y el backoffice para que el empleador gestione transferencias e historial.',
      en: 'Design of Nesto, an internal Betterfly product that lets employees manage salary advances. It covers the service rules, the employee request flow and the backoffice where employers handle transfers and history.'
    },

    context: {
      es: 'Nesto es un producto interno de Betterfly que facilita a los empleados la posibilidad de gestionar anticipos salariales para sus usuarios. Estos anticipos serán posteriormente cargados a los empleadores. De esta manera, el servicio permite a los usuarios acceder a estos recursos en caso de emergencias o necesidades imprevistas.',
      en: 'Nesto is an internal Betterfly product that lets employees manage salary advances. Those advances are later charged back to the employer. In this way, the service gives users access to funds in case of emergencies or unexpected needs.'
    },

    challenge: {
      es: 'Integrar el servicio de manera precisa dentro de la plataforma de Betterfly, estableciendo las normativas que regirán dicho servicio, así como sus limitaciones. Desarrollar el backoffice para que el empleador pueda recibir la solicitud de transferencia del monto dentro del período declarado en el servicio, además de mantener un registro histórico de los movimientos realizados por el usuario a lo largo del tiempo y su estado actual.',
      en: 'Integrate the service accurately within the Betterfly platform, defining the rules that govern it and its limits. Build the backoffice so the employer can receive the transfer request within the period declared by the service, while keeping a historical record of the user’s movements over time and their current status.'
    },
    challengeTitle: {
      es: 'Reglas claras, backoffice funcional, integración sin fricciones',
      en: 'Clear rules, a functional backoffice, frictionless integration'
    },

    analysisTitle: {
      es: '¿Cómo analizamos el problema y qué factores se tomaron en consideración?',
      en: 'How did we analyze the problem and which factors did we weigh?'
    },
    analysis: {
      es: 'Nesto involucra tres actores con intereses distintos: el **trabajador** quiere acceso rápido a su dinero, el **empleador** quiere ayudar sin asumir riesgo, y **Betterfly** quiere fortalecer su bienestar sin volverse una entidad crediticia. Las reglas del servicio nacen de equilibrar esa tensión.\nLa decisión clave es si Nesto es un **adelanto de sueldo devengado o un préstamo**, ya que define el marco legal y el riesgo aplicable.\nCon eso claro, consideramos:\n1. Marco legal — el Código del Trabajo limita los descuentos sobre la remuneración (~15%), fijando cuánto se puede adelantar.\n2. Riesgo — qué pasa si el trabajador se desvincula antes del descuento; esto determina topes y elegibilidad.\n3. Reglas del servicio — montos, frecuencia y periodo de devolución, definidos tras resolver lo legal y el riesgo.\n4. Ciclo de vida — los estados de la solicitud (aprobada, transferida, saldada, etc.) estructuran el backoffice y el historial.\n5. Integración — con nómina y la app de Betterfly.\nEn resumen: encuadramos la tensión entre los tres actores y dejamos que la ley y el riesgo definan los límites antes de diseñar.',
      en: 'Nesto involves three actors with different interests: the **employee** wants fast access to their money, the **employer** wants to help without taking on risk, and **Betterfly** wants to strengthen wellbeing without becoming a lender. The service rules come from balancing that tension.\nThe key decision is whether Nesto is an **advance on earned wages or a loan**, since that defines the legal framework and the applicable risk.\nWith that settled, we considered:\n1. Legal framework — Chile’s Labor Code caps deductions from pay (~15%), setting how much can be advanced.\n2. Risk — what happens if the employee leaves before the deduction; this sets caps and eligibility.\n3. Service rules — amounts, frequency and repayment period, defined after resolving the legal and risk questions.\n4. Lifecycle — the request states (approved, transferred, settled, etc.) structure the backoffice and the history.\n5. Integration — with payroll and the Betterfly app.\nIn short: we framed the tension between the three actors and let the law and the risk define the limits before designing.'
    },

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=1-12667&embed-host=share'
    ],

    metrics: [
      {
        label: { es: 'Tiempo de aprobación de anticipo', en: 'Advance approval time' },
        value: '−97%',
        before: { es: '3 días', en: '3 days' },
        after:  { es: '2 horas', en: '2 hours' },
        change: '−97%'
      },
      {
        label: { es: 'Adopción de trabajadores (30 días)', en: 'Employee adoption (30 days)' },
        value: '+58pp',
        before: '0%',
        after:  '58%',
        change: '+58pp'
      },
      {
        label: { es: 'Carga operativa de RRHH', en: 'HR operational load' },
        value: '−72%',
        before: { es: '7 h/sem', en: '7 h/wk' },
        after:  { es: '1.9 h/sem', en: '1.9 h/wk' },
        change: '−72%'
      },
      {
        label: { es: 'Solicitudes sin incidencias', en: 'Issue-free requests' },
        value: '96%',
        before: '—',
        after:  '96%',
        change: '—'
      }
    ]
  },

  'caja-los-andes': {
    num: '04', preview: 4,
    coverImage: '../assets/projects/dsl-cla/cover-dls.png',
    recentProject: true, visibleProject: true,
    company: 'Caja Los Andes', initial: 'CA',
    year: '2023',
    title: {
      es: 'Design System Library',
      en: 'Design System Library'
    },
    category: {
      es: 'Design Systems',
      en: 'Design Systems'
    },
    heroTitle: {
      es: 'Design System Library para Caja Los Andes',
      en: 'Design System Library for Caja Los Andes'
    },
    client: 'Caja Los Andes',
    role: {
      es: 'Product Designer',
      en: 'Product Designer'
    },
    focus: {
      es: 'Sistema de Diseño · Componentes',
      en: 'Design System · Components'
    },
    platform: {
      es: 'Figma · Web',
      en: 'Figma · Web'
    },
    tags: {
      es: ['Design Systems', 'Accesibilidad', 'Product Design'],
      en: ['Design Systems', 'Accessibility', 'Product Design']
    },
    summary: {
      es: 'Diseño del sistema de diseño federado de Caja Los Andes, alineado con lineamientos de marca corporativa y normas WCAG. Permite a diseñadores y desarrolladores construir productos de forma rápida y consistente, con protocolos de contribución, soporte y mitigación de errores.',
      en: 'Design of Caja Los Andes’ federated design system, aligned with corporate brand guidelines and WCAG standards. It lets designers and developers build products quickly and consistently, with protocols for contribution, support and error mitigation.'
    },

    context: {
      es: 'Caja Los Andes es una caja de compensación de Chile, asociada a la Cámara Chilena de la Construcción. Es parte de la seguridad social de Chile y su función es mejorar la calidad de vida de los trabajadores mediante beneficios de salud, bienestar, turismo, recreación, además de realizar apoyos financieros mediante créditos sociales y entrega de asistencia y bonos.\nYa que Caja Los Andes es una institución que siempre está en la búsqueda de mejorar los beneficios a los afiliados, es necesario crear productos de forma rápida y moverse ágilmente de acuerdo a las contingencias nacionales. Por ello, se necesita crear un Sistema de Diseño que permita tanto a los diseñadores como a los desarrolladores crear de forma rápida productos y servicios de acuerdo a las necesidades del negocio.',
      en: 'Caja Los Andes is a Chilean compensation fund associated with the Chilean Chamber of Construction. It is part of Chile’s social security system and its role is to improve workers’ quality of life through health, wellbeing, tourism and recreation benefits, as well as financial support via social loans and the delivery of assistance and grants.\nBecause Caja Los Andes is an institution constantly looking to improve benefits for its members, it needs to build products quickly and move nimbly in response to national events. That is why it needed a Design System that lets both designers and developers rapidly create products and services aligned with business needs.'
    },

    challenge: {
      es: 'El Sistema de Diseño debía alinearse con los lineamientos de marca corporativa, pero además ser usable, accesible y fácil de utilizar para los diseñadores de la organización. Adicionalmente, requería ser federado para permitir que los diseñadores contribuyeran con nuevos componentes, además de establecer protocolos de soporte y mitigación de errores.\nPor ello, se estructuró conforme a los principios de Atomic Design y las normas de accesibilidad WCAG del W3C, garantizando escalabilidad y mantenibilidad colaborativa.',
      en: 'The Design System had to align with the corporate brand guidelines while also being usable, accessible and easy for the organization’s designers to work with. It also needed to be federated so designers could contribute new components, along with protocols for support and error mitigation.\nTo achieve this, it was structured around Atomic Design principles and the W3C’s WCAG accessibility standards, ensuring scalability and collaborative maintainability.'
    },
    challengeTitle: {
      es: 'Consistencia de marca, accesibilidad y colaboración federada',
      en: 'Brand consistency, accessibility and federated collaboration'
    },

    analysisTitle: {
      es: '¿Cómo analizamos el problema y qué factores se tomaron en consideración para tomar las decisiones?',
      en: 'How did we analyze the problem and which factors drove the decisions?'
    },
    analysis: {
      es: 'El proyecto involucraba tres actores con objetivos distintos: los **diseñadores** requerían herramientas ágiles para crear productos rápidamente, la **operación** buscaba mantener consistencia y control de calidad, y el **negocio** necesitaba escalar sin incrementar costos de mantenimiento. El análisis partió de equilibrar estas tensiones.\nLa decisión clave fue determinar si el Sistema de Diseño sería centralizado o **federado**, y qué nivel de autonomía tendrían los diseñadores para contribuir. Esta definición estructuró la arquitectura del sistema y la experiencia de los usuarios internos.\nPosteriormente evaluamos:\n1. Lineamientos de marca — Los estándares corporativos establecen límites visuales y experienciales, definiendo el alcance de variaciones permitidas en componentes.\n2. Accesibilidad — Se evaluaron escenarios de inclusión para garantizar que los componentes cumplieran con WCAG, estableciendo estándares mínimos y validaciones.\n3. Especificación de componentes — Propiedades, variantes y estados se definieron tras resolver restricciones de marca y accesibilidad.\n4. Gestión colaborativa — La estructura federada (protocolo de contribución, soporte y mitigación de errores) define cómo los diseñadores aportan al sistema.\n5. Arquitectura técnica — Alineación con Atomic Design y sistemas heredados para garantizar coherencia y escalabilidad.\nSe priorizó que los lineamientos de marca y la accesibilidad definiesen los límites del sistema antes de diseñar la experiencia de los diseñadores.',
      en: 'The project involved three actors with different goals: **designers** needed agile tools to build products quickly, **operations** wanted to keep consistency and quality control, and the **business** needed to scale without increasing maintenance costs. The analysis started from balancing these tensions.\nThe key decision was whether the Design System would be centralized or **federated**, and how much autonomy designers would have to contribute. That definition shaped the system’s architecture and the experience of its internal users.\nWe then assessed:\n1. Brand guidelines — Corporate standards set visual and experiential limits, defining the scope of permitted component variations.\n2. Accessibility — We assessed inclusion scenarios to ensure components met WCAG, setting minimum standards and validations.\n3. Component specification — Properties, variants and states were defined after resolving brand and accessibility constraints.\n4. Collaborative governance — The federated structure (contribution protocol, support and error mitigation) defines how designers contribute to the system.\n5. Technical architecture — Alignment with Atomic Design and legacy systems to ensure coherence and scalability.\nWe prioritized letting brand guidelines and accessibility define the system’s limits before designing the designers’ experience.'
    },

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=37-34153&embed-host=share" allowfullscreen'
    ],

    metrics: [
      {
        label: { es: 'Tiempo de maquetado por pantalla', en: 'Layout time per screen' },
        value: '−65%',
        before: { es: '~3 días', en: '~3 days' },
        after:  { es: '~1 día', en: '~1 day' },
        change: '−65%'
      },
      {
        label: { es: 'Componentes con WCAG AA', en: 'Components meeting WCAG AA' },
        value: '100%',
        before: '0%',
        after:  '100%',
        change: '+100pp'
      },
      {
        label: { es: 'Productos activos en el sistema', en: 'Products live on the system' },
        value: { es: '6 productos', en: '6 products' },
        before: '0',
        after:  '6',
        change: '—'
      },
      {
        label: { es: 'Inconsistencias de diseño eliminadas', en: 'Design inconsistencies removed' },
        value: '−80%',
        before: { es: '40+ issues', en: '40+ issues' },
        after:  { es: '<8 issues', en: '<8 issues' },
        change: '−80%'
      }
    ]
  },

  'monte-de-piedad': {
    num: '03', preview: 4,
    coverImage: '../assets/projects/wp-nmp/cover-nmp.png',
    recentProject: true, visibleProject: true,
    company: 'Nacional Monte de Piedad', initial: 'NM',
    year: '2021',
    title: {
      es: 'Sitio Web Privado',
      en: 'Private Web Platform'
    },
    category: {
      es: 'Fintech · Servicios Prendarios',
      en: 'Fintech · Pawn-loan Services'
    },
    heroTitle: {
      es: 'Plataforma digital de servicios prendarios',
      en: 'Digital platform for pawn-loan services'
    },
    client: 'Nacional Monte de Piedad',
    role: {
      es: 'Product Designer',
      en: 'Product Designer'
    },
    focus: {
      es: 'Plataforma de servicios · Backoffice',
      en: 'Services platform · Backoffice'
    },
    platform: {
      es: 'App Web · Móvil',
      en: 'Web App · Mobile'
    },
    tags: {
      es: ['Fintech', 'Servicios Financieros', 'Product Design'],
      en: ['Fintech', 'Financial Services', 'Product Design']
    },
    summary: {
      es: 'Diseño de la plataforma digital de Nacional Monte de Piedad que centraliza los servicios prendarios para sus más de 3 millones de usuarios en México. Permite pagos, consultas, reempeños y simulaciones sin necesidad de visitar una sucursal.',
      en: 'Design of Nacional Monte de Piedad’s digital platform, which centralizes pawn-loan services for its 3M+ users in Mexico. It enables payments, lookups, re-pawns and simulations without visiting a branch.'
    },

    context: {
      es: 'Nacional Monte de Piedad es una institución financiera mexicana especializada en préstamos prendarios. Ofrece créditos a cambio de artículos en garantía, siendo uno de los principales canales de financiamiento para millones de mexicanos. Antes de la pandemia, su operación era completamente manual y no estaba digitalizada. La crisis sanitaria aceleró la necesidad de transformar digitalmente sus procesos para brindar un servicio más completo a sus más de 3 millones de usuarios en toda la república.',
      en: 'Nacional Monte de Piedad is a Mexican financial institution specialized in pawn loans. It offers credit in exchange for pledged items and is one of the main financing channels for millions of Mexicans. Before the pandemic, its operation was entirely manual and undigitized. The health crisis accelerated the need to digitally transform its processes to deliver a more complete service to its 3M+ users across the country.'
    },

    challenge: {
      es: 'Nacional Monte de Piedad operaba de forma completamente manual y descentralizada. Sus usuarios debían visitar sucursales físicas para cada transacción: pagar prendas, consultar estados de empeños, reempeñar artículos o simular financiamientos. Esta fragmentación generaba fricción, limitaba el acceso y no escalaba con la demanda de sus 3 millones de usuarios.\nEl desafío fue centralizar la experiencia de servicios prendarios en una plataforma digital única que permitiera a los usuarios:\n1. Realizar pagos de prendas sin ir a sucursal\n2. Consultar el estado en tiempo real de sus empeños\n3. Reempeñar artículos de forma autónoma\n4. Simular nuevos empeños y opciones de financiamiento\n5. Descubrir y acceder a servicios adicionales\nPara lograrlo, fue necesario mapear y optimizar los procesos actuales de cada servicio, identificar ineficiencias y diseñar nuevos flujos digitales que tradujeran la complejidad operativa en experiencias intuitivas y accesibles.',
      en: 'Nacional Monte de Piedad operated in a fully manual and decentralized way. Users had to visit physical branches for every transaction: paying on pledges, checking loan statuses, re-pawning items or simulating financing. This fragmentation created friction, limited access and did not scale with the demand of its 3 million users.\nThe challenge was to centralize the pawn-loan experience in a single digital platform that let users:\n1. Pay on pledges without going to a branch\n2. Check the real-time status of their loans\n3. Re-pawn items on their own\n4. Simulate new loans and financing options\n5. Discover and access additional services\nTo achieve this, we had to map and optimize the existing processes for each service, identify inefficiencies and design new digital flows that translated operational complexity into intuitive, accessible experiences.'
    },
    challengeTitle: {
      es: 'Centralizar lo manual: de sucursal a plataforma digital',
      en: 'Centralizing the manual: from branch to digital platform'
    },

    analysisTitle: {
      es: '¿Cómo analizamos el problema y qué factores se tomaron en consideración para tomar las decisiones?',
      en: 'How did we analyze the problem and which factors drove the decisions?'
    },
    analysis: {
      es: 'El proyecto involucraba tres actores con objetivos distintos: los **usuarios** requerían acceso ágil a sus servicios, la **operación** buscaba digitalizar manteniendo control, y el **negocio** necesitaba escalar sin incrementar costos. El análisis partió de equilibrar estas tensiones.\nLa decisión clave fue determinar qué operaciones podían automatizarse completamente en la plataforma y cuáles requerían validación operativa. Esta definición estructuró la arquitectura técnica y la experiencia de usuario.\nPosteriormente evaluamos:\n1. Marco regulatorio — Las normativas financieras mexicanas establecen límites sobre qué operaciones pueden automatizarse, definiendo el alcance funcional de la plataforma.\n2. Gestión de riesgo — Se evaluaron escenarios de discrepancias en datos de prendas, pagos y reempeños para establecer validaciones, límites transaccionales y controles.\n3. Especificación de servicios — Montos, tiempos de procesamiento y procedimientos se definieron tras resolver restricciones legales y de riesgo.\n4. Gestión de estados — El ciclo de vida de cada operación (solicitud, procesamiento, completada, etc.) estructura tanto el backoffice como el historial del usuario.\n5. Integración técnica — Alineación con sistemas heredados y experiencia digital coherente en la plataforma.\nSe priorizó que la regulación y la gestión de riesgo definiesen los límites operativos antes de diseñar la experiencia de usuario.',
      en: 'The project involved three actors with different goals: **users** needed quick access to their services, **operations** wanted to digitize while keeping control, and the **business** needed to scale without increasing costs. The analysis started from balancing these tensions.\nThe key decision was determining which operations could be fully automated on the platform and which required operational validation. That definition shaped the technical architecture and the user experience.\nWe then assessed:\n1. Regulatory framework — Mexican financial regulations set limits on which operations can be automated, defining the platform’s functional scope.\n2. Risk management — We assessed scenarios of discrepancies in pledge data, payments and re-pawns to set validations, transactional limits and controls.\n3. Service specification — Amounts, processing times and procedures were defined after resolving legal and risk constraints.\n4. State management — The lifecycle of each operation (request, processing, completed, etc.) structures both the backoffice and the user’s history.\n5. Technical integration — Alignment with legacy systems and a coherent digital experience across the platform.\nWe prioritized letting regulation and risk management define the operational limits before designing the user experience.'
    },

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=27-15999&embed-host=share'
    ],

    metrics: [
      {
        label: { es: 'Tiempo de gestión por operación', en: 'Handling time per operation' },
        value: '−92%',
        before: { es: '~60 min', en: '~60 min' },
        after:  { es: '~5 min', en: '~5 min' },
        change: '−92%'
      },
      {
        label: { es: 'Servicios sin visita a sucursal', en: 'Services without a branch visit' },
        value: { es: '5 servicios', en: '5 services' },
        before: { es: '0 de 5', en: '0 of 5' },
        after:  { es: '5 de 5', en: '5 of 5' },
        change: '+100%'
      },
      {
        label: { es: 'Usuarios registrados (6 meses)', en: 'Registered users (6 months)' },
        value: '+1.1M',
        before: '0',
        after:  '1.1M',
        change: '—'
      },
      {
        label: { es: 'Demanda presencial reducida', en: 'In-person demand reduced' },
        value: '−38%',
        before: { es: '100% presencial', en: '100% in-person' },
        after:  { es: '62% presencial', en: '62% in-person' },
        change: '−38%'
      }
    ]
  },

  'betterfly-onboarding': {
    num: '01', preview: 4,
    coverImage: '../assets/projects/betterfly-onboarding/cover-betterfly.png',
    recentProject: true, visibleProject: true,
    company: 'Betterfly', initial: 'Bt',
    year: '2021',
    title: {
      es: 'Onboarding / Enrolamiento',
      en: 'Onboarding / Enrollment'
    },
    category: {
      es: 'Insurtech',
      en: 'Insurtech'
    },
    heroTitle: {
      es: 'Rediseño del enrolamiento',
      en: 'Enrollment redesign'
    },
    client: 'Betterfly',
    role: {
      es: 'Product Designer',
      en: 'Product Designer'
    },
    focus: {
      es: 'Flujo de enrolamiento',
      en: 'Enrollment flow'
    },
    platform: {
      es: 'Web · Móvil',
      en: 'Web · Mobile'
    },
    tags: {
      es: ['Insurtech', 'Móvil', 'UX Research'],
      en: ['Insurtech', 'Mobile', 'UX Research']
    },
    summary: {
      es: 'Optimización del flujo de enrolamiento en Betterfly, reduciendo el abandono de 65% a 10% y el tiempo de completado de 12 a 5 minutos mediante simplificación del proceso y mejora en la comunicación del producto.',
      en: 'Optimization of Betterfly’s enrollment flow, cutting drop-off from 65% to 10% and completion time from 12 to 5 minutes by simplifying the process and improving how the product is communicated.'
    },

    context: {
      es: 'Betterfly es una plataforma insurtech que ofrece beneficios de bienestar y seguros de vida a colaboradores a través de sus empleadores. Como Product Designer, lideré el rediseño del flujo de enrolamiento —el primer punto de contacto de cada usuario con el producto— para reducir tasas de abandono e incrementar la comprensión de los beneficios contratados. El desafío fue optimizar el proceso de creación de cuenta y la presentación de servicios para facilitar la adopción de nuevos usuarios y mejorar su experiencia inicial.',
      en: 'Betterfly is an insurtech platform offering wellbeing benefits and life insurance to employees through their employers. As Product Designer, I led the redesign of the enrollment flow —every user’s first touchpoint with the product— to reduce drop-off rates and increase understanding of the contracted benefits. The challenge was to optimize account creation and the way services are presented to ease adoption for new users and improve their initial experience.'
    },

    challenge: {
      es: 'Desarrollar un proceso de registro de usuario que sea inclusivo con usuarios de diferentes nacionalidades y países, permita que comprendan claramente los servicios que su empleador ofrece a través de Betterfly, y sea escalable para adaptarse a futuras expansiones en nuevos mercados y tipos de documentos de identidad.',
      en: 'Build a user sign-up process that is inclusive of users from different nationalities and countries, lets them clearly understand the services their employer offers through Betterfly, and is scalable to adapt to future expansion into new markets and ID document types.'
    },
    challengeTitle: {
      es: 'Un registro inclusivo, claro y escalable',
      en: 'An inclusive, clear and scalable sign-up'
    },

    analysisTitle: {
      es: '¿Cómo analizamos el problema y qué factores consideramos?',
      en: 'How did we analyze the problem and which factors did we consider?'
    },
    analysis: {
      es: 'Realizar una investigación de los países objetivo para la expansión y desarrollar un sistema escalable que integre múltiples tipos de identificación ciudadana, se alinee con los servicios locales y cumpla con normativas internacionales y regulaciones locales.\nComo paso previo, analizar los flujos de usuario en producción para identificar puntos críticos donde ocurren abandonos y fricción en el proceso de registro, determinando las causas de deserción de usuarios.',
      en: 'Research the target countries for expansion and build a scalable system that supports multiple types of citizen ID, aligns with local services and complies with international and local regulations.\nAs a first step, analyze the live user flows to pinpoint the critical points where drop-off and friction occur in the sign-up process, identifying the causes of user churn.'
    },

    embeds: [
      'https://embed.figma.com/design/ZuAdzH4NYtO1B24RbePyO7/Portafolio-Docs?node-id=0-1&embed-host=share'
    ],

    metrics: [
      {
        label: { es: 'Tasa de finalización', en: 'Completion rate' },
        value: '+43pp',
        before: '35%',
        after:  '78%',
        change: '+43%'
      },
      {
        label: { es: 'Abandono del flujo', en: 'Flow drop-off' },
        value: '−55pp',
        before: '65%',
        after:  '10%',
        change: '−85%'
      },
      {
        label: { es: 'Tiempo de enrolamiento', en: 'Enrollment time' },
        value: '−58%',
        before: { es: '12 min', en: '12 min' },
        after:  { es: '5 min', en: '5 min' },
        change: '−58%'
      },
      {
        label: { es: 'Comprensión del producto', en: 'Product understanding' },
        value: '+40pp',
        before: '45%',
        after:  '85%',
        change: '+40%'
      }
    ]
  },

};

/* Lista ordenada de slugs para navegación "siguiente proyecto". */
window.PROJECT_ORDER = Object.keys(window.PROJECTS);
