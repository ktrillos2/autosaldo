import { defineField, defineType } from 'sanity'

export const hero = defineType({
    name: 'hero',
    title: 'Sección Principal',
    type: 'document',
    fields: [
        defineField({
            name: 'overline',
            title: 'Texto Superior',
            type: 'string',
            description: 'Texto pequeño encima del título principal (ej. SERVICIO DE VENTA ASISTIDA)',
            initialValue: 'SERVICIO DE VENTA ASISTIDA',
        }),
        defineField({
            name: 'headline',
            title: 'Título Principal',
            type: 'string',
            description: 'La parte blanca del título',
            initialValue: '¡Compramos tu auto con deuda',
        }),
        defineField({
            name: 'headlineHighlight',
            title: 'Resaltado del Título',
            type: 'string',
            description: 'La parte coloreada (roja) del título',
            initialValue: 'al instante y sin riesgos!',
        }),
        defineField({
            name: 'subheadline',
            title: 'Subtítulo',
            type: 'text',
            description: 'Texto descriptivo debajo del título',
            initialValue: 'Olvídate de las demoras y los trámites engorrosos. Recibe una oferta justa en minutos y el dinero en tu cuenta hoy mismo.',
        }),
        defineField({
            name: 'primaryButtonText',
            title: 'Texto Botón Primario',
            type: 'string',
            initialValue: 'Cotizar mi Auto Ahora',
        }),
        defineField({
            name: 'primaryButtonLink',
            title: 'Enlace Botón Primario',
            type: 'string',
            initialValue: '/cotizador',
        }),
        defineField({
            name: 'secondaryButtonText',
            title: 'Texto Botón Secundario',
            type: 'string',
            initialValue: 'Contactar Asesor',
        }),
        defineField({
            name: 'secondaryButtonLink',
            title: 'Enlace Botón Secundario',
            type: 'string',
            initialValue: '/contacto',
        }),
    ],
})
