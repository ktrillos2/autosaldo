export const cotizacion = {
    name: 'cotizacion',
    title: 'Cotizaciones (Leads)',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
        },
        {
            name: 'telefono',
            title: 'Teléfono',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'marca',
            title: 'Marca',
            type: 'string',
        },
        {
            name: 'modelo',
            title: 'Modelo',
            type: 'string',
        },
        {
            name: 'placa',
            title: 'Placa',
            type: 'string',
        },
        {
            name: 'distrito',
            title: 'Distrito',
            type: 'string',
        },
        {
            name: 'anio',
            title: 'Año',
            type: 'string',
        },
        {
            name: 'kilometraje',
            title: 'Kilometraje',
            type: 'string',
        },
        {
            name: 'combustible',
            title: 'Combustible',
            type: 'string',
        },
        {
            name: 'deuda',
            title: '¿Tiene deuda?',
            type: 'string',
        },
        {
            name: 'mensaje',
            title: 'Mensaje',
            type: 'text',
        },
        {
            name: 'status',
            title: 'Estado',
            type: 'string',
            options: {
                list: [
                    { title: 'Nuevo', value: 'nuevo' },
                    { title: 'Contactado', value: 'contactado' },
                    { title: 'Cerrado', value: 'cerrado' }
                ],
                layout: 'radio'
            },
            initialValue: 'nuevo'
        }
    ],
    preview: {
        select: {
            title: 'nombre',
            subtitle: 'marca',
            status: 'status'
        },
        prepare(selection: any) {
            const { title, subtitle, status } = selection
            const statusEmoji = status === 'nuevo' ? '🔵' : status === 'contactado' ? '🟡' : '🟢'
            return {
                title: `${title} ${statusEmoji}`,
                subtitle: subtitle
            }
        }
    }
}
