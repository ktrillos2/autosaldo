import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

async function main() {
    const previousEmailId = '59705f0e-b5bd-42b3-8a53-3ceb542fdde0' // ID from previous test

    console.log("Simulating Resend Webhook Event...")

    try {
        const response = await fetch('http://localhost:3000/api/webhooks/resend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'email.received',
                data: {
                    email_id: previousEmailId
                }
            })
        })

        const result = await response.json()
        console.log("Webhook Response:", response.status, result)
    } catch (error) {
        console.error("Error calling webhook:", error)
    }
}

main()
