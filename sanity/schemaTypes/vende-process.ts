import { defineField, defineType } from 'sanity'

export const vendeProcess = defineType({
    name: 'vendeProcess',
    title: 'Proceso',
    type: 'document',
    fields: [
        defineField({
            name: 'overline',
            title: 'Texto Superior',
            type: 'string',
            initialValue: 'Nuestro Proceso',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Así vendemos tu auto',
        }),
        defineField({
            name: 'steps',
            title: 'Pasos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', type: 'string', title: 'Número' },
                        { name: 'title', type: 'string', title: 'Título' },
                        { name: 'description', type: 'text', title: 'Descripción' },
                        { name: 'iconName', type: 'string', title: 'Nombre del Icono (Lucide)' },
                    ],
                },
            ],
        }),
    ],
})
