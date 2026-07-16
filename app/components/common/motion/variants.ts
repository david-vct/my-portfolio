import type { Variants } from "motion/react"

// Empty parent that only forwards the "hidden" / "show" state to its children.
export const parent: Variants = {
	hidden: {},
	show: {},
}

// Fade in while rising slightly to the final position, with an optional delay.
export const fadeUpAt = (delay = 0): Variants => ({
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay },
	},
})

// List container: reveals its children one after another, from top to bottom.
export const listContainer = (delayChildren = 0): Variants => ({
	hidden: {},
	show: {
		transition: { delayChildren, staggerChildren: 0.12 },
	},
})

// Same as listContainer, but the container itself fades up too — use when the
// container carries its own visible styling (e.g. a border) that shouldn't
// appear instantly ahead of its staggered children.
export const fadeUpList = (delayChildren = 0): Variants => ({
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			delayChildren,
			staggerChildren: 0.12,
		},
	},
})

// Item used inside a stagger list (lighter rise than fadeUpAt).
export const staggerItem: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
}
