<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Estructura y capacidades del sistema de salud pública

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-right")
        p El sistema de salud pública en Colombia está conformado por un conjunto de instituciones, normas, recursos y procesos orientados a proteger y mejorar la salud de la población, prevenir enfermedades y promover entornos saludables. Su estructura se fundamenta en el Sistema General de Seguridad Social en Salud (SGSSS), regulado principalmente por la Ley 100 de 1993, la Ley 1438 de 2011 y otras disposiciones complementarias que garantizan el acceso equitativo a los servicios de salud y la vigilancia sanitaria.
        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/icono.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 Este sistema se organiza a partir de un enfoque descentralizado, en el que el Ministerio de Salud y Protección Social ejerce la dirección y formulación de políticas, mientras que los departamentos, distritos y municipios tienen responsabilidades específicas en la ejecución y control de acciones de salud pública.
        .row
          .col-auto.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/introduccion/icono.svg' alt="Imagen decorativa")
          .col.mb-3
            p.mb-0 Las capacidades del sistema incluyen la existencia de redes de vigilancia epidemiológica, infraestructura sanitaria, personal capacitado, planes de respuesta ante emergencias y mecanismos de articulación interinstitucional. Estas capacidades permiten desarrollar intervenciones de prevención, control y mitigación de riesgos en salud ambiental y seguridad sanitaria, priorizando la protección de las comunidades más vulnerables.
      
      .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p En el ámbito de la salud ambiental, el sistema se apoya en entidades como el Instituto Nacional de Salud (INS), el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) y las autoridades ambientales regionales, que contribuyen con datos, análisis y acciones de control. De esta manera, la estructura y capacidades de la salud pública se articulan para responder de forma efectiva a las necesidades del territorio, fortaleciendo la gestión integral del riesgo y la seguridad sanitaria.
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-02.svg' alt="Imagen decorativa")

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Organización del sistema de salud pública

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-03.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La salud pública en Colombia se orienta bajo un enfoque de derecho, equidad, determinación social y acción intersectorial. Esta visión se materializa mediante una estructura organizacional que involucra diferentes niveles del Estado (nacional, departamental, distrital y municipal), entidades técnicas y científicas, así como actores comunitarios e institucionales. Su objetivo es prevenir, mitigar y controlar los riesgos que afectan la salud colectiva.

    p.mb-4(data-aos="fade-right") El Sistema General de Seguridad Social en Salud (SGSSS) se compone de dos grandes componentes:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.mb-0(data-aos="flip-down")
          .col-md-6.col-lg.m-2.mb-4
            .row
              .col-12.px-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-04.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
              .col-12.bg-c1.h-100
                .p-4
                  p.text-center.mb-0(style="color:#000") #[b Atención individual]

          .col-md-6.col-lg.m-2.mb-4
            .row
              .col-12.px-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-05.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
              .col-12.bg-c2.h-100
                .p-4
                  p.text-center.mb-0(style="color:#fff") #[b Salud pública colectiva]
    
    .row.justify-content-center.mb-5
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="flip-down")
        p Este último es liderado por el Ministerio de Salud y Protección Social, que ejerce la rectoría nacional definiendo políticas, normas y directrices, y coordinando la implementación del Plan Decenal de Salud Pública (PDSP) como marco programático.
        .tarjeta.p-2.mb-3(style="background-color:#C2EDC3; border-radius:none !important")
          .row.justify-content-center.align-items-center
            .col-2.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img-07.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              p.mb-0 La salud pública colectiva se articula con los planes de desarrollo territoriales a través de las Secretarías de Salud Departamentales, Distritales y Municipales, responsables de la promoción de la salud, la prevención de enfermedades, la vigilancia epidemiológica, la gestión del riesgo y el control de factores ambientales y sociales. Sin embargo, las capacidades de estas entidades varían según el territorio, lo que genera desigualdades en la respuesta frente a eventos ambientales o sanitarios.
            
      .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-06.svg', alt='Imagen decorativa')
      
    p(data-aos="fade-right") En el ámbito técnico, el Instituto Nacional de Salud (INS) actúa como ente asesor, operativo y científico, apoyando procesos de vigilancia, investigación y respuesta a emergencias. Asimismo, instancias como los Comités de Salud Ambiental (CISA) permiten coordinar acciones intersectoriales entre salud, ambiente, educación, planeación y otros sectores, bajo los principios de la Atención Primaria en Salud (APS).
    p.mb-5(data-aos="fade-left") Las capacidades locales en salud ambiental incluyen:

    .bg-c3.px-md-5.px-4.mb-5
      .row.justify-content-center(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/img-08.svg' alt='Imagen decorativa')
            p 
              b Talento humano
            p.mb-0 Profesionales en salud pública, médicos, ingenieros sanitarios, trabajadores sociales, promotores comunitarios, entre otros.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/img-09.svg' alt='Imagen decorativa')
            p 
              b Recursos técnicos
            p.mb-0 Equipos de monitoreo, insumos de vigilancia, transporte, materiales educativos y de comunicación.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/img-10.svg' alt='Imagen decorativa')
            p 
              b Información estratégica
            p.mb-0 Datos de morbilidad, factores de riesgo, indicadores territoriales, diagnósticos y sistemas como SIVIGILA, RUAF, SNGRD e IDEAM.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/img-11.svg' alt='Imagen decorativa')
            p 
              b Infraestructura física
            p.mb-0 Laboratorios, unidades móviles, centros de salud y oficinas locales con capacidad operativa.

          .tarjeta.tarjeta--BG01.p-4
            .row.justify-content-center.mb-3
              .col-lg-5.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema1/img-12.svg' alt='Imagen decorativa')
            p 
              b Articulación institucional
            p.mb-0 Coordinación con autoridades ambientales (CAR), entes educativos, empresas de servicios públicos, alcaldías y organizaciones comunitarias.

    .row.mb-0(data-aos="fade-down")
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/icono-02.svg' alt="Imagen decorativa")
      .col-11.mb-3
        p.mb-0 Identificar y fortalecer estas capacidades es clave para una planificación efectiva en salud ambiental, asegurando que las intervenciones respondan a las realidades locales y favorezcan la prevención, la respuesta oportuna y la construcción de entornos saludables de forma sostenible.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Capacidades locales en salud pública

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Las capacidades locales en salud pública hacen referencia al conjunto de recursos humanos, técnicos, financieros y logísticos disponibles en un territorio para responder de manera efectiva a las necesidades y retos sanitarios. Estas capacidades determinan la eficiencia con la que se implementan programas de prevención, vigilancia epidemiológica, promoción de la salud y atención de emergencias.
        .tarjeta.p-3.mb-3(style="background-color:#E8F3DB; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img-13.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 En el contexto colombiano, las entidades territoriales como alcaldías, gobernaciones y direcciones territoriales de salud, son responsables de fortalecer sus capacidades institucionales mediante la formación continua del personal, la adquisición de equipos e insumos, el uso de tecnologías de información para la gestión de datos y la coordinación intersectorial (Ministerio de Salud y Protección Social, 2022).

        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/icono-02.svg' alt="Imagen decorativa")
          .col.mb-3
            p.mb-0 La evaluación de estas capacidades considera factores como la infraestructura física, la cobertura de servicios, la disponibilidad de personal especializado, la articulación con la comunidad y la capacidad de respuesta ante emergencias.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-14.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-0
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-left")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-16.svg' alt='')
          .tarjeta.color-primario(style="background-color:#CCD9F8")
            .p-3
              p.mb-0 Por ejemplo, en 2023 el 78 % de los municipios contaba con un plan de contingencia en salud pública, pero solo el 55 % disponía de laboratorios locales para análisis de agua y alimentos (INS, 2023). 

        p.mb-0 El fortalecimiento de las capacidades locales no depende únicamente de los recursos, sino también de la planificación estratégica, el liderazgo institucional y la participación comunitaria. Estos elementos son esenciales para garantizar una respuesta oportuna y eficaz frente a los desafíos sanitarios, especialmente en territorios con alta dispersión poblacional o limitada conectividad (OPS, 2024).

      .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-15.svg', alt='Imagen decorativa')
  
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Articulación institucional en salud pública
    
    .row.justify-content-center.mb-4
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="flip-down")
        p La articulación institucional en salud pública consiste en la coordinación efectiva entre entidades de distintos niveles de gobierno, sectores y disciplinas para garantizar acciones integrales que protejan y mejoren la salud de la población. Esta colaboración es fundamental para enfrentar problemáticas sanitarias complejas, que requieren respuestas conjuntas y complementarias (Organización Panamericana de la Salud [OPS], 2023).
        p En Colombia, el Sistema General de Seguridad Social en Salud (SGSSS) y el Sistema Nacional de Salud Pública funcionan de manera articulada con otros sistemas, como el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD) y el Sistema Nacional Ambiental (SINA), con el fin de atender emergencias, prevenir riesgos y promover entornos saludables (Ministerio de Salud y Protección Social, 2022).

      .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-17.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-right") A nivel territorial, la articulación institucional se concreta a través de:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100(style="background-color:#C2EDC3")
          figure
            img(src='@/assets/curso/temas/tema1/img-18.png' alt="Imagen decorativa")
          .p-4
            p.mb-0(style="color:#12263F") Comités intersectoriales de salud pública que integran autoridades de salud, educación, ambiente, planeación y servicios públicos para abordar determinantes sociales y ambientales de la salud.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.color-secundario.h-100(style="background-color:#C2EDC3")
          figure
            img(src='@/assets/curso/temas/tema1/img-19.png' alt="Imagen decorativa")
          .p-4
            p.mb-0(style="color:#12263F") Planes de salud territorial elaborados en conjunto entre gobernaciones, alcaldías y direcciones de salud, con participación de la comunidad y otros actores clave.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.color-primario.h-100(style="background-color:#C2EDC3")
          figure
            img(src='@/assets/curso/temas/tema1/img-20.png' alt="Imagen decorativa")
          .p-4
            p.mb-0(style="color:#12263F") Protocolos conjuntos de respuesta frente a emergencias como brotes epidémicos, desastres naturales o contaminación ambiental.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-secundario.h-100(style="background-color:#C2EDC3")
          figure
            img(src='@/assets/curso/temas/tema1/img-21.png' alt="Imagen decorativa")
          .p-4
            p.mb-0(style="color:#12263F") Convenios y alianzas estratégicas con universidades, organizaciones sociales y cooperación internacional para fortalecer capacidades técnicas y de investigación.

    .row.justify-content-center.mb-0
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Según el Ministerio de Salud y Protección Social (2023), el 92 % de los departamentos colombianos reportó contar con comités intersectoriales activos, aunque en municipios de menos de 50.000 habitantes la cifra disminuye al 64 %, debido principalmente a limitaciones de personal y recursos.
      
        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/introduccion/icono.svg' alt="Imagen decorativa")
          .col.mb-3
            p.mb-0 El éxito de la articulación institucional está estrechamente ligado a la claridad del marco normativo, la disponibilidad de recursos y la voluntad política de los actores involucrados. Cuando las instituciones logran coordinarse de manera efectiva, se evita la duplicación de esfuerzos, se optimiza el uso de los recursos disponibles y se incrementa la capacidad de respuesta ante emergencias y necesidades de salud pública.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-22.png' alt="Imagen decorativa")

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Normatividad aplicable a la salud pública  

    p(data-aos="fade-right") El marco normativo de la salud pública en Colombia establece los principios, responsabilidades y procedimientos que deben cumplir las entidades del sector para garantizar la protección, promoción y recuperación de la salud de la población. Estas normas orientan la planeación, implementación y evaluación de políticas, programas y acciones en el ámbito territorial, y aseguran que la atención sanitaria se preste bajo criterios de equidad, calidad y eficiencia. 
    p.mb-5(data-aos="fade-left") Principales normas y disposiciones:

    .row.justify-content-center(data-aos="fade-left")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-23.svg' alt='Imagen decorativa')
          p 
            b Constitución Política de Colombia (1991)
          p.mb-0 Reconoce la salud como un derecho fundamental y establece la obligación del Estado de proteger la vida y garantizar condiciones que favorezcan el bienestar de la población.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-24.svg' alt='Imagen decorativa')
          p 
            b Ley 1751 de 2015 - Ley Estatutaria de Salud
          p.mb-0 Define la salud como un derecho fundamental autónomo e irrenunciable, ordenando su garantía a través de políticas públicas integrales que incluyan acciones de prevención, protección y tratamiento.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-25.svg' alt='Imagen decorativa')
          p 
            b Ley 9 de 1979 - Código Sanitario Nacional
          p.mb-0 Regula aspectos relacionados con saneamiento básico, control de enfermedades, inocuidad de alimentos, calidad del agua y condiciones sanitarias de los establecimientos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-26.svg' alt='Imagen decorativa')
          p 
            b Ley 1438 de 2011
          p.mb-0 Reforma el Sistema General de Seguridad Social en Salud, fortaleciendo la atención primaria en salud y el enfoque preventivo.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-27.svg' alt='Imagen decorativa')
          p 
            b Decreto 780 de 2016 - Decreto Único Reglamentario del Sector Salud
          p.mb-0 Compila la normatividad en materia de salud, incluyendo disposiciones sobre vigilancia en salud pública, gestión del riesgo y organización de servicios.
        
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-28.svg' alt='Imagen decorativa')
          p 
            b Resolución 1229 de 2013
          p.mb-0 Establece lineamientos técnicos y sanitarios para actividades de inspección, vigilancia y control frente a riesgos en salud pública.
        
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-29.svg' alt='Imagen decorativa')
          p 
            b Plan Decenal de Salud Pública 2022-2031
          p.mb-0 Define objetivos y estrategias nacionales para la protección de la salud, con especial énfasis en la promoción, prevención y control de riesgos sanitarios.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-30.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Aplicar estas disposiciones de manera efectiva garantiza que los programas y acciones en salud pública respondan a criterios técnicos, legales y éticos. Asimismo, fortalece la gobernanza sanitaria, facilita la coordinación interinstitucional y promueve entornos saludables para toda la población.


























</template>

<script>
export default {
  name: 'Tema1',
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
