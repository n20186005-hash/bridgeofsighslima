import type { Locale } from '../i18n';

// Diccionario i18n del componente Weather (etiquetas WMO, motor de consejos
// y textos de interfaz). El script del cliente lo lee desde un JSON embebido.
export const weatherI18n: Record<Locale, {
  dateLocale: string;
  section: { eyebrow: string; h2: string; lead: string };
  cards: { title: string; text: string }[];
  meta: { source: string; coords: string; live: string; updatedPrefix: string; updatedSuffix: string; seedPrefix: string; seedSuffix: string; seedFallback: string };
  ui: { consulting: string; preparing: string; errConnect: string; needJs: string; next7: string; precProb: string; feels: string; humidity: string; wind: string; precaution: string; dress: string; plan: string; bring: string; celsius: string };
  wmo: Record<number, string>;
  advice: {
    storm: string; heavyRain: string; strongWind: string; fog: string;
    hot: string; cold: string; thermalAmp: string; rainWind: string; rainProb: string; uv: string; wind: string; mist: string; mild: string;
    sunny: string; cloudy: string; foggy: string; stormPlan: string; heavyRainPlan: string; lightRainPlan: string; strongWindPlan: string; windPlan: string; hotPlan: string; uvPlan: string; mildPlan: string;
    rainItemWind: string; rainItem: string; hotItem: string; uvItem: string; windItem: string; coldItem: string; camItem: string; shoeItem: string; mildItem: string;
  };
}> = {
  es: {
    dateLocale: 'es-PE',
    section: {
      eyebrow: 'Clima y mejor época',
      h2: 'El clima de Lima en Barranco',
      lead: 'El microclima de Lima condiciona la experiencia de visita: conviene saber qué tiempo encontrará antes de planear la caminata por el puente, la Bajada de Baños y los miradores.'
    },
    cards: [
      { title: 'Un desierto con niebla costera', text: 'Lima está en la costa desértica del Pacífico, pero su clima es templado casi todo el año. Entre mayo y octubre domina la <em>garúa</em> (niebla costera): cielos grises y humedad que se siente fría. Entre diciembre y abril predominan el sol y el calor húmedo.' },
      { title: 'Mejor época para ir', text: 'El verano (diciembre a abril) ofrece los cielos más despejados y la mejor luz para fotografías y atardeceres. En invierno el puente también se visita con comodidad: bastan una capa ligera y calzado cerrado. Todo el año conviene revisar la previsión antes de salir.' },
      { title: 'Qué llevar', text: 'Chaqueta o chalina ligera (por la brisa del mar y la garúa), calzado cómodo y antideslizante para los desniveles, protector solar y agua en verano, y una cámara para la luz dorada de la tarde.' }
    ],
    meta: {
      source: 'Fuente: Open-Meteo',
      coords: 'Barranco · coordenadas del puente (12,149° S; 77,023° O)',
      live: 'Pronóstico en vivo',
      updatedPrefix: 'Actualizado a las ',
      updatedSuffix: ' (hora de Lima). Fuente: Open-Meteo.',
      seedPrefix: 'Datos generados al compilar el sitio el ',
      seedSuffix: ' (hora de Lima). Se actualizan en tu navegador.',
      seedFallback: 'El pronóstico se genera al compilar el sitio y se actualiza en tu navegador.'
    },
    ui: {
      consulting: 'Consultando el tiempo actual…',
      preparing: 'Preparando la previsión…',
      errConnect: 'No se pudo conectar con el servicio meteorológico en este momento. Usa la guía de clima de la izquierda y consulta la previsión oficial del SENAMHI.',
      needJs: 'El panel interactivo requiere JavaScript. Para verificar el clima oficial de la zona consulta el Servicio Nacional de Meteorología e Hidrología del Perú (SENAMHI).',
      next7: 'Próximos 7 días',
      precProb: 'Probabilidad de precipitación',
      feels: 'Sensación',
      humidity: 'Humedad',
      wind: 'Viento',
      precaution: '⚠️ Precaucion:',
      dress: 'Como vestirte',
      plan: 'Como planear tu visita',
      bring: 'Que llevar',
      celsius: ' °C'
    },
    wmo: {
      0: 'Cielo despejado', 1: 'Mayormente despejado', 2: 'Parcialmente nublado', 3: 'Nublado',
      45: 'Niebla', 48: 'Niebla con escarcha',
      51: 'Llovizna ligera', 53: 'Llovizna', 55: 'Llovizna intensa',
      56: 'Llovizna helada ligera', 57: 'Llovizna helada',
      61: 'Lluvia ligera', 63: 'Lluvia moderada', 65: 'Lluvia intensa',
      66: 'Lluvia helada ligera', 67: 'Lluvia helada',
      71: 'Nieve ligera', 73: 'Nieve moderada', 75: 'Nieve intensa', 77: 'Granos de nieve',
      80: 'Chubascos ligeros', 81: 'Chubascos', 82: 'Chubascos intensos',
      85: 'Chubascos de nieve ligeros', 86: 'Chubascos de nieve',
      95: 'Tormenta eléctrica', 96: 'Tormenta con granizo ligero', 99: 'Tormenta con granizo fuerte'
    },
    advice: {
      storm: 'Tormenta electrica: evita la playa y el mar, y no te refugies bajo arboles; consulta los avisos locales antes de cualquier actividad.',
      heavyRain: 'Lluvia intensa: evita la quebrada y la Bajada de Banos (desnivel y posibles encharcamientos); sigue los avisos oficiales y evita superficies resbaladizas.',
      strongWind: 'Viento fuerte (>=7 en la escala de Beaufort): mantente lejos de acantilados y rocas en la costa; consulta los avisos locales antes de actividades al aire libre.',
      fog: 'Niebla costera: la visibilidad es baja; no es el mejor momento para ver el mar ni la costa desde los miradores.',
      hot: 'Hace calor: ropa ligera y transpirable; evita salir a pleno mediodia.',
      cold: 'Hace frio: abrigo grueso y bufanda.',
      thermalAmp: 'Gran amplitud termica: lleva una chaqueta o chalina para abrigarte al atardecer.',
      rainWind: 'Lluvia y viento: mejor un impermeable que un paraguas.',
      rainProb: 'Lluvia probable: impermeable o paraguas.',
      uv: 'Sol fuerte: protector solar, gorra y gafas de sol.',
      wind: 'Viento: una chaqueta cortavientos ayuda; evita faldas largas y sombreros de ala ancha.',
      mist: 'Bruma costera: una capa ligera basta; la humedad se siente fria.',
      mild: 'Dia templado: ropa comoda para caminar por el barrio.',
      sunny: 'Dia soleado: ideal para la caminata por el puente y la Bajada de Banos; buena luz para fotos al atardecer.',
      cloudy: 'Cielo nublado: luz suave, muy buena para fotografia; organiza el paseo según las condiciones reales.',
      foggy: 'Niebla: no es momento para ver el mar ni la costa desde los miradores; aprovecha el casco historico.',
      stormPlan: 'Tormenta: mejor planear actividades bajo techo (museos y cafeterias del barrio).',
      heavyRainPlan: 'Lluvia intensa: prefiere interiores; la Bajada de Banos y la costa quedan para otro momento.',
      lightRainPlan: 'Lluvia ligera: las superficies resbalan; acorta el paseo al aire libre.',
      strongWindPlan: 'Viento fuerte: evita la costa rocosa y las embarcaciones de paseo.',
      windPlan: 'Viento: lleva abrigo y consulta los avisos locales.',
      hotPlan: 'Calor: acorta el tiempo al aire libre y busca sombra.',
      uvPlan: 'UV muy alta: evita el sol directo al mediodia.',
      mildPlan: 'Buen momento para recorrer el casco historico de Barranco a tu ritmo.',
      rainItemWind: 'Impermeable (mejor que el paraguas si hay viento)',
      rainItem: 'Paraguas plegable o impermeable',
      hotItem: 'Protector solar, gafas de sol y agua',
      uvItem: 'Protector solar y gorra',
      windItem: 'Nada suelto que se pueda llevar el viento',
      coldItem: 'Una chaqueta o chalina ligera',
      camItem: 'Camara para la luz dorada de la tarde',
      shoeItem: 'Calzado cerrado y antideslizante',
      mildItem: 'Calzado comodo para caminar'
    }
  },
  en: {
    dateLocale: 'en-US',
    section: {
      eyebrow: 'Climate and best season',
      h2: 'Lima’s climate in Barranco',
      lead: 'Lima’s microclimate shapes the visit experience: it helps to know what weather to expect before planning the walk across the bridge, the Bajada de Baños and the viewpoints.'
    },
    cards: [
      { title: 'A desert with coastal fog', text: 'Lima lies on the Pacific desert coast, yet its climate is mild almost all year. Between May and October the <em>garúa</em> (coastal fog) dominates: grey skies and a humidity that feels cold. Between December and April the sun and humid heat prevail.' },
      { title: 'Best time to go', text: 'Summer (December to April) brings the clearest skies and the best light for photos and sunsets. In winter the bridge is also visited comfortably: a light layer and closed shoes are enough. Year-round, check the forecast before heading out.' },
      { title: 'What to bring', text: 'A light jacket or scarf (for the sea breeze and garúa), comfortable non-slip shoes for the slopes, sunscreen and water in summer, and a camera for the golden afternoon light.' }
    ],
    meta: {
      source: 'Source: Open-Meteo',
      coords: 'Barranco · bridge coordinates (12.149° S; 77.023° W)',
      live: 'Live forecast',
      updatedPrefix: 'Updated at ',
      updatedSuffix: ' (Lima time). Source: Open-Meteo.',
      seedPrefix: 'Data generated when compiling the site on ',
      seedSuffix: ' (Lima time). They refresh in your browser.',
      seedFallback: 'The forecast is generated when compiling the site and refreshes in your browser.'
    },
    ui: {
      consulting: 'Checking the current weather…',
      preparing: 'Preparing the forecast…',
      errConnect: 'Could not connect to the weather service right now. Use the climate guide on the left and check SENAMHI’s official forecast.',
      needJs: 'The interactive panel requires JavaScript. To verify the area’s official weather, consult Peru’s National Service of Meteorology and Hydrology (SENAMHI).',
      next7: 'Next 7 days',
      precProb: 'Precipitation probability',
      feels: 'Feels like',
      humidity: 'Humidity',
      wind: 'Wind',
      precaution: '⚠️ Caution:',
      dress: 'How to dress',
      plan: 'How to plan your visit',
      bring: 'What to bring',
      celsius: ' °C'
    },
    wmo: {
      0: 'Clear sky', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Fog', 48: 'Rime fog',
      51: 'Light drizzle', 53: 'Drizzle', 55: 'Dense drizzle',
      56: 'Light freezing drizzle', 57: 'Freezing drizzle',
      61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
      66: 'Light freezing rain', 67: 'Freezing rain',
      71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow', 77: 'Snow grains',
      80: 'Slight showers', 81: 'Showers', 82: 'Violent showers',
      85: 'Slight snow showers', 86: 'Snow showers',
      95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
    },
    advice: {
      storm: 'Thunderstorm: avoid the beach and sea, and do not shelter under trees; check local notices before any activity.',
      heavyRain: 'Heavy rain: avoid the ravine and the Bajada de Baños (slopes and possible puddles); follow official local notices and avoid slippery surfaces.',
      strongWind: 'Strong wind (>=7 on the Beaufort scale): stay away from cliffs and rocks on the coast; check local notices before outdoor activities.',
      fog: 'Coastal fog: visibility is low; not the best time to see the sea or coast from the viewpoints.',
      hot: 'Hot: light, breathable clothing; avoid being out at midday.',
      cold: 'Cold: warm coat and scarf.',
      thermalAmp: 'Large temperature swing: bring a jacket or scarf for the evening.',
      rainWind: 'Rain and wind: a raincoat is better than an umbrella.',
      rainProb: 'Likely rain: raincoat or umbrella.',
      uv: 'Strong sun: sunscreen, cap and sunglasses.',
      wind: 'Wind: a windbreaker helps; avoid long skirts and wide-brim hats.',
      mist: 'Coastal mist: a light layer is enough; the humidity feels cold.',
      mild: 'Mild day: comfortable clothes for walking around the neighborhood.',
      sunny: 'Sunny day: ideal for the walk across the bridge and the Bajada de Baños; good light for photos at sunset.',
      cloudy: 'Cloudy sky: soft light, very good for photography; plan the walk according to actual conditions.',
      foggy: 'Fog: not the time to see the sea or coast from the viewpoints; enjoy the historic center.',
      stormPlan: 'Storm: better to plan indoor activities (museums and cafés in the neighborhood).',
      heavyRainPlan: 'Heavy rain: prefer interiors; the Bajada de Baños and the coast can wait for another time.',
      lightRainPlan: 'Light rain: surfaces are slippery; shorten the outdoor walk.',
      strongWindPlan: 'Strong wind: avoid the rocky coast and pleasure boats.',
      windPlan: 'Wind: bring a layer and check local notices.',
      hotPlan: 'Heat: shorten outdoor time and seek shade.',
      uvPlan: 'Very high UV: avoid direct sun at midday.',
      mildPlan: 'Good time to tour historic Barranco at your own pace.',
      rainItemWind: 'Raincoat (better than an umbrella if there is wind)',
      rainItem: 'Folding umbrella or raincoat',
      hotItem: 'Sunscreen, sunglasses and water',
      uvItem: 'Sunscreen and cap',
      windItem: 'Nothing loose that the wind could carry off',
      coldItem: 'A light jacket or scarf',
      camItem: 'Camera for the golden afternoon light',
      shoeItem: 'Closed, non-slip footwear',
      mildItem: 'Comfortable walking shoes'
    }
  }
};
