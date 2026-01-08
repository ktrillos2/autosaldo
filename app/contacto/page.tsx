"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+51 937 385 398",
    href: "tel:+51937385398",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@autopremium.pe",
    href: "mailto:info@autopremium.pe",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Av. Javier Prado Este 4200, La Molina, Lima",
    href: "https://maps.google.com/?q=Av.+Javier+Prado+Este+4200,+La+Molina,+Lima",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Sáb: 9:00 AM - 7:00 PM",
    href: null,
  },
]

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 bg-secondary">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Contáctanos
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Estamos aquí para ayudarte
            </h1>
            <p className="text-muted-foreground">
              ¿Tienes alguna pregunta o necesitas más información? Contáctanos y te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">Encuéntranos</h2>
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3772277677037!2d-76.94744592396477!3d-12.07626694209897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7c5a7df9b75%3A0x8e6e6f3c7b0f5a5a!2sAv.%20Javier%20Prado%20Este%204200%2C%20La%20Molina%2015024!5e0!3m2!1ses!2spe!4v1704672000000!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de AutoPremium"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
