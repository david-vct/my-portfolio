"use client"

import { useEffect, useState } from "react"
import { sections } from "../../lib/sections"

// Sober lateral index: a thin line + label per section. The section currently
// on screen is highlighted in accent color with a slightly longer line.
// The active section is tracked with an IntersectionObserver whose root is
// shrunk to a thin horizontal band in the middle of the viewport, so whichever
// section crosses that band is considered active.
const SideIndex = () => {
	const [activeId, setActiveId] = useState(sections[0].id)

	useEffect(() => {
		const elements = sections
			.map((section) => document.getElementById(section.id))
			.filter((element): element is HTMLElement => element !== null)

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) =>
							a.boundingClientRect.top - b.boundingClientRect.top,
					)
				if (visible.length > 0) {
					setActiveId(visible[0].target.id)
				}
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0 },
		)

		elements.forEach((element) => observer.observe(element))
		return () => observer.disconnect()
	}, [])

	return (
		<nav
			aria-label="Navigation des sections"
			className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col 2xl:flex"
		>
			{sections.map((section) => {
				const isActive = section.id === activeId
				return (
					<a
						key={section.id}
						href={`#${section.id}`}
						aria-current={isActive ? "true" : undefined}
						className="group flex items-center justify-end gap-3 py-2.5 pl-12"
					>
						<span
							className={
								"text-xs uppercase tracking-widest transition-colors duration-300 " +
								(isActive
									? "text-accent"
									: "text-light/35 group-hover:text-light/70")
							}
						>
							{section.label}
						</span>
						<span
							className={
								"block h-px transition-all duration-300 motion-reduce:transition-none " +
								(isActive
									? "w-10 bg-accent"
									: "w-5 bg-light/30 group-hover:w-7 group-hover:bg-light/60")
							}
						/>
					</a>
				)
			})}
		</nav>
	)
}

export default SideIndex
