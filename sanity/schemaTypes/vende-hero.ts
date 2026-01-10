import { defineField, defineType } from 'sanity'

export const vendeHero = defineType({
    name: 'vendeHero',
    title: 'Inicio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            initialValue: 'Vende tu auto',
        }),
        defineField({
            name: 'highlight',
            title: 'Texto Resaltado',
            type: 'string',
            initialValue: 'al mejor precio',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            initialValue: 'Descubre el valor de tu vehículo en menos de 60 segundos. Sin compromiso, sin costos ocultos.',
        }),
    ],
})
