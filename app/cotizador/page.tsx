"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CotizadorWizard } from "@/components/cotizador-wizard"
import { CotizadorFAQ } from "@/components/cotizador-faq"
import { QuoteForm } from "@/components/quote-form"
import { Car, Shield, Clock, BadgeCheck } from "lucide-react"

export default function CotizadorPage() {
  const benefits = [
    { icon: Clock, title: "Rápido", desc: "En menos de 1 minuto" },
    { icon: Shield, title: "Seguro", desc: "Datos protegidos" },
    { icon: BadgeCheck, title: "Gratis", desc: "Sin compromiso" },
    { icon: Car, title: "Fácil", desc: "100% online" },
  ]

  return (
    <main className="min-h-screen bg-white">

      <section className="pt-24 relative overflow-hidden bg-[#f8fafc] min-h-[60vh] flex items-center">
        {/* Fondo Creativo: Mesh Gradient */}
        <div className="absolute inset-0 w-full h-full bg-[#f8fafc]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,37,89,0.15),rgba(255,255,255,0))]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(211,8,38,0.1),rgba(255,255,255,0))]" />
          <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-[#002559]/5 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-[#d30826]/5 rounded-full blur-[80px] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-[#d30826] text-sm font-bold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-[#d30826]" />
                Cotizador Online
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002559] mb-6 leading-[1.1]">
                Vende tu auto
                <span className="block text-[#d30826]">al mejor precio</span>
              </h1>

              <div className="flex gap-6 mb-10 max-w-lg">
                <div className="w-1 bg-[#002559] shrink-0 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
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
                    className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0 text-[#d30826]">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002559] text-sm">{benefit.title}</p>
                      <p className="text-gray-500 text-xs">{benefit.desc}</p>
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

      {/* Quote Form Section */}
      <QuoteForm />

      <CotizadorFAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
