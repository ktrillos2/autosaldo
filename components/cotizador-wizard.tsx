"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Car, CheckCircle2, Loader2 } from "lucide-react"
import {
  cotizadorBrands,
  getModelsByBrand,
  getVersionsByModel,
  transmissionOptions,
  calculateQuote,
} from "@/lib/cotizador-data"
import { formatPrice } from "@/lib/data"

interface FormData {
  brand: string
  model: string
  version: string
  year: string
  transmission: string
  mileage: string
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 15 }, (_, i) => currentYear - i)

export function CotizadorWizard() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState<{ min: number; max: number } | null>(null)
  const [formData, setFormData] = useState<FormData>({
    brand: "",
    model: "",
    version: "",
    year: "",
    transmission: "",
    mileage: "",
  })

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const models = formData.brand ? getModelsByBrand(formData.brand) : []
  const versions = formData.model ? getVersionsByModel(formData.model) : []

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!formData.brand
      case 2:
        return !!formData.model
      case 3:
        return !!formData.year && !!formData.transmission
      case 4:
        return !!formData.mileage && Number(formData.mileage) > 0
      default:
        return true
    }
  }

  const handleNext = () => {
    if (step < totalSteps && canProceed()) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      setQuote(null)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const result = calculateQuote(
      formData.brand,
      formData.model,
      Number(formData.year),
      Number(formData.mileage),
      formData.transmission,
    )

    setQuote(result)
    setIsLoading(false)
    setStep(5)
  }

  const selectedBrand = cotizadorBrands.find((b) => b.id === formData.brand)
  const selectedModel = models.find((m) => m.id === formData.model)

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-0 shadow-xl">
        <CardContent className="p-6 md:p-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Paso {step} de {totalSteps}
              </span>
              <span className="font-medium text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Select Brand */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">¿Cuál es la marca de tu auto?</h2>
                <p className="text-muted-foreground mb-6">Selecciona la marca de tu vehículo</p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {cotizadorBrands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => {
                        setFormData({ ...formData, brand: brand.id, model: "", version: "" })
                      }}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        formData.brand === brand.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <span className="text-xs font-medium text-foreground">{brand.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Model */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">¿Cuál es el modelo?</h2>
                <p className="text-muted-foreground mb-6">
                  Modelos disponibles para <span className="font-medium text-foreground">{selectedBrand?.name}</span>
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {models.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => {
                        setFormData({ ...formData, model: model.id, version: "" })
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.model === model.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-medium text-foreground">{model.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Year and Transmission */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Año y transmisión</h2>
                <p className="text-muted-foreground mb-6">
                  Ingresa el año y tipo de transmisión de tu{" "}
                  <span className="font-medium text-foreground">
                    {selectedBrand?.name} {selectedModel?.name}
                  </span>
                </p>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="year" className="text-foreground mb-2 block">
                      Año del vehículo
                    </Label>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-48 overflow-y-auto">
                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => setFormData({ ...formData, year: year.toString() })}
                          className={`p-2 rounded-lg border transition-all text-sm ${
                            formData.year === year.toString()
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground mb-2 block">Tipo de transmisión</Label>
                    <RadioGroup
                      value={formData.transmission}
                      onValueChange={(value) => setFormData({ ...formData, transmission: value })}
                      className="flex gap-4"
                    >
                      {transmissionOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="cursor-pointer">
                            {option.name}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Mileage */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">¿Cuántos kilómetros tiene?</h2>
                <p className="text-muted-foreground mb-6">Ingresa el kilometraje actual de tu vehículo</p>

                <div>
                  <Label htmlFor="mileage" className="text-foreground mb-2 block">
                    Kilometraje
                  </Label>
                  <div className="relative">
                    <Input
                      id="mileage"
                      type="number"
                      placeholder="Ej: 50000"
                      value={formData.mileage}
                      onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                      className="text-lg pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">km</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-secondary rounded-xl">
                  <h3 className="font-medium text-foreground mb-2">Resumen de tu vehículo</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      Marca: <span className="text-foreground">{selectedBrand?.name}</span>
                    </li>
                    <li>
                      Modelo: <span className="text-foreground">{selectedModel?.name}</span>
                    </li>
                    <li>
                      Año: <span className="text-foreground">{formData.year}</span>
                    </li>
                    <li>
                      Transmisión:{" "}
                      <span className="text-foreground">
                        {transmissionOptions.find((t) => t.id === formData.transmission)?.name}
                      </span>
                    </li>
                    {formData.mileage && (
                      <li>
                        Kilometraje:{" "}
                        <span className="text-foreground">{Number(formData.mileage).toLocaleString()} km</span>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Step 5: Result */}
            {step === 5 && quote && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>

                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">¡Cotización lista!</h2>
                <p className="text-muted-foreground mb-8">
                  El valor estimado de tu{" "}
                  <span className="font-medium text-foreground">
                    {selectedBrand?.name} {selectedModel?.name} {formData.year}
                  </span>{" "}
                  es:
                </p>

                <div className="bg-primary/5 border-2 border-primary rounded-2xl p-6 mb-8">
                  <p className="text-sm text-muted-foreground mb-2">Rango de precio estimado</p>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    {formatPrice(quote.min)} - {formatPrice(quote.max)}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Este es un valor referencial. Para una cotización exacta, agenda una inspección gratuita.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="group">
                    <a
                      href={`https://wa.me/+51937385398?text=${encodeURIComponent(`Hola, acabo de cotizar mi ${selectedBrand?.name} ${selectedModel?.name} ${formData.year} con ${formData.mileage} km. Me gustaría agendar una inspección.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar Inspección
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent"
                    onClick={() => {
                      setStep(1)
                      setQuote(null)
                      setFormData({
                        brand: "",
                        model: "",
                        version: "",
                        year: "",
                        transmission: "",
                        mileage: "",
                      })
                    }}
                  >
                    Nueva cotización
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button variant="ghost" onClick={handleBack} disabled={step === 1}>
                <ChevronLeft className="w-4 h-4 mr-1" />
                Atrás
              </Button>

              {step < 4 ? (
                <Button onClick={handleNext} disabled={!canProceed()}>
                  Siguiente
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!canProceed() || isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Car className="w-4 h-4 mr-2" />
                      Cotizar ahora
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
