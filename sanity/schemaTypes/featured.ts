import { defineField, defineType } from 'sanity'

export const featured = defineType({
    name: 'featured',
    title: 'Autos Destacados',
    type: 'document',
    fields: [
        defineField({
            name: 'overline',
            title: 'Texto Superior',
            type: 'string',
            initialValue: 'Nuestro Catálogo',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            description: 'Texto principal del título (ej. Autos)',
            initialValue: 'Autos',
        }),
        defineField({
            name: 'highlight',
            title: 'Texto Resaltado',
            type: 'string',
            description: 'Texto coloreado al final del título (ej. destacados)',
            initialValue: 'destacados',
        }),
        defineField({
            name: 'buttonText',
            title: 'Texto del Botón',
            type: 'string',
            initialValue: 'Ver todos los autos',
        }),
        defineField({
            name: 'buttonLink',
            title: 'Enlace del Botón',
            type: 'string',
            initialValue: '/showroom',
        }),
    ],
})
