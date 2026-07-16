import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import ButtonLink from "../common/ButtonLink"
import Reveal from "../common/motion/Reveal"
import Title from "../common/Title"

const CtaSection = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center place-content-center w-full max-w-7xl min-h-[60svh] p-4 md:p-16 mt-16 overflow-hidden text-center"
    >
      <div className="absolute z-[-1] inset-0 bg-[url('/images/grid-red.svg')] bg-center [mask-image:radial-gradient(circle,#000_0%,transparent_55%)]"></div>
      <Reveal>
        <Title title="TRAVAILLONS ENSEMBLE" />
      </Reveal>
      <Reveal delay={0.1} className="flex flex-col items-center gap-6">
        <p className="max-w-3xl text-balance text-3xl md:text-6xl font-black leading-tight bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
          Un projet en tête ? Discutons-en.
        </p>
        <p className="max-w-2xl text-md md:text-xl">
          Que ce soit pour lancer un nouveau produit, renforcer une équipe ou
          donner vie à une idée, je suis disponible pour en parler.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10">
          <ButtonLink
            text="Contactez-moi"
            link="mailto:david.vct@proton.me"
            icon={faEnvelopesBulk}
          ></ButtonLink>
          <ButtonLink
            text="Me suivre sur LinkedIn"
            link="https://www.linkedin.com/in/david-vct/"
            icon={faLinkedin}
          ></ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}

export default CtaSection
