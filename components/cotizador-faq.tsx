"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Question {
  question: string
  answer: string
}

interface VendeFaqContent {
  title?: string
  faqs?: Question[]
}

const defaultFaqs = [
  {
    question: "¿Hay algún tipo de restricciones para vender mi vehículo?",
    answer: "Aceptamos vehículos con menos de 10 años de antigüedad y menos de 100,000 kilómetros de recorrido.",
  },
  {
    question: "¿Por qué vender en Autosaldo?",
    answer:
      "Buscamos que vender tu auto sea una experiencia transparente, única y rápida. Queremos eliminarte el riesgo de estafas, valorizaciones por debajo del mercado y el estrés que implica negociar con múltiples personas.",
  },
  {
    question: "¿Cómo funciona la venta con Autosaldo?",
    answer:
      "¡Es rápido y sencillo! Solo tienes que cotizar tu auto en esta sección y vas a recibir una cotización instantánea. Si estás de acuerdo con la oferta, agendamos una inspección y si todo está ok te damos 3 propuestas por tu auto: Venta inmediata, Consignación y Subasta. Tú eliges la oferta que más te guste.",
  },
  {
    question: "¿Cómo funciona la Venta Inmediata?",
    answer: "Hacemos la inspección de tu auto y si todo está ok, gestionamos el abono en ese instante.",
  },
  {
    question: "¿Cómo funciona la Consignación?",
    answer:
      "Si buscas mayor rentabilidad por tu auto, esta es la mejor alternativa. ¡Nosotros nos encargamos de todo! Gestionamos para que tu auto se quede en nuestras instalaciones y firmamos un documento de consignación. A penas el auto es vendido (30-45 días) te hacemos el depósito por el valor acordado.",
  },
  {
    question: "¿Si aún sigo pagando al banco, aún lo puedo vender?",
    answer:
      "¡Claro que sí! Revisamos la deuda actual de tu auto y descontamos el monto a la propuesta que te brindaremos.",
  },
  {
    question: "¿La inspección tiene algún costo?",
    answer:
      "¡No tienes que pagar nada con nosotros! La inspección es 100% gratuita y recuerda que puedes solicitar que la inspección sea en tu domicilio o si prefieres puedes acercarte a nuestras instalaciones previa cita coordinada.",
  },
  {
    question: "¿En cuánto tiempo recibo el dinero de mi carro?",
    answer:
      "El tiempo de pago va a depender de la propuesta que elijas. Por ejemplo, para la oferta Venta Inmediata gestionamos para que el pago sea el mismo día. Para la oferta de Consignación el pago se realiza entre 30-45 días.",
  },
]

export function CotizadorFAQ({ content }: { content?: VendeFaqContent }) {
  const faqs = content?.faqs || defaultFaqs

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {content?.title || "Preguntas Frecuentes"}
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
