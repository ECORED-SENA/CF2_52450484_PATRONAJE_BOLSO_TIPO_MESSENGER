<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Patronaje bolso <em>Messenger</em> construcción a partir del fuelle
    
    .row.align-items-center.m-0.mb-5.style___box_1(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img98.png', alt='').m-auto
      .col-xl.style___box_2
        p.mb-0 En este sistema de patronaje, el desarrollo del molde patrón parte del fuelle, el cual actúa como eje estructural gracias a su geometría curva, que define el contorno y el volumen del bolso. A partir del fuelle se trazan y calculan las dimensiones y perímetros funcionales de las demás piezas estructurales como la base, el delantero (frontal) y el posterior (espaldar), garantizando una correcta proporción y un ensamble preciso entre los componentes del diseño. Este tipo de bolso suele ser más alto que ancho; para el presente ejemplo se trabajarán las siguientes dimensiones: alto <strong>32 cm</strong>, ancho <strong>25 cm</strong> y profundidad <strong>8 cm</strong>.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Elaboración molde patrón 
    
    p.mb-5 Para desarrollar el molde patrón, recorte una cartulina con dimensiones de <strong>12 cm de ancho por 36 cm de largo</strong>. Seguidamente, trace los ejes de simetría horizontal y vertical sobre la cartulina, los cuales servirán como referencia para el trazado. A partir de estos ejes, dibuje el molde del fuelle con una medida de <storng>8 cm de ancho por 32 cm de alto</storng>. En la parte inferior del fuelle, incorpore curvas con radio de <storng>2 cm</storng> en cada extremo, siguiendo el mismo procedimiento aplicado en el modelo anterior.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_13(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img95.svg', alt='').m-auto
          .col-xl
            p.mb-0 <strong>Nota:</strong> Las medidas deben tomarse desde los ejes de simetría hacia el exterior, garantizando así una construcción precisa y equilibrada del molde.
    
    .row.justify-content-center
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 57.
          span Molde patrón bolso <em>Messenger</em> construcción a partir del fuelle
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img99.png', alt='Imagen del molde patrón del bolso Messenger construido a partir del fuelle, pieza curva con ejes de simetría trazados. ').m-auto

    <!-- BLOQUE 1 -->
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Despieces de los diferentes moldes

    p.mb-5 El desarrollo de los moldes principales parte del trazado del recorrido del fuelle, el cual se utiliza como referencia base. A partir de este se definen las dimensiones y contornos de las piezas que conforman el bolso, tales como el frontal, el espaldar y la base. Este procedimiento garantiza la coherencia dimensional y el correcto acople entre las piezas durante el proceso de ensamblaje, siguiendo la misma lógica empleada en el modelo anterior para determinar el frontal.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón fuelle
    
    p.mb-5 El molde del fuelle se deriva del molde patrón base, al cual se le incorporan aumentos específicos según el proceso de confección. Se añade un margen de <strong>8 mm</strong> en todo el contorno para costura, con excepción del borde superior, donde se otorga un aumento de <strong>7 mm</strong> destinado al doblez.

    .row.justify-content-center.mb-3
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 58.
          span Molde fuelle
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img100.png', alt='Ilustración del molde del fuelle con aumentos de costura y doblez aplicados, adaptado a las dimensiones del modelo. ').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón base
    
    p.mb-5 Este molde se obtiene tomando la medida del recorrido del fuelle, específicamente desde la base en el punto donde inician las curvas inferiores. Esta medición permite definir con precisión el ancho de la base. El largo se determina de acuerdo con el diseño; para este caso, <strong>25 cm</strong>. Se aplican aumentos de <strong>8 mm</strong> para costura y <strong>7 mm</strong> para doblar.

    .row.justify-content-center.mb-3
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 59.
          span Molde base
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img101.png', alt='Imagen del patrón de base obtenido desde el recorrido del fuelle, con medidas para ancho y largo, y aumentos definidos.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón frontal y espaldar
    
    p.mb-5 Para obtener el patrón del frontal y del espaldar, se comienza identificando el punto de inicio, que generalmente se ubica en el nacimiento de la curva del fuelle, es decir, desde donde nace la base. A partir de este punto, se mide el recorrido del fuelle sin aumentos en sentido vertical hasta el borde superior para determinar la altura total del frontal.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_1.ajuste___box_1_1(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img102.png', alt='').m-auto
          .col-xl.style___box_2
            p.mb-0 El ancho dependerá del diseño o del criterio del patronista; para este caso, se utilizará una medida estándar de <strong>25 cm</strong>. Una vez definidas las dimensiones finales (<strong>25 cm</strong> de ancho por <strong>33,2 cm</strong> de alto), se recomienda cortar una cartulina ligeramente mayor por ejemplo, de <strong>28 cm</strong> por <strong>36 cm</strong> para trabajar con mayor comodidad.
    
    p.mb-5 Se trazan los ejes de simetría horizontal y vertical, siguiendo el procedimiento ya explicado. A partir de ellos, se construye el rectángulo que define las medidas exactas del frontal y espaldar, asegurando precisión y facilitando posibles ajustes posteriores.

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 60.
          span Construcción frontal espaldar
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img103.png', alt='Ilustración de la construcción del frontal y espaldar del bolso a partir del molde del fuelle, con ejes de simetría y medidas precisas. ').m-auto

    .row.align-items-center.mb-4
      .col-xl
        p Para ubicar la tapa sobre el frontal, se dibuja directamente sobre este molde, tomando como referencia los ejes de simetría. Primero, se traza una línea paralela al eje horizontal a <strong>3 cm</strong> por encima de este. A partir de dicha línea, se dibuja la forma de la tapa, incluyendo una curva de <strong>2,5 cm</strong> de radio en la parte inferior, siguiendo el mismo procedimiento aplicado en el modelo anterior.
        p.mb-0 Para trazar la parte posterior de la tapa (que se une al espaldar), parta de la línea horizontal superior del molde frontal-espaldar y dibuje una línea paralela a <strong>3 cm</strong> por debajo de esta. Sobre la línea recién trazada, marque un punto a <strong>2 cm</strong> del borde vertical y, desde ahí, dibuje una línea diagonal que conecte con la esquina superior. Posteriormente, refleje esta línea en el lado contrario para asegurar la simetría.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img104.png', alt='').m-auto
    
    p.mb-4 Una vez finalizado el trazado, elimine las líneas de construcción para dejar solo las definitivas. Para el cierre de la tapa con broches de imán o monedas imantadas, se marca su ubicación de la siguiente manera:


    .row.align-items-center.mb-5.m-0.style___box_11.ajuste___box_11_1
      .col-xl-7
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desde el eje vertical del molde, trace una línea paralela a 9 cm hacia un lado.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desde el borde inferior de la tapa, trace otra línea paralela a 2,5 cm hacia el interior.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>En el punto de intersección, dibuje un círculo (utilizando compás o la misma pieza del broche) para indicar la ubicación exacta.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Refleje la posición en el lado opuesto para mantener simetría.</li>
        </ul>
      .col-xl-5.espacio___movil_4
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 61.
          span Construcción tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img105.png', alt='Imagen del trazado de la tapa sobre el frontal y espaldar, con ubicación de broches imantados indicada.').m-auto
    
    p.mb-4 En cuanto a los aumentos para este molde:

    .row.mb-4
      .col-xl-4(data-aos="zoom-in")
        .style___box_16.ajuste___box_16.h-100
          p.mb-0 <strong>10 mm</strong> en la parte inferior para unión con la base.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_16.ajuste___box_16.h-100
          p.mb-0 <strong>8 mm</strong> en los laterales para unión con el fuelle.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_16.ajuste___box_16.h-100
          p.mb-0 <strong>7 mm</strong> en la parte superior para permitir el doblado.

    p.mb-4 Estos márgenes aseguran un correcto ensamble y facilitan el proceso de costura.
    
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 62.
          span Aumentos molde  frontal espaldar
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img106.png', alt='Ilustración con aumentos aplicados al molde del frontal y espaldar, diferenciando márgenes para base, fuelle y doblez. ').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón tapa
    
    p.mb-5 Para elaborar este molde, se comienza dibujando sobre una cartulina la parte frontal de la tapa. Luego, se traza una línea paralela a la línea superior, a una distancia igual al ancho del fuelle en este caso, <strong>8 cm</strong>. Desde esta línea, se dibuja otra paralela a <strong>8 mm</strong> de distancia, que corresponde al encoque necesario para permitir la curvatura y el correcto asentamiento de la tapa sobre el cuerpo del bolso.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_8.ajuste___box_8_1(data-aos="fade-right")
            p.mb-0 Desde la línea del encoque, se proyecta y dibuja la parte posterior de la tapa, completando así su forma total de manera precisa. En este diseño, el acabado de los bordes se realiza mediante ribete, el cual puede confeccionarse en sesgo, cinta falla, material sintético o cuero.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img107.png', alt='').m-auto
    
    p.mb-4 Cuando la pieza se elabora en cuero o sintético, se debe medir el contorno total de la tapa y cortar una tira de esa longitud con un ancho de 2 cm. El ancho del ribete puede variar dependiendo del material y del acabado deseado.
    
    .row.justify-content-center
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 63.
          span Patrón tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img108.png', alt='Imagen del patrón de tapa con encoque para ajuste sobre el cuerpo del bolso y líneas para acabado con ribete.').m-auto
      
    <!-- BLOQUE 2 -->
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Despiece moldes internos y forros

    p.mb-5 Para desarrollar los moldes del forro e interiores, se toma como base el molde patrón y los moldes previamente construidos para este bolso. A partir de ellos, se adaptan las formas y medidas necesarias, considerando los acabados y el tipo de confección que se utilizará en el interior del producto.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón contratapa y forro tapa

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img109.png', alt='').m-auto
          .col-xl.style___box_8.ajuste___box_8_3(data-aos="fade-left")
            p.mb-0 Para iniciar, se dibuja la contratapa directamente sobre el molde de la tapa, trazando una línea paralela a 5 cm del borde inferior de la tapa. Esta línea marcará la división entre la contratapa y el forro de la tapa. Posteriormente, se dibujan los moldes en cartulinas independientes; al forro se le agrega un aumento de 1 cm en la parte inferior, con el fin de que reciba adecuadamente la contratapa.

    p.mb-4 Dado que la tapa se trabaja al corte, estas piezas no requieren aumentos adicionales. No obstante, en algunos casos se puede dejar un margen de <strong>2 mm</strong> en los bordes exteriores para facilitar el ensamble, el cual se refila una vez montadas las piezas sobre la tapa.

    p.mb-4 Es importante marcar la ubicación de los broches de imán en la contratapa para asegurar su correcta posición durante el armado.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 64.
          span Patrón Contratapa y forro tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img110.png', alt='Ilustración del patrón de contratapa y forro de tapa, con línea divisoria para asignar materiales diferentes en cada sección.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón boca
    
    p.mb-5 Para obtener el patrón de la boca del bolso, se parte del molde frontal. Sobre este se traza una línea paralela a <strong>3 cm</strong> de la línea superior, lo que define la franja correspondiente a la boca del frontal. A esta pieza se le añaden <strong>4 cm</strong> a cada lado, equivalentes a la mitad del ancho del fuelle, con el fin de permitir su ensamble adecuado.

    .row.align-items-center.mb-5.m-0
      .col-xl.style___box_18(data-aos="zoom-in")
        p.mb-3 En caso de que el fuelle tenga una forma diagonal, se recomienda copiar directamente su contorno para asegurar un mejor encaje y precisión en el armado. Una vez definida la forma, se aplican los aumentos correspondientes:
        .row
          .col-xl-9
            p.mb-2.style___box_17(data-aos="fade-right") <strong>7 mm</strong> en el borde superior, destinados al doblez.
            p.mb-0.style___box_17(data-aos="fade-right") <strong>8 mm</strong> en los tres lados restantes, necesarios para el proceso de confección.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img111.png', alt='').m-auto
    
    p.mb-4 Es importante considerar que los lados verticales se cosen con una tolerancia de <strong>1 cm</strong>. Esto permite que el forro quede ligeramente más pequeño, lo cual favorece su ajuste con el cuerpo del bolso y mejora el acabado final.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 65.
          span Patrón boca
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img112.png', alt='Imagen del patrón de la boca del bolso, franja con medidas ampliadas para unión con frontal y fuelle.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón forro frontal espaldar

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_1.ajuste___box_2(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img113.png', alt='').m-auto
          .col-xl.style___box_2
            p.mb-0 El forro del frontal se construye tomando como referencia la línea de la boca. Desde la parte inferior del frontal-espaldar se une la base, y a su vez, en la parte inferior de la base se integra nuevamente el molde del frontal-espaldar hasta llegar otra vez a la línea de la boca.
    
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                p.mb-0 Este procedimiento se realiza siempre utilizando los moldes sin aumentos, lo que garantiza una correcta estructuración del forro y un ajuste preciso al cuerpo del bolso. En cuanto a los aumentos, se aplica un margen de <strong>8 mm</strong> en todo el contorno, destinado al cosido y vuelto. Sin embargo, la costura se ejecuta a <strong>1 cm</strong>, lo que permite que el forro quede ligeramente más pequeño que el exterior, favoreciendo un mejor asentamiento y un acabado más limpio dentro del bolso.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 66.
                  span Patrón forro frontal espaldar
                figure
                  img(src='@/assets/curso/temas/img114.png', alt='Ilustración del patrón de forro del frontal y espaldar, pieza adaptada para unir con base y boca.' style="max-width: 400px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                p.mb-0 Para la ubicación del bolsillo interno y el organizador vamos a realizarlo de la misma forma que el modelo anterior.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 67.
                  span Ubicación bolsillo interno y organizador
                figure
                  img(src='@/assets/curso/temas/img115.png', alt='Imagen que presenta la ubicación del bolsillo interno y organizador sobre el molde del forro, con líneas de referencia.' style="max-width: 400px")

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                p.mb-0 El forro del bolsillo interno tendrá las mismas dimensiones del modelo anterior.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 68.
                  span Patrón forro bolsillo interno
                figure
                  img(src='@/assets/curso/temas/img116.png', alt='Ilustración del patrón de forro del bolsillo interno, pieza rectangular adaptada a la abertura del bolsillo.' style="max-width: 400px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                p.mb-0 El organizador se construye exactamente igual que el modelo anterior.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 69.
                  span Patrón organizador
                figure
                  img(src='@/assets/curso/temas/img117.png', alt='Imagen del patrón del organizador, con dimensiones y líneas para pliegues que permiten volumen interior.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón forro fuelle            

    p.mb-5 Este patrón se obtiene a partir del molde del fuelle, al cual se le descuenta el ancho correspondiente a la boca, que en este caso es de <strong>3 cm</strong>. Una vez ajustada la medida, se aplican los aumentos necesarios para costura, asignando <strong>8 mm</strong> en todo el contorno.
    
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 70.
          span Patrón forro fuelle
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img118.png', alt='Ilustración del patrón de forro del fuelle, pieza alargada con reducciones en la zona de la boca y márgenes de costura en todo el contorno.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Despiece de patrones de almas            

    p.mb-0 Los moldes de las almas se obtienen siguiendo el mismo procedimiento explicado para el modelo anterior, adaptando las dimensiones según las piezas de este diseño. Es importante que cada molde esté correctamente identificado y referenciado con la misma metodología utilizada en los modelos previos, indicando código, nombre, material, cantidad y dimensiones, para garantizar un control preciso en el corte y ensamblaje.

</template>

<script>
export default {
  name: 'Tema6',
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
