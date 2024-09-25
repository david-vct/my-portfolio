import React from "react"
import Project from "../common/Project"

const ProjectSection = () => {
	return (
		<section className="w-full md:w-2/3 p-16">
			<div className="flex flex-col">
				<Project
					title="Vocabulary Tools pour Google Docs"
					description="Extension pour Google Docs qui fournit un accès instantané aux synonymes, antonymes et conjugaisons"
					images={["/project-vocabularytools-1.jpg"]}
					github={"https://github.com/david-vct/gdocs-vocabulary-tools"}
				></Project>
				<Project
					title="Rculture"
					description="Jeu multijoueur captivant où les participants répondent à des quiz créés par la communauté. Défie tes amis et découvre de nouvelles questions à chaque partie !"
					images={["/project-rculture-1.png", "/project-rculture-2.png", "/project-rculture-3.png"]}
					site={"https://rculture.web.app"}
					github={"https://github.com/david-vct/rculture"}
				></Project>
			</div>
		</section>
	)
}

export default ProjectSection
