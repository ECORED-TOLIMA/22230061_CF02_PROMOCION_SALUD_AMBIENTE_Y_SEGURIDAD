<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La salud pública y la salud ambiental son pilares para el bienestar de cualquier comunidad. Comprender cómo se organiza el sistema, qué capacidades tiene y de qué manera se articulan las instituciones permite actuar con mayor eficacia frente a los desafíos que afectan nuestro entorno y nuestra salud.
        .tarjeta.p-3.mb-3(style="background-color:#E0F6E1; border-radius:none !important")
          .row.justify-content-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/introduccion/icono-01.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 Este contenido ofrece herramientas para diseñar estrategias y planes de acción que respondan a riesgos reales, integrando educación comunitaria, campañas, coordinación intersectorial y el cumplimiento de la normativa vigente.

        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/introduccion/icono.svg' alt="Imagen decorativa")
          .col.mb-3
            p.mb-0 A través de ejemplos prácticos y un enfoque paso a paso, se aprenderá a pasar de la teoría a la acción, con el propósito de promover entornos saludables y mejorar la calidad de vida en el territorio. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/introduccion/img-01.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
