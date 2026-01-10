import { BuyingProcess } from "@/components/buying-process"
import { QuoteForm } from "@/components/quote-form"
import { CotizadorFAQ } from "@/components/cotizador-faq"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

async function getData() {
  return client.fetch(groq`{
    "hero": *[_type == "vendeHero"][0],
    "process": *[_type == "vendeProcess"][0],
    "form": *[_type == "vendeForm"][0],
    "faq": *[_type == "vendeFaq"][0]
  }`)
}

export default async function CotizadorPage() {
  const data = await getData()
  const { hero, process, form, faq } = data

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Intro */}
      <section className="pt-44 pb-16 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#002559] mb-6">
            {hero?.title || "Vende tu auto"}{" "}
            <span className="text-[#d30826]">{hero?.highlight || "al mejor precio"}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            {hero?.description || "Descubre el valor de tu vehículo en menos de 60 segundos. Sin compromiso, sin costos ocultos."}
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm content={form} />

      <BuyingProcess content={process} />

      <CotizadorFAQ content={faq} />
      <WhatsAppButton />
    </main>
  )
}
