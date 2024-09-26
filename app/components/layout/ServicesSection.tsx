import { faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Title from "../common/Title"
import TechnoSection from "./TechnoSection"

const ServicesSection = () => {
	return (
		<section className="relative flex flex-col place-content-center w-full max-w-7xl min-h-[80svh] p-4 md:p-16 mt-16 overflow-hidden">
			<div className="absolute z-[-1] -top-1 skew-x-12 w-full h-full bg-origin-padding bg-[url('/grid-orange.svg')] [mask-image:radial-gradient(circle,transparent_0%,#000_40%,transparent_60%)]"></div>
			<Title title="MES SERVICES" />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 place-content-center">
				<div className="p-8 bg-base drop-shadow-ml rounded-md border border-neutral">
					<h2 className="text-2xl md:text-4xl font-bold">Développement Front-end</h2>
					<ul className="flex flex-col gap-2 text-md md:text-xl pt-4 list-disc">
						<li>Intégration de maquettes : Conversion de designs créés par des designers en code fonctionnel</li>
						<li>Responsive Design : Développement de sites web adaptés à tous types d’écrans</li>
						<li>Optimisation : Amélioration de la vitesse de chargement et de l'interaction utilisateur</li>
					</ul>
				</div>
				<div className="p-8 bg-base drop-shadow-xl rounded-md border border-neutral">
					<h2 className="text-2xl md:text-4xl font-bold">Développement Back-end</h2>
					<ul className="flex flex-col gap-2 text-md md:text-xl pt-4 list-disc">
						<li>
							Création d’APIs et des fonctionnalités serveur : Mise en place de l’architecture et de la logique métier
						</li>
						<li>
							Gestion de bases de données : Conception, développement et optimisation de bases de données relationnelles
							ou non relationnelles
						</li>
						<li>
							Sécurité des applications : Implémentation de mesures de sécurité pour protéger les données et prévenir
							les attaques
						</li>
					</ul>
				</div>
				<TechnoSection className="lg:col-span-2" />
			</div>
		</section>
	)
}

export default ServicesSection
