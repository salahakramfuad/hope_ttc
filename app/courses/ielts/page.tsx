// app/ielts/page.tsx
import Image from 'next/image'
import Link from 'next/link'

/** Brand */
const brand = {
  primary: '#9C27B0',
  ink: '#11181C',
  surface: '#F7F9FA',
  border: 'rgba(0,0,0,0.12)',
  muted: '#6B7280'
}

export const metadata = {
  title: 'IELTS | Hope TTC',
  description:
    'IELTS preparation at Hope TTC — Academic & General Training with mocks, counseling, and elegant study plans.',
  alternates: { canonical: '/ielts' },
  openGraph: {
    title: 'IELTS | Hope TTC',
    description:
      'Academic & General Training with expert instructors, structured classes, and full mock support.',
    type: 'website',
    url: '/ielts'
  }
}

type ModuleRow = { component: string; time: string; questions: string }
type Plan = {
  name: 'Crash' | 'Regular' | 'Executive'
  price: string
  bullets: string[]
  highlight?: boolean
}

const modules: ModuleRow[] = [
  { component: 'Listening', time: '30 minutes', questions: '4 Sections' },
  { component: 'Reading', time: '60 minutes', questions: '3 Passages' },
  { component: 'Writing', time: '60 minutes', questions: '2 Tasks' },
  { component: 'Speaking', time: '12–14 minutes', questions: 'Interview' }
]

const plans: Plan[] = [
  {
    name: 'Crash',
    price: '9500 ৳',
    bullets: [
      '1.5 months, including mocks',
      '4 days/week · 16 classes',
      '10 mock tests',
      '4 Listening · 4 Reading · 4 Writing',
      '2 Speaking · 2 Reading–Writing'
    ]
  },
  {
    name: 'Regular',
    price: '13800 ৳',
    highlight: true,
    bullets: [
      '3.5 months, including mocks',
      '3 days/week · 30 classes',
      '20 mock tests',
      '6 Listening · 7 Reading · 8 Writing',
      '5 Speaking · 4 Reading–Writing'
    ]
  },
  {
    name: 'Executive',
    price: '13800 ৳',
    bullets: [
      '3.5 months, including mocks',
      '2 days/week (Fri & Sat) · 30 classes',
      '20 mock tests',
      '6 Listening · 7 Reading · 8 Writing',
      '5 Speaking · 4 Reading–Writing'
    ]
  }
]

export default function IELTSPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section className='relative isolate'>
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
            alt='Students preparing for IELTS at a modern study space'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/40' />
          <div
            className='absolute -top-24 right-[-20%] h-[420px] w-[420px] rounded-full blur-3xl'
            style={{ background: 'rgba(156,39,176,0.25)' }}
            aria-hidden
          />
        </div>

        <div className='mx-auto max-w-6xl px-6 pt-20 pb-14 text-white'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl font-semibold tracking-tight'>
              IELTS at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              A polished, outcomes-driven program for Academic and General
              Training. Build real fluency, master exam strategy, and practice
              with full mocks—guided by experts.
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
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / WHO IT’S FOR */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header
          title='Who is this for?'
          subtitle='University admission, migration, or career growth—choose a path that fits your goal.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='University & Scholarships'
            img='https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Academic reading & data writing',
              'Task 1 visuals · Task 2 arguments',
              'Grammar & cohesion polish'
            ]}
          />
          <InfoCard
            title='Work & Migration'
            img='https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Functional reading & letters',
              'Workplace vocabulary & tone',
              'Interview-style speaking drills'
            ]}
          />
          <InfoCard
            title='Confidence & Fluency'
            img='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
            points={[
              'Pronunciation & pacing',
              'Listening concentration tactics',
              'Mock feedback loops'
            ]}
          />
        </div>
      </section>

      {/* ACADEMIC VS GENERAL */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header title='Academic vs General Training' />
        <div className='grid gap-6 md:grid-cols-2'>
          <SplitCard
            title='Academic'
            badge='University / Professional'
            img='https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop'
          >
            <ul className='space-y-2 text-gray-700'>
              <li>• Writing Task 1: charts, tables, process</li>
              <li>• Writing Task 2: discursive essay</li>
              <li>• Reading: 3 academic passages</li>
              <li>• Listening & Speaking: same as General</li>
            </ul>
          </SplitCard>

          <SplitCard
            title='General'
            badge='Work / Migration'
            img='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
          >
            <ul className='space-y-2 text-gray-700'>
              <li>• Writing Task 1: formal/informal letters</li>
              <li>• Writing Task 2: discursive essay</li>
              <li>• Reading: everyday/workplace texts (3 sections)</li>
              <li>• Listening & Speaking: same as Academic</li>
            </ul>
          </SplitCard>
        </div>
      </section>

      {/* MODULES TABLE */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header title='Modules' subtitle='What your test includes' />
        <div
          className='overflow-hidden rounded-2xl border bg-white'
          style={{ borderColor: brand.border }}
        >
          <table className='w-full text-left'>
            <thead>
              <tr className='bg-black text-white text-sm'>
                <th className='px-5 py-3 font-semibold'>Component</th>
                <th className='px-5 py-3 font-semibold'>Time Allotted</th>
                <th className='px-5 py-3 font-semibold'>Number of Questions</th>
              </tr>
            </thead>
            <tbody className='divide-y' style={{ borderColor: brand.border }}>
              {modules.map((m) => (
                <tr key={m.component} className='bg-white'>
                  <td className='px-5 py-4'>{m.component}</td>
                  <td className='px-5 py-4 text-gray-700'>{m.time}</td>
                  <td className='px-5 py-4 text-gray-700'>{m.questions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PACKAGES */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <Header title='Available Packages' subtitle='Class breakdown & mocks' />
        <div className='grid gap-6 md:grid-cols-2'>
          <MiniPackageCard
            title='Regular Batches'
            rows={[
              ['Reading Module', '5 classes'],
              ['Writing Module', '8 classes'],
              ['Listening Module', '6 classes'],
              ['Review Class', '6 classes'],
              ['Speaking Module', '5 classes']
            ]}
            notes={[
              'Unlimited interviews at the Support Center',
              'Separate GT classes on demand',
              '20 Mock Tests in a convenient schedule'
            ]}
          />
          <MiniPackageCard
            title='Crash Batches'
            rows={[
              ['Reading Module', '4 classes'],
              ['Writing Module', '4 classes'],
              ['Listening Module', '4 classes'],
              ['Review Class', '2 classes'],
              ['Speaking Module', '2 classes']
            ]}
            notes={[
              'Unlimited interviews at the Support Center',
              'Separate GT classes on demand',
              '10 Mock Tests in a convenient schedule'
            ]}
          />
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
            Not sure which module fits best?
          </h3>
          <p className='mt-2 text-gray-700'>
            Share your goal (university, migration, or corporate role). We’ll
            map a personalized study plan with mock test milestones.
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

function MiniPackageCard({
  title,
  rows,
  notes
}: {
  title: string
  rows: [string, string][]
  notes: string[]
}) {
  return (
    <div
      className='rounded-2xl border bg-white p-6'
      style={{ borderColor: brand.border }}
    >
      <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
        {title}
      </h3>
      <div className='mt-4'>
        <ul className='space-y-2 text-sm'>
          {rows.map(([l, r]) => (
            <li key={l} className='flex items-center justify-between'>
              <span className='text-gray-700'>{l}</span>
              <span className='font-medium'>{r}</span>
            </li>
          ))}
        </ul>
        <div className='mt-4 space-y-2 text-[13px] text-gray-700'>
          {notes.map((n, i) => (
            <p key={i}>• {n}</p>
          ))}
        </div>
      </div>
    </div>
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
