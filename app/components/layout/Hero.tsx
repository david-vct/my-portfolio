import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faEnvelopesBulk, faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"
import ButtonLink from "../common/ButtonLink"

const Hero = () => {
	return (
		<section className="grid lg:grid-cols-3 gap-16 w-full max-w-7xl min-h-svh p-4 md:p-16">
			<div className="place-self-center">
				<Image
					className="shadow-2xl shadow-primary/40 rounded-full"
					src="/david-profile.webp"
					alt="David Vicente"
					width={300}
					height={300}
				/>
			</div>
			<div className="lg:col-span-2 self-center">
				<div className="pb-8 border-b border-neutral">
					<h1 className="text-4xl md:text-7xl font-black pb-6 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
						DEVELOPPEUR WEB.
					</h1>
					<p className="text-md md:text-xl font-bold">
						Ensemble, créons des applications web robustes et performantes.
					</p>
				</div>
				<div>
					<ul className="pt-8 text-md md:text-xl font-bold bg-gradient-to-tl from-accent to-secondary bg-clip-text">
						<li className="flex flex-row items-center gap-2">
							<FontAwesomeIcon className="h-3 text-accent" icon={faStarOfLife} />
							<p>
								<span className="text-transparent">Actuellement disponible</span> pour le prochain projet
							</p>
						</li>
						<li className="flex flex-row items-center gap-2">
							<FontAwesomeIcon className="h-3 text-accent" icon={faStarOfLife} />
							<p>
								Création de <span className="text-transparent">sites web personnalisés</span>
							</p>
						</li>
						<li className="flex flex-row items-center gap-2">
							<FontAwesomeIcon className="h-3 text-accent" icon={faStarOfLife} />
							<p>
								Plus de <span className="text-transparent">trois ans d'expérience</span>
							</p>
						</li>
					</ul>
				</div>
				<div className="flex flex-row items-center gap-8 pt-8">
					<ButtonLink text="Contactez-moi" link="mailto:david.vct@proton.me" icon={faEnvelopesBulk}></ButtonLink>
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
