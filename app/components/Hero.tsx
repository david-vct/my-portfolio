import Image from "next/image"
import React from "react"

const Hero = () => {
	return (
		<section className="flex flex-col md:flex-row items-center justify-between w-full md:w-2/3 h-svh p-8">
			<div className="flex flex-col items-center justify-center w-full md:w-1/2">
				<Image
					className="shadow-2xl shadow-primary/50 rounded-full"
					src="/david-profile.jpg"
					alt="David Vicente"
					width={300}
					height={300}
				/>
			</div>
			<div className="w-full md:w-1/2">
				<h3 className="text-xl font-bold">David Vicente</h3>
				<h1 className="text-7xl font-black pt-4 pb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
					Développeur Web.
				</h1>
				<p className="pt-8 text-xl">Création de sites web et applications web addaptés aux besoins des clients.</p>
			</div>
		</section>
	)
}

export default Hero
