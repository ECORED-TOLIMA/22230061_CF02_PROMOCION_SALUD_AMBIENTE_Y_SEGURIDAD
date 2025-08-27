<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo aborda la planificación y ejecución de acciones orientadas a fortalecer la salud ambiental y la seguridad sanitaria, partiendo del conocimiento de la estructura y capacidades del sistema de salud pública, así como de la articulación institucional y la normativa vigente. Se exploran estrategias para la promoción de entornos saludables, incluyendo el diseño de iniciativas educativas comunitarias, la organización de campañas y la coordinación intersectorial, con énfasis en el cumplimiento de la legislación aplicable. Finalmente, se desarrolla el proceso de formulación de un plan de acción en salud ambiental y sanitaria, que contempla la definición de objetivos y metas, la identificación de actividades de manejo de riesgos, la asignación de responsables y recursos, la elaboración de un cronograma con mecanismos de seguimiento, y su integración considerando la valoración de riesgos, las capacidades locales y el marco normativo, garantizando así intervenciones coherentes, efectivas y sostenibles.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se presenta la relación entre el sistema de salud pública, las estrategias de promoción de la salud ambiental y el diseño de planes de acción en salud ambiental y sanitaria, resaltando la articulación institucional, la normativa, la planificación de objetivos, actividades y recursos, así como el seguimiento para prevenir riesgos y promover entornos saludables.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
