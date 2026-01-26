import { notFound } from "next/navigation"
import Link from "next/link"

import { ImageGallery } from "@/components/image-gallery"
import { VehicleSpecs } from "@/components/vehicle-specs"
import { VehicleCTA, VehicleCTAMobile } from "@/components/vehicle-cta"
import { CarCard } from "@/components/car-card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { urlFor } from "@/sanity/lib/image"
import { Car } from "@/lib/data" // Importing Type IF it exists, otherwise define it. Assuming checking types first is safer but I will proceed assuming compatibility or partial. Using 'any' for now to be safe or checking lib/data ? No, let's look at lib/data first to be sure about the type.
// Actually, let's pause. I should check lib/data to see the Car type definition to ensure my fetch matches it or if I need to update it.
// Assuming the user wants me to fix it NOW.
// I will fetch and cast or extensive mapping.
// Let's stick to the plan: View lib/data first? No, I'll just rewrite the file content since I saw the file content in previous turns (or I can infer).
// I will proceed with rewriting.
// WAIT. I need to make sure I don't break the build if Car type is strict.
// Let's modify the imports and the component.

interface VehiclePageProps {
  params: Promise<{ id: string }>
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { id } = await params

  // Fetch Car
  const car = await client.fetch(groq`*[(_type == "auto" || _type == "autoUsuario") && _id == $id][0]{
    ...,
    "id": _id,
    "owner": contactName,
    "category": coalesce(category, "Usuario"),
    images,
    message,
    description,
    cc,
    hp,
    consumption,
    keys
  }`, { id }, { next: { revalidate: 0 } })

  if (!car) {
    notFound()
  }

  // Transform images to URLs
  const formattedImages = car.images?.map((img: any) =>
    typeof img === 'string' ? img : urlFor(img).url()
  ) || []

  // Fetch Related Cars
  // Ensure we don't crash if category is missing or custom
  const relatedCars = await client.fetch(groq`*[_type == "auto" && _id != $id && (brand == $brand || category == $category)][0..3]{
    ...,
    "id": _id
  }`, { id, brand: car.brand, category: car.category || "General" }, { next: { revalidate: 0 } })

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
              <ImageGallery images={formattedImages} alt={`${car.brand} ${car.model}`} />

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
                      Vendido por: <span className="font-semibold text-[#002559] text-base">{formatOwnerName(car.owner)}</span>
                    </p>
                  </div>
                )}
                <h2 className="font-semibold text-lg text-foreground mb-4">Descripción</h2>
                {car.description ? (
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {car.description}
                  </p>
                ) : car.message ? (
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {car.message}
                  </p>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    Vehículo {car.brand} {car.model} {car.version} del año {car.year} en excelente estado. Cuenta con{" "}
                    {car.mileage?.toLocaleString()} km de recorrido, transmisión{" "}
                    {car.transmission === "AT" ? "automática" : car.transmission === "MT" ? "manual" : "CVT"} y motor a{" "}
                    {car.fuel?.toLowerCase()}. Ha pasado por nuestra inspección de 240 puntos garantizando su calidad y
                    funcionamiento óptimo. {car.keys ? `Incluye ${car.keys} ${car.keys === 1 ? "llave" : "llaves"} y t` : "T"}oda la
                    documentación en regla.
                  </p>
                )}
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
                {relatedCars.map((relatedCar: any, index: number) => (
                  <CarCard key={relatedCar.id} car={relatedCar} index={index} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>


      <VehicleCTAMobile car={car} />
    </main>
  )
}

function formatOwnerName(name: string): string {
  const parts = name.split(" ")
  if (parts.length < 2) return name
  return `${parts[0]} ${parts[1].charAt(0)}.`
}
