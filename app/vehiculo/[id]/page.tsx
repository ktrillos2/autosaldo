import { notFound } from "next/navigation"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { VehicleSpecs } from "@/components/vehicle-specs"
import { VehicleCTA, VehicleCTAMobile } from "@/components/vehicle-cta"
import { CarCard } from "@/components/car-card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import { getCarById, cars } from "@/lib/data"

interface VehiclePageProps {
  params: Promise<{ id: string }>
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { id } = await params
  const car = getCarById(id)

  if (!car) {
    notFound()
  }

  const relatedCars = cars
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.category === car.category))
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background pb-24 lg:pb-0">

      <div className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link
            href="/showroom"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver al Showroom
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Specs */}
            <div className="lg:col-span-2 space-y-6">
              <ImageGallery images={car.images} alt={`${car.brand} ${car.model}`} />

              {/* Title - Mobile */}
              <div className="lg:hidden">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{car.category}</Badge>
                  <Badge variant="outline">{car.year}</Badge>
                </div>
                <h1 className="font-serif text-2xl font-bold text-foreground">
                  {car.brand} {car.model}
                </h1>
                <p className="text-muted-foreground">{car.version}</p>
              </div>

              <VehicleSpecs car={car} />

              {/* Description */}
              <div className="bg-card rounded-xl border border-border p-6">
                {car.owner && (
                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-sm text-muted-foreground">
                      Vehículo de: <span className="font-semibold text-[#002559] text-base">{formatOwnerName(car.owner)}</span>
                    </p>
                  </div>
                )}
                <h2 className="font-semibold text-lg text-foreground mb-4">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vehículo {car.brand} {car.model} {car.version} del año {car.year} en excelente estado. Cuenta con{" "}
                  {car.mileage.toLocaleString()} km de recorrido, transmisión{" "}
                  {car.transmission === "AT" ? "automática" : car.transmission === "MT" ? "manual" : "CVT"} y motor a{" "}
                  {car.fuel.toLowerCase()}. Ha pasado por nuestra inspección de 240 puntos garantizando su calidad y
                  funcionamiento óptimo. Incluye {car.keys} {car.keys === 1 ? "llave" : "llaves"} y toda la
                  documentación en regla.
                </p>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="hidden lg:block">
              {/* Title - Desktop */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{car.category}</Badge>
                  <Badge variant="outline">{car.year}</Badge>
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  {car.brand} {car.model}
                </h1>
                <p className="text-muted-foreground mt-1">{car.version}</p>
              </div>

              <VehicleCTA car={car} />
            </div>
          </div>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Vehículos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCars.map((relatedCar, index) => (
                  <CarCard key={relatedCar.id} car={relatedCar} index={index} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Footer />
      <VehicleCTAMobile car={car} />
    </main>
  )
}

function formatOwnerName(name: string): string {
  const parts = name.split(" ")
  if (parts.length < 2) return name
  return `${parts[0]} ${parts[1].charAt(0)}.`
}
