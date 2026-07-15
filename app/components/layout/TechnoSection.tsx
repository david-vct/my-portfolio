import {
  faDocker,
  faGitAlt,
  faNodeJs,
  faPostgresql,
  faReact,
  faTailwindCss,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons"
import {
  faLeaf,
  faMobileScreenButton,
  faN,
  faPaperPlane,
  faServer,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import Reveal from "../common/motion/Reveal"

const technos: { name: string; icon: IconProp }[] = [
  { name: "React", icon: faReact },
  { name: "React Native", icon: faMobileScreenButton },
  { name: "Next.js", icon: faN },
  { name: "Expo", icon: faPaperPlane },
  { name: "Node.js", icon: faNodeJs },
  { name: "NestJS", icon: faServer },
  { name: "TypeScript", icon: faTypescript },
  { name: "Tailwind CSS", icon: faTailwindCss },
  { name: "MongoDB", icon: faLeaf },
  { name: "PostgreSQL", icon: faPostgresql },
  { name: "Git", icon: faGitAlt },
  { name: "Docker", icon: faDocker },
]

const TechnoSection = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <Reveal fade={false}>
        <div className="marquee-fade overflow-hidden rounded-md border border-white/10 bg-base/30 backdrop-blur-sm py-6">
          <div className="flex flex-row flex-nowrap w-max animate-marquee">
            {[...technos, ...technos].map((techno, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-3 px-6 text-lg whitespace-nowrap border-r border-white/10 last:border-r-0"
              >
                <FontAwesomeIcon className="h-7 text-accent" icon={techno.icon} />
                <span className="font-semibold">{techno.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default TechnoSection
