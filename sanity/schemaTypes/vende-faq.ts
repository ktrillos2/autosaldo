import { defineField, defineType } from 'sanity'

export const vendeFaq = defineType({
    name: 'vendeFaq',
    title: 'Preguntas Frecuentes',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Preguntas Frecuentes',
        }),
        defineField({
            name: 'faqs',
            title: 'Preguntas',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Pregunta' },
                        { name: 'answer', type: 'text', title: 'Respuesta' },
                    ],
                },
            ],
        }),
    ],
})
