"use client"

import { useEffect, useState } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

// Tracks the OS-level "reduce motion" setting. Starts at `false` so the server
// render and the first client render match, then syncs right after mount.
export const usePrefersReducedMotion = () => {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(QUERY)
		const sync = () => setPrefersReducedMotion(media.matches)

		sync()
		media.addEventListener("change", sync)
		return () => media.removeEventListener("change", sync)
	}, [])

	return prefersReducedMotion
}
