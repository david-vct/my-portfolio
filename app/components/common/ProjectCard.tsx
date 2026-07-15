import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ButtonLink from "./ButtonLink"
import ImageCarousel from "./ImageCarousel"

type Props = {
  title: string
  description: string
  images: string[]
  site?: string
  github?: string
}

const ProjectCard = ({ title, description, images, site, github }: Props) => {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8 p-8 bg-base/30 backdrop-blur-sm rounded-md border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
      {/*       <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-sebg-base/30 condary opacity-70 group-hover:opacity-100 transition-opacity"></div>
       */}
      <ImageCarousel images={images} className="w-full" />
      <div>
        <h2 className="pb-4 md:pb-8 text-2xl md:text-4xl font-bold">{title}</h2>
        <p className="pb-4 md:pb-8 text-md md:text-xl">{description}</p>
        <div className="flex flex-row items-center gap-8">
          {site && (
            <ButtonLink
              text="Site"
              link={site}
              icon={faSquareArrowUpRight}
            ></ButtonLink>
          )}
          {github && (
            <a href={github} target="_blank">
              <FontAwesomeIcon className="h-8" icon={faGithub} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
