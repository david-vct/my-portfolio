import React from "react"
import ProjectCard from "../common/ProjectCard"
import Reveal from "../common/motion/Reveal"
import Title from "../common/Title"

const ProjectSection = () => {
  return (
    <section id="projets" className="w-full max-w-7xl p-4 md:p-16 mt-16">
      <Reveal>
        <Title title="MA SELECTION DE PROJETS"></Title>
      </Reveal>
      <div className="flex flex-col gap-16">
        <Reveal fade={false}>
          <ProjectCard
            title="PadelGo"
            period="nov. 2024 – aujourd'hui"
            description="Application mobile qui connecte les joueurs de padel pour faciliter la création de parties, la recherche de partenaires et la réservation de terrains."
            images={[
              "/projects/padelgo-1.png",
              "/projects/padelgo-2.png",
              "/projects/padelgo-3.png",
            ]}
            site={"https://apps.apple.com/ma/app/padelgo/id6743053827?l=fr-FR"}
            siteName="App Store"
            vertical={true}
          ></ProjectCard>
        </Reveal>
        <Reveal fade={false}>
          <ProjectCard
            title="DuckDuckGo Custom Tabs"
            period="avr. 2026 – mai 2026"
            description="Extension de navigateur permettant de personnaliser DuckDuckGo en redirigeant les onglets vers les services de son choix comme Google Maps, Wikipédia ou Reddit."
            images={["/projects/ddgct-1.png", "/projects/ddgct-2.png"]}
            site={
              "https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-custom-tabs/"
            }
            siteName="Firefox Add-ons"
            github={"https://github.com/david-vct/duckduckgo-custom-tabs"}
          ></ProjectCard>
        </Reveal>
        <Reveal fade={false}>
          <ProjectCard
            title="Vocabulary Tools pour Google Docs"
            description="Extension pour Google Docs qui fournit un accès instantané aux synonymes, antonymes et conjugaisons"
            images={["/projects/vocabularytools-1.jpg"]}
            github={"https://github.com/david-vct/gdocs-vocabulary-tools"}
          ></ProjectCard>
        </Reveal>
        <Reveal fade={false}>
          <ProjectCard
            title="Rculture"
            description="Jeu multijoueur captivant où les participants répondent à des quiz créés par la communauté. Défie tes amis et découvre de nouvelles questions à chaque partie !"
            images={[
              "/projects/rculture-1.png",
              "/projects/rculture-2.png",
              "/projects/rculture-3.png",
            ]}
            site={"https://rculture.web.app"}
            github={"https://github.com/david-vct/rculture"}
          ></ProjectCard>
        </Reveal>
      </div>
    </section>
  )
}

export default ProjectSection
