export default {
  global: {
    componenteFormativo:
      'Cableado estructurado: implementación y gestión de riesgos',
    descripcionCurso:
      'Este componente presenta una variedad de tópicos acerca del cableado estructurado desde su definición, implementación, particularidades de sus componentes hasta las certificaciones ambientales. Examina diferentes tipos de cables haciendo una explicación de las características y calidad, asimismo generalidades de otros componentes junto con la importancia de una adecuada implementación y mitigación de riesgos a la luz de varias organizaciones internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Implementación del Cableado Estructurado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y componentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Planificación y diseño',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Selección de los componentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instalación de pruebas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de riesgos en el cableado estructurado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de riesgos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de impacto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Evaluación de riesgos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Mitigación de riesgos y plan de contingencia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad en instalaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa de seguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Directrices sobre el uso de equipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguridad eléctrica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Protección contra incendios',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Organizaciones y estándares',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Cumplimiento y auditorías',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gestión de residuos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Impacto ambiental',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Certificaciones ambientales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Registros de seguridad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Auditorías y mejora continua',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Conclusiones',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es el cableado estructurado?',
      referencia: 'Novusred. (2023b, septiembre 15).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=laWefp80lz4',
    },
  ],
  glosario: [
    {
      termino: 'Atenuación',
      significado:
        'Pérdida de potencia de una señal a medida que se propaga a lo largo de un cable. Se mide en decibelios (dB).',
    },
    {
      termino: 'Cableado estructurado',
      significado:
        'Sistema de cableado organizado y sistemático que facilita la gestión y el mantenimiento de la red. Proporciona una base sólida para la conectividad y la comunicación en redes modernas.',
    },
    {
      termino: 'Conector',
      significado:
        'Dispositivo utilizado para conectar cables y equipos de red. Los conectores más comunes en el cableado estructurado son RJ-45 para cables de par trenzado y LC, SC, ST para cables de fibra óptica.',
    },
    {
      termino: 'Diafonía',
      significado:
        'Interferencia que ocurre cuando una señal en un par de cables induce una señal no deseada en otro par de cables adyacente. Se mide en decibelios (dB).',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'Proceso de identificar, evaluar y mitigar posibles riesgos que puedan afectar la integridad y el rendimiento de la red.',
    },
    {
      termino: 'Impedancia',
      significado:
        'Parámetro fundamental que afecta la calidad de la señal y la eficiencia de la transmisión de datos.',
    },
    {
      termino: 'Par trenzado',
      significado:
        'Tipo de cable que contiene pares de cables trenzados entre sí para reducir la interferencia electromagnética. Los cables de par trenzado son ampliamente utilizados en redes de datos.',
    },
    {
      termino: '<em>Patch Panel</em>',
      significado:
        'Panel de conexión utilizado para organizar y gestionar las conexiones de cableado en una red. Facilita la administración y el mantenimiento del cableado estructurado.',
    },
    {
      termino: 'Planificación del cableado',
      significado:
        'Proceso de diseñar y organizar la infraestructura de cableado de manera eficiente y escalable. Incluye la selección de materiales, la topología de la red y la ubicación de los equipos de red.',
    },
    {
      termino: 'Pruebas de cableado',
      significado:
        'Proceso de evaluar el rendimiento y la calidad del cableado mediante la medición de parámetros como la atenuación, la pérdida de retorno y la diafonía.',
    },
    {
      termino: 'Pérdida de retorno',
      significado:
        'Medida de la cantidad de señal que se refleja de vuelta hacia la fuente debido a desajustes de impedancia en el cable. Se mide en decibelios (dB).',
    },
    {
      termino: '<em>Rack</em>',
      significado:
        'Estructura metálica utilizada para montar y organizar equipos de red y patch panels. Facilita la gestión y el mantenimiento del cableado estructurado.',
    },
    {
      termino: 'TIA/EIA-568',
      significado:
        'Estándar de cableado estructurado que define las especificaciones y prácticas recomendadas para la instalación de cables de red.',
    },
    {
      termino: 'Topología de la red',
      significado:
        'Arquitectura de una red que describe cómo están conectados los dispositivos y los cables.',
    },
    {
      termino: '<em>UTP (Unshielded Twisted Pair)</em>',
      significado:
        'Tipo de cable de par trenzado sin apantallamiento. Es el tipo de cable más comúnmente utilizado en redes de datos debido a su bajo costo y facilidad de instalación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Davis, R. (2021, marzo 15). Understanding Structured Cabling. <em>Networking Solutions</em>.',
      link: '',
    },
    {
      referencia:
        'Horak, J. (2018). <em>Structured Cabling: Designing and Installing Standard-Based Cabling Systems</em>. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2017). <em>ISO/IEC 11801:2017 - Information technology - Generic cabling for customer premises</em>. ISO.',
      link: '',
    },
    {
      referencia:
        'Smith, J. (2020). <em>Network Cabling: Design and Implementation</em>. McGraw-Hill Education.',
      link: '',
    },
  ],
}
