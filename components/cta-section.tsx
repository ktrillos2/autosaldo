"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CarFront, ShieldCheck, Banknote, CheckCircle2 } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Líneas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header centrado */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-primary text-sm font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-12 h-px bg-primary" />
              Vende tu Auto
              <span className="w-12 h-px bg-primary" />
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Obtén el mejor precio
              <br />
              <span className="text-primary">por tu vehículo</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/50 max-w-2xl mx-auto"
            >
              Proceso 100% digital. Cotiza en 60 segundos y recibe una oferta real por tu auto.
            </motion.p>
          </div>

          {/* Cards de beneficios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Zap, title: "60 seg", desc: "Cotización rápida" },
              { icon: ShieldCheck, title: "100%", desc: "Proceso seguro" },
              { icon: CarFront, title: "Gratis", desc: "Recojo a domicilio" },
              { icon: Banknote, title: "Mejor", desc: "Precio del mercado" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{item.title}</p>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Proceso simplificado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Cotiza Online",
                  desc: "Ingresa los datos de tu vehículo y obtén un precio estimado al instante",
                },
                {
                  step: "02",
                  title: "Inspección",
                  desc: "Agendamos una cita para revisar tu auto en el lugar que prefieras",
                },
                {
                  step: "03",
                  title: "Recibe tu Pago",
                  desc: "Aprobada la inspección, recibes tu dinero en menos de 24 horas",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-bold text-primary/50 absolute -top-4 -left-2">{item.step}</span>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button
              size="lg"
              asChild
              className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-16 px-10 text-lg font-semibold shadow-lg shadow-primary/25"
            >
              <Link href="/cotizador">
                Cotizar mi Auto Ahora
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                100% gratis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Respuesta inmediata
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
