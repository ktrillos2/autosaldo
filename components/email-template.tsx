import * as React from 'react';

interface LeadEmailProps {
    type: 'venta' | 'contacto' | 'cotizacion'
    data: any
}

export const EmailTemplate: React.FC<Readonly<LeadEmailProps>> = ({
    type,
    data,
}) => {
    const title = type === 'venta'
        ? 'Nueva Solicitud de Venta de Auto'
        : type === 'cotizacion'
            ? 'Nueva Cotización Recibida'
            : 'Nuevo Mensaje de Contacto'

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
            <h1 style={{ color: '#002559' }}>{title}</h1>
            <hr style={{ borderColor: '#eee' }} />

            <div style={{ marginTop: '20px' }}>
                {Object.entries(data).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: '10px' }}>
                        <strong style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
                        <span style={{ marginLeft: '10px' }}>{value as React.ReactNode}</span>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: '30px', fontSize: '12px', color: '#888' }}>
                Este correo fue enviado desde la web de Autosaldo.
            </p>
        </div>
    );
};
