import { defineField, defineType } from 'sanity'

export const nosotrosInfo = defineType({
    name: 'nosotrosInfo',
    title: 'Misión y Visión',
    type: 'document',
    fields: [
        // Mission
        defineField({
            name: 'missionOverline',
            title: 'Misión - Subtítulo',
            type: 'string',
            initialValue: 'NUESTRA MISIÓN',
        }),
        defineField({
            name: 'missionTitle',
            title: 'Misión - Título',
            type: 'string',
            initialValue: 'Soluciones rápidas',
        }),
        defineField({
            name: 'missionDescription',
            title: 'Misión - Descripción',
            type: 'array',
            of: [{ type: 'block' }],
        }),

        // Vision
        defineField({
            name: 'visionOverline',
            title: 'Visión - Subtítulo',
            type: 'string',
            initialValue: 'NUESTRA VISIÓN',
        }),
        defineField({
            name: 'visionTitle',
            title: 'Visión - Título',
            type: 'string',
            initialValue: 'Referentes nacionales',
        }),
        defineField({
            name: 'visionDescription',
            title: 'Visión - Descripción',
            type: 'array',
            of: [{ type: 'block' }],
        }),

        // Expertise
        defineField({
            name: 'expertiseTitle',
            title: 'Expertise - Título',
            type: 'string',
            initialValue: 'Nuestro Expertise',
        }),
        defineField({
            name: 'expertiseDescription',
            title: 'Expertise - Descripción',
            type: 'text',
            initialValue: 'Más de 8 años de experiencia en el mercado automotriz...',
        }),
        defineField({
            name: 'expertiseList',
            title: 'Expertise - Lista',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
