// app/get-enrolled/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

type EnrollResponse = {
  ok?: boolean
  error?: string
}

export default function GetEnrolledPage() {
  const [state, setState] = React.useState<SubmitState>('idle')
  const [error, setError] = React.useState<string | null>(null)
  const [emailForMsg, setEmailForMsg] = React.useState<string>('')
  const [showToast, setShowToast] = React.useState(false)
  const msgRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (state === 'success' || state === 'error') {
      // focus/scroll message into view for quick visibility
      msgRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [state])

  React.useEffect(() => {
    if (state === 'success') {
      setShowToast(true)
      const t = setTimeout(() => setShowToast(false), 3800)
      return () => clearTimeout(t)
    }
  }, [state])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setError(null)

    const form = e.currentTarget // capture before await (avoid pooled event)
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      contactPref: String(fd.get('contactPref') || ''),
      program: String(fd.get('program') || ''),
      campus: String(fd.get('campus') || ''),
      message: String(fd.get('message') || ''),
      hp: String(fd.get('hp') || '') // honeypot
    }

    setEmailForMsg(payload.email)

    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const json: EnrollResponse = await res.json().catch(() => ({}))

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Failed to submit. Please try again.')
      }

      form.reset()
      setState('success')
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : 'Submission failed. Please try again.'
      )
      setState('error')
    }
  }

  return (
    <main className='min-h-screen bg-linear-to-b from-purple-50 to-sky-100'>
      {/* Toast (email pop-up) */}
      {showToast && (
        <div
          className='fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-900 shadow-md'
          role='status'
          aria-live='polite'
        >
          We’ll contact you at{' '}
          <span className='font-semibold'>{emailForMsg}</span>.
        </div>
      )}

      <section className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12'>
        {/* Hero */}
        <div className='text-center'>
          <span className='inline-block rounded-full bg-sky-50 border border-sky-200 text-sky-700 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-sm'>
            Admissions
          </span>
          <h1 className='mt-4 text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent'>
            Get Enrolled
          </h1>
          <p className='mt-3 text-slate-600 max-w-2xl mx-auto'>
            Ready to take the next step? Fill in this quick form and our
            advisors will reach out with a tailored plan.
          </p>
        </div>

        {/* Grid */}
        <div className='mt-10 grid gap-6 lg:grid-cols-3'>
          {/* Form Card */}
          <section className='lg:col-span-2'>
            {/* Success banner (top) */}
            {state === 'success' && (
              <div className='mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800'>
                <div className='flex items-start gap-3'>
                  <span className='mt-0.5'>✅</span>
                  <div>
                    <div className='font-semibold'>
                      Thanks! We’ve got your details.
                    </div>
                    <div className='text-sm'>
                      Our team will contact you soon via your preferred channel.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error banner (top) */}
            {state === 'error' && error && (
              <div className='mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-800'>
                <div className='flex items-start gap-3'>
                  <span className='mt-0.5'>⚠️</span>
                  <div>
                    <div className='font-semibold'>Something went wrong.</div>
                    <div className='text-sm'>{error}</div>
                  </div>
                </div>
              </div>
            )}

            <div className='rounded-2xl bg-white shadow-md border border-sky-100 p-6 md:p-8'>
              <h2 className='text-xl font-semibold text-slate-900'>
                Tell us about you
              </h2>
              <p className='text-sm text-slate-600 mt-1'>
                Fields marked <span className='text-sky-600'>*</span> are
                required.
              </p>

              <form
                className='mt-6 space-y-5'
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Honeypot (hidden) */}
                <input
                  type='text'
                  name='hp'
                  tabIndex={-1}
                  autoComplete='off'
                  className='hidden'
                  aria-hidden='true'
                />

                {/* Name / Email */}
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      className='block font-medium text-slate-700 mb-1'
                      htmlFor='name'
                    >
                      Full Name <span className='text-sky-600'>*</span>
                    </label>
                    <input
                      className='w-full border border-sky-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400'
                      type='text'
                      id='name'
                      name='name'
                      required
                      placeholder='Your Name'
                      autoComplete='name'
                    />
                  </div>
                  <div>
                    <label
                      className='block font-medium text-slate-700 mb-1'
                      htmlFor='email'
                    >
                      Email Address <span className='text-sky-600'>*</span>
                    </label>
                    <input
                      className='w-full border border-sky-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400'
                      type='email'
                      id='email'
                      name='email'
                      required
                      placeholder='you@example.com'
                      autoComplete='email'
                      inputMode='email'
                      pattern='^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'
                      aria-describedby='email-hint'
                    />
                    <p id='email-hint' className='text-xs text-slate-500 mt-1'>
                      Use a valid email so we can reach you.
                    </p>
                  </div>
                </div>

                {/* Phone / Preferred Contact */}
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      className='block font-medium text-slate-700 mb-1'
                      htmlFor='phone'
                    >
                      Phone Number
                    </label>
                    <input
                      className='w-full border border-sky-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400'
                      type='tel'
                      id='phone'
                      name='phone'
                      placeholder='01XXXXXXXXX'
                      inputMode='tel'
                      pattern='^0[0-9]{10}$'
                      aria-describedby='phone-hint'
                      autoComplete='tel'
                    />
                    <p id='phone-hint' className='text-xs text-slate-500 mt-1'>
                      Bangladeshi mobile format. Example: 01XXXXXXXXX
                    </p>
                  </div>

                  <div>
                    <label
                      className='block font-medium text-slate-700 mb-1'
                      htmlFor='contactPref'
                    >
                      Preferred Contact
                    </label>
                    <select
                      className='w-full border border-sky-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400'
                      id='contactPref'
                      name='contactPref'
                      defaultValue='whatsapp'
                    >
                      <option value='whatsapp'>WhatsApp</option>
                      <option value='phone'>Phone Call</option>
                      <option value='email'>Email</option>
                      <option value='sms'>SMS</option>
                    </select>
                  </div>
                </div>

                {/* Program / Campus */}
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      className='block font-medium text-slate-700 mb-1'
                      htmlFor='program'
                    >
                      Program of Interest{' '}
                      <span className='text-sky-600'>*</span>
                    </label>
                    <select
                      className='w-full border border-sky-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400'
                      id='program'
                      name='program'
                      required
                      defaultValue=''
                    >
                      <option value='' disabled>
                        Select a program
                      </option>
                      <option>IELTS</option>
                      <option>SAT</option>
                      <option>Spoken English</option>
                      <option>Robotics</option>
                      <option>BTEC</option>
                      <option>Study Overseas</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className='block font-medium text-slate-700 mb-1'
                      htmlFor='campus'
                    >
                      Preferred Campus
                    </label>
                    <select
                      className='w-full border border-sky-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400'
                      id='campus'
                      name='campus'
                      defaultValue='uttara'
                    >
                      <option value='uttara'>Uttara</option>
                      <option value='dhanmondi'>Dhanmondi</option>
                      <option value='online'>Online</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className='block font-medium text-slate-700 mb-1'
                    htmlFor='message'
                  >
                    Message
                  </label>
                  <textarea
                    className='w-full border border-sky-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400'
                    id='message'
                    name='message'
                    rows={4}
                    placeholder="Tell us anything else you'd like us to know..."
                  />
                </div>

                {/* Consent */}
                <div className='rounded-xl border border-sky-100 bg-sky-50/60 p-4'>
                  <label className='flex items-start gap-3'>
                    <input
                      type='checkbox'
                      name='consent'
                      required
                      className='mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500'
                    />
                    <span className='text-sm text-slate-700'>
                      I agree to be contacted by HOPE TTC about admissions and
                      programs.{' '}
                      <Link href='/privacy' className='text-sky-700 underline'>
                        Privacy Policy
                      </Link>
                      .<span className='text-sky-600'> *</span>
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type='submit'
                  disabled={state === 'submitting'}
                  className='w-full mt-2 inline-flex items-center justify-center gap-2 bg-linear-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-sm transition'
                  aria-busy={state === 'submitting'}
                >
                  {state === 'submitting' && (
                    <svg
                      className='h-5 w-5 animate-spin'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                      />
                    </svg>
                  )}
                  {state === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
                </button>

                {/* Inline status message just under the button */}
                <div
                  ref={msgRef}
                  className='min-h-[1.25rem]'
                  role='status'
                  aria-live='polite'
                >
                  {state === 'success' && (
                    <p className='mt-2 text-sm text-emerald-700'>
                      🎉 Thank you! Our representative will contact you shortly.
                      We’ll reach you at{' '}
                      <span className='font-medium'>{emailForMsg}</span>.
                    </p>
                  )}
                  {state === 'error' && error && (
                    <p className='mt-2 text-sm text-rose-700'>⚠️ {error}</p>
                  )}
                </div>

                <p className='text-center text-slate-500 text-xs'>
                  We respect your privacy. Our team will contact you to assist
                  further.
                </p>
              </form>
            </div>
          </section>

          {/* Sidebar Info */}
          <aside className='space-y-6'>
            <div className='rounded-2xl bg-white shadow-md border border-sky-100 p-6'>
              <h3 className='font-semibold text-slate-900'>Need quick help?</h3>
              <p className='text-sm text-slate-600 mt-1'>
                Talk to an advisor now or book a free consultation.
              </p>
              <div className='mt-4 grid gap-3'>
                <a
                  href='https://wa.me/8801949308141'
                  className='inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-800 font-medium hover:bg-emerald-100 transition'
                >
                  WhatsApp
                </a>
                <a
                  href='tel:+8801949308141'
                  className='inline-flex items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sky-800 font-medium hover:bg-sky-100 transition'
                >
                  Call Us
                </a>
                <Link
                  href='/interested/form/combo-ielts-express'
                  className='inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 font-medium hover:bg-slate-50 transition'
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            <div className='rounded-2xl bg-white shadow-md border border-sky-100 p-6'>
              <h3 className='font-semibold text-slate-900'>
                Visit our campuses
              </h3>
              <ul className='mt-3 space-y-3 text-sm text-slate-700'>
                <li>
                  <div className='font-medium text-slate-900'>Uttara</div>
                  Plot-7, Road-6, Sector-4, Uttara, Dhaka
                </li>
                <li>
                  <div className='font-medium text-slate-900'>Dhanmondi</div>
                  House-12, Road-5, Dhanmondi, Dhaka
                </li>
              </ul>
              <div className='mt-4 text-xs text-slate-500'>
                Open: Sat–Thu, 10:00–20:00 (BDT)
              </div>
            </div>

            <div className='rounded-2xl bg-linear-to-br from-sky-50 to-teal-50 border border-sky-100 p-6'>
              <h3 className='font-semibold text-slate-900'>
                What happens next?
              </h3>
              <ol className='mt-2 space-y-2 text-sm text-slate-700 list-decimal list-inside'>
                <li>We review your details within 1 business day.</li>
                <li>Advisor contacts you to discuss goals and timing.</li>
                <li>Get a tailored plan + batch options.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
