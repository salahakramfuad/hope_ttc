// app/web-development/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const brand = {
  primary: '#9C27B0',
  ink: '#11181C',
  surface: '#F7F9FA',
  border: 'rgba(0,0,0,0.12)',
  muted: '#6B7280'
}

export const metadata: Metadata = {
  title: 'Web Development | Hope TTC',
  description:
    'Modern web development at Hope TTC — HTML, CSS, JavaScript, React, Next.js, APIs, databases, and deployment with real portfolio projects.',
  alternates: { canonical: '/web-development' },
  openGraph: {
    title: 'Web Development | Hope TTC',
    description:
      'Learn modern web development: responsive design, React, Next.js, APIs, databases, and deployment — with portfolio-ready projects.',
    type: 'website',
    url: '/web-development'
  }
}

type Track = {
  title: string
  tag: string
  bullets: string[]
  glow: string
}

type Plan = {
  name: string
  price: string
  bullets: string[]
  highlight?: boolean
}

const tracks: Track[] = [
  {
    title: 'Web Foundations',
    tag: 'Beginner',
    bullets: [
      'HTML5, CSS3 & responsive layouts',
      'Basic JavaScript & DOM',
      'From static pages to simple sites'
    ],
    glow: brand.primary
  },
  {
    title: 'Frontend Developer',
    tag: 'Intermediate',
    bullets: [
      'Modern JavaScript (ES6+)',
      'React & component thinking',
      'Next.js, routing & API routes (intro)'
    ],
    glow: '#8B5CF6'
  },
  {
    title: 'Fullstack & Deployment',
    tag: 'Advanced',
    bullets: [
      'Node.js & simple REST APIs',
      'Databases & auth (intro)',
      'Deploy to Vercel / cloud platforms'
    ],
    glow: '#EC4899'
  }
]

const curriculum = [
  {
    title: 'Web Fundamentals',
    items: [
      'HTML structure, semantics & accessibility basics',
      'CSS layout (Flexbox, Grid) & responsive design',
      'Basic JavaScript, DOM & events'
    ]
  },
  {
    title: 'Modern Frontend',
    items: [
      'ES6+ features (let/const, arrow functions, modules)',
      'React components, props & state',
      'Next.js pages, layouts & data fetching (intro)'
    ]
  },
  {
    title: 'Backend & APIs',
    items: [
      'HTTP, JSON & REST APIs',
      'Node.js & Express (or similar)',
      'Working with simple databases (Firebase / Supabase / Mongo intro)'
    ]
  },
  {
    title: 'Deployment & Portfolio',
    items: [
      'Git & GitHub for collaboration',
      'Deploying with Vercel / Netlify',
      'Building & presenting a web dev portfolio'
    ]
  }
] as const

const tools = [
  'HTML5 & CSS3',
  'JavaScript (ES6+)',
  'TypeScript (intro)',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js & Express (intro)',
  'Git & GitHub',
  'VS Code',
  'REST APIs & Postman',
  'Firebase / Supabase (intro)',
  'Vercel / Netlify deployment',
  'Figma (basic handoff)'
] as const

const plans: Plan[] = [
  {
    name: 'Starter Web Dev',
    price: '8,500 ৳',
    bullets: [
      '8-week foundations track',
      '2 days/week · 90 mins per class',
      '1 basic responsive website project',
      'HTML, CSS & basic JavaScript'
    ]
  },
  {
    name: 'Core Web Developer',
    price: '13,900 ৳',
    highlight: true,
    bullets: [
      '12-week full track (Foundations + Frontend)',
      '3 days/week · 2 hours per class',
      '2 portfolio projects (landing page + React app)',
      'Version control & deployment to Vercel'
    ]
  },
  {
    name: 'Fullstack Web & Deployment',
    price: '18,200 ৳',
    bullets: [
      '16-week extended track (incl. backend)',
      '3 days/week · 2 hours per class',
      'Fullstack project with API & database',
      'Mentoring for internship/job-ready portfolio'
    ]
  }
]

export default function WebDevelopmentPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section aria-labelledby='webDev-hero' className='relative isolate'>
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='/images/web-dev.jpg'
            alt='Web development course background'
            fill
            priority
            className='object-cover'
            style={{ objectPosition: 'center' }}
          />
          <div className='absolute inset-0 bg-linear-to-tr from-black/80 via-black/60 to-black/30' />
        </div>

        <div className='mx-auto max-w-6xl px-6 pt-20 pb-16 text-white'>
          <div className='max-w-3xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]'>
            <h1
              id='webDev-hero'
              className='text-4xl md:text-5xl font-semibold tracking-tight'
            >
              Web Development at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              Learn how the modern web actually works — from HTML & CSS to
              React, Next.js, APIs, and deployment. Build real projects that you
              can show to employers, clients, and universities.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link
                href='/getEnrolled'
                className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white shadow-lg shadow-black/40'
                style={{ backgroundColor: brand.primary }}
              >
                Enroll Now
              </Link>
              <Link
                href='#why-web-dev'
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium bg-white backdrop-blur-sm'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                Why Web Development?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        id='who'
        aria-labelledby='webDev-who'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='webDev-who'
          title='Who is this for?'
          subtitle='From complete beginners to CS students—anyone who wants to build and deploy real web apps.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='School & College Students'
            points={[
              'Curious about coding but don’t know where to start',
              'Want to build real websites for clubs or friends',
              'Need projects for university applications'
            ]}
          />
          <InfoCard
            title='University & CS Learners'
            points={[
              'Know some theory but lack practical projects',
              'Want React/Next.js for internships & jobs',
              'Need a portfolio beyond course assignments'
            ]}
          />
          <InfoCard
            title='Freelance & Career Switchers'
            points={[
              'Want skills to take freelance web clients',
              'Looking to switch into tech/web roles',
              'Prefer structured mentorship over random tutorials'
            ]}
          />
        </div>
      </section>

      {/* WHY WEB DEV */}
      <section
        id='why-web-dev'
        aria-labelledby='webDev-why'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='webDev-why'
          title='Why learn web development?'
          subtitle='Web dev is one of the fastest ways to go from “idea in your head” to a real product people can use.'
        />
        <div className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border bg-white p-6'>
            <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
              Skills that convert directly into work
            </h3>
            <p className='mt-3 text-sm text-gray-700'>
              With modern web skills you can build landing pages, dashboards,
              blogs, and SaaS-style apps—exactly what startups and companies pay
              for every day.
            </p>
          </article>
          <article className='rounded-2xl border bg-white p-6'>
            <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
              A portfolio that grows with you
            </h3>
            <p className='mt-3 text-sm text-gray-700'>
              By the end of the course you&apos;ll have deployed projects you
              can send in a CV, share with clients, or use as a base to keep
              experimenting and improving.
            </p>
          </article>
        </div>
      </section>

      {/* LEARNING TRACKS */}
      <section
        id='tracks'
        aria-labelledby='webDev-tracks'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='webDev-tracks'
          title='Learning tracks'
          subtitle='Start at your level and finish with deployed, portfolio-ready projects.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {tracks.map((t) => (
            <article
              key={t.title}
              className='relative rounded-2xl border bg-white p-6'
              style={{ borderColor: brand.border }}
            >
              <div
                className='pointer-events-none absolute -inset-px rounded-2xl opacity-20'
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${t.glow}, transparent)`
                }}
                aria-hidden
              />
              <div className='relative'>
                <span
                  className='inline-flex items-center rounded-md px-2 py-1 text-[11px] font-semibold'
                  style={{
                    border: `1px solid ${brand.border}`,
                    backgroundColor: brand.surface,
                    color: brand.primary
                  }}
                >
                  {t.tag}
                </span>
                <h3 className='mt-3 text-lg font-semibold text-gray-900'>
                  {t.title}
                </h3>
                <ul className='mt-3 space-y-2 text-sm text-gray-700'>
                  {t.bullets.map((b) => (
                    <li key={b} className='flex items-start gap-2'>
                      <span
                        className='mt-1 h-1.5 w-1.5 rounded-full'
                        style={{ backgroundColor: t.glow }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CURRICULUM SNAPSHOT */}
      <section
        id='curriculum'
        aria-labelledby='webDev-curriculum'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='webDev-curriculum'
          title='Curriculum snapshot'
          subtitle='From fundamentals to fullstack deployment—taught through labs and real projects.'
        />
        <div className='grid gap-6 md:grid-cols-2'>
          {curriculum.map((c) => (
            <article
              key={c.title}
              className='rounded-2xl border bg-white p-6'
              style={{ borderColor: brand.border }}
            >
              <h3
                className='text-lg font-semibold'
                style={{ color: brand.primary }}
              >
                {c.title}
              </h3>
              <ul className='mt-3 space-y-2 text-sm text-gray-700'>
                {c.items.map((item) => (
                  <li key={item} className='flex items-start gap-2'>
                    <span className='mt-1 h-1.5 w-1.5 rounded-full bg-purple-500' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section
        id='tools'
        aria-labelledby='webDev-tools'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='webDev-tools'
          title='Tools you’ll use'
          subtitle='Learn the same tools used by modern web teams and startups.'
        />
        <div className='mt-4 flex flex-wrap gap-2'>
          {tools.map((t) => (
            <span
              key={t}
              className='rounded-lg border bg-white px-3 py-1.5 text-sm'
              style={{ borderColor: brand.border, color: brand.primary }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id='pricing'
        aria-labelledby='webDev-pricing'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='webDev-pricing'
          title='Pricing'
          subtitle='Choose the track that matches your goals, timeline, and depth.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <Link
            href='/getEnrolled'
            className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white'
            style={{ backgroundColor: brand.primary }}
          >
            Enroll or Ask a Question
          </Link>
        </div>
      </section>

      {/* Add FAQ / CTA if you want, reusing Robotics pattern */}
    </main>
  )
}

/* ---------- Reusable UI bits ---------- */

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

function InfoCard({ title, points }: { title: string; points: string[] }) {
  return (
    <article
      className='rounded-2xl border bg-white p-5'
      style={{ borderColor: brand.border }}
    >
      <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
        {title}
      </h3>
      <ul className='mt-3 space-y-2 text-sm text-gray-700'>
        {points.map((p) => (
          <li key={p}>• {p}</li>
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
