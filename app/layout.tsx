import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import MotionProvider from "./components/common/motion/MotionProvider"
import SideIndex from "./components/layout/SideIndex"
import "./globals.css"

// FontAwesome injects its CSS at runtime by default, which causes a flash of
// giant unstyled icons on first paint (SSR/hydration). Importing the
// stylesheet ourselves and disabling autoAddCss makes icons correctly sized
// from the very first render.
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "David Vicente | Développeur Web & Mobile",
	description:
		"Portfolio de David Vicente, développeur web et mobile fullstack. J'aide les PME et les startups à concevoir et développer leurs solutions web et mobiles.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<MotionProvider>
					{children}
					<SideIndex />
				</MotionProvider>
			</body>
		</html>
	)
}
