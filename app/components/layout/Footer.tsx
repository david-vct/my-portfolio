"use client"

import React from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { sections } from "../../lib/sections"
import { scrollToSection } from "../../lib/scrollToSection"

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-neutral">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-3 md:flex-row md:justify-between md:gap-2 md:px-16 md:py-4">
        <p className="order-3 text-xs text-light/50 md:order-1">
          © 2024 David Vicente ·{" "}
          <a
            href="https://github.com/david-vct/my-portfolio/blob/main/LICENSE.md"
            target="_blank"
            className="transition-colors duration-300 hover:text-accent"
          >
            Licence MIT
          </a>
        </p>

        <nav
          aria-label="Navigation du pied de page"
          className="order-1 md:order-2"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs uppercase tracking-widest text-light/60">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(event) => scrollToSection(event, section.id)}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-2 flex items-center gap-4 md:order-3">
          <a
            href="https://www.linkedin.com/in/david-vct/"
            target="_blank"
            className="inline-block -m-3 rounded p-3 text-light/60 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/david-vct"
            target="_blank"
            className="inline-block -m-3 rounded p-3 text-light/60 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
