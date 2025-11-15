// app/robotics/page.tsx
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
  title: 'Robotics Program | Hope TTC',
  description:
    'Hands-on robotics at Hope TTC — electronics, coding, computer vision, and ROS with competition-ready projects.',
  alternates: { canonical: '/robotics' },
  openGraph: {
    title: 'Robotics Program | Hope TTC',
    description:
      'Learn robotics through real projects: sensors, microcontrollers, computer vision, and autonomous systems — with pathways into global competitions.',
    type: 'website',
    url: '/robotics'
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
      'Electronics & sensors',
      'Arduino / ESP32 basics',
      'C/C++ for microcontrollers'
    ],
    glow: brand.primary
  },
  {
    title: 'Systems & Vision',
    tag: 'Intermediate',
    bullets: [
      'Raspberry Pi + Linux',
      'Python & OpenCV basics',
      'Motor control & PID'
    ],
    glow: '#8B5CF6'
  },
  {
    title: 'Autonomy & ROS',
    tag: 'Advanced',
    bullets: [
      'ROS/ROS2 nodes & topics',
      'SLAM & navigation intro',
      'Edge AI deployment'
    ],
    glow: '#EC4899'
  }
]

const curriculum = [
  {
    title: 'Electronics & Control',
    items: [
      'Sensors, I2C/SPI/UART',
      'Motor drivers, PWM & servos',
      'PID, basic kinematics'
    ]
  },
  {
    title: 'Embedded & Python',
    items: [
      'C/C++ on MCUs',
      'MicroPython on ESP32',
      'Python tooling & scripting'
    ]
  },
  {
    title: 'Computer Vision',
    items: ['OpenCV basics', 'Line/marker tracking', 'Object detection intro']
  },
  {
    title: 'Robotics Middleware',
    items: [
      'ROS graph, tf, topics',
      'Simulation with Gazebo',
      'Navigation basics'
    ]
  }
] as const

const tools = [
  'Arduino',
  'ESP32',
  'Raspberry Pi',
  'Breadboards',
  'HC-SR04',
  'L298N',
  'IMU/MPU6050',
  'OpenCV',
  'Python',
  'C/C++',
  'MicroPython',
  'ROS/ROS2',
  'Gazebo',
  'YOLO (intro)',
  'Edge TPU'
] as const

const plans: Plan[] = [
  {
    name: 'Starter Robotics',
    price: '9,800 ৳',
    bullets: [
      '8-week foundations track',
      '2 days/week · 90 mins per class',
      '1 portfolio project (line follower)',
      'Basic electronics & Arduino kit guidance'
    ]
  },
  {
    name: 'Core Robotics',
    price: '14,500 ৳',
    highlight: true,
    bullets: [
      '12-week full track (Foundations + Systems)',
      '3 days/week · 2 hours per class',
      '2 portfolio projects (line follower + vision rover)',
      'Competition-oriented documentation support'
    ]
  },
  {
    name: 'Advanced Robotics',
    price: '18,900 ৳',
    bullets: [
      '16-week extended track (incl. ROS intro)',
      '3 days/week · 2 hours per class',
      'Autonomy-focused capstone (ROS mapper demo)',
      'Extra mentoring for competitions & research'
    ]
  }
]

export default function RoboticsPage() {
  return (
    <main className='min-h-screen bg-purple-50 text-[15px]'>
      {/* HERO */}
      <section aria-labelledby='robotics-hero' className='relative isolate'>
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]'>
          <Image
            src='/images/robotics.jpg'
            alt='Robotics program background'
            fill
            priority
            className='object-cover'
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className='mx-auto max-w-6xl px-6 pt-20 pb-16 text-white'>
          <div className='max-w-3xl'>
            <h1
              id='robotics-hero'
              className='text-4xl md:text-5xl font-semibold tracking-tight'
            >
              Robotics at Hope TTC
            </h1>
            <p className='mt-4 leading-7 text-white/90'>
              Hands-on robotics—from circuits and sensors to computer vision,
              ROS, and autonomy. Learn by building real robots with
              industry-grade tools and a clear path toward competitions and
              higher studies.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link
                href='/get-enrolled'
                className='inline-flex items-center rounded-xl px-5 py-3 font-medium text-white'
                style={{ backgroundColor: brand.primary }}
              >
                Enroll Now
              </Link>
              <Link
                href='#why-robotics'
                className='inline-flex items-center rounded-xl border px-5 py-3 font-medium'
                style={{ borderColor: 'rgba(255,255,255,0.55)' }}
              >
                Why Robotics?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        id='who'
        aria-labelledby='robotics-who'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='robotics-who'
          title='Who is this for?'
          subtitle='From school students to university makers—anyone who wants to build real robots instead of just slides.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          <InfoCard
            title='School & College Students'
            points={[
              'Want a serious STEM project for portfolio / admission',
              'Curious about hardware, coding, and competitions',
              'Prefer learning by building, testing, and iterating'
            ]}
          />
          <InfoCard
            title='CSE / EEE / Mechatronics Learners'
            points={[
              'Need practical robotics beyond theory-only courses',
              'Want CV, ROS, and embedded projects for their resume',
              'Plan to apply for research labs or internships'
            ]}
          />
          <InfoCard
            title='Competition & Club Teams'
            points={[
              'Looking to structure training for a robotics club',
              'Want to prepare for VEX/RECF-style competitions',
              'Need mentoring on engineering process and teamwork'
            ]}
          />
        </div>
      </section>

      {/* WHY ROBOTICS (content omitted here for brevity – keep your existing one) */}
      {/* ... your existing Why Robotics, Tracks, Curriculum, Tools, Pathways, FAQ sections ... */}

      {/* LEARNING TRACKS */}
      <section
        id='tracks'
        aria-labelledby='robotics-tracks'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='robotics-tracks'
          title='Learning tracks'
          subtitle='Enter at your level, exit with a portfolio-ready project.'
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
        aria-labelledby='robotics-curriculum'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='robotics-curriculum'
          title='Curriculum snapshot'
          subtitle='Electronics, embedded software, computer vision, and robotics middleware—taught through labs and projects.'
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

      {/* LABS & TOOLS */}
      <section
        id='tools'
        aria-labelledby='robotics-tools'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='robotics-tools'
          title='Labs & tools you’ll use'
          subtitle='Industry-relevant hardware and software so you’re not starting from zero when you join a lab, company, or competition team.'
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

      {/* PRICING – new section */}
      <section
        id='pricing'
        aria-labelledby='robotics-pricing'
        className='mx-auto max-w-6xl px-6 py-12'
      >
        <Header
          id='robotics-pricing'
          title='Pricing'
          subtitle='Flexible robotics pathways with clear deliverables and mentorship.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
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

      {/* FAQ + CTA (keep yours below, or reuse from previous version) */}
      {/* ... */}
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
