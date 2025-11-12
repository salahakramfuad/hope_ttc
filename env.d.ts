// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    SMTP_HOST: string
    SMTP_PORT: string
    SMTP_SECURE?: 'true' | 'false'
    SMTP_USER: string
    SMTP_PASS: string
    MAIL_FROM: string
    MAIL_TO: string
  }
}
