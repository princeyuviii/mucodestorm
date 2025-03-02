import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "MU CodeStorm",
  description: "Join us for an exciting 36-hour hackathon event at Mandsaur University!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/mu.ico" />
      </head>
      <body className="font-sans bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

