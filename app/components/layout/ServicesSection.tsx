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
					<h2 className="text-2xl md:text-4xl font-bold">Développement Web & Mobile</h2>
					<ul className="flex flex-col gap-2 text-md md:text-xl pt-4 list-disc">
						<li>Applications web sur mesure : Conception et développement de sites et plateformes avec React et Next.js</li>
						<li>Applications mobiles multiplateformes : Développement avec React Native et Expo pour iOS et Android</li>
						<li>Optimisation : Amélioration de la performance et de l'expérience utilisateur</li>
					</ul>
				</div>
				<div className="p-8 bg-base drop-shadow-xl rounded-md border border-neutral">
					<h2 className="text-2xl md:text-4xl font-bold">Intégration et renfort d'équipe</h2>
					<ul className="flex flex-col gap-2 text-md md:text-xl pt-4 list-disc">
						<li>
							Immersion rapide dans vos projets existants pour accélérer vos livraisons et absorber vos pics d'activité
						</li>
						<li>
							Création d'APIs et de fonctionnalités serveur avec Node.js et NestJS : architecture et logique métier
						</li>
						<li>
							Gestion de bases de données : conception, développement et optimisation de bases de données relationnelles
							ou non relationnelles
						</li>
					</ul>
				</div>
				<TechnoSection className="lg:col-span-2" />
			</div>
		</section>
	)
}

export default ServicesSection
