import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ButtonLink from "./ButtonLink"
import ImageCarousel from "./ImageCarousel"

type Props = {
  title: string
  period?: string
  description: string
  images: string[]
  site?: string
  siteName?: string
  github?: string
  vertical?: boolean
}

const ProjectCard = ({
  title,
  period,
  description,
  images,
  site,
  siteName = "Site",
  github,
  vertical = false,
}: Props) => {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8 p-8 bg-base/30 backdrop-blur-sm rounded-md border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
      {/*       <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-sebg-base/30 condary opacity-70 group-hover:opacity-100 transition-opacity"></div>
       */}
      <ImageCarousel images={images} vertical={vertical} className="w-full" />
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        {period && <p className="pb-2 text-sm  text-white/60">{period}</p>}
        <p className="pt-2 pb-4 md:pt-4 md:pb-8 text-md md:text-xl">
          {description}
        </p>
        <div className="flex flex-row items-center gap-8">
          {site && (
            <ButtonLink
              text={siteName}
              link={site}
              icon={faSquareArrowUpRight}
            ></ButtonLink>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="inline-block rounded transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            >
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
