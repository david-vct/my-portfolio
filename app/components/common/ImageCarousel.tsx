"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

type Props = {
  images: string[]
  interval?: number
  className?: string
  vertical?: boolean
}

const ImageCarousel = ({
  images,
  interval = 10000,
  className,
  vertical = false,
}: Props) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  // Portrait (mobile) screenshots need their own aspect ratio and object-fit
  // so they show fully without being cropped or too small.
  const frameClass = vertical
    ? "relative w-full max-w-[280px] mx-auto aspect-[664/1440]"
    : "relative w-full min-h-80"
  const slideClass = vertical ? "relative h-full" : "relative min-h-80"

  return (
    <div
      className={
        "overflow-hidden rounded-lg shadow-inner shadow-black/20 " +
        frameClass +
        " " +
        (className ? className : "")
      }
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, i) => (
          <div
            className={slideClass}
            style={{ width: `${100 / images.length}%` }}
            key={i}
          >
            <Image
              className={vertical ? "object-contain" : "object-cover"}
              alt={image}
              src={image}
              fill={true}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
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
                "h-2.5 rounded-full transition-all duration-300 hover:bg-white " +
                (i === index ? "w-6 bg-white" : "w-2.5 bg-white/40")
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
