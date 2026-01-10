"use client"

import { useState } from "react"
import { Upload, Car, Image as ImageIcon, X, Users, PlusCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// HeroUI Modal Imports
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/modal"

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
        contactEmail: "",
        plate: "",
        district: "",
        fuel: "",
        debt: "",
        message: "",
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
            contactEmail: "",
            plate: "",
            district: "",
            fuel: "",
            debt: "",
            message: "",
        })
        setSelectedFiles([])
        setPreviews([])
        setIsSuccess(false)
        setIsOpen(false)
    }

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open)
        if (!open && isSuccess) {
            resetForm()
        }
    }

    // Success View
    if (isSuccess) {
        return (
            <>
                <Button className="bg-[#d30826] hover:bg-[#b0061e] text-white gap-2" onClick={() => setIsOpen(true)}>
                    <PlusCircle className="w-4 h-4" />
                    Vende tu Auto
                </Button>

                <Modal
                    isOpen={isOpen}
                    onOpenChange={handleOpenChange}
                    placement="center"
                    backdrop="blur"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">¡Solicitud Enviada!</ModalHeader>
                                <ModalBody>
                                    <div className="text-center py-6">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#002559] mb-2">¡Solicitud Enviada!</h2>
                                        <p className="text-gray-600 mb-6">
                                            Hemos recibido la información de tu vehículo. Nuestro equipo la revisará y te contactaremos pronto.
                                        </p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        className="bg-[#d30826] text-white w-full"
                                        onClick={() => {
                                            resetForm()
                                            onClose()
                                        }}
                                    >
                                        Entendido
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        )
    }

    // Form View
    return (
        <>
            <Button
                className="bg-[#d30826] hover:bg-[#b0061e] text-white gap-2"
                onClick={() => setIsOpen(true)}
            >
                <PlusCircle className="w-4 h-4" />
                Vende tu Auto
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={handleOpenChange}
                size="2xl"
                scrollBehavior="inside"
                placement="center"
                backdrop="blur"
                classNames={{
                    base: "bg-white backdrop-blur-md !max-h-[85vh] rounded-lg",
                    body: "p-6",
                    header: "border-b px-6 py-4 border-gray-200/50",
                    footer: "border-t px-6 py-4 border-gray-200/50",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <span className="text-2xl font-bold text-[#002559]">Sube tu vehículo</span>
                                <span className="text-sm font-normal text-muted-foreground">Completa la información para que podamos evaluar y publicar tu auto.</span>
                            </ModalHeader>
                            <ModalBody>
                                <form id="vehicle-upload-form" onSubmit={handleSubmit} className="space-y-6">
                                    {/* User Data Section */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002559] mb-3 flex items-center gap-2 border-b pb-2">
                                            <Users className="w-5 h-5 text-[#d30826]" />
                                            Tus Datos
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="contactName">Nombre Completo</Label>
                                                <Input
                                                    id="contactName"
                                                    placeholder="Nombres y Apellidos"
                                                    className="bg-gray-50"
                                                    value={formData.contactName}
                                                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="contactPhone">Celular</Label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium z-10 text-sm">
                                                        +51
                                                    </span>
                                                    <Input
                                                        id="contactPhone"
                                                        placeholder="999 999 999"
                                                        className="bg-gray-50 pl-10"
                                                        value={formData.contactPhone}
                                                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="contactEmail">Correo Electrónico</Label>
                                                <Input
                                                    id="contactEmail"
                                                    type="email"
                                                    placeholder="correo@ejemplo.com"
                                                    className="bg-gray-50"
                                                    value={formData.contactEmail}
                                                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Car Data Section */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002559] mb-3 flex items-center gap-2 border-b pb-2">
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
                                                <Label htmlFor="plate">Placa</Label>
                                                <Input
                                                    id="plate"
                                                    placeholder="ABC-123"
                                                    className="bg-gray-50"
                                                    value={formData.plate}
                                                    onChange={(e) => setFormData({ ...formData, plate: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="district">Distrito</Label>
                                                <Select onValueChange={(val) => setFormData({ ...formData, district: val })}>
                                                    <SelectTrigger className="bg-gray-50">
                                                        <SelectValue placeholder="Distrito" />
                                                    </SelectTrigger>
                                                    <SelectContent>
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
                                                <Label htmlFor="year">Año</Label>
                                                <Select onValueChange={(val) => setFormData({ ...formData, year: val })}>
                                                    <SelectTrigger className="bg-gray-50">
                                                        <SelectValue placeholder="Año" />
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
                                                    placeholder="Km"
                                                    className="bg-gray-50"
                                                    value={formData.mileage}
                                                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="fuel">Combustible</Label>
                                                <Select onValueChange={(val) => setFormData({ ...formData, fuel: val })}>
                                                    <SelectTrigger className="bg-gray-50">
                                                        <SelectValue placeholder="Tipo" />
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
                                                    <SelectTrigger className="bg-gray-50">
                                                        <SelectValue placeholder="Seleccionar" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="no">No</SelectItem>
                                                        <SelectItem value="si">Sí</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="price">Precio (USD)</Label>
                                                <Input
                                                    id="price"
                                                    type="number"
                                                    placeholder="$"
                                                    className="bg-gray-50"
                                                    value={formData.price}
                                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2 md:col-span-3">
                                                <Label htmlFor="message">Mensaje / Detalles Adicionales</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Ej. Full Equipado, Sunroof, mantenimientos al día..."
                                                    className="bg-gray-50 min-h-[60px]"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Photos */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002559] mb-3 flex items-center gap-2 border-b pb-2">
                                            <ImageIcon className="w-5 h-5 text-[#d30826]" />
                                            Fotos
                                        </h3>
                                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-2">
                                            {previews.map((src, index) => (
                                                <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                                                    <img src={src} alt="Preview" className="w-full h-full object-cover" />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            ))}
                                            <label className="flex flex-col items-center justify-center aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-[#d30826] hover:bg-red-50 cursor-pointer transition-colors bg-gray-50">
                                                <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#d30826] mb-1" />
                                                <span className="text-[10px] text-gray-500 font-medium">Subir</span>
                                                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="outline" onClick={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    type="submit"
                                    form="vehicle-upload-form"
                                    className="bg-[#d30826] hover:bg-[#b0061e] text-white px-8"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar Vehículo"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
