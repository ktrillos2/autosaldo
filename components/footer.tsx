import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

const iconMap: Record<string, any> = {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
}

interface FooterContent {
  companyDescription?: string
  address?: string
  email?: string
  phoneNumber?: string
  socialLinks?: { platform: string; url: string }[]
  copyrightText?: string
}

export function Footer({ content }: { content?: FooterContent }) {
  const companyDescription = content?.companyDescription || "Tu concesionario de confianza. Autos seminuevos certificados con garantía y el mejor servicio."
  const address = content?.address || "Av. Javier Prado Este 4200, Lima, Perú"
  const email = content?.email || "info@Autosaldo.pe"
  const phoneNumber = content?.phoneNumber || "+51 937 385 398"
  const copyrightText = content?.copyrightText || "Autosaldo. Todos los derechos reservados."
  const socialLinks = content?.socialLinks || [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Facebook", url: "https://facebook.com" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Autosaldo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              {companyDescription}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/showroom" className="text-sm text-background/70 hover:text-background transition-colors">
                  Showroom
                </Link>
              </li>
              <li>
                <Link href="/cotizador" className="text-sm text-background/70 hover:text-background transition-colors">
                  Vende tu Auto
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-background/70 hover:text-background transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{phoneNumber}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{email}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = iconMap[link.platform] || Facebook // Default fallback
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} {copyrightText}</span>
            <span className="hidden md:inline">|</span>
            <a
              href="https://www.kytcode.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer font-medium"
            >
              Desarrollado por K&T 🖤
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
