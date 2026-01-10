import { defineField, defineType } from 'sanity'

export const nosotrosStats = defineType({
    name: 'nosotrosStats',
    title: 'Estadísticas',
    type: 'document',
    fields: [
        defineField({
            name: 'stats',
            title: 'Lista de Estadísticas',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Valor' },
                        { name: 'label', type: 'string', title: 'Etiqueta' },
                    ],
                },
            ],
        }),
    ],
})
