<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Patronaje y construcción de patrones para bolso tipo <em>Messenger</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos, herramientas, técnicas y procedimientos clave para el diseño, trazado, despiece y verificación de patrones en la confección de un bolso tipo <em>Messenger</em>, aplicando criterios de precisión, simetría y funcionalidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal de un patrón en marroquinería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar un diseño atractivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Servir como plantilla que asegura precisión en las piezas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el peso del bolso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aportar volumen al bolso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué herramienta se utiliza para trazar curvas suaves y formas ergonómicas en los patrones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cinta métrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compás de puntas secas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reglas curvas y escuadras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tijeras de papel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué es un fuelle en un bolso <em>Messenger</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una tapa decorativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pieza lateral que aporta profundidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un bolsillo interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El refuerzo de la base.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la ventaja de aplicar ejes de simetría en el patronaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la ventilación del bolso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el peso de las piezas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar el transporte del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lograr piezas equilibradas y proporcionales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de patrón se utiliza para reforzar zonas de carga o tensión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Patrón de corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Patrón de forro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patrón de refuerzo o alma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Patrón de armado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En la construcción del bolso basada en el frontal, ¿qué pieza se utiliza como referencia inicial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fuelle.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tapa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Molde del cuerpo delantero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Base.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué margen de costura se aplica generalmente para el doblez en moldes de cuero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '7 mm.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '1,5 cm.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '3 mm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '8 cm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito de la maqueta de comprobación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir como molde definitivo para producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar encaje, volumen y funcionalidad antes de producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Probar la resistencia del material.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hacer un prototipo para venta directa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué medida estándar se utiliza para el ancho de la correa en un herraje de 1¼ pulgadas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2,4 cm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2,8 cm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '3,5 cm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1,25 cm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué patrón se obtiene duplicando su tamaño final para luego doblarlo durante la confección?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hebillero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fuelle.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contratapa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El patrón de corte sirve para marcar puntos de perforación y centros de costura.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El patrón de forro suele ser ligeramente más pequeño que la pieza exterior para un mejor ajuste.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En la construcción desde el fuelle, esta pieza define la altura, profundidad y forma de la base del bolso.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los márgenes de costura son opcionales en moldes de confección profesional.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los ejes de simetría solo se aplican en piezas rectangulares.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
