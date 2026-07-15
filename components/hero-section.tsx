"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Car, Shield, FileText, Headphones, MapPin, Check } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"

interface HeroProps {
  content?: {
    overline?: string;
    titlePart1?: string;
    titlePart2?: string;
    subtitlePart1?: string;
    subtitlePart2?: string;
    backgroundImage?: any;
    features?: { _key: string; title: string; subtitle: string }[];
    highlightBoxTitlePart1?: string;
    highlightBoxTitlePart2?: string;
    highlightBoxText?: string;
    bottomBarBrand?: string;
    bottomBarSlogan?: string;
    bottomBarLocation?: string;
    bottomBarWebsite?: string;
  };
  cars?: any[];
}

const defaultFeatures = [
  { _key: '1', title: "Autos\nSeleccionados", subtitle: "Calidad verificada" },
  { _key: '2', title: "Respaldo y\nConfianza", subtitle: "Compra segura" },
  { _key: '3', title: "Papeles en\nRegla", subtitle: "Trámites sin complicaciones" },
  { _key: '4', title: "Asesoría\nPersonalizada", subtitle: "Te acompañamos siempre" }
];

const featureIcons = [Car, Shield, FileText, Headphones];

export function HeroSection({ content }: HeroProps) {
  const bgImage = content?.backgroundImage ? urlFor(content.backgroundImage).url() : "/hero-bg.png";
  const features = content?.features?.length ? content.features : defaultFeatures;

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col pt-32 pb-6">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Autosaldo Background"
          fill
          className="object-cover object-right opacity-40"
          priority
        />
        {/* Dark gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-1/2 bottom-0" />
        
        {/* Red Glow Effects (simulating the red swooshes/lights in the background) */}
        <div className="absolute top-1/4 right-0 w-2/3 h-1/2 bg-[#d30826]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-[#d30826]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex flex-col justify-end lg:justify-center">
        {/* Main Content */}
        <div className="max-w-4xl mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#d30826]" />
            <span className="text-[#d30826] font-extrabold text-sm tracking-wider uppercase">
              {content?.overline || "Compra y venta de autos usados"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line"
          >
            {content?.titlePart1 || "Tu próximo\nauto te espera,\n"}
            <span className="text-[#d30826]">{content?.titlePart2 || "con respaldo\nen cada paso."}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light whitespace-pre-line"
          >
            {content?.subtitlePart1 || "Autos usados seleccionados,\n"}
            <span className="font-semibold text-white">{content?.subtitlePart2 || "confianza garantizada."}</span>
          </motion.p>
        </div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col xl:flex-row gap-6 items-stretch justify-between mb-10"
        >
          {/* Left Features - unified bar */}
          <div className="flex-1 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
            
            {features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              const isLast = index === features.length - 1;
              const hasCheck = index !== 3; // Original design had checks on first 3, not on 4th (Headphones)
              
              return (
                <React.Fragment key={feature._key}>
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative flex items-center justify-center shrink-0 w-10 h-10">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      {hasCheck && (
                        <div className="absolute -bottom-1 -right-1 bg-[#d30826] rounded-full w-4 h-4 flex items-center justify-center border-2 border-[#111111]">
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[13px] md:text-sm leading-tight uppercase whitespace-pre-line">{feature.title}</h3>
                      <p className="text-gray-400 text-[11px] md:text-xs mt-1">{feature.subtitle}</p>
                    </div>
                  </div>
                  {!isLast && <div className="hidden md:block w-px h-10 bg-white/10" />}
                </React.Fragment>
              );
            })}

          </div>

          {/* Right Highlight Box */}
          <div className="w-full xl:w-[380px] shrink-0 bg-transparent border border-white/20 rounded-2xl p-6 flex items-center gap-5">
            <div className="relative flex items-center justify-center shrink-0 w-12 h-12">
              <Shield className="w-10 h-10 text-white" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#d30826]" strokeWidth={3} />
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-[13px] md:text-sm leading-tight uppercase mb-1.5 whitespace-pre-line">
                {content?.highlightBoxTitlePart1 || "Tu compra segura,\n"}
                <span className="text-[#d30826]">{content?.highlightBoxTitlePart2 || "nuestra promesa."}</span>
              </h3>
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed whitespace-pre-line">
                {content?.highlightBoxText || "Transparencia, confianza y respaldo\nen cada auto."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer-like thin bar at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between text-[10px] md:text-xs text-gray-500 uppercase tracking-widest pt-5 border-t border-white/10 mt-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0 text-center md:text-left">
            <span className="font-black text-white italic">{content?.bottomBarBrand || "AUTOSALDO"}</span>
            <span className="hidden md:block w-px h-3 bg-gray-600 mx-1" />
            <span>{content?.bottomBarSlogan || "Más que autos, confianza que te lleva lejos."}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span>{content?.bottomBarLocation || "Lima, Perú"}</span>
            </div>
            <span className="w-px h-3 bg-gray-600" />
            <span className="lowercase">{content?.bottomBarWebsite || "www.autosaldo.com"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
