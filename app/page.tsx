import Footer from "./components/layout/Footer"
import Hero from "./components/layout/Hero"
import PresentationSection from "./components/layout/PresentationSection"
import ProjectSection from "./components/layout/ProjectSection"
import ServicesSection from "./components/layout/ServicesSection"

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center justify-between">
				<Hero />
				<PresentationSection />
				<ServicesSection />
				<ProjectSection />
			</main>
			<Footer />
		</>
	)
}
