"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fuel, Gauge, Settings } from "lucide-react"
import type { Car } from "@/lib/data"
import { formatPrice, formatMileage } from "@/lib/data"

interface CarCardProps {
  car: Car
  index?: number
}

import { urlFor } from "@/sanity/lib/image"

// ...

export function CarCard({ car, index = 0 }: CarCardProps) {
  const imageUrl = car.images?.[0]
    ? (typeof car.images[0] === 'string' ? car.images[0] : urlFor(car.images[0]).url())
    : "/placeholder.svg"

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
      <Link href={`/vehiculo/${car._id || car.id}`}>
        <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-card p-0 gap-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Badge className="absolute top-3 left-3 bg-foreground/80 text-background">{car.category}</Badge>
            {car.sold ? (
              <Badge className="absolute top-3 right-3 bg-[#d30826] text-white hover:bg-[#d30826]/90 font-bold uppercase">Vendido</Badge>
            ) : car.featured && (
              <Badge className="absolute top-3 right-3 bg-[#d30826] text-white hover:bg-[#d30826]/90">Destacado</Badge>
            )}

          </div>
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {car.brand} {car.model}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {car.version} - {car.year}
                </p>
              </div>
              <p className="font-bold text-lg text-primary shrink-0">{formatPrice(car.price)}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Gauge className="w-4 h-4" />
                {formatMileage(car.mileage)} km
              </span>
              <span className="flex items-center gap-1">
                <Fuel className="w-4 h-4" />
                {car.fuel}
              </span>
              <span className="flex items-center gap-1">
                <Settings className="w-4 h-4" />
                {car.transmission}
              </span>
            </div>

            {car.owner && (
              <div className="pt-3 border-t border-gray-100 mt-2">
                <p className="text-sm text-gray-500 text-center">
                  Vendido por: <span className="font-semibold text-[#002559]">{formatOwnerName(car.owner)}</span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

function formatOwnerName(name: string): string {
  const parts = name.split(" ")
  if (parts.length < 2) return name
  // Nombre + Primera letra del segundo nombre + *
  const firstName = parts[0]
  const secondNameInitial = parts[1].charAt(0)
  return `${firstName} ${secondNameInitial}*`
}
