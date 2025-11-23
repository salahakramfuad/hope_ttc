// app/game-development/page.tsx
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
  title: 'Game Development | Hope TTC',
  description:
    'Learn game development from zero: game design, C#, Unity/Unreal basics, and full playable projects for your portfolio.',
  alternates: { canonical: '/game-development' },
  openGraph: {
    title: 'Game Development | Hope TTC',
    description:
      'Hands-on game development with Unity/Unreal: gameplay mechanics, level design, UI, and optimisation—finish with real playable games.',
    type: 'website',
    url: '/game-development'
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
    title: 'Foundations',
    tag: 'Beginner',
    bullets: [
      'Game engines, scenes & assets',
      'C# scripting basics (Unity-style)',
      'Input, physics & simple UI'
    ],
    glow: brand.primary
  },
  {
    title: 'Gameplay & Levels',
    tag: 'Intermediate',
    bullets: [
      'Gameplay systems & patterns',
      'Level design & enemy AI basics',
      'Menus, HUD & save systems (intro)'
    ],
    glow: '#8B5CF6'
  },
  {
    title: 'Production & Publishing',
    tag: 'Advanced',
    bullets: [
      'Polish, VFX & optimisation',
      'Builds for PC / mobile (intro)',
      'Portfolio & itch.io / store uploads'
    ],
    glow: '#EC4899'
  }
]

const curriculum = [
  {
    title: 'Game Engine Foundations',
    items: [
      'Unity editor basics (or similar engine)',
      'Scenes, prefabs, assets & components',
      '2D vs 3D projects & pipelines'
    ]
  },
  {
    title: 'Programming & Gameplay',
    items: [
      'C# scripting essentials',
      'Input, movement & physics-based gameplay',
      'Game loops, states & simple AI behaviours'
    ]
  },
  {
    title: 'Art, UI & Audio',
    items: [
      'Importing art & animations',
      'UI / HUD design & menus',
      'Sound effects, music & feedback loops'
    ]
  },
  {
    title: 'Production & Portfolio',
    items: [
      'Performance profiling & optimisation basics',
      'Building & exporting for PC / mobile',
      'Packaging games for portfolio & itch.io'
    ]
  }
] as const

const tools = [
  'Unity Engine',
  'C#',
  'Visual Studio Code / Rider',
  'Git & version control basics',
  '2D sprite packs & tilesets',
  '3D asset packs (intro)',
  'Audacity / audio tools (intro)',
  'Itch.io & store pages',
  'Trello / Notion for game planning'
] as const

const plans: Plan[] = [
  {
    name: 'Starter Game Dev',
    price: '9,200 ৳',
    bullets: [
      '8-week foundations track',
      '2 days/week · 90 mins per class',
      '1 mini-project (arcade-style game)',
      'Engine, C# basics & core gameplay loops'
    ]
  },
  {
    name: 'Core Game Developer',
    price: '14,200 ৳',
    highlight: true,
    bullets: [
      '12-week full track (Foundations + Gameplay)',
      '3 days/week · 2 hours per class',
      '2 playable projects (platformer + top-down)',
      'Guided feedback on design & user experience'
    ]
  },
  {
    name: 'Advanced Game Production',
    price: '18,500 ৳',
    bullets: [
      '16-week extended track (incl. polish & publishing)',
      '3 days/week · 2 hours per class',
      'Capstone project published on itch.io',
      'Mentoring for game jams & indie portfolio'
    ]
  }
]

export default function GameDevelopmentPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section aria-labelledby='gameDev-hero' className='relative isolate'>
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='/images/game-dev.jpg'
            alt='Game development course background'
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
              id='gameDev-hero'
              className='text-4xl md:text-5xl font-semibold tracking-tight'
            >
              Game Development at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              Learn how modern games are built—from code and gameplay systems to
              level design and publishing. Build and ship your own playable
              games with structured guidance.
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
                href='#why-game-dev'
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium bg-white backdrop-blur-sm'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                Why Game Development?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        id='who'
        aria-labelledby='gameDev-who'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='gameDev-who'
          title='Who is this for?'
          subtitle='From school students to CS undergrads—anyone who wants to build real games step by step.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='Students & Beginners'
            points={[
              'Love games and want to make your own',
              'No prior experience in 3D or coding needed',
              'Prefer project-based, visual learning'
            ]}
          />
          <InfoCard
            title='CS / Engineering Learners'
            points={[
              'Know some programming but not how to apply it to games',
              'Want clean, structured gameplay code',
              'Need projects that stand out on a resume'
            ]}
          />
          <InfoCard
            title='Creators & Indie Aspirants'
            points={[
              'Interested in indie game dev or game jams',
              'Want to learn full pipeline: idea → prototype → publish',
              'Need mentoring to finish and ship projects'
            ]}
          />
        </div>
      </section>

      {/* WHY GAME DEV */}
      <section
        id='why-game-dev'
        aria-labelledby='gameDev-why'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='gameDev-why'
          title='Why learn game development?'
          subtitle='Game dev mixes programming, art, design, and storytelling—perfect for curious builders who enjoy both logic and creativity.'
        />
        <div className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border bg-white p-6'>
            <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
              Turn ideas into playable experiences
            </h3>
            <p className='mt-3 text-sm text-gray-700'>
              Instead of just thinking “this would be a cool game”, you&apos;ll
              learn how to prototype mechanics, iterate quickly, and turn an
              idea into something friends can actually play and give feedback
              on.
            </p>
          </article>
          <article className='rounded-2xl border bg-white p-6'>
            <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
              Real projects, not just engine tutorials
            </h3>
            <p className='mt-3 text-sm text-gray-700'>
              Each track ends with a finished, polished mini-game or level, so
              you leave with a portfolio—not just half-finished practice scenes
              on your hard drive.
            </p>
          </article>
        </div>
      </section>

      {/* LEARNING TRACKS */}
      <section
        id='tracks'
        aria-labelledby='gameDev-tracks'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='gameDev-tracks'
          title='Learning tracks'
          subtitle='Start where you are and finish with shipped, playable projects.'
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
        aria-labelledby='gameDev-curriculum'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='gameDev-curriculum'
          title='Curriculum snapshot'
          subtitle='Engine basics, scripting, level design, and publishing—taught through structured labs and real projects.'
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
        aria-labelledby='gameDev-tools'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='gameDev-tools'
          title='Tools you’ll use'
          subtitle='You’ll learn the same tools used by indie teams, studios, and game jam winners.'
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
        aria-labelledby='gameDev-pricing'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='gameDev-pricing'
          title='Pricing'
          subtitle='Choose a pathway that matches how deep you want to go into game development.'
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

      {/* You can add an FAQ / CTA section below similar to Robotics page */}
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
