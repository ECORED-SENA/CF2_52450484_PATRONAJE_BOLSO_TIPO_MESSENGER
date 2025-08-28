<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Patrones, conceptos y tipos en la marroquinería

    .fondo___img_1
      .px-5
        p.mb-5 El desarrollo preciso de patrones o moldes es fundamental en marroquinería, ya que asegura que todas las piezas de un bolso encajen a la perfección. Esta etapa incide directamente en la <strong>calidad</strong>, la <strong>productividad</strong> y la <strong>optimización de materiales</strong>. Un patrón bien diseñado reduce errores, mantiene la uniformidad en series de producción y facilita el ensamblaje del producto final.
        .row.mb-5
          .col-xl-4(data-aos="zoom-in")
            .style___box_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img8.svg', alt="" style="max-width: 100px").m-auto
                h3 Tolerancias de costura
                p.mb-0 Compensan el espacio necesario para uniones y acabados.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img9.svg', alt="" style="max-width: 100px").m-auto
                h3 Tipo de acabado
                p.mb-0 Define si los bordes serán doblados, cortados, reforzados o con ribete.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img10.svg', alt="" style="max-width: 100px").m-auto
                h3 Comportamiento del material
                p.mb-0 Considera rigidez, elasticidad y espesor para evitar alteraciones en el armado y en el uso final del bolso.
    
    <!-- BLOQUE 1 -->
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Importancia y propósito de los patrones en marroquinería

    p.mb-4 En marroquinería, los patrones o moldes son <strong>plantillas planas</strong> que representan cada pieza que compondrá el bolso o accesorio. Su propósito es garantizar:


    .row.align-items-center
      .col-xl
        .row.mb-3
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 120px").m-auto
                h3 Precisión
                p.mb-0 Todas las piezas encajan correctamente.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_6.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img12.svg', alt="" style="max-width: 120px").m-auto
                h3 Simetría
                p.mb-0 El producto final mantiene proporciones armónicas.
        .row
          .col-xl-6(data-aos="zoom-in")
            .style___box_6.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 120px").m-auto
                h3 Diseño
                p.mb-0 Se respeta la estética y funcionalidad original.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img14.svg', alt="" style="max-width: 120px").m-auto
                h3 Facilidad de ensamble
                p.mb-0 Las piezas se ensamblan de forma fluida, minimizando errores y retoques.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img15.png', alt='').m-auto

    p.mb-0.espacio___movil_4 El desarrollo de moldes se basa en el diseño técnico (bocetos, medidas, proporciones) y puede complementarse con <strong>maquetas tridimensionales</strong> para verificar el volumen antes de cortar los materiales definitivos.

    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Clasificación de los patrones en marroquinería
    
    p.mb-5 En la fabricación de bolsos tipo <em>Messenger</em> y otros accesorios, se emplean diversos tipos de patrones que cumplen funciones específicas en el proceso productivo. La correcta selección y diseño de estos patrones permite optimizar el trabajo, mejorar la precisión y garantizar un acabado profesional.

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img16.png', alt='').m-auto
      .col-xl
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Molde base o patrón")
            h4 Molde base o patrón
            p.mb-0 Esqueleto fundamental del bolso, del que derivan tapas, cuerpos, fuelles, bases y asas. Define la estructura y la variante del modelo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Patrón de corte")
            h4 Patrón de corte
            p.mb-0 Sirve para cortar las partes externas como cuerpo principal, tapa, laterales y fondo. Optimiza el corte, incluye tolerancias y referencias para el ensamblaje.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Patrón de forro")
            h4 Patrón de forro
            p.mb-0 Representa las piezas internas, generalmente un poco más pequeñas para lograr un mejor ajuste del forro. Brinda limpieza, comodidad y un acabado adecuado al interior.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Patrón de refuerzo o alma")
            h4 Patrón de refuerzo o alma
            p.mb-0 Piezas internas que aportan rigidez y soporte, ubicadas en la base, los laterales o las manijas. Refuerzan las áreas que reciben carga o tensión.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Patrón de armado")
            h4 Patrón de armado
            p.mb-0 Guías con marcas o dobleces que orientan el montaje. Facilitan el ensamblaje y aseguran la correcta ubicación de las piezas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Patrón de marcación o rayado")
            h4 Patrón de marcación o rayado
            p.mb-0 Plantillas empleadas para señalar costuras, dobleces, centros u otros puntos clave. Garantizan precisión y simetría en los detalles constructivos.

    p.mb-0 Un <strong>patronista profesional</strong> debe elegir y diseñar estos patrones de acuerdo con las necesidades del modelo, tomando en cuenta la <strong>funcionalidad, la estética y el comportamiento del material</strong>. La existencia de un <strong>molde base</strong> y de patrones auxiliares (corte, forro, refuerzo, armado y marcación) es esencial para lograr un proceso productivo eficiente y un bolso de máxima calidad.

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
