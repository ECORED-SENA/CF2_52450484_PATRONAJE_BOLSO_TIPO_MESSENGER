export default {
  global: {
    Name: 'Patronaje y construcción de patrones para bolso <em>Messenger</em>',
    Description:
      'El componente formativo desarrolla habilidades para diseñar, trazar y ajustar patrones de bolso tipo <em>Messenger</em>, aplicando técnicas manuales, herramientas específicas y criterios de simetría, funcionalidad y optimización de materiales. Incluye elaboración de moldes, despieces, forros y maquetas de comprobación, garantizando precisión, calidad y estética en la confección, así como adaptación a necesidades y tendencias del sector marroquinero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Herramientas esenciales para el patronaje de bolso <em>Messenger</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patrones, conceptos y tipos en la marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia y propósito de los patrones en marroquinería',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de los patrones en marroquinería',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'La importancia de los ejes de simetría en el patronaje de marroquinería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elaborar patrones para bolso tipo <em>Messenger</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Construcción a partir del frontal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Elaboración del molde patrón con ejes de simetría',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Despieces de los diferentes moldes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Despiece de patrones de almas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Patronaje bolso <em>Messenger</em> construcción a partir del fuelle',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Despieces de los diferentes moldes',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Despiece moldes internos y forros',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Elaboración maqueta de comprobación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Elaborar patrones para bolso tipo Messenger',
      referencia:
        'Bolsosmochilasfundasymas (2017, 8 junio). COMO CONFECCIONAR UN MORRAL O BANDOLERA ( PARTE 1) how to make a backpack or shoulder bag 1  [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/g54wzYk32o4 ',
    },
    {
      tema: 'Elaborar patrones para bolso tipo Messenger',
      referencia:
        'Miko Craft. (2021) Men`s Messenger Bag Tutorial - DIY Cara Membuat Tas Selempang Pria - Bag Making with Miko Craft.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/Xac5qxclbFE?si=bvyWt3QdfaD46bb0 ',
    },
  ],
  glosario: [
    {
      termino: 'Herramientas de patronaje',
      significado:
        'instrumentos necesarios para la creación de moldes, como reglas curvas, escuadras, lápices, bisturí de corte, papel <em>kraft</em>, compás, punzones y cintas métricas. Estas herramientas permiten trazar, medir y recortar con precisión las piezas del patrón.',
    },
    {
      termino: 'Patrón',
      significado:
        'plantilla en papel, cartón o digital que representa cada parte del bolso. Se utiliza para cortar el material final con exactitud, respetando las formas y dimensiones establecidas en el diseño.',
    },
    {
      termino: 'Molde',
      significado:
        'sinónimo de patrón en marroquinería. Cada molde corresponde a una pieza del bolso (frontal, base, fuelle, etc.) e incluye detalles técnicos como márgenes de costura, dobleces o posiciones de herrajes.',
    },
    {
      termino: 'Ejes de simetría',
      significado:
        'líneas guía que dividen las piezas del patrón en partes iguales. Son fundamentales para lograr un diseño equilibrado y facilitar el trazado de formas simétricas, especialmente en piezas como la tapa, el frontal o el espaldar.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso de diseño y trazado de los moldes que conforman un bolso. Implica estudiar el modelo, definir las medidas, descomponer las partes y elaborar las plantillas según criterios técnicos.',
    },
    {
      termino: 'Frontal',
      significado:
        'parte principal delantera del bolso <em>Messenger</em>, de la cual pueden derivarse otras piezas como la tapa, boca o bolsillos.',
    },
    {
      termino: 'Fuelle',
      significado:
        'pieza lateral que aporta profundidad al bolso. Puede ser recto o inclinado (diagonal), y permite la expansión de la capacidad interior.',
    },
    {
      termino: 'Maqueta de comprobación',
      significado:
        'modelo tridimensional del bolso armado en materiales económicos (cartulina, tela de prueba, etc.) que permite verificar el encaje de los moldes, el volumen, la funcionalidad y realizar ajustes antes de la producción definitiva.',
    },
    {
      termino: 'Márgenes de costura',
      significado:
        'espacios añadidos al borde de los moldes para permitir la unión de las piezas mediante costura. Varían entre 7 mm y 1 cm, según el tipo de material y el acabado deseado.',
    },
    {
      termino: 'Línea de boca',
      significado:
        'línea horizontal superior del bolso que define la abertura por donde se accede al interior. Sirve como punto de referencia en la construcción del patrón del forro o la franja superior.',
    },
    {
      termino: 'Contratapa',
      significado:
        'pieza ubicada en el reverso de la tapa, que puede estar confeccionada en material principal o forro, dependiendo de la resistencia que se requiera, especialmente donde van broches o cierres.',
    },
    {
      termino: 'Refilar',
      significado:
        'recortar el exceso de material o ajustar los bordes tras el ensamblaje para obtener acabados limpios y precisos.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'margen de ajuste previsto en los moldes para permitir ligeras variaciones en la confección sin afectar el resultado final.',
    },
    {
      termino: 'Base',
      significado:
        'parte inferior del bolso sobre la que se construye el resto de las piezas. Su forma y tamaño determinan la capacidad y estabilidad del bolso.',
    },
  ],
  referencias: [
    {
      referencia: 'Asensio, O. (2011). El gran libro del cuero. Lexus.',
      link: '',
    },
    {
      referencia: 'Fogg, M. (2009). Bolsos vintage. Parramón.',
      link: '',
    },
    {
      referencia:
        'Johnson, A. (2005). Bolsos: el poder de un accesorio. Konemann.',
      link: '',
    },
    {
      referencia:
        'Marulanda, G. (2007). Cartilla de marroquinería: modelaje de bolsos. Imprenta Nacional. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo, Artesanías de Colombia. (2020). Técnica del oficio del cuero. Artesanías de Colombia. ',
      link: 'https://repositorio.artesaniasdecolombia.com.co/handle/001/6336',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
