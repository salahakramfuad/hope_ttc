'use client'
import React, { useMemo } from 'react'
import CourseCard from './CourseCard'

const TINT = '#9C27B0'

// --- demo data (picsum) ---
const COURSES = [
  {
    title: 'IELTS Express',
    description:
      'High-impact strategies to push from 6.0 → 7.0+ with timed mocks & feedback.',
    href: '/courses/ielts',
    image: 'https://picsum.photos/seed/ielts/800/500',
    badge: 'Fast Track',
    accent: '#00A67E'
  },
  {
    title: 'Spoken English',
    description:
      'Confidence, fluency and pronunciation drills for interviews & daily life.',
    href: '/courses/spoken-english',
    image: 'https://picsum.photos/seed/spoken/800/500',
    accent: '#0A7EA4'
  },
  {
    title: 'SAT Prep',
    description:
      'Evidence-based reading, math shortcuts, and realistic mock tests.',
    href: '/courses/sat',
    image: 'https://picsum.photos/seed/sat/800/500',
    accent: '#E4572E'
  },
  {
    title: 'Robotics',
    description: 'Hands-on Arduino & sensors—learn by building bots that move.',
    href: '/courses/robotics',
    image: 'https://picsum.photos/seed/robotics/800/500',
    accent: '#7C3AED'
  },
  {
    title: 'BTEC',
    description:
      'Career-ready projects and assessments with international recognition.',
    href: '/courses/btec',
    image: 'https://picsum.photos/seed/btec/800/500',
    accent: '#06B6D4'
  },
  {
    title: 'Study Overseas',
    description:
      'Application strategy, essays, and scholarship guidance end-to-end.',
    href: '/services/study-overseas',
    image: 'https://picsum.photos/seed/overseas/800/500',
    accent: '#F59E0B'
  }
]

/** Radial layout with alternating radii + slight jitter for breathing room */
function useRadial(count: number) {
  return useMemo(() => {
    const start = -90 // top
    const step = 360 / count
    const rInner = 46 // as % of box
    const rOuter = 56
    const jitter = 6 // degrees

    const nodes = Array.from({ length: count }).map((_, i) => {
      const radiusPct = i % 2 === 0 ? rInner : rOuter
      const angle = start + i * step + (i % 2 === 0 ? -jitter : jitter)
      const rad = (angle * Math.PI) / 180
      const x = 50 + radiusPct * Math.cos(rad)
      const y = 50 + radiusPct * Math.sin(rad)
      return { angle, x, y, radiusPct }
    })

    return { nodes }
  }, [count])
}

export default function RadialCourseNetwork() {
  const { nodes } = useRadial(COURSES.length)

  return (
    <section className='mx-auto max-w-6xl px-4 py-16'>
      {/* Mobile grid */}
      <div className='grid gap-6 md:hidden'>
        <h2 className='mb-2 text-center text-2xl font-semibold text-[#11181C]'>
          Courses
        </h2>
        <div className='grid grid-cols-1 place-items-center gap-6'>
          {COURSES.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>

      {/* Radial layout */}
      <div
        className='relative hidden h-[820px] w-full md:block'
        style={{
          // two radii used by transforms; larger than before to spread more
          ['--rInner' as string]: 'clamp(220px, 34vw, 320px)',
          ['--rOuter' as string]: 'clamp(260px, 38vw, 380px)'
        }}
      >
        {/* Spokes + rings */}
        <svg className='pointer-events-none absolute inset-0 h-full w-full'>
          <defs>
            <linearGradient id='spoke' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0%' stopColor={TINT} stopOpacity='0.75' />
              <stop offset='100%' stopColor={TINT} stopOpacity='0.1' />
            </linearGradient>
          </defs>

          {nodes.map((p, i) => (
            <line
              key={`line-${i}`}
              x1='50%'
              y1='50%'
              x2={`${p.x}%`}
              y2={`${p.y}%`}
              stroke='url(#spoke)'
              strokeWidth='2'
            />
          ))}

          {[28, 42, 58].map((r) => (
            <circle
              key={r}
              cx='50%'
              cy='50%'
              r={`${r}%`}
              fill='none'
              stroke={TINT}
              strokeOpacity='0.07'
            />
          ))}
        </svg>

        {/* Center hub */}
        <div
          className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-8 py-6 text-center shadow-xl'
          style={{ border: `2px solid ${TINT}` }}
        >
          <div className='text-lg font-semibold tracking-tight text-[#11181C]'>
            Courses
          </div>
        </div>

        {/* Cards: alternate inner/outer radius so they fan out more */}
        {COURSES.map((c, i) => (
          <div
            key={c.title}
            className='absolute left-1/2 top-1/2 z-10'
            style={{
              transform: `translate(-50%, -50%) rotate(${
                nodes[i].angle
              }deg) translateX(${
                i % 2 === 0 ? 'var(--rInner)' : 'var(--rOuter)'
              }) rotate(${-nodes[i].angle}deg)`
            }}
          >
            <CourseCard {...c} />
          </div>
        ))}
      </div>
    </section>
  )
}
