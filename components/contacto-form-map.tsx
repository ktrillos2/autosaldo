"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"

export function ContactoFormMap({ content }: { content: any }) {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                            {content?.formTitle || "Envíanos un mensaje"}
                        </h2>
                        <ContactForm />
                    </motion.div>

                    {/* Map */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                            {content?.mapTitle || "Encuéntranos"}
                        </h2>
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
                            <iframe
                                src={content?.mapSrc || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3772277677037!2d-76.94744592396477!3d-12.07626694209897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7c5a7df9b75%3A0x8e6e6f3c7b0f5a5a!2sAv.%20Javier%20Prado%20Este%204200%2C%20La%20Molina%2015024!5e0!3m2!1ses!2spe!4v1704672000000!5m2!1ses!2spe"}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
