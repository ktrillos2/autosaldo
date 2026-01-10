"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { SlidersHorizontal, X } from "lucide-react"

export interface Filters {
  brands: string[]
  categories: string[]
  transmissions: string[]
  fuels: string[]
  priceMin: string
  priceMax: string
  yearMin: string
  yearMax: string
  mileageMin: string
  mileageMax: string
}

export interface FilterOptions {
  brands: string[]
  categories: string[]
  transmissions: string[]
  fuels: string[]
}

interface ShowroomFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  onClearFilters: () => void
  totalResults: number
  options?: FilterOptions
}

export function ShowroomFilters({ filters, onFiltersChange, onClearFilters, totalResults, options }: ShowroomFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const defaultOptions = { brands: [], categories: [], transmissions: [], fuels: [] }
  const { brands, categories, transmissions, fuels } = options || defaultOptions

  const activeFiltersCount =
    filters.brands.length +
    filters.categories.length +
    filters.transmissions.length +
    filters.fuels.length +
    (filters.priceMin ? 1 : 0) +
    (filters.priceMax ? 1 : 0) +
    (filters.yearMin ? 1 : 0) +
    (filters.yearMax ? 1 : 0) +
    (filters.mileageMin ? 1 : 0) +
    (filters.mileageMax ? 1 : 0)

  const toggleArrayFilter = (key: "brands" | "categories" | "transmissions" | "fuels", value: string) => {
    const current = filters[key]
    const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    onFiltersChange({ ...filters, [key]: updated })
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["brand", "category", "price"]} className="w-full">
        <AccordionItem value="brand">
          <AccordionTrigger className="text-sm font-medium">
            Marca
            {filters.brands.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.brands.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => toggleArrayFilter("brands", brand)}
                  />
                  <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category">
          <AccordionTrigger className="text-sm font-medium">
            Categoría
            {filters.categories.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.categories.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => toggleArrayFilter("categories", category)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">Precio</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <Label htmlFor="priceMin" className="text-xs text-muted-foreground">
                  Desde ($)
                </Label>
                <Input
                  id="priceMin"
                  type="number"
                  placeholder="Min"
                  value={filters.priceMin}
                  onChange={(e) => onFiltersChange({ ...filters, priceMin: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="priceMax" className="text-xs text-muted-foreground">
                  Hasta ($)
                </Label>
                <Input
                  id="priceMax"
                  type="number"
                  placeholder="Max"
                  value={filters.priceMax}
                  onChange={(e) => onFiltersChange({ ...filters, priceMax: e.target.value })}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="year">
          <AccordionTrigger className="text-sm font-medium">Año</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <Label htmlFor="yearMin" className="text-xs text-muted-foreground">
                  Desde
                </Label>
                <Input
                  id="yearMin"
                  type="number"
                  placeholder="Min"
                  value={filters.yearMin}
                  onChange={(e) => onFiltersChange({ ...filters, yearMin: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="yearMax" className="text-xs text-muted-foreground">
                  Hasta
                </Label>
                <Input
                  id="yearMax"
                  type="number"
                  placeholder="Max"
                  value={filters.yearMax}
                  onChange={(e) => onFiltersChange({ ...filters, yearMax: e.target.value })}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mileage">
          <AccordionTrigger className="text-sm font-medium">Kilometraje</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <Label htmlFor="mileageMin" className="text-xs text-muted-foreground">
                  Desde (km)
                </Label>
                <Input
                  id="mileageMin"
                  type="number"
                  placeholder="Min"
                  value={filters.mileageMin}
                  onChange={(e) => onFiltersChange({ ...filters, mileageMin: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="mileageMax" className="text-xs text-muted-foreground">
                  Hasta (km)
                </Label>
                <Input
                  id="mileageMax"
                  type="number"
                  placeholder="Max"
                  value={filters.mileageMax}
                  onChange={(e) => onFiltersChange({ ...filters, mileageMax: e.target.value })}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="transmission">
          <AccordionTrigger className="text-sm font-medium">
            Transmisión
            {filters.transmissions.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.transmissions.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {transmissions.map((transmission) => (
                <div key={transmission} className="flex items-center space-x-2">
                  <Checkbox
                    id={`transmission-${transmission}`}
                    checked={filters.transmissions.includes(transmission)}
                    onCheckedChange={() => toggleArrayFilter("transmissions", transmission)}
                  />
                  <Label htmlFor={`transmission-${transmission}`} className="text-sm font-normal cursor-pointer">
                    {transmission}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fuel">
          <AccordionTrigger className="text-sm font-medium">
            Combustible
            {filters.fuels.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.fuels.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {fuels.map((fuel) => (
                <div key={fuel} className="flex items-center space-x-2">
                  <Checkbox
                    id={`fuel-${fuel}`}
                    checked={filters.fuels.includes(fuel)}
                    onCheckedChange={() => toggleArrayFilter("fuels", fuel)}
                  />
                  <Label htmlFor={`fuel-${fuel}`} className="text-sm font-normal cursor-pointer">
                    {fuel}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {activeFiltersCount > 0 && (
        <Button variant="outline" className="w-full bg-transparent" onClick={onClearFilters}>
          <X className="w-4 h-4 mr-2" />
          Limpiar filtros ({activeFiltersCount})
        </Button>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-foreground">Filtros</h2>
            <span className="text-sm text-muted-foreground">{totalResults} resultados</span>
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-96 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
