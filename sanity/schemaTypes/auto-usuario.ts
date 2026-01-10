import { defineField, defineType } from 'sanity'

export const autoUsuario = defineType({
    name: 'autoUsuario',
    title: 'Autos de Usuarios (Revisiones)',
    type: 'document',
    fields: [
        // Status Field
        defineField({
            name: 'status',
            title: 'Estado de Revisión',
            type: 'string',
            initialValue: 'pendiente',
            options: {
                list: [
                    { title: 'Pendiente', value: 'pendiente' },
                    { title: 'Aprobado (Visible)', value: 'aprobado' },
                    { title: 'Rechazado', value: 'rechazado' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        // User Contact Info
        defineField({
            name: 'contactName',
            title: 'Nombre del Contacto',
            type: 'string',
        }),
        defineField({
            name: 'contactPhone',
            title: 'Teléfono',
            type: 'string',
        }),
        defineField({ name: 'contactEmail', title: 'Email', type: 'string' }),
        defineField({ name: 'district', title: 'Distrito', type: 'string' }),
        defineField({ name: 'message', title: 'Mensaje del Usuario', type: 'text' }),

        // Car Fields (Simplified copy of main schema)
        defineField({ name: 'plate', title: 'Placa', type: 'string' }),
        defineField({ name: 'debt', title: '¿Tiene Deuda?', type: 'string' }),
        defineField({ name: 'brand', title: 'Marca', type: 'string' }),
        defineField({ name: 'model', title: 'Modelo', type: 'string' }),
        defineField({ name: 'version', title: 'Versión', type: 'string' }),
        defineField({ name: 'year', title: 'Año', type: 'number' }),
        defineField({ name: 'price', title: 'Precio Esperado (USD)', type: 'number' }),
        defineField({ name: 'mileage', title: 'Kilometraje', type: 'number' }),
        defineField({
            name: 'transmission',
            title: 'Transmisión',
            type: 'string',
            options: {
                list: [
                    { title: 'Automática', value: 'AT' },
                    { title: 'Mecánica', value: 'MT' },
                    { title: 'CVT', value: 'CVT' },
                ],
            },
        }),
        defineField({
            name: 'fuel',
            title: 'Combustible',
            type: 'string',
            options: {
                list: [
                    { title: 'Gasolina', value: 'Gasolina' },
                    { title: 'Diesel', value: 'Diesel' },
                    { title: 'Híbrido', value: 'Híbrido' },
                    { title: 'Eléctrico', value: 'Eléctrico' },
                    { title: 'GLP', value: 'GLP' },
                    { title: 'GNV', value: 'GNV' },
                ],
            },
        }),

        // Images
        defineField({
            name: 'images',
            title: 'Imágenes',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),

        defineField({
            name: 'adminNotes',
            title: 'Notas del Admin',
            type: 'text',
            description: 'Observaciones internas sobre esta solicitud.',
        }),
    ],
    preview: {
        select: {
            brand: 'brand',
            model: 'model',
            status: 'status',
            media: 'images.0',
        },
        prepare(selection) {
            const { brand, model, status, media } = selection
            const emoji = status === 'aprobado' ? '✅' : status === 'rechazado' ? '❌' : '⏳'
            return {
                title: `${emoji} ${brand} ${model}`,
                subtitle: `Estado: ${status}`,
                media,
            }
        },
    },
})
