import React from "react"
import { featuredProjects, otherProjects } from "../../lib/projects"
import ProjectCard from "../common/ProjectCard"
import ProjectCarousel from "../common/ProjectCarousel"
import Reveal from "../common/motion/Reveal"
import Title from "../common/Title"

const ProjectSection = () => {
	return (
		<section id="projets" className="w-full max-w-7xl p-4 md:p-16 mt-16">
			<Reveal>
				<Title title="Ma sélection de projets"></Title>
			</Reveal>
			<div className="flex flex-col gap-16">
				{featuredProjects.map((project) => (
					<Reveal key={project.id} fade={false}>
						<ProjectCard project={project} />
					</Reveal>
				))}
			</div>
			{otherProjects.length > 0 && (
				<Reveal className="mt-24" fade={false}>
					<h3 className="pb-8 text-xl md:text-2xl font-bold">
						Mes autres réalisations
					</h3>
					<ProjectCarousel projects={otherProjects} />
				</Reveal>
			)}
		</section>
	)
}

export default ProjectSection
