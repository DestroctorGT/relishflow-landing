import type { Metadata } from "next"
import { bricolage, hanken, jetbrains } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "RelishFlow — Hacer que la hospitalidad fluya",
  description:
    "Sistema operativo para la hospitalidad. Menú QR digital, pedidos en tiempo real, dashboard operativo y coordinación de cocina y equipo.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="flex min-h-dvh flex-col bg-bone text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
