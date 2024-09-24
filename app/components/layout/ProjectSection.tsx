import React from "react"
import Project from "../common/Project"

const ProjectSection = () => {
	return (
		<section className="w-full md:w-2/3 p-16 bg-primary/20">
			<h1 className="text-4xl font-bold pb-16">Mes Projets</h1>
			<div className="flex flex-col">
				<Project
					title="Vocabulary Tools pour Google Docs"
					description="Extension pour Google Docs qui fournit un accès instantané aux synonymes, antonymes et conjugaisons"
					images={["/project-vocabularytools-1.jpg"]}
				></Project>
				<div>Project 2</div>
			</div>
		</section>
	)
}

export default ProjectSection
