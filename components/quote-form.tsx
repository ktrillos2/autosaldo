"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Phone, Mail, Car, MapPin, Calendar, Gauge, CreditCard, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export function QuoteForm() {
    const [formStep, setFormStep] = useState(1)

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                    {/* Left Column: Image/Banner */}
                    <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full bg-gray-900">
                        <Image
                            src="/placeholder.svg?height=800&width=600&query=luxury car mechanic shop"
                            alt="Compramos tu auto"
                            fill
                            className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002559] taking-50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 text-white">
                            <h3 className="text-4xl font-bold leading-tight mb-2">
                                COMPRAMOS TU AUTO
                                <span className="block text-[#d30826] text-5xl">30 MINUTOS</span>
                            </h3>
                            <p className="text-white/80 mt-4">
                                Evaluación rápida, justa y segura. Olvídate de los trámites.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-3/5 p-8 md:p-12">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#002559] mb-2 uppercase">Déjanos tus datos</h2>
                            <p className="text-gray-500">Llena tus datos y los de tu vehículo.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <Input placeholder="Nombres y Apellidos" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-5 w-5 text-[#d30826]" />
                                        <Input placeholder="Celular de contacto" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-[#d30826]" />
                                    <Input placeholder="Correo Electrónico" type="email" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Brand */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Car className="absolute left-3 top-3 h-5 w-5 text-[#d30826]" />
                                        <Input placeholder="Marca" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                    </div>
                                </div>

                                {/* Model */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <span className="absolute left-3 top-3 h-5 w-5 text-[#d30826] font-bold flex items-center justify-center text-xs">M</span>
                                        <Input placeholder="Modelo" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Plate */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Car className="absolute left-3 top-3 h-5 w-5 text-[#d30826]" />
                                        <Input placeholder="Placa" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                    </div>
                                </div>

                                {/* District */}
                                <div className="space-y-2">
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                                            <SelectValue placeholder="Selecciona tu distrito" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="lima">Lima</SelectItem>
                                            <SelectItem value="miraflores">Miraflores</SelectItem>
                                            <SelectItem value="san-isidro">San Isidro</SelectItem>
                                            <SelectItem value="surco">Santiago de Surco</SelectItem>
                                            <SelectItem value="la-molina">La Molina</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Year */}
                                <div className="space-y-2">
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                                            <SelectValue placeholder="Año" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Mileage */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Gauge className="absolute left-3 top-3 h-5 w-5 text-[#d30826]" />
                                        <Input placeholder="Kilometraje" className="pl-10 h-12 bg-gray-50 border-gray-200 focus:ring-[#002559]" />
                                    </div>
                                </div>

                                {/* Fuel Type */}
                                <div className="space-y-2">
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                                            <SelectValue placeholder="Combustible" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="gasolina">Gasolina</SelectItem>
                                            <SelectItem value="diesel">Diesel</SelectItem>
                                            <SelectItem value="gnv">Dual GNV</SelectItem>
                                            <SelectItem value="glp">Dual GLP</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Debt */}
                                <div className="space-y-2">
                                    <Select>
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                                            <SelectValue placeholder="¿Tiene Deuda?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="no">No</SelectItem>
                                            <SelectItem value="si">Sí</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <Textarea placeholder="Mensaje" className="min-h-[100px] bg-gray-50 border-gray-200 focus:ring-[#002559] resize-none" />
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button className="bg-[#5e6d8a] hover:bg-[#002559] text-white px-8 py-6 text-lg rounded-xl transition-colors">
                                    Siguiente
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
