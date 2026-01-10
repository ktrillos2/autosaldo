import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { ShowroomClient } from "@/components/showroom-client"

async function getData() {
  return client.fetch(groq`*[_type == "auto" || (_type == "autoUsuario" && status == "aprobado")] {
    ...,
    "id": _id 
  }`, {}, { next: { revalidate: 0 } })
}

export default async function ShowroomPage() {
  const cars = await getData()

  return <ShowroomClient cars={cars} />
}

