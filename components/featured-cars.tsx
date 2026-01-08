"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Fuel, Gauge, Settings } from "lucide-react"
import { getFeaturedCars, formatPrice, formatMileage } from "@/lib/data"

export function FeaturedCars() {
  const featuredCars = getFeaturedCars()

  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            >
              <span className="w-12 h-px bg-primary" />
              Nuestro Catálogo
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              Autos <span className="text-primary">destacados</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="outline"
              asChild
              className="group rounded-full h-12 px-6 border-foreground/20 bg-transparent"
            >
              <Link href="/showroom">
                Ver todos los autos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.slice(0, 6).map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/vehiculo/${car.id}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5">
                  {/* Imagen */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <Image
                      src={car.images[0] || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm font-medium">
                      {car.category}
                    </Badge>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {car.brand} {car.model}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {car.version} · {car.year}
                        </p>
                      </div>
                      <p className="font-bold text-lg text-primary">{formatPrice(car.price)}</p>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Gauge className="w-4 h-4" />
                        {formatMileage(car.mileage)} km
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Fuel className="w-4 h-4" />
                        {car.fuel}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Settings className="w-4 h-4" />
                        {car.transmission}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
