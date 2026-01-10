import { defineField, defineType } from 'sanity'

export const header = defineType({
    name: 'header',
    title: 'Encabezado / Navegación',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'navLinks',
            title: 'Enlaces de Navegación',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Etiqueta' },
                        { name: 'href', type: 'string', title: 'URL del Enlace' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Número de Teléfono',
            type: 'string',
            initialValue: '937 385 398',
        }),
        defineField({
            name: 'ctaText',
            title: 'Texto del Botón (CTA)',
            type: 'string',
            initialValue: 'Ver Autos',
        }),
        defineField({
            name: 'ctaLink',
            title: 'Enlace del Botón (CTA)',
            type: 'string',
            initialValue: '/showroom',
        }),
    ],
})
