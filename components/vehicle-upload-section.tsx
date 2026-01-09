"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Car, Image as ImageIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VehicleUploadSection() {
    const [images, setImages] = useState<string[]>([])

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
            setImages((prev) => [...prev, ...newImages])
        }
    }

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#d30826] font-bold tracking-widest uppercase text-sm">Vende con nosotros</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002559] mt-2 mb-4">Sube tu vehículo</h2>
                        <p className="text-gray-600">
                            Completa la información, sube las fotos y nos pondremos en contacto contigo para validar la publicación.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <form className="space-y-8">
                            {/* Información del Vehículo */}
                            <div>
                                <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-[#d30826]" />
                                    Datos del Vehículo
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="brand">Marca</Label>
                                        <Input id="brand" placeholder="Ej. Toyota" className="bg-gray-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="model">Modelo</Label>
                                        <Input id="model" placeholder="Ej. Corolla" className="bg-gray-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="year">Año</Label>
                                        <Select>
                                            <SelectTrigger className="bg-gray-50">
                                                <SelectValue placeholder="Seleccionar año" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                                    <SelectItem key={year} value={year.toString()}>
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="mileage">Kilometraje</Label>
                                        <Input id="mileage" type="number" placeholder="Ej. 45000" className="bg-gray-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="price">Precio Solicitado (USD)</Label>
                                        <Input id="price" type="number" placeholder="Ej. 15000" className="bg-gray-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="version">Versión / Detalles</Label>
                                        <Input id="version" placeholder="Ej. Full Equipado, Sunroof..." className="bg-gray-50" />
                                    </div>
                                </div>
                            </div>

                            {/* Fotos */}
                            <div>
                                <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5 text-[#d30826]" />
                                    Fotos
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                    {images.map((src, index) => (
                                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                                            <img src={src} alt="Preview" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                    <label className="flex flex-col items-center justify-center aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-[#d30826] hover:bg-red-50 cursor-pointer transition-colors">
                                        <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#d30826] mb-2" />
                                        <span className="text-sm text-gray-500">Subir foto</span>
                                        <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-400">
                                    * Sube al menos 3 fotos (Frontal, Lateral, Interior). Formatos: JPG, PNG.
                                </p>
                            </div>

                            {/* Datos de Contacto */}
                            <div>
                                <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-[#d30826]" />
                                    Tus Datos
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre Completo</Label>
                                        <Input id="name" placeholder="Tu nombre" className="bg-gray-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contact_phone">Celular</Label>
                                        <Input id="contact_phone" placeholder="999 999 999" className="bg-gray-50" />
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-end pt-4">
                                <Button className="bg-[#d30826] hover:bg-[#b0061e] text-white px-8 py-6 text-lg rounded-xl">
                                    Enviar Vehículo
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Users(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
