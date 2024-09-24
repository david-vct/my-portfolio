import { faNodeJs, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const TechnoSection = () => {
	return (
		<section className="w-full md:w-2/3 min-h-[40svh] p-16">
			<div className="flex flex-row justify-around pb-8 pt-8 border-b border-t border-neutral">
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
