import * as React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Row,
    Column,
} from '@react-email/components';

interface LeadEmailProps {
    type: 'venta' | 'contacto' | 'cotizacion'
    data: Record<string, any>
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

    const previewText = `${title} - Autosaldo`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Row>
                            <Column style={headerContent}>
                                <Heading style={headerTitle}>AUTOSALDO</Heading>
                            </Column>
                        </Row>
                    </Section>

                    <Section style={content}>
                        <Heading style={h1}>{title}</Heading>
                        <Text style={text}>
                            Has recibido una nueva solicitud a través de la web. Aquí están los detalles:
                        </Text>

                        <Hr style={hr} />

                        <Section style={detailsContainer}>
                            {Object.entries(data).map(([key, value]) => (
                                <Row key={key} style={row}>
                                    <Column style={columnLabel}>
                                        <Text style={label}>{key.replace(/([A-Z])/g, ' $1').trim()}</Text>
                                    </Column>
                                    <Column style={columnValue}>
                                        <Text style={valueText}>{String(value)}</Text>
                                    </Column>
                                </Row>
                            ))}
                        </Section>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Este mensaje fue enviado automáticamente desde el sitio web de Autosaldo.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    marginBottom: '64px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    maxWidth: '600px',
};

const header = {
    backgroundColor: '#002559',
    padding: '32px 0',
    textAlign: 'center' as const,
};

const headerContent = {
    textAlign: 'center' as const,
};

const headerTitle = {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '800',
    margin: '0',
    letterSpacing: '2px',
};

const content = {
    padding: '40px 48px',
};

const h1 = {
    color: '#002559',
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 16px',
    textAlign: 'center' as const,
};

const text = {
    color: '#525f7f',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center' as const,
    margin: '0 0 24px',
};

const detailsContainer = {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '24px',
    margin: '10px 0',
};

const row = {
    borderBottom: '1px solid #e2e8f0',
};

const columnLabel = {
    width: '40%',
    verticalAlign: 'top',
};

const columnValue = {
    width: '60%',
    verticalAlign: 'top',
};

const label = {
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '600',
    margin: '8px 0',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
};

const valueText = {
    color: '#0f172a',
    fontSize: '15px',
    fontWeight: '500',
    margin: '8px 0',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '32px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
    margin: '0',
};
