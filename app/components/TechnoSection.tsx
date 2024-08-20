import React from "react"

const TechnoSection = () => {
	return (
		<section className="w-full md:w-2/3 p-16 bg-secondary">
			<h1 className="text-4xl font-bold pb-16">Les technologies</h1>
			<div className="flex flex-row justify-between w-2/3">
				<div>Next</div>
				<div>React</div>
				<div>Node</div>
				<div>TypeScript</div>
			</div>
		</section>
	)
}

export default TechnoSection
