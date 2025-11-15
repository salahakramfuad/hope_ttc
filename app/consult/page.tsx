// app/academic-advising/page.tsx
import Link from 'next/link'
import Script from 'next/script'
import { CalendarDays, Clock, GraduationCap, MessageCircle } from 'lucide-react'

export default function AcademicAdvisingPage() {
  const brand = {
    primary: '#9C27B0',
    primarySoft: 'rgba(156,39,176,0.10)',
    accent: '#EC4899',
    bg: '#F9F5FF',
    text: '#11181C',
    subText: 'rgba(15,23,42,0.78)',
    border: 'rgba(148, 163, 184, 0.35)',
    surface: '#FFFFFF'
  }

  const pill =
    'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]'

  return (
    <main className='relative min-h-screen' style={{ color: brand.text }}>
      {/* Soft background */}
      <div
        className='fixed inset-0 -z-20'
        style={{
          background: `radial-gradient(circle at top left, rgba(156,39,176,0.18), transparent 50%),
                       radial-gradient(circle at bottom right, rgba(236,72,153,0.15), transparent 52%),
                       ${brand.bg}`
        }}
      />
      <div
        className='fixed inset-0 -z-10 opacity-[0.07]'
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.32) 1px, transparent 0)',
          backgroundSize: '34px 34px'
        }}
      />

      <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 space-y-16'>
        {/* Hero */}
        <section className='grid gap-10 md:grid-cols-[1.2fr,1fr] items-center'>
          <div>
            <span
              className={pill}
              style={{ borderColor: brand.border, color: brand.primary }}
            >
              <CalendarDays className='h-3.5 w-3.5' />
              Academic Advising
            </span>

            <h1 className='mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight'>
              Book a Consultancy Session with the Academic Advisor
            </h1>

            <p
              className='mt-4 text-base leading-7'
              style={{ color: brand.subText }}
            >
              Not sure which course to take, how to build your profile, or what
              your path to university looks like? Book a one-to-one session with
              Hope TTC&apos;s Academic Advisor and leave with a clear plan.
            </p>

            <dl
              className='mt-6 space-y-4 text-sm'
              style={{ color: brand.subText }}
            >
              <div className='flex gap-3'>
                <Clock className='mt-0.5 h-4 w-4 text-emerald-600' />
                <div>
                  <dt className='font-medium text-slate-900'>
                    Session length & availability
                  </dt>
                  <dd>Standard 30–45 minute slots on selected weekdays.</dd>
                </div>
              </div>
              <div className='flex gap-3'>
                <GraduationCap className='mt-0.5 h-4 w-4 text-indigo-600' />
                <div>
                  <dt className='font-medium text-slate-900'>Who can book?</dt>
                  <dd>
                    Current Hope TTC students, prospective students, and
                    parents/guardians.
                  </dd>
                </div>
              </div>
              <div className='flex gap-3'>
                <MessageCircle className='mt-0.5 h-4 w-4 text-rose-600' />
                <div>
                  <dt className='font-medium text-slate-900'>
                    Common discussion topics
                  </dt>
                  <dd>
                    Course selection, IELTS/SAT roadmap, robotics/CS track,
                    study abroad plans, and academic performance.
                  </dd>
                </div>
              </div>
            </dl>

            <div className='mt-8 flex flex-wrap gap-3'>
              <Link
                href='#book'
                className='inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-px hover:shadow-purple-500/40'
                style={{ backgroundColor: brand.primary }}
              >
                Go to Booking Calendar
              </Link>
              <Link
                href='/getEnrolled'
                className='inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium backdrop-blur-sm transition hover:bg-white/70'
                style={{ borderColor: brand.border, color: brand.subText }}
              >
                Talk to Admissions
              </Link>
            </div>
          </div>

          {/* Advisor card – more elegant */}
          <div className='md:pl-4'>
            <div className='relative'>
              <div
                className='absolute -inset-0.5 rounded-3xl bg-linear-to-br from-purple-400/60 via-fuchsia-400/30 to-rose-400/40 opacity-60 blur-xl'
                aria-hidden='true'
              />
              <div
                className='relative overflow-hidden rounded-3xl border bg-white/85 backdrop-blur shadow-[0_24px_70px_rgba(15,23,42,0.18)]'
                style={{ borderColor: brand.border }}
              >
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_55%)] pointer-events-none' />
                <div className='relative p-6 space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div
                      className='flex h-12 w-12 items-center justify-center rounded-2xl text-white text-xl font-semibold shadow-md shadow-purple-500/40'
                      style={{ background: brand.primary }}
                    >
                      HA
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-slate-900'>
                        Hope TTC Academic Advisor
                      </p>
                      <p className='text-xs' style={{ color: brand.subText }}>
                        IELTS · SAT · Foundation · Robotics · Study Abroad
                      </p>
                    </div>
                  </div>

                  <p
                    className='text-sm leading-6'
                    style={{ color: brand.subText }}
                  >
                    Every student has a different story. Use this session to
                    review your current level, clarify your questions, and
                    design a realistic plan for the next 6–12 months.
                  </p>

                  <div
                    className='rounded-2xl bg-white/80 p-4 text-xs space-y-2 border shadow-sm'
                    style={{ borderColor: brand.border }}
                  >
                    <p className='font-semibold text-slate-900'>
                      Make the most of your session
                    </p>
                    <ul className='list-disc pl-4 space-y-1'>
                      <li>Bring your recent exam scores and transcripts.</li>
                      <li>List 2–3 preferred study destinations or majors.</li>
                      <li>Write down 3–5 specific questions beforehand.</li>
                    </ul>
                  </div>

                  <p
                    className='text-[11px] leading-relaxed'
                    style={{ color: brand.subText }}
                  >
                    <span className='font-semibold text-slate-900'>
                      Location:
                    </span>{' '}
                    Hope TTC Campus (in-person) or online via Zoom/Google Meet.
                    The exact link/room will be included in your Calendly
                    confirmation email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly embed – with your custom colors */}
        <section id='book' className='space-y-4 scroll-mt-24'>
          <div>
            <h2 className='text-xl sm:text-2xl font-semibold tracking-tight'>
              Live Booking Calendar
            </h2>
            <p className='text-sm max-w-2xl' style={{ color: brand.subText }}>
              Choose any available slot below. You&apos;ll receive an instant
              confirmation email, plus reminders before your session so you
              don&apos;t miss it.
            </p>
          </div>

          <div
            className='rounded-3xl border bg-purple-100 p-3 sm:p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)]'
            style={{ borderColor: brand.border }}
          >
            <div className='flex flex-wrap items-center justify-between gap-3 border-b pb-3 mb-4 text-xs sm:text-sm'>
              <div className='flex items-center gap-2'>
                <span
                  className='inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold text-white'
                  style={{ background: brand.primary }}
                >
                  ●
                </span>
                <div>
                  <p className='font-medium text-slate-900'>
                    Hope TTC Academic Advising
                  </p>
                  <p style={{ color: brand.subText }}>
                    Calendly · Secure & instant booking
                  </p>
                </div>
              </div>
              <Link
                href='https://calendly.com/fuadturkish?background_color=d3d3d3&text_color=000000&primary_color=9f91a3'
                target='_blank'
                className='inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-medium backdrop-blur-sm hover:bg-white/80'
                style={{ borderColor: brand.border, color: brand.subText }}
              >
                Open in new tab
              </Link>
            </div>

            {/* 🔽 Your inline Calendly widget with custom colors */}
            <div
              className='calendly-inline-widget'
              data-url='https://calendly.com/fuadturkish?background_color=d3d3d3&text_color=000000&primary_color=9f91a3'
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </section>

        {/* How it works – cleaner, more elegant cards */}
        <section className='space-y-6'>
          <div className='flex items-center gap-3'>
            <span
              className='inline-flex h-1 w-10 rounded-full'
              style={{ background: brand.primary }}
            />
            <h2 className='text-xl font-semibold tracking-tight'>
              How booking works
            </h2>
          </div>

          <div className='grid gap-4 md:grid-cols-3 text-sm'>
            {[
              {
                step: '1',
                title: 'Choose a time',
                desc: 'Use the calendar above to pick a free slot that fits your school and personal schedule.'
              },
              {
                step: '2',
                title: 'Tell us about you',
                desc: 'Add your name, contact details, and a short note on what you want to discuss.'
              },
              {
                step: '3',
                title: 'Join your session',
                desc: 'Check your email for the confirmation and join in-person or online at the scheduled time.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className='rounded-2xl border bg-white/90 p-4 sm:p-5 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md'
                style={{ borderColor: brand.border }}
              >
                <div
                  className='mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white'
                  style={{ background: brand.primary }}
                >
                  {item.step}
                </div>
                <p className='text-sm font-semibold text-slate-900'>
                  {item.title}
                </p>
                <p
                  className='mt-1.5 text-xs leading-relaxed'
                  style={{ color: brand.subText }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ – subtle elegant accordions */}
        <section className='space-y-5 pb-4'>
          <div className='flex items-center gap-3'>
            <span
              className='inline-flex h-1 w-10 rounded-full'
              style={{ background: brand.primary }}
            />
            <h2 className='text-xl font-semibold tracking-tight'>
              Frequently Asked Questions
            </h2>
          </div>

          <div className='space-y-3 text-sm' style={{ color: brand.subText }}>
            <details
              className='group rounded-2xl border bg-white/90 p-3 sm:p-4 shadow-sm'
              style={{ borderColor: brand.border }}
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-2'>
                <span className='font-medium text-slate-900'>
                  Is there any fee for the consultancy session?
                </span>
                <span className='text-xs opacity-60 group-open:rotate-90 transition'>
                  ▶
                </span>
              </summary>
              <p className='mt-2.5 text-xs leading-relaxed'>
                For current Hope TTC students, academic advising is usually
                free. For external students or parents, any applicable fees will
                be clearly mentioned on the booking page or confirmed by our
                team.
              </p>
            </details>

            <details
              className='group rounded-2xl border bg-white/90 p-3 sm:p-4 shadow-sm'
              style={{ borderColor: brand.border }}
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-2'>
                <span className='font-medium text-slate-900'>
                  Can I reschedule or cancel my booking?
                </span>
                <span className='text-xs opacity-60 group-open:rotate-90 transition'>
                  ▶
                </span>
              </summary>
              <p className='mt-2.5 text-xs leading-relaxed'>
                Yes. Use the reschedule or cancel link included in your Calendly
                confirmation email. Please try to do this at least 24 hours
                before your appointment so another student can take your slot.
              </p>
            </details>

            <details
              className='group rounded-2xl border bg-white/90 p-3 sm:p-4 shadow-sm'
              style={{ borderColor: brand.border }}
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-2'>
                <span className='font-medium text-slate-900'>
                  Can I bring my parent or friend to the session?
                </span>
                <span className='text-xs opacity-60 group-open:rotate-90 transition'>
                  ▶
                </span>
              </summary>
              <p className='mt-2.5 text-xs leading-relaxed'>
                Yes, you&apos;re welcome to join with a parent/guardian or a
                close friend. That can be especially helpful when discussing
                higher-studies decisions and financial planning.
              </p>
            </details>
          </div>
        </section>
      </div>

      {/* Calendly script */}
      <Script src='https://assets.calendly.com/assets/external/widget.js' />
    </main>
  )
}
