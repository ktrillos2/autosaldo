import { Resend } from "resend"
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

async function main() {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        console.error("No RESEND_API_KEY found")
        return
    }

    const resend = new Resend(apiKey)

    try {
        const data = await resend.emails.send({
            from: 'Autosaldo Web <info@autosaldo.com>',
            to: ['keteruse@gmail.com'],
            subject: 'Prueba de Configuración de Correo - Autosaldo',
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h1 style="color: #002559;">¡Configuración Exitosa!</h1>
          <p>Este es un correo de prueba enviado desde tu dominio <strong>info@autosaldo.com</strong> usando Resend.</p>
          <hr/>
          <p style="font-size: 12px; color: #666;">Fecha: ${new Date().toLocaleString()}</p>
        </div>
      `
        })
        console.log("Email sent successfully:", data)
    } catch (error) {
        console.error("Error sending email:", error)
    }
}

main()
