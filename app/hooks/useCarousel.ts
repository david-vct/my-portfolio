"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePrefersReducedMotion } from "./usePrefersReducedMotion"

type Options = {
	/** Number of slides rendered inside the track. */
	length: number
	/** Delay between two automatic advances, in ms. */
	interval?: number
	/** Set to false to opt out of automatic scrolling. */
	autoPlay?: boolean
}

const getSlides = (track: HTMLElement) => Array.from(track.children) as HTMLElement[]

// The track is padded so hover lifts and glows aren't clipped by its own
// scroll box, which shifts every offsetLeft by that padding. Scroll positions
// must be expressed without it, and the track's `scroll-padding-left` keeps
// native snapping on the same reference.
const getScrollTarget = (track: HTMLElement, slide: HTMLElement) =>
	slide.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft || "0")

// Index of the slide currently aligned with the left edge of the track.
const getActiveIndex = (track: HTMLElement) => {
	let closestIndex = 0
	let closestDistance = Number.POSITIVE_INFINITY

	getSlides(track).forEach((slide, index) => {
		const distance = Math.abs(getScrollTarget(track, slide) - track.scrollLeft)
		if (distance < closestDistance) {
			closestDistance = distance
			closestIndex = index
		}
	})

	return closestIndex
}

const getMaxScroll = (track: HTMLElement) => track.scrollWidth - track.clientWidth

const isAtStart = (track: HTMLElement) => track.scrollLeft <= 1
const isAtEnd = (track: HTMLElement) => track.scrollLeft >= getMaxScroll(track) - 1

// How many slides can actually be scrolled to the left edge of the track. When
// several slides fit on screen at once, the trailing ones are always visible
// but can never be aligned — the browser clamps scrollLeft at its maximum. They
// must not get their own pagination dot, or that dot would be unreachable.
const getStopCount = (track: HTMLElement) => {
	const maxScroll = getMaxScroll(track)
	const reachable = getSlides(track).filter(
		(slide) => getScrollTarget(track, slide) <= maxScroll + 1,
	)

	return Math.max(reachable.length, 1)
}

// Drives a scroll-snap carousel. The track is a plain horizontally scrollable
// element, so swipe, momentum and keyboard scrolling come from the browser for
// free; this hook only adds what the browser doesn't: an active index,
// programmatic navigation and autoplay.
//
// Navigation always reads the live scroll position instead of the React state,
// so the autoplay timer can never act on a stale index.
export const useCarousel = ({ length, interval = 5000, autoPlay = true }: Options) => {
	const trackRef = useRef<HTMLDivElement>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const [isDocumentHidden, setIsDocumentHidden] = useState(false)
	// Autoplay is pointless while every slide already fits on screen.
	const [canScroll, setCanScroll] = useState(false)
	// Number of pagination dots — see getStopCount, this is not `length`.
	const [stopCount, setStopCount] = useState(0)
	const prefersReducedMotion = usePrefersReducedMotion()

	const goTo = useCallback(
		(index: number) => {
			const track = trackRef.current
			if (!track) return

			const slide = getSlides(track)[index]
			if (!slide) return

			track.scrollTo({
				left: getScrollTarget(track, slide),
				behavior: prefersReducedMotion ? "auto" : "smooth",
			})
		},
		[prefersReducedMotion],
	)

	const next = useCallback(() => {
		const track = trackRef.current
		if (!track) return
		goTo(isAtEnd(track) ? 0 : getActiveIndex(track) + 1)
	}, [goTo])

	const previous = useCallback(() => {
		const track = trackRef.current
		if (!track) return
		goTo(isAtStart(track) ? getStopCount(track) - 1 : getActiveIndex(track) - 1)
	}, [goTo])

	const pause = useCallback(() => setIsPaused(true), [])
	const resume = useCallback(() => setIsPaused(false), [])

	// Keep the active index in sync with wherever the user scrolled to.
	useEffect(() => {
		const track = trackRef.current
		if (!track) return

		let frame = 0
		const sync = () => {
			cancelAnimationFrame(frame)
			frame = requestAnimationFrame(() => setActiveIndex(getActiveIndex(track)))
		}

		track.addEventListener("scroll", sync, { passive: true })
		return () => {
			cancelAnimationFrame(frame)
			track.removeEventListener("scroll", sync)
		}
	}, [])

	// Re-measure on resize: how many slides fit depends on the breakpoint.
	useEffect(() => {
		const track = trackRef.current
		if (!track) return

		const measure = () => {
			setCanScroll(getMaxScroll(track) > 1)
			setStopCount(getStopCount(track))
		}
		measure()

		const observer = new ResizeObserver(measure)
		observer.observe(track)
		getSlides(track).forEach((slide) => observer.observe(slide))
		return () => observer.disconnect()
	}, [length])

	// Don't burn frames advancing a carousel nobody is looking at.
	useEffect(() => {
		const sync = () => setIsDocumentHidden(document.hidden)

		sync()
		document.addEventListener("visibilitychange", sync)
		return () => document.removeEventListener("visibilitychange", sync)
	}, [])

	const isPlaying =
		autoPlay && canScroll && !isPaused && !isDocumentHidden && !prefersReducedMotion

	useEffect(() => {
		if (!isPlaying) return

		const timer = setInterval(next, interval)
		return () => clearInterval(timer)
	}, [isPlaying, interval, next])

	return {
		trackRef,
		activeIndex,
		stopCount,
		canScroll,
		isPlaying,
		goTo,
		next,
		previous,
		pause,
		resume,
	}
}
