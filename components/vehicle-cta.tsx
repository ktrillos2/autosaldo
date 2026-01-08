"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Car } from "@/lib/data"
import { formatPrice } from "@/lib/data"

interface VehicleCTAProps {
  car: Car
}

export function VehicleCTA({ car }: VehicleCTAProps) {
  const phoneNumber = "+51937385398"
  const carName = `${car.brand} ${car.model} ${car.version}`
  const message = `Hola, estoy interesado en el ${carName} con SKU ${car.sku}`
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${car.brand} ${car.model}`,
          text: `Mira este ${car.brand} ${car.model} ${car.year} - ${formatPrice(car.price)}`,
          url: window.location.href,
        })
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-1">Precio</p>
        <p className="font-serif text-3xl font-bold text-primary">{formatPrice(car.price)}</p>
      </div>

      <div className="space-y-3">
        <Button asChild size="lg" className="w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contactar por WhatsApp
          </a>
        </Button>

        <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
          <a href={`tel:${phoneNumber}`}>
            <Phone className="w-5 h-5 mr-2" />
            Llamar ahora
          </a>
        </Button>

        <Button variant="ghost" size="lg" className="w-full" onClick={handleShare}>
          <Share2 className="w-5 h-5 mr-2" />
          Compartir
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          SKU: <span className="font-medium text-foreground">{car.sku}</span>
        </p>
      </div>
    </div>
  )
}

export function VehicleCTAMobile({ car }: VehicleCTAProps) {
  const phoneNumber = "+51937385398"
  const carName = `${car.brand} ${car.model} ${car.version}`
  const message = `Hola, estoy interesado en el ${carName} con SKU ${car.sku}`
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border p-4 lg:hidden"
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Precio</p>
          <p className="font-bold text-xl text-primary">{formatPrice(car.price)}</p>
        </div>
        <Button asChild size="lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
