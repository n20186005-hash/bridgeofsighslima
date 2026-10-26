import type { Locale } from '../i18n';

export interface FaqItem { q: string; a: string; }
export interface TimelineItem { year: string; etiqueta: string; texto: string; }
export interface HistoriaItem { kind: string; color: string; titulo: string; texto: string; }
export interface ServiceCard { icon: string; title: string; text: string; }
export interface VisitCard { icon: string; title: string; text: string; }
export interface LlegarItem { title: string; text: string; }
export interface AroundCard { title: string; text: string; }
export interface SourceLink { title: string; text: string; href: string; }

export interface GuideContent {
  title: string;
  description: string;
  ogImageAlt: string;
  hero: {
    eyebrow: string; h1: string; h1Sub: string; lead: string;
    ctaPrimary: string; ctaSecondary: string; credit: string;
  };
  intro: {
    hierarchy: string[]; lead: string;
    boxTitle: string; boxText: string; boxLink: string;
  };
  banner: { text: string; link: string; linkLabel: string; };
  stats: {
    ratingLabel: string; ratingValue: string; ratingNote: string;
    accessLabel: string; accessValue: string; accessNote: string;
    hoursLabel: string; hoursValue: string; hoursNote: string;
    contextLabel: string; contextValue: string; contextNote: string;
  };
  toc: [string, string][];
  history: { eyebrow: string; h2: string; paras: string[]; legendTitle: string; legendText: string; };
  timeline: TimelineItem[];
  historias: HistoriaItem[];
  visita: { eyebrow: string; h2: string; cards: VisitCard[]; note: string; };
  comoLlegar: { eyebrow: string; h2: string; items: LlegarItem[]; };
  alrededores: { eyebrow: string; h2: string; lead: string; cards: AroundCard[]; };
  gastronomia: { eyebrow: string; h2: string; lead: string; tags: string[]; note: string; };
  fuentes: { eyebrow: string; h2: string; lead: string; links: SourceLink[]; };
  faq: FaqItem[];
  schema: {
    webPageName: string; webPageDescription: string;
    placeName: string; placeDescription: string;
    touristType: string[];
  };
}

const SAME_AS = [
  'https://maps.app.goo.gl/JtXw9jp7DcAQgdRu5',
  'https://www.gob.pe/institucion/munibarranco/campa%C3%B1as/98478-puente-de-los-suspiros-bridge-of-sighs',
  'https://munibarranco.gob.pe/portal/atractivos-turisticos/',
  'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=5585',
  'https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/barranco/puente-de-los-suspiros'
];

export const guide: Record<Locale, GuideContent> = {
  "es": {
    "title": "Puente de los Suspiros, Barranco Lima: ubicación, horario e historia",
    "description": "Visita el Puente de los Suspiros en Barranco, Lima: ubicación, acceso con fuentes y fecha, historia oficial y orientación para el paseo. Guía independiente.",
    "ogImageAlt": "Puente de los Suspiros (Bridge of Sighs) de Barranco, puente histórico de madera en Lima, Perú",
    "hero": {
      "eyebrow": "Guía turística independiente",
      "h1": "Puente de los Suspiros",
      "h1Sub": "Bridge of Sighs · Barranco · Lima · Perú",
      "lead": "Un puente de madera de 1876 suspendido sobre la Bajada de Baños, convertido en símbolo del Barranco bohemio, la memoria urbana y la música de Chabuca Granda.",
      "ctaPrimary": "Planear la visita",
      "ctaSecondary": "Conocer su historia",
      "credit": "Fotografía real: HLaiza, Wikimedia Commons, licencia CC BY-SA 4.0."
    },
    "intro": {
      "hierarchy": [
        "Puente de los Suspiros",
        "Barranco",
        "Lima",
        "Perú"
      ],
      "lead": "Bienvenido a esta guía del <strong>Puente de los Suspiros</strong> —conocido internacionalmente como <strong>Bridge of Sighs</strong>—, la pasarela peatonal de madera más conocida de <strong>Barranco</strong>, distrito del sur de <strong>Lima</strong> (región Lima, <strong>Perú</strong>). Construido en 1876 sobre la quebrada de la Bajada de Baños y declarado Monumento Nacional, es a la vez un recurso cultural registrado por MINCETUR y un referente cultural del distrito. Esta guía independiente reúne su historia documentada, sus leyendas, los servicios de la zona y datos prácticos para visitarlo.",
      "boxTitle": "En el entorno inmediato",
      "boxText": "Desde el puente se continúa a pie hacia la <strong>Ermita de Barranco</strong>, el <strong>Parque Municipal</strong>, la <strong>Bajada de Baños</strong> y la <strong>Plazuela Chabuca Granda</strong>, todos dentro del mismo circuito histórico y peatonal.",
      "boxLink": "Abrir ubicación en Google Maps"
    },
    "banner": {
      "text": "Estado actual: el paso peatonal fue reabierto en agosto de 2026 tras seis meses de trabajos de conservación y reforzamiento, con nueva iluminación y recuperación de elementos de madera.",
      "link": "https://andina.pe/agencia/galeria-puente-los-suspiros-reabrio-tras-seis-meses-trabajos-conservacion-sus-150-anos-30238.aspx",
      "linkLabel": "Ver fuente"
    },
    "stats": {
      "ratingLabel": "Valoración",
      "ratingValue": "4,5 / 5",
      "ratingNote": "24.821 reseñas de Google Maps · consulta 25/10/2026",
      "accessLabel": "Acceso",
      "accessValue": "Libre",
      "accessNote": "PROMPERÚ describe ingreso libre; tours y locales cercanos son servicios separados. Sigue los avisos del lugar.",
      "hoursLabel": "Acceso publicado",
      "hoursValue": "24 horas",
      "hoursNote": "Google Maps, 25/10/2026; posibles cambios en feriados. Franja de visita del inventario oficial (2023): 08:00–20:00.",
      "contextLabel": "Entorno",
      "contextValue": "Zona Monumental",
      "contextNote": "Centro histórico de Barranco"
    },
    "toc": [
      [
        "historia",
        "Historia"
      ],
      [
        "cronologia",
        "Cronología"
      ],
      [
        "historias",
        "Historias y leyendas"
      ],
      [
        "visita",
        "Visita"
      ],
      [
        "servicios",
        "Servicios"
      ],
      [
        "como-llegar",
        "Cómo llegar"
      ],
      [
        "clima",
        "Clima"
      ],
      [
        "temporada",
        "Temporada"
      ],
      [
        "naturaleza",
        "Naturaleza"
      ],
      [
        "alrededores",
        "Alrededores"
      ],
      [
        "gastronomia",
        "Gastronomía"
      ],
      [
        "itinerarios",
        "Itinerarios"
      ],
      [
        "responsabilidad",
        "Responsabilidad"
      ],
      [
        "fuentes",
        "Fuentes"
      ],
      [
        "preguntas",
        "Preguntas"
      ]
    ],
    "history": {
      "eyebrow": "Historia del Puente de los Suspiros",
      "h2": "Una pasarela que terminó definiendo el paisaje de Barranco",
      "paras": [
        "La Municipalidad Distrital de Barranco sitúa la construcción del puente en 1876, durante la gestión de Francisco García Monterroso. Su función era práctica: unir los extremos de la quebrada y facilitar el paso entre los sectores de Ayacucho y la Ermita.",
        "El puente sufrió daños durante la Guerra del Pacífico y fue reparado en distintas etapas. En 2014 se realizó una restauración integral que reforzó la pasarela con madera de huayruro e incorporó iluminación. El Peruano informó el 29 de agosto de 2026 la finalización de una nueva intervención de conservación y reforzamiento, citando a MINCETUR. Su imagen quedó además ligada a la obra de Chabuca Granda, que dedicó una célebre composición al lugar.",
        "Hoy forma parte del corazón de la Zona Monumental de Barranco y aparece en el Inventario Nacional de Recursos Turísticos del Perú como un recurso cultural de arquitectura y espacios urbanos.",
        "Diferencias entre fuentes: el inventario de MINCETUR y la guía distrital de PROMPERÚ indican inauguración el 14 de febrero de 1876; la página general de Peru.travel dice 1877. El inventario distingue 44 metros originales de 31 metros actuales. Son referencias con distinto alcance, no una nueva medición de esta guía."
      ],
      "legendTitle": "La leyenda, separada de la historia",
      "legendText": "La tradición popular invita a cruzar el puente sin respirar mientras se piensa en un deseo. Es parte del imaginario de Barranco y debe entenderse como una leyenda, no como un dato histórico comprobado."
    },
    "timeline": [
      {
        "year": "1876",
        "etiqueta": "Inauguración",
        "texto": "El puente se inaugura el 14 de febrero durante la gestión del primer alcalde de Barranco, Francisco García Monterroso (1875–1878). Fue construido para salvar la quebrada con dimensiones iniciales de 44 m de largo, 3 m de ancho y 8,5 m de altura, según la ficha municipal."
      },
      {
        "year": "1881",
        "etiqueta": "Guerra del Pacífico",
        "texto": "Durante la ocupación de Lima, el fuego daña parte de la estructura del puente. La ficha municipal registra su restauración con la ayuda de Patricio Lynch; la pasarela volvió a unir ambos lados de la quebrada."
      },
      {
        "year": "1960",
        "etiqueta": "Música y memoria",
        "texto": "La compositora peruana Chabuca Granda difunde el vals «Puente de los Suspiros». Según la Municipalidad de Barranco, esa canción popularizó el nombre del puente y lo ligó para siempre a la memoria musical del distrito."
      },
      {
        "year": "1973",
        "etiqueta": "Protección del entorno",
        "texto": "La Resolución Suprema N.º 2900-72-ED, publicada el 23 de enero, declara Monumento Nacional la Zona Monumental de Barranco, el entorno histórico donde se asienta el puente."
      },
      {
        "year": "1989",
        "etiqueta": "Monumento Nacional",
        "texto": "La Resolución Jefatural N.º 191-89-INC/J, del 26 de abril, declara Monumento Nacional al propio Puente de los Suspiros (registro de PROMPERÚ)."
      },
      {
        "year": "2014",
        "etiqueta": "Restauración integral",
        "texto": "Una intervención con financiamiento del Plan COPESCO rehabilita la pasarela: refuerzo estructural con madera de huayruro y nueva iluminación LED, según la ficha municipal."
      },
      {
        "year": "2026",
        "etiqueta": "Reapertura",
        "texto": "El Peruano informó el 29/08/2026 la finalización del reforzamiento, citando a MINCETUR. Es posterior al aviso de avance de julio; no es una confirmación de acceso ni horario de iluminación en tiempo real."
      }
    ],
    "historias": [
      {
        "kind": "Tradición local",
        "color": "bg-[#6e2430]/10 text-[#6e2430]",
        "titulo": "El deseo al cruzar",
        "texto": "La tradición popular de Barranco dice que quien cruza el puente conteniendo la respiración mientras piensa en un deseo lo verá cumplido. Es una creencia del imaginario local, no un hecho histórico certificado: forma parte del encanto del paseo."
      },
      {
        "kind": "Música",
        "color": "bg-[#24574d]/10 text-[#24574d]",
        "titulo": "El vals que fijó el nombre",
        "texto": "En 1960, Chabuca Granda popularizó el nombre del puente con su vals «Puente de los Suspiros». Hoy la plazuela que recuerda a la artista está a pocos pasos, dentro del mismo circuito histórico de Barranco."
      },
      {
        "kind": "Curiosidad",
        "color": "bg-[#b0791a]/15 text-[#7a5311]",
        "titulo": "¿Por qué «de los Suspiros»?",
        "texto": "El nombre evoca, por analogía romántica, al Puente de los Suspiros de Venecia. También se dice que los enamorados y paseantes que se detenían a mirar la quebrada soltaban un suspiro al cruzarlo. Son versiones del imaginario popular: no existe una única explicación oficial certificada."
      },
      {
        "kind": "Contexto",
        "color": "bg-[#24574d]/10 text-[#24574d]",
        "titulo": "Un barrio balneario y bohemio",
        "texto": "Barranco creció en el siglo XIX como balneario de verano de Lima. Desde comienzos del siglo XX fue refugio de poetas, pintores y bohemios; la propia ficha municipal describe hoy su ambiente bohemio y su atractivo cultural."
      },
      {
        "kind": "Contexto",
        "color": "bg-[#24574d]/10 text-[#24574d]",
        "titulo": "La Bajada de Baños",
        "texto": "El sendero histórico que pasa bajo el puente conducía hacia los baños de mar del balneario. En la memoria urbana de Barranco quedó también el funicular que unía la parte alta con la zona de playa, hoy evocada por su antigua estación."
      },
      {
        "kind": "Herencia",
        "color": "bg-[#6e2430]/10 text-[#6e2430]",
        "titulo": "Un recurso cultural del Perú",
        "texto": "El puente figura en el Inventario Nacional de Recursos Turísticos del Perú (ficha 5585 de MINCETUR) como recurso cultural de arquitectura y espacios urbanos, y es una de las postales más reconocidas del distrito."
      }
    ],
    "visita": {
      "eyebrow": "Información práctica",
      "h2": "Visitar el Puente de los Suspiros sin perder lo esencial",
      "cards": [
        {
          "icon": "◌",
          "title": "Entrada y costo",
          "text": "La página de PROMPERÚ describe ingreso libre. Esta guía no vende entradas ni tours; los locales y servicios cercanos tienen condiciones propias. Revisa los avisos antes de cruzar."
        },
        {
          "icon": "◷",
          "title": "Mejor momento",
          "text": "La tarde ofrece una luz agradable para fotografía y permite continuar hacia los miradores de Barranco. Las primeras horas suelen ser más tranquilas."
        },
        {
          "icon": "⌁",
          "title": "Tiempo sugerido",
          "text": "Organiza el puente y las calles del entorno a tu ritmo, con pausas y recorrido de regreso. La duración depende del punto de partida, las condiciones de acceso y tus necesidades de movilidad."
        },
        {
          "icon": "P",
          "title": "Estacionamiento",
          "text": "Si llegas en auto, comprueba estacionamientos autorizados y señalización. Esta guía no reserva espacios ni confirma disponibilidad o tarifas."
        }
      ],
      "note": "Google Maps consultado el 25/10/2026 muestra acceso diario de 24 horas, con posibles cambios en feriados. La ficha de MINCETUR fechada en 2023 indica 08:00–20:00 como franja de visita. Difieren en fecha y alcance; ninguna confirma el acceso en tiempo real."
    },
    "comoLlegar": {
      "eyebrow": "Transporte y acceso",
      "h2": "Cómo llegar al Puente de los Suspiros (Bridge of Sighs)",
      "items": [
        {
          "title": "Desde el Aeropuerto Internacional Jorge Chávez (LIM)",
          "text": "Si llegas desde el aeropuerto, elige transporte autorizado y calcula el recorrido según el tráfico y tu punto de partida; no se garantiza una duración. Organiza la visita con tiempo para pausas y regreso."
        },
        {
          "title": "En Metropolitano",
          "text": "MINCETUR documenta una ruta desde la Estación Central hasta la Estación Boulevard. La ficha de 2023 estima unos 450 m y 10 minutos a pie desde Boulevard; el tiempo real depende del ritmo y las condiciones. Desde el aeropuerto o la Estación Central se integra con la red mediante transbordos."
        },
        {
          "title": "En taxi o movilidad por aplicación",
          "text": "Indica “Puente de los Suspiros, Barranco” o “Jr. Batallón 271”. En horas de alta demanda conviene bajar cerca del Parque Municipal y completar el tramo a pie por el casco histórico."
        },
        {
          "title": "A pie dentro de Barranco",
          "text": "El puente está a dos cuadras del Parque Municipal según la ficha de MINCETUR. Es un recorrido corto por el núcleo histórico y peatonal del distrito, ideal para continuar hacia la Bajada de Baños."
        }
      ]
    },
    "alrededores": {
      "eyebrow": "Alrededores inmediatos",
      "h2": "Un paseo que continúa bajo el puente",
      "lead": "La Municipalidad de Barranco agrupa el puente con una serie de espacios culturales del circuito histórico. La Bajada de Baños es el eje natural para seguir caminando hacia casonas, arte, gastronomía y vistas hacia la Costa Verde.",
      "cards": [
        {
          "title": "Bajada de Baños",
          "text": "El antiguo sendero de la quebrada discurre bajo el puente y conecta el centro de Barranco con el sector costero."
        },
        {
          "title": "La Ermita de Barranco",
          "text": "Templo histórico que forma parte del paisaje inmediato del puente y del conjunto monumental del distrito."
        },
        {
          "title": "Parque Municipal",
          "text": "Punto de referencia central para iniciar una caminata por el Barranco histórico y acceder al puente."
        },
        {
          "title": "Plazuela Chabuca Granda",
          "text": "Espacio vinculado a la memoria de la compositora peruana cuya obra está íntimamente asociada al puente."
        },
        {
          "title": "Mirador Catalina Recavarren",
          "text": "Mirador del circuito histórico con perspectiva hacia la Costa Verde y el borde costero de Barranco."
        },
        {
          "title": "Antigua estación del Funicular",
          "text": "Vestigio del antiguo sistema que conectaba la parte alta de Barranco con la zona de playa."
        }
      ]
    },
    "gastronomia": {
      "eyebrow": "Sabores de Barranco",
      "h2": "Qué comer cerca del puente",
      "lead": "La propia oficina de turismo de Barranco presenta la gastronomía como una de las rutas del distrito, y la Bajada de Baños reúne cafés, tabernas y espacios para comer. Esta guía no recibe pagos ni comisiones de establecimientos.",
      "tags": [
        "Ceviche",
        "Tiradito",
        "Anticuchos",
        "Causa limeña",
        "Picarones",
        "Pisco sour"
      ],
      "note": "Consejo: compara menús y precios visibles antes de pedir y confirma al establecimiento cualquier necesidad alimentaria."
    },
    "fuentes": {
      "eyebrow": "Fuentes públicas y asociación de entidad",
      "h2": "Fuentes para verificar la información del Puente de los Suspiros",
      "lead": "Para evitar confundir este lugar con otros “Puentes de los Suspiros”, la guía utiliza el nombre oficial, la dirección de Barranco, coordenadas, referencias patrimoniales y enlaces directos a fuentes públicas peruanas.",
      "links": [
        {
          "title": "Municipalidad Distrital de Barranco · ficha del puente",
          "text": "Historia, restauraciones y condición de ícono turístico.",
          "href": "https://www.gob.pe/institucion/munibarranco/campa%C3%B1as/98478-puente-de-los-suspiros-bridge-of-sighs"
        },
        {
          "title": "Municipalidad de Barranco · atractivos turísticos",
          "text": "Dimensiones, material, contexto histórico y tradición local.",
          "href": "https://munibarranco.gob.pe/portal/atractivos-turisticos/"
        },
        {
          "title": "MINCETUR · Inventario Nacional de Recursos Turísticos",
          "text": "Registro 5585, acceso, horario, ubicación y ruta de llegada.",
          "href": "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=5585"
        },
        {
          "title": "Wikidata · Q42846429",
          "text": "Identificador de entidad, ubicación y coordenadas geográficas.",
          "href": "https://www.wikidata.org/wiki/Q42846429"
        },
        {
          "title": "PROMPERÚ · ficha turística del puente",
          "text": "Ubicación en Jr. Batallón 271, contexto patrimonial e ingreso libre.",
          "href": "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/barranco/puente-de-los-suspiros"
        },
        {
          "title": "Andina · agencia de noticias oficial",
          "text": "Nota sobre la reapertura de 2026 tras seis meses de conservación y reforzamiento.",
          "href": "https://andina.pe/agencia/galeria-puente-los-suspiros-reabrio-tras-seis-meses-trabajos-conservacion-sus-150-anos-30238.aspx"
        },
        {
          "title": "Open-Meteo · datos meteorológicos",
          "text": "Fuente de datos del pronóstico en vivo de esta guía.",
          "href": "https://open-meteo.com/"
        },
        {
          "title": "SENAMHI · meteorología del Perú",
          "text": "Servicio Nacional de Meteorología e Hidrología: fuente oficial para contrastar el clima.",
          "href": "https://www.senamhi.gob.pe/"
        },
        {
          "title": "Portal Oficial de Turismo del Perú",
          "text": "Portal nacional de PROMPERÚ: información de destino, trámites y recomendaciones de viaje.",
          "href": "https://www.peru.travel/es"
        },
        {
          "title": "MINCETUR · inventario 5585",
          "text": "Inventario con fecha de 2023; distingue dimensiones originales/actuales y franja de visita.",
          "href": "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=5585"
        },
        {
          "title": "El Peruano · obras concluidas, 29 de agosto de 2026",
          "text": "Diario oficial que recoge el anuncio posterior de finalización de MINCETUR.",
          "href": "https://elperuano.pe/noticia/303615-mincetur-recupera-historico-puente-de-los-suspiros-que-ahora-luce-una-estructura-reforzada"
        }
      ]
    },
    "faq": [
      {
        "q": "¿Cuesta entrar al Puente de los Suspiros?",
        "a": "No. El Inventario Nacional de Recursos Turísticos de MINCETUR y la ficha de PROMPERÚ señalan ingreso libre."
      },
      {
        "q": "¿Cuál es el horario de visita?",
        "a": "Google Maps consultado el 25/10/2026 muestra acceso diario de 24 horas, con posibles cambios en feriados. La ficha de MINCETUR fechada en 2023 indica 08:00–20:00 como franja de visita. Difieren en fecha y alcance; ninguna confirma el acceso en tiempo real."
      },
      {
        "q": "¿Cómo llegar en transporte público?",
        "a": "Una ruta documentada por MINCETUR parte de la Estación Central del Metropolitano hacia la Estación Boulevard; desde allí se continúa a pie aproximadamente 450 metros hasta el puente."
      },
      {
        "q": "¿El Puente de los Suspiros tiene estacionamiento?",
        "a": "El puente no dispone de estacionamiento propio. Está dentro de una zona histórica con calles estrechas y alta circulación peatonal, por lo que suele ser más práctico llegar en transporte público, taxi o movilidad por aplicación y completar el último tramo caminando."
      },
      {
        "q": "¿Cuánto tiempo conviene dedicarle?",
        "a": "Si llegas desde el aeropuerto, elige transporte autorizado y calcula el recorrido según el tráfico y tu punto de partida; no se garantiza una duración. Organiza la visita con tiempo para pausas y regreso."
      },
      {
        "q": "¿Cuál es la tradición del deseo?",
        "a": "La tradición popular cuenta que quien cruza el puente conteniendo la respiración mientras piensa en un deseo puede verlo cumplido. Es una leyenda local, no un hecho histórico."
      },
      {
        "q": "¿Hay baños públicos o servicios cerca del puente?",
        "a": "Confirma ubicación, horarios y condiciones de los baños antes de iniciar el recorrido. Esta guía no verifica la disponibilidad de servicios cercanos en tiempo real."
      },
      {
        "q": "¿Cuál es la mejor época del año para visitarlo?",
        "a": "El verano limeño (diciembre a abril) suele traer cielos despejados y la mejor luz para fotos. En la temporada de garúa (mayo a octubre) el puente también se visita bien con una capa ligera; además hay mucha menos gente. El puente se visita todo el año."
      },
      {
        "q": "¿Cómo llegar desde el aeropuerto de Lima?",
        "a": "Si llegas desde el aeropuerto, elige transporte autorizado y calcula el recorrido según el tráfico y tu punto de partida; no se garantiza una duración. Organiza la visita con tiempo para pausas y regreso."
      },
      {
        "q": "¿El puente es apto para personas con movilidad reducida?",
        "a": "Evalúa el recorrido y las condiciones actuales según tus necesidades. La Bajada de Baños tiene pendientes y escalones; consulta orientación de accesibilidad con la autoridad local."
      }
    ],
    "schema": {
      "webPageName": "Puente de los Suspiros, Barranco Lima: ubicación, horario e historia",
      "webPageDescription": "Visita el Puente de los Suspiros en Barranco, Lima: ubicación, acceso con fuentes y fecha, historia oficial y orientación para el paseo. Guía independiente.",
      "placeName": "Puente de los Suspiros",
      "placeDescription": "Guía independiente para conocer el Puente de los Suspiros de Barranco, la pasarela peatonal de madera más conocida de Lima (Perú): historia, ubicación, transporte, clima y alrededores.",
      "touristType": [
        "Lugar histórico",
        "Puente peatonal",
        "Recurso cultural"
      ]
    }
  },
  "en": {
    "title": "Bridge of Sighs, Barranco Lima: location, hours and history",
    "description": "Visit the Bridge of Sighs in Barranco, Lima: location, dated access information, official history and practical walking guidance. Independent guide.",
    "ogImageAlt": "Bridge of Sighs (Puente de los Suspiros) in Barranco, historic wooden bridge in Lima, Peru",
    "hero": {
      "eyebrow": "Independent tourist guide",
      "h1": "Bridge of Sighs",
      "h1Sub": "Puente de los Suspiros · Barranco · Lima · Perú",
      "lead": "A wooden footbridge from 1876 suspended above the Bajada de Baños, a symbol of bohemian Barranco, urban memory and the music of Chabuca Granda.",
      "ctaPrimary": "Plan your visit",
      "ctaSecondary": "Discover its history",
      "credit": "Real photo: HLaiza, Wikimedia Commons, CC BY-SA 4.0 license."
    },
    "intro": {
      "hierarchy": [
        "Bridge of Sighs",
        "Barranco",
        "Lima",
        "Peru"
      ],
      "lead": "Welcome to this guide to the <strong>Bridge of Sighs</strong> —known internationally as <strong>Puente de los Suspiros</strong>—, the best-known wooden pedestrian footbridge in <strong>Barranco</strong>, a district in southern <strong>Lima</strong> (Lima Region, <strong>Peru</strong>). Built in 1876 over the ravine of the Bajada de Baños and declared a National Monument, it is both a cultural asset registered by MINCETUR and a cultural landmark of the district. This independent guide brings together its documented history, its legends, the services in the area and practical information for visiting it.",
      "boxTitle": "In the immediate surroundings",
      "boxText": "From the bridge you can continue on foot to the <strong>Ermita de Barranco</strong>, the <strong>Municipal Park</strong>, the <strong>Bajada de Baños</strong> and the <strong>Plazuela Chabuca Granda</strong>, all within the same historic and pedestrian circuit.",
      "boxLink": "Open location in Google Maps"
    },
    "banner": {
      "text": "Current status: the walkway reopened in August 2026 after six months of conservation and reinforcement work, with new lighting and restoration of wooden elements.",
      "link": "https://andina.pe/agencia/galeria-puente-los-suspiros-reabrio-tras-seis-meses-trabajos-conservacion-sus-150-anos-30238.aspx",
      "linkLabel": "View source"
    },
    "stats": {
      "ratingLabel": "Rating",
      "ratingValue": "4.5 / 5",
      "ratingNote": "24,821 Google Maps reviews · checked 25 October 2026",
      "accessLabel": "Access",
      "accessValue": "Free",
      "accessNote": "PROMPERÚ describes free entry; tours and nearby venues are separate services. Follow local notices.",
      "hoursLabel": "Published access",
      "hoursValue": "24 hours",
      "hoursNote": "Google Maps listing, 25 Oct 2026; holiday changes possible. Official inventory visitor reference: 08:00–20:00 (2023).",
      "contextLabel": "Setting",
      "contextValue": "Monument Zone",
      "contextNote": "Historic center of Barranco"
    },
    "toc": [
      [
        "historia",
        "History"
      ],
      [
        "cronologia",
        "Timeline"
      ],
      [
        "historias",
        "Stories & legends"
      ],
      [
        "visita",
        "Visit"
      ],
      [
        "servicios",
        "Services"
      ],
      [
        "como-llegar",
        "How to get there"
      ],
      [
        "clima",
        "Weather"
      ],
      [
        "temporada",
        "Season"
      ],
      [
        "naturaleza",
        "Nature"
      ],
      [
        "alrededores",
        "Around"
      ],
      [
        "gastronomia",
        "Food"
      ],
      [
        "itinerarios",
        "Itineraries"
      ],
      [
        "responsabilidad",
        "Responsibility"
      ],
      [
        "fuentes",
        "Sources"
      ],
      [
        "preguntas",
        "Questions"
      ]
    ],
    "history": {
      "eyebrow": "History of the Bridge of Sighs",
      "h2": "A footbridge that came to define Barranco’s landscape",
      "paras": [
        "The District Municipality of Barranco places the bridge’s construction in 1876, during the administration of Francisco García Monterroso. Its function was practical: to join the two sides of the ravine and ease passage between the Ayacucho sector and the Ermita.",
        "The bridge was damaged during the War of the Pacific and repaired in several stages. In 2014 a comprehensive restoration reinforced the walkway with huayruro wood and added lighting. On 29 August 2026, El Peruano reported completion of a new conservation and reinforcement intervention, citing MINCETUR. Its image is also linked to the work of Chabuca Granda, who dedicated a famous composition to the place.",
        "Today it forms part of the heart of Barranco’s Monument Zone and appears in Peru’s National Inventory of Tourism Resources as a cultural asset of architecture and urban spaces.",
        "Source differences: MINCETUR’s inventory and PROMPERÚ’s district guide give inauguration on 14 February 1876, while the general Peru.travel page says 1877. The inventory distinguishes an original 44-metre length from a current 31-metre length. Those figures describe different references rather than a new measurement by this guide."
      ],
      "legendTitle": "The legend, set apart from history",
      "legendText": "Popular tradition invites you to cross the bridge holding your breath while thinking of a wish. It is part of Barranco’s imagination and should be understood as a legend, not a verified historical fact."
    },
    "timeline": [
      {
        "year": "1876",
        "etiqueta": "Inauguration",
        "texto": "The bridge was inaugurated on 14 February during the term of Barranco’s first mayor, Francisco García Monterroso (1875–1878). It was built to bridge the ravine with initial dimensions of 44 m long, 3 m wide and 8.5 m high, according to the municipal record."
      },
      {
        "year": "1881",
        "etiqueta": "War of the Pacific",
        "texto": "During the occupation of Lima, fire damaged part of the bridge’s structure. The municipal record notes its restoration with the help of Patricio Lynch; the walkway again joined both sides of the ravine."
      },
      {
        "year": "1960",
        "etiqueta": "Music and memory",
        "texto": "Peruvian composer Chabuca Granda spread the waltz «Puente de los Suspiros». According to the Municipality of Barranco, that song popularized the bridge’s name and forever tied it to the district’s musical memory."
      },
      {
        "year": "1973",
        "etiqueta": "Protecting the setting",
        "texto": "Supreme Resolution N.º 2900-72-ED, published on 23 January, declares the Monument Zone of Barranco —the historic setting where the bridge stands— a National Monument."
      },
      {
        "year": "1989",
        "etiqueta": "National Monument",
        "texto": "Jefatural Resolution N.º 191-89-INC/J, of 26 April, declares the Bridge of Sighs itself a National Monument (PROMPERÚ register)."
      },
      {
        "year": "2014",
        "etiqueta": "Comprehensive restoration",
        "texto": "An intervention funded by the COPESCO Plan rehabilitated the walkway: structural reinforcement with huayruro wood and new LED lighting, according to the municipal record."
      },
      {
        "year": "2026",
        "etiqueta": "Reopening",
        "texto": "El Peruano reported completion of reinforcement works on 29 August 2026, citing MINCETUR. This supersedes the July progress notice; it is not a live access or lighting timetable."
      }
    ],
    "historias": [
      {
        "kind": "Local tradition",
        "color": "bg-[#6e2430]/10 text-[#6e2430]",
        "titulo": "The wish while crossing",
        "texto": "Barranco’s popular tradition says that whoever crosses the bridge holding their breath while thinking of a wish will see it come true. It is a belief of local imagination, not a certified historical fact: it is part of the charm of the walk."
      },
      {
        "kind": "Music",
        "color": "bg-[#24574d]/10 text-[#24574d]",
        "titulo": "The waltz that fixed the name",
        "texto": "In 1960, Chabuca Granda popularized the bridge’s name with her waltz «Puente de los Suspiros». Today the plaza honoring the artist is a few steps away, within the same historic circuit of Barranco."
      },
      {
        "kind": "Curiosity",
        "color": "bg-[#b0791a]/15 text-[#7a5311]",
        "titulo": "Why “of Sighs”?",
        "texto": "The name evokes, by romantic analogy, the Bridge of Sighs in Venice. It is also said that lovers and strollers who stopped to gaze at the ravine let out a sigh as they crossed. These are versions of popular imagination: there is no single certified official explanation."
      },
      {
        "kind": "Context",
        "color": "bg-[#24574d]/10 text-[#24574d]",
        "titulo": "A seaside and bohemian district",
        "texto": "Barranco grew in the 19th century as a summer seaside resort of Lima. From the early 20th century it was a refuge for poets, painters and bohemians; the municipal record itself describes its bohemian atmosphere and cultural appeal today."
      },
      {
        "kind": "Context",
        "color": "bg-[#24574d]/10 text-[#24574d]",
        "titulo": "The Bajada de Baños",
        "texto": "The historic path that runs beneath the bridge led to the seaside baths of the resort. In Barranco’s urban memory there also remains the funicular that connected the upper part with the beach area, evoked today by its old station."
      },
      {
        "kind": "Heritage",
        "color": "bg-[#6e2430]/10 text-[#6e2430]",
        "titulo": "A cultural asset of Peru",
        "texto": "The bridge appears in Peru’s National Inventory of Tourism Resources (MINCETUR record 5585) as a cultural asset of architecture and urban spaces, and is one of the district’s most recognized postcards."
      }
    ],
    "visita": {
      "eyebrow": "Practical information",
      "h2": "Visiting the Bridge of Sighs without missing what matters",
      "cards": [
        {
          "icon": "◌",
          "title": "Entry and cost",
          "text": "PROMPERÚ’s visitor page describes free entry. This guide does not sell admission or tours; nearby venues and services have their own conditions. Check local notices before crossing."
        },
        {
          "icon": "◷",
          "title": "Best time",
          "text": "The afternoon offers pleasant light for photography and lets you continue to Barranco’s viewpoints. The early hours are usually quieter."
        },
        {
          "icon": "⌁",
          "title": "Suggested time",
          "text": "Plan the bridge and surrounding streets at your own pace, allowing for stops and your return route. Duration depends on your starting point, access conditions and mobility needs."
        },
        {
          "icon": "P",
          "title": "Parking",
          "text": "Check authorised parking and local signs if arriving by car. This guide does not reserve spaces or confirm availability or prices."
        }
      ],
      "note": "The Maps listing checked on 25 October 2026 shows daily 24-hour access, subject to holiday changes. MINCETUR’s inventory entry dated 2023 gives 08:00–20:00 as a visiting reference. These have different dates and scope; neither confirms access in real time."
    },
    "comoLlegar": {
      "eyebrow": "Transport and access",
      "h2": "How to get to the Bridge of Sighs (Puente de los Suspiros)",
      "items": [
        {
          "title": "From Jorge Chávez International Airport (LIM)",
          "text": "If arriving from the airport, choose authorised transport and plan according to traffic and your starting point; no duration is guaranteed. Allow time for breaks and your return route."
        },
        {
          "title": "By Metropolitano",
          "text": "MINCETUR documents a route from the Central Station to the Boulevard Station. From Boulevard you continue on foot about 450 m, roughly 10 minutes. From the airport or the Central Station it connects with the network via transfers."
        },
        {
          "title": "By taxi or ride-hailing app",
          "text": "Indicate “Puente de los Suspiros, Barranco” or “Jr. Batallón 271”. At peak demand it is best to get off near the Municipal Park and walk the last stretch through the historic center."
        },
        {
          "title": "On foot within Barranco",
          "text": "The bridge is two blocks from the Municipal Park according to MINCETUR’s record. It is a short walk through the historic and pedestrian core of the district, ideal for continuing to the Bajada de Baños."
        }
      ]
    },
    "alrededores": {
      "eyebrow": "Immediate surroundings",
      "h2": "A walk that continues beneath the bridge",
      "lead": "The Municipality of Barranco groups the bridge with a series of cultural spaces of the historic circuit. The Bajada de Baños is the natural axis to keep walking toward old mansions, art, gastronomy and views toward the Costa Verde.",
      "cards": [
        {
          "title": "Bajada de Baños",
          "text": "The old ravine path runs beneath the bridge and connects the center of Barranco with the coastal sector."
        },
        {
          "title": "The Ermita de Barranco",
          "text": "A historic temple that forms part of the bridge’s immediate landscape and of the district’s monumental ensemble."
        },
        {
          "title": "Municipal Park",
          "text": "A central reference point to start a walk through historic Barranco and reach the bridge."
        },
        {
          "title": "Plazuela Chabuca Granda",
          "text": "A space linked to the memory of the Peruvian composer whose work is intimately associated with the bridge."
        },
        {
          "title": "Mirador Catalina Recavarren",
          "text": "A viewpoint of the historic circuit with perspective toward the Costa Verde and Barranco’s coastal edge."
        },
        {
          "title": "Old Funicular station",
          "text": "A vestige of the old system that connected the upper part of Barranco with the beach area."
        }
      ]
    },
    "gastronomia": {
      "eyebrow": "Flavors of Barranco",
      "h2": "What to eat near the bridge",
      "lead": "Barranco’s own tourism office presents gastronomy as one of the district’s routes, and the Bajada de Baños gathers cafés, taverns and eateries. This guide receives no payments or commissions from establishments.",
      "tags": [
        "Ceviche",
        "Tiradito",
        "Anticuchos",
        "Causa limeña",
        "Picarones",
        "Pisco sour"
      ],
      "note": "Tip: compare visible menus and prices before ordering and confirm any dietary needs with the establishment."
    },
    "fuentes": {
      "eyebrow": "Public sources and entity association",
      "h2": "Sources to verify information about the Bridge of Sighs",
      "lead": "To avoid confusing this place with other “Puente de los Suspiros”, the guide uses the official name, the Barranco address, coordinates, heritage references and direct links to Peruvian public sources.",
      "links": [
        {
          "title": "District Municipality of Barranco · bridge record",
          "text": "History, restorations and condition as a tourist icon.",
          "href": "https://www.gob.pe/institucion/munibarranco/campa%C3%B1as/98478-puente-de-los-suspiros-bridge-of-sighs"
        },
        {
          "title": "Municipality of Barranco · tourist attractions",
          "text": "Dimensions, material, historical context and local tradition.",
          "href": "https://munibarranco.gob.pe/portal/atractivos-turisticos/"
        },
        {
          "title": "MINCETUR · National Inventory of Tourism Resources",
          "text": "Record 5585, access, hours, location and route to get there.",
          "href": "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=5585"
        },
        {
          "title": "Wikidata · Q42846429",
          "text": "Entity identifier, location and geographic coordinates.",
          "href": "https://www.wikidata.org/wiki/Q42846429"
        },
        {
          "title": "PROMPERÚ · bridge tourism record",
          "text": "Location at Jr. Batallón 271, heritage context and free entry.",
          "href": "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/barranco/puente-de-los-suspiros"
        },
        {
          "title": "Andina · official news agency",
          "text": "Note on the 2026 reopening after six months of conservation and reinforcement.",
          "href": "https://andina.pe/agencia/galeria-puente-los-suspiros-reabrio-tras-seis-meses-trabajos-conservacion-sus-150-anos-30238.aspx"
        },
        {
          "title": "Open-Meteo · weather data",
          "text": "Data source for this guide’s live forecast.",
          "href": "https://open-meteo.com/"
        },
        {
          "title": "SENAMHI · meteorology of Peru",
          "text": "National Service of Meteorology and Hydrology: official source to cross-check the climate.",
          "href": "https://www.senamhi.gob.pe/"
        },
        {
          "title": "Official Tourism Portal of Peru",
          "text": "PROMPERÚ national portal: destination information, procedures and travel recommendations.",
          "href": "https://www.peru.travel/en"
        },
        {
          "title": "MINCETUR · inventory 5585",
          "text": "Historical inventory with a 2023 record date; distinguish original/current dimensions and visiting reference.",
          "href": "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=5585"
        },
        {
          "title": "El Peruano · works completed, 29 August 2026",
          "text": "Official newspaper reporting the later MINCETUR completion announcement.",
          "href": "https://elperuano.pe/noticia/303615-mincetur-recupera-historico-puente-de-los-suspiros-que-ahora-luce-una-estructura-reforzada"
        }
      ]
    },
    "faq": [
      {
        "q": "Does it cost to enter the Bridge of Sighs?",
        "a": "No. MINCETUR’s National Inventory of Tourism Resources and PROMPERÚ’s record indicate free entry."
      },
      {
        "q": "What are the visiting hours?",
        "a": "The Maps listing checked on 25 October 2026 shows daily 24-hour access, subject to holiday changes. MINCETUR’s inventory entry dated 2023 gives 08:00–20:00 as a visiting reference. These have different dates and scope; neither confirms access in real time."
      },
      {
        "q": "How to get there by public transport?",
        "a": "A route documented by MINCETUR goes from the Metropolitano’s Central Station to the Boulevard Station; from there you continue on foot about 450 meters to the bridge."
      },
      {
        "q": "Does the Bridge of Sighs have parking?",
        "a": "The bridge has no parking of its own. It is within a historic area with narrow streets and heavy pedestrian traffic, so it is usually more practical to arrive by public transport, taxi or ride-hailing app and walk the last stretch."
      },
      {
        "q": "How much time should you spend?",
        "a": "If arriving from the airport, choose authorised transport and plan according to traffic and your starting point; no duration is guaranteed. Allow time for breaks and your return route."
      },
      {
        "q": "What is the wish tradition?",
        "a": "Popular tradition says that whoever crosses the bridge holding their breath while thinking of a wish may see it come true. It is a local legend, not a historical fact."
      },
      {
        "q": "Are there public restrooms or services near the bridge?",
        "a": "Confirm restroom locations, opening times and any conditions before you start. This guide does not verify the availability of nearby services in real time."
      },
      {
        "q": "What is the best time of year to visit?",
        "a": "Lima’s summer (December to April) usually brings clear skies and the best light for photos. In the garúa season (May to October) the bridge is also visited comfortably with a light layer; plus there are far fewer people. The bridge is visited year-round."
      },
      {
        "q": "How to get there from Lima’s airport?",
        "a": "If arriving from the airport, choose authorised transport and plan according to traffic and your starting point; no duration is guaranteed. Allow time for breaks and your return route."
      },
      {
        "q": "Is the bridge suitable for people with reduced mobility?",
        "a": "Assess the route and current access conditions for your needs. The Bajada de Baños includes slopes and steps; ask the local authority for current accessibility guidance."
      }
    ],
    "schema": {
      "webPageName": "Bridge of Sighs, Barranco Lima: location, hours and history",
      "webPageDescription": "Visit the Bridge of Sighs in Barranco, Lima: location, dated access information, official history and practical walking guidance. Independent guide.",
      "placeName": "Bridge of Sighs",
      "placeDescription": "Independent guide to the Bridge of Sighs (Puente de los Suspiros) in Barranco, the best-known wooden pedestrian footbridge in Lima (Peru): history, location, transport, weather and surroundings.",
      "touristType": [
        "Historic site",
        "Pedestrian bridge",
        "Cultural asset"
      ]
    }
  }
};

export function buildPlaceSchema(locale: Locale) {
  const c = guide[locale].schema;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings'],
    '@id': 'https://bridgeofsighslima.com/#puente-de-los-suspiros',
    url: 'https://bridgeofsighslima.com/',
    image: ['https://bridgeofsighslima.com/images/puente-suspiros-hero.jpg'],
    name: c.placeName,
    alternateName: [
      'Puente de los Suspiros de Barranco',
      'Puente de los Suspiros (Barranco)',
      'Bridge of Sighs',
      'Bridge of Sighs, Lima'
    ],
    description: c.placeDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jr. Batallón 271',
      addressLocality: 'Barranco',
      addressRegion: 'Lima',
      postalCode: '15063',
      addressCountry: 'PE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.1491798,
      longitude: -77.0226004
    },
    hasMap: 'https://maps.app.goo.gl/JtXw9jp7DcAQgdRu5',
    touristType: c.touristType,
    sameAs: SAME_AS
  };
}

export function buildFaqSchema(locale: Locale) {
  const faq = guide[locale].faq;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

export const clarification: Record<Locale,{q:string;a:string}> = {
 es:{q:'¿Esta guía trata del puente de Lima o del de Venecia?',a:'Esta guía trata del Puente de los Suspiros de Barranco, Lima, Perú: la pasarela de madera sobre la Bajada de Baños.'},
 en:{q:'Is this the bridge in Lima or the one in Venice?',a:'This guide covers the Bridge of Sighs in Barranco, Lima, Peru: the wooden footbridge over the Bajada de Baños.'}
};
