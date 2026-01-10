import { client } from "@/sanity/lib/client"

import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { CTASection } from "@/components/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustSection } from "@/components/trust-section"

export default async function HomePage() {
  const data = await client.fetch(`{
    "hero": *[_type == "hero"][0],
    "trust": *[_type == "trust"][0],
    "featured": *[_type == "featured"][0],
    "cta": *[_type == "cta"][0],
    "featuredList": *[_type == "auto" && featured == true][0..3] {
      ...,
      "id": _id
    },
    "fallbackList": *[_type == "auto"] | order(price desc)[0..3] {
      ...,
      "id": _id
    }
  }`, {}, { next: { revalidate: 0 } })

  const carsToShow = data.featuredList.length > 0 ? data.featuredList : data.fallbackList

  return (
    <main className="min-h-screen">
      <HeroSection content={data.hero} cars={carsToShow} />
      <TrustSection content={data.trust} />
      <FeaturedCars content={data.featured} cars={carsToShow} />
      <CTASection content={data.cta} />
      <WhatsAppButton />
    </main>
  )
}
