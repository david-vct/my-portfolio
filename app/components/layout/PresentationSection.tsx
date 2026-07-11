import React from "react"
import Title from "../common/Title"

const PresentationSection = () => {
	return (
		<section className="flex flex-col place-content-center w-full max-w-7xl min-h-[80svh] p-4 md:p-16 mt-16 md:mt-0">
			<Title title="JE ME PRESENTE..." />
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-16 items-center">
				<div className="md:col-span-2">
					<p className="text-2xl md:text-4xl text-balance font-bold bg-gradient-to-tr from-accent to-secondary bg-clip-text">
						Je suis <span className="text-transparent">David Vicente</span>, un{" "}
						<span className="text-transparent">ingénieur logiciel fullstack</span> spécialisé dans l'écosystème
						TypeScript, avec plus de <span className="text-transparent">quatre ans d'expérience</span> dans le
						développement web et mobile. J'aide les{" "}
						<span className="text-transparent">PME et les startups</span> à transformer leurs idées en produits numériques de qualité.
					</p>
				</div>
				<div className="border-l border-neutral pl-8">
					<h2 className="text-2xl md:text-4xl font-bold pb-4">Mes valeurs et méthodologies</h2>
					<p className="text-md md:text-xl">
						Mon approche repose sur une <strong>écoute attentive</strong> de vos besoins, une{" "}
						<strong>collaboration étroite</strong> tout au long du projet, et un engagement à fournir des architectures
						robustes, évolutives et optimisées. Mon objectif est de <strong>garantir la satisfaction du client</strong>{" "}
						en respectant les délais et en offrant un suivi personnalisé.
					</p>
				</div>
			</div>
		</section>
	)
}

export default PresentationSection
