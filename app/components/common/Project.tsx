import Image from "next/image"
import React from "react"

type Props = {
	title: string
	description: string
	images: string[]
}

const Project = ({ title, description, images }: Props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
			<div className="">
				{images.map((image, index) => (
					<div className="relative w-full min-h-80" key={index}>
						<Image className="object-contain" alt={image} src={image} key={index} fill={true} />
					</div>
				))}
			</div>
			<div>
				<h2 className="text-4xl font-bold">{title}</h2>
				<p className="text-xl">{description}</p>
			</div>
		</div>
	)
}

export default Project
