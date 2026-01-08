import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { CTASection } from "@/components/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrustSection } from "@/components/trust-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <FeaturedCars />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
