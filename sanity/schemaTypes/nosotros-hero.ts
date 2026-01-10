import { defineField, defineType } from 'sanity'

export const nosotrosHero = defineType({
    name: 'nosotrosHero',
    title: 'Banner Principal',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtítulo (Overline)',
            type: 'string',
            initialValue: 'Nuestra Historia',
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Más que autos, experiencias',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            initialValue: 'Desde 2019, transformamos la forma de comprar y vender autos en Perú con transparencia, confianza y pasión.',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Imagen de Fondo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
