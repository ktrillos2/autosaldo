export interface Car {
  _id?: string
  id: string
  sku: string
  brand: string
  model: string
  version: string
  year: number
  price: number
  mileage: number
  transmission: "AT" | "MT" | "CVT"
  fuel: "Gasolina" | "Diesel" | "Híbrido" | "Eléctrico" | "GLP"
  category: string
  cc: number
  hp: number
  consumption: number
  keys: number
  images: string[]
  featured?: boolean
  owner?: string
  sold?: boolean
}

export const cars: Car[] = [
  {
    id: "1",
    sku: "BMW-520I-2018",
    brand: "BMW",
    model: "Serie 5",
    version: "520i Berlina",
    year: 2018,
    price: 20790,
    mileage: 89000,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SEDAN",
    cc: 1998,
    hp: 184,
    consumption: 14,
    keys: 2,
    images: [
      "/bmw-serie-5-520i-sedan-azul-2018-vista-frontal.jpg",
      "/bmw-serie-5-520i-sedan-azul-2018-vista-lateral.jpg",
      "/bmw-serie-5-520i-sedan-azul-interior-cuero.jpg",
      "/bmw-serie-5-520i-sedan-azul-tablero.jpg",
    ],
    featured: true,
    owner: "Manuel Vilela",
  },
  {
    id: "2",
    sku: "AUDI-Q7-2023",
    brand: "Audi",
    model: "Q7",
    version: "45 TFSI Attraction Plus Tiptronic Quattro",
    year: 2023,
    price: 65490,
    mileage: 14000,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 2995,
    hp: 340,
    consumption: 10,
    keys: 2,
    images: [
      "/audi-q7-suv-blanco-2023-vista-frontal-premium.jpg",
      "/audi-q7-suv-blanco-2023-vista-lateral.jpg",
      "/audi-q7-suv-blanco-interior-lujo.jpg",
      "/audi-q7-suv-blanco-tablero-digital.jpg",
    ],
    featured: true,
  },
  {
    id: "3",
    sku: "LEXUS-UX-2020",
    brand: "Lexus",
    model: "UX",
    version: "250H Luxury",
    year: 2020,
    price: 22490,
    mileage: 87000,
    transmission: "AT",
    fuel: "Híbrido",
    category: "SUV",
    cc: 1987,
    hp: 184,
    consumption: 22,
    keys: 2,
    images: [
      "/lexus-ux-hibrido-gris-2020-vista-frontal.jpg",
      "/lexus-ux-hibrido-gris-2020-vista-lateral.jpg",
      "/lexus-ux-hibrido-interior-premium.jpg",
      "/lexus-ux-hibrido-tablero-digital.jpg",
    ],
    featured: true,
  },
  {
    id: "4",
    sku: "FORD-ECOSPORT-2020",
    brand: "Ford",
    model: "EcoSport",
    version: "SE 4X2 AT",
    year: 2020,
    price: 13990,
    mileage: 64000,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 1498,
    hp: 123,
    consumption: 12,
    keys: 1,
    images: [
      "/ford-ecosport-suv-rojo-2020-vista-frontal.jpg",
      "/ford-ecosport-suv-rojo-2020-vista-lateral.jpg",
      "/ford-ecosport-suv-rojo-interior.jpg",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "5",
    sku: "NISSAN-SENTRA-2016",
    brand: "Nissan",
    model: "Sentra",
    version: "Full Exclusive",
    year: 2016,
    price: 11990,
    mileage: 46800,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SEDAN",
    cc: 1798,
    hp: 130,
    consumption: 15,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "6",
    sku: "JEEP-CHEROKEE-2011",
    brand: "Jeep",
    model: "Grand Cherokee Laredo",
    version: "3.6 4X2",
    year: 2011,
    price: 12490,
    mileage: 128900,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 3604,
    hp: 290,
    consumption: 8,
    keys: 1,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "7",
    sku: "AUDI-Q3-2023",
    brand: "Audi",
    model: "Q3",
    version: "Attraction 35 TFSI S Tronic",
    year: 2023,
    price: 31990,
    mileage: 14500,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 1395,
    hp: 150,
    consumption: 13,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: true,
  },
  {
    id: "8",
    sku: "MAZDA-CX5-2014",
    brand: "Mazda",
    model: "CX-5",
    version: "AT 2.0 2WD GS Core IPM PE",
    year: 2014,
    price: 12890,
    mileage: 97400,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 1998,
    hp: 155,
    consumption: 13,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "9",
    sku: "TOYOTA-COROLLA-2022",
    brand: "Toyota",
    model: "Corolla",
    version: "SE 2.0 CVT",
    year: 2022,
    price: 19500,
    mileage: 25000,
    transmission: "CVT",
    fuel: "Gasolina",
    category: "SEDAN",
    cc: 1987,
    hp: 169,
    consumption: 15,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: true,
  },
  {
    id: "10",
    sku: "HYUNDAI-TUCSON-2021",
    brand: "Hyundai",
    model: "Tucson",
    version: "Limited 2.0 AT",
    year: 2021,
    price: 24990,
    mileage: 35000,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 1999,
    hp: 155,
    consumption: 12,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "11",
    sku: "KIA-SPORTAGE-2020",
    brand: "Kia",
    model: "Sportage",
    version: "EX 2.0 AT",
    year: 2020,
    price: 21500,
    mileage: 42000,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SUV",
    cc: 1999,
    hp: 155,
    consumption: 12,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "12",
    sku: "MERCEDES-C200-2019",
    brand: "Mercedes-Benz",
    model: "Clase C",
    version: "C200 Avantgarde",
    year: 2019,
    price: 35990,
    mileage: 55000,
    transmission: "AT",
    fuel: "Gasolina",
    category: "SEDAN",
    cc: 1991,
    hp: 184,
    consumption: 14,
    keys: 2,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: true,
  },
]

export const brands = [...new Set(cars.map((car) => car.brand))].sort()
export const categories = [...new Set(cars.map((car) => car.category))].sort()
export const transmissions = [...new Set(cars.map((car) => car.transmission))].sort()
export const fuels = [...new Set(cars.map((car) => car.fuel))].sort()

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id)
}

export function getFeaturedCars(): Car[] {
  return cars.filter((car) => car.featured)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatMileage(mileage: number): string {
  return new Intl.NumberFormat("es-PE").format(mileage)
}
