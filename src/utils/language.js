const menuBarCommon = [
  { label: "home", path: "/home" },
  { label: "blog", path: "/blog" },
]

export const textsMultiLanguage = {
  pt: {
    menuBar: [...menuBarCommon, { label: "currículo", path: "/resume" }],
    cover: {
      subtitle: "Desenho e desenvolvo para web, e eu amo o que eu faço.",
    },
  },
  en: {
    menuBar: [...menuBarCommon, { label: "resume", path: "/resume" }],
    cover: {
      subtitle: "Design and code for web, and I love what I do.",
    },
  },
}
