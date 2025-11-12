// app/api/enroll/route.ts
import nodemailer from 'nodemailer'

export const runtime = 'nodejs' // Nodemailer needs Node runtime

type EnrollPayload = {
  name?: string
  email?: string
  phone?: string
  contactPref?: 'whatsapp' | 'phone' | 'email' | 'sms'
  program?: string
  campus?: string
  message?: string
  hp?: string // honeypot
}

function env(name: string, fallback?: string) {
  const v = process.env[name]
  if (v) return v
  if (fallback !== undefined) return fallback
  throw new Error(`Missing env: ${name}`)
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as EnrollPayload

    // Honeypot → silently pass
    if (data.hp && data.hp.trim() !== '') {
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }

    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const program = (data.program || '').trim()
    if (!name || !email || !program) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'name, email, and program are required.'
        }),
        { status: 400 }
      )
    }
    // very light email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid email.' }),
        {
          status: 400
        }
      )
    }

    const user = env('EMAIL_USER')
    const pass = env('EMAIL_PASS')
    const adminTo = process.env.MAIL_TO || user

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    })

    const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' })

    // 1) send to admin
    await transporter.sendMail({
      from: user,
      to: adminTo,
      subject: `New Enrollment — ${program} — ${name}`,
      text: [
        `Received: ${now} (Asia/Dhaka)`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${data.phone || '-'}`,
        `Preferred Contact: ${data.contactPref || '-'}`,
        `Program: ${program}`,
        `Campus: ${data.campus || '-'}`,
        '',
        'Message:',
        data.message || '-'
      ].join('\n')
    })

    // 2) auto-reply to lead
    await transporter.sendMail({
      from: user,
      to: email,
      subject: 'We received your enquiry — HOPE TTC',
      text: `Hi ${name},

Thanks for your interest in our ${program} program. An advisor will contact you soon to discuss goals, batch options, and next steps.

— HOPE TTC Admissions`
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (error) {
    console.error('Enroll API error:', error)
    return new Response(
      JSON.stringify({ ok: false, error: 'Email failed to send.' }),
      {
        status: 500
      }
    )
  }
}
