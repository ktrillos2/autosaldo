import { NextResponse } from "next/server"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import { client } from "@/sanity/lib/client"

export async function POST(req: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { type, data } = await req.json()

        // Fetch footer settings to get email
        const footerData = await client.fetch(`*[_type == "footer"][0]{ email }`)
        const destinationEmail = footerData?.email || 'info@Autosaldo.pe'

        const subject = type === 'cotizacion'
            ? `Nueva Cotización: ${data.Nombre}`
            : `Nuevo Contacto: ${data.Nombre}`

        // Save to Sanity if it's a cotizacion
        if (type === 'cotizacion') {
            const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN })
            await writeClient.create({
                _type: 'cotizacion',
                nombre: data.Nombre || '',
                telefono: data.Telefono || '',
                email: data.Email || '',
                marca: data.Marca || '',
                modelo: data.Modelo || '',
                placa: data.Placa || '',
                distrito: data.Distrito || '',
                anio: data.Año || '',
                kilometraje: data.Kilometraje || '',
                combustible: data.Combustible || '',
                deuda: data.Deuda || '',
                tiempoVenta: data.TiempoVenta || '',
                precioDeseado: data.PrecioDeseado || '',
                mensaje: data.Mensaje || '',
                status: 'nuevo'
            })
        }

        const { error } = await resend.emails.send({
            from: 'Autosaldo Web <info@autosaldo.com>',
            to: [destinationEmail],
            subject: subject,
            react: EmailTemplate({ type, data }),
        })

        if (error) {
            console.error("Resend error:", error)
            return NextResponse.json({ error }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Server error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
