"use client"

import { motion } from "framer-motion"

export function ContactoHero({ heroData }: { heroData: any }) {
    return (
        <section className="pt-20 md:pt-24 pb-12 bg-secondary">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
                        {heroData?.subtitle || "Contáctanos"}
                    </span>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                        {heroData?.title || "Estamos aquí para ayudarte"}
                    </h1>
                    <p className="text-muted-foreground">
                        {heroData?.description || "¿Tienes alguna pregunta o necesitas más información? Contáctanos y te responderemos lo antes posible."}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
