"use client"

import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import {
  faEnvelopesBulk,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "motion/react"
import Image from "next/image"
import React from "react"
import AvailabilityStatus from "../common/AvailabilityStatus"
import ButtonLink from "../common/ButtonLink"
import {
  fadeUpAt,
  listContainer,
  parent,
  staggerItem,
} from "../common/motion/variants"
import { getYearsOfExperience } from "../../lib/date"

const Hero = () => {
  const yearsOfExperience = getYearsOfExperience()

  return (
    <motion.section
      id="accueil"
      className="grid lg:grid-cols-3 gap-16 w-full max-w-7xl min-h-svh p-4 md:p-16"
      variants={parent}
      initial="hidden"
      animate="show"
    >
      <motion.div className="place-self-center" variants={fadeUpAt(0)}>
        <Image
          className="shadow-2xl shadow-primary/40 rounded-full"
          src="/images/david-profile.webp"
          alt="David Vicente"
          width={300}
          height={300}
        />
      </motion.div>
      <div className="lg:col-span-2 self-center">
        <motion.div
          className="pb-8 border-b border-neutral"
          variants={listContainer(0.15)}
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
          >
            web et mobile.
          </motion.h1>
          <motion.p
            className="text-md md:text-xl font-bold"
            variants={staggerItem}
          >
            Ensemble, créons des applications robustes et performantes.
          </motion.p>
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
                className="h-3 text-accent"
                icon={faStarOfLife}
              />
              <p>
                Création d'
                <span className="text-transparent">
                  applications web & mobiles sur mesure
                </span>
              </p>
            </motion.li>
            <motion.li
              className="flex flex-row items-center gap-2"
              variants={staggerItem}
            >
              <FontAwesomeIcon
                className="h-3 text-accent"
                icon={faStarOfLife}
              />
              <p>
                Intégration au sein d'
                <span className="text-transparent">
                  équipes de développement existantes
                </span>
              </p>
            </motion.li>
            <motion.li
              className="flex flex-row items-center gap-2"
              variants={staggerItem}
            >
              <FontAwesomeIcon
                className="h-3 text-accent"
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
          className="flex flex-row items-center gap-8 pt-8"
          variants={fadeUpAt(1.3)}
        >
          <ButtonLink
            text="Contactez-moi"
            link="mailto:david.vct@proton.me"
            icon={faEnvelopesBulk}
          ></ButtonLink>
          <a href="https://www.linkedin.com/in/david-vct/" target="_blank">
            <FontAwesomeIcon className="h-8" icon={faLinkedin} />
          </a>
          <a href="https://github.com/david-vct" target="_blank">
            <FontAwesomeIcon className="h-8" icon={faGithub} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
