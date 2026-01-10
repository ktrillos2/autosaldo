import { defineField, defineType } from 'sanity'

export const contactoContent = defineType({
    name: 'contactoContent',
    title: 'Contenido y Mapa',
    type: 'document',
    fields: [
        defineField({
            name: 'infoCards',
            title: 'Tarjetas de Información',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Título' },
                        { name: 'value', type: 'string', title: 'Valor Visual' },
                        { name: 'href', type: 'string', title: 'Enlace (opcional)', description: 'Ej: tel:+51999999999 o mailto:info@x.com' },
                        {
                            name: 'iconName',
                            type: 'string',
                            title: 'Nombre de Ícono',
                            options: {
                                list: [
                                    { title: 'Teléfono', value: 'Phone' },
                                    { title: 'Email', value: 'Mail' },
                                    { title: 'Ubicación', value: 'MapPin' },
                                    { title: 'Reloj', value: 'Clock' }
                                ]
                            }
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'formTitle',
            title: 'Título del Formulario',
            type: 'string',
            initialValue: 'Envíanos un mensaje',
        }),
        defineField({
            name: 'mapTitle',
            title: 'Título del Mapa',
            type: 'string',
            initialValue: 'Encuéntranos',
        }),
        defineField({
            name: 'mapSrc',
            title: 'URL del Mapa (Embed Src)',
            type: 'text',
            description: 'El valor del atributo "src" del iframe de Google Maps',
            initialValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3772277677037!2d-76.94744592396477!3d-12.07626694209897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7c5a7df9b75%3A0x8e6e6f3c7b0f5a5a!2sAv.%20Javier%20Prado%20Este%204200%2C%20La%20Molina%2015024!5e0!3m2!1ses!2spe!4v1704672000000!5m2!1ses!2spe',
        }),
    ],
})
