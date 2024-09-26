import { faNodeJs, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const TechnoSection = ({ className }: { className?: string }) => {
	return (
		<section className={className}>
			<div className="flex flex-row justify-around p-8 bg-base rounded-md border border-neutral">
				<div className="flex flex-row items-center gap-4 text-xl">
					<FontAwesomeIcon className="h-8" icon={faReact} />
					<div>React</div>
				</div>
				<div className="flex flex-row items-center gap-4 text-xl">
					<FontAwesomeIcon className="h-8" icon={faNodeJs} />
					<div>Node</div>
				</div>
				<div className="flex flex-row items-center gap-4 text-xl">
					<FontAwesomeIcon className="h-8" icon={faSquareJs} />
					<div>TypeScript & JavaScript</div>
				</div>
			</div>
		</section>
	)
}

export default TechnoSection
