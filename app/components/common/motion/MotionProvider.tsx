"use client"

import { MotionConfig } from "motion/react"
import type { ReactNode } from "react"

// Global animation config. `reducedMotion="user"` makes every motion component
// honour the OS "prefers reduced motion" setting: position/transform animations
// are dropped while opacity fades are kept, so the page stays accessible.
const MotionProvider = ({ children }: { children: ReactNode }) => {
	return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export default MotionProvider
