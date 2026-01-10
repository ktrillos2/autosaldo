"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar, Gauge } from "lucide-react"
import { formatPrice, formatMileage } from "@/lib/data"
import type { Car } from "@/lib/data"
import { urlFor } from "@/sanity/lib/image"

interface HeroContent {
  overline?: string
  headline?: string
  headlineHighlight?: string
  subheadline?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export function HeroSection({ content, cars }: { content?: HeroContent; cars?: Car[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const featuredCars = cars || []

  const overline = content?.overline || "SERVICIO DE VENTA ASISTIDA"
  const headline = content?.headline || "¡Compramos tu auto con deuda"
  const headlineHighlight = content?.headlineHighlight || "al instante y sin riesgos!"
  const subheadline =
    content?.subheadline ||
    "Olvídate de las demoras y los trámites engorrosos. Recibe una oferta justa en minutos y el dinero en tu cuenta hoy mismo."
  const primaryButtonText = content?.primaryButtonText || "Cotizar mi Auto Ahora"
  const primaryButtonLink = content?.primaryButtonLink || "/cotizador"
  const secondaryButtonText = content?.secondaryButtonText || "Contactar Asesor"
  const secondaryButtonLink = content?.secondaryButtonLink || "/contacto"

  useEffect(() => {
    if (!isAutoPlaying || featuredCars.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCars.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [featuredCars.length, isAutoPlaying])

  const nextSlide = () => {
    if (featuredCars.length === 0) return
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % featuredCars.length)
  }

  const prevSlide = () => {
    if (featuredCars.length === 0) return
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length)
  }

  const currentCar = featuredCars[currentIndex]

  // Image URL handling
  const imageUrl = currentCar?.images?.[0]
    ? typeof currentCar.images[0] === "string"
      ? currentCar.images[0]
      : urlFor(currentCar.images[0]).url()
    : "/placeholder.svg?height=1080&width=1920&query=luxury car showroom dark"

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
            src={imageUrl || "/placeholder.svg"}
            alt={`${currentCar?.brand || "Auto"} ${currentCar?.model || ""}`}
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center pt-24 pb-32">
          {/* Contenido principal */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Texto */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-3 text-[#d30826] text-sm font-semibold tracking-widest uppercase">
                  <span className="w-12 h-px bg-[#d30826]" />
                  {overline}
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                {headline}
                <br />
                <span className="text-[#d30826]">{headlineHighlight}</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">{subheadline}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="group bg-[#d30826] text-white hover:bg-[#d30826]/90 rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-red-900/20"
                >
                  <Link href={primaryButtonLink}>
                    {primaryButtonText}
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  asChild
                  className="rounded-full h-14 px-8 text-base font-semibold bg-white text-[#002559] hover:bg-gray-100 shadow-lg"
                >
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              </div>
            </div>

            {/* Card del auto actual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 max-w-md ml-auto">
                {/* Imagen del auto en card */}
                <div className="relative aspect-video w-full mb-4 rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`${currentCar?.brand} ${currentCar?.model}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Header card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#d30826] animate-pulse" />
                    <span className="text-white/60 text-xs uppercase tracking-wider">Destacado</span>
                  </div>
                  <span className="text-white/40 text-xs font-mono">
                    {String(currentIndex + 1).padStart(2, "0")}/{String(featuredCars.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Info del auto */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-lg font-bold text-white leading-tight">
                          {currentCar?.brand} {currentCar?.model}
                        </h2>
                        <p className="text-white/50 text-xs mt-0.5">Ejemplo de Compra</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-[#d30826] font-bold uppercase mb-0.5">Pagamos hasta</p>
                        <p className="text-xl font-bold text-white">{formatPrice(currentCar?.price || 0)}</p>
                      </div>
                    </div>

                    {/* Specs grid */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      <div className="bg-white/5 rounded-lg p-2.5 text-center">
                        <Calendar className="w-3.5 h-3.5 text-[#d30826] mx-auto mb-1.5" />
                        <p className="text-white font-medium text-sm">{currentCar?.year}</p>
                        <p className="text-white/40 text-[10px]">Año</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2.5 text-center">
                        <Gauge className="w-3.5 h-3.5 text-[#d30826] mx-auto mb-1.5" />
                        <p className="text-white font-medium text-sm">{formatMileage(currentCar?.mileage || 0)}</p>
                        <p className="text-white/40 text-[10px]">Km</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2.5 text-center">
                        <MapPin className="w-3.5 h-3.5 text-[#d30826] mx-auto mb-1.5" />
                        <p className="text-white font-medium text-sm">Lima</p>
                        <p className="text-white/40 text-[10px]">Ubicación</p>
                      </div>
                    </div>

                    {/* Precio y CTA */}
                    <div className="flex items-center gap-3">
                      <Button
                        asChild
                        className="w-full rounded-xl bg-white text-[#002559] hover:bg-white/90 h-10 text-sm font-bold"
                      >
                        <Link href={`/vehiculo/${currentCar?.id}`}>
                          Ver Detalles
                          <ArrowRight className="ml-2 w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navegación */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
                  <div className="flex gap-1">
                    {featuredCars.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setIsAutoPlaying(false)
                          setCurrentIndex(i)
                        }}
                        className="p-2 group focus:outline-none"
                        aria-label={`Ir a diapositiva ${i + 1}`}
                      >
                        <div
                          className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? "w-6 bg-[#d30826]" : "w-1.5 bg-white/20 group-hover:bg-white/40"
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                      aria-label="Diapositiva anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                      aria-label="Siguiente diapositiva"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
          <div className="w-px h-12 bg-gradient-to-b from-[#d30826] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
