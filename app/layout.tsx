import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artesanías Peruanas - Tejas, Pastelones, Pisos y Enchapes de Arcilla",
  description:
    "Especialistas en artesanías de arcilla hechas a mano. Tejas artesanales, pastelones, pisos y enchapes únicos con 25 años de experiencia en Perú.",
  keywords: "artesanías, arcilla, tejas, pastelones, pisos, enchapes, Perú, artesanal, tradicional",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
