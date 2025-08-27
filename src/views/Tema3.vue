<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Diseño del plan de acción en salud ambiental y sanitaria

    .row.justify-content-center.mb-0
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p El plan de acción en salud ambiental y sanitaria es una herramienta estratégica que orienta las intervenciones para prevenir, mitigar o eliminar los riesgos que afectan la salud de la población y el equilibrio del entorno. Su diseño debe basarse en diagnósticos participativos, evidencias científicas y en el marco normativo vigente, garantizando que las acciones sean coherentes, viables y sostenibles.
        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 Este plan no solo establece qué se va a hacer, sino también cómo, quién lo hará, con qué recursos y en qué tiempos, asegurando un seguimiento constante para evaluar resultados y realizar los ajustes necesarios.
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img-01.png' alt="Imagen decorativa")

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Definición de objetivos y metas

    .row.align-items-center.mb-5.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema3/img-03.png', alt='').m-auto
      .col-xl
        .col-1.d-none.d-lg-block.mb-3
          figure
            img(src='@/assets/curso/temas/tema3/img-04.svg' alt="Imagen decorativa")
        p.mb-0 La definición de objetivos y metas es el punto de partida para la construcción de un plan de acción en salud ambiental y sanitaria. Esta etapa orienta todas las decisiones posteriores, ya que establece qué se quiere lograr y en qué plazo.
    
    p.mb-4(data-aos="fade-right") Los objetivos representan el propósito general del plan y deben ser coherentes con las prioridades identificadas en el diagnóstico situacional. Su formulación debe responder a las siguientes características:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.p-4.py-5.h-100(style="background-color:#C2EDC3")
            p.text-center.mt-4.mb-0(style="color:#12263F") #[b Claros y comprensibles:] que cualquier persona involucrada los entienda sin ambigüedades.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.p-4.py-5.h-100(style="background-color:#C2EDC3")
            p.text-center.mt-4.mb-0(style="color:#12263F") #[b Realistas:] que se puedan alcanzar con los recursos y capacidades disponibles.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.p-4.py-5.h-100(style="background-color:#C2EDC3")
            p.text-center.mt-4.mb-0(style="color:#12263F") #[b Pertinentes:] que estén alineados con la problemática identificada y con las políticas nacionales o locales de salud y ambiente.

    .row.mb-4(data-aos="fade-down")
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/icono-02.svg' alt="Imagen decorativa")
      .col-11.mb-3
        p.mb-0 Para que sean efectivos, los objetivos deben ser claros, medibles, alcanzables, relevantes y estar delimitados en el tiempo, siguiendo el enfoque SMART (por sus siglas en inglés):

    .row.justify-content-center.mb-0
      .col-lg-12(data-aos="fade-down")
        .row.justify-content-center.mb-5
          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-25.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") #[b #[em Specific  ] ] 
                p.text-center(style="color:#12263F") (Específico)

          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-26.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") #[b #[em Measurable  ] ] 
                p.text-center(style="color:#12263F") (Medible)

          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-27.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") #[b #[em Achievable ] ]  
                p.text-center(style="color:#12263F") (Alcanzable) 
          
          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-28.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") #[b #[em Relevant  ] ]
                p.text-center(style="color:#12263F") (Relevante)

          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-29.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") #[b #[em Time-bound   ] ] 
                p.text-center(style="color:#12263F") (Tiempo definido)

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Esto asegura que las acciones se realicen de manera estratégica, optimizando recursos y garantizando resultados verificables.
        p Además, la formulación de objetivos y metas debe responder al diagnóstico previo de riesgos ambientales, a las capacidades institucionales y comunitarias, y a la normatividad vigente. Este alineamiento permite que el plan sea coherente, factible y socialmente pertinente.
        p A continuación, se presenta un ejemplo de formulación de objetivos y metas para un plan de acción en salud ambiental:
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img-08.svg' alt="Imagen decorativa")

    .row.justify-content-center.mb-0
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          i Formulación de objetivos y metas en el plan de acción en salud ambiental y sanitaria
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Objetivo
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Meta
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Indicador
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Plazo
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Responsable
            tbody
              tr(data-aos="fade-right")
                td Mejorar las condiciones de saneamiento básico en la vereda San Isidro, para reducir riesgos sanitarios asociados a la disposición inadecuada de residuos.
                td Implementar 3 jornadas comunitarias de recolección de residuos, con participación de al menos el 70 % de los hogares.
                td Número de jornadas realizadas y porcentaje de participación comunitaria.
                td 4 meses
                td Secretaría de Salud municipal y Junta de Acción Comunal.
              tr(data-aos="fade-right")
                td Reducir la proliferación del mosquito Aedes aegypti, en el barrio El Progreso.
                td Disminuir en un 40 % los criaderos identificados en la inspección inicial.
                td Porcentaje de criaderos eliminados respecto al diagnóstico de línea base.
                td 6 meses
                td Secretaría de Salud, líderes comunitarios y promotores de salud.
              tr(data-aos="fade-right")
                td Fortalecer la educación ambiental en instituciones educativas del municipio.
                td Implementar un programa de capacitación ambiental en el 100 % de los colegios rurales.
                td Número de colegios con el programa implementado.
                td 1 año
                td Secretaría de Educación, Secretaría de Ambiente.

        p(data-aos="fade-down") La integración de objetivos y metas claras no solo orienta las acciones del plan, sino que también facilita la rendición de cuentas, la transparencia y la sostenibilidad de los procesos.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Identificación de actividades de manejo del riesgo ambiental

    p(data-aos="fade-down") La asignación de responsables y recursos es un paso fundamental para garantizar la ejecución efectiva de un plan de acción en salud ambiental. Consiste en definir claramente quién se encargará de cada actividad, qué recursos serán necesarios y de dónde provendrán, evitando duplicidades y asegurando que las tareas se cumplan en los plazos establecidos.
    p.mb-5(data-aos="fade-up") En este proceso es importante:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img-09.svg' alt='Imagen decorativa')
          p.mb-0 Nombrar un responsable principal para cada actividad, con autoridad y capacidad de gestión.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img-10.svg' alt='Imagen decorativa')
          p.mb-0 Identificar actores de apoyo, tanto institucionales como comunitarios, que participarán en la ejecución.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img-11.svg' alt='Imagen decorativa')
          p.mb-0 Precisar los recursos necesarios, que pueden ser financieros, materiales, humanos o técnicos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img-12.svg' alt='Imagen decorativa')
          p.mb-0 Definir la fuente de financiación, ya sea presupuesto institucional, convenios, aportes comunitarios o cooperación externa.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img-13.svg' alt='Imagen decorativa')
          p.mb-0 Establecer plazos concretos, acordes con las prioridades y la disponibilidad de medios.

    p(data-aos="fade-down") Un instrumento útil para este propósito es la matriz de asignación de responsabilidades y recursos, que permite visualizar de forma clara los compromisos y requerimientos de cada acción.
    p.mb-5(data-aos="fade-up") A manera de ejemplo, se presenta una matriz de asignación de responsables y recursos en un plan de acción en salud ambiental:

    .row.justify-content-center.mb-0
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          i Matriz de asignación de responsables y recursos
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Actividad
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Responsable principal
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Actores de apoyo
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Recursos necesarios
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Fuente de financiación
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Plazo
            tbody
              tr(data-aos="fade-right")
                td Jornada de eliminación de criaderos de Aedes aegypti en el barrio San José.
                td Secretaría Municipal de Salud.
                td Juntas de Acción Comunal, Instituciones Educativas.
                td Bolsas para residuos, guantes, afiches informativos, vehículo para recolección.
                td Presupuesto municipal de salud.
                td 15 días
              tr(data-aos="fade-right")
                td Taller comunitario sobre manejo seguro del agua.
                td Empresa de Servicios Públicos.
                td Secretaría de Educación, Líderes comunitarios.
                td Material didáctico, proyector, salón comunal.
                td Recursos propios de la empresa.
                td 1 mes
              tr(data-aos="fade-right")
                td Campaña de sensibilización sobre disposición adecuada de residuos sólidos.
                td Secretaría de Ambiente.
                td ONG ambiental, emisora comunitaria.
                td Afiches, perifoneo, bolsas reutilizables.
                td Aportes de ONG y alcaldía.
                td 3 semanas
              tr(data-aos="fade-right")
                td Siembra de árboles en zonas ribereñas para prevenir erosión.
                td Secretaría de Planeación.
                td Corporación Autónoma Regional, colegios.
                td Plántulas, herramientas, transporte.
                td Convenio interinstitucional.
                td 2 meses

        p(data-aos="fade-down") Esta herramienta no solo organiza la información, sino que también facilita el seguimiento, ya que permite identificar de forma rápida los responsables, los recursos asignados y el estado de ejecución de cada actividad.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Asignación de responsables y recursos

    .row.justify-content-center.align-items-center.mb-3(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p La correcta ejecución de un plan de acción en salud ambiental depende en gran medida de una adecuada asignación de responsabilidades y de los recursos necesarios para cada actividad. Este proceso garantiza que todas las acciones tengan un responsable claramente identificado, así como los insumos, el personal y el presupuesto requeridos para su desarrollo.
            .tarjeta.p-3.mb-4(style="background-color:#E0F6E1; border-radius:none !important")
              p La asignación de responsables implica designar a las instituciones, dependencias o actores comunitarios que liderarán o apoyarán cada actividad, definiendo su rol y nivel de compromiso. Esto permite una mejor coordinación, evita la duplicación de esfuerzos y asegura que cada tarea cuente con seguimiento y evaluación oportuna.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img-14.png', alt='Imagen decorativa')

    .row.mb-4(data-aos="fade-down")
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img-15.svg' alt="Imagen decorativa")
      .col-11.mb-3
        p Por su parte, la asignación de recursos contempla la identificación y gestión de los elementos materiales, financieros, tecnológicos y humanos que se requieren para el cumplimiento de las actividades. En este punto es fundamental garantizar la disponibilidad de dichos recursos desde la planeación, para prevenir retrasos o incumplimientos.
        p.mb-0 Entre los tipos de recursos que pueden incluirse se encuentran:

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Recursos humanos:] personal técnico, promotores de salud, líderes comunitarios y voluntarios.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Recursos materiales:] equipos, herramientas, insumos y materiales educativos.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Recursos financieros:] presupuestos asignados por entidades públicas o privadas, fondos de cooperación o donaciones.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Recursos logísticos y tecnológicos:] transporte, espacios físicos, plataformas de comunicación, sistemas de monitoreo y análisis de datos.

    p.mb-5(data-aos="fade-down") A manera de ejemplo, se presenta una matriz de asignación de responsables y recursos en un plan de acción en salud ambiental:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          i Matriz de asignación de responsables y recursos
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Actividad
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Responsable principal
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Apoyos institucionales
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Recursos necesarios
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") Fuente de recursos
            tbody
              tr(data-aos="fade-right")
                td Jornada de recolección de inservibles para control de vectores.
                td Secretaría Municipal de Salud.
                td Juntas de Acción Comunal y Empresa de Servicios Públicos.
                td Volquetas, guantes, costales y material educativo.
                td Presupuesto municipal y donaciones de empresa privada.
              tr(data-aos="fade-right")
                td Taller comunitario sobre uso seguro del agua.
                td Institución Educativa Rural El Progreso.
                td Secretaría de Ambiente y líderes comunitarios.
                td Material audiovisual, cartillas y refrigerios.
                td Fondo de proyectos ambientales escolares (PRAE).
              tr(data-aos="fade-right")
                td Campaña radial sobre disposición adecuada de residuos.
                td Oficina de Comunicaciones de la Alcaldía.
                td Emisora comunitaria y ONG ambiental.
                td Espacios radiales, cuñas y material gráfico.
                td Recursos de comunicación institucional.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-16.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La claridad en la asignación de responsables y recursos fortalece la ejecución del plan, ya que cada actor conoce su papel, dispone de los insumos necesarios y puede rendir cuentas sobre los avances. Además, permite que las actividades se desarrollen de manera ordenada, optimizando el uso de los recursos disponibles y favoreciendo la sostenibilidad de las acciones en el tiempo. Una distribución bien planificada es, por tanto, un elemento clave para garantizar el impacto y la eficacia de las intervenciones en salud ambiental.

    Separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Elaboración del cronograma y estrategia de seguimiento

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p El cronograma es una herramienta de planificación que organiza las actividades del plan de acción en el tiempo, asignando fechas de inicio y finalización para cada tarea, así como la secuencia lógica en la que deben ejecutarse. Una buena programación permite priorizar acciones, distribuir la carga de trabajo y coordinar de forma eficiente a los distintos responsables.
        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img-18.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 La estrategia de seguimiento, por su parte, garantiza que el plan avance de acuerdo con lo establecido, identificando retrasos, dificultades o necesidades de ajuste. Este proceso implica la definición de indicadores de cumplimiento, la recolección periódica de información y la realización de reuniones de revisión para tomar decisiones oportunas.

        p.mb-4 Para que el cronograma sea efectivo, debe incluir:
        .tarjeta.tarjeta--BGC02.p-3.mb-4
          .col.mb-0
            ul.lista-ul--color.mt-2
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Todas las actividades definidas en el plan.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Fechas precisas de inicio y término.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Responsables directos de cada tarea.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Recursos necesarios para su ejecución.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                | Espacios programados para el seguimiento y la evaluación intermedia.

      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img-17.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-up")
        p El seguimiento continuo no solo ayuda a cumplir con los tiempos establecidos, sino que también permite realizar mejoras durante la ejecución, evitando que los problemas se detecten únicamente al final. Así, el cronograma y el sistema de monitoreo se convierten en herramientas complementarias para garantizar la efectividad del plan de acción en salud ambiental.
        p A manera de ejemplo, se presenta a continuación una tabla de cronograma que integra actividades, responsables, recursos, fechas e indicadores de seguimiento:

      .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/img-19.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          i Cronograma de actividades
        .tabla-a.color-acento-contenido.mb-4
          table(data-aos="zoom-in"  alt="")
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Actividad
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Responsable principal
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Recursos necesarios
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Fecha de inicio
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Fecha de finalización
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 16%") Indicador de seguimiento
            tbody
              tr(data-aos="fade-right")
                td Jornada de recolección de inservibles para control de Aedes aegypti.
                td Secretaría Municipal de Salud.
                td Personal técnico, vehículos, bolsas y guantes.
                td 05/09/2025
                td 06/09/2025
                td Cantidad de inservibles recolectados (kg).
              tr(data-aos="fade-right")
                td Taller comunitario sobre disposición adecuada de residuos sólidos.
                td JAC Barrio El Progreso.
                td Material pedagógico, salón comunal y facilitador.
                td 10/09/2025
                td 10/09/2025
                td Número de asistentes y nivel de satisfacción.
              tr(data-aos="fade-right")
                td Limpieza y desinfección de tanques de almacenamiento de agua.
                td Empresa de Servicios Públicos.
                td Cloro, cepillos y equipos de protección personal.
                td 15/09/2025
                td 16/09/2025
                td Porcentaje de tanques intervenidos.
              tr(data-aos="fade-right")
                td Campaña radial “Agua Limpia, Salud Segura”.
                td Oficina de Comunicaciones Alcaldía.
                td Espacios radiales y cuñas grabadas.
                td 20/09/2025
                td 30/09/2025
                td radiales
              tr
                td Evaluación intermedia del plan de acción.
                td Comité Técnico de Salud Ambiental.
                td Formatos de evaluación, base de datos y reuniones.
                td 05/10/2025
                td 06/10/2025
                td Informe de avances elaborado.

        p.mb-0(data-aos="fade-down") Contar con un cronograma detallado y un sistema de seguimiento bien definido permite que la gestión del plan sea proactiva y no reactiva. De este modo, los ajustes se realizan sobre la marcha, se optimizan los recursos y se incrementa la probabilidad de lograr los resultados esperados en el tiempo previsto.

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Integración del plan según valoración de riesgos, capacidades locales y normativa

    .row.align-items-center.mb-4
      .col-xl
        p.mb-4 La integración del plan de acción en salud ambiental y sanitaria es la fase en la que todos los elementos trabajados previamente, como objetivos, metas, actividades, responsables, recursos, cronograma y mecanismos de seguimiento, se consolidan en un solo documento articulado, claro y operativo. Este proceso asegura que cada componente esté alineado con las prioridades identificadas y que exista coherencia entre lo que se plantea y lo que se puede ejecutar.
        .row.align-items-center.m-0.style___box_2(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema3/img-21.svg', alt='' style="max-width: 400px")
          .col-xl
            p.mb-0 La valoración de riesgos ambientales y sanitarios es el punto de partida para priorizar las acciones. Para ello, se utilizan herramientas como matrices de riesgo, mapas comunitarios, análisis epidemiológicos y diagnósticos participativos. Estos insumos permiten definir qué problemáticas requieren atención inmediata, cuáles pueden abordarse a mediano o largo plazo y cómo se distribuyen los esfuerzos para lograr el mayor impacto posible en la salud de la población.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/tema3/img-20.png', alt='' style="max-width: 500px").m-auto

    p.mb-4(data-aos="fade-down") Asimismo, la integración del plan debe considerar las capacidades locales: 

    .row.justify-content-center.mb-0
      .col-lg-12(data-aos="fade-down")
        .row.justify-content-center.mb-5
          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-30.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") La disponibilidad de personal técnico y comunitario.

          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-31.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") La infraestructura existente.

          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-32.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") Los recursos financieros.
          
          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-33.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") Las alianzas interinstitucionales.

          .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/img-34.svg' alt="Imagen decorativa")
              .tarjeta--boton.p-4.py-5.h-100(style="background-color:#CCD9F8")
                p.text-center.mt-4.mb-0(style="color:#12263F") El grado de participación social.

    .row.justify-content-center.mb-4
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-down")
        p Un plan desconectado de la realidad territorial tiende a quedarse en el papel; por ello, se recomienda ajustar las metas y actividades a lo que realmente es factible, sin perder de vista la proyección hacia mejoras sostenibles.
        p En paralelo, es indispensable garantizar que el plan se enmarque dentro de la normatividad vigente, tanto en el ámbito local como nacional. Esto incluye el cumplimiento de leyes, decretos, resoluciones y lineamientos técnicos que regulan la salud pública, la gestión ambiental y la participación comunitaria. El alineamiento con estos marcos legales no solo fortalece la legitimidad del plan, sino que facilita la consecución de apoyo político, técnico y financiero por parte de las autoridades competentes.

      .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-22.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-0(data-aos="zoom-in-down") 
      .col-lg-10.col-md-10.col-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img-23.svg' alt='')
          .tarjeta.color-primario(style="background-color:#CCD9F8")
            .p-4
              p Una integración efectiva implica que el plan sea consensuado con los actores clave, aprobado por las instancias correspondientes y socializado con la comunidad para fomentar la apropiación social de sus acciones. Así, el documento final no es solo una guía técnica, sino un compromiso colectivo que orienta la acción territorial hacia entornos más saludables y sostenibles.

















































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
