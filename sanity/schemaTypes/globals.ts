import { defineField, defineType } from 'sanity'

export const globals = defineType({
    name: 'globals',
    title: 'Configuración Global',
    type: 'document',
    fields: [
        defineField({
            name: 'whatsappNumber',
            title: 'Número de WhatsApp',
            description: 'Número para el botón flotante (Ej: 51999999999). Sin espacios ni símbolos.',
            type: 'string',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Configuración Global',
            }
        },
    },
})
