import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../sanity/env'

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // Needed if running from node directly without `sanity exec`
})

const heroData = {
    _id: 'hero',
    _type: 'hero',
    overline: 'SERVICIO DE VENTA ASISTIDA',
    headline: '¡Compramos tu auto con deuda',
    headlineHighlight: 'al instante y sin riesgos!',
    subheadline: 'Olvídate de las demoras y los trámites engorrosos. Recibe una oferta justa en minutos y el dinero en tu cuenta hoy mismo.',
    primaryButtonText: 'Cotizar mi Auto Ahora',
    primaryButtonLink: '/cotizador',
    secondaryButtonText: 'Contactar Asesor',
    secondaryButtonLink: '/contacto',
}

const headerData = {
    _id: 'header',
    _type: 'header',
    // Logo is an image, we can't easily upload it via script without the file buffer or asset ID.
    // We'll skip the logo for now or assume user uploads it.
    navLinks: [
        { _key: '1', label: 'Inicio', href: '/' },
        { _key: '2', label: 'Autos', href: '/showroom' },
        { _key: '3', label: 'Vende tu Auto', href: '/cotizador' },
        { _key: '4', label: 'Nosotros', href: '/nosotros' },
        { _key: '5', label: 'Contacto', href: '/contacto' },
    ],
    phoneNumber: '937 385 398',
    ctaText: 'Ver Autos',
    ctaLink: '/showroom',
}

async function seed() {
    console.log('Seeding data...')

    try {
        const heroTransaction = client.transaction().createIfNotExists(heroData)
        const headerTransaction = client.transaction().createIfNotExists(headerData)

        await heroTransaction.commit()
        await headerTransaction.commit()

        console.log('Data seeded successfully!')
    } catch (error) {
        console.error('Error seeding data:', error)
    }
}

seed()
