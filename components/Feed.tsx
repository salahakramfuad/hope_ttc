// app/page.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { faker } from '@faker-js/faker'

/**
 * Enhanced elegant educational landing page
 * Soft color palette with teal/sky/indigo accents
 */

// ---- Faker helpers ----
function seedFromString(s: string) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

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

/* ---------- UI Components ---------- */

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
        <span className='inline-block rounded-full bg-linear-to-r from-teal-50 to-sky-50 border border-teal-200/50 text-teal-700 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-sm'>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-bold tracking-tight leading-tight ${sizeMap[size]} bg-linear-to-r from-teal-700 via-sky-700 to-indigo-700 bg-clip-text text-transparent`}
      >
        {title}
      </h2>
      {desc && (
        <p className='mt-4 text-base md:text-lg text-slate-600 leading-relaxed'>
          {desc}
        </p>
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
      className={`rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}

function SafeImage({
  src,
  alt,
  className,
  width,
  height,
  sizes,
  priority = false,
  preferPlaceholder = false
}: {
  src?: string
  alt: string
  className?: string
  width: number
  height: number
  sizes?: string
  priority?: boolean
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
      placeholder='blur'
      blurDataURL={defaultBlur}
    />
  )
}

function HeroIllustration() {
  return (
    <div className='relative w-full h-full min-h-[400px]'>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatDelayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .float-1 {
          animation: float 3s ease-in-out infinite;
        }
        .float-2 {
          animation: floatDelayed 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Floating cards */}
      <div className='absolute top-8 right-12 float-1'>
        <div className='rounded-xl bg-white shadow-lg p-4 border border-teal-100 max-w-[200px]'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-lg'>
              📚
            </div>
            <span className='text-sm font-semibold text-slate-800'>
              Live Classes
            </span>
          </div>
          <p className='text-xs text-slate-600'>
            Interactive sessions with expert tutors
          </p>
        </div>
      </div>

      <div className='absolute top-32 right-4 float-2'>
        <div className='rounded-xl bg-white shadow-lg p-4 border border-sky-100 max-w-[180px]'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-lg'>
              🎯
            </div>
            <span className='text-sm font-semibold text-slate-800'>
              Mock Tests
            </span>
          </div>
          <p className='text-xs text-slate-600'>Real exam simulation</p>
        </div>
      </div>

      <div className='absolute top-56 right-20 float-1'>
        <div className='rounded-xl bg-white shadow-lg p-4 border border-indigo-100 max-w-[190px]'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-lg'>
              ✈️
            </div>
            <span className='text-sm font-semibold text-slate-800'>
              Study Abroad
            </span>
          </div>
          <p className='text-xs text-slate-600'>Complete guidance & support</p>
        </div>
      </div>

      {/* Central illustration */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <svg viewBox='0 0 400 400' className='w-full h-full max-w-md'>
          <defs>
            <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#0d9488' stopOpacity='0.1' />
              <stop offset='100%' stopColor='#6366f1' stopOpacity='0.1' />
            </linearGradient>
          </defs>

          <circle cx='200' cy='200' r='120' fill='url(#grad1)' />
          <path
            d='M150 160 L150 240 L250 240 L250 160 Z'
            fill='#0d9488'
            opacity='0.2'
          />
          <path
            d='M160 170 L160 230 L240 230 L240 170 Z'
            fill='white'
            stroke='#0d9488'
            strokeWidth='2'
          />
          <line
            x1='200'
            y1='170'
            x2='200'
            y2='230'
            stroke='#0d9488'
            strokeWidth='2'
          />
          <circle cx='280' cy='150' r='8' fill='#0d9488' opacity='0.3' />
          <circle cx='120' cy='180' r='6' fill='#0ea5e9' opacity='0.3' />
          <circle cx='290' cy='250' r='7' fill='#6366f1' opacity='0.3' />
        </svg>
      </div>
    </div>
  )
}

/* ---------- Main Page ---------- */

export default function HomePage() {
  return (
    <main className='bg-linear-to-b from-pink-50 to-purple-50 text-slate-900'>
      {/* Hero Section */}
      <section className='relative overflow-hidden mt-0 bg-pink-100'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))],_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent opacity-70' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent opacity-70' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-sky-50 via-transparent to-transparent opacity-50' />
        </div>

        <div
          className='absolute inset-0 -z-10 opacity-[0.03]'
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column */}
            <div className='space-y-8'>
              <div className='inline-flex items-center gap-2 rounded-full bg-white border border-teal-200/50 px-4 py-2 shadow-sm'>
                <div className='w-2 h-2 rounded-full bg-teal-500 animate-pulse' />
                <span className='text-sm font-medium text-slate-700'>
                  Bangladesh Premier IELTS Institute
                </span>
              </div>

              <div>
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight'>
                  <span className='block bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent'>
                    Build Skills.
                  </span>
                  <span className='block bg-linear-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent mt-2'>
                    Break Barriers.
                  </span>
                  <span className='block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2'>
                    Go Global.
                  </span>
                </h1>

                <p className='mt-6 text-lg md:text-xl text-slate-600 leading-relaxed'>
                  Master{' '}
                  <span className='font-semibold text-teal-700'>
                    Spoken English
                  </span>
                  , ace the{' '}
                  <span className='font-semibold text-sky-700'>IELTS</span>,
                  prepare for{' '}
                  <span className='font-semibold text-indigo-700'>SAT</span>,
                  explore{' '}
                  <span className='font-semibold text-purple-700'>
                    Robotics & BTEC
                  </span>
                  , and achieve your{' '}
                  <span className='font-semibold text-slate-800'>
                    Study Abroad
                  </span>{' '}
                  dreams.
                </p>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Link
                  href='/interested/form/combo-ielts-express'
                  className='group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-linear-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  Book Free Consultation
                  <span className='group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </Link>
                <Link
                  href='/courses'
                  className='inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-teal-300 hover:bg-slate-50 shadow-sm hover:shadow transition-all duration-300'
                >
                  Explore Courses
                </Link>
              </div>

              <div className='grid grid-cols-4 gap-4 pt-4'>
                {HIGHLIGHTS.map((h) => (
                  <div key={h.k} className='text-center'>
                    <div className='text-2xl md:text-3xl font-bold bg-linear-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent'>
                      {h.v}
                    </div>
                    <div className='text-xs text-slate-600 mt-1'>{h.k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className='lg:pl-8'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-br from-teal-100 to-indigo-100 rounded-3xl transform rotate-3 opacity-20' />
                <div className='relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 shadow-2xl p-8'>
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className='py-12 border-y border-slate-200 bg-white/50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60'>
            <div className='text-sm font-semibold text-slate-600'>
              Trusted by 10,000+ Students
            </div>
            <div className='w-px h-8 bg-slate-300' />
            <div className='text-sm font-semibold text-slate-600'>
              IDP Certified
            </div>
            <div className='w-px h-8 bg-slate-300' />
            <div className='text-sm font-semibold text-slate-600'>
              16+ Years Experience
            </div>
            <div className='w-px h-8 bg-slate-300' />
            <div className='text-sm font-semibold text-slate-600'>
              2 Modern Campuses
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className='py-20 md:py-28'>
        <SectionTitle
          eyebrow='Our Programs'
          title='Choose Your Learning Path'
          desc='From absolute beginners to band-8 achievers — discover courses designed for your goals.'
          size='lg'
        />
        <div className='mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {COURSES.map((c) => (
            <Link key={c.title} href={c.href} className='group'>
              <Card className='h-full overflow-hidden'>
                <div className='relative overflow-hidden'>
                  <SafeImage
                    src={c.img}
                    alt={c.title}
                    className='h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    width={400}
                    height={300}
                    sizes='(max-width: 1024px) 100vw, 25vw'
                    preferPlaceholder
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent' />
                  <span className='absolute top-4 left-4 rounded-lg bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-teal-700 shadow-sm'>
                    {c.level}
                  </span>
                </div>
                <div className='p-6'>
                  <h3 className='font-bold text-lg text-slate-900 group-hover:text-teal-700 transition-colors'>
                    {c.title}
                  </h3>
                  <p className='mt-2 text-sm text-slate-600 leading-relaxed'>
                    {c.blurb}
                  </p>
                  <div className='mt-4 text-sm font-semibold text-teal-600 group-hover:text-teal-700 flex items-center gap-1'>
                    Learn more
                    <span className='group-hover:translate-x-1 transition-transform'>
                      →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className='py-20 md:py-28 bg-linear-to-b from-slate-50 to-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            eyebrow='Why Choose Us'
            title='Excellence in Every Detail'
            desc='Real-world practice, personalized feedback, and proven methodologies for your success.'
            size='lg'
          />
          <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {FEATURES.map((f) => (
              <Card
                key={f.title}
                className='p-7 hover:border-teal-200 transition-colors'
              >
                <div className='h-14 w-14 rounded-2xl bg-linear-to-br from-teal-50 to-sky-50 border border-teal-100 flex items-center justify-center text-2xl shadow-sm'>
                  {f.icon}
                </div>
                <h3 className='mt-5 font-bold text-lg text-slate-900'>
                  {f.title}
                </h3>
                <p className='mt-3 text-sm text-slate-600 leading-relaxed'>
                  {f.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why HOPE TTC */}
      <section className='py-20 md:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-b from-white via-teal-50/30 to-white -z-10' />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            eyebrow='What Sets Us Apart'
            title='The HOPE TTC Advantage'
            desc='Advanced technology meets personalized attention for exceptional IELTS results.'
            size='xl'
          />

          <div className='mt-20 grid gap-10 lg:grid-cols-2'>
            <div className='space-y-6'>
              <Card className='p-8 hover:shadow-xl transition-shadow'>
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-xl'>
                    📊
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      Personalized Progress Tracking
                    </h3>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      Real-time dashboards visualizing your journey across all
                      four skills with weekly milestones and expert feedback.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='p-8 hover:shadow-xl transition-shadow'>
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-xl'>
                    🤖
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      AI-Powered Assessments
                    </h3>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      Instant analytics on grammar, coherence, and vocabulary
                      aligned with official band descriptors.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='p-8 hover:shadow-xl transition-shadow'>
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl'>
                    🌐
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      Exclusive IELTS Portal
                    </h3>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      24/7 access to mocks, model answers, cue-card banks, and
                      personalized study materials.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className='lg:pl-8'>
              <Card className='p-8 h-full bg-linear-to-br from-teal-50 to-sky-50 border-teal-200/50'>
                <div className='aspect-video rounded-xl overflow-hidden border border-white/60 shadow-lg mb-6'>
                  <SafeImage
                    src='/images/portal-preview.jpg'
                    alt='HOPE TTC IELTS Portal'
                    className='w-full h-full object-cover'
                    width={600}
                    height={400}
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    preferPlaceholder
                  />
                </div>
                <h3 className='text-xl font-bold mb-4'>
                  Your Complete IELTS Command Center
                </h3>
                <ul className='space-y-3 text-sm text-slate-700'>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Timed mock tests
                    with instant band analytics
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Speaking practice
                    with AI feedback & voice recording
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Writing Task 1 & 2
                    model libraries
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Progress tracking
                    across all four skills
                  </li>
                </ul>
                <div className='mt-8'>
                  <Link
                    href='/portal'
                    className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-teal-600 to-sky-600 hover:shadow-lg transition-all'
                  >
                    Explore Portal
                    <span>→</span>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 md:py-28'>
        <SectionTitle
          eyebrow='Student Success'
          title='Real Results, Real Stories'
          desc='Hear from students who achieved their dream scores with HOPE TTC.'
          size='lg'
        />
        <div className='mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6'>
          {TESTIMONIALS.map((t) => (
            <Card
              key={t.name}
              className='p-8 hover:shadow-xl transition-shadow'
            >
              <div className='flex items-center gap-4 mb-4'>
                <SafeImage
                  src={t.img}
                  alt={t.name}
                  className='h-14 w-14 rounded-full object-cover ring-2 ring-teal-100'
                  width={56}
                  height={56}
                  preferPlaceholder
                />
                <div>
                  <div className='font-bold text-slate-900'>{t.name}</div>
                  <div className='text-sm font-semibold text-teal-600'>
                    {t.score}
                  </div>
                </div>
              </div>
              <p className='text-sm text-slate-600 leading-relaxed italic'>
                {t.quote}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20 md:py-28 bg-linear-to-b from-slate-50 to-white'>
        <SectionTitle
          eyebrow='Common Questions'
          title='Everything You Need to Know'
          desc='Still have questions? Our advisors are here to help anytime.'
          size='md'
        />
        <div className='mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8'>
          <div className='divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden'>
            {[
              {
                q: 'Do you offer mock tests?',
                a: 'Yes — weekly IDP-style mocks with band descriptors and detailed feedback from certified examiners.'
              },
              {
                q: 'Can I switch batches?',
                a: 'Absolutely. If your schedule changes, we help you shift to another batch with no additional fees.'
              },
              {
                q: 'Is there a speaking clinic?',
                a: 'Yes — personalized one-to-one sessions focusing on fluency, coherence, pronunciation, and confidence building.'
              },
              {
                q: 'Do you provide study abroad support?',
                a: 'Yes — from shortlisting to applications, SOPs, and visa guidance via our Study Abroad Desk.'
              },
              {
                q: 'Are classes available online?',
                a: 'We run both on-campus and live online cohorts. Choose what suits your routine best.'
              }
            ].map((item, i) => (
              <details key={i} className='group'>
                <summary className='cursor-pointer list-none p-6 font-semibold flex items-center justify-between hover:bg-slate-50 transition-colors'>
                  <span className='text-slate-900'>{item.q}</span>
                  <span className='text-2xl text-teal-600 leading-none group-open:rotate-45 transition-transform duration-300'>
                    +
                  </span>
                </summary>
                <div className='px-6 pb-6 text-sm text-slate-600 leading-relaxed'>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className='py-20 md:py-28'>
        <SectionTitle
          eyebrow='Visit Us'
          title='Modern Campuses in Dhaka'
          desc='Bright classrooms, speaking labs, and dedicated mock centers.'
          size='lg'
        />
        <div className='mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6'>
          {[
            {
              name: 'Uttara Campus',
              addr: 'Plot 7, Road 6, Sector 4, Uttara, Dhaka',
              imgAlt: 'Uttara Campus',
              img: '/images/campus-uttara.jpg'
            },
            {
              name: 'Dhanmondi Campus',
              addr: 'House 12, Road 5, Dhanmondi, Dhaka',
              imgAlt: 'Dhanmondi Campus',
              img: '/images/campus-dhanmondi.jpg'
            }
          ].map((c) => (
            <Card key={c.name} className='overflow-hidden'>
              <div className='aspect-video'>
                <SafeImage
                  src={c.img}
                  alt={c.imgAlt}
                  className='w-full h-full object-cover'
                  width={800}
                  height={450}
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  preferPlaceholder
                />
              </div>
              <div className='p-6'>
                <h3 className='font-bold text-lg text-slate-900'>{c.name}</h3>
                <p className='mt-1 text-sm text-slate-600'>{c.addr}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className='py-16'>
        <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
          <div className='rounded-3xl border border-teal-200/50 bg-linear-to-r from-teal-50 to-sky-50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-slate-900'>
                Ready to aim for Band 7+?
              </h3>
              <p className='mt-2 text-slate-700'>
                Get a personalized study plan and a free diagnostic in your
                first session.
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                href='/apply'
                className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-teal-600 to-sky-600 shadow hover:shadow-md transition-all'
              >
                Apply Now
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-teal-700 bg-white border border-teal-200 hover:bg-teal-50'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
