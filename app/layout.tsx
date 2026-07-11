import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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
			<body className={inter.className}>{children}</body>
		</html>
	)
}
