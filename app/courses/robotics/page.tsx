// app/robotics/page.tsx
'use client'
import Link from 'next/link'
import React from 'react'

export default function RoboticsPage() {
  // Light theme palette aligned to the logo
  const brand = {
    primary: '#9C27B0', // HOPE TTC purple
    primarySoft: 'rgba(156,39,176,0.10)',
    violet: '#8B5CF6',
    pink: '#EC4899',
    bg: '#FCFAFF', // soft off-white with a hint of lavender
    text: '#11181C',
    subText: 'rgba(17,24,28,0.75)',
    border: 'rgba(0,0,0,0.08)'
  }

  return (
    <main className='relative min-h-screen' style={{ color: brand.text }}>
      {/* ===== Light background ===== */}
      <div className='fixed inset-0 -z-20' style={{ background: brand.bg }} />

      {/* soft gradient washes in purple family */}
      <div
        className='fixed inset-0 -z-10'
        style={{
          opacity: 1,
          background:
            `radial-gradient(45% 45% at 15% 20%, ${brand.primarySoft} 0%, transparent 60%),` +
            `radial-gradient(40% 40% at 85% 30%, rgba(139,92,246,0.10) 0%, transparent 60%),` +
            `radial-gradient(35% 35% at 40% 85%, rgba(236,72,153,0.08) 0%, transparent 60%)`
        }}
      />
      {/* subtle grid lines (light mode) */}
      <div className='pointer-events-none fixed inset-0 -z-10'>
        <div className='absolute inset-0 opacity-30 [background:linear-gradient(to_right,rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.04)_1px,transparent_1px)] [background-size:36px_36px] animate-[gridpan_18s_linear_infinite]' />
      </div>

      <section className='relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        {/* ===== HERO ===== */}
        <header className='text-center'>
          <span
            className='inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase'
            style={{
              color: brand.primary,
              border: `1px solid ${brand.primary}40`,
              background: brand.primarySoft
            }}
          >
            Robotics @ HOPE TTC
          </span>

          <h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'>
            Build <span style={{ color: brand.pink }}>Robots</span>. Code{' '}
            <span style={{ color: brand.violet }}>Intelligence</span>. Ship{' '}
            <span style={{ color: brand.primary }}>Solutions</span>.
          </h1>

          <p
            className='mx-auto mt-4 max-w-2xl text-base md:text-lg'
            style={{ color: brand.subText }}
          >
            Hands-on robotics—from circuits and sensors to ROS, CV, and
            autonomy. Learn by building real projects with industry-grade tools.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <Link
              href='/get-enrolled'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition shadow-sm'
              style={{ background: brand.primary, color: '#FFFFFF' }}
            >
              Enroll Now <span>→</span>
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition'
              style={{
                color: brand.primary,
                border: `1px solid ${brand.primary}66`,
                background: '#FFFFFF'
              }}
            >
              Talk to an Advisor
            </Link>
          </div>
        </header>

        {/* ===== HIGHLIGHTS ===== */}
        <div className='mt-12 grid gap-4 sm:grid-cols-3'>
          {[
            { k: 'Project-First', v: '12+ builds' },
            { k: 'Hardware Kits', v: 'Arduino · Pi · ESP32' },
            { k: 'Pathways', v: 'Beginner → Advanced' }
          ].map((h) => (
            <div
              key={h.k}
              className='rounded-2xl p-5 text-center bg-white'
              style={{
                border: `1px solid ${brand.border}`,
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              <div
                className='text-2xl md:text-3xl font-extrabold'
                style={{ color: brand.primary }}
              >
                {h.v}
              </div>
              <div
                className='mt-1 text-xs font-medium tracking-wide'
                style={{ color: brand.subText }}
              >
                {h.k}
              </div>
            </div>
          ))}
        </div>

        {/* ===== TRACKS ===== */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Learning Tracks
          </h2>
          <p className='mt-2' style={{ color: brand.subText }}>
            Choose your entry point. Each track culminates in a showcase
            project.
          </p>

          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
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
                  'Python, OpenCV basics',
                  'Motor control & PID'
                ],
                glow: brand.violet
              },
              {
                title: 'Autonomy & ROS',
                tag: 'Advanced',
                bullets: [
                  'ROS/ROS2 nodes & topics',
                  'SLAM & navigation intro',
                  'Edge AI deployment'
                ],
                glow: brand.pink
              }
            ].map((t) => (
              <div
                key={t.title}
                className='relative rounded-2xl p-6 bg-white'
                style={{
                  border: `1px solid ${brand.border}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                }}
              >
                <div
                  className='pointer-events-none absolute -inset-px rounded-2xl opacity-20'
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${t.glow}, transparent)`
                  }}
                />
                <div className='relative'>
                  <div
                    className='inline-flex items-center gap-2 rounded-md px-2 py-1 text-[11px] font-semibold'
                    style={{
                      border: `1px solid ${brand.border}`,
                      background: '#FAFAFF',
                      color: brand.primary
                    }}
                  >
                    {t.tag}
                  </div>
                  <h3 className='mt-3 text-lg font-bold'>{t.title}</h3>
                  <ul
                    className='mt-3 space-y-2 text-sm'
                    style={{ color: brand.subText }}
                  >
                    {t.bullets.map((b) => (
                      <li key={b} className='flex items-start gap-2'>
                        <span
                          className='mt-1 h-1.5 w-1.5 rounded-full'
                          style={{ background: t.glow }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CURRICULUM SNAPSHOT ===== */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Curriculum Snapshot
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-2'>
            {[
              {
                title: 'Electronics & Control',
                items: [
                  'Sensors, I2C/SPI/UART',
                  'Servos, drivers, PWM',
                  'PID, kinematics'
                ]
              },
              {
                title: 'Embedded & Python',
                items: [
                  'C/C++ on MCUs',
                  'MicroPython on ESP32',
                  'Python tooling'
                ]
              },
              {
                title: 'Computer Vision',
                items: [
                  'OpenCV basics',
                  'Line/marker tracking',
                  'Object detection intro'
                ]
              },
              {
                title: 'Robotics Middleware',
                items: [
                  'ROS graph, tf, topics',
                  'Gazebo sim intro',
                  'Navigation basics'
                ]
              }
            ].map((c) => (
              <div
                key={c.title}
                className='rounded-2xl p-6 bg-white'
                style={{
                  border: `1px solid ${brand.border}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                }}
              >
                <h3
                  className='text-lg font-bold'
                  style={{ color: brand.primary }}
                >
                  {c.title}
                </h3>
                <ul
                  className='mt-3 space-y-2 text-sm'
                  style={{ color: brand.subText }}
                >
                  {c.items.map((i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span
                        className='mt-1 h-1.5 w-1.5 rounded-full'
                        style={{ background: brand.violet }}
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ===== LABS & TOOLS ===== */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Labs & Tools You’ll Use
          </h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            {[
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
            ].map((t) => (
              <span
                key={t}
                className='rounded-lg px-3 py-1.5 text-sm bg-white'
                style={{
                  color: brand.primary,
                  border: `1px solid ${brand.border}`
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Capstone Projects
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'Line-Follower Pro',
                desc: 'PID-tuned line follower with lap-time telemetry.',
                color: brand.primary
              },
              {
                title: 'Vision Rover',
                desc: 'RPi/OpenCV bot for marker tracking and docking.',
                color: brand.violet
              },
              {
                title: 'ROS Mapper',
                desc: 'ROS2 SLAM demo with autonomous waypoint nav.',
                color: brand.pink
              }
            ].map((p) => (
              <div
                key={p.title}
                className='relative overflow-hidden rounded-2xl p-6 bg-white'
                style={{
                  border: `1px solid ${brand.border}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                }}
              >
                <div
                  className='pointer-events-none absolute -inset-px opacity-15 blur-2xl'
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${p.color}, transparent)`
                  }}
                />
                <div className='relative'>
                  <div className='text-5xl'>🤖</div>
                  <h3 className='mt-3 text-lg font-bold'>{p.title}</h3>
                  <p className='mt-2 text-sm' style={{ color: brand.subText }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>FAQ</h2>
          <div
            className='mt-6 divide-y rounded-2xl overflow-hidden bg-white'
            style={{ border: `1px solid ${brand.border}` }}
          >
            {[
              {
                q: 'Do I need prior coding experience?',
                a: 'No. The Foundations track starts from zero and ramps you up to embedded C/C++ and Python.'
              },
              {
                q: 'Is hardware included?',
                a: 'Kits are available at the center; you can also bring your own Arduino/RPi/ESP32 to practice.'
              },
              {
                q: 'Will I get help with competitions?',
                a: 'Yes—mentorship and practice sessions for school/university robotics contests are provided.'
              }
            ].map((f, i) => (
              <details key={i} className='group'>
                <summary className='cursor-pointer list-none p-6 font-semibold flex items-center justify-between hover:bg-[#F7F9FC]'>
                  <span>{f.q}</span>
                  <span
                    className='text-2xl leading-none transition-transform duration-300 group-open:rotate-45'
                    style={{ color: brand.primary }}
                  >
                    +
                  </span>
                </summary>
                <div
                  className='px-6 pb-6 text-sm'
                  style={{ color: brand.subText }}
                >
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className='mt-14'>
          <div
            className='rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'
            style={{
              border: `1px solid ${brand.primary}33`,
              background: brand.primarySoft
            }}
          >
            <div>
              <h3
                className='text-xl md:text-2xl font-extrabold'
                style={{ color: brand.primary }}
              >
                Ready to build your first robot?
              </h3>
              <p className='text-sm' style={{ color: brand.subText }}>
                Book a free trial session and tour our robotics lab.
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                href='/get-enrolled'
                className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition shadow-sm'
                style={{ background: brand.primary, color: '#FFFFFF' }}
              >
                Start Now
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition'
                style={{
                  color: brand.primary,
                  border: `1px solid ${brand.primary}66`,
                  background: '#FFFFFF'
                }}
              >
                Contact Team
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes gridpan {
          0% {
            background-position: 0px 0px, 0px 0px;
          }
          100% {
            background-position: 72px 36px, 36px 72px;
          }
        }
      `}</style>
    </main>
  )
}
