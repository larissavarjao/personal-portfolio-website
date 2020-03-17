const menuBarCommon = [
  { label: "home", path: "/home" },
  { label: "blog", path: "/blog" },
]

const frontEndCommon = {
  type: "frontend",
  title: "Front-End",
  languages: "Html, Css, Sass, Less, JavaScript, TypeScript",
  frameworks: [
    "ReactJs",
    "Redux",
    "Mobx",
    "Webpack",
    "Ruby On Rails",
    "Gatsby",
    "Bootstrap",
    "Git",
    "Github",
    "Gitlab",
  ],
}

export const textsMultiLanguage = {
  pt: {
    menuBar: [...menuBarCommon, { label: "currículo", path: "/resume" }],
    cover: {
      subtitle: "Desenho e desenvolvo para web, e eu amo o que eu faço.",
    },
    helloworld: {
      title: "Olá, mundo! Prazer, sou a Larissa!",
      text:
        "Quando estava terminando minha graduação em administração, percebi que finalizava" +
        " sem realmente me identificar com o que fazia. Foi nesse momento que comecei a aprender" +
        " a programar e me interessar cada vez mais pela área de TI. Me tornei inicialmente Front-End " +
        "e depois comecei a buscar também Back-End. Hoje, trabalho como FullStack Web, desenvolvendo" +
        " APIs e fazendo sites e dashboards dinâmicos e responsivos.",
    },
    devskills: {
      language: "Linguagens que domino: ",
      data: [
        {
          ...frontEndCommon,
          description:
            "Como desenvolvedora front-end, adoro desenvolver coisas bonitas e dar contribuições nos projetos em que estou trabalhando.",
        },
      ],
    },
  },
  en: {
    menuBar: [...menuBarCommon, { label: "resume", path: "/resume" }],
    cover: {
      subtitle: "Design and code for web, and I love what I do.",
    },
    helloworld: {
      title: "Hello, world! Nice to meet you, I'm Larissa!",
      text:
        "When I was finishing my bachelor degree in Business Administration, I realize that I " +
        "would finish without really identifying myself with what I was doing. It was at that moment that I" +
        " began to learn how to program and become more and more interested in IT. I first became Front-End" +
        " and then I started looking for Back-End as well. Today, I work at Cubos as FullStack Web, developing" +
        " APIs and making dynamic and responsive websites and dashboards.",
    },
    devskills: {
      language: "Languages I know",
      data: [
        {
          ...frontEndCommon,
          description:
            "As a front-end developer I love to code beautiful things and give inputs in the projects that I'm working on.",
        },
      ],
    },
  },
}
