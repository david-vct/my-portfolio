export type Section = {
	id: string
	label: string
}

// Single source of truth for the on-page sections: used both to anchor each
// <section> and to render the lateral index. Keep ids in sync with the
// `id` attributes set on the matching section components.
export const sections: Section[] = [
	{ id: "accueil", label: "Accueil" },
	{ id: "presentation", label: "Présentation" },
	{ id: "services", label: "Services" },
	{ id: "projets", label: "Projets" },
]
