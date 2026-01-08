export interface Brand {
  id: string
  name: string
  logo: string
}

export interface Model {
  id: string
  brandId: string
  name: string
}

export interface Version {
  id: string
  modelId: string
  name: string
}

export const cotizadorBrands: Brand[] = [
  { id: "toyota", name: "Toyota", logo: "/toyota-logo.png" },
  { id: "honda", name: "Honda", logo: "/honda-logo.png" },
  { id: "nissan", name: "Nissan", logo: "/nissan-logo.png" },
  { id: "hyundai", name: "Hyundai", logo: "/hyundai-logo.jpg" },
  { id: "kia", name: "Kia", logo: "/kia-logo.png" },
  { id: "mazda", name: "Mazda", logo: "/mazda-logo.png" },
  { id: "chevrolet", name: "Chevrolet", logo: "/chevrolet-logo.png" },
  { id: "ford", name: "Ford", logo: "/ford-oval-logo.png" },
  { id: "volkswagen", name: "Volkswagen", logo: "/volkswagen-logo.jpg" },
  { id: "bmw", name: "BMW", logo: "/bmw-logo.png" },
  { id: "mercedes", name: "Mercedes-Benz", logo: "/mercedes-logo.png" },
  { id: "audi", name: "Audi", logo: "/audi-logo.png" },
]

export const cotizadorModels: Model[] = [
  // Toyota
  { id: "corolla", brandId: "toyota", name: "Corolla" },
  { id: "camry", brandId: "toyota", name: "Camry" },
  { id: "rav4", brandId: "toyota", name: "RAV4" },
  { id: "hilux", brandId: "toyota", name: "Hilux" },
  { id: "yaris", brandId: "toyota", name: "Yaris" },
  // Honda
  { id: "civic", brandId: "honda", name: "Civic" },
  { id: "accord", brandId: "honda", name: "Accord" },
  { id: "crv", brandId: "honda", name: "CR-V" },
  { id: "hrv", brandId: "honda", name: "HR-V" },
  // Nissan
  { id: "sentra", brandId: "nissan", name: "Sentra" },
  { id: "versa", brandId: "nissan", name: "Versa" },
  { id: "xtrail", brandId: "nissan", name: "X-Trail" },
  { id: "kicks", brandId: "nissan", name: "Kicks" },
  // Hyundai
  { id: "tucson", brandId: "hyundai", name: "Tucson" },
  { id: "santafe", brandId: "hyundai", name: "Santa Fe" },
  { id: "accent", brandId: "hyundai", name: "Accent" },
  { id: "elantra", brandId: "hyundai", name: "Elantra" },
  // Kia
  { id: "sportage", brandId: "kia", name: "Sportage" },
  { id: "seltos", brandId: "kia", name: "Seltos" },
  { id: "rio", brandId: "kia", name: "Rio" },
  // Mazda
  { id: "cx5", brandId: "mazda", name: "CX-5" },
  { id: "cx30", brandId: "mazda", name: "CX-30" },
  { id: "mazda3", brandId: "mazda", name: "Mazda 3" },
  // Chevrolet
  { id: "tracker", brandId: "chevrolet", name: "Tracker" },
  { id: "onix", brandId: "chevrolet", name: "Onix" },
  { id: "sail", brandId: "chevrolet", name: "Sail" },
  // Ford
  { id: "ecosport", brandId: "ford", name: "EcoSport" },
  { id: "escape", brandId: "ford", name: "Escape" },
  { id: "ranger", brandId: "ford", name: "Ranger" },
  // Volkswagen
  { id: "gol", brandId: "volkswagen", name: "Gol" },
  { id: "tcross", brandId: "volkswagen", name: "T-Cross" },
  { id: "tiguan", brandId: "volkswagen", name: "Tiguan" },
  // BMW
  { id: "serie3", brandId: "bmw", name: "Serie 3" },
  { id: "serie5", brandId: "bmw", name: "Serie 5" },
  { id: "x1", brandId: "bmw", name: "X1" },
  { id: "x3", brandId: "bmw", name: "X3" },
  // Mercedes
  { id: "claseA", brandId: "mercedes", name: "Clase A" },
  { id: "claseC", brandId: "mercedes", name: "Clase C" },
  { id: "gla", brandId: "mercedes", name: "GLA" },
  { id: "glc", brandId: "mercedes", name: "GLC" },
  // Audi
  { id: "a3", brandId: "audi", name: "A3" },
  { id: "a4", brandId: "audi", name: "A4" },
  { id: "q3", brandId: "audi", name: "Q3" },
  { id: "q5", brandId: "audi", name: "Q5" },
]

export const cotizadorVersions: Version[] = [
  // Corolla
  { id: "corolla-xli", modelId: "corolla", name: "XLI 1.8 MT" },
  { id: "corolla-gli", modelId: "corolla", name: "GLI 1.8 AT" },
  { id: "corolla-seg", modelId: "corolla", name: "SEG 2.0 AT" },
  // Camry
  { id: "camry-le", modelId: "camry", name: "LE 2.5 AT" },
  { id: "camry-se", modelId: "camry", name: "SE 3.5 AT" },
  // RAV4
  { id: "rav4-le", modelId: "rav4", name: "LE 2.0 4x2" },
  { id: "rav4-xle", modelId: "rav4", name: "XLE 2.5 4x4" },
  // Civic
  { id: "civic-lx", modelId: "civic", name: "LX 1.5T MT" },
  { id: "civic-ex", modelId: "civic", name: "EX 1.5T AT" },
  { id: "civic-touring", modelId: "civic", name: "Touring 1.5T AT" },
  // CR-V
  { id: "crv-lx", modelId: "crv", name: "LX 1.5T 4x2" },
  { id: "crv-ex", modelId: "crv", name: "EX 1.5T 4x4" },
  // Sentra
  { id: "sentra-sense", modelId: "sentra", name: "Sense 1.8 MT" },
  { id: "sentra-advance", modelId: "sentra", name: "Advance 1.8 AT" },
  { id: "sentra-exclusive", modelId: "sentra", name: "Exclusive 2.0 AT" },
  // Tucson
  { id: "tucson-gl", modelId: "tucson", name: "GL 2.0 4x2" },
  { id: "tucson-gls", modelId: "tucson", name: "GLS 2.0 4x4" },
  { id: "tucson-limited", modelId: "tucson", name: "Limited 2.0 4x4" },
  // Generic versions for other models
  { id: "generic-base", modelId: "generic", name: "Base" },
  { id: "generic-mid", modelId: "generic", name: "Intermedio" },
  { id: "generic-full", modelId: "generic", name: "Full Equipo" },
]

export const transmissionOptions = [
  { id: "AT", name: "Automático" },
  { id: "MT", name: "Manual" },
  { id: "CVT", name: "CVT" },
]

export function getModelsByBrand(brandId: string): Model[] {
  return cotizadorModels.filter((model) => model.brandId === brandId)
}

export function getVersionsByModel(modelId: string): Version[] {
  const versions = cotizadorVersions.filter((version) => version.modelId === modelId)
  if (versions.length === 0) {
    // Return generic versions if no specific ones exist
    return [
      { id: `${modelId}-base`, modelId, name: "Base" },
      { id: `${modelId}-mid`, modelId, name: "Intermedio" },
      { id: `${modelId}-full`, modelId, name: "Full Equipo" },
    ]
  }
  return versions
}

export function calculateQuote(
  brandId: string,
  modelId: string,
  year: number,
  mileage: number,
  transmission: string,
): { min: number; max: number } {
  // Base prices by brand tier
  const brandTiers: Record<string, number> = {
    toyota: 15000,
    honda: 14000,
    nissan: 12000,
    hyundai: 11000,
    kia: 11000,
    mazda: 13000,
    chevrolet: 10000,
    ford: 12000,
    volkswagen: 13000,
    bmw: 25000,
    mercedes: 28000,
    audi: 26000,
  }

  const basePrice = brandTiers[brandId] || 12000

  // Year depreciation (5% per year from current year)
  const currentYear = new Date().getFullYear()
  const age = currentYear - year
  const yearFactor = Math.max(0.4, 1 - age * 0.05)

  // Mileage depreciation
  const mileageFactor = Math.max(0.5, 1 - mileage / 200000)

  // Transmission factor
  const transmissionFactor = transmission === "AT" || transmission === "CVT" ? 1.1 : 1

  const estimatedPrice = basePrice * yearFactor * mileageFactor * transmissionFactor

  return {
    min: Math.round(estimatedPrice * 0.9),
    max: Math.round(estimatedPrice * 1.1),
  }
}
