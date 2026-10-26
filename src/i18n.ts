// Configuración de i18n y diccionario de cadenas de UI compartidas.
// Locales: 'es' (predeterminado, sin prefijo) y 'en' (prefijo /en/).
export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; short: string }> = {
  es: { htmlLang: 'es-PE', ogLocale: 'es_PE', label: 'Español', short: 'ES' },
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English', short: 'EN' }
};

// Cadenas de UI compartidas (navegación, pie, conmutador de idioma).
export const ui = {
  es: {
    openMap: 'Abrir mapa',
    language: 'Idioma',
    goTo: 'Ver en inglés',
    backTo: 'Ver en español',
    nav: {
      historia: 'Historia',
      visita: 'Visita',
      comoLlegar: 'Cómo llegar',
      alrededores: 'Alrededores',
      itinerarios: 'Itinerarios',
      preguntas: 'Preguntas'
    },
    footer: {
      privacy: 'Privacidad',
      terms: 'Términos de uso',
      cookies: 'Configuración de cookies',
      tagline: 'Guía independiente para comprender y visitar el Puente de los Suspiros y su entorno histórico en Barranco, Lima.',
      independent: 'Este sitio es un proyecto independiente de información para visitantes. No está afiliado a ninguna entidad gubernamental ni organización oficial.',
      sources: 'La información del atractivo se contrasta con fuentes públicas de la Municipalidad Distrital de Barranco, la Municipalidad Metropolitana de Lima y las entidades nacionales de turismo del Perú, entre ellas MINCETUR y PROMPERÚ. No contiene recomendaciones comerciales pagadas: cuando se mencionan servicios, se indica únicamente la categoría, sin marcas ni comercios concretos.',
      weather: 'El pronóstico del tiempo se basa en Open-Meteo y puede contrastarse con el SENAMHI, la fuente meteorológica oficial del Perú.',
      images: 'Derechos de imagen: la autoría y los derechos de las fotografías mostradas corresponden a sus respectivos fotógrafos; su uso se rige por las licencias indicadas en los Términos de uso.',
      updated: 'Revisión editorial: 25 de octubre de 2026. Cada fuente conserva su propia fecha; las condiciones de acceso pueden cambiar.',
      copyright: '© 2026 Guía del Puente de los Suspiros. Todos los derechos reservados sobre el diseño y los contenidos originales del sitio.'
    },
    // Etiquetas de sección reutilizadas en componentes y página.
    sections: {
      services: 'Servicios y comodidades',
      whenToVisit: 'Cuándo visitar',
      nature: 'Clima, mar y naturaleza',
      itineraries: 'Cómo recorrerlo',
      responsibility: 'Divulgación y cuidado',
      weather: 'Clima y mejor época'
    }
  },
  en: {
    openMap: 'Open map',
    language: 'Language',
    goTo: 'View in English',
    backTo: 'Ver en español',
    nav: {
      historia: 'History',
      visita: 'Visit',
      comoLlegar: 'How to get there',
      alrededores: 'Around',
      itinerarios: 'Itineraries',
      preguntas: 'Questions'
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms of use',
      cookies: 'Cookie settings',
      tagline: 'An independent guide to understand and visit the Bridge of Sighs and its historic surroundings in Barranco, Lima.',
      independent: 'This site is an independent visitor-information project. It is not affiliated with any government body or official organization.',
      sources: 'Attraction information is cross-checked against public sources from the District Municipality of Barranco, the Metropolitan Municipality of Lima and Peru’s national tourism bodies, including MINCETUR and PROMPERÚ. It contains no paid commercial recommendations: when services are mentioned, only the category is indicated, with no specific brands or businesses.',
      weather: 'The weather forecast is based on Open-Meteo and can be cross-checked with SENAMHI, Peru’s official meteorological service.',
      images: 'Image rights: the authorship and rights of the photographs shown belong to their respective photographers; their use is governed by the licenses stated in the Terms of use.',
      updated: 'Editorial review: 25 October 2026. Each source retains its own date; access conditions may change.',
      copyright: '© 2026 Bridge of Sighs Guide. All rights reserved over the design and original contents of the site.'
    },
    sections: {
      services: 'Services and amenities',
      whenToVisit: 'When to visit',
      nature: 'Climate, sea and nature',
      itineraries: 'How to tour it',
      responsibility: 'Outreach and care',
      weather: 'Climate and best season'
    }
  }
} as const;

export function getLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'es';
}

export function uiFor(locale: Locale) {
  return ui[locale];
}
