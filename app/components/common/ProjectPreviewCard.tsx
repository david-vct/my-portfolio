import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"
import { Project } from "../../lib/projects"

type Props = {
	project: Project
}

const linkClass =
	"inline-flex flex-row items-center gap-2 font-bold transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"

// Condensed counterpart of ProjectCard, sized to sit in the carousel: a single
// still preview instead of a slideshow, so the only motion in the section is
// the carousel itself. `h-full` keeps neighbouring slides the same height.
const ProjectPreviewCard = ({ project }: Props) => {
	const { title, period, description, images, site, siteName = "Site", github } = project

	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-base/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
			<div className="relative aspect-video w-full shrink-0 overflow-hidden bg-black/20">
				<Image
					className={project.vertical ? "object-contain" : "object-cover"}
					src={images[0]}
					alt={`Aperçu du projet ${title}`}
					fill={true}
					sizes="(min-width: 640px) 50vw, 100vw"
				/>
			</div>
			<div className="flex flex-1 flex-col p-6">
				<h3 className="text-xl md:text-2xl font-bold">{title}</h3>
				{period && <p className="pt-1 text-sm text-white/60">{period}</p>}
				<p className="pt-3 text-md text-white/80 line-clamp-4">{description}</p>
				<div className="mt-auto flex flex-row items-center gap-6 pt-6">
					{site && (
						<a href={site} target="_blank" rel="noreferrer" className={linkClass}>
							<FontAwesomeIcon icon={faSquareArrowUpRight} />
							{siteName}
						</a>
					)}
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							aria-label={`Code source de ${title} sur GitHub`}
							className={linkClass}
						>
							<FontAwesomeIcon size="lg" icon={faGithub} />
						</a>
					)}
				</div>
			</div>
		</article>
	)
}

export default ProjectPreviewCard
