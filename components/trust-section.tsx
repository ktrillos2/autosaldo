"use client"

import { motion } from "framer-motion"
import { Shield, Award, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: "12 meses de garantía en motor y transmisión incluida.",
  },
  {
    icon: CheckCircle,
    title: "240 Puntos de Inspección",
    description: "Riguroso proceso de certificación en cada vehículo.",
  },
  {
    icon: Clock,
    title: "Proceso Rápido",
    description: "Compra o vende tu auto en menos de 24 horas.",
  },
  {
    icon: Award,
    title: "Financiamiento",
    description: "Las mejores tasas con los principales bancos.",
  },
]

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-primary text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <span className="w-12 h-px bg-primary" />
            Por qué elegirnos
            <span className="w-12 h-px bg-primary" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            La mejor experiencia en
            <span className="text-primary"> compra y venta</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Más de 12 años respaldando a miles de familias peruanas en la compra de su vehículo ideal.
          </motion.p>
        </div>

        {/* Features con diseño alternado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner con números */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Contenido */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "12+", label: "Años en el mercado" },
                { value: "5,000+", label: "Clientes satisfechos" },
                { value: "8,500+", label: "Autos vendidos" },
                { value: "98%", label: "Satisfacción" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-white/50 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA dentro del banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <p className="text-white/70 text-lg text-center md:text-left">¿Listo para encontrar tu próximo auto?</p>
              <Link
                href="/showroom"
                className="group inline-flex items-center gap-3 text-primary font-semibold hover:gap-4 transition-all"
              >
                Ver Catálogo Completo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
