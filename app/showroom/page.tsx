import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { ShowroomClient } from "@/components/showroom-client"

async function getData() {
  console.log("Fetching cars...")
  // Projection to normalize data between 'auto' and 'autoUsuario'
  return client.fetch(groq`*[_type == "auto" || (_type == "autoUsuario" && status == "aprobado")] | order(_createdAt desc) {
    ...,
    "id": _id,
    "owner": contactName,
    "category": coalesce(category, "Usuario")
  }`, {}, { next: { revalidate: 0 } })
}

export default async function ShowroomPage() {
  const cars = await getData()

  return <ShowroomClient cars={cars} />
}

