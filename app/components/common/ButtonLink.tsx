import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

type Props = {
  text: string
  link: string
  icon: IconProp
  className?: string
}

const ButtonLink = ({ text, link, icon, className }: Props) => {
  return (
    <a
      className={
        "group relative flex flex-row items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-light to-white text-base font-bold shadow-md shadow-black/30 ring-1 ring-inset ring-white/20 transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base " +
        (className ? className : "")
      }
      href={link}
      target="_blank"
    >
      <FontAwesomeIcon
        className="transition-transform duration-300 group-hover:scale-110"
        size="lg"
        icon={icon}
      />
      <div className="text-md md:text-xl">{text}</div>
    </a>
  )
}

export default ButtonLink
