"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const iconMap: any = { Phone, Mail, MapPin, Clock }

export function ContactoCards({ cards }: { cards: any[] }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards?.map((info: any, index: number) => {
                        const Icon = iconMap[info.iconName] || Phone
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-border">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-primary" />
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
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
