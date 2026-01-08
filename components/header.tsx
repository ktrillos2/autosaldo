"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/showroom", label: "Autos" },
  { href: "/cotizador", label: "Vende tu Auto" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-accent shadow-lg shadow-black/5 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative flex items-center">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    scrolled ? "bg-white" : "bg-white"
                  }`}
                >
                  <span className={`text-xl font-black ${scrolled ? "text-accent" : "text-accent"}`}>A</span>
                </div>
                <span
                  className={`ml-3 text-xl font-bold tracking-tight transition-colors duration-300 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  Autosaldo
                </span>
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center">
              <div
                className={`flex items-center rounded-full px-2 py-2 transition-all duration-300 ${
                  scrolled ? "bg-white/10 backdrop-blur-md" : "bg-white/10 backdrop-blur-md"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive
                          ? scrolled
                            ? "bg-white text-accent"
                            : "bg-white text-accent"
                          : scrolled
                            ? "text-white/70 hover:text-white hover:bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+51937385398"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-white/70 hover:text-white" : "text-white/70 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                937 385 398
              </Link>
              <Button
                asChild
                className={`group rounded-full px-6 h-11 font-medium transition-all duration-300 ${
                  scrolled
                    ? "bg-white text-accent hover:bg-white/90"
                    : "bg-white text-accent hover:bg-white/90"
                }`}
              >
                <Link href="/showroom">
                  Ver Autos
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                scrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-accent"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="h-full flex flex-col justify-center px-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-4xl md:text-5xl font-semibold py-4 transition-colors ${
                      pathname === link.href ? "text-primary" : "text-white hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <p className="text-white/50 text-sm mb-3">Contáctanos</p>
                <Link href="tel:+51937385398" className="text-2xl font-semibold text-white">
                  +51 937 385 398
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
