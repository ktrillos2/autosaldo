"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { urlFor } from "@/sanity/lib/image"

export function NosotrosHero({ heroData }: { heroData: any }) {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden pt-20">
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src={heroData?.backgroundImage ? urlFor(heroData.backgroundImage).url() : "/modern-car-showroom-interior.jpg"}
                    alt={heroData?.title || "Showroom Autosaldo"}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-foreground/60" />
            </motion.div>

            <motion.div style={{ opacity }} className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4"
                    >
                        {heroData?.subtitle || "Nuestra Historia"}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-6xl font-bold text-background mb-6"
                    >
                        {heroData?.title || "Más que autos, experiencias"}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-background/80 max-w-xl mx-auto"
                    >
                        {heroData?.description || "Desde 2019, transformamos la forma de comprar y vender autos en Perú con transparencia, confianza y pasión."}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
