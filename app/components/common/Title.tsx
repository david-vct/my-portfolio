import { faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Title = ({ title }: { title: string }) => {
	return (
		<h2 className="flex flex-row items-center gap-4 pb-8 md:pb-16 text-2xl md:text-4xl font-bold">
			<FontAwesomeIcon className="h-5 text-accent" icon={faStarOfLife} />
			{title}
		</h2>
	)
}

export default Title
