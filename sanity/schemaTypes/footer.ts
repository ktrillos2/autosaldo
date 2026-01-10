import { defineField, defineType } from 'sanity'

export const footer = defineType({
    name: 'footer',
    title: 'Pie de Página (Footer)',
    type: 'document',
    fields: [
        defineField({
            name: 'companyDescription',
            title: 'Descripción de la Empresa',
            type: 'text',
            initialValue: 'Tu concesionario de confianza. Autos seminuevos certificados con garantía y el mejor servicio.',
        }),
        defineField({
            name: 'address',
            title: 'Dirección',
            type: 'string',
            initialValue: 'Av. Javier Prado Este 4200, Lima, Perú',
        }),
        defineField({
            name: 'email',
            title: 'Correo Electrónico',
            type: 'string',
            initialValue: 'info@Autosaldo.pe',
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Número de Teléfono',
            type: 'string',
            initialValue: '+51 937 385 398',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Redes Sociales',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Plataforma (Instagram, Facebook)' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'copyrightText',
            title: 'Texto de Copyright',
            type: 'string',
            initialValue: 'Autosaldo. Todos los derechos reservados.',
        }),
    ],
})
