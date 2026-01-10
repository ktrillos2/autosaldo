import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://autosaldo.com"),
  title: "Autosaldo | Compra y Venta de Autos Usados y Seminuevos",
  description:
    "Compra y venta de autos usados y seminuevos garantizados en Lima. Tasación inmediata, trámites seguros y el mejor precio del mercado. ¡Vende tu auto hoy!",
  keywords: [
    "compra de autos",
    "venta de autos",
    "autos usados",
    "autos seminuevos",
    "concesionario",
    "lima",
    "tasacion de autos",
    "vender auto con deuda",
  ],
  generator: "v0.app",
  icons: {
    icon: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  },
  openGraph: {
    title: "Autosaldo | Compra y Venta de Autos Usados y Seminuevos",
    description: "Vende tu auto al instante y sin riesgos. Compramos tu vehículo con deuda. Tasacíon gratuita en Lima.",
    url: "https://autosaldo.com",
    siteName: "Autosaldo",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
}

import { client } from "@/sanity/lib/client"

import { ConditionalFooter } from "@/components/conditional-footer"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await client.fetch(`{
    "header": *[_type == "header"][0],
    "footer": *[_type == "footer"][0]
  }`)

  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        <Header content={data.header} />
        {children}
        <ConditionalFooter content={data.footer} />
        <Analytics />
      </body>
    </html>
  )
}
