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
            initialValue: 'Compra y venta de autos usados',
        }),
        defineField({
            name: 'titlePart1',
            title: 'Título (Parte 1 Blanca)',
            type: 'text',
            initialValue: 'Tu próximo \nauto te espera, \n',
        }),
        defineField({
            name: 'titlePart2',
            title: 'Título (Parte 2 Roja)',
            type: 'text',
            initialValue: 'con respaldo \nen cada paso.',
        }),
        defineField({
            name: 'subtitlePart1',
            title: 'Subtítulo (Parte 1 Gris)',
            type: 'string',
            initialValue: 'Autos usados seleccionados,',
        }),
        defineField({
            name: 'subtitlePart2',
            title: 'Subtítulo (Parte 2 Blanca)',
            type: 'string',
            initialValue: 'confianza garantizada.',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Imagen de Fondo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'features',
            title: 'Características (4 items)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Título', type: 'string' },
                        { name: 'subtitle', title: 'Subtítulo', type: 'string' },
                    ],
                }
            ]
        }),
        defineField({
            name: 'highlightBoxTitlePart1',
            title: 'Caja Destacada - Título (Parte 1 Blanca)',
            type: 'string',
            initialValue: 'Tu compra segura,',
        }),
        defineField({
            name: 'highlightBoxTitlePart2',
            title: 'Caja Destacada - Título (Parte 2 Roja)',
            type: 'string',
            initialValue: 'nuestra promesa.',
        }),
        defineField({
            name: 'highlightBoxText',
            title: 'Caja Destacada - Texto',
            type: 'text',
            initialValue: 'Transparencia, confianza y respaldo \nen cada auto.',
        }),
        defineField({
            name: 'bottomBarBrand',
            title: 'Barra Inferior - Marca',
            type: 'string',
            initialValue: 'AUTOSALDO',
        }),
        defineField({
            name: 'bottomBarSlogan',
            title: 'Barra Inferior - Eslogan',
            type: 'string',
            initialValue: 'Más que autos, confianza que te lleva lejos.',
        }),
        defineField({
            name: 'bottomBarLocation',
            title: 'Barra Inferior - Ubicación',
            type: 'string',
            initialValue: 'Lima, Perú',
        }),
        defineField({
            name: 'bottomBarWebsite',
            title: 'Barra Inferior - Sitio Web',
            type: 'string',
            initialValue: 'www.autosaldo.com',
        }),
    ],
})
