"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar, Gauge } from "lucide-react"
import { cars, formatPrice, formatMileage } from "@/lib/data"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const featuredCars = cars.filter((c) => c.featured).slice(0, 4)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCars.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [featuredCars.length, isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % featuredCars.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length)
  }

  const currentCar = featuredCars[currentIndex]

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background con imagen del auto actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={currentCar?.images[0] || "/placeholder.svg?height=1080&width=1920&query=luxury car showroom dark"}
            alt={`${currentCar?.brand} ${currentCar?.model}`}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradientes */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </motion.div>
      </AnimatePresence>

      {/* Líneas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center pt-24 pb-32">
          {/* Contenido principal */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Texto */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-3 text-primary text-sm font-semibold tracking-widest uppercase">
                  <span className="w-12 h-px bg-primary" />
                  Concesionario
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
              >
                Tu próximo
                <br />
                <span className="text-primary">auto</span> te espera
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
              >
                Descubre nuestra colección de vehículos seminuevos certificados con garantía extendida y financiamiento
                a tu medida.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 px-8 text-base font-semibold"
                >
                  <Link href="/showroom">
                    Explorar Autos
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full h-14 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/cotizador">Vende tu Auto</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-12 mt-16 pt-10 border-t border-white/10"
              >
                {[
                  { value: "500+", label: "Autos Vendidos" },
                  { value: "12", label: "Años Experiencia" },
                  { value: "98%", label: "Satisfacción" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                    <p className="text-white/40 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Card del auto actual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10">
                {/* Header card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-white/60 text-sm">Destacado</span>
                  </div>
                  <span className="text-white/40 text-sm font-mono">
                    {String(currentIndex + 1).padStart(2, "0")}/{String(featuredCars.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Info del auto */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {currentCar?.brand} {currentCar?.model}
                    </h2>
                    <p className="text-white/50 mb-6">{currentCar?.version}</p>

                    {/* Specs grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                        <p className="text-white font-semibold">{currentCar?.year}</p>
                        <p className="text-white/40 text-xs">Año</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <Gauge className="w-5 h-5 text-primary mx-auto mb-2" />
                        <p className="text-white font-semibold">{formatMileage(currentCar?.mileage || 0)}</p>
                        <p className="text-white/40 text-xs">Kilómetros</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                        <p className="text-white font-semibold">Lima</p>
                        <p className="text-white/40 text-xs">Ubicación</p>
                      </div>
                    </div>

                    {/* Precio y CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/40 text-sm">Precio</p>
                        <p className="text-3xl font-bold text-primary">{formatPrice(currentCar?.price || 0)}</p>
                      </div>
                      <Button asChild className="rounded-full bg-white text-accent hover:bg-white/90 h-12 px-6">
                        <Link href={`/vehiculo/${currentCar?.id}`}>
                          Ver Detalles
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navegación */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <div className="flex gap-2">
                    {featuredCars.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setIsAutoPlaying(false)
                          setCurrentIndex(i)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === currentIndex ? "w-8 bg-primary" : "w-3 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
