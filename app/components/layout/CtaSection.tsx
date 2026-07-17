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
      <div className="absolute z-[-1] inset-0 bg-[url('/images/grid-red.svg')] bg-center opacity-70 [mask-image:radial-gradient(circle,#000_0%,#000_40%,transparent_60%)]"></div>
      <Reveal>
        <Title title="Travaillons ensemble" />
      </Reveal>
      <div className="flex flex-col items-center gap-6 rounded-md border border-white/10 bg-base/40 px-6 py-10 backdrop-blur-sm md:px-16 md:py-14">
        <Reveal delay={0.1} className="flex flex-col items-center gap-6">
          <p className="max-w-3xl text-balance text-3xl md:text-6xl font-black leading-tight">
            <span className="text-white">Un projet en tête&nbsp;?</span>{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Discutons-en.
            </span>
          </p>
          <p className="max-w-2xl text-md md:text-xl text-light/80">
            Que ce soit pour lancer un nouveau produit, renforcer une équipe ou
            donner vie à une idée, je suis disponible pour en parler.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 mt-4">
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
      </div>
    </section>
  )
}

export default CtaSection
