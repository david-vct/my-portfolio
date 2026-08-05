import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Project } from "../../lib/projects"
import ButtonLink from "./ButtonLink"
import ImageCarousel from "./ImageCarousel"

type Props = {
	project: Project
}

// Full-width card for highlighted projects: screenshots slideshow on one side,
// details on the other. See ProjectPreviewCard for the carousel-sized variant.
const ProjectCard = ({ project }: Props) => {
	const {
		title,
		period,
		description,
		images,
		site,
		siteName = "Site",
		github,
		vertical = false,
	} = project

	return (
		<article className="group relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8 p-8 bg-base/30 backdrop-blur-sm rounded-md border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
			<ImageCarousel images={images} vertical={vertical} className="w-full" />
			<div>
				<h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
				{period && <p className="pb-2 text-sm  text-white/60">{period}</p>}
				<p className="pt-2 pb-4 md:pt-4 md:pb-8 text-md md:text-xl">{description}</p>
				<div className="flex flex-row items-center gap-8">
					{site && (
						<ButtonLink text={siteName} link={site} icon={faSquareArrowUpRight} />
					)}
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							aria-label={`Code source de ${title} sur GitHub`}
							className="inline-block -m-3 rounded p-3 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
						>
							<FontAwesomeIcon size="xl" icon={faGithub} />
						</a>
					)}
				</div>
			</div>
		</article>
	)
}

export default ProjectCard
