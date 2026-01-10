import { defineField, defineType } from 'sanity'

export const trust = defineType({
    name: 'trust',
    title: 'Confianza',
    type: 'document',
    fields: [
        defineField({
            name: 'overline',
            title: 'Texto Superior',
            type: 'string',
            initialValue: 'Proceso transparente',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Así trabajamos en Autosaldo',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            initialValue: 'Descubre nuestro proceso claro y seguro para vender tu vehículo.',
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
                        { name: 'title', type: 'string', title: 'Título del Paso' },
                        { name: 'description', type: 'text', title: 'Descripción del Paso' },
                        {
                            name: 'iconName',
                            type: 'string',
                            title: 'Nombre del Icono (Lucide React)',
                            description: 'ej. Phone, ClipboardCheck, Car, Banknote, PenTool'
                        },
                    ],
                },
            ],
        }),
    ],
})
