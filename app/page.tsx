import Hero from "./components/Hero"
import ServicesSection from "./components/ServicesSection"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<Hero />
			<ServicesSection />
		</main>
	)
}
