"use client"

import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import {
  faEnvelopesBulk,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useMotionValue, useSpring } from "motion/react"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import AvailabilityStatus from "../common/AvailabilityStatus"
import ButtonLink from "../common/ButtonLink"
import {
  fadeUpAt,
  fadeUpList,
  listContainer,
  parent,
  staggerItem,
} from "../common/motion/variants"
import { getYearsOfExperience } from "../../lib/date"

const TAGLINE = "Ensemble, créons des applications robustes et performantes."
const TYPING_INTERVAL_MS = 35
const MAX_TILT_DEGREES = 12

const Hero = () => {
  const yearsOfExperience = getYearsOfExperience()

  const [titleSettled, setTitleSettled] = useState(false)
  const [typedLength, setTypedLength] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches)

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (!titleSettled || prefersReducedMotion) return

    const interval = setInterval(() => {
      setTypedLength((length) => {
        if (length >= TAGLINE.length) {
          clearInterval(interval)
          return length
        }
        return length + 1
      })
    }, TYPING_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [titleSettled, prefersReducedMotion])

  const displayedLength = prefersReducedMotion ? TAGLINE.length : typedLength
  const isTyping =
    titleSettled && !prefersReducedMotion && displayedLength < TAGLINE.length

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const scale = useMotionValue(1)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  const springScale = useSpring(scale, springConfig)

  // The halo trails behind the portrait with a softer, slower spring and a
  // smaller travel distance, so it reads as a light source drifting gently
  // rather than moving in lockstep with the tilted image.
  const haloX = useMotionValue(0)
  const haloY = useMotionValue(0)
  const haloScale = useMotionValue(1)
  const haloSpringConfig = { stiffness: 45, damping: 20, mass: 1.2 }
  const springHaloX = useSpring(haloX, haloSpringConfig)
  const springHaloY = useSpring(haloY, haloSpringConfig)
  const springHaloScale = useSpring(haloScale, haloSpringConfig)

  const handlePortraitMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5

    rotateY.set(offsetX * 2 * MAX_TILT_DEGREES)
    rotateX.set(offsetY * 2 * -MAX_TILT_DEGREES)
    scale.set(1.03)
    haloX.set(offsetX * 12)
    haloY.set(offsetY * 12)
    haloScale.set(1.08)
  }

  const handlePortraitMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
    haloX.set(0)
    haloY.set(0)
    haloScale.set(1)
  }

  return (
    <motion.section
      id="accueil"
      className="grid lg:grid-cols-3 gap-16 w-full max-w-7xl min-h-svh p-4 md:p-16"
      variants={parent}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="relative place-self-center"
        style={{ perspective: 800 }}
        variants={fadeUpAt(0)}
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-[70%] -z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/80 via-accent/70 to-secondary/60 blur-3xl sm:h-36 sm:w-36 lg:h-44 lg:w-44"
          style={{ x: springHaloX, y: springHaloY, scale: springHaloScale }}
        />
        <motion.div
          onMouseMove={handlePortraitMouseMove}
          onMouseLeave={handlePortraitMouseLeave}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            scale: springScale,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            className="h-auto w-48 max-w-full sm:w-64 lg:w-[300px] rounded-full"
            src="/images/david-profile.webp"
            alt="David Vicente"
            width={300}
            height={300}
            priority
          />
        </motion.div>
      </motion.div>
      <div className="lg:col-span-2 self-center">
        <motion.div
          className="pb-8 border-b border-neutral"
          variants={fadeUpList(0.15)}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-black"
            variants={staggerItem}
          >
            Développeur
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-7xl font-black pb-6 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
            variants={staggerItem}
            onAnimationComplete={() => setTitleSettled(true)}
          >
            web et mobile.
          </motion.h1>
          <div className="relative">
            <span className="sr-only">{TAGLINE}</span>
            <p
              className="invisible text-md md:text-xl font-bold"
              aria-hidden="true"
            >
              {TAGLINE}
            </p>
            <p
              className="absolute inset-0 text-md md:text-xl font-bold"
              aria-hidden="true"
            >
              {TAGLINE.slice(0, displayedLength)}
              {isTyping && <span className="typewriter-caret">|</span>}
            </p>
          </div>
        </motion.div>
        <div>
          <motion.ul
            className="pt-8 text-md md:text-xl font-bold bg-gradient-to-tl from-accent to-secondary bg-clip-text"
            variants={listContainer(0.5)}
          >
            <motion.li
              className="flex flex-row items-center gap-2"
              variants={staggerItem}
            >
              <FontAwesomeIcon
                className="text-accent"
                size="xs"
                icon={faStarOfLife}
              />
              <p>
                <span className="text-transparent">
                  Conception et développement
                </span>{" "}
                de solutions web et mobiles
              </p>
            </motion.li>
            <motion.li
              className="flex flex-row items-center gap-2"
              variants={staggerItem}
            >
              <FontAwesomeIcon
                className="text-accent"
                size="xs"
                icon={faStarOfLife}
              />
              <p>
                <span className="text-transparent">Renfort technique</span> au
                sein de vos équipes de développement
              </p>
            </motion.li>
            <motion.li
              className="flex flex-row items-center gap-2"
              variants={staggerItem}
            >
              <FontAwesomeIcon
                className="text-accent"
                size="xs"
                icon={faStarOfLife}
              />
              <p>
                Plus de{" "}
                <span className="text-transparent">
                  {yearsOfExperience} ans d'expérience
                </span>
              </p>
            </motion.li>
            <AvailabilityStatus />
          </motion.ul>
        </div>
        <motion.div
          className="flex flex-row flex-wrap items-center gap-4 sm:gap-8 pt-8"
          variants={fadeUpAt(1.3)}
        >
          <ButtonLink
            text="Contactez-moi"
            link="mailto:david.vct@proton.me"
            icon={faEnvelopesBulk}
          ></ButtonLink>
          <a
            href="https://www.linkedin.com/in/david-vct/"
            target="_blank"
            className="inline-block -m-3 rounded p-3 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/david-vct"
            target="_blank"
            className="inline-block -m-3 rounded p-3 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <FontAwesomeIcon size="xl" icon={faGithub} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
