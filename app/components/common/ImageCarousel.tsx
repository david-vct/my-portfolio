"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

type Props = {
	images: string[]
	interval?: number
	className?: string
}

const ImageCarousel = ({ images, interval = 10000, className }: Props) => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (images.length <= 1) return
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length)
		}, interval)
		return () => clearInterval(timer)
	}, [images.length, interval])

	return (
		<div
			className={
				"relative w-full min-h-80 overflow-hidden rounded-lg shadow-inner shadow-black/20 " + (className ? className : "")
			}
		>
			<div
				className="flex h-full min-h-80 transition-transform duration-700 ease-in-out"
				style={{
					width: `${images.length * 100}%`,
					transform: `translateX(-${index * (100 / images.length)}%)`,
				}}
			>
				{images.map((image, i) => (
					<div className="relative min-h-80" style={{ width: `${100 / images.length}%` }} key={i}>
						<Image className="object-cover" alt={image} src={image} fill={true} />
					</div>
				))}
			</div>
			{images.length > 1 && (
				<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-row gap-2">
					{images.map((_, i) => (
						<button
							key={i}
							type="button"
							aria-label={`Aller à l'image ${i + 1}`}
							aria-current={i === index}
							onClick={() => setIndex(i)}
							className={
								"h-2.5 rounded-full transition-all duration-300 hover:bg-accent " +
								(i === index ? "w-6 bg-accent" : "w-2.5 bg-white/40")
							}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default ImageCarousel
