export default {
  global: {
    componenteFormativo:
      'Plan de acción en salud ambiental y seguridad sanitaria',
    descripcionCurso:
      'El componente aborda la planificación y ejecución de acciones en salud ambiental y seguridad sanitaria, integrando la estructura del sistema de salud pública, la promoción de entornos saludables y el diseño de planes de acción. Su propósito es fortalecer capacidades locales y garantizar la protección de la salud colectiva frente a riesgos ambientales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Estructura y capacidades del sistema de salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Organización del sistema de salud pública',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Capacidades locales en salud pública',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Articulación institucional en salud pública',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normatividad aplicable a la salud pública',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias para la promoción de la salud ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño de estrategias educativas comunitarias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Organización de campañas de salud ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Coordinación de acciones intersectoriales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Aplicación normativa en la promoción de entornos saludables',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño del plan de acción en salud ambiental y sanitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de objetivos y metas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Identificación de actividades de manejo del riesgo ambiental',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Asignación de responsables y recursos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Elaboración del cronograma y estrategia de seguimiento',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Integración del plan según valoración de riesgos, capacidades locales y normativa',
            hash: 't_3_5',
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: '1. Estructura y capacidades del sistema de salud pública',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Enfermedades de interés en salud publica [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=171QM9JjtXA',
    },
    {
      tema: '2.2. Organización de campañas de salud ambiental',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Coordinar campaña ambiental según normativa vigente [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NQL-u3FAp3w',
    },
    {
      tema: '3. Diseño del plan de acción en salud ambiental y sanitaria',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Plan de acción [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eFJOKJMVsQs',
    },
  ],
  glosario: [
    {
      termino: 'Articulación institucional',
      significado:
        'coordinación entre diferentes entidades y sectores para optimizar recursos, evitar duplicidades y fortalecer la capacidad de respuesta en salud pública y ambiental.',
    },
    {
      termino: 'Capacidades locales',
      significado:
        'conjunto de recursos humanos, técnicos, financieros y logísticos disponibles en un territorio para responder eficazmente a necesidades y riesgos en salud pública.',
    },
    {
      termino: 'Cronograma',
      significado:
        'herramienta de planificación que organiza las actividades de un plan de acción en el tiempo, indicando fechas, responsables y recursos necesarios.',
    },
    {
      termino: 'Determinantes sociales de la salud',
      significado:
        'factores sociales, económicos y ambientales que influyen en la salud de la población y sus desigualdades.',
    },
    {
      termino: 'Educación ambiental',
      significado:
        'proceso educativo participativo que busca sensibilizar, formar y movilizar a la comunidad para la protección del ambiente y la prevención de riesgos sanitarios.',
    },
    {
      termino: 'Intersectorialidad',
      significado:
        'proceso educativo participativo que busca sensibilizar, formar y movilizar a la comunidad para la protección del ambiente y la prevención de riesgos sanitarios.',
    },
    {
      termino: 'Meta',
      significado:
        'resultado concreto y medible que se espera alcanzar dentro de un periodo determinado, derivado de los objetivos de un plan de acción.',
    },
    {
      termino: 'Objetivo',
      significado:
        'propósito general que orienta las acciones de un plan de salud ambiental y sanitaria, describiendo lo que se espera lograr.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'inclusión activa de la comunidad en la identificación de problemas, planificación y ejecución de acciones para mejorar la salud y el entorno.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'documento que organiza objetivos, actividades, responsables, recursos y cronogramas para abordar problemas de salud ambiental y sanitaria.',
    },
    {
      termino: 'Riesgo ambiental',
      significado:
        'posibilidad de que factores del entorno, como contaminación o vectores, generen efectos adversos en la salud de la población.',
    },
    {
      termino: 'Salud ambiental',
      significado:
        'disciplina que estudia y gestiona los factores del entorno que afectan la salud humana, promoviendo entornos saludables y sostenibles.',
    },
    {
      termino: 'Seguridad sanitaria',
      significado:
        'conjunto de acciones y medidas para prevenir, controlar y mitigar riesgos que afecten la salud de la población.',
    },
    {
      termino: 'Sistema Nacional Ambiental (SINA)',
      significado:
        'conjunto de instituciones, normas y mecanismos en Colombia para la gestión, protección y control del ambiente.',
    },
    {
      termino: 'Vigilancia epidemiológica',
      significado:
        'proceso sistemático de recolección, análisis e interpretación de información sobre la salud de la población para la toma de decisiones.',
    },
  ],
  referencias: [
    {
      referencia:
        'ANLA. (2019). Informe de gestión ambiental por contingencia de hidrocarburos en Barrancabermeja. Autoridad Nacional de Licencias Ambientales.',
      link: 'Link_referencias',
    },
    {
      referencia:
        'Función Pública. (1991). Constitución Política de Colombia 1991.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia: 'Función Pública. (2001). Ley 715 de 2001.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4452',
    },
    {
      referencia: 'Función Pública. (2011). Ley 1438 de 2011.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41355#:~:text=Es%20obligaci%C3%B3n%20de%20la%20familia,su%20desarrollo%20arm%C3%B3nico%20e%20integral',
    },
    {
      referencia:
        'Función Pública. (2016). Decreto 780 de 2016 Sector Salud y Protección Social.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
    {
      referencia:
        'Instituto Nacional de Salud - INS. (2023). Boletín Epidemiológico Semanal. Ministerio de Salud y Protección Social.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 1229 de 2013: Requisitos técnicos y sanitarios para actividades de inspección, vigilancia y control sanitario.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución%201229%20de%202013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Fortalecimiento de las capacidades territoriales en salud pública.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Fortalecimiento de la gestión intersectorial en salud pública',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Hogares sin mosquito, familias sin dengue.',
      link:
        'https://www.minsalud.gov.co/Paginas/Hogares-sin-mosquito-familias-sin-dengue.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Lineamientos para la implementación de Mesas Territoriales de Salud Ambiental.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Informe de gestión 2023.',
      link:
        'https://www.minsalud.gov.co/Ministerio/RCuentas/Documents/Informe-de-gestion-290124.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Informe nacional de articulación institucional en salud pública.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Plan Decenal Salud Pública 2022-2031',
      link:
        'https://www.minsalud.gov.co/plandecenal/Paginas/PDSP-2022-2031.aspx',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2021). Plan Departamental de Agua y Saneamiento.',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2024). Basura cero.',
      link: 'https://www.minvivienda.gov.co/basura-cero',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2023). La coordinación intersectorial como pilar de la salud pública.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2024). Capacidades esenciales en los sistemas de salud de las Américas.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (s. f.). Semana de sensibilización sobre el mosquito. En Wikipedia',
      link:
        'https://es.wikipedia.org/wiki/Semana_de_Sensibilizaci%C3%B3n_sobre_el_Mosquito',
    },
    {
      referencia:
        'República de Colombia. Congreso de la República. (1979). Ley 9 de 1979: Código Sanitario Nacional.',
    },
    {
      referencia:
        'República de Colombia. Congreso de la República. (1993). Ley 99 de 1993: Por la cual se crea el Ministerio del Medio Ambiente y se organiza el Sistema Nacional Ambiental.',
    },
    {
      referencia:
        'República de Colombia. Congreso de la República. (2015). Ley Estatutaria 1751 de 2015: Derecho fundamental a la salud.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
