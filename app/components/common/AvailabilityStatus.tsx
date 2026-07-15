import { faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { getAvailability } from "../../lib/date"

const AvailabilityStatus = () => {
  const { isAvailable, daysAgo } = getAvailability()

  return (
    <li className="flex flex-row items-center gap-2 whitespace-nowrap">
      <FontAwesomeIcon
        className="h-3 shrink-0 text-accent"
        icon={faStarOfLife}
      />
      <p>
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
      <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-green-400/10 px-2.5 py-0.5 text-xs font-normal normal-case text-green-400/80">
        <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-green-400" />
        Mis à jour il y a {daysAgo} j
      </span>
    </li>
  )
}

export default AvailabilityStatus
