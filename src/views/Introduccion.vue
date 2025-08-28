<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El dominio del patronaje constituye uno de los pilares fundamentales en la elaboración de productos de marroquinería. El trazado y la construcción precisos de patrones no solo determinan la funcionalidad y la presentación de piezas como bolsos, carteras y accesorios, sino que también influyen directamente en la optimización de materiales y en la calidad de los procesos productivos.

    .row.align-items-center.m-0.mb-5.style___box_1(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img1.png', alt='').m-auto
      .col-xl.style___box_2
        p.mb-0 En este componente formativo, el aprendiz explorará las etapas esenciales del patronaje en marroquinería, con énfasis en la elaboración de moldes para el bolso tipo <em>Messenger</em>. Se abordará desde la identificación y el uso adecuado de herramientas clave para el trazado, corte y ajuste de piezas, hasta el estudio de la definición, función y clasificación de los distintos patrones o moldes empleados en la confección de artículos de cuero y materiales afines, considerando conceptos como ejes de simetría y principios de repetición espacial.
    
    .row.align-items-center
      .col-xl
        .row.align-items-center.mb-2
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img2.svg', alt='').m-auto
          .col-xl
            p.mb-0 A lo largo de las actividades, se trabajará de forma práctica en la construcción de patrones para productos de alta demanda, como el bolso tipo <em>Messenger</em>, partiendo de la estructura básica y aplicando técnicas derivadas para lograr diversas formas y acabados. Además, se destacará la relevancia de las maquetas de comprobación como recurso indispensable para verificar la precisión y funcionalidad del patrón antes de iniciar la producción en serie.
        p.mb-0 Este componente está orientado a que, al finalizar, el participante cuente con las competencias necesarias para analizar, diseñar y ajustar patrones de acuerdo con las necesidades del cliente y las tendencias del mercado, garantizando productos de alta calidad y con valor agregado para el sector marroquinero.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img3.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
