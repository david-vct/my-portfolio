import React from "react"

const PresentationSection = () => {
	return (
		<section className="flex flex-col place-content-center w-full md:w-2/3 p-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
				<div>
					<h1 className="text-4xl font-bold pb-4">Je me presente...</h1>
					<p className="text-lg">
						Je suis David Vicente, un <strong>ingenieur web freelance</strong> avec plus de trois ans d'exprerience dans
						la création d'applications web. Je travaille avec des <strong>entrepreneurs</strong>, des{" "}
						<strong>startups</strong> et des <strong>entreprises</strong> pour transformer leurs idées en produits
						numériques de qualité.
					</p>
				</div>
				<div>
					<h2 className="text-4xl font-bold pb-4">Mes valeurs et méthodologies</h2>
					<p className="text-lg">
						Mon approche repose sur une écoute attentive de vos besoins, une collaboration étroite tout au long du
						projet, et un engagement à fournir des solutions robustes, évolutives et optimisées. Mon objectif est de
						garantir la satisfaction du client en respectant les délais et en offrant un suivi personnalisé.
					</p>
				</div>
			</div>
		</section>
	)
}

export default PresentationSection
