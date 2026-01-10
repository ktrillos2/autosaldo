import { defineField, defineType } from 'sanity'

export const auto = defineType({
    name: 'auto',
    title: 'Autos (Inventario)',
    type: 'document',
    fields: [
        defineField({
            name: 'brand',
            title: 'Marca',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'model',
            title: 'Modelo',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'version',
            title: 'Versión',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Año',
            type: 'number',
            validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear() + 1),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: (doc) => `${doc.brand}-${doc.model}-${doc.year}`,
                maxLength: 96,
            },
        }),
        defineField({
            name: 'price',
            title: 'Precio (USD)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'mileage',
            title: 'Kilometraje',
            type: 'number',
        }),
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
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            options: {
                list: [
                    { title: 'SUV', value: 'SUV' },
                    { title: 'Sedán', value: 'SEDAN' },
                    { title: 'Hatchback', value: 'HATCHBACK' },
                    { title: 'Pick-up', value: 'PICKUP' },
                    { title: 'Camioneta', value: 'CAMIONETA' },
                    { title: 'Deportivo', value: 'DEPORTIVO' },
                ],
            },
        }),
        // Technical Specs
        defineField({ name: 'cc', title: 'Cilindrada (cc)', type: 'number' }),
        defineField({ name: 'hp', title: 'Potencia (HP)', type: 'number' }),
        defineField({ name: 'consumption', title: 'Consumo (km/gl)', type: 'number' }),
        defineField({ name: 'keys', title: 'Juegos de Llaves', type: 'number' }),

        defineField({
            name: 'images',
            title: 'Imágenes',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'featured',
            title: 'Destacado',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'brand',
            subtitle: 'model',
            media: 'images.0',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title: `${title} ${subtitle}`,
                media,
            }
        },
    },
})
