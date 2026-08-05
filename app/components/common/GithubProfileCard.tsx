import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const GITHUB_PROFILE = "https://github.com/david-vct"

// Closing slide of the projects carousel. The showcase can only display public
// work, so this slide accounts for the client projects that can't be shown and
// points to what can. Mirrors ProjectPreviewCard's shell so the slides stay
// visually consistent, with the artwork area replaced by an icon.
const GithubProfileCard = () => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-base/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
      <div className="relative flex aspect-video w-full shrink-0 items-center justify-center bg-gradient-to-br from-accent/20 via-base/40 to-base/60">
        <FontAwesomeIcon
          className="text-white/80 transition-transform duration-300 group-hover:scale-110"
          size="4x"
          icon={faGithub}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl md:text-2xl font-bold">
          Le reste de mon travail
        </h3>
        <p className="pt-1 text-sm text-white/60">nov. 2019 – aujourd'hui</p>
        <p className="pt-3 text-md text-white/80">
          Vous trouverez davantage de projets open source sur mon profil GitHub.
          Certaines de mes réalisations pour des clients sont propriétaires, je
          ne dispose donc ni de démo, ni de code à montrer.
        </p>
        <div className="mt-auto flex flex-row items-center gap-6 pt-6">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-row items-center gap-2 font-bold transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
            Voir mon profil GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default GithubProfileCard
