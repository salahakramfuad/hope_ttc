// lib/mailer.ts
import nodemailer, { Transporter } from 'nodemailer'

function getEnv(name: keyof NodeJS.ProcessEnv, fallback?: string): string {
  const v = process.env[name]
  if (v) return v
  if (fallback !== undefined) return fallback
  throw new Error(`Missing env: ${name}`)
}

export function createTransporter(): Transporter {
  // Sensible defaults for Gmail if not explicitly set
  const secure = (process.env.SMTP_SECURE ?? 'true') === 'true'
  const host = getEnv('SMTP_HOST', 'smtp.gmail.com')
  const port = Number(getEnv('SMTP_PORT', secure ? '465' : '587'))

  const user = getEnv('EMAIL_USER')
  const pass = getEnv('EMAIL_PASS')

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  })
}
