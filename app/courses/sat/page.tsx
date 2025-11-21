// app/sat/page.tsx
import Image from 'next/image'
import Link from 'next/link'

/** Brand */
const brand = {
  primary: '#9C27B0',
  ink: '#11181C',
  surface: '#F7F9FA',
  border: 'rgba(0,0,0,0.12)'
}

export const metadata = {
  title: 'SAT Course | Hope TTC',
  description:
    'Digital SAT preparation at Hope TTC — structured lessons, adaptive practice, and full mock support.',
  alternates: { canonical: '/sat' },
  openGraph: {
    title: 'SAT Course | Hope TTC',
    description:
      'Master Digital SAT Math and Reading & Writing with expert coaches and adaptive practice.',
    type: 'website',
    url: '/sat'
  }
}

type ModuleRow = { component: string; time: string; details: string }
type Plan = {
  name: 'Crash' | 'Regular' | 'Executive'
  price: string
  bullets: string[]
  highlight?: boolean
}

const modules: ModuleRow[] = [
  {
    component: 'Reading & Writing',
    time: '64 minutes (2 modules)',
    details: 'Short passages · grammar, vocabulary-in-context, rhetoric'
  },
  {
    component: 'Math',
    time: '70 minutes (2 modules)',
    details: 'Algebra, advanced math, problem-solving & data'
  },
  {
    component: 'Total',
    time: '2h 14m',
    details: 'Digital, adaptive by section'
  }
]

const plans: Plan[] = [
  {
    name: 'Crash',
    price: '9500 ৳',
    bullets: [
      '8 weeks · 3 days/week',
      '4 Full Digital Mocks',
      'Reading–Writing strategy pack',
      'Math formula drills',
      'Daily practice plan'
    ]
  },
  {
    name: 'Regular',
    price: '13800 ৳',
    highlight: true,
    bullets: [
      '12 weeks · 3 days/week',
      '8 Full Digital Mocks + analytics',
      'Error log system & review labs',
      'Math tactical sets (algebra→advanced)',
      'R&W micro-skills (grammar→rhetoric)'
    ]
  },
  {
    name: 'Executive',
    price: '16800 ৳',
    bullets: [
      '10 weeks · Fri & Sat only',
      '6 Full Digital Mocks',
      'Personalized study roadmap',
      'Small batch: focused feedback',
      'College counseling intro session'
    ]
  }
]

export default function SATPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section className='relative isolate'>
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop'
            alt='Students studying for the SAT'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/45' />
          <div
            className='absolute -top-24 right-[-20%] h-[420px] w-[420px] rounded-full blur-3xl'
            style={{ background: 'rgba(156,39,176,0.25)' }}
            aria-hidden
          />
        </div>

        <div className='mx-auto max-w-6xl px-6 pt-20 pb-14 text-white'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl font-semibold tracking-tight'>
              Digital SAT at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              Outcome-driven coaching for Reading & Writing and Math. Adaptive
              practice, data-driven feedback, and full digital mocks—so you test
              with confidence.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link
                href='/consult'
                className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white'
                style={{ backgroundColor: brand.primary }}
              >
                Get Free Counselling
              </Link>
              <a
                href='#pricing'
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium bg-white'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header
          title='Who is this for?'
          subtitle='Grade 9–12 students aiming for competitive universities and scholarships.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='Score Boosters'
            img='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Targeted weak-area repair',
              'Time-saving tactics',
              'Mock → feedback → fix'
            ]}
          />
          <InfoCard
            title='First-timers'
            img='https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Concept-first teaching',
              'Guided practice sets',
              'Exam-day readiness'
            ]}
          />
          <InfoCard
            title='Top-tier Aspirants'
            img='https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop'
            points={[
              '700+ pathways',
              'Advanced math sets',
              'Evidence-based R&W'
            ]}
          />
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header title='What you’ll learn' />
        <div className='grid gap-6 md:grid-cols-2'>
          <SplitCard
            title='Reading & Writing'
            badge='Reasoning · Grammar · Rhetoric'
            img='https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=1200&auto=format&fit=crop'
          >
            <ul className='space-y-2 text-gray-700'>
              <li>• Evidence & words-in-context</li>
              <li>• Sentence structure & punctuation</li>
              <li>• Logical organization & cohesion</li>
              <li>• Data & humanities passages</li>
              <li>• Elite question-picking & pacing</li>
            </ul>
          </SplitCard>

          <SplitCard
            title='Math'
            badge='Algebra · Advanced Math · Data'
            img='https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop'
          >
            <ul className='space-y-2 text-gray-700'>
              <li>• Linear & systems · functions</li>
              <li>• Quadratics, exponentials, radicals</li>
              <li>• Nonlinear equations · polynomials</li>
              <li>• Ratios, stats, probability, data</li>
              <li>• Calculator tactics & sanity checks</li>
            </ul>
          </SplitCard>
        </div>
      </section>

      {/* TEST STRUCTURE */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header
          title='Digital SAT Structure'
          subtitle='Adaptive by section, taken on Bluebook™'
        />
        <div
          className='overflow-hidden rounded-2xl border bg-white'
          style={{ borderColor: brand.border }}
        >
          <table className='w-full text-left'>
            <thead>
              <tr className='bg-black text-white text-sm'>
                <th className='px-5 py-3 font-semibold'>Section</th>
                <th className='px-5 py-3 font-semibold'>Time</th>
                <th className='px-5 py-3 font-semibold'>Details</th>
              </tr>
            </thead>
            <tbody className='divide-y' style={{ borderColor: brand.border }}>
              {modules.map((m) => (
                <tr key={m.component}>
                  <td className='px-5 py-4'>{m.component}</td>
                  <td className='px-5 py-4 text-gray-700'>{m.time}</td>
                  <td className='px-5 py-4 text-gray-700'>{m.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className='mx-auto max-w-6xl px-6 pb-4'>
        <div
          className='grid gap-4 rounded-2xl border bg-white p-5 md:grid-cols-4'
          style={{ borderColor: brand.border }}
        >
          {[
            ['Adaptive mocks', 'Auto-generated analytics'],
            ['Error logs', 'Personalized fix-lists'],
            ['Small batches', 'Live feedback loops'],
            ['Counselling', 'Application guidance intro']
          ].map(([h, s]) => (
            <div
              key={h}
              className='rounded-xl p-4'
              style={{ backgroundColor: brand.surface }}
            >
              <div
                className='text-sm font-semibold'
                style={{ color: brand.ink }}
              >
                {h}
              </div>
              <div className='mt-1 text-sm text-gray-700'>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id='pricing' className='mx-auto max-w-6xl px-6 py-12'>
        <Header
          title='Pricing'
          subtitle='Flexible options for every schedule'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <Link
            href='/contact'
            className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white'
            style={{ backgroundColor: brand.primary }}
          >
            Enroll or Ask a Question
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-6xl px-6 pb-16'>
        <div
          className='rounded-2xl p-6 md:p-8'
          style={{
            backgroundColor: brand.surface,
            border: `1px solid ${brand.border}`
          }}
        >
          <h3 className='text-xl font-semibold' style={{ color: brand.ink }}>
            Unsure where to start?
          </h3>
          <p className='mt-2 text-gray-700'>
            Book a quick call. We’ll benchmark your level, set a realistic
            target, and share a week-by-week prep plan.
          </p>
          <div className='mt-4'>
            <Link
              href='/consult'
              className='inline-flex items-center rounded-xl px-4 py-2 font-medium text-white'
              style={{ backgroundColor: brand.primary }}
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ---------- UI Bits ---------- */

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className='mb-6'>
      <h2
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
        <Image src={img} alt='' fill className='object-cover' />
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
        <Image src={img} alt='' fill className='object-cover' />
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

function PlanCard({ plan }: { plan: Plan }) {
  const isHL = plan.highlight
  return (
    <div
      className={`rounded-2xl border p-6 ${isHL ? 'md:scale-[1.02]' : ''}`}
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
    </div>
  )
}
