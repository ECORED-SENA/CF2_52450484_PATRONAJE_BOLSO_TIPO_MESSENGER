<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Construcción a partir del frontal
    
    p.mb-5 El proceso de patronaje comienza con el <strong>molde frontal</strong>, llamado molde patrón. Este molde principal sirve como punto de partida para definir las dimensiones y proporciones del resto de las piezas del bolso.
    
    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Elaboración del molde patrón con ejes de simetría

    p.mb-5 Las dimensiones indicadas a continuación son orientativas y pueden adaptarse según las necesidades funcionales o creativas del diseño. El modelo propuesto puede presentar variaciones en función de los requerimientos específicos del proyecto.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Preparación del material")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img32.png', alt="").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Preparación del material
            p.mb-0 Recorta una cartulina o papel rígido en un rectángulo de <strong>44 cm x 34 cm.</strong> Este será el soporte para el molde patrón.

      .py-3.py-md-4(titulo="Trazado de los ejes de simetría")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img33.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Trazado de los ejes de simetría
            h5.mb-3 Eje vertical:
            <ul class="fa-ul estilo___ul mb-4">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Coloca la cartulina en posición horizontal <strong>(44 cm de ancho x 34 cm de alto)</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Marca el punto medio del borde superior (a los <strong>22 cm</strong>) y repite en el borde inferior.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Une ambos puntos con la regla y, con la cuchilla, traza suavemente la línea para obtener el eje vertical.</li>
            </ul>
            h5.mb-3 Eje horizontal:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Dobla la cartulina por el eje vertical.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Marca el punto medio del borde lateral (a los <strong>17 cm</strong>) con el punzón para que quede reflejado en ambos lados.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desdobla y une las marcas con la regla y la cuchilla, obteniendo así el eje horizontal.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Aplicaciones y recomendaciones
    
    p.mb-5 Los ejes de simetría actúan como referencias centrales para <strong>distribuir de forma equilibrada todos los elementos del molde</strong>, asegurando proporciones correctas y facilitando la construcción de piezas simétricas. Si se requieren medidas distintas para otros modelos, aplica el mismo procedimiento para recalcular los puntos centrales, manteniendo la precisión y la simetría en cualquier formato.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 15.
          span Cartulina con ejes de simetría
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img34.png', alt='Fotografía de cartulina rectangular colocada horizontalmente con ejes vertical y horizontal trazados, lista para el diseño del patrón frontal del bolso Messenger.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Trazado del contorno frontal a partir de los ejes de simetría
    
    p.mb-5 Con los ejes ya definidos, se procede a ubicar los puntos clave y formar el contorno del frontal.

    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left").mb-5
      .row(titulo="Ubicación del primer punto de referencia").ajuste-cajaAcordion
        p.mb-3 Sobre el eje vertical, mide 20 cm hacia la derecha desde el centro. Desde el eje horizontal, mide 15 cm hacia arriba y marca. La intersección de ambas medidas define el primer punto en el cuadrante superior derecho. 
        .row.justify-content-center.mb-3
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 16.
              span Primer punto para construcción del frontal
            figure
              img(src='@/assets/curso/temas/img35.png', alt='Ilustración que indica el primer punto de referencia para la construcción del frontal, a partir de mediciones desde los ejes de simetría.').m-auto
      .row(titulo="Transferencia precisa por simetría").ajuste-cajaAcordion
        p.mb-3  Dobla la cartulina por el eje vertical y, con un punzón, transfiere el punto al lado izquierdo, asegurando que quede perfectamente simétrico. Al desdoblar la cartulina, se obtienen dos puntos superiores idénticos, cada uno a 15 cm del eje horizontal y 20 cm desde el centro hacia los laterales. 
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 17.
              span Segundo punto
            figure
              img(src='@/assets/curso/temas/img36.png', alt='Imagen del segundo punto de referencia ubicado de forma simétrica en el patrón frontal.').m-auto
      .row(titulo="Marcado de los puntos inferiores").ajuste-cajaAcordion
        p.mb-3 Dobla la cartulina por el eje horizontal y, con el punzón, transfiere ambos puntos superiores a la parte inferior. Al desdoblar, se obtienen cuatro puntos distribuidos de manera simétrica respecto a los dos ejes. 
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 18.
              span Tercer y cuarto punto
            figure
              img(src='@/assets/curso/temas/img37.png', alt='Imagen de los puntos inferior derecho e izquierdo localizados en el patrón, equidistantes desde los ejes para asegurar simetría.').m-auto
      .row(titulo="Delineado del contorno").ajuste-cajaAcordion
        p.mb-3 Une los cuatro puntos con líneas rectas o curvas suaves para definir el contorno general del frontal.
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 19.
              span Contorno del frontal
            figure
              img(src='@/assets/curso/temas/img38.png', alt='Ilustración del contorno del frontal del bolso con líneas rectas y curvas suaves conectando los puntos de referencia.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Definición y trazado de las curvas inferiores del frontal
    
    p.mb-5 Una vez definido el contorno, se ajustan las esquinas para dar una transición suave entre laterales y base.

    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left").mb-5
      .row(titulo="A. Marcación de los puntos guía").ajuste-cajaAcordion
        p.mb-3 Ubícate en el punto inferior derecho del contorno. Con el compás ajustado a un radio de 2,5 cm, colócalo en el vértice y dibuja dos pequeños arcos: uno hacia la línea vertical (lateral) y otro hacia la línea horizontal (base). Marca ambos puntos de intersección, que servirán como guías para la curva.
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 20.
              span Puntos para construcción de la curva
            figure
              img(src='@/assets/curso/temas/img39.png', alt='Ilustración que indica el primer punto de referencia para la construcción del frontal, a partir de mediciones desde los ejes de simetría.').m-auto
      .row(titulo="B. Determinación del centro y trazado de la curva").ajuste-cajaAcordion
        p.mb-3 Coloca el compás en cada punto guía y dibuja arcos que se crucen en el interior del patrón. El punto de cruce será el centro geométrico de la curva. Desde este centro, traza la curva definitiva que una de forma suave y simétrica el lateral con la base. Repite el proceso en la esquina inferior izquierda para mantener la simetría.
        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.mb-3
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 21.
                  span Mediatriz
                figure
                  img(src='@/assets/curso/temas/img40.png', alt='Ilustración que muestra la mediatriz y la ubicación del centro geométrico de la curva a trazar en la base del frontal.').m-auto
              .col-xl-6.mb-3.espacio___movil_3
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 22.
                  span Curva del frontal
                figure
                  img(src='@/assets/curso/temas/img41.png', alt='Imagen de curva inferior definida y trazada con compás en el patrón frontal del bolso.').m-auto
      .row(titulo="C. Simetría de la curva al lateral opuesto").ajuste-cajaAcordion
        p.mb-3 Dobla el molde patrón cuidadosamente por el eje vertical, asegurándote de que ambos ejes coincidan. Con una carretilla de modistería, un punzón o mediante una ligera incisión con cuchilla, transfiere el contorno de la curva recién trazada hacia el lado contrario. Este paso garantiza que la curvatura sea idéntica en ambos extremos inferiores del frontal. 
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 23.
              span Simetría de la curva
            figure
              img(src='@/assets/curso/temas/img42.png', alt='Ilustración del proceso de doblado y transferencia de la curva a través del eje vertical para obtener simetría en ambos lados.').m-auto
      .row(titulo="D.	Replicación de la curvatura en el sector superior (si aplica)").ajuste-cajaAcordion
        p.mb-3 Si el diseño del bolso requiere curvas en las esquinas superiores, repite el mismo procedimiento tomando como referencia los puntos superiores del patrón. Realiza la simetría cruzando el eje horizontal para asegurar que las cuatro esquinas presenten curvaturas homogéneas y proporcionales.
    
    p.mb-5 El patrón frontal queda con las curvas definidas y perfectamente simétricas, ya sea en dos o en las cuatro esquinas, según el diseño. Esto garantiza precisión en el patronaje y facilita un acabado uniforme y profesional en la confección.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Dibujo de la tapa

    .row.align-items-center.m-0.mb-5.style___box_9(data-aos="zoom-in")
      .col-xl.style___box_10
        p.mb-0 La tapa se traza tomando como referencia la parte superior del cuerpo frontal. Su diseño puede ser recto, curvo o con ángulos, pero siempre debe cubrir por completo la boca del bolso y permitir un cierre seguro. También se deben marcar los puntos de sujeción a la espalda y el sistema de cierre elegido (broche, velcro, hebilla, etc.).
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img43.png', alt='').m-auto
    
    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 Para el modelo propuesto, se dibuja primero una línea horizontal a <strong>22 cm</strong> del borde superior del frontal. A partir de esta línea se construye la forma curva de la tapa, empleando un radio de <strong>2,5 cm</strong> en las esquinas, siguiendo el mismo procedimiento utilizado para las curvas de la base. Esto proporciona un acabado estético y funcional que facilita el cierre del bolso.
        .row.align-items-center.mb-3
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img44.svg', alt='').m-auto
          .col-xl
            p.mb-0 Para definir la parte posterior de la tapa la sección que se conecta con el espaldar se dibuja una línea horizontal a <strong>3 cm</strong> del borde superior del patrón, paralela a dicho borde.
        p.mb-0 Sobre esta línea, tomando como referencia el borde vertical del patrón, se mide <strong>3 cm</strong> hacia el interior y se marca un punto. Desde la esquina superior del frontal se traza una línea diagonal hasta este punto, estableciendo el ángulo de inserción de la tapa en el espaldar.
      .col-xl-auto.espacio___movil_4
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 24.
          span Trazado de la tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img45.png', alt='Imagen del trazado de la tapa del bolso sobre el patrón frontal, utilizando curvas y líneas de referencia para su forma.').m-auto
    
    p.mb-5 Una vez definida la diagonal, se realiza el proceso de simetría para trasladarla al lado opuesto, asegurando una forma equilibrada y proporcional. Con esto se completa el diseño de la tapa, garantizando tanto su funcionalidad como su armonía estética.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img46.png', alt='').m-auto
          .col-xl
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 25.
              span Parte posterior de la tapa
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img47.png', alt='Ilustración de la parte posterior de la tapa, con líneas y medidas para su unión al espaldar del bolso.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Dibujar las correas
    
    p.mb-5 Con la tapa finalizada, el siguiente paso es marcar la ubicación y forma de las correas que servirán para el sistema de cierre. Para este modelo se utilizará una hebilla de <strong>1 pulgada</strong>, por lo que el ancho de la correa debe ser ligeramente inferior, fijándose en <strong>2,4 cm</strong>. Esta medida puede variar según el herraje seleccionado; por eso es imprescindible contar con todos los herrajes antes de iniciar el modelado para verificar sus dimensiones reales. El trazado se realiza en cuatro pasos:

    .row.justify-content-center.mb-5
      .col-xl-10
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Definición del ancho de la correa")
            h4 Definición del ancho de la correa
            p.mb-0 Desde el eje vertical de simetría del patrón de la tapa, traza una línea paralela a 12 cm hacia un lado. Luego, dibuja una segunda línea paralela a 2,4 cm de la anterior; la distancia entre ambas determina el ancho de la correa.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Definición del largo de la correa")
            h4 Definición del largo de la correa
            p.mb-0 Traza dos líneas horizontales paralelas a la base inferior de la tapa: una a 5 cm hacia arriba y otra a 7 cm hacia abajo. Este segmento establece la longitud visible de la correa en el patrón.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Curvas inferiores")
            h4 Curvas inferiores
            p.mb-0 Para un acabado más estilizado, redondea suavemente las esquinas inferiores con un radio de 1 cm, evitando ángulos rígidos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Limpieza y simetría")
            h4 Limpieza y simetría
            p.mb-0 Una vez definida la primera correa, elimina las líneas de construcción sobrantes. Luego, aplica el proceso de simetría respecto al eje vertical para trasladar la correa al lado opuesto de la tapa, garantizando una ubicación equilibrada y estética.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 26.
          span Trazado correas tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img48.png', alt='Imagen de correas dibujadas sobre la tapa del patrón, con líneas paralelas que definen ancho y largo, además de curvas redondeadas en extremos. ').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Dibujar el bolsillo frontal
    
    p.mb-5 Con las correas ya definidas, se pasa al diseño del <strong>bolsillo frontal</strong>, elemento que aporta funcionalidad y estética, permitiendo guardar objetos pequeños y de acceso rápido. El trazado se desarrolla en los siguientes pasos:

    .row.justify-content-center.mb-5
      .col-xl-10
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Definición del ancho del bolsillo")
            h4 Definición del ancho del bolsillo
            p.mb-0 Desde el eje vertical de simetría del cuerpo frontal, traza dos líneas paralelas a 18 cm hacia cada lado. Este trazado genera un ancho total de 36 cm para el bolsillo, equilibrado respecto al centro del frontal.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Determinación del alto del bolsillo")
            h4 Determinación del alto del bolsillo
            p.mb-0 Tomando como referencia el eje horizontal del patrón, traza una línea a 10 cm hacia arriba y otra a 12 cm hacia abajo. Estas líneas definen la altura total del bolsillo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Curvatura inferior")
            h4 Curvatura inferior
            p.mb-0 En cada esquina inferior del bolsillo, dibuja una curva con radio de 2,5 cm, siguiendo el mismo procedimiento aplicado a las esquinas del frontal y de la tapa. Esta curva suaviza el diseño, mejora la estética y facilita el montaje.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Terminación superior")
            h4 Terminación superior
            p.mb-0 La parte superior se mantiene en ángulo recto, proporcionando un borde limpio y firme que facilita la confección e instalación de cierres, vistas o remates.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Limpieza final")
            h4 Limpieza final
            p.mb-0 Una vez definidos todos los límites, elimina las líneas de construcción sobrantes para dejar el contorno definitivo del bolsillo, listo para su corte y confección.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 27.
          span Trazado bolsillo frontal
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img49.png', alt='Ilustración del bolsillo frontal sobre el patrón, con dimensiones y curvaturas indicadas para su confección.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Dibujar hebillero en bolsillo frontal
    
    p.mb-5 Con el bolsillo frontal definido, se marca la ubicación del <strong>hebillero</strong>, pieza clave para el cierre y ajuste del bolso.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ubicación sobre la correa
                p.mb-0 En cada correa dibujada previamente en la tapa, traza dos líneas paralelas al borde inferior: la primera a 1,5 cm del borde y la segunda a 4 cm del mismo borde. Este espacio delimita la zona donde se fijará el hebillero.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img51.png', alt='').m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Simetría
                p.mb-0 Repite el procedimiento en la correa del lado opuesto, utilizando el eje vertical de simetría como referencia para garantizar una ubicación exacta y un diseño equilibrado.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Consideraciones técnicas
                p.mb-0 Las medidas deben adaptarse al tipo de hebilla seleccionada. Es recomendable contar con los herrajes físicos al momento del trazado para comprobar proporciones y asegurar la correcta inserción y fijación del hebillero durante la confección.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.png', alt='' ).m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Dibujar el bolsillo de la tapa
    
    p.mb-5 Finalmente, se incorpora el <strong>bolsillo superior de la tapa</strong>, diseñado como compartimento funcional para guardar objetos de uso frecuente. Puede llevar cremallera visible o cubierta, según el estilo del bolso y las preferencias del usuario.

    .row.justify-content-center.mb-5
      .col-xl-10
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ubicación del bolsillo")
            h4 Ubicación del bolsillo
            p.mb-0 Desde la línea superior del frontal (ya establecida como referencia en la tapa), traza dos líneas horizontales paralelas: la primera a 4 cm hacia abajo desde el borde superior y la segunda a 1,4 cm debajo de la anterior. Este espacio define el alto del canal donde se instalará la cremallera. En este ejemplo se usa una cremallera número 6; si el ancho es distinto, se ajustará la medida de acuerdo con el herraje.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Delimitación lateral del bolsillo")
            h4 Delimitación lateral del bolsillo
            p.mb-0 Desde el borde vertical de la tapa, traza una línea paralela a 3 cm hacia el interior, indicando el inicio del terminal de la cremallera. Con el eje vertical de simetría, refleja esta medida hacia el lado opuesto para garantizar que la cremallera quede perfectamente centrada.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recomendaciones técnicas")
            h4 Recomendaciones técnicas
            p.mb-0 Es indispensable contar con la cremallera y sus componentes físicos durante el trazado para verificar que las dimensiones se ajusten al modelo elegido. Esto asegura un funcionamiento óptimo y acabados precisos en la confección final.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 28.
          span Trazado bolsillo tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img54.png', alt='Imagen que presenta el diseño del bolsillo superior con cremallera sobre la tapa del patrón, mostrando ubicación y medidas. ').m-auto
    
    .row.justify-content-center.mb-5.m-0
      .col-xl-10.style___box_11(data-aos="zoom-in")
        p.mb-0 Con este paso, se completa la definición del molde patrón, dejando establecidas todas las piezas y elementos necesarios para el desarrollo del bolso tipo <em>Messenger</em>.
    
    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 29.
          span Molde patrón definido
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img55.png', alt='Fotografía del molde patrón final del bolso tipo Messenger, con todas las piezas y elementos dibujados.').m-auto
        
    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Despieces de los diferentes moldes
    
    p.mb-5 Con el molde patrón definido y las piezas principales dibujadas, se procede al <strong>despiece</strong> de cada uno de los componentes que conforman el bolso <em>Messenger</em>. Este proceso consiste en individualizar cada parte para su posterior trazado, corte y confección, comenzando por la <strong>base del bolso</strong>.

     .row.justify-content-center.mb-5
      .col-xl-10
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Obtención de medidas")
            h4 Obtención de medidas
            p.mb-0 Con una regla o cinta métrica, mide el perímetro del patrón frontal, iniciando desde el punto donde comienzan las curvas inferiores. Esta medida corresponde al largo de la base.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Determinación del ancho")
            h4 Determinación del ancho
            p.mb-0 Define el ancho de acuerdo con la capacidad deseada del bolso. En este ejemplo se asigna un ancho de 10 cm, ajustable según necesidades funcionales o estéticas del diseño.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Asignación de márgenes de costura")
            h4 Asignación de márgenes de costura
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>En la línea de unión entre la base y las piezas del frontal y espaldar, deja un aumento de 8 mm para garantizar un ensamblaje preciso.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>En las líneas de unión con los fuelles o laterales, asigna un aumento de 7 mm destinados al doblado, lo que facilita un acabado limpio.</li>
            </ul>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Adaptaciones posibles")
            h4 Adaptaciones posibles
            p.mb-0 Los márgenes pueden modificarse según el tipo de material y el método de ensamblaje utilizado.
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 30.
          span Patrón de la base o fondo
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img56.png', alt='Ilustración del patrón de la base o fondo del bolso Messenger, con forma rectangular, medidas indicadas y aumentos de costura marcados en los bordes.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón fuelle
    
    p.mb-5 Con la base lista, se procede a elaborar el molde del <strong>fuelle</strong>, pieza que conforma los laterales del bolso y que une el frontal con el espaldar. Para obtenerlo, se mide el recorrido del frontal desde el nacimiento de la curva inferior hasta la parte superior; esta medida define el largo del fuelle.

    .row.justify-content-center(data-aos="zoom-in")
      .col-xl-10
        .row.align-items-center.m-0.mb-5.style___box_7.ajuste___box_7
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img57.png', alt='').m-auto
          .col-xl
            p.mb-0 El ancho estándar se establece en <strong>10 cm</strong>, igual al de la base. Sin embargo, si el diseño busca una silueta más estilizada, el fuelle puede adoptar forma trapezoidal: en ese caso, se mantiene el ancho de 10 cm en la base y se reduce a <strong>8 cm</strong> en la parte superior o boca del bolso.

        p.mb-5 Una vez definida la forma, se asignan los márgenes de costura:
    
    .row.mb-5
      .col-xl-4(data-aos="zoom-in")
        .style___box_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                img(src='@/assets/curso/temas/img58.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 8 mm en los laterales que se unirán con el frontal y el espaldar.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                img(src='@/assets/curso/temas/img59.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 1 cm en el borde inferior para la unión con la base.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/img60.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 7 mm en la parte superior, destinados al doblado o a una terminación limpia en la boca del bolso.
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 31.
          span Patrón del fuelle
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img61.png', alt='Imagen del patrón del fuelle del bolso, pieza lateral con dimensiones rectangulares y aumentos para costura y doblado, diseñada para aportar profundidad y capacidad al bolso Messenger.').m-auto
    
    .row.justify-content-center.mb-4
      .col-xl-10
        .style___box_11.mb-4.ajuste___box_11(data-aos="zoom-in")
          p.mb-0 Además de definir la forma del fuelle, es fundamental marcar la ubicación de la <strong>chapeta</strong> que sostendrá el cuadrante para la correa. En este modelo se empleará un cuadrante de <strong>1¼ pulgadas</strong> (aproximadamente 3 cm), por lo que la chapeta tendrá un ancho de <strong>2,8 cm</strong> y un largo de <strong>4 cm</strong> para permitir un ajuste seguro y estético. Para dibujar la chapeta en el molde del fuelle:

        p.mb-0 Traza el <strong>eje vertical</strong> en el centro del molde.
    
    .row.justify-content-center.mb-5.m-0.style___box_11.ajuste___box_11_1
      .col-xl-10
        .row.align-items-center
          .col-xl-7
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desde el borde superior del fuelle (sin incluir el aumento para doblado), dibuja una línea paralela a <strong>3 cm</strong> hacia abajo.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desde esa línea, marca otra paralela a <strong>4 cm</strong> más abajo; este tramo define el largo de la chapeta.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>A partir del eje vertical, mide <strong>1,4 cm</strong> hacia cada lado y dibuja líneas paralelas para obtener el ancho de <strong>2,8 cm</strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Borra las líneas de construcción sobrantes, dejando visible únicamente el rectángulo final que representa la chapeta.</li>
            </ul>
          .col-xl-5.espacio___movil_4
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 32.
              span Trazado chapeta en fuelle
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img62.png', alt='Imagen del patrón del fuelle del bolso, pieza lateral con dimensiones rectangulares y aumentos para costura y dobladoIlustración del trazado de chapeta sobre el molde del fuelle, con medidas precisas para sostener el cuadrante de la correa, incluyendo ubicación central y márgenes definidos.').m-auto
    
    .row.justify-content-center.mb-5
      .col-xl-10
        p.mb-0 Este marcado asegura la ubicación precisa del refuerzo para el herraje, optimizando la resistencia estructural y facilitando el montaje durante la confección.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón tapa
    
    p.mb-5 La elaboración del patrón de tapa es un proceso clave para garantizar que el cierre del bolso sea funcional, estético y se adapte perfectamente a la estructura general. A partir de la base y los fuelles previamente definidos, se realizan mediciones y ajustes que permiten obtener un molde definitivo, listo para guiar el corte y montaje de las piezas.

    .row.align-items-center.mb-5
      .col-xl-6
        .row.mb-2.m-0(data-aos="fade-right")
          .col-lg-4.style___box_3.ajuste___box_3
            p.mb-0 Traslado del molde
          .col-lg.style___box_3_1.ajuste___box_3_1
            p.mb-0 Pasa la forma dibujada en el molde patrón a una cartulina, cuidando que los contornos sean precisos.
        .row.mb-2.m-0(data-aos="fade-right")
          .col-lg-4.style___box_3.ajuste___box_3
            p.mb-0 Marcado del ancho del fuelle
          .col-lg.style___box_3_1.ajuste___box_3_1
            p.mb-0 Desde la parte superior del patrón, mide y traza una línea paralela a <strong>8 cm</strong> (ancho del fuelle).
        .row.mb-2.m-0(data-aos="fade-right")
          .col-lg-4.style___box_3.ajuste___box_3
            p.mb-0 Generación del encoque
          .col-lg.style___box_3_1.ajuste___box_3_1
            p.mb-0 Desde la línea anterior, traza otra línea paralela a <strong>8 mm</strong> para formar el encoque, que permitirá la curvatura y correcto asentamiento de la tapa sobre el bolso.
        .row.mb-2.m-0(data-aos="fade-right")
          .col-lg-4.style___box_3.ajuste___box_3
            p.mb-0 Dibujo de la parte posterior
          .col-lg.style___box_3_1.ajuste___box_3_1
            p.mb-0 Proyecta y dibuja la parte posterior de la tapa partiendo desde la última línea trazada, completando así la forma total.
        .row.mb-2.m-0(data-aos="fade-right")
          .col-lg-4.style___box_3.ajuste___box_3
            p.mb-0 Marcado de accesorios
          .col-lg.style___box_3_1.ajuste___box_3_1
            p.mb-0 Señala en el molde la ubicación exacta de las correas y el bolsillo, siguiendo las medidas del trazado inicial para garantizar coherencia en el montaje final.
      .col-xl-6(data-aos="fade-left").espacio___movil_4
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 33.
          span Construcción tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img63.png', alt='Imagen de la construcción de la tapa del bolso, trasladada desde el molde patrón a una cartulina, con líneas para el encoque y ajuste de curvatura sobre el cuerpo del bolso.').m-auto

    p.mb-5.espacio___movil_2 La incorporación del bolsillo en la tapa permite dividirla en dos secciones a partir de las líneas que delimitan dicho bolsillo. A cada una de estas piezas se le debe aplicar un aumento de 7 mm en todo su contorno, con el fin de facilitar el doblez y asegurar una correcta terminación durante el proceso de confección.

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 34.
          span Sección de tapa y aumentos
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img64.png', alt='Ilustración de la sección de la tapa dividida en dos partes para incorporación de bolsillo, con aumentos de costura de 7 mm en todo el contorno.').m-auto
    
    .row.align-items-center.mb-5.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img65.png', alt='').m-auto
      .col-xl.style___box_12(data-aos="zoom-in")
        p.mb-0 Por último, se dibujan el molde de los terminales de cremallera, los cuales se utilizan para evitar que la cremallera llegue hasta el borde de la tapa, brindando así un mejor acabado. Para su elaboración, se toma como base el recuadro del bolsillo previamente dibujado en el molde patrón, cuyas dimensiones son de 3 cm por 1.4 cm. A este rectángulo se le agregan aumentos de 1 cm en las líneas horizontales para el armado, y de 7 mm en las líneas verticales para el doblez.
      .col-xl-4.espacio___movil_4
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 35.
          span Terminal cremallera bolsillo tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img66.png', alt='Ilustración de la sección de la tapa dividida en dos partes para incorporación de bolsillo, con aumentos de costura de 7 mm en todo el contorno.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").espacio___movil_1
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón bolsillo frontal
    
    p.mb-5 Para elaborar este molde, se copia del molde patrón el bolsillo, el cual servirá como guía para determinar el recorrido del fuelle. Sin aplicar aumentos, se mide el perímetro del bolsillo para establecer el largo del fuelle. El ancho del fuelle dependerá del diseño; en este caso, será de 3 cm.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 36.
          span Molde frontal y fuelle bolsillo
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img67.png', alt='Ilustración del molde del bolsillo frontal y su fuelle, representando dimensiones y contornos exactos antes de aplicar aumentos.').m-auto
    
    p.mb-5 Posteriormente, se aplican los aumentos correspondientes: al molde del bolsillo se le da un aumento de 8 mm en el contorno que se unirá con el fuelle y 7 mm en la parte superior para el doblez. En el caso del fuelle, se da un aumento de 8 mm en la línea que lo une con el bolsillo y 7 mm en las partes superiores para el doblez, la parte que se une con el frontal se le da aumento de doblez.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 37.
          span Molde frontal y fuelle bolsillo con aumentos
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img68.png', alt='Imagen del molde del bolsillo frontal y su fuelle con aumentos de costura aplicados, listos para el corte en material definitivo.').m-auto
        
        .row.align-items-center.m-0.style___box_13(data-aos="zoom-in").espacio___movil_4
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img69.svg', alt='').m-auto
          .col-xl
            p.mb-0 Recuerde que este bolsillo lleva un hebillero, por lo tanto, su posición debe quedar debidamente marcada en el molde.
      
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón correa tapa
    
    p.mb-5 El siguiente molde corresponde a la <strong>correa de la tapa</strong>. Para elaborarlo, se toma la forma de la correa directamente del molde patrón y se trasladan sus dimensiones a una cartulina. En todo el contorno se aplica un aumento de <strong>7 mm</strong>, destinado al doblez durante la confección. A continuación, se marcan los puntos de perforación que permitirán el ajuste con la hebilla, asegurando su correcta ubicación y funcionalidad:
    
    .row.justify-content-center.mb-5.m-0
      .col-xl-10
        .row.align-items-center.style___box_11.ajuste___box_11_1
          .col-xl-7
            <ul class="fa-ul estilo___ul mb-4">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>La primera perforación se sitúa a <strong>6,5 cm</strong> del borde inferior de la correa.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>A partir de esta, se trazan dos perforaciones adicionales: una hacia arriba y otra hacia abajo, cada una separada <strong>1,5 cm</strong> de la anterior.</li>
            </ul>
            p.mb-0.style___box_14(data-aos="zoom-in") Este molde se corta en <strong>4 unidades</strong>, ya que el forro o la parte posterior de la correa debe realizarse con el mismo material principal para mantener resistencia y coherencia estética en el diseño.
          .col-xl-5.espacio___movil_4
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 38.
              span Patrón correa tapa
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img70.png', alt='Imagen del molde del bolsillo frontal y su fuelle con aumentos de costura aplicados, listos para el corte en material definitivo.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón hebillero
    
    p.mb-5 El <strong>hebillero</strong> se obtiene a partir del molde patrón, copiando la silueta previamente definida. Esta pieza se traza al doble de su tamaño final para permitir su posterior doblado, y se le adicionan aumentos de <strong>7 mm</strong> en los lados más largos y en la parte inferior, facilitando el remate limpio durante la confección.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center
          .col-xl-6(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img71.png', alt='').m-auto
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 39.
              span Patrón hebillero
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img72.png', alt='Imagen del patrón del hebillero, pieza rectangular con aumento de doblez en lados largos e inferior, y perforación central para aguijón de hebilla. ').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").espacio___movil_2
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Chapeta del fuelle
    
    p.mb-5 La <strong>chapeta del fuelle</strong> es la pieza que, mediante un cuadrante, sostiene la correa larga que permite llevar el bolso al hombro. Para obtener su molde, se toma la figura previamente dibujada sobre el fuelle y se duplica (al doble de su tamaño final). A continuación, se le adicionan aumentos de 7 mm en todo el contorno, excepto en la parte superior, lo que permite un ajuste adecuado durante el montaje y asegura un acabado limpio y resistente en la confección.

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 40.
          span Patrón chapeta
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img73.png', alt='Ilustración del patrón de chapeta del fuelle, pieza rectangular duplicada con aumentos de costura para su fijación.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón correa
    
    .row.align-items-center.m-0.mb-5.style___box_7.ajuste___box_7(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img74.png', alt='').m-auto
      .col-xl
        p Con la chapeta definida, se pasa a la elaboración del molde de la <strong>correa</strong>, cuyo ancho debe coincidir con el herraje utilizado. En este caso, el herraje es de <strong>1¼ pulgadas</strong> (aproximadamente 3 cm), por lo que el ancho de la correa será de <strong>2,8 cm</strong>, igual que el de la chapeta. Al tratarse de una correa graduable, su largo puede variar según el diseño y la funcionalidad requerida; para este modelo se ha definido un largo de <strong>150 cm</strong>. En todo el contorno se añade un aumento de <strong>7 mm</strong> destinado al doblez durante la confección.
        p.mb-0 En muchos casos, la correa se elabora en reata de nailon o algodón, incorporando únicamente terminales en el material principal del bolso para lograr un mejor acabado en las puntas y conservar la coherencia estética con el resto de la pieza.
    
    .row.align-items-center.mb-5
      .col-xl-4
        h4.mb-3.caja-titulos-cuarto-nivel(data-aos="fade-right") Despiece moldes internos y forros  
        p.mb-0 Tanto los moldes internos como los del forro se obtienen a partir del molde patrón, adaptándolos según las necesidades del diseño y el tipo de acabado deseado.
      .col-xl-8.espacio___movil_4
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 41.
          span Patrón correa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img75.png', alt='Imagen del patrón de correa larga ajustable, con medidas para ancho y largo, y aumentos de costura en todo el contorno.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Molde boca y forro frontal
    
    p.mb-5 Para obtener el molde del frontal, se copia directamente del patrón base. En la parte superior, se traza una línea paralela a 3 cm del borde, dividiendo el molde en dos secciones:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row
          .col-xl-8
            p.mb-2.style___box_15(data-aos="fade-right") Boca, que se corta en el material principal.
            p.mb-5.style___box_15(data-aos="fade-right") Forro, que suele elaborarse en textil o cuero de cerdo, según el diseño.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 42.
          span Molde Boca y forro frontal
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img76.png', alt='Ilustración del molde de la boca y forro frontal del bolso, dividido en dos secciones, con líneas de referencia para unión y aumentos correspondientes.').m-auto
    
    .row.align-items-center.mb-5
      .col-xl-7
        .style___box_12.mb-3(data-aos="fade-right")
          p.mb-3 A continuación, se aplican los aumentos:
          <ul class="fa-ul estilo___ul mb-0">
            <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>En el frontal, <strong>8 mm</strong> en todo el contorno, ya que se unirá a los fuelles, la base y la boca.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>En el forro, costura a <strong>1 cm</strong> en lugar de 8 mm para que quede ligeramente más pequeño y facilitar el ensamblaje o enchuspado. Es importante marcar los <strong>ejes de simetría</strong> en este patrón.</li>
          </ul>
        figure.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img77.png', alt='').m-auto
      .col-xl-5.espacio___movil_4
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 43.
          span Molde Boca y forro frontal
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img78.png', alt='Ilustración del molde de la boca y forro frontal del bolso, dividido en dos secciones, con líneas de referencia para unión y aumentos correspondientes.').m-auto
    
    p.mb-4.espacio___movil_5 En este molde también se marca la ubicación del <strong>bolsillo interno y el organizador</strong>. Para el bolsillo interno:
    
    .row.mb-5
      .col-xl-4(data-aos="zoom-in")
        .style___box_16.h-100
          p.mb-0 Traza una línea paralela a <strong>2 cm</strong> del borde superior.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_16.h-100
          p.mb-0 Desde esta, otra paralela a <strong>1,4 cm</strong> hacia abajo (canal para cremallera o abertura del bolsillo).
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_16.h-100
          p.mb-0 Desde el eje vertical, mide <strong>10 cm</strong> hacia cada lado para definir el ancho del bolsillo.
    
    .row.justify-content-center.mb-5.m-0
      .col-xl-10
        .row.align-items-center.mb-5.style___box_11.ajuste___box_11_2
          .col-xl-7
            p.mb-4 Una vez dibujado, se obtienen los moldes complementarios:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Ventana para cremallera</strong>: al rectángulo del bolsillo se le añade <strong>1 cm</strong> en todo el contorno. Se corta en salpa, odena, cartulina o cartón.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Forro del bolsillo</strong>: ancho de la boca + <strong>1 cm</strong> a cada lado y altura de <strong>20 cm</strong> (o menor que la distancia entre la línea inferior del bolsillo y el borde inferior del forro frontal). Se corta al doble para garantizar volumen y funcionalidad.</li>
            </ul>
          .col-xl-5.espacio___movil_4
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 44.
              span Trazado Bolsillo interno y molde ventana de cremallera
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img79.png', alt='Ilustración del trazado del bolsillo interno y el molde de ventana para cremallera, con dimensiones y márgenes indicados para su confección.').m-auto
        
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 45.
          span Forro bolsillo interno
        figure(data-aos="zoom-in").mb-5
          img(src='@/assets/curso/temas/img80.png', alt='Imagen del forro del bolsillo interno, pieza rectangular adaptada a la boca del bolsillo, con medidas para profundidad y márgenes de ensamblaje.').m-auto
        
        h5.mb-5 Para el organizador, en el molde del forro se dibuja un rectángulo de 22 cm de ancho por 14 cm de alto.

        .row.align-items-center.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img81.png', alt='').m-auto
          .col-xl.style___box_8.ajuste___box_8_1(data-aos="fade-left")
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desde el eje vertical central, se trazan dos líneas paralelas a <strong>11 cm</strong> a cada lado.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Desde la línea inferior del bolsillo, se marca una paralela hacia abajo a <strong>14 cm</strong>.</li>
            </ul>
    
    .row.align-items-center.mb-5.m-0
      .col-xl.style___box_18(data-aos="zoom-in")
        p.mb-3 Estas líneas definen el área de ubicación del organizador. Una vez finalizado el trazado, se borran las líneas de construcción, dejando solo el contorno del rectángulo como guía. Para obtener el molde del organizador, este rectángulo se pasa a cartulina y se le añade un aumento de 3 cm en uno de los lados verticales para dar volumen. Desde esta línea, se trazan dos paralelas adicionales:
        .row
          .col-xl-6
            p.mb-2.style___box_17(data-aos="fade-right") Una a <strong>8 cm</strong>.
            p.mb-0.style___box_17(data-aos="fade-right") Otra a <strong>3 cm</strong> de la anterior.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img82.png', alt='').m-auto
    
    p.mb-5 Estas referencias servirán para formar una pinza o fuelle. Luego, se realiza una simetría del molde para obtener la otra mitad y, por último, se añade un aumento de <strong>1 cm</strong> únicamente en la parte superior para facilitar el ensamblaje en la confección.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 46.
          span Patrón organizador
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img83.png', alt='Ilustración del patrón del organizador interno, con secciones plegables y medidas específicas para pinzas o fuelles. ').m-auto

    p.mb-4 Por último, para obtener el <strong>patrón de la boca</strong>, se utiliza la franja resultante al seccionar el molde frontal. A esta pieza se le añade, en cada lado, la mitad de la medida del fuelle. Si el fuelle es diagonal, lo más recomendable es copiar su forma directamente para asegurar un encaje preciso.
    
    p.mb-5 En cuanto a los aumentos, se asignan <strong>7 mm</strong> en el borde superior para el doblez y <strong>8 mm</strong> en los tres lados restantes para la confección. En los lados verticales, la costura se realiza a <strong>1 cm</strong>, tal como se indicó previamente en el caso del forro frontal.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 47.
          span Patrón boca
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img84.png', alt='Imagen del patrón de la boca del bolso, franja rectangular con aumentos diferenciados para doblez y costura, adaptada a la forma del fuelle.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").espacio___movil_2
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón forro fuelle base
    
    p.mb-5 Para obtener el <strong>patrón del forro fuelle-base</strong>, se parte del molde del fuelle, descontando <strong>3 cm</strong> correspondientes a la boca. A continuación, este fuelle se une a la base y se refleja en el otro extremo, formando así una sola pieza continua. En el contorno del molde resultante se otorga un aumento de <strong>8 mm</strong> para la costura. No obstante, en la unión con el forro del frontal, la costura se realiza a <strong>1 cm</strong>, tal como se indicó anteriormente, con el fin de mantener la proporción y facilitar el ensamblaje del forro en el bolso.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 48.
          span Patrón forro fuelle base
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img85.png', alt='Ilustración del patrón de forro del fuelle y base, pieza continua con forma alargada y aumentos aplicados para costura. ').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón contratapa y forro tapa
    
    .row.align-items-center.mb-5.m-0.style___box_1(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img86.png', alt='').m-auto
      .col-xl
        p El patrón de la contratapa y el forro de la tapa se utiliza para definir las piezas que completan la estructura de la tapa. La contratapa corresponde a la parte posterior y, por lo general, se elabora en el material principal del bolso, mientras que el resto de la tapa suele confeccionarse en textil. En algunos diseños, toda la tapa se forra con carnaza de cerdo para ofrecer un acabado más fino.
        p.mb-3 Para obtener los moldes, se parte del molde completo de la tapa y se traza una línea paralela a 6 cm del borde inferior. Esta división genera dos secciones:
        .row
          .col-xl-5
            p.mb-2.style___box_17(data-aos="fade-right") Contratapa.
            p.mb-0.style___box_17(data-aos="fade-right") Forro de la tapa.
    
    h5.mb-4 Los aumentos se asignan de la siguiente manera:

    .row.mb-5
      .col-xl-4(data-aos="zoom-in")
        .style___box_16.h-100
          p.mb-0 En la contratapa, <strong>7 mm</strong> en todo el contorno, destinados al doblez.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_16.h-100
          p.mb-0 En el forro de la tapa, si se utiliza textil, <strong>1 cm</strong> de aumento en todo el contorno. Todos los lados se doblan excepto el borde que se une con la contratapa.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_16.h-100
          p.mb-0 Una vez cortadas, las piezas se ensamblan y se cosen sobre el forro, manteniendo una terminación limpia y una correcta adaptación al diseño del bolso.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 49.
          span Moldes contratapa y forro tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img87.png', alt='Imagen de moldes de contratapa y forro de la tapa, con línea divisoria marcada para diferenciar las dos secciones.').m-auto
    
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 50.
          span Aumentos contratapa y forro tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img88.png', alt='Ilustración que muestra los aumentos aplicados a contratapa y forro de tapa, diferenciando doblez y márgenes de unión.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón forro bolsillo
    
    p.mb-5 El patrón del forro del bolsillo se obtiene siguiendo el mismo procedimiento utilizado para los moldes elaborados en cuero o en el material principal, con la diferencia de que no se añade el aumento de doblez en el borde que quedará parchado al frontal. Esta adaptación permite que el forro se ajuste correctamente dentro del bolsillo sin generar exceso de material, garantizando un acabado limpio en la confección.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 51.
          span Forro frontal y fuelle bolsillo
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img89.png', alt='Imagen del patrón de forro frontal y fuelle del bolsillo externo, con contornos adaptados para un ajuste exacto.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Patrón forro bolsillo tapa
    
    p.mb-3 El <strong>patrón del forro del bolsillo de la tapa</strong> se construye a partir de la distancia entre el borde superior del bolsillo y el borde inferior de la tapa, que en este modelo es de <strong>18 cm</strong>. A esta medida se le descuentan <strong>2 cm</strong> para permitir el doblez inferior, y el resultado se multiplica por <strong>2</strong>, ya que el bolsillo se pliega hacia abajo y luego se dobla nuevamente hacia arriba. De esta forma, se obtiene un largo total de <strong>32 cm</strong>. Para el ancho, se toma como referencia la medida total de la tapa <strong>(40 cm)</strong> y se descuentan <strong>2 cm</strong>, lo que da un ancho final de <strong>38 cm</strong>.

    p.mb-5 En consecuencia, el molde del bolsillo presenta unas dimensiones de <strong>32 cm</strong> de alto por <strong>38 cm</strong> de ancho. Es fundamental trazarlo utilizando <strong>ejes de simetría</strong>, asegurando precisión y equilibrio en el diseño.

    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 52.
          span Forro bolsillo tapa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img90.png', alt='Ilustración del patrón del forro del bolsillo de la tapa, pieza rectangular construida con ejes de simetría para asegurar proporción.').m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Despiece de patrones de almas

    p.mb-5 En esta sección se presentan los moldes internos de refuerzo (almas) utilizados para dar firmeza y estructura al bolso, todos sin aumentos, listos para cortar en el material correspondiente.

    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left").mb-5
      .row(titulo="Patrón alma base").ajuste-cajaAcordion
        p.mb-3 Corresponde al molde de la base sin aumentos. 
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 53.
              span Alma base
            figure
              img(src='@/assets/curso/temas/img91.png', alt='Imagen del patrón alma de la base, recorte con misma forma que la base del bolso pero sin márgenes de costura.').m-auto
      .row(titulo="Patrón alma correas tapa").ajuste-cajaAcordion
        p.mb-3 Corresponde al molde de la correa sin aumentos.
        .row.justify-content-center.mb-3
          .col-xl-4.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 54.
              span Alma correas tapa
            figure
              img(src='@/assets/curso/temas/img92.png', alt='Ilustración del patrón alma de las correas de la tapa, sin márgenes de costura, con forma alargada y bordes rectos.' style="max-width: 400px")
      .row(titulo="Patrón alma hebillero").ajuste-cajaAcordion
        p.mb-3 Corresponde al molde del hebillero sin aumentos. 
        .row.justify-content-center.mb-3
          .col-xl-6.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 55.
              span Alma hebillero
            figure
              img(src='@/assets/curso/temas/img93.png', alt='Imagen del patrón alma del hebillero, pieza rectangular con perforación central, sin márgenes de costura.').m-auto
      .row(titulo="Patrón alma chapeta").ajuste-cajaAcordion
        p.mb-3 Corresponde al molde de la chapeta sin aumentos. 
        .row.justify-content-center.mb-3
          .col-xl-4.mb-3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 56.
              span Alma chapeta
            figure
              img(src='@/assets/curso/temas/img94.png', alt='Ilustración del patrón alma de chapeta, forma rectangular sin aumentos de costura.' style="max-width: 400px")

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_13(data-aos="zoom-in")
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img95.svg', alt='').m-auto
          .col-xl
            p.mb-0 <strong>Nota:</strong> Si el bolso se construye al corte, no se aplican aumentos de doblado, ya que las piezas se ensamblan directamente sin repliegues en los bordes.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Información obligatoria en cada molde
    
    p.mb-5 Para una referencia clara y ordenada, cada molde debe incluir:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.mb-5.m-0.style___box_1(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img96.jpg', alt='').m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Referencia</strong>. Código o número identificador.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Nombre</strong>. Denominación de la pieza (ej. “Frontal”, “Base”, “Correa”).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Material</strong>. Tipo de material a utilizar (cuero, textil, acrílico, etc.).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Cantidad</strong>. Número de piezas a cortar.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Dimensiones</strong>. Medidas principales (ancho y largo).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span><strong>Numeración</strong>. Ejemplo: “Molde 1 de [total]”, “Molde 2 de [total]”, y así sucesivamente.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").espacio___movil_2
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img6.svg" style="max-width: 60px").m-auto
      .col
        h3 Clasificación de moldes para este bolso
    
    p.mb-5 Para este modelo, los moldes se agrupan en tres categorías: principales, de forro y de almas.

    .row.align-items-center
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img97.png', alt='').m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Moldes principales").ajuste-cajaAcordion
            <ul class="fa-ul mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Frontal y espaldar: 2 piezas c/u.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Fuelle: 2 piezas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Base: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Tapa: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Complemento tapa: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Contratapa: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Bolsillo frontal: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Fuelle bolsillo frontal: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Correas tapa: 4 piezas (puede variar según armado).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Hebilleros: 4 piezas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Chapetas: 4 piezas.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Correa larga: 1 pieza si es reata, 2 piezas si es cuero.</li>
            </ul>
          .row(titulo="Moldes para el forro").ajuste-cajaAcordion
            <ul class="fa-ul mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Boca (material principal): 2 piezas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Contratapa (material principal): 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Forro tapa: 1 pieza (textil o carnaza de cerdo).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Frontal y espaldar: 2 piezas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Fuelle base: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Frontal bolsillo externo: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Fuelle bolsillo externo: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Bolsillo interno: 1 pieza.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Organizador: 1 pieza.</li>
            </ul>
          .row(titulo="Moldes para las almas").ajuste-cajaAcordion
            <ul class="fa-ul mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Base: 1 pieza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Correas tapa: 2 piezas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Hebilleros: 2 piezas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Chapetas: 2 piezas.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-briefcase color___bag_1"></i></span>Ventana de cremallera: 1 pieza.</li>
            </ul>

</template>

<script>
export default {
  name: 'Tema5',
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
