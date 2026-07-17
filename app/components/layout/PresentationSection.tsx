import Image from "next/image"
import React from "react"
import Reveal from "../common/motion/Reveal"
import Title from "../common/Title"
import { getYearsOfExperience } from "@/app/lib/date"

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
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 items-center">
        <Reveal className="md:col-span-2" delay={0.1}>
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
        <Reveal className="border-l border-neutral pl-8" delay={0.2}>
          <h2 className="text-2xl md:text-4xl font-bold pb-6">
            Ils m&apos;ont fait confiance
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
