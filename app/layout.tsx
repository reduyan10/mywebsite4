import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Hare Reduyan Ahmed - Motion Graphic Designer",
  description:
    "Creative Motion Graphic Designer specializing in branding, animation, and digital media. 4+ years experience with 50+ successful projects.",
  generator: "v0.app",
  keywords: "motion graphics, animation, branding, logo design, video editing, 3D animation",
  authors: [{ name: "Hare Reduyan Ahmed" }],
  openGraph: {
    title: "Hare Reduyan Ahmed - Motion Graphic Designer",
    description: "Creative Motion Graphic Designer specializing in branding, animation, and digital media.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
