"use client"

import { motion } from "framer-motion"
import { PortableText } from "@portabletext/react"

export function NosotrosInfo({ info }: { info: any }) {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Mission */}
                    <AnimatedBlock delay={0} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                        <span className="text-brand-red font-medium text-sm tracking-wider uppercase">{info?.missionOverline || "Nuestra Misión"}</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
                            {info?.missionTitle || "Soluciones rápidas"}
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                            {info?.missionDescription ? <PortableText value={info.missionDescription} /> : <p>Descripción no disponible.</p>}
                        </div>
                    </AnimatedBlock>

                    {/* Vision */}
                    <AnimatedBlock delay={0.1} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                        <span className="text-brand-red font-medium text-sm tracking-wider uppercase">{info?.visionOverline || "Nuestra Visión"}</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
                            {info?.visionTitle || "Referentes nacionales"}
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                            {info?.visionDescription ? <PortableText value={info.visionDescription} /> : <p>Descripción no disponible.</p>}
                        </div>
                    </AnimatedBlock>

                    {/* Expertise */}
                    <AnimatedBlock delay={0.2} className="bg-secondary/30 p-8 rounded-3xl border border-transparent h-full">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{info?.expertiseTitle || "Nuestro Expertise"}</h2>
                        <div className="space-y-6 text-muted-foreground text-sm md:text-base">
                            <p>
                                {info?.expertiseDescription || "Descripción no disponible."}
                            </p>
                            <ul className="space-y-3">
                                {info?.expertiseList?.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedBlock>
                </div>
            </div>
        </section>
    )
}

function AnimatedBlock({ children, className, delay }: { children: React.ReactNode, className: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
