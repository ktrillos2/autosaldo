import { defineField, defineType } from 'sanity'

export const vendeForm = defineType({
    name: 'vendeForm',
    title: 'Formulario',
    type: 'document',
    fields: [
        defineField({
            name: 'bannerTitle',
            title: 'Título del Banner',
            type: 'string',
            initialValue: 'COMPRAMOS TU AUTO',
        }),
        defineField({
            name: 'bannerSubtitle',
            title: 'Subtítulo del Banner',
            type: 'string',
            initialValue: '30 MINUTOS',
        }),
        defineField({
            name: 'bannerDescription',
            title: 'Descripción del Banner',
            type: 'text',
            initialValue: 'Evaluación rápida, justa y segura. Olvídate de los trámites.',
        }),
        defineField({
            name: 'formTitle',
            title: 'Título del Formulario',
            type: 'string',
            initialValue: 'Déjanos tus datos',
        }),
        defineField({
            name: 'formDescription',
            title: 'Descripción del Formulario',
            type: 'text',
            initialValue: 'Llena tus datos y los de tu vehículo.',
        }),
        defineField({
            name: 'buttonText',
            title: 'Texto del Botón',
            type: 'string',
            initialValue: 'Siguiente',
        }),
    ],
})
