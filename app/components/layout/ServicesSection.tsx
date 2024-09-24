import React from "react"

const ServicesSection = () => {
	return (
		<section className="relative grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-16 items-center justify-center w-full md:w-2/3 min-h-[80svh] p-16">
			<div className="absolute z-[-1] w-full h-full bg-[url('/grid-orange.svg')] [mask-image:radial-gradient(circle,transparent_0%,#000_30%,transparent_70%)]"></div>
			<div className="p-8 bg-base drop-shadow-ml rounded-md">
				<h2 className="text-4xl font-bold">Développement Front-end</h2>
				<ul className="flex flex-col gap-2 text-lg pt-4 list-disc">
					<li>Intégration de maquettes : Conversion de designs créés par des designers en code fonctionnel</li>
					<li>Responsive Design : Développement de sites web adaptés à tous types d’écrans</li>
					<li>Optimisation : Amélioration de la vitesse de chargement et de l'interaction utilisateur</li>
				</ul>
			</div>
			<div className="p-8 bg-base drop-shadow-xl rounded-md">
				<h2 className="text-4xl font-bold">Développement Back-end</h2>
				<ul className="flex flex-col gap-2 text-lg pt-4 list-disc">
					<li>
						Création d’APIs et des fonctionnalités serveur : Mise en place de l’architecture et de la logique métier
					</li>
					<li>
						Gestion de bases de données : Conception, développement et optimisation de bases de données relationnelles
						ou non relationnelles
					</li>
					<li>
						Sécurité des applications : Implémentation de mesures de sécurité pour protéger les données et prévenir les
						attaques
					</li>
				</ul>
			</div>
		</section>
	)
}

export default ServicesSection
