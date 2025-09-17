<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Elaboración maqueta de comprobación
    

    p.mb-4 A continuación, se presenta un video que explica de manera detallada el proceso de elaboración de una maqueta de comprobación para bolsos tipo Messenger, destacando su importancia en la validación de moldes, la optimización del diseño y la garantía de calidad en la producción.

    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DFKajhKy_Jo" title="Elaboración maqueta de comprobación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: Elaboración maqueta de comprobación

</template>

<script>
export default {
  name: 'Tema7',
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
