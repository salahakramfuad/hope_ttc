// app/spoken/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

/** Brand – aligned with IELTS page */
const brand = {
  primary: '#9C27B0',
  ink: '#11181C',
  surface: '#F7F9FA',
  border: 'rgba(0,0,0,0.12)',
  muted: '#6B7280'
}

export const metadata: Metadata = {
  title: 'Spoken English & Phonetics | Hope TTC',
  description:
    'Spoken English & Phonetics at Hope TTC — practical fluency, pronunciation, and real-life speaking practice with language club support.',
  alternates: { canonical: '/spoken' },
  openGraph: {
    title: 'Spoken English & Phonetics | Hope TTC',
    description:
      'Practical Spoken English & Phonetics with language club, online batches, and structured practice for study, work, and everyday life.',
    type: 'website',
    url: '/spoken'
  }
}

type PlanName = 'Crash' | 'Regular' | 'Executive'

type Plan = {
  name: PlanName
  price: string
  bullets: string[]
  highlight?: boolean
}

const highlights = [
  {
    label: 'Duration',
    value: '2 Months (8 Weeks)',
    desc: 'A structured journey from basics to confident speaking.'
  },
  {
    label: 'Structure',
    value: '22 Classes · 2 Exams',
    desc: 'Continuous assessment to track, correct, and improve.'
  },
  {
    label: 'Mode',
    value: 'Offline & Online',
    desc: 'On-campus or online, both with language-club style practice.'
  }
] as const

const classPractise: [string, string][] = [
  [
    'Impromptu Speeches',
    'Think fast, organise your thoughts, and speak without memorising.'
  ],
  [
    'Topic-based Presentations',
    'Prepare and deliver short talks on everyday and academic topics.'
  ],
  [
    'Live News Reporting',
    'Report current events to practise clear, confident delivery.'
  ],
  [
    'Everyday Conversation Phrases',
    'Useful expressions for daily life, travel, and small talk.'
  ],
  [
    'Debates & Talk-show Role-plays',
    'Build arguments, respond on the spot, and manage turn-taking.'
  ],
  [
    'Interview Skills & Listening Drills',
    'Do’s & don’ts of interviews plus IELTS-style listening practice.'
  ]
]

const packages = [
  {
    title: 'Offline / On-Campus',
    bullets: [
      'Course Duration: 2 months (8 weeks)',
      '22 classes with 2 formal exams',
      '2 hours per class (3 days a week)',
      'Access to Language Club (limited time)'
    ]
  },
  {
    title: 'Online Live Batch',
    bullets: [
      'Course Duration: 2 months (8 weeks)',
      '22 live classes with 2 exams',
      '2 hours per class (3 days a week)',
      'Access to Online Language Club (limited time)'
    ]
  }
] as const

const plans: Plan[] = [
  {
    name: 'Crash',
    price: '9,500 ৳',
    bullets: [
      '1.5 months, including mocks',
      '4 days/week · 16 classes',
      '10 mock speaking tasks',
      'Extra fluency & pronunciation drills'
    ]
  },
  {
    name: 'Regular',
    price: '13,800 ৳',
    highlight: true,
    bullets: [
      '3.5 months, including mocks',
      '3 days/week · 30 classes',
      'Balanced practice for study, work & life',
      'Full Spoken English & Phonetics syllabus'
    ]
  },
  {
    name: 'Executive',
    price: '13,800 ৳',
    bullets: [
      '3.5 months, including mocks',
      '2 days/week (Fri & Sat) · 30 classes',
      'Designed for busy professionals',
      'Extra focus on meetings & presentations'
    ]
  }
]

export default function SpokenEnglishPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section aria-labelledby='spoken-hero' className='relative isolate'>
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop'
            alt='Students practising spoken English in a modern classroom'
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/45' />
          <div
            className='pointer-events-none absolute -top-24 right-[-20%] h-[420px] w-[420px] rounded-full blur-3xl'
            style={{ background: 'rgba(156,39,176,0.25)' }}
            aria-hidden
          />
        </div>

        <div className='mx-auto max-w-6xl px-6 pt-20 pb-14 text-white'>
          <div className='max-w-3xl'>
            <h1
              id='spoken-hero'
              className='text-4xl md:text-5xl font-semibold tracking-tight'
            >
              Spoken English &amp; Phonetics at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              A practical, outcomes-driven course for real fluency, clear
              pronunciation, and everyday confidence. Learn through
              conversation, role-plays, and language-club style practice— guided
              by expert instructors.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link
                href='/getEnrolled'
                className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white'
                style={{ backgroundColor: brand.primary }}
              >
                Enroll Now
              </Link>
              <Link
                href='#pricing'
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        id='who'
        aria-labelledby='spoken-who'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='spoken-who'
          title='Who is this for?'
          subtitle='Learners who want to finally start speaking, not just studying grammar.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='Students & Job-seekers'
            img='https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Weak basics but want clear, confident speech',
              'Presentations, viva & interview support',
              'Fluency for campus and early career'
            ]}
          />
          <InfoCard
            title='Professionals & Migrants'
            img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Meetings, calls, and email tone',
              'Strong pronunciation & listener-friendly pacing',
              'Confidence in international settings'
            ]}
          />
          <InfoCard
            title='Shy & Hesitant Speakers'
            img='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Safe, supportive speaking environment',
              'Language-club style activities',
              'Step-by-step guidance with feedback'
            ]}
          />
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section
        id='overview'
        aria-labelledby='spoken-glance'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header id='spoken-glance' title='Course at a glance' />
        <div className='grid gap-6 md:grid-cols-3'>
          {highlights.map((h) => (
            <article
              key={h.label}
              className='rounded-2xl border bg-white p-5'
              style={{ borderColor: brand.border }}
            >
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-gray-500'>
                {h.label}
              </p>
              <p className='mt-1 text-xl font-semibold text-gray-900'>
                {h.value}
              </p>
              <p className='mt-2 text-sm text-gray-700'>{h.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* LANGUAGE CLUB & ONLINE */}
      <section
        id='beyond'
        aria-labelledby='spoken-beyond'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header id='spoken-beyond' title='Beyond the classroom' />
        <div className='grid gap-6 md:grid-cols-2'>
          <SplitCard
            title='Language Club Experience'
            badge='Included for a limited time'
            img='https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
          >
            <p className='text-sm text-gray-700'>
              Our Language Club offers a relaxed but guided environment where
              students practise English beyond the classroom. Sessions are
              monitored by trained instructors so you can experiment with
              language while staying on track.
            </p>
            <ul className='mt-3 space-y-2 text-sm text-gray-700'>
              <li>• Safe space to practise speaking freely</li>
              <li>• Group discussions, games, and mini-presentations</li>
              <li>
                • Available across branches / batches with scheduled slots
              </li>
              <li>
                • Spoken English &amp; Phonetics students enjoy limited-time
                access
              </li>
            </ul>
          </SplitCard>

          <SplitCard
            title='Online Spoken English'
            badge='Live & interactive'
            img='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
          >
            <p className='text-sm text-gray-700'>
              Can’t attend physically? Join our live online batch. Get the same
              Spoken English &amp; Phonetics curriculum with digital tools that
              keep you active and engaged.
            </p>
            <ul className='mt-3 space-y-2 text-sm text-gray-700'>
              <li>• Live classes with breakout activities</li>
              <li>• Interactive exercises and listening drills</li>
              <li>• Access to Online Language Club for a limited period</li>
              <li>• Learn from wherever you are—no commute</li>
            </ul>
          </SplitCard>
        </div>
      </section>

      {/* WHAT YOU'LL PRACTISE */}
      <section
        id='practice'
        aria-labelledby='spoken-practice'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='spoken-practice'
          title="What you'll practise in class"
          subtitle='Speaking tasks, phonetics training, and real-life communication drills.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {classPractise.map(([title, desc]) => (
            <article
              key={title}
              className='rounded-2xl border bg-white p-5'
              style={{ borderColor: brand.border }}
            >
              <h3 className='text-sm font-semibold text-gray-900'>{title}</h3>
              <p className='mt-2 text-xs text-gray-700'>{desc}</p>
            </article>
          ))}
        </div>
        <div
          className='mt-6 rounded-2xl border bg-white p-5 text-sm'
          style={{ borderColor: brand.border }}
        >
          <p className='text-gray-700'>
            You&apos;ll also explore phonetics topics like the 44 IPA sounds,
            word stress, sentence stress, connected speech, and building rapport
            in English.
          </p>
        </div>
      </section>

      {/* WHY HOPE TTC */}
      <section
        id='why'
        aria-labelledby='spoken-why'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header id='spoken-why' title='Why Hope TTC for Spoken English?' />
        <div className='grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start'>
          <div>
            <ul className='space-y-3 text-sm text-gray-700'>
              <li>
                • Clear learning roadmap with lecture sheets and practice clubs.
              </li>
              <li>
                • Experienced instructors with strong English language
                backgrounds.
              </li>
              <li>• Regular assessment and personalised feedback.</li>
              <li>
                • Free or discounted access to language club sessions for a
                limited time.
              </li>
              <li>
                • Guidance for students aiming at IELTS and study abroad
                pathways.
              </li>
            </ul>
          </div>
          <div
            className='rounded-2xl border bg-white p-6'
            style={{ borderColor: brand.border }}
          >
            <h3 className='text-lg font-semibold text-gray-900'>
              Extra learning support
            </h3>
            <p className='mt-2 text-sm text-gray-700'>
              Depending on your batch, you may receive access to:
            </p>
            <ul className='mt-3 space-y-2 text-xs text-gray-700'>
              <li>• Resume &amp; email writing resources</li>
              <li>• Vocabulary and pronunciation booster materials</li>
              <li>• Recorded support lessons (where available)</li>
              <li>• Curated spoken English practice resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        id='packages'
        aria-labelledby='spoken-packages'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='spoken-packages'
          title='Available packages'
          subtitle='Same core curriculum, different delivery formats.'
        />
        <div className='grid gap-6 md:grid-cols-2'>
          {packages.map((pkg) => (
            <MiniPackageCard
              key={pkg.title}
              title={pkg.title}
              bullets={pkg.bullets}
            />
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id='pricing'
        aria-labelledby='spoken-pricing'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='spoken-pricing'
          title='Pricing'
          subtitle='Flexible options for different schedules.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <Link
            href='/get-enrolled'
            className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white'
            style={{ backgroundColor: brand.primary }}
          >
            Enroll or Ask a Question
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section
        id='faq'
        aria-labelledby='spoken-faq'
        className='mx-auto max-w-6xl px-6 pb-16'
      >
        <Header id='spoken-faq' title='Frequently asked questions' />
        <div
          className='overflow-hidden rounded-2xl border bg-white'
          style={{ borderColor: brand.border }}
        >
          {[
            {
              q: 'How is this different from traditional grammar classes?',
              a: 'We focus on speaking, pronunciation, and real communication tasks. Grammar is taught in context so you can use it while talking, not just in written exercises.'
            },
            {
              q: 'What if my English is very basic?',
              a: 'The course is designed to support learners with weak foundations. The teacher will guide you step by step, and activities are scaffolded so you can gradually move from simple phrases to longer speech.'
            },
            {
              q: 'Will I get a certificate?',
              a: 'Yes. Students who attend regularly and complete the course assessment will receive a Spoken English & Phonetics certificate from Hope TTC.'
            }
          ].map((f, i) => (
            <details
              key={f.q}
              className={`group border-t first:border-t-0 ${
                i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
              }`}
              style={{ borderColor: brand.border }}
            >
              <summary className='flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium'>
                <span>{f.q}</span>
                <span className='text-xl leading-none text-gray-500 transition-transform group-open:rotate-45'>
                  +
                </span>
              </summary>
              <div className='px-5 pb-4 text-sm text-gray-700'>{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}

/* ---------- Reusable UI bits (mirroring IELTS page style) ---------- */

function Header({
  id,
  title,
  subtitle
}: {
  id?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className='mb-6'>
      <h2
        id={id}
        className='text-2xl md:text-3xl font-semibold tracking-tight'
        style={{ color: brand.primary }}
      >
        {title}
      </h2>
      {subtitle && <p className='mt-1 text-gray-600'>{subtitle}</p>}
    </div>
  )
}

function InfoCard({
  title,
  img,
  points
}: {
  title: string
  img: string
  points: string[]
}) {
  return (
    <article
      className='overflow-hidden rounded-2xl border bg-white'
      style={{ borderColor: brand.border }}
    >
      <div className='relative h-40 w-full'>
        <Image
          src={img}
          alt={title}
          fill
          sizes='(min-width: 1024px) 33vw, 100vw'
          className='object-cover'
        />
      </div>
      <div className='p-5'>
        <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
          {title}
        </h3>
        <ul className='mt-3 space-y-2 text-gray-700'>
          {points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function SplitCard({
  title,
  badge,
  img,
  children
}: {
  title: string
  badge: string
  img: string
  children: React.ReactNode
}) {
  return (
    <article
      className='grid overflow-hidden rounded-2xl border bg-white md:grid-cols-2'
      style={{ borderColor: brand.border }}
    >
      <div className='relative h-48 w-full md:h-auto'>
        <Image
          src={img}
          alt={title}
          fill
          sizes='(min-width: 1024px) 50vw, 100vw'
          className='object-cover'
        />
      </div>
      <div className='p-6'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
            {title}
          </h3>
          <span
            className='rounded-full px-3 py-1 text-xs'
            style={{
              backgroundColor: brand.surface,
              border: `1px solid ${brand.border}`,
              color: brand.ink
            }}
          >
            {badge}
          </span>
        </div>
        <div className='mt-4'>{children}</div>
      </div>
    </article>
  )
}

function MiniPackageCard({
  title,
  bullets
}: {
  title: string
  bullets: readonly string[]
}) {
  return (
    <article
      className='rounded-2xl border bg-white p-6'
      style={{ borderColor: brand.border }}
    >
      <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
        {title}
      </h3>
      <ul className='mt-3 space-y-2 text-sm text-gray-700'>
        {bullets.map((b) => (
          <li key={b} className='flex gap-2'>
            <span className='mt-[3px] h-1.5 w-1.5 rounded-full bg-purple-500' />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const isHL = plan.highlight
  return (
    <article
      className={`rounded-2xl border p-6 transition ${
        isHL ? 'md:scale-[1.02]' : ''
      }`}
      style={{
        borderColor: brand.border,
        backgroundColor: isHL ? brand.primary : '#FFFFFF',
        color: isHL ? '#FFFFFF' : brand.ink
      }}
    >
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{plan.name}</h3>
        <div
          className='rounded-xl px-3 py-1 text-sm'
          style={{
            backgroundColor: isHL ? 'rgba(255,255,255,0.15)' : brand.surface,
            border: `1px solid ${brand.border}`
          }}
        >
          {isHL ? 'Most Popular' : '—'}
        </div>
      </div>

      <div className='mt-4 text-3xl font-semibold'>{plan.price}</div>
      <ul className='mt-5 space-y-2 text-sm'>
        {plan.bullets.map((b) => (
          <li key={b} className='flex gap-2'>
            <span aria-hidden>✓</span>
            <span className={isHL ? 'text-white/90' : 'text-gray-700'}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
