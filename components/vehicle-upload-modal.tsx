"use client"

import { useState, useRef } from "react"
import { Upload, Car, Image as ImageIcon, X, Users, PlusCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function VehicleUploadModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState<File[]>([])
    const [previews, setPreviews] = useState<string[]>([])

    // Form State
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: "",
        mileage: "",
        price: "",
        version: "",
        contactName: "",
        contactPhone: "",
    })

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const newFiles = Array.from(files)
            setSelectedFiles((prev) => [...prev, ...newFiles])

            const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
            setPreviews((prev) => [...prev, ...newPreviews])
        }
    }

    const removeImage = (index: number) => {
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
        setPreviews((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value)
            })
            selectedFiles.forEach((file) => {
                data.append("images", file)
            })

            const res = await fetch("/api/upload-car", {
                method: "POST",
                body: data,
            })

            if (res.ok) {
                setIsSuccess(true)
            } else {
                alert("Error al subir el vehículo. Por favor intenta de nuevo.")
            }
        } catch (error) {
            console.error(error)
            alert("Error de conexión.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setFormData({
            brand: "",
            model: "",
            year: "",
            mileage: "",
            price: "",
            version: "",
            contactName: "",
            contactPhone: "",
        })
        setSelectedFiles([])
        setPreviews([])
        setIsSuccess(false)
        setIsOpen(false)
    }

    if (isSuccess) {
        return (
            <Dialog open={isOpen} onOpenChange={resetForm}>
                <DialogTrigger asChild><div /></DialogTrigger> {/* Hidden trigger kept for structure */}
                <DialogContent className="max-w-md text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#002559] mb-2">¡Solicitud Enviada!</h2>
                    <p className="text-gray-600 mb-6">
                        Hemos recibido la información de tu vehículo. Nuestro equipo la revisará y te contactaremos pronto.
                    </p>
                    <Button onClick={resetForm} className="bg-[#d30826] text-white">
                        Entendido
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#d30826] hover:bg-[#b0061e] text-white gap-2">
                    <PlusCircle className="w-4 h-4" />
                    Vende tu Auto
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-[95vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#002559]">Sube tu vehículo</DialogTitle>
                    <DialogDescription>
                        Completa la información, sube las fotos y nos pondremos en contacto contigo para validar la publicación.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    {/* Información del Vehículo */}
                    <div>
                        <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                            <Car className="w-5 h-5 text-[#d30826]" />
                            Datos del Vehículo
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="brand">Marca</Label>
                                <Input
                                    id="brand"
                                    placeholder="Ej. Toyota"
                                    className="bg-gray-50"
                                    value={formData.brand}
                                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="model">Modelo</Label>
                                <Input
                                    id="model"
                                    placeholder="Ej. Corolla"
                                    className="bg-gray-50"
                                    value={formData.model}
                                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="year">Año</Label>
                                <Select onValueChange={(val) => setFormData({ ...formData, year: val })}>
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
                                <Input
                                    id="mileage"
                                    type="number"
                                    placeholder="Ej. 45000"
                                    className="bg-gray-50"
                                    value={formData.mileage}
                                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="price">Precio Solicitado (USD)</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    placeholder="Ej. 15000"
                                    className="bg-gray-50"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-3">
                                <Label htmlFor="version">Versión / Detalles</Label>
                                <Textarea
                                    id="version"
                                    placeholder="Ej. Full Equipado, Sunroof, Mantenimientos en concesionario..."
                                    className="bg-gray-50 min-h-[100px]"
                                    value={formData.version}
                                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                                />
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
                            {previews.map((src, index) => (
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
                            * Los formatos permitidos son JPG y PNG.
                        </p>
                    </div>

                    {/* Datos de Contacto */}
                    <div>
                        <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#d30826]" />
                            Tus Datos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="contactName">Nombre Completo</Label>
                                <Input
                                    id="contactName"
                                    placeholder="Tu nombre"
                                    className="bg-gray-50"
                                    value={formData.contactName}
                                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contactPhone">Celular</Label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium z-10">
                                        +51
                                    </span>
                                    <Input
                                        id="contactPhone"
                                        placeholder="999 999 999"
                                        className="bg-gray-50 pl-14"
                                        value={formData.contactPhone}
                                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <Button
                            type="submit"
                            className="bg-[#d30826] hover:bg-[#b0061e] text-white px-8 py-6 text-lg rounded-xl"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar Vehículo"}
                        </Button>
                    </div>
                </form>
            </DialogContent >
        </Dialog >
    )
}
