import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
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
              Tu concesionario de confianza. Autos seminuevos certificados con garantía y el mejor servicio.
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
                <span>+51 937 385 398</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@Autosaldo.pe</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Av. Javier Prado Este 4200, Lima, Perú</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Autosaldo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
