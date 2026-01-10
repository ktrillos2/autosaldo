import { createClient } from "next-sanity"
import { NextResponse } from "next/server"
import { apiVersion, dataset, projectId } from "@/sanity/env"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

export async function POST(req: Request) {
    try {
        const token = process.env.SANITY_API_TOKEN

        if (!token) {
            console.error("Missing SANITY_API_TOKEN")
            return NextResponse.json({ error: "Configuration error: Missing API Token" }, { status: 500 })
        }

        const client = createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: false,
            token,
        })

        const formData = await req.formData()

        // Extract Text Fields
        const brand = formData.get("brand") as string
        const model = formData.get("model") as string
        const year = Number(formData.get("year"))
        const mileage = Number(formData.get("mileage"))
        const price = Number(formData.get("price"))
        const version = formData.get("version") as string
        const contactName = formData.get("contactName") as string
        const contactPhone = formData.get("contactPhone") as string

        // New Fields
        const contactEmail = formData.get("contactEmail") as string
        const plate = formData.get("plate") as string
        const district = formData.get("district") as string
        const fuel = formData.get("fuel") as string
        const debt = formData.get("debt") as string
        const message = formData.get("message") as string

        // Upload Images
        const imageFiles = formData.getAll("images") as File[]
        const imageAssetIds: string[] = []

        for (const file of imageFiles) {
            if (file.size > 0) {
                const arrayBuffer = await file.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)
                const asset = await client.assets.upload("image", buffer, {
                    filename: file.name,
                    contentType: file.type,
                })
                imageAssetIds.push(asset._id)
            }
        }

        // Create Document
        const doc = {
            _type: "autoUsuario",
            status: "pendiente",
            brand,
            model,
            year,
            mileage,
            price,
            version,
            contactName,
            contactPhone,
            contactEmail,
            plate,
            district,
            fuel,
            debt,
            message,
            images: imageAssetIds.map((id) => ({
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: id,
                },
            })),
        }

        const result = await client.create(doc)

        // Send Email Notification
        try {
            const resend = new Resend(process.env.RESEND_API_KEY)
            await resend.emails.send({
                from: 'Autosaldo Web <info@autosaldo.com>',
                to: ['info@autosaldo.com'],
                subject: `Nueva Solicitud de Venta: ${brand} ${model}`,
                react: EmailTemplate({
                    type: 'venta',
                    data: {
                        Nombre: contactName,
                        Telefono: contactPhone,
                        Email: contactEmail,
                        Auto: `${brand} ${model} ${year}`,
                        Placa: plate,
                        Distrito: district,
                        Precio: `$${price}`,
                        Kilometraje: `${mileage} km`,
                        Combustible: fuel,
                        Deuda: debt,
                        Version: version,
                        Mensaje: message
                    }
                }),
            })
        } catch (emailError) {
            console.error("Error sending email:", emailError)
            // Don't fail the request if email fails, but log it
        }

        return NextResponse.json({ success: true, id: result._id })
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json({ error: "Failed to upload car" }, { status: 500 })
    }
}
