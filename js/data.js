/* ==========================================================================
   ZIAN PRODUCTIONS — CENTRAL DATA STORE
   Services, Portfolio, Team, Clients, Equipment, Process, Testimonials
   ========================================================================== */

const ZIAN_DATA = {
  // ─── Estadísticas de Impacto ───
  stats: [
    { value: 50, prefix: '+', label: 'Proyectos Realizados' },
    { value: 30, prefix: '+', label: 'Marcas & Clientes' },
    { value: 5,  prefix: '+', label: 'Años de Trayectoria' },
    { value: 5,  prefix: '',  label: 'Especialistas Creativos' }
  ],

  // ─── 8 Servicios Principales ───
  services: [
    {
      id: 'fotografia',
      number: '01',
      title: 'Fotografía',
      description: 'Captura visual de alto impacto para productos, moda, hotelería, gastronomía y retratos corporativos.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
      features: ['Foto Producto', 'Gastronomía', 'Hotelería', 'Automotriz', 'Lookbooks'],
      featured: true
    },
    {
      id: 'video',
      number: '02',
      title: 'Producción Audiovisual / Video',
      description: 'Filmación cinematográfica, reels publicitarios, cobertura de eventos y videos institucionales de alta definición.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="0" ry="0"></rect></svg>`,
      features: ['Reels & TikTok', 'Comerciales', 'Video Cobertura', 'Drone 4K', 'Postproducción'],
      featured: true
    },
    {
      id: 'diseno',
      number: '03',
      title: 'Diseño Gráfico',
      description: 'Identidad visual completa, logotipos vectoriales, diseño editorial y material publicitario con estilo Swiss.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
      features: ['Branding Integral', 'Logotipos', 'Manual de Marca', 'Editorial', 'Packaging'],
      featured: false
    },
    {
      id: 'marketing',
      number: '04',
      title: 'Marketing & Gestión de Contenido',
      description: 'Planificación estratégica mensual, copywriting persuasivo y gestión integral de comunidades digitales.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="0" ry="0"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
      features: ['Estrategia Digital', 'Calendario Mensual', 'Gestión de Redes', 'Storytelling'],
      featured: false
    },
    {
      id: 'publicidad',
      number: '05',
      title: 'Publicidad',
      description: 'Campañas visuales enfocadas en conversión y posicionamiento de marca en canales digitales y tradicionales.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
      features: ['Ads Multicanal', 'Campañas Creativas', 'Segmentación', 'Métricas'],
      featured: false
    },
    {
      id: 'web',
      number: '06',
      title: 'Diseño & Desarrollo Web',
      description: 'Sitios web de alto rendimiento, portfolios de vanguardia, microinteracciones fluidas y experiencia moderna.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      features: ['Single Page Apps', 'WebGL / 3D', 'Responsive Mobile-first', 'SEO Avanzado'],
      featured: false
    },
    {
      id: 'animacion',
      number: '07',
      title: 'Animación / Motion Graphics',
      description: 'Logos animados, tipografía cinética y piezas dinámicas que atrapan la atención en los primeros 3 segundos.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      features: ['Motion Branding', 'Intros & Outros', 'Kinetic Typography', 'Social Motion'],
      featured: false
    },
    {
      id: 'ilustracion',
      number: '08',
      title: 'Ilustración',
      description: 'Arte conceptual digital y elementos ilustrados personalizados para diferenciar tu marca de la competencia.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
      features: ['Ilustración Vectorial', 'Iconografía Custom', 'Gráficos de Campaña'],
      featured: false
    }
  ],

  // ─── Portfolio de Proyectos Reales ───
  projects: [
    {
      id: 'vehiculos-akar',
      title: 'Campaña Automotriz Akar Chevrolet & Off-Road',
      category: 'fotografia',
      categoryLabel: 'Fotografía & Publicidad',
      client: 'Akar Chevrolet / Motos del Sur',
      image: 'assets/images/portfolio/vehiculo-1.jpg',
      span: 'wide',
      year: '2026',
      description: 'Producción fotográfica exterior en Patagonia para pickups, vehículos 4x4 y motocicletas de alta gama. Iluminación natural dinámica y postproducción de color grading cinemático.',
      gallery: [
        'assets/images/portfolio/vehiculo-1.jpg',
        'assets/images/portfolio/vehiculo-2.jpg',
        'assets/images/portfolio/vehiculo-3.jpg',
        'assets/images/portfolio/vehiculo-4.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'gastro-experience',
      title: 'Food Styling & Experiencia Gastronómica',
      category: 'fotografia',
      categoryLabel: 'Foto Gastronómica',
      client: 'Don Cipriano / Locales Gastronómicos',
      image: 'assets/images/portfolio/gastro-1.jpg',
      span: 'narrow',
      year: '2026',
      description: 'Fotografía culinaria de precisión, capturando texturas, temperatura y frescura. Diseñado para cartas digitales, campañas de delivery y feed de Instagram.',
      gallery: [
        'assets/images/portfolio/gastro-1.jpg',
        'assets/images/portfolio/gastro-2.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'hotel-ventia-spaces',
      title: 'Arquitectura & Hospitalidad Hotel Ventia',
      category: 'fotografia',
      categoryLabel: 'Hotelería & Espacios',
      client: 'Ventia Hotel',
      image: 'assets/images/portfolio/hotel-1.jpg',
      span: 'standard',
      year: '2026',
      description: 'Cobertura fotográfica de interiores, suites, vistas patagónicas y amenities del hotel para catálogos y plataformas de reserva internacional.',
      gallery: [
        'assets/images/portfolio/hotel-1.jpg',
        'assets/images/portfolio/hotel-2.jpg',
        'assets/images/portfolio/hotel-3.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'fashion-lookbook',
      title: 'Lookbook & Campaña de Indumentaria Urbana',
      category: 'fotografia',
      categoryLabel: 'Moda & Estilismo',
      client: 'Marcas de Indumentaria Patagonia',
      image: 'assets/images/portfolio/fashion-1.jpg',
      span: 'standard',
      year: '2026',
      description: 'Sesión editorial de moda urbana con modelos en locación. Tratamiento visual con estética contemporánea y contraste marcado.',
      gallery: [
        'assets/images/portfolio/fashion-1.jpg',
        'assets/images/portfolio/fashion-2.jpg',
        'assets/images/portfolio/fashion-3.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'branding-systems',
      title: 'Sistemas de Identidad de Marca & Logotipos',
      category: 'diseno',
      categoryLabel: 'Diseño Gráfico',
      client: 'Barbería Chuko, Phoenix & Docwell',
      image: 'assets/images/portfolio/HORIZONTAL PRINCIPAL RF MECANICA INTEGRAL.jpg',
      span: 'narrow',
      year: '2025 - 2026',
      description: 'Desarrollo de logotipos vectoriales, tipografías personalizadas y paletas de color con manual normativo para empresas de servicios y retail.',
      gallery: [
        'assets/images/portfolio/HORIZONTAL PRINCIPAL RF MECANICA INTEGRAL.jpg',
        'assets/images/portfolio/LOGO VC FB - RGB.jpg',
        'assets/images/portfolio/PEZ lgo.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'makeup-editorial',
      title: 'Macro Editorial Beauty & Make Up',
      category: 'fotografia',
      categoryLabel: 'Belleza & Macro',
      client: 'Andrea Mutura Make Up',
      image: 'assets/images/portfolio/makeup-1.jpg',
      span: 'standard',
      year: '2026',
      description: 'Iluminación de estudio para fotografía beauty con enfoque en el detalle técnico del maquillaje y acabado de piel perfecto.',
      gallery: [
        'assets/images/portfolio/makeup-1.jpg',
        'assets/images/portfolio/makeup-2.jpg',
        'assets/images/portfolio/makeup-3.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'product-commercial',
      title: 'Fotografía de Producto & E-Commerce',
      category: 'fotografia',
      categoryLabel: 'Foto Producto',
      client: 'Rada Suplementos / Retail',
      image: 'assets/images/portfolio/producto-1.jpg',
      span: 'standard',
      year: '2026',
      description: 'Bodegón comercial para productos sobre fondo blanco y contextuales con iluminación calibrada para venta online y catálogo.',
      gallery: [
        'assets/images/portfolio/producto-1.jpg',
        'assets/images/portfolio/producto-2.jpg',
        'assets/images/portfolio/producto-3.jpg'
      ],
      teamLead: 'Luciano San Martin'
    },
    {
      id: 'video-editing-hub',
      title: 'Postproducción & Montaje Audiovisual de Reels',
      category: 'video',
      categoryLabel: 'Video & Edición',
      client: 'Clientes Zian Productions',
      image: 'assets/images/portfolio/vehiculo-3.jpg',
      span: 'wide',
      year: '2026',
      description: 'Edición dinámica de video, sound design inmersivo, corrección de color y subtitulado animado para campañas virales en TikTok e Instagram Reels.',
      gallery: [
        'assets/images/portfolio/vehiculo-3.jpg',
        'assets/images/portfolio/vehiculo-4.jpg'
      ],
      teamLead: 'Juan Pablo Guzman Perea & Matias Gamboa'
    }
  ],

  // ─── Proyectos Destacados (Grandes) ───
  featuredProjects: [
    {
      id: 'feat-1',
      title: 'Akar Chevrolet — Patagonia Cinematic Drive',
      client: 'Akar Chevrolet',
      category: 'Producción Audiovisual & Foto',
      image: 'assets/images/portfolio/vehiculo-2.jpg',
      description: 'Producción integral de contenido audiovisual y fotográfico recorriendo rutas de la Patagonia, mostrando la potencia y diseño de la flota en condiciones reales.'
    },
    {
      id: 'feat-2',
      title: 'Branding & Identidad Integral Zian',
      client: 'Zian Productions Brand System',
      category: 'Diseño Gráfico & Web',
      image: 'assets/images/logo/LOGO ZIAN FN.jpg',
      description: 'Construcción del lenguaje visual corporativo de Zian Productions: tipografía suiza, geometría editorial, paleta cian y presencia técnica inconfundible.'
    }
  ],

  // ─── Equipo Zian Productions ───
  team: [
    {
      id: 'luciano',
      name: 'Luciano San Martin',
      role: 'Fundador & Director Creativo',
      photo: 'assets/images/team/luciano.jpg',
      specialties: ['Dirección General', 'Fotografía', 'Desarrollo de Proyectos', 'Visión Creativa'],
      bio: 'Responsable de la dirección general, la relación con clientes, el desarrollo de proyectos y la visión creativa de Zian Productions. Lidera cada producción cuidando la excelencia técnica y el mensaje de cada marca.'
    },
    {
      id: 'annie',
      name: 'Annie Floody',
      role: 'Estratega de Marketing',
      photo: 'assets/images/team/annie.jpg',
      specialties: ['Estrategia Digital', 'Planificación Mensual', 'Análisis de Marca', 'Storytelling'],
      bio: 'Analiza las marcas, planifica el contenido mensual, desarrolla estrategias orientadas a resultados y propone ideas creativas personalizadas para cada cliente.'
    },
    {
      id: 'juanpablo',
      name: 'Juan Pablo Guzman Perea',
      role: 'Editor Audiovisual',
      photo: 'assets/images/team/juanpablo.jpg',
      specialties: ['Edición de Video', 'Postproducción', 'Color Grading', 'Sound Design'],
      bio: 'Responsable de la edición y postproducción audiovisual, cuidando cada detalle de ritmo, sonido y color para lograr piezas de calidad internacional.'
    },
    {
      id: 'matias',
      name: 'Matias Gamboa',
      role: 'Editor Audiovisual',
      photo: 'assets/images/team/matias.jpg',
      specialties: ['Edición Dinámica', 'Montaje Publicitario', 'Motion Graphics', 'Reels / TikTok'],
      bio: 'Especialista en postproducción audiovisual y formatos rápidos de alto impacto, combinando precisión técnica con ritmo contemporáneo.'
    }
  ],

  // ─── Clientes Reales & Marcas Asociadas ───
  clients: [
    { name: 'Akar Chevrolet', logo: 'assets/images/clients/Akar.png' },
    { name: 'Barbería Chuko', logo: 'assets/images/clients/BARBERIA CHUKO.png', darkBg: true },
    { name: 'Docwell', logo: 'assets/images/clients/DOCWELL.jpg' },
    { name: 'Don Cipriano', logo: 'assets/images/clients/DON CIPRIANO.png' },
    { name: 'Al Límite', logo: 'assets/images/clients/AL LIMITE.png' },
    { name: 'Foto Express', logo: 'assets/images/clients/FOTO EXPRESS.png' },
    { name: 'Ventia Hotel', logo: 'assets/images/clients/VENTIA HOTEL.png' },
    { name: 'Motos Oficiales del Sur', logo: 'assets/images/clients/MOTOS OFICIALES DEL SUR.jpg' },
    { name: 'Panificadora Don Carlos', logo: 'assets/images/clients/PANIFICADORA DON CARLOS.png' },
    { name: 'Phoenix', logo: 'assets/images/clients/PHOENIX.PNG' },
    { name: 'Rada Suplementos', logo: 'assets/images/clients/RADA SUPLEMENTOS.png' },
    { name: 'Tu Hogar Patagonia', logo: 'assets/images/clients/TU HOGAR PATAGONIA.jpg' },
    { name: 'La Salita', logo: 'assets/images/clients/LOGO SALITA.png' },
    { name: 'Gigante Megadisco', logo: 'assets/images/clients/GIGANTE MEGADISCO.png', darkBg: true },
    { name: 'Vector Brand', logo: 'assets/images/clients/FORMA LOGO VECTORIZADO.png' }
  ],

  // ─── Cómo Trabajamos (6 Pasos) ───
  process: [
    {
      step: '01',
      title: 'Nos contactás',
      description: 'Conversamos sobre tu marca, tus objetivos y el tipo de contenido que necesitás.'
    },
    {
      step: '02',
      title: 'Diagnóstico & Análisis',
      description: 'Estudiamos tu identidad, competencia y definimos el tono visual ideal.'
    },
    {
      step: '03',
      title: 'Propuesta Personalizada',
      description: 'Diseñamos un plan de rodaje o desarrollo a medida con presupuesto claro.'
    },
    {
      step: '04',
      title: 'Producción & Rodaje',
      description: 'Llevamos adelante las sesiones de fotos, filmaciones o diseño con equipamiento profesional.'
    },
    {
      step: '05',
      title: 'Postproducción & Entrega',
      description: 'Edición cuidada al píxel, retoque y entrega de archivos en formatos optimizados.'
    },
    {
      step: '06',
      title: 'Seguimiento & Métricas',
      description: 'Evaluamos el rendimiento del contenido y planificamos los siguientes pasos.'
    }
  ],

  // ─── Equipamiento Profesional ───
  equipment: [
    {
      title: 'Cámaras & Sensores',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
      items: ['Canon Mirrorless Full Frame', 'Sony Alpha 7 Series', 'Sensores de alta resolución 45MP+']
    },
    {
      title: 'Ópticas & Lentes',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line></svg>`,
      items: ['24-70mm f/2.8 Pro Series', '70-200mm f/2.8 Telephoto', '50mm & 85mm f/1.4 Prime']
    },
    {
      title: 'Drones & Vuelo Aéreo',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="m5 5 4 4"></path><path d="m19 5-4 4"></path><path d="m5 19 4-4"></path><path d="m19 19-4-4"></path><circle cx="4" cy="4" r="2.5"></circle><circle cx="20" cy="4" r="2.5"></circle><circle cx="4" cy="20" r="2.5"></circle><circle cx="20" cy="20" r="2.5"></circle></svg>`,
      items: ['DJI Drones 4K HDR', 'Estabilizadores Gimbal Ronin', 'Filmación en 60fps / 120fps']
    },
    {
      title: 'Iluminación & Estudio',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><circle cx="12" cy="12" r="5"></circle></svg>`,
      items: ['Paneles LED Bicolor de alta potencia', 'Softboxes & Difusores octogonales', 'Flashes de estudio inalámbricos']
    },
    {
      title: 'Audio Profesional',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
      items: ['Micrófonos Corbateros Inalámbricos Rode', 'Micrófonos Boom Sennheiser', 'Grabadoras de campo multipista']
    },
    {
      title: 'Software & Postproducción',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      items: ['DaVinci Resolve Studio (Color Grading)', 'Adobe Premiere Pro & After Effects', 'Lightroom Classic & Photoshop']
    }
  ],

  // ─── Testimonios de Clientes ───
  testimonials: [
    {
      quote: 'El nivel de detalle y profesionalismo en cada toma de los vehículos superó lo que veníamos haciendo. El feedback del público en redes aumentó de inmediato.',
      author: 'Gerencia Comercial',
      company: 'Akar Chevrolet'
    },
    {
      quote: 'Zian Productions entendió la esencia de nuestra marca desde el primer minuto. Las fotos de las hamburguesas y platos transmiten exactamente la calidad que servimos.',
      author: 'Dirección Gastronómica',
      company: 'Don Cipriano'
    },
    {
      quote: 'Poder delegar tanto la estrategia como la filmación y edición en un solo equipo nos dio tranquilidad y una consistencia visual que no teníamos antes.',
      author: 'Equipo de Marketing',
      company: 'Ventia Hotel'
    },
    {
      quote: 'La rapidez y la calidad cinematográfica con la que editan los reels hace que nuestras campañas tengan un rendimiento muy por encima de la media.',
      author: 'Fundador',
      company: 'Rada Suplementos'
    }
  ]
};
