<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Elaborar patrones para bolso tipo <em>Messenger</em>
    
    p.mb-5 La creación de patrones para un bolso <em>Messenger</em> es un proceso técnico clave en la marroquinería, que transforma una idea o boceto en piezas precisas y reproducibles para la confección. Este trabajo asegura que todas las partes encajen correctamente, optimiza el uso de materiales y garantiza un producto estéticamente equilibrado y funcional.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img29.png', alt='').m-auto
          .col-xl.style___box_8(data-aos="fade-left")
            p.mb-0 El proceso de construcción de un bolso <em>Messenger</em> puede abordarse mediante distintas estrategias constructivas, cada una con ventajas técnicas específicas en términos de precisión, funcionalidad, rendimiento volumétrico y acabado profesional. A continuación, se presentan dos de los métodos más utilizados, descritos con terminología y criterios técnicos de patronaje y confección en marroquinería.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Construcción basada en el frontal
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_8.ajuste___box_8(data-aos="fade-right")
            p.mb-0 Este método utiliza la pieza frontal como base de referencia dimensional y estructural. El desarrollo del patronaje parte del molde del cuerpo delantero, del cual se derivan las mediciones y formas de las demás piezas: espalda, base, fuelles laterales, solapa y componentes complementarios.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img30.png', alt='').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Construcción basada en el fuelle
    
    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_8.ajuste___box_8(data-aos="fade-right")
            p En este enfoque, el fuelle, pieza que conecta el frontal y el fondo del bolso es el punto de partida dimensional y estructural. Aquí, el fuelle determina la altura, profundidad y, en algunos casos, la forma de la base, adaptando a sus medidas las piezas principal (frontal) y secundaria (espalda).
            p.mb-0 Cada sistema ofrece resultados distintos en cuanto a forma, capacidad, estética y complejidad de confección. A través de este componente formativo, el aprendiz desarrollará competencias para diseñar, trazar y construir patrones funcionales y precisos, aplicables a diversas versiones del bolso tipo <em>Messenger</em>.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img31.png', alt='').m-auto
            
</template>

<script>
export default {
  name: 'Tema4',
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
