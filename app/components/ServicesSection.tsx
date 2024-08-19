import React from "react"

const ServicesSection = () => {
	return (
		<section className="relative flex flex-row items-center justify-center w-full md:w-2/3 p-8">
			<div className="absolute z-[-1] w-full h-full bg-[url('/grid-orange.svg')] [mask-image:radial-gradient(circle,transparent_0%,#000_30%,transparent_70%)]"></div>
			<div className="w-1/2 h-46 p-8 m-4 bg-base drop-shadow-ml rounded-md">
				<h2 className="text-2xl font-bold">Création applications web</h2>
				<p className="text-xl pt-4">Je crée des sites et application web performantes et robustes</p>
			</div>
			<div className="w-1/2 h-46 p-8 m-4 bg-base drop-shadow-xl">
				<h2 className="text-2xl font-bold">Service 2</h2>
				<p className="text-xl pt-4">Je crée des sites et application web performantes et robustes</p>
			</div>
		</section>
	)
}

export default ServicesSection
