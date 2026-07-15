import { faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Reveal from "../common/motion/Reveal"
import Title from "../common/Title"
import TechnoSection from "./TechnoSection"

type Service = {
  title: string
  items: string[]
}

const services: Service[] = [
  {
    title: "Développement web et mobile",
    items: [
      "Conception et développement de sites et plateformes avec React et Next.js",
      "Développement avec React Native et Expo pour iOS et Android",
    ],
  },
  {
    title: "Intégration et renfort d'équipe",
    items: [
      "Immersion rapide dans vos équipes et projets existants",
      "Accélération de vos livraisons et absorption de vos pics d'activité",
    ],
  },
]

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative flex flex-col place-content-center w-full max-w-7xl min-h-[80svh] p-4 md:p-16 mt-16 overflow-hidden"
    >
      <div className="absolute z-[-1] -top-1 skew-x-12 w-full h-full bg-origin-padding bg-[url('/images/grid-orange.svg')] [mask-image:radial-gradient(circle,transparent_0%,#000_40%,transparent_60%)]"></div>
      <Reveal>
        <Title title="MES SERVICES" />
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 place-content-center">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.12} fade={false}>
            <div className="group relative flex flex-col h-full gap-6 p-8 bg-base/30 backdrop-blur-sm rounded-md border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-sebg-base/30 condary opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-2xl md:text-4xl font-bold">
                {service.title}
              </h2>
              <ul className="flex flex-col gap-3 text-md md:text-xl">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex flex-row items-center gap-3"
                  >
                    <FontAwesomeIcon
                      className="h-3 shrink-0 text-accent"
                      icon={faStarOfLife}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        <TechnoSection className="lg:col-span-2" />
      </div>
    </section>
  )
}

export default ServicesSection
