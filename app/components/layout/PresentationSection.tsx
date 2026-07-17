import { faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"
import Reveal from "../common/motion/Reveal"
import Title from "../common/Title"
import { getYearsOfExperience } from "@/app/lib/date"

const AWARD_GRADIENT_ID = "award-gold-gradient"
const [awardWidth, awardHeight, , , awardPathData] = faAward.icon
const awardMaskImage = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${awardWidth} ${awardHeight}'><path d='${awardPathData}'/></svg>`,
)}")`

const clients: {
  name: string
  logo: string
  width: number
  height: number
  className?: string
}[] = [
  {
    name: "Groupe Adonis",
    logo: "/logos/adonis-education-logo.png",
    width: 120,
    height: 42,
    className: "dark:brightness-0 dark:invert",
  },
  {
    name: "SEDRAP",
    logo: "/logos/sedrap.svg",
    width: 135,
    height: 16,
    className: "invert dark:invert-0",
  },
  { name: "Capgemini", logo: "/logos/capgemini.svg", width: 120, height: 28 },
  { name: "EDF", logo: "/logos/edf.svg", width: 66, height: 28 },
  {
    name: "PadelGo",
    logo: "/logos/padelgo-logo.png",
    width: 105,
    height: 28,
    className: "[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.45))]",
  },
]

const PresentationSection = () => {
  const yearsOfExperience = getYearsOfExperience()

  return (
    <section
      id="presentation"
      className="flex flex-col place-content-center w-full max-w-7xl min-h-[80svh] p-4 md:p-16 mt-16 md:mt-0"
    >
      <Reveal>
        <Title title="Je me présente..." />
      </Reveal>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-center">
        <Reveal className="xl:col-span-3" delay={0.1}>
          <p className="text-2xl md:text-4xl text-balance font-bold bg-gradient-to-tr from-accent to-secondary bg-clip-text">
            Je suis <span className="text-transparent">David Vicente</span>, un{" "}
            <span className="text-transparent">ingénieur logiciel</span>{" "}
            spécialisé dans l'écosystème TypeScript, avec plus de{" "}
            <span className="text-transparent">
              {yearsOfExperience} ans d'expérience
            </span>{" "}
            dans le développement web et mobile. J'aide les{" "}
            <span className="text-transparent">PME et les startups</span> à
            transformer leurs idées en produits numériques de qualité.
          </p>
        </Reveal>
        <Reveal
          className="xl:col-span-2 border-l border-neutral pl-8"
          delay={0.2}
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold pb-6">
            <span
              aria-hidden="true"
              className="relative inline-block h-6 shrink-0 md:h-7"
              style={{ aspectRatio: `${awardWidth} / ${awardHeight}` }}
            >
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient
                    id={AWARD_GRADIENT_ID}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8a6a10" />
                    <stop offset="30%" stopColor="#f4d675" />
                    <stop offset="50%" stopColor="#fff6d8" />
                    <stop offset="70%" stopColor="#e0ac1c" />
                    <stop offset="100%" stopColor="#8a6a10" />
                  </linearGradient>
                </defs>
              </svg>
              <FontAwesomeIcon
                icon={faAward}
                style={{ width: "100%", height: "100%" }}
                className="gold-icon absolute inset-0 drop-shadow-[0_0_3px_rgba(244,196,48,0.5)]"
              />
              <span
                className="animate-icon-sheen absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent bg-[length:220%_100%]"
                style={{
                  WebkitMaskImage: awardMaskImage,
                  maskImage: awardMaskImage,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </span>
            <span>Ils m&apos;ont fait confiance</span>
          </h2>
          <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-6">
            {clients.map((client) => (
              <div
                key={client.name}
                title={client.name}
                className="transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className={`object-contain ${client.className ?? ""}`}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default PresentationSection
