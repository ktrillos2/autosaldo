"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield, Users, Award, Clock, Target, Heart } from "lucide-react"

const stats = [
  { value: "8+", label: "Años de experiencia" },
  { value: "200+", label: "Autos vendidos" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "24", label: "Horas promedio venta" },
]

const values = [
  {
    icon: Shield,
    title: "Transparencia",
    description: "Precios justos y procesos claros. Sin letra pequeña ni sorpresas.",
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Construimos relaciones duraderas con cada cliente que nos visita.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Solo los mejores vehículos pasan nuestra rigurosa inspección.",
  },
  {
    icon: Clock,
    title: "Agilidad",
    description: "Procesos rápidos y eficientes para que no pierdas tiempo.",
  },
  {
    icon: Target,
    title: "Compromiso",
    description: "Nos comprometemos a encontrar el auto perfecto para ti.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos los autos y eso se refleja en cada detalle.",
  },
]

const team = [
  {
    name: "Carlos Mendoza",
    role: "Fundador & CEO",
    image: "/car-dealership-professional-latino-ceo.jpg",
  },
  {
    name: "María García",
    role: "Directora Comercial",
    image: "/car-dealership-professional-latina-director.jpg",
  },
  {
    name: "Roberto Sánchez",
    role: "Jefe de Inspección",
    image: "/car-dealership-latino-mechanic-inspector.jpg",
  },
]

export default function NosotrosPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/modern-car-showroom-interior.jpg"
            alt="Showroom Autosaldo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4"
            >
              Nuestra Historia
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-bold text-background mb-6"
            >
              Más que autos, experiencias
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-background/80 max-w-xl mx-auto"
            >
              Desde 2019, transformamos la forma de comprar y vender autos en Perú con transparencia, confianza y
              pasión.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8+", label: "Años de experiencia" },
              { value: "200+", label: "Autos vendidos" },
              { value: "100%", label: "Clientes satisfechos" },
              { value: "24", label: "Horas promedio venta" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full"
            >
              <span className="text-brand-red font-medium text-sm tracking-wider uppercase">Nuestra Misión</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
                Soluciones rápidas
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Brindar soluciones rápidas, seguras y transparentes en la compra y venta de vehículos, especializándonos en vehículos con deuda.
                </p>
                <p>
                  En Autosaldo priorizamos la claridad, la confianza y la atención personalizada, ofreciendo alternativas alineadas a la realidad del mercado.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full"
            >
              <span className="text-brand-red font-medium text-sm tracking-wider uppercase">Nuestra Visión</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
                Referentes nacionales
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Ser una empresa referente a nivel nacional en la compra y venta de vehículos, reconocida por su especialización en casos complejos y alto nivel de confianza.
                </p>
                <p>
                  Buscamos consolidarnos como una marca sólida y profesional, convirtiéndonos en la primera opción para quienes desean vender su vehículo sin estrés.
                </p>
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/30 p-8 rounded-3xl border border-transparent h-full"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Nuestro Expertise</h2>
              <div className="space-y-6 text-muted-foreground text-sm md:text-base">
                <p>
                  Más de 8 años de experiencia en el mercado automotriz, operando activamente desde 2019 con más de 200 vehículos gestionados.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                    <span>Vehículos sin deuda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                    <span>Vehículos con crédito vehicular activo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                    <span>Casos con prenda y procesos financieros</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
