"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

type Props = {
	children: ReactNode
	className?: string
	delay?: number
	// Set to false for glassmorphism cards (backdrop-blur): animating opacity
	// disables `backdrop-filter` while it runs, which flashes the raw
	// background. Those reveal with the rise only, keeping the blur intact.
	fade?: boolean
}

// Reveals its content the first time it scrolls into view: rises slightly to
// its final position (optionally fading in). Wraps (rather than replaces) the
// animated block so hover transforms on inner cards keep working.
const Reveal = ({ children, className, delay = 0, fade = true }: Props) => {
	return (
		<motion.div
			className={className}
			initial={fade ? { opacity: 0, y: 24 } : { y: 24 }}
			whileInView={fade ? { opacity: 1, y: 0 } : { y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	)
}

export default Reveal
