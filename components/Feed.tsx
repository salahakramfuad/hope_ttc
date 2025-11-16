// app/page.tsx
'use client'
import Image from 'next/image'

import React from 'react'
import { faker } from '@faker-js/faker'
import HeroIllustration from './fun/animatedcard'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

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
    title: 'Spoken English',
    level: 'All Levels',
    blurb: 'Fluency drills, pronunciation labs, and real-life roleplays.',
    href: '/courses/spokenenglish',
    img: '/images/spoken-english.jpg'
  },

  // New: IELTS (general complete program)
  {
    title: 'IELTS Complete',
    level: 'For All',
    blurb:
      'All four modules with section-wise strategies and weekly mock tests.',
    href: '/courses/ielts',
    img: '/images/ielts-complete.jpg'
  },

  // New: SAT
  {
    title: 'SAT Accelerator',
    level: 'Hsc, A level',
    blurb: 'Math + Evidence-Based Reading & Writing with exam-style drills.',
    href: '/courses/sat',
    img: '/images/sat-accelerator.jpg'
  },

  // New: BTECH
  {
    title: 'BTECH Foundation',
    level: 'Coming Soon',
    blurb: 'Core math, physics, and problem-solving for BTECH admissions.',
    href: '/courses/btech',
    img: '/images/btech-foundation.jpg'
  },

  // New: Robotics
  {
    title: 'Robotics & STEM Lab',
    level: 'Junior–Senior',
    blurb: 'Hands-on projects with sensors, coding, and simple robots.',
    href: '/courses/robotics',
    img: '/images/robotics-stem-lab.jpg'
  }
]

const FEATURES = [
  {
    title: 'IDP-Aligned Mock Center',
    desc: 'Full-length computer-delivered mocks with band-style grading, answer review, and progress tracking after every attempt.',
    icon: '🎯'
  },
  {
    title: 'Small, Laser-Focused Cohorts',
    desc: 'Only 8–15 learners per batch so teachers can track each learner’s gaps, homework, and speaking/writing improvement personally.',
    icon: '👥'
  },
  {
    title: 'Speaking & Interview Clinics',
    desc: '1:1 feedback with trainers, accent and fluency coaching, cue-card drills, and simulated test-day interviews.',
    icon: '🎤'
  },
  {
    title: 'Study Abroad & Visa Desk',
    desc: 'Shortlist programs, prepare SOPs and CVs, organize documents, and track university applications from one desk.',
    icon: '✈️'
  },
  {
    title: 'Official Test-Prep Ecosystem',
    desc: 'Dedicated labs, quiet exam-style rooms, and test-day walkthroughs designed to mirror real IELTS, SAT, MET, and OET conditions.',
    icon: '🏛️'
  },
  {
    title: 'Adaptive Study Plans',
    desc: 'Diagnostic test, gap analysis, and weekly study plans so busy students and professionals know exactly what to do each day.',
    icon: '📅'
  },
  {
    title: 'Result-Focused Writing Support',
    desc: 'Task 1 & 2 templates, model answers, and line-by-line feedback on your scripts until you consistently hit your target band/score.',
    icon: '✍️'
  },
  {
    title: 'Always-On Support',
    desc: 'WhatsApp doubt-clearing, extra practice sets, and last-week revision help so you never feel stuck studying alone.',
    icon: '🤝'
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

/* ---------- Main Page ---------- */

export default function HomePage() {
  return (
    <main className='bg-linear-to-b  from-pink-50 to-purple-50 text-slate-900'>
      {/* Hero Section */}
      <section className='relative isolate overflow-hidden  mt-0'>
        {/* Content wrapper: fill remaining viewport after nav and center */}
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  flex items-center  -mt-[40px]  md:py-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center w-full'>
            {/* Left Column */}
            <div className='space-y-8'>
              <div className='inline-flex items-center gap-2 rounded-full bg-white/90 border border-teal-200/60 px-4 py-2 shadow-sm'>
                <span className='w-2 h-2 rounded-full bg-teal-500 animate-pulse' />
                <span className='text-sm font-medium text-slate-700'>
                  Bangladesh&apos;s Premier IELTS Institute
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
                    Robotics &amp; BTEC
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
                  href='/getEnrolled'
                  className='group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-linear-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 shadow-lg hover:shadow-xl transition-all duration-300'
                  aria-label='Book a free consultation'
                >
                  Enroll Now
                  <span className='transition-transform group-hover:translate-x-1'>
                    →
                  </span>
                </Link>

                <Link
                  href='#courses'
                  className='inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-teal-300 hover:bg-slate-50 shadow-sm hover:shadow transition-all duration-300'
                  aria-label='Explore courses'
                >
                  Explore Courses
                </Link>
              </div>

              {/* Highlights (kept your mapping) */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2'>
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
            <div className='hidden lg:block lg:pl-8'>
              <div className='relative'>
                <div className='absolute inset-0 bg-linear-to-br from-violet-500 to-indigo-100 rounded-3xl rotate-3 opacity-20' />
                <div className='relative bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 shadow-2xl p-6 sm:p-8'>
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
              2 Modern Campuses
            </div>
            <div className='w-px h-8 bg-slate-300' />
            <div className='text-sm font-semibold text-slate-600 text-center'>
              Proud exam centre for IELTS, SAT, MET &amp; OET
            </div>
          </div>
        </div>
      </section>
      {/* Courses */}
      <section className='py-20 md:py-28' id='courses'>
        <SectionTitle
          eyebrow='Our Programs'
          title='Choose Your Learning Path'
          desc='Discover courses designed for your goals.'
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
      <section className='py-20 md:py-28 bg-linear-to-b from-slate-50 via-white to-slate-50/60'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            eyebrow='Why Choose Us'
            title='Excellence in Every Detail'
            desc='From test registration to result day, we guide you with real exam experience, structured practice, and personal coaching.'
            size='lg'
          />

          <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {FEATURES.map((f) => (
              <Card
                key={f.title}
                className='group relative h-full rounded-2xl border border-slate-100/80 bg-white/80 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]'
              >
                {/* Soft glow */}
                <div className='pointer-events-none absolute inset-x-4 -top-4 h-8 rounded-full bg-emerald-100/40 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100' />

                <div className='h-14 w-14 rounded-2xl bg-linear-to-br from-emerald-50 to-sky-50 border border-emerald-100 flex items-center justify-center text-2xl shadow-sm'>
                  {f.icon}
                </div>
                <h3 className='mt-5 font-semibold text-lg text-slate-900'>
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
            desc='Advanced technology meets personalized attention for exceptional test results at every level.'
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
                      four skills with weekly milestones, expert feedback, and
                      clear band / score targets for IELTS, SAT, MET, and OET.
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
                      Instant analytics on grammar, coherence, vocabulary, and
                      timing aligned with official descriptors—so you know
                      exactly why your band or score is where it is, and how to
                      move it up.
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
                      Exclusive IELTS & Test Portal
                    </h3>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      24/7 access to mocks, model answers, cue-card banks,
                      SAT-style practice sets, MET/OET resources, and
                      personalized study materials in one secure portal.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='p-8 hover:shadow-xl transition-shadow'>
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-xl'>
                    🏛️
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      Exam-Style Labs & Test-Day Support
                    </h3>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      Dedicated computer labs, quiet exam rooms, registration
                      support, and test-day walkthroughs designed to mirror the
                      real IELTS, SAT, MET, and OET experience.
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
                    alt='HOPE TTC IELTS & Test Portal'
                    className='w-full h-full object-cover'
                    width={600}
                    height={400}
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    preferPlaceholder
                  />
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Your Complete Test Command Center
                </h3>
                <p className='text-sm text-slate-600 mb-4'>
                  One portal for everything: practice, analytics, and official
                  exam support for IELTS, SAT, MET, and OET—built for busy
                  students and professionals.
                </p>
                <ul className='space-y-3 text-sm text-slate-700'>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Timed mock tests
                    with instant band / score analytics
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Speaking practice
                    with AI feedback & voice recording
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Writing Task
                    libraries, SAT essays & MET/OET writing samples
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-teal-600'>✓</span> Progress tracking
                    across all four skills and all test formats
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
      {/* Exam Centre Highlight */}
      <section className='relative py-20 md:py-28'>
        {/* soft background frame */}
        <div className='pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-sky-50/70 via-white to-slate-50' />
        <div
          className='pointer-events-none absolute inset-x-6 inset-y-10 -z-10 rounded-3xl border border-slate-200/60 bg-white/40 shadow-[0_24px_80px_rgba(15,23,42,0.10)]'
          aria-hidden='true'
        />

        <SectionTitle
          eyebrow='Official Exam Centre'
          title='Proud Test Centre for Global Exams'
          desc='We are an authorized exam centre for leading international tests in Dhaka.'
          size='lg'
        />

        <div className='mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {[
              {
                slug: 'ielts',
                code: 'IELTS',
                label: 'IELTS Academic & General',
                desc: 'High-stakes English test for study, work and migration worldwide.',
                img: '/images/exams/ielts.png',
                imgAlt: 'IELTS logo',
                link: 'https://ielts.org/'
              },
              {
                slug: 'sat',
                code: 'SAT',
                label: 'SAT Digital',
                desc: 'Essential for undergraduate admissions and scholarships abroad.',
                img: '/images/exams/sat.png',
                imgAlt: 'SAT logo',
                link: 'https://satsuite.collegeboard.org/sat'
              },
              {
                slug: 'met',
                code: 'MET',
                label: 'Michigan English Test (MET)',
                desc: 'Flexible English proficiency test trusted by universities and employers.',
                img: '/images/exams/met.png',
                imgAlt: 'MET logo',
                link: 'https://michiganassessment.org/michigan-tests/met-new/'
              },
              {
                slug: 'oet',
                code: 'OET',
                label: 'OET for Healthcare',
                desc: 'English test tailored for doctors, nurses, and healthcare professionals.',
                img: '/images/exams/oet.png',
                imgAlt: 'OET logo',
                link: 'https://oet.com/'
              }
            ].map((exam) => (
              <Card
                key={exam.slug}
                className='group relative h-full overflow-hidden border border-slate-200/80 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-xl focus-within:ring-2 focus-within:ring-sky-400/70'
              >
                <Link href={exam.link} className='flex h-full flex-col'>
                  {/* Top: full logo area */}
                  <div className='flex h-24 items-center justify-center bg-white'>
                    <Image
                      src={exam.img}
                      alt={exam.imgAlt}
                      width={180}
                      height={72}
                      className='object-contain max-h-16 w-auto'
                    />
                  </div>

                  {/* Body */}
                  <div className='flex flex-1 flex-col p-5'>
                    <div className='mb-2 inline-flex items-center gap-2'>
                      <span className='inline-flex h-7 min-w-10 items-center justify-center rounded-full bg-sky-50 px-3 text-[11px] font-semibold tracking-wide text-sky-700 ring-1 ring-sky-100'>
                        {exam.code}
                      </span>
                      <span className='text-sm font-semibold text-slate-900'>
                        {exam.label}
                      </span>
                    </div>

                    <p className='flex-1 text-sm text-slate-600'>{exam.desc}</p>

                    <div className='mt-4 inline-flex items-center text-sm font-medium text-sky-700'>
                      <span className='relative'>
                        Learn more
                        <span className='absolute inset-x-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-sky-500 transition group-hover:scale-x-100' />
                      </span>
                      <span className='ml-1 transition-transform group-hover:translate-x-0.5'>
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          <p className='mt-6 text-center text-xs text-slate-500'>
            We are proud to serve as an official exam centre for IELTS, SAT, MET
            and OET in Dhaka.
          </p>
        </div>
      </section>
    </main>
  )
}
