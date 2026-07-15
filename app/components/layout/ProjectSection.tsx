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
						title="Vocabulary Tools pour Google Docs"
						description="Extension pour Google Docs qui fournit un accès instantané aux synonymes, antonymes et conjugaisons"
						images={["/project-vocabularytools-1.jpg"]}
						github={"https://github.com/david-vct/gdocs-vocabulary-tools"}
					></ProjectCard>
				</Reveal>
				<Reveal fade={false}>
					<ProjectCard
						title="Rculture"
						description="Jeu multijoueur captivant où les participants répondent à des quiz créés par la communauté. Défie tes amis et découvre de nouvelles questions à chaque partie !"
						images={["/project-rculture-1.png", "/project-rculture-2.png", "/project-rculture-3.png"]}
						site={"https://rculture.web.app"}
						github={"https://github.com/david-vct/rculture"}
					></ProjectCard>
				</Reveal>
			</div>
		</section>
	)
}

export default ProjectSection
