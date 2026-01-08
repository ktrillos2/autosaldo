"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type SortOption = "relevance" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc"

interface ShowroomSortProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function ShowroomSort({ value, onChange }: ShowroomSortProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Relevancia</SelectItem>
        <SelectItem value="price-asc">Menor precio</SelectItem>
        <SelectItem value="price-desc">Mayor precio</SelectItem>
        <SelectItem value="year-desc">Más reciente</SelectItem>
        <SelectItem value="mileage-asc">Menor kilometraje</SelectItem>
      </SelectContent>
    </Select>
  )
}
