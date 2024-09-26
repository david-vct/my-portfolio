import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"
import ButtonLink from "./ButtonLink"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"

type Props = {
	title: string
	description: string
	images: string[]
	site?: string
	github?: string
}

const Project = ({ title, description, images, site, github }: Props) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 md:gap-8 p-8 rounded-md bg-base border border-neutral">
			<div className="flex flex-row flex-nowrap w-full h-full overflow-x-auto">
				{images.map((image, index) => (
					<div className="relative flex-none w-full min-h-80" key={index}>
						<Image className="object-contain" alt={image} src={image} key={index} fill={true} />
					</div>
				))}
			</div>
			<div>
				<h2 className="pb-4 md:pb-8 text-2xl md:text-4xl font-bold">{title}</h2>
				<p className="pb-4 md:pb-8 text-md md:text-xl">{description}</p>
				<div className="flex flex-row items-center gap-8">
					{site && <ButtonLink text="Site" link={site} icon={faSquareArrowUpRight}></ButtonLink>}
					{github && (
						<a href={github} target="_blank">
							<FontAwesomeIcon className="h-8" icon={faGithub} />
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Project
