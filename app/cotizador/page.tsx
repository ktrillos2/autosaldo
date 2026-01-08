"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CotizadorWizard } from "@/components/cotizador-wizard"
import { CotizadorFAQ } from "@/components/cotizador-faq"
import { Car, Shield, Clock, BadgeCheck } from "lucide-react"

export default function CotizadorPage() {
  const benefits = [
    { icon: Clock, title: "Rápido", desc: "En menos de 1 minuto" },
    { icon: Shield, title: "Seguro", desc: "Datos protegidos" },
    { icon: BadgeCheck, title: "Gratis", desc: "Sin compromiso" },
    { icon: Car, title: "Fácil", desc: "100% online" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 relative overflow-hidden bg-accent min-h-[60vh] flex items-center">
        {/* Fondo con patrón geométrico sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent via-accent to-accent/95" />
        </div>

        {/* Efecto de grano */}
        <div className="absolute inset-0 film-grain" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                Cotizador Online
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Vende tu auto
                <span className="block text-gradient">al mejor precio</span>
              </h1>

              <div className="flex gap-6 mb-10 max-w-lg">
                <div className="w-px bg-primary/50 shrink-0" />
                <p className="text-white/60 text-lg leading-relaxed">
                  Descubre el valor de tu vehículo en menos de 60 segundos. Sin compromiso, sin costos ocultos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass-dark rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{benefit.title}</p>
                      <p className="text-white/50 text-xs">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Wizard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <CotizadorWizard />
            </motion.div>
          </div>
        </div>
      </section>

      <CotizadorFAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
