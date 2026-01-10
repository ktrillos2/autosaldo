import { defineField, defineType } from 'sanity'

export const cta = defineType({
    name: 'cta',
    title: 'Venta Asistida',
    type: 'document',
    fields: [
        defineField({
            name: 'overline',
            title: 'Texto Superior',
            type: 'string',
            initialValue: 'SERVICIO DE VENTA ASISTIDA',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Tú pones el vehículo.',
        }),
        defineField({
            name: 'highlight',
            title: 'Título Resaltado',
            type: 'string',
            initialValue: 'Nosotros nos encargamos de venderlo.',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            initialValue: 'En Autosaldo te ayudamos a vender tu vehículo de forma segura, ordenada y sin complicaciones...',
        }),
        defineField({
            name: 'benefits',
            title: 'Tarjetas de Beneficios',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'iconName', type: 'string', title: 'Nombre del Icono' },
                        { name: 'title', type: 'string', title: 'Título' },
                        { name: 'desc', type: 'string', title: 'Descripción' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'processSteps',
            title: 'Pasos del Proceso',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'iconName', type: 'string', title: 'Nombre del Icono' },
                        { name: 'step', type: 'string', title: 'Número de Paso (01, 02...)' },
                        { name: 'title', type: 'string', title: 'Título' },
                        { name: 'desc', type: 'string', title: 'Descripción' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'ctaText',
            title: 'Texto del Botón',
            type: 'string',
            initialValue: 'Cotizar mi Auto Ahora',
        }),
        defineField({
            name: 'ctaLink',
            title: 'Enlace del Botón',
            type: 'string',
            initialValue: '/cotizador',
        }),
    ],
})
