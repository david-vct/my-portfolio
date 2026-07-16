"use client"

import { faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "motion/react"
import React from "react"
import { getAvailability } from "../../lib/date"
import { staggerItem } from "./motion/variants"

const AvailabilityStatus = () => {
  const { isAvailable, daysAgo } = getAvailability()

  return (
    <motion.li
      className="flex flex-row flex-wrap items-center gap-x-2 gap-y-1"
      variants={staggerItem}
    >
      <FontAwesomeIcon
        className="h-2.5 shrink-0 text-accent"
        icon={faStarOfLife}
      />
      <p className="whitespace-nowrap">
        {isAvailable ? (
          <>
            Actuellement <span className="text-green-400">disponible</span>
          </>
        ) : (
          <>
            Actuellement <span className="text-transparent">en mission</span>
          </>
        )}
      </p>
      <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-green-400/10 px-2.5 py-0.5 text-xs font-normal normal-case text-green-400/80">
        <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-green-400" />
        Mis à jour il y a {daysAgo} j
      </span>
    </motion.li>
  )
}

export default AvailabilityStatus
