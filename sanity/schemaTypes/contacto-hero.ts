import { defineField, defineType } from 'sanity'

export const contactoHero = defineType({
    name: 'contactoHero',
    title: 'Banner Principal',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (Overline)',
            type: 'string',
            initialValue: 'Contáctanos',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Estamos aquí para ayudarte',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            initialValue: '¿Tienes alguna pregunta o necesitas más información? Contáctanos y te responderemos lo antes posible.',
        }),
    ],
})
