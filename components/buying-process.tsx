"use client"

import { motion } from "framer-motion"
import { Phone, ClipboardCheck, Camera, Users, PenTool, LucideIcon } from "lucide-react"

interface Step {
    number: string
    title: string
    description: string
    iconName?: string
}

interface VendeProcessContent {
    overline?: string
    title?: string
    steps?: Step[]
}

const iconsMap: Record<string, LucideIcon> = {
    Phone,
    ClipboardCheck,
    Camera,
    Users,
    PenTool,
}

const defaultSteps = [
    {
        number: "01",
        title: "Contacto inicial",
        description: "Nos escribes y recibimos la información básica de tu vehículo.",
        iconName: "Phone",
    },
    {
        number: "02",
        title: "Tasación e inspección",
        description: "Vamos a tu domicilio para evaluar el auto y definir precio real.",
        iconName: "ClipboardCheck",
    },
    {
        number: "03",
        title: "Producción y publicación",
        description: "Tomamos fotos profesionales y publicamos en nuestros canales.",
        iconName: "Camera",
    },
    {
        number: "04",
        title: "Gestión de interesados",
        description: "Filtramos compradores y negociamos el mejor precio contigo.",
        iconName: "Users",
    },
    {
        number: "05",
        title: "Cierre y firma notarial",
        description: "Coordinamos la firma y cerramos la operación de forma segura.",
        iconName: "PenTool",
    },
]

export function BuyingProcess({ content }: { content?: VendeProcessContent }) {
    const steps = content?.steps || defaultSteps

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#d30826] font-bold tracking-widest uppercase text-sm">{content?.overline || "Nuestro Proceso"}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002559] mt-2">{content?.title || "Así vendemos tu auto"}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.iconName ? iconsMap[step.iconName] : Phone
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <Icon className="w-6 h-6 text-[#d30826]" />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-gray-200 mb-4 absolute top-4 right-4 opacity-50">{step.number}</div>
                                <h3 className="font-bold text-[#002559] mb-3 relative z-10">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
