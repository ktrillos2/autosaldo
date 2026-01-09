import { BuyingProcess } from "@/components/buying-process"
import { QuoteForm } from "@/components/quote-form"
import { CotizadorFAQ } from "@/components/cotizador-faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function CotizadorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Intro */}
      <section className="pt-44 pb-16 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#002559] mb-6">
            Vende tu auto <span className="text-[#d30826]">al mejor precio</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Descubre el valor de tu vehículo en menos de 60 segundos. Sin compromiso, sin costos ocultos.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm />

      <BuyingProcess />

      <CotizadorFAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
