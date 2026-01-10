"use client"

import { motion } from "framer-motion"

export function NosotrosStats({ stats }: { stats: any }) {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats?.stats?.map((stat: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <p className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                            <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
