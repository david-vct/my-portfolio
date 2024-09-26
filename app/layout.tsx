import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "David Vicente | Web Developer",
	description: "Portfolio de David Vicente, développeur web freelance. Je crée tout type de sites web.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
