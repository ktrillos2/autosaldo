import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { ContactoHero } from "@/components/contacto-hero"
import { ContactoCards } from "@/components/contacto-cards"
import { ContactoFormMap } from "@/components/contacto-form-map"

async function getData() {
  return client.fetch(groq`{
    "hero": *[_type == "contactoHero"][0],
    "content": *[_type == "contactoContent"][0]
  }`)
}

export default async function ContactoPage() {
  const data = await getData()
  const { hero, content } = data || {}

  return (
    <main className="min-h-screen bg-background">
      <ContactoHero heroData={hero} />
      <ContactoCards cards={content?.infoCards} />
      <ContactoFormMap content={content} />
      <WhatsAppButton />
    </main>
  )
}
