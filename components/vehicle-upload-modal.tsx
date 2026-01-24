"use strict";
"use client"

import { useState, useRef, useEffect } from "react"
import { Upload, Car, Image as ImageIcon, X, Users, CheckCircle2, Loader2, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"

export function VehicleUploadModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState<File[]>([])
    const [previews, setPreviews] = useState<string[]>([])
    const modalRef = useRef<HTMLDivElement>(null)

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
        contactEmail: "",
        plate: "",
        district: "",
        fuel: "",
        debt: "",
        message: "",
        cc: "",
        hp: "",
        consumption: "",
        keys: "",
    })

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Prevent body scroll
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const onClose = () => {
        setIsOpen(false)
        if (isSuccess) resetForm()
    }

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
            contactEmail: "",
            plate: "",
            district: "",
            fuel: "",
            debt: "",
            message: "",
            cc: "",
            hp: "",
            consumption: "",
            keys: "",
        })
        setSelectedFiles([])
        setPreviews([])
        setIsSuccess(false)
        setIsOpen(false)
    }

    return (
        <>
            <Button
                className="bg-[#d30826] hover:bg-[#b0061e] text-white gap-2 font-medium"
                onClick={() => setIsOpen(true)}
            >
                <PlusCircle className="w-4 h-4" />
                Vende tu Auto
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />

                        {/* Modal Container */}
                        <motion.div
                            ref={modalRef}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-4xl max-h-[80vh] md:max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                disabled={isSubmitting}
                                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm shrink-0">
                                <h2 className="text-xl md:text-2xl font-bold text-[#002559]">
                                    {isSuccess ? "¡Solicitud Enviada!" : "Sube tu vehículo"}
                                </h2>
                                {!isSuccess && (
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                                        Completa la información para que podamos evaluar y publicar tu auto.
                                    </p>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-4 md:p-6">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                            <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#002559] mb-2 md:mb-3">
                                            ¡Todo listo!
                                        </h3>
                                        <p className="text-gray-600 max-w-md mx-auto mb-6 md:mb-8 text-base md:text-lg">
                                            Hemos recibido la información de tu vehículo correctamente. Nuestro equipo revisará los detalles y te contactaremos a la brevedad.
                                        </p>
                                        <Button
                                            className="bg-[#d30826] hover:bg-[#b0061e] text-white px-8 h-10 md:h-12 text-base md:text-lg"
                                            onClick={() => {
                                                resetForm()
                                                onClose()
                                            }}
                                        >
                                            Entendido
                                        </Button>
                                    </div>
                                ) : (
                                    <form id="vehicle-upload-form" onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                        {/* User Data Section */}
                                        <section className="bg-gray-50/50 p-4 md:p-6 rounded-xl border border-gray-100">
                                            <h3 className="text-base md:text-lg font-bold text-[#002559] mb-3 md:mb-4 flex items-center gap-2">
                                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                    <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#002559]" />
                                                </div>
                                                Tus Datos Personales
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="contactName">Nombre Completo <span className="text-red-500">*</span></Label>
                                                    <Input
                                                        id="contactName"
                                                        placeholder="Nombres y Apellidos"
                                                        className="bg-white"
                                                        value={formData.contactName}
                                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="contactPhone">Celular <span className="text-red-500">*</span></Label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium z-10 text-sm">
                                                            +51
                                                        </span>
                                                        <Input
                                                            id="contactPhone"
                                                            placeholder="999 999 999"
                                                            className="bg-white pl-10"
                                                            value={formData.contactPhone}
                                                            onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="contactEmail">Correo Electrónico <span className="text-red-500">*</span></Label>
                                                    <Input
                                                        id="contactEmail"
                                                        type="email"
                                                        placeholder="correo@ejemplo.com"
                                                        className="bg-white"
                                                        value={formData.contactEmail}
                                                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </section>

                                        {/* Car Data Section */}
                                        <section className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                            <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                                                    <Car className="w-4 h-4 text-[#d30826]" />
                                                </div>
                                                Información del Vehículo
                                            </h3>

                                            {/* Basic Info */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="brand">Marca <span className="text-red-500">*</span></Label>
                                                    <Input
                                                        id="brand"
                                                        placeholder="Ej. Toyota"
                                                        className="bg-white"
                                                        value={formData.brand}
                                                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="model">Modelo <span className="text-red-500">*</span></Label>
                                                    <Input
                                                        id="model"
                                                        placeholder="Ej. Corolla"
                                                        className="bg-white"
                                                        value={formData.model}
                                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="year">Año</Label>
                                                    <Select onValueChange={(val) => setFormData({ ...formData, year: val })}>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Seleccionar" />
                                                        </SelectTrigger>
                                                        <SelectContent className="max-h-[200px]">
                                                            {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                                                <SelectItem key={year} value={year.toString()}>
                                                                    {year}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="plate">Placa</Label>
                                                    <Input
                                                        id="plate"
                                                        placeholder="ABC-123"
                                                        className="bg-white uppercase"
                                                        maxLength={7}
                                                        value={formData.plate}
                                                        onChange={(e) => setFormData({ ...formData, plate: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="district">Distrito</Label>
                                                    <Select onValueChange={(val) => setFormData({ ...formData, district: val })}>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Seleccionar" />
                                                        </SelectTrigger>
                                                        <SelectContent position="item-aligned">
                                                            <SelectItem value="lima">Lima</SelectItem>
                                                            <SelectItem value="miraflores">Miraflores</SelectItem>
                                                            <SelectItem value="san-isidro">San Isidro</SelectItem>
                                                            <SelectItem value="surco">Santiago de Surco</SelectItem>
                                                            <SelectItem value="la-molina">La Molina</SelectItem>
                                                            <SelectItem value="otro">Otro</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="mileage">Kilometraje <span className="text-red-500">*</span></Label>
                                                    <Input
                                                        id="mileage"
                                                        type="number"
                                                        placeholder="Ej. 50000"
                                                        className="bg-white"
                                                        value={formData.mileage}
                                                        onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="fuel">Combustible</Label>
                                                    <Select onValueChange={(val) => setFormData({ ...formData, fuel: val })}>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Seleccionar" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="gasolina">Gasolina</SelectItem>
                                                            <SelectItem value="diesel">Diesel</SelectItem>
                                                            <SelectItem value="gnv">Dual GNV</SelectItem>
                                                            <SelectItem value="glp">Dual GLP</SelectItem>
                                                            <SelectItem value="hibrido">Híbrido</SelectItem>
                                                            <SelectItem value="electrico">Eléctrico</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="debt">¿Tiene Deuda?</Label>
                                                    <Select onValueChange={(val) => setFormData({ ...formData, debt: val })}>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Seleccionar" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="no">No</SelectItem>
                                                            <SelectItem value="si">Sí</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="price">Precio Solicitado (USD) <span className="text-red-500">*</span></Label>
                                                    <Input
                                                        id="price"
                                                        type="number"
                                                        placeholder="0.00"
                                                        className="bg-white font-medium"
                                                        value={formData.price}
                                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Technical details toggle or always visible? Always visible as per request */}
                                            <div className="border-t border-dashed border-gray-200 my-4"></div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Detalles Técnicos (Opcional)</p>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="cc" className="text-xs">Cilindrada (cc)</Label>
                                                    <Input
                                                        id="cc"
                                                        type="number"
                                                        placeholder="2000"
                                                        className="bg-white h-9 text-sm"
                                                        value={formData.cc}
                                                        onChange={(e) => setFormData({ ...formData, cc: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="hp" className="text-xs">Potencia (HP)</Label>
                                                    <Input
                                                        id="hp"
                                                        type="number"
                                                        placeholder="180"
                                                        className="bg-white h-9 text-sm"
                                                        value={formData.hp}
                                                        onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="consumption" className="text-xs">Consumo (km/gl)</Label>
                                                    <Input
                                                        id="consumption"
                                                        type="number"
                                                        placeholder="45"
                                                        className="bg-white h-9 text-sm"
                                                        value={formData.consumption}
                                                        onChange={(e) => setFormData({ ...formData, consumption: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="keys" className="text-xs">Juegos de Llaves</Label>
                                                    <Input
                                                        id="keys"
                                                        type="number"
                                                        placeholder="2"
                                                        className="bg-white h-9 text-sm"
                                                        value={formData.keys}
                                                        onChange={(e) => setFormData({ ...formData, keys: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2 mt-4">
                                                <Label htmlFor="message">Comentarios Adicionales</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Ej. Full Equipado, Sunroof, mantenimientos al día en concesionario..."
                                                    className="bg-white !min-h-[130px]"
                                                    value={formData.message}
                                                    rows={30}
                                                    cols={50}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>
                                        </section>

                                        {/* Photos Section */}
                                        <section className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                            <h3 className="text-lg font-bold text-[#002559] mb-4 flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                                                    <ImageIcon className="w-4 h-4 text-green-600" />
                                                </div>
                                                Fotografías
                                            </h3>

                                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                                                {/* Upload Button */}
                                                <label className="flex flex-col items-center justify-center aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-[#d30826] hover:bg-red-50 cursor-pointer transition-all duration-200 group bg-white">
                                                    <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#d30826] mb-2 transition-colors" />
                                                    <span className="text-xs text-gray-500 font-semibold group-hover:text-[#d30826] transition-colors">Subir Fotos</span>
                                                    <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                                                </label>

                                                {/* Previews */}
                                                {previews.map((src, index) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        key={index}
                                                        className="relative aspect-square rounded-xl overflow-hidden group shadow-sm bg-white"
                                                    >
                                                        <img src={src} alt="Preview" className="w-full h-full object-cover" />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeImage(index)}
                                                                className="bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors transform hover:scale-110"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                                                Sube las mejores fotos de tu auto. Recomendamos vista frontal, trasera, interior y detalles importantes.
                                            </p>
                                        </section>
                                    </form>
                                )}
                            </div>

                            {/* Footer */}
                            {!isSuccess && (
                                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm flex justify-end gap-3 shrink-0">
                                    <Button
                                        variant="outline"
                                        onClick={onClose}
                                        disabled={isSubmitting}
                                        className="border-gray-200 hover:bg-gray-100"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        form="vehicle-upload-form"
                                        className="bg-[#d30826] hover:bg-[#b0061e] text-white px-8 min-w-[140px] disabled:opacity-100 disabled:bg-[#b0061e]"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            "Enviar Vehículo"
                                        )}
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
