import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
				<div className="pb-8 border-b border-neutral">
					<h1 className="text-7xl font-black pb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						Développeur Web.
					</h1>
					<p className="text-xl font-bold">Ensemble, créons des applications web robustes et performantes.</p>
				</div>
				<p className="pt-8 text-xl">Actuellement disponible pour le prochain projet.</p>
				<div className="flex flex-row items-center gap-8 pt-8">
					<a
						className="flex flex-row items-center px-4 py-2 bg-neutral rounded bg-white text-base font-bold"
						href="mailto:david.vct@proton.me"
						target="_blank"
					>
						<FontAwesomeIcon className="h-5" icon={faEnvelopesBulk} />
						<div className="pl-4 text-xl">Contactez-moi</div>
					</a>
					<a href="https://www.linkedin.com/in/david-vct/" target="_blank">
						<FontAwesomeIcon className="h-8" icon={faLinkedin} />
					</a>
					<a href="https://github.com/david-vct" target="_blank">
						<FontAwesomeIcon className="h-8" icon={faGithub} />
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
