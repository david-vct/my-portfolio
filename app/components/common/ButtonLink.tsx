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
				"flex flex-row items-center px-4 py-2 rounded bg-white text-base font-bold " + (className ? className : "")
			}
			href={link}
			target="_blank"
		>
			<FontAwesomeIcon className="h-5" icon={icon} />
			<div className="pl-4 text-xl">{text}</div>
		</a>
	)
}

export default ButtonLink
