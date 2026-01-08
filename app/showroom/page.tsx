"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CarCard } from "@/components/car-card"
import { ShowroomFilters, type Filters } from "@/components/showroom-filters"
import { ShowroomSort, type SortOption } from "@/components/showroom-sort"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cars } from "@/lib/data"

const initialFilters: Filters = {
  brands: [],
  categories: [],
  transmissions: [],
  fuels: [],
  priceMin: "",
  priceMax: "",
  yearMin: "",
  yearMax: "",
  mileageMin: "",
  mileageMax: "",
}

export default function ShowroomPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [sort, setSort] = useState<SortOption>("relevance")
  const [search, setSearch] = useState("")

  const filteredCars = useMemo(() => {
    let result = [...cars]

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.version.toLowerCase().includes(searchLower),
      )
    }

    // Brand filter
    if (filters.brands.length > 0) {
      result = result.filter((car) => filters.brands.includes(car.brand))
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((car) => filters.categories.includes(car.category))
    }

    // Transmission filter
    if (filters.transmissions.length > 0) {
      result = result.filter((car) => filters.transmissions.includes(car.transmission))
    }

    // Fuel filter
    if (filters.fuels.length > 0) {
      result = result.filter((car) => filters.fuels.includes(car.fuel))
    }

    // Price filter
    if (filters.priceMin) {
      result = result.filter((car) => car.price >= Number(filters.priceMin))
    }
    if (filters.priceMax) {
      result = result.filter((car) => car.price <= Number(filters.priceMax))
    }

    // Year filter
    if (filters.yearMin) {
      result = result.filter((car) => car.year >= Number(filters.yearMin))
    }
    if (filters.yearMax) {
      result = result.filter((car) => car.year <= Number(filters.yearMax))
    }

    // Mileage filter
    if (filters.mileageMin) {
      result = result.filter((car) => car.mileage >= Number(filters.mileageMin))
    }
    if (filters.mileageMax) {
      result = result.filter((car) => car.mileage <= Number(filters.mileageMax))
    }

    // Sorting
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage)
        break
      default:
        // Relevance: featured first
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [filters, sort, search])

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Banner */}
      <section className="pt-20 md:pt-24 pb-8 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Showroom</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explora nuestra selección de autos seminuevos certificados. Encuentra el vehículo perfecto para ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Search and Sort Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por marca o modelo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="lg:hidden flex-1">
                <ShowroomFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  onClearFilters={() => setFilters(initialFilters)}
                  totalResults={filteredCars.length}
                />
              </div>
              <ShowroomSort value={sort} onChange={setSort} />
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <ShowroomFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={() => setFilters(initialFilters)}
              totalResults={filteredCars.length}
            />

            {/* Car Grid */}
            <div className="flex-1">
              {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCars.map((car, index) => (
                    <CarCard key={car.id} car={car} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">
                    No se encontraron vehículos con los filtros seleccionados.
                  </p>
                  <button onClick={() => setFilters(initialFilters)} className="text-primary hover:underline">
                    Limpiar filtros
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
