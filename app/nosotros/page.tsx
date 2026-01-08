"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield, Users, Award, Clock, Target, Heart } from "lucide-react"

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "1,500+", label: "Autos vendidos" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "240", label: "Puntos de inspección" },
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
            alt="Showroom AutoPremium"
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
            {stats.map((stat, index) => (
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

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Nuestra Misión</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Revolucionando el mercado automotriz
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AutoPremium nació con una misión clara: eliminar la desconfianza y el estrés que rodea la compra y
                  venta de autos usados. Creemos que cada persona merece una experiencia transparente, justa y sin
                  complicaciones.
                </p>
                <p>
                  Nuestro equipo de expertos inspecciona cada vehículo con 240 puntos de control, garantizando que solo
                  los mejores autos lleguen a nuestro showroom. No se trata solo de vender autos, sino de construir
                  relaciones de confianza que perduren en el tiempo.
                </p>
                <p>
                  Hoy, después de más de 5 años y 1,500 autos vendidos, seguimos comprometidos con nuestra visión
                  original: hacer que comprar o vender un auto sea una experiencia memorable y positiva.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/car-inspection-team-working.jpg"
                  alt="Equipo de inspección"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-xl flex items-center justify-center">
                <div className="text-center text-accent-foreground">
                  <p className="font-serif text-3xl font-bold">5+</p>
                  <p className="text-xs">años</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Lo que nos define</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">Nuestros Valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Las personas detrás</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">Nuestro Equipo</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
