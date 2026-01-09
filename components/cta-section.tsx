"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CarFront, ShieldCheck, Banknote, CheckCircle2, MessageCircle, ClipboardCheck, Camera, UserCheck, FileSignature } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Fondo Gradiente */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#d30826] opacity-10 blur-[100px]" />
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] bg-[#002559] opacity-10 blur-[120px]" />
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
              SERVICIO DE VENTA ASISTIDA
              <span className="w-12 h-px bg-primary" />
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002559] mb-6 leading-tight"
            >
              Tú pones el vehículo.
              <br />
              <span className="text-[#d30826]">Nosotros nos encargamos de venderlo.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              En Autosaldo te ayudamos a vender tu vehículo de forma segura, ordenada y sin complicaciones. Nos encargamos de todo el proceso para que no pierdas tiempo atendiendo interesados ni negociando sin respaldo.
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
                className="bg-white border border-gray-200 shadow-lg shadow-gray-200/50 rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-2xl font-bold text-[#002559] mb-1">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Proceso simplificado */}
          {/* Proceso simplificado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  icon: MessageCircle,
                  step: "01",
                  title: "Contacto",
                  desc: "Envíanos los datos básicos.",
                },
                {
                  icon: ClipboardCheck,
                  step: "02",
                  title: "Tasación",
                  desc: "Evaluamos tu auto a domicilio.",
                },
                {
                  icon: Camera,
                  step: "03",
                  title: "Publicación",
                  desc: "Fotos profesionales y difusión.",
                },
                {
                  icon: UserCheck,
                  step: "04",
                  title: "Gestión",
                  desc: "Filtramos compradores reales.",
                },
                {
                  icon: FileSignature,
                  step: "05",
                  title: "Venta",
                  desc: "Trámite notarial seguro.",
                },
              ].map((item, i) => (
                <div key={i} className="relative group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#d30826]/10 transition-colors">
                    <item.icon className="w-6 h-6 text-[#002559] group-hover:text-[#d30826] transition-colors" />
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-bold text-gray-200">{item.step}</div>
                  <h3 className="font-bold text-[#002559] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
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

            <div className="flex items-center justify-center gap-6 mt-8 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d30826]" />
                Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d30826]" />
                100% gratis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d30826]" />
                Respuesta inmediata
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
