// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { faker } from '@faker-js/faker'

/**
 * Elegant, light-first theme (no pure black)
 * Soft off-white background, white cards, slate ink, teal/indigo accents
 * SSR-safe: no client event handlers in server components
 */

// ---- Faker helpers (deterministic pretty placeholders) ----
/** Stable integer hash from a string (for deterministic seeds). */
function seedFromString(s: string) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Education-friendly placeholder using faker (picsum). */
function fakerPlaceholder(alt: string, width: number, height: number) {
  const seed = seedFromString(alt || `${width}x${height}`)
  faker.seed(seed)
  return faker.image.urlPicsumPhotos({
    width,
    height,
    blur: 0,
    grayscale: false
  })
}

const HIGHLIGHTS = [
  { k: 'Years Teaching', v: '16+' },
  { k: 'Top Band Scores', v: '1,000+' },
  { k: 'Campuses', v: '2' },
  { k: 'Avg. IELTS', v: '7.0+' }
]

const COURSES = [
  {
    title: 'IELTS Express',
    level: 'Fast Track',
    blurb:
      'High-impact strategies to push from 6.0 → 7.0+ with timed mocks & feedback.',
    href: '/courses/ielts-express',
    img: '/images/ielts-express.jpg'
  },
  {
    title: 'IELTS Foundation',
    level: 'Beginner–B1',
    blurb: 'Grammar, vocabulary, and habits to build a rock-solid base.',
    href: '/courses/ielts-foundation',
    img: '/images/ielts-foundation.jpg'
  },
  {
    title: 'Spoken English',
    level: 'All Levels',
    blurb: 'Fluency drills, pronunciation labs, and real-life roleplays.',
    href: '/speaking/basic-english-spoken',
    img: '/images/spoken-english.jpg'
  },
  {
    title: 'Essay Masterclass',
    level: 'Writing',
    blurb: 'Task 1/2 frameworks, cohesion, and band-7+ model answers.',
    href: '/courses/writing-masterclass',
    img: '/images/essay-masterclass.jpg'
  }
]

const FEATURES = [
  {
    title: 'IDP-Aligned Mock Center',
    desc: 'Timed mock tests, band-style grading, and analytics after every attempt.',
    icon: '🎯'
  },
  {
    title: 'Small Cohorts',
    desc: '8–15 learners per batch for individual attention and faster progress.',
    icon: '👥'
  },
  {
    title: 'Speaking Clinics',
    desc: '1:1 feedback with examiners, accent coaching, cue-card drills.',
    icon: '🎤'
  },
  {
    title: 'Study Abroad Desk',
    desc: 'Shortlist programs, prep documents, and track applications in one place.',
    icon: '✈️'
  }
]

const TESTIMONIALS = [
  {
    name: 'Nafisa R.',
    score: 'Band 7.5',
    quote:
      'The mocks + feedback loop was a game-changer. I knew exactly what to fix each week.',
    img: '/images/students/nafisa.jpg'
  },
  {
    name: 'Arif H.',
    score: 'Band 8.0',
    quote:
      'Speaking clinics felt like real interviews. The confidence carried into test day.',
    img: '/images/students/arif.jpg'
  },
  {
    name: 'Meherun I.',
    score: 'Band 7.0',
    quote:
      'Clear frameworks for Task 2 writing. My cohesion and grammar jumped a full band.',
    img: '/images/students/meherun.jpg'
  }
]

/* ---------- Small UI ---------- */

function SectionTitle({
  eyebrow,
  title,
  desc,
  size = 'md'
}: {
  eyebrow?: string
  title: React.ReactNode
  desc?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  const sizeMap = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-3xl md:text-5xl lg:text-6xl'
  } as const

  return (
    <header className='mx-auto max-w-4xl text-center'>
      {eyebrow && (
        <span className='inline-block rounded-full bg-white border border-teal-100 text-teal-700 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase'>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-extrabold tracking-tight leading-tight ${sizeMap[size]}`}
      >
        <span className='bg-linear-to-r from-teal-700 via-sky-700 to-indigo-700 bg-clip-text text-transparent'>
          {title}
        </span>
      </h2>
      {desc && (
        <p className='mt-3 text-base md:text-lg text-slate-600'>{desc}</p>
      )}
    </header>
  )
}

function Card({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  )
}

/** SSR-safe image. If `src` is missing OR preferPlaceholder is true, use faker picsum. */
function SafeImage({
  src,
  alt,
  className,
  width,
  height,
  sizes,
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  preferPlaceholder = false
}: {
  src?: string
  alt: string
  className?: string
  width: number
  height: number
  sizes?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  /** Force using generated placeholder even if a src string is provided. */
  preferPlaceholder?: boolean
}) {
  const finalSrc =
    preferPlaceholder || !src ? fakerPlaceholder(alt, width, height) : src
  const defaultBlur =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='
  return (
    <Image
      src={finalSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL || defaultBlur}
    />
  )
}

/* --------------------------------- Page ---------------------------------- */

export default function Feed() {
  return (
    <main className='bg-[#F7FAFC] text-slate-900 scroll-smooth'>
      {/* Soft top ribbon for subtle polish */}
      <div className='h-2 w-full bg-linear-to-r from-teal-200 via-sky-200 to-indigo-200' />

      {/* ============================ FULL-WIDTH HERO ============================ */}
      <section className='relative w-full overflow-hidden'>
        {/* Ambient background */}
        <div className='absolute inset-0 -z-10'>
          <div className='h-full w-full bg-[radial-gradient(900px_500px_at_10%_-10%,#E6F6F7_25%,transparent_70%),radial-gradient(900px_600px_at_110%_10%,#E7ECFB_25%,transparent_70%),linear-gradient(180deg,#F4FAFF_0%,transparent_50%)]' />
        </div>
        {/* Subtle grid */}
        <div
          aria-hidden
          className='absolute inset-0 -z-10 opacity-[0.05]'
          style={{
            backgroundImage:
              'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-28 grid lg:grid-cols-12 gap-12 items-center'>
          {/* Copy */}
          <div className='lg:col-span-6'>
            <span className='inline-block rounded-full bg-white border border-teal-100 text-teal-700 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase'>
              New Batches Opening
            </span>
            <h1 className='mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight'>
              <span className='bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
                Get Your Band 7+ Faster
              </span>
            </h1>
            <p className='mt-5 text-lg md:text-xl text-slate-600'>
              Intensive IELTS prep, speaking clinics, and IDP-aligned mocks.
              Study with mentors who’ve guided thousands to top scores.
            </p>

            <div className='mt-7 flex flex-wrap gap-3'>
              <Link
                href='/courses/ielts-express'
                className='inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 bg-teal-700'
              >
                Explore Courses
              </Link>
              <Link
                href='/contact-us'
                className='inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold border border-teal-200 bg-white hover:bg-teal-50'
              >
                Talk to an Advisor
              </Link>
            </div>

            {/* Metrics */}
            <div className='mt-9 grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {HIGHLIGHTS.map((h) => (
                <Card key={h.k} className='p-5 text-center'>
                  <div className='text-2xl font-semibold'>{h.v}</div>
                  <div className='text-xs text-slate-500'>{h.k}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className='lg:col-span-6'>
            <div className='relative aspect-4/3 rounded-[28px] overflow-hidden border border-slate-200 bg-white'>
              <div className='absolute inset-0 opacity-60 bg-[radial-gradient(60%_60%_at_70%_20%,#E6F6F7,transparent_70%)]' />
              <SafeImage
                src='/images/hero.jpg'
                alt='Learners in class'
                className='h-full w-full object-cover'
                width={1200}
                height={900}
                sizes='(max-width: 1024px) 100vw, 50vw'
                priority
                preferPlaceholder
              />
              <div
                className='pointer-events-none absolute inset-0'
                style={{ boxShadow: 'inset 0 0 140px rgba(10,126,164,0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================== COURSES =============================== */}
      <section className='py-16 md:py-24'>
        <SectionTitle
          eyebrow='Programs'
          title='Choose Your Track'
          desc='From absolute beginners to band-8 chasers — pick a course that matches your goal.'
          size='lg'
        />
        <div className='mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-7'>
          {COURSES.map((c) => (
            <Link key={c.title} href={c.href} className='group'>
              <Card className='h-full overflow-hidden'>
                <div className='relative'>
                  <SafeImage
                    src={c.img}
                    alt={c.title}
                    className='h-48 w-full object-cover'
                    width={960}
                    height={384}
                    sizes='(max-width: 1024px) 100vw, 25vw'
                    preferPlaceholder
                  />
                  <span className='absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-teal-800 border border-teal-100'>
                    {c.level}
                  </span>
                </div>
                <div className='p-6'>
                  <h3 className='font-semibold text-slate-900'>{c.title}</h3>
                  <p className='mt-2 text-sm text-slate-600'>{c.blurb}</p>
                  <div className='mt-4 text-sm font-semibold text-teal-700 group-hover:underline'>
                    View details →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================== FEATURES ============================== */}
      <section className='py-16 md:py-24 bg-[#F2F6F9]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            eyebrow='Why Us'
            title='Designed for Real-World Results'
            desc='Practical practice, fast feedback, and a clear path to your target band.'
            size='md'
          />
          <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-7'>
            {FEATURES.map((f) => (
              <Card key={f.title} className='p-6'>
                <div
                  className='h-10 w-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-lg'
                  aria-hidden
                >
                  {f.icon}
                </div>
                <h3 className='mt-3 font-semibold text-slate-900'>{f.title}</h3>
                <p className='mt-2 text-sm text-slate-600'>{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHY HOPE TTC (BIGGER) ========================= */}
      <section className='py-16 md:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            eyebrow='Why HOPE TTC'
            title={
              <>
                <span>Why is HOPE TTC</span>
                <span className=''>the #1 Choice</span>
                <span className=''>for IELTS in Bangladesh?</span>
              </>
            }
            desc='Beyond teaching, we provide personalized progress tracking, AI-integrated assessment tools, and an exclusive IELTS Portal.'
            size='xl'
          />
          <div className='mt-14 grid gap-8 lg:grid-cols-12'>
            {/* Left: value bullets */}
            <div className='lg:col-span-7 grid sm:grid-cols-2 gap-8'>
              <Card className='p-7'>
                <h3 className='font-semibold text-lg'>
                  Personalized Progress Tracking
                </h3>
                <p className='mt-2 text-sm text-slate-600'>
                  A dashboard that visualizes your band trajectory across
                  Listening, Reading, Writing, and Speaking—with weekly
                  milestones and coach notes.
                </p>
              </Card>
              <Card className='p-7'>
                <h3 className='font-semibold text-lg'>
                  AI-Integrated Assessments
                </h3>
                <p className='mt-2 text-sm text-slate-600'>
                  Instant analytic feedback on coherence, grammar, and lexical
                  range, aligned to band descriptors—so you know what to fix
                  now.
                </p>
              </Card>
              <Card className='p-7'>
                <h3 className='font-semibold text-lg'>
                  Exclusive IELTS Portal
                </h3>
                <p className='mt-2 text-sm text-slate-600'>
                  Access mocks, model answers, cue-card banks, and timed drills
                  in one secure place—available 24/7 from any device.
                </p>
              </Card>
              <Card className='p-7'>
                <h3 className='font-semibold text-lg'>
                  Actionable Weekly Reports
                </h3>
                <p className='mt-2 text-sm text-slate-600'>
                  Concise summaries that connect your errors to practice tasks
                  and set next-week goals you can actually hit.
                </p>
              </Card>
            </div>

            {/* Right: visual callout */}
            <div className='lg:col-span-5'>
              <Card className='p-6 h-full'>
                <div className='relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-white'>
                  <SafeImage
                    src='/images/portal-preview.jpg'
                    alt='HOPE TTC IELTS Portal preview'
                    className='h-full w-full object-cover'
                    width={960}
                    height={720}
                    sizes='(max-width:1024px) 100vw, 40vw'
                    preferPlaceholder
                  />
                </div>
                <ul className='mt-5 space-y-2 text-sm text-slate-600'>
                  <li>• Timed mocks with band analytics</li>
                  <li>• Speaking cue-card tracker with voice notes</li>
                  <li>• Writing Task 1/2 libraries and checklists</li>
                </ul>
                <div className='mt-6'>
                  <Link
                    href='/portal'
                    className='inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:opacity-95'
                  >
                    Explore the IELTS Portal
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section className='py-16 md:py-24'>
        <SectionTitle
          eyebrow='Success Stories'
          title='From First Class to Test Day'
          desc='What our learners say after finishing their course and mocks.'
          size='lg'
        />
        <div className='mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-7'>
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className='p-6'>
              <div className='flex items-center gap-3'>
                <SafeImage
                  src={t.img}
                  alt={t.name}
                  className='h-12 w-12 rounded-full object-cover'
                  width={48}
                  height={48}
                  preferPlaceholder
                />
                <div>
                  <div className='text-sm font-semibold'>{t.name}</div>
                  <div className='text-xs text-slate-500'>{t.score}</div>
                </div>
              </div>
              <p className='mt-3 text-sm text-slate-600'>“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ================================= FAQ ================================= */}
      <section className='py-16 md:py-24 bg-[#F2F6F9]'>
        <SectionTitle
          eyebrow='FAQ'
          title='Answers Before You Enroll'
          desc='If you still have questions, message our advisors any time.'
          size='md'
        />
        <div className='mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8 divide-y rounded-3xl border border-slate-200 bg-white'>
          {[
            {
              q: 'Do you offer mock tests?',
              a: 'Yes — weekly IDP-style mocks with band descriptors and detailed feedback.'
            },
            {
              q: 'Can I switch batches?',
              a: 'Absolutely. If your schedule changes, we help you shift to another batch.'
            },
            {
              q: 'Is there a speaking clinic?',
              a: 'Yes — one-to-one sessions focusing on fluency, coherence, and pronunciation.'
            }
          ].map((item, i) => (
            <details key={i} className='group open:bg-transparent'>
              <summary className='cursor-pointer list-none p-5 font-medium flex items-center justify-between'>
                <span>{item.q}</span>
                <span className='text-xl leading-none group-open:rotate-45 transition'>
                  +
                </span>
              </summary>
              <div className='px-5 pb-5 text-sm text-slate-600'>{item.a}</div>
              {i < 2 && <hr className='border-t border-slate-200' />}
            </details>
          ))}
        </div>
      </section>

      {/* ================================= CTA ================================= */}
      <section className='py-16 md:py-24'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <Card className='p-10 md:p-12 text-center'>
            <h3 className='text-3xl md:text-4xl font-extrabold tracking-tight'>
              Ready to start your IELTS journey?
            </h3>
            <p className='mt-4 text-base md:text-lg text-slate-600'>
              Book a free consultation and get your personalized study plan.
            </p>
            <div className='mt-7 flex flex-wrap justify-center gap-3'>
              <Link
                href='/interested/form/combo-ielts-express'
                className='rounded-2xl px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 shadow-sm bg-teal-700'
              >
                Book a Free Call
              </Link>
              <Link
                href='/ielts-dates'
                className='rounded-2xl px-6 py-3.5 text-sm font-semibold border border-teal-200 bg-white hover:bg-teal-50'
              >
                Check Exam Dates
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Soft bottom ribbon */}
      <div className='h-2 w-full bg-linear-to-r from-indigo-200 via-sky-200 to-teal-200' />
    </main>
  )
}
