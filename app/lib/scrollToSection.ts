// Smoothly scrolls to a section from an in-page nav link click, instead of
// relying on global `scroll-behavior: smooth`, which also smooths native
// wheel/trackpad scrolling and can make Chrome/Firefox queue and compound
// consecutive scroll ticks into one large overshoot.
export const scrollToSection = (
	event: React.MouseEvent<HTMLAnchorElement>,
	id: string,
) => {
	const target = document.getElementById(id)
	if (!target) return

	event.preventDefault()
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches

	target.scrollIntoView({
		behavior: prefersReducedMotion ? "auto" : "smooth",
		block: "start",
	})
	history.pushState(null, "", `#${id}`)
}
