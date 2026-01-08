"use client"

import { motion } from "framer-motion"
import { Phone, ClipboardCheck, Car, Banknote, PenTool } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Contacto y evaluación",
    description: "Recibimos los datos de tu vehículo y analizamos tu caso.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Tasación real de mercado",
    description: "Te damos un precio honesto, alineado al mercado actual.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Inspección del vehículo",
    description: "Validamos el estado mecánico, estético y legal.",
    icon: Car,
  },
  {
    number: "04",
    title: "Gestión de deuda y pago",
    description: "Pagamos la deuda y te entregamos el saldo restante.",
    icon: Banknote,
  },
  {
    number: "05",
    title: "Firma notarial y cierre",
    description: "Realizamos la transferencia de forma segura y legal.",
    icon: PenTool,
  },
]

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#f3f4f6]">
      {/* Fondo Gradiente Suave */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white to-[#f3f4f6]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#002559]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#d30826]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#d30826]" />
            <span className="text-[#d30826] font-medium tracking-wider uppercase">Proceso transparente</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#002559]"
          >
            Así trabajamos en Autosaldo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Descubre nuestro proceso claro y seguro para vender tu vehículo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-100 -z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#d30826] rounded-full" />
                </div>
              )}

              <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 h-full flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group-hover:border-primary/20">
                <div className="w-12 h-12 rounded-full bg-[#d30826] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <h3 className="font-bold text-lg text-[#002559] leading-tight mb-4 min-h-[3rem] flex items-center justify-center">
                  {step.title}
                </h3>

                <div className="w-16 h-16 mb-4 text-[#d30826] group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-full h-full stroke-[1.5]" />
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#d30826] rotate-45 group-hover:translate-y-0.5 transition-transform" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
