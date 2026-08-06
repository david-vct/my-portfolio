import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

// Must match the `fill: url(#...)` of `.gold-icon path` in globals.css.
const GRADIENT_ID = "award-gold-gradient"

export type GoldBadgeSize = "sm" | "md" | "lg" | "xl"

// Height + matching glow radius, so the halo stays proportional to the icon.
const sizes: Record<GoldBadgeSize, { height: string; glow: string }> = {
  sm: {
    height: "h-6 md:h-7",
    glow: "drop-shadow-[0_0_3px_rgba(244,196,48,0.5)]",
  },
  md: {
    height: "h-7 md:h-9",
    glow: "drop-shadow-[0_0_3.5px_rgba(244,196,48,0.5)]",
  },
  lg: {
    height: "h-8 md:h-10",
    glow: "drop-shadow-[0_0_4.5px_rgba(244,196,48,0.5)]",
  },
  xl: {
    height: "h-9 md:h-12",
    glow: "drop-shadow-[0_0_5px_rgba(244,196,48,0.5)]",
  },
}

type Props = {
  icon?: IconDefinition
  size?: GoldBadgeSize
  className?: string
}

// Decorative FontAwesome icon painted with a gold gradient and swept by a
// looping sheen. Sized by the `size` preset, never by h-/w- utilities on the
// icon itself (see the FontAwesome sizing gotcha).
const GoldBadge = ({ icon = faAward, size = "md", className = "" }: Props) => {
  const [width, height, , , pathData] = icon.icon
  const maskImage = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'><path d='${
      Array.isArray(pathData) ? pathData.join("") : pathData
    }'/></svg>`,
  )}")`

  return (
    <span
      aria-hidden="true"
      className={`relative inline-block shrink-0 ${sizes[size].height} ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a6a10" />
            <stop offset="30%" stopColor="#f4d675" />
            <stop offset="50%" stopColor="#fff6d8" />
            <stop offset="70%" stopColor="#e0ac1c" />
            <stop offset="100%" stopColor="#8a6a10" />
          </linearGradient>
        </defs>
      </svg>
      <FontAwesomeIcon
        icon={icon}
        style={{ width: "100%", height: "100%" }}
        className={`gold-icon absolute inset-0 ${sizes[size].glow}`}
      />
      <span
        className="animate-icon-sheen absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent bg-[length:220%_100%]"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </span>
  )
}

export default GoldBadge
