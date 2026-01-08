import { Calendar, Gauge, Settings, Fuel, Hash, Zap, Droplets, Key } from "lucide-react"
import type { Car } from "@/lib/data"
import { formatMileage } from "@/lib/data"

interface VehicleSpecsProps {
  car: Car
}

export function VehicleSpecs({ car }: VehicleSpecsProps) {
  const specs = [
    { icon: Calendar, label: "Año", value: car.year.toString() },
    { icon: Gauge, label: "Kilometraje", value: `${formatMileage(car.mileage)} km` },
    {
      icon: Settings,
      label: "Transmisión",
      value: car.transmission === "AT" ? "Automática" : car.transmission === "MT" ? "Manual" : "CVT",
    },
    { icon: Fuel, label: "Combustible", value: car.fuel },
    { icon: Hash, label: "SKU", value: car.sku },
    { icon: Zap, label: "Cilindrada", value: `${car.cc} cc` },
    { icon: Zap, label: "Potencia", value: `${car.hp} HP` },
    { icon: Droplets, label: "Consumo aprox.", value: `${car.consumption} km/gl` },
    { icon: Key, label: "Número de llaves", value: car.keys.toString() },
  ]

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2 className="font-semibold text-lg text-foreground mb-6">Especificaciones</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <spec.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{spec.label}</p>
              <p className="font-medium text-foreground">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
