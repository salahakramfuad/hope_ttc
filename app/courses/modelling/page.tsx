// app/3d-modelling/page.tsx
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
  title: '3D Modelling & Animation | Hope TTC',
  description:
    'Learn 3D modelling, texturing, lighting, and animation with Blender and industry tools. Build a portfolio for games, film, and product design.',
  alternates: { canonical: '/3d-modelling' },
  openGraph: {
    title: '3D Modelling & Animation | Hope TTC',
    description:
      'Hands-on 3D modelling and animation: Blender, sculpting, texturing, lighting, rendering, and portfolio projects for games, film, and product design.',
    type: 'website',
    url: '/3d-modelling'
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
    title: '3D Foundations',
    tag: 'Beginner',
    bullets: [
      'Blender basics: UI, navigation, transforms',
      'Polygon modelling & modifiers',
      'Intro to materials, lights & cameras'
    ],
    glow: brand.primary
  },
  {
    title: 'Assets & Environments',
    tag: 'Intermediate',
    bullets: [
      'Hard-surface & organic modelling',
      'UV unwrapping & PBR texturing',
      'Environment composition & lighting'
    ],
    glow: '#8B5CF6'
  },
  {
    title: 'Animation & Portfolio',
    tag: 'Advanced',
    bullets: [
      'Rigging & keyframe animation',
      'Cinematics & camera moves',
      'Portfolio-ready scenes & ArtStation setup'
    ],
    glow: '#EC4899'
  }
]

const curriculum = [
  {
    title: '3D Modelling Essentials',
    items: [
      'Blender interface, viewports & navigation',
      'Mesh editing, modifiers & non-destructive workflow',
      'Blocking, detailing & topology basics'
    ]
  },
  {
    title: 'Texturing & Materials',
    items: [
      'UV unwrapping & layout',
      'PBR workflow, nodes & shaders',
      'Textures from Substance / online libraries'
    ]
  },
  {
    title: 'Lighting, Rendering & Compositing',
    items: [
      'HDRIs, three-point lighting & mood',
      'Cycles vs Eevee rendering',
      'Basic compositing & render passes'
    ]
  },
  {
    title: 'Animation & Portfolio',
    items: [
      'Keyframes, curves & camera animation',
      'Simple character / prop rigs',
      'Exporting renders & building a portfolio'
    ]
  }
] as const

const tools = [
  'Blender',
  'Substance Painter (overview)',
  'Adobe Photoshop / Krita',
  'HDRI Haven / texture libraries',
  'Cycles & Eevee render engines',
  'FBX/GLTF export',
  'ArtStation & Behance portfolio basics',
  'Unreal / Unity import (intro)'
] as const

const plans: Plan[] = [
  {
    name: 'Starter 3D Modelling',
    price: '8,900 ৳',
    bullets: [
      '8-week foundations track',
      '2 days/week · 90 mins per class',
      '1 portfolio prop (stylised or realistic)',
      'Blender basics, lighting & simple renders'
    ]
  },
  {
    name: 'Core 3D Artist',
    price: '13,900 ৳',
    highlight: true,
    bullets: [
      '12-week full track (Foundations + Assets)',
      '3 days/week · 2 hours per class',
      '2 portfolio pieces (hero prop + small environment)',
      'Guided feedback on composition & presentation'
    ]
  },
  {
    name: 'Advanced 3D & Animation',
    price: '17,500 ৳',
    bullets: [
      '16-week extended track (incl. animation)',
      '3 days/week · 2 hours per class',
      'Short animated shot or cinematic scene',
      'Mentoring for ArtStation, freelancing & contests'
    ]
  }
]

export default function ThreeDModellingPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section aria-labelledby='threeD-hero' className='relative isolate'>
        {/* Background image */}
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='/images/3d-modelling.jpg'
            alt='3D modelling course background'
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
              id='threeD-hero'
              className='text-4xl md:text-5xl font-semibold tracking-tight'
            >
              3D Modelling & Animation at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              Learn how to model, texture, light, and animate 3D scenes using
              industry-relevant tools. Build a portfolio for games, film, motion
              graphics, and product design—starting from zero.
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
                href='#why-3d'
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium bg-white backdrop-blur-sm'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                Why 3D Modelling?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        id='who'
        aria-labelledby='threeD-who'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='threeD-who'
          title='Who is this for?'
          subtitle='From absolute beginners to aspiring 3D artists—anyone who wants to create real 3D work, not just watch tutorials.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='Students & Beginners'
            points={[
              'Curious about 3D but not sure where to start',
              'Want a visual, project-based way to learn',
              'Need portfolio work for future study or jobs'
            ]}
          />
          <InfoCard
            title='Designers & Creators'
            points={[
              'Graphic / product designers who want 3D skills',
              'Motion, YouTube, or content creators',
              'Want to add cinematic 3D visuals to their work'
            ]}
          />
          <InfoCard
            title='Game & Film Aspirants'
            points={[
              'Interested in game assets or environment art',
              'Want to understand 3D pipelines and workflows',
              'Plan to apply to studios, labs, or freelance'
            ]}
          />
        </div>
      </section>

      {/* WHY 3D MODELLING */}
      <section
        id='why-3d'
        aria-labelledby='threeD-why'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='threeD-why'
          title='Why learn 3D now?'
          subtitle='3D skills sit at the intersection of design, tech, and storytelling—and they scale across games, film, AR/VR, and marketing.'
        />
        <div className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border bg-white p-6'>
            <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
              A portfolio that speaks louder than a CV
            </h3>
            <p className='mt-3 text-sm text-gray-700'>
              Instead of “I&apos;m passionate about 3D”, you show recruiters a
              finished environment, a hero prop, and an animated shot. This
              course is structured around portfolio-ready pieces.
            </p>
          </article>
          <article className='rounded-2xl border bg-white p-6'>
            <h3 className='text-lg font-semibold' style={{ color: brand.ink }}>
              Studio-style feedback, not just tutorials
            </h3>
            <p className='mt-3 text-sm text-gray-700'>
              You get feedback on topology, lighting, and composition—plus
              guidance on how to present your work on ArtStation or Behance so
              it looks professional.
            </p>
          </article>
        </div>
      </section>

      {/* LEARNING TRACKS */}
      <section
        id='tracks'
        aria-labelledby='threeD-tracks'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='threeD-tracks'
          title='Learning tracks'
          subtitle='Enter at your level and finish with finished renders, not half-done files.'
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
        aria-labelledby='threeD-curriculum'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='threeD-curriculum'
          title='Curriculum snapshot'
          subtitle='Modelling, texturing, lighting, and animation—delivered through structured labs and projects.'
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
        aria-labelledby='threeD-tools'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='threeD-tools'
          title='Tools you’ll use'
          subtitle='Learn the same tools studios, indie teams, and freelancers rely on every day.'
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
        aria-labelledby='threeD-pricing'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='threeD-pricing'
          title='Pricing'
          subtitle='Pick the pathway that matches your goals and schedule.'
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

      {/* You can plug in an FAQ / CTA section here, similar to Robotics */}
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
