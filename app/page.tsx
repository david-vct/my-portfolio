import Hero from "./components/Hero"
import PresentationSection from "./components/PresentationSection"
import ProjectSection from "./components/ProjectSection"
import ServicesSection from "./components/ServicesSection"
import TechnoSection from "./components/TechnoSection"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<Hero />
			<PresentationSection />
			<ServicesSection />
			<TechnoSection />
			<ProjectSection />
		</main>
	)
}
