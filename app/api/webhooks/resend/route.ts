import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const event = await req.json()

    // 1. Verify it's an email event
    if (event.type !== 'email.received') {
      return NextResponse.json({ message: 'Ignored' })
    }

    const { email_id } = event.data

    // 2. Fetch the full email content
    const { data: email, error } = await resend.emails.get(email_id)

    if (error || !email) {
      console.error('Error fetching email:', error)
      return NextResponse.json({ error: 'Failed to fetch email' }, { status: 500 })
    }

    // 3. Forward the email
    const originalSender = email.from
    const originalSubject = email.subject
    const originalHtml = email.html

    const forwardSubject = `Fwd: ${originalSubject}`
    const forwardBody = `
      <div style="background-color: #f3f4f6; padding: 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #002559; margin-top: 0;">Mensaje Reenviado</h2>
          <p style="color: #666; font-size: 14px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <strong>De:</strong> ${originalSender}<br/>
            <strong>Para:</strong> info@autosaldo.com<br/>
            <strong>Asunto Original:</strong> ${originalSubject}
          </p>
          <div style="margin-top: 20px;">
            ${originalHtml || email.text || '(Sin contenido)'}
          </div>
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'Autosaldo Forwarder <info@autosaldo.com>',
      to: ['autosaldo.contacto@gmail.com'],
      replyTo: originalSender, // Allow replying directly to the original sender
      subject: forwardSubject,
      html: forwardBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
