import { NextResponse } from "next/server"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { type, data } = await req.json()

        const subject = type === 'cotizacion'
            ? `Nueva Cotización: ${data.Nombre}`
            : `Nuevo Contacto: ${data.Nombre}`

        const { error } = await resend.emails.send({
            from: 'Autosaldo Web <info@autosaldo.com>',
            to: ['info@autosaldo.com'],
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
