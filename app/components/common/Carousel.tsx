"use client"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Children, ReactNode } from "react"
import { useCarousel } from "../../hooks/useCarousel"

type Props = {
	/** One element per slide. */
	children: ReactNode
	/** Describes the carousel for screen readers, e.g. "Autres projets". */
	label: string
	/** Delay between two automatic advances, in ms. */
	interval?: number
	/** Width of a single slide — decides how many are visible per breakpoint. */
	slideClassName?: string
}

const controlClass =
	"flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-base/40 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"

// Presentation-only carousel: it knows nothing about what it displays, and
// takes its slides as children so they can stay server components. The track is
// a scroll-snap scroller (see useCarousel), so touch swipe comes from the
// browser and the layout degrades to a plain scroller without JavaScript.
const Carousel = ({
	children,
	label,
	interval,
	// `gap-6` is 1.5rem, so each half-width slide gives up half of it.
	slideClassName = "basis-full sm:basis-[calc(50%-0.75rem)]",
}: Props) => {
	const slides = Children.toArray(children)
	const {
		trackRef,
		activeIndex,
		stopCount,
		canScroll,
		goTo,
		next,
		previous,
		pause,
		resume,
	} = useCarousel({ length: slides.length, interval })

	return (
		<div
			role="region"
			aria-roledescription="carrousel"
			aria-label={label}
			// Autoplay must never fight the user: any hover or keyboard focus
			// inside the carousel freezes it until they leave.
			onMouseEnter={pause}
			onMouseLeave={resume}
			onFocus={pause}
			onBlur={resume}
		>
			{/* `overflow-x: auto` forces `overflow-y` to compute to `auto` too, so the
			    scroll box would clip the slides' hover lift and glow. Padding puts
			    that room inside the clip region; the matching negative margins keep
			    the slides aligned with the rest of the page. */}
			<div
				ref={trackRef}
				className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-x-auto -my-8 py-8 -mx-4 px-4 scroll-pl-4"
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						role="group"
						aria-roledescription="diapositive"
						aria-label={`${index + 1} sur ${slides.length}`}
						className={"shrink-0 snap-start " + slideClassName}
					>
						{slide}
					</div>
				))}
			</div>

			{canScroll && (
				<div className="flex flex-row items-center justify-center gap-6 pt-8">
					<button
						type="button"
						aria-label="Diapositive précédente"
						onClick={previous}
						className={controlClass}
					>
						<FontAwesomeIcon size="sm" icon={faChevronLeft} />
					</button>
					<div className="flex flex-row items-center gap-2">
						{Array.from({ length: stopCount }, (_, index) => (
							<button
								key={index}
								type="button"
								aria-label={`Aller à la diapositive ${index + 1}`}
								aria-current={index === activeIndex}
								onClick={() => goTo(index)}
								className={
									"h-2.5 rounded-full transition-all duration-300 hover:bg-white " +
									(index === activeIndex ? "w-6 bg-white" : "w-2.5 bg-white/40")
								}
							/>
						))}
					</div>
					<button
						type="button"
						aria-label="Diapositive suivante"
						onClick={next}
						className={controlClass}
					>
						<FontAwesomeIcon size="sm" icon={faChevronRight} />
					</button>
				</div>
			)}
		</div>
	)
}

export default Carousel
