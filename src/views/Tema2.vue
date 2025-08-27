<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Estrategias para la promoción de la salud ambiental

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La promoción de la salud ambiental comprende el conjunto de acciones orientadas a prevenir riesgos derivados de factores ambientales y a fomentar entornos seguros y saludables. Su implementación en el ámbito de la salud pública implica tanto intervenciones educativas y comunitarias como la coordinación intersectorial y la aplicación del marco normativo vigente.

    p(data-aos="fade-up") En Colombia, estas estrategias se desarrollan bajo principios de participación comunitaria, sostenibilidad y articulación institucional, y se alinean con políticas como la Política Nacional de Educación Ambiental, el Plan Decenal de Salud Pública 2022-2031 y los lineamientos del Sistema Nacional Ambiental (SINA).

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Diseño de estrategias educativas comunitarias 

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Las estrategias educativas en salud ambiental son herramientas pedagógicas que buscan sensibilizar, informar y fomentar la participación social frente a los riesgos y problemáticas que vinculan el entorno con la salud humana. No se limitan a transmitir información, sino que promueven conciencia crítica, cambios de comportamiento y acción colectiva en el territorio.
        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img-03.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 En el contexto colombiano, marcado por desigualdades territoriales y socioambientales, la educación ambiental debe adaptarse a las particularidades culturales, geográficas y comunitarias de cada región, integrándose con los determinantes sociales de la salud.

        p Estas estrategias educativas deben orientarse hacia metas concretas que aseguren un impacto real en la comunidad y el entorno. Entre sus objetivos más relevantes se encuentran:

      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-02.png' alt="Imagen decorativa")
  
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img-04.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[b Generar conciencia sobre los factores de riesgo ambiental que afectan la salud pública.]
      
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img-05.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[b Fortalecer competencias individuales y colectivas para identificar y prevenir dichos riesgos.]
      
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img-06.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[b Promover entornos saludables y sostenibles mediante participación comunitaria.]
      
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema2/img-07.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[b Impulsar la corresponsabilidad intersectorial en la gestión ambiental.]

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        p.mb-4 Para que las estrategias educativas logren resultados sostenibles, es necesario que se fundamenten en principios que garanticen pertinencia y eficacia. Estos principios permiten que el aprendizaje sea significativo, que respete las diversidades culturales y que promueva la apropiación social del conocimiento. Entre los más relevantes se encuentran:

        .row.justify-content-center.align-items-center.tarjeta.tarjeta--BGC01.p-4
          ul.lista-ul--color.mb-0
            li.d-flex.align-items-start.mb-0
              i.fas.fa-leaf
              | Participación activa: el conocimiento se construye colectivamente.

            li.d-flex.align-items-start.mb-0
              i.fas.fa-leaf
              | Contextualización territorial: contenidos adaptados a cultura, lengua y entorno local.
            
            li.d-flex.align-items-start.mb-0
              i.fas.fa-leaf
              | Enfoque intercultural y diferencial: reconocimiento de saberes y prácticas de comunidades indígenas, afrodescendientes y rurales.

            li.d-flex.align-items-start.mb-0
              i.fas.fa-leaf
              | Aprendizaje significativo: ejemplos reales y cercanos para facilitar apropiación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-up")
        p.mb-4 La educación para la salud ambiental puede implementarse a través de diversas metodologías, que van desde procesos formativos formales hasta acciones comunitarias de carácter lúdico y participativo. Entre las más utilizadas se destacan:
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-left")
            .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
              .row.mb-4
                .col-lg-4.col-5
                  img(src='@/assets/curso/temas/tema2/img-37.svg' alt="Imagen decorativa")
              p.mb-0 #[b Talleres vivenciales y pedagógicos.]
          .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-right")
            .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
              .row.mb-4
                .col-lg-4.col-5
                  img(src='@/assets/curso/temas/tema2/img-38.svg' alt="Imagen decorativa")
              p.mb-0 #[b Cartillas didácticas y guías comunitarias.]
          .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-left")
            .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
              .row.mb-4
                .col-lg-4.col-5
                  img(src='@/assets/curso/temas/tema2/img-39.svg' alt="Imagen decorativa")
              p.mb-0 #[b Proyectos escolares ambientales (PRAE).]
          .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-right")
            .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
              .row.mb-4
                .col-lg-4.col-5
                  img(src='@/assets/curso/temas/tema2/img-40.svg' alt="Imagen decorativa")
              p.mb-0 #[b Campañas comunicativas en medios locales.]
          .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-left")
            .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
              .row.mb-4
                .col-lg-4.col-5
                  img(src='@/assets/curso/temas/tema2/img-41.svg' alt="Imagen decorativa")
              p.mb-0 #[b Recorridos ambientales y mapas parlantes.]
          .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-right")
            .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
              .row.mb-4
                .col-lg-4.col-5
                  img(src='@/assets/curso/temas/tema2/img-42.svg' alt="Imagen decorativa")
              p.mb-0 #[b Juegos educativos y herramientas lúdicas.]

      .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema2/img-08.png' alt="Imagen decorativa")

    p.mb-4(data-aos="fade-down") Para que estas estrategias tengan continuidad y alcance, es esencial que se desarrollen en articulación con diferentes actores del territorio, integrando esfuerzos y recursos. En este sentido, su implementación debe involucrar.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-lg-8.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--BGC02.p-4
              ul.lista-ul--color.mb-0
                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  | Secretarías de Salud y Ambiente.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  | Instituciones educativas y universidades.
                
                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  | Juntas de Acción Comunal.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  | Organizaciones sociales y ambientales.

                li.d-flex.align-items-start.mb-0
                  i.fas.fa-leaf
                  | Empresas de servicios públicos.

          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema2/img-15.svg', alt='Imagen decorativa')

        p(data-aos="fade-down") Estas acciones se enmarcan en políticas nacionales como la Política Nacional de Educación Ambiental (PNEA) y el Plan Decenal de Salud Pública (PDSP) 2022-2031. Una implementación adecuada permite prevenir enfermedades, mejorar la calidad de vida y garantizar la sostenibilidad ambiental en Colombia.
        p(data-aos="fade-down") A continuación, se presenta un ejemplo que describe cómo diseñar e implementar una estrategia educativa comunitaria en salud ambiental, siguiendo los principios y enfoques descritos anteriormente.

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        p.mb-4 En el municipio ficticio de “San Verde”, se identificó un incremento de casos de enfermedades diarreicas agudas (EDA) asociadas al consumo de agua no tratada. A partir de un diagnóstico participativo con líderes comunitarios y la Secretaría de Salud, se diseñó la siguiente estrategia educativa:
        LineaTiempoD.color-acento-botones.especial
          span(numero="A" titulo="Objetivo") 
            p.mb-0 capacitar a 200 familias rurales en prácticas seguras para el manejo y almacenamiento de agua, reduciendo en un 30 % los casos de EDA en seis meses.
          span(numero="B" titulo="Principios aplicados") 
            p.mb-0 participación activa (talleres en cada vereda), contextualización territorial (uso de ejemplos locales y lenguaje sencillo) y enfoque intercultural (integrando saberes tradicionales sobre recolección de agua de lluvia).
          span(numero="C" titulo="Estrategias implementadas") 
            ul.lista-ul.mb-0
              li
                ul
                  li.mb-0 
                    i.lista-ul__vineta
                    | Talleres vivenciales en las veredas, con demostración de sistemas de filtrado casero.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Distribución de cartillas ilustradas y audios radiales en la emisora comunitaria.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Elaboración colectiva de un “mapa parlante” de fuentes hídricas seguras y no seguras.

          span(numero="D" titulo="Vinculación institucional") 
            p.mb-0 participación de la Secretaría de Salud, la empresa de acueducto, el colegio rural y la Junta de Acción Comunal.
          span(numero="E" titulo="Evaluación") 
            p.mb-0 seguimiento mensual con encuestas y visitas domiciliarias para verificar cambios en las prácticas de almacenamiento de agua.

      .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-16.png', alt='Imagen decorativa')
    
    p.mb-0(data-aos="fade-down") Este ejercicio demuestra cómo una estrategia educativa bien planificada integra diagnóstico, principios pedagógicos, métodos participativos y coordinación intersectorial para lograr un impacto real en la salud ambiental de una comunidad.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Organización de campañas de salud ambiental

    .row.justify-content-center.mb-4
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-up")
        p ELas campañas comunitarias en salud ambiental son intervenciones planificadas que buscan movilizar colectivamente a la población para enfrentar problemáticas ambientales que afectan la salud pública. A través de acciones pedagógicas, comunicativas y participativas, estas campañas informan, sensibilizan y promueven cambios sostenibles en el comportamiento de las personas y comunidades.
        .tarjeta.p-3.mb-3(style="background-color:#CCD9F8; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img-18.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 Más allá de ser eventos aislados, las campañas bien diseñadas se convierten en procesos de transformación social, ya que integran la voz de la comunidad, el trabajo intersectorial y la aplicación de enfoques educativos adaptados al territorio.

      .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/img-17.png', alt='Imagen decorativa')

    .titulo-con-imagen.mb-3(data-aos="flip-up")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src='@/assets/curso/temas/tema2/icono-texto.svg', alt='Imagen decorativa')
        h3.titulo-con-imagen__texto ¿Qué es una campaña comunitaria en salud ambiental?

    p.mb-4(data-aos="fade-down") Es un conjunto de actividades organizadas y coordinadas en un tiempo determinado, con objetivos claros, que busca generar un impacto colectivo, visible y medible frente a un riesgo o desafío ambiental que incide en la salud. Una campaña efectiva combina:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.col-12
        .row.justify-content-center.mb-4
          .col-lg-9.col-12.order-lg-2.order-2(data-aos="fade-down")
            .tarjeta.tarjeta--BGC01.p-3
              .col.mb-0
                ul.lista-ul--color.mt-2.mb-0
                  li.d-flex.align-items-start.mb-0
                    i.fas.fa-leaf
                    | Acciones educativas para aumentar el conocimiento y la conciencia.

                  li.d-flex.align-items-start.mb-0
                    i.fas.fa-leaf
                    | Actividades movilizadoras que promueven la participación activa.

                  li.d-flex.align-items-start.mb-0
                    i.fas.fa-leaf
                    | Estrategias comunicativas que difunden mensajes claros y repetitivos.

          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema2/img-19.svg' alt="Imagen decorativa")

    .bg-c4.px-md-5.px-4
      .row.justify-content-center.mb-4(data-aos="fade-down")
        .col-1.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema1/icono-02.svg' alt="Imagen decorativa")
        .col-11.mb-3
          p.mb-0 El diseño de una campaña comunitaria en salud ambiental requiere una planificación ordenada que permita pasar de la identificación del problema a la implementación de acciones concretas y su posterior evaluación. Para lograrlo, se recomienda seguir un conjunto de fases que orienten el proceso y aseguren que las actividades sean pertinentes, participativas y sostenibles en el tiempo:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.col-12
          .row.justify-content-center.mb-4
            .col-lg-8.col-12.mb-md-0.order-lg-1.order-2(data-aos="fade-down")
              LineaTiempoD.color-acento-botones.especial2
                span(numero="1" titulo="Diagnóstico participativo del problema") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Identificación de factores de riesgo (ej. disposición inadecuada de residuos, proliferación de vectores, consumo de agua no tratada).
                    li.mb-0 
                      i.lista-ul__vineta
                      | Recolección de información comunitaria y técnica.
                    li.mb-0 
                      i.lista-ul__vineta
                      | Priorización del problema con base en impacto y urgencia.

                span(numero="2" titulo="Definición de objetivos") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Deben ser específicos, medibles y alcanzables.
                    li.mb-0 
                      i.lista-ul__vineta
                      | Ejemplo: “Reducir la proliferación del mosquito Aedes aegypti en el barrio El Progreso mediante jornadas de sensibilización y recolección de inservibles durante tres meses”.
                            
                span(numero="3" titulo="Segmentación de públicos") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Identificar los grupos a los que va dirigida la campaña (niños, madres, comerciantes, jóvenes).

                    li.mb-0 
                      i.lista-ul__vineta
                      | Adaptar mensajes y canales a las características socioculturales.  
      
                span(numero="4" titulo="Diseño de mensajes y materiales") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Contenidos claros, visuales y culturalmente apropiados.

                    li.mb-0 
                      i.lista-ul__vineta
                      | Uso de frases cortas y orientadas a la acción: “Lava, tapa, voltea” o “No tires basura al río”.
                
                span(numero="5" titulo="Selección de medios y canales") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Medios comunitarios: emisoras locales, perifoneo, redes sociales.

                    li.mb-0 
                      i.lista-ul__vineta
                      | Espacios físicos: escuelas, centros de salud, parques, sedes comunales.
                
                span(numero="6" titulo="Actividades de sensibilización") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Ferias ambientales, brigadas casa a casa, murales, teatro callejero, caminatas ecológicas, concursos, trueques de residuos.
                
                span(numero="7" titulo="Articulación institucional") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Coordinación con secretarías de salud, educación y ambiente, empresas de servicios públicos y organizaciones comunitarias.
                
                span(numero="8" titulo="Evaluación y seguimiento") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Indicadores: hogares visitados, cantidad de residuos recolectados, reducción de criaderos.
                    li.mb-0
                      i.lista-ul__vineta
                      | Encuestas o grupos focales antes y después de la campaña.

            .col-lg-4.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img-20.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") En diferentes regiones de Colombia, las comunidades, junto con las instituciones locales, han desarrollado campañas exitosas que integran educación, acción colectiva y creatividad para resolver problemas ambientales que afectan la salud. Algunos de estos ejemplos enseñan cómo la participación ciudadana y la articulación intersectorial logran resultados visibles y sostenibles:

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="“Hogares sin mosquito, familias sin dengue”")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Lanzada en 2022 por el Ministerio de Salud y Protección Social, esta campaña con foco nacional busca involucrar a las comunidades en acciones preventivas contra el dengue en 733 municipios endémicos Ministerio de Salud.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-21.png', alt="Imagen decorativa")
          
          .row(titulo="“Semana de Sensibilización sobre el Mosquito”")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Lanzada en 2022 por el Ministerio de Salud y Protección Social, esta campaña con foco nacional busca involucrar a las comunidades en acciones preventivas contra el dengue en 733 municipios endémicos Ministerio de Salud.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-22.png', alt="Imagen decorativa")

          .row(titulo="“Basura Cero”")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 DRecolección de residuos sólidos y sensibilización en barrios urbanos.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-23.png', alt="Imagen decorativa")
                
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo que detalla cómo organizar una campaña comunitaria en salud ambiental:

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p En la vereda “La Esperanza”, los habitantes detectaron un aumento de enfermedades transmitidas por mosquitos. Se realizó un diagnóstico participativo que identificó como principal causa la acumulación de inservibles y recipientes con agua en patios y solares. Con apoyo de la Secretaría de Salud y la Junta de Acción Comunal, se diseñó la campaña “Patio Limpio, Comunidad Sana”, que incluyó:
            .tarjeta.tarjeta--BGC02.p-3.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-12.col-12.mb-0.order-lg-2.order-2.mb-lg-0
                  ul.lista-ul--color.mt-2.mb-0
                    li.d-flex.align-items-start
                      i.fas.fa-leaf
                      | Jornadas de recolección de inservibles cada 15 días.

                    li.d-flex.align-items-start
                      i.fas.fa-leaf
                      | Talleres comunitarios sobre control de vectores.

                    li.d-flex.align-items-start
                      i.fas.fa-leaf
                      | Concurso “El patio más limpio” con premios para las familias participantes.

                    li.d-flex.align-items-start
                      i.fas.fa-leaf
                      | Difusión de mensajes radiales y perifoneo.

            .row.justify-content-center
              .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img-25.svg' alt="Imagen decorativa")
              .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                p Al cabo de tres meses, se observó una disminución del 40 % en la presencia de criaderos, evidenciando la efectividad de una campaña planificada con participación comunitaria e institucional.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img-24.png', alt='Imagen decorativa')

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Coordinación de acciones intersectoriales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p La gestión de la salud ambiental requiere del trabajo conjunto de múltiples sectores, ya que los problemas ambientales que afectan la salud, como la contaminación del agua, la proliferación de vectores o la disposición inadecuada de residuos, son complejos y tienen causas que trascienden un único ámbito de intervención. La coordinación intersectorial se convierte en una estrategia esencial para unir esfuerzos, optimizar recursos y lograr resultados sostenibles en el tiempo.
        .tarjeta.bg-color-1.p-4.mb-4
           p.mb-0 La intersectorialidad es un principio operativo que implica la integración de políticas, programas y recursos de distintos sectores como la salud, el ambiente, la educación, la planeación, la vivienda y los servicios públicos, con el fin de alcanzar objetivos comunes en torno a la salud y el bienestar de la población. Este trabajo no se limita a la cooperación puntual, sino que promueve la construcción colectiva de diagnósticos, planes y evaluaciones, asegurando que cada actor aporte desde sus competencias y capacidades.
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-26.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9.order-lg-2.order-2.mb-lg-0
        p En la coordinación de acciones intersectoriales, la identificación de los actores clave en el territorio es fundamental para garantizar que las intervenciones en salud ambiental sean efectivas y sostenibles. Estos actores, provenientes de distintos sectores institucionales, comunitarios y académicos, aportan conocimientos, recursos y capacidades específicas que, al integrarse, permiten abordar de manera integral los retos ambientales que afectan la salud pública.
        p.mb-0 Entre los actores más relevantes para la gestión intersectorial en salud ambiental se encuentran:
      .col-lg-3.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img-27.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-4(data-aos="fade-down-right")
      .col-lg-12(data-aos="fade-right")
        .tarjeta.tarjeta--BGC04.p-4
          .row.justify-content-center
            .col-lg-9.order-lg-1.order-2
              ul.lista-ul--color.mt-2.mb-0
                li.d-flex.align-items-start.mb-3
                  i.fas.fa-leaf 
                  p Secretarías de Salud municipales, distritales y departamentales, responsables de liderar las acciones sanitarias, la promoción de la salud y la vigilancia epidemiológica.

                li.d-flex.align-items-start
                  i.fas.fa-leaf
                  p Secretarías de Ambiente y de Planeación, que orientan la gestión del territorio, el ordenamiento ambiental y la aplicación de normativas.

                li.d-flex.align-items-start
                  i.fas.fa-leaf 
                  p Instituciones educativas, que promueven la educación ambiental mediante los Proyectos Ambientales Escolares (PRAE) y otras iniciativas formativas.

                li.d-flex.align-items-start
                  i.fas.fa-leaf
                  p Empresas de servicios públicos, fundamentales en la provisión de agua potable, el saneamiento básico y la gestión de residuos sólidos.

                li.d-flex.align-items-start
                  i.fas.fa-leaf
                  p Organizaciones comunitarias, como Juntas de Acción Comunal, comités ambientales o veedurías ciudadanas, que facilitan la participación directa de la comunidad.

                li.d-flex.align-items-start
                  i.fas.fa-leaf
                  p Organizaciones no gubernamentales (ONG) y universidades, que brindan capacidades técnicas, investigación y procesos de formación.

                li.d-flex.align-items-start
                  i.fas.fa-leaf
                  p Entidades del orden nacional, como el Instituto Nacional de Salud (INS), el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM), el Ministerio de Ambiente y Desarrollo Sostenible (MADS) y el Ministerio de Salud y Protección Social, que aportan lineamientos técnicos, recursos y políticas.
                
            .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img-28.png' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-down") En diferentes regiones del país, la articulación entre sectores ha dado lugar a experiencias exitosas que muestran cómo la cooperación fortalece la gestión de la salud ambiental. Estas acciones, adaptadas a las necesidades de cada territorio, integran recursos humanos, técnicos y logísticos para responder de manera conjunta a problemáticas específicas y generar impactos sostenibles en la comunidad. A continuación, se presentan algunos ejemplos representativos:

    .row.justify-content-center(data-aos="fade-down-right")
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema2/img-29.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Mesas Territoriales de Salud Ambiental")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Implementadas en departamentos como Antioquia y Cundinamarca, donde autoridades de salud, ambiente y educación, junto a líderes comunitarios, diseñan planes de acción para el control de vectores, manejo de residuos y calidad del agua (Ministerio de Salud y Protección Social, 2022).
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-30.svg', alt="Imagen decorativa")
          
          .row(titulo="Plan Departamental de Agua y Saneamiento (PDA)")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Estrategia en la que participan gobernaciones, alcaldías, empresas prestadoras de servicios y comunidades para garantizar acceso a agua potable y saneamiento básico en zonas rurales (Ministerio de Vivienda, Ciudad y Territorio, 2021).
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-31.svg', alt="Imagen decorativa")

          .row(titulo="Jornadas Integrales de Salud y Ambiente")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Desarrolladas en zonas urbanas y rurales de Cartagena y Villavicencio, combinando vacunación, control de plagas, arborización y educación ambiental (INS, 2023).
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-32.svg', alt="Imagen decorativa")
                
          .row(titulo="Respuesta intersectorial a emergencias ambientales")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Como el caso del derrame de crudo en Barrancabermeja (2018), que involucró a autoridades ambientales, sector salud, defensa civil y comunidades para la contención del impacto y atención a la población afectada (ANLA, 2019).
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-33.svg', alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        .row.justify-content-center
          .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img-35.svg' alt="Imagen decorativa")
          .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
            p Para que la coordinación intersectorial en salud ambiental sea realmente exitosa, no basta con reunir a las instituciones; es necesario que exista un marco de trabajo común que oriente las relaciones, defina responsabilidades y promueva la confianza entre los actores. Estos principios funcionan como una guía práctica que facilita la planificación conjunta, fortalece la cooperación y asegura que las acciones desarrolladas sean coherentes, inclusivas y sostenibles en el tiempo. Entre los más relevantes se encuentran:
        .tarjeta.tarjeta--BGC02.p-3.mb-4
          .col.mb-0
            ul.lista-ul--color.mt-2
              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                p.mb-0 #[b Reconocimiento de competencias:] cada sector debe actuar desde su marco normativo y experiencia.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                p.mb-0 #[b Comunicación horizontal:] fomentar el diálogo entre iguales, evitando jerarquías innecesarias.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                p.mb-0 #[b Planeación conjunta y seguimiento compartido:] emplear herramientas comunes como mapas, cronogramas e indicadores.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                p.mb-0 #[b Participación comunitaria activa:] la ciudadanía no solo recibe información, sino que participa en la toma de decisiones y la ejecución de acciones.

              li.d-flex.align-items-start.mb-0
                i.fas.fa-leaf
                p.mb-0 #[b Sostenibilidad:] asegurar que las acciones trasciendan los periodos administrativos y se mantengan en el tiempo.

      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-34.svg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.col-12
        .row(data-aos="fade-down")
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/icono-02.svg' alt="Imagen decorativa")
          .col.mb-3
            p.mb-0 Las acciones intersectoriales permiten una respuesta integral, eficiente y sostenible frente a los retos de la salud ambiental. Al articular recursos y capacidades, no solo se mejora la calidad de vida de la población, sino que se fortalece el tejido social y se generan soluciones más pertinentes y duraderas para el territorio.
   
    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Aplicación normativa en la promoción de entornos saludables

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#E0F6E1")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-36.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La promoción de entornos saludables en Colombia se encuentra respaldada por un marco normativo que establece lineamientos, responsabilidades y mecanismos de acción para las autoridades, las comunidades y el sector privado. Estas normas buscan garantizar condiciones ambientales adecuadas que prevengan enfermedades, fortalezcan la salud pública y promuevan el bienestar colectivo.

    p.mb-5(data-aos="fade-down") La aplicación efectiva de la normatividad implica no solo el conocimiento de las disposiciones legales, sino también su articulación con las políticas públicas y su adaptación a las realidades territoriales. Las autoridades locales desempeñan un papel clave al traducir las leyes en acciones concretas, fiscalizar su cumplimiento y fomentar la corresponsabilidad ciudadana.

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#C2EDC3")
          h2.mb-0 Principales normas y políticas relacionadas con entornos saludables en Colombia:
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Constitución Política de Colombia (1991):] reconoce el derecho a un ambiente sano (Art. 79) y el deber del Estado de protegerlo y prevenir el deterioro ambiental.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Ley 9 de 1979 - Código Sanitario Nacional:] regula aspectos de salubridad pública, calidad del agua, manejo de residuos, control de vectores y saneamiento básico.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Ley 99 de 1993:] crea el Ministerio de Ambiente y establece principios para la gestión ambiental, la participación ciudadana y la coordinación interinstitucional.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Ley 715 de 2001:] define competencias de los entes territoriales en salud pública y saneamiento.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Política Nacional de Salud Ambiental (PNSA):] orienta las acciones para prevenir y controlar riesgos ambientales que afectan la salud.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Plan Decenal de Salud Pública (PDSP) 2022-2031:] integra la promoción de entornos saludables como una de sus estrategias prioritarias.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG01.h-100.p-4(style="background-color:#CCD9F8")
          p.mb-0 #[b Decreto 780 de 2016:] compila las normas del sector salud, incluyendo disposiciones sobre vigilancia sanitaria y ambiental.
    
    p.mb-5(data-aos="fade-down") Pese a contar con un robusto marco legal, la implementación enfrenta desafíos como la limitada capacidad técnica y financiera de algunos municipios, la baja apropiación comunitaria de las normas y la necesidad de fortalecer los mecanismos de seguimiento y sanción.
    
    .row.justify-content-center.mb-0
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-43.svg' alt="Imagen decorativa")
            .col-lg
              .p-4
                p.mb-0 El cumplimiento de la normatividad se potencia cuando las comunidades comprenden su alcance y participan activamente en su vigilancia. Los procesos de educación y sensibilización permiten que las disposiciones legales dejen de verse como simples obligaciones y se conviertan en herramientas para mejorar la calidad de vida y preservar el ambiente.
  


</template>

<script>
export default {
  name: 'Tema2',
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
