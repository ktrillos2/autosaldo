import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { NosotrosHero } from "@/components/nosotros-hero"
import { NosotrosStats } from "@/components/nosotros-stats"
import { NosotrosInfo } from "@/components/nosotros-info"

async function getData() {
  return client.fetch(groq`{
    "hero": *[_type == "nosotrosHero"][0],
    "stats": *[_type == "nosotrosStats"][0],
    "info": *[_type == "nosotrosInfo"][0]
  }`)
}

export default async function NosotrosPage() {
  const data = await getData()
  const { hero, stats, info } = data || {}

  return (
    <main className="min-h-screen bg-background">
      <NosotrosHero heroData={hero} />
      <NosotrosStats stats={stats} />
      <NosotrosInfo info={info} />
      <WhatsAppButton />
    </main>
  )
}
