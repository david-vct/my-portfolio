import React from "react"
import { Project } from "../../lib/projects"
import Carousel from "./Carousel"
import GithubProfileCard from "./GithubProfileCard"
import ProjectPreviewCard from "./ProjectPreviewCard"

type Props = {
	projects: Project[]
}

// Binds the generic Carousel to project data. Keeping this seam means the
// carousel stays reusable for anything else the page needs to scroll, and the
// cards themselves stay server-rendered.
const ProjectCarousel = ({ projects }: Props) => {
	return (
		<Carousel label="Autres projets réalisés">
			{projects.map((project) => (
				<ProjectPreviewCard key={project.id} project={project} />
			))}
			<GithubProfileCard />
		</Carousel>
	)
}

export default ProjectCarousel
