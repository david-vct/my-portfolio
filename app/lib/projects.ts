export type Project = {
  /** Stable key, also used as the React key in lists. */
  id: string
  title: string
  period?: string
  description: string
  /** First image is used as the preview thumbnail in the carousel. */
  images: string[]
  site?: string
  siteName?: string
  github?: string
  /** True for portrait (mobile) screenshots, which must not be cropped. */
  vertical?: boolean
}

// Highlighted work: rendered as full-width cards at the top of the section.
export const featuredProjects: Project[] = [
  {
    id: "padelgo",
    title: "PadelGo",
    period: "nov. 2024 – aujourd'hui",
    description:
      "Application mobile qui connecte les joueurs de padel pour faciliter la création de parties, la recherche de partenaires et la réservation de terrains.",
    images: [
      "/projects/padelgo-1.png",
      "/projects/padelgo-2.png",
      "/projects/padelgo-3.png",
    ],
    site: "https://apps.apple.com/ma/app/padelgo/id6743053827?l=fr-FR",
    siteName: "App Store",
    vertical: true,
  },
  {
    id: "duckduckgo-custom-tabs",
    title: "DuckDuckGo Custom Tabs",
    period: "avr. 2026 – mai 2026",
    description:
      "Extension de navigateur permettant de personnaliser DuckDuckGo en redirigeant les onglets vers les services de son choix comme Google Maps, Wikipédia ou Reddit.",
    images: ["/projects/ddgct-1.png", "/projects/ddgct-2.png"],
    site: "https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-custom-tabs/",
    siteName: "Firefox Add-ons",
    github: "https://github.com/david-vct/duckduckgo-custom-tabs",
  },
]

// Everything else: shown as compact cards inside the auto-playing carousel.
export const otherProjects: Project[] = [
  {
    id: "experimental-coding",
    title: "Experimental Coding",
    period: "juil. 2026 – aujourd'hui",
    description:
      "Galerie d'expérimentations autour du code créatif : quines, fractales, shaders WebGL et automates cellulaires. Chaque expérience tient dans un seul fichier, sans build ni dépendance, et s'exécute directement dans la page.",
    images: [
      "/projects/experimental-coding-1.gif",
      "/projects/experimental-coding-2.gif",
      "/projects/experimental-coding-3.png",
    ],
    site: "https://david-vct.github.io/experimental-coding/",
    siteName: "Galerie",
    github: "https://github.com/david-vct/experimental-coding",
  },
  {
    id: "vocabulary-tools",
    title: "Vocabulary Tools pour Google Docs",
    period: "juil. 2024 – sept. 2024",
    description:
      "Extension pour Google Docs qui fournit un accès instantané aux synonymes, antonymes et conjugaisons",
    images: ["/projects/vocabularytools-1.jpg"],
    github: "https://github.com/david-vct/gdocs-vocabulary-tools",
  },
  {
    id: "rculture",
    title: "Rculture",
    period: "mars 2024 – avr. 2024",
    description:
      "Jeu multijoueur captivant où les participants répondent à des quiz créés par la communauté. Défie tes amis et découvre de nouvelles questions à chaque partie !",
    images: [
      "/projects/rculture-1.png",
      "/projects/rculture-2.png",
      "/projects/rculture-3.png",
    ],
    site: "https://rculture.web.app",
    github: "https://github.com/david-vct/rculture",
  },
]
