interface Locale {
  text: string
  translated: number
}

const locales: { [key: string]: Locale } = {
  en: {
    text: "πΊπΈ English",
    translated: 100,
  },
  "pt-BR": {
    text: "π§π· Portuguese (Brazilian)",
    translated: 100,
  },
  de: {
    text: "π©πͺ German",
    translated: 100,
  },
  fr: {
    text: "π«π· French",
    translated: 100,
  },
  "sv-SE": {
    text: "πΈπͺ Swedish",
    translated: 100,
  },
  nl: {
    text: "π³π± Dutch",
    translated: 100,
  },
  ru: {
    text: "π·πΊ Russian",
    translated: 100,
  },
  sk: {
    text: "πΈπ° Slovak",
    translated: 100,
  },
}

export default locales
