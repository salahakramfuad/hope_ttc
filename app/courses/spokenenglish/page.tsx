// app/spoken/page.tsx
import Link from 'next/link'
import React from 'react'

export default function SpokenEnglishPage() {
  // HOPE TTC light palette
  const brand = {
    primary: '#9C27B0',
    primarySoft: 'rgba(156,39,176,0.10)',
    bg: '#FCFAFF',
    text: '#11181C',
    subText: 'rgba(17,24,28,0.75)',
    border: 'rgba(0,0,0,0.08)'
  }

  const badge =
    'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase'

  const cardStyle: React.CSSProperties = {
    border: `1px solid ${brand.border}`,
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    background: '#FFFFFF'
  }

  return (
    <main className='relative min-h-screen' style={{ color: brand.text }}>
      {/* Background */}
      <div className='fixed inset-0 -z-20' style={{ background: brand.bg }} />
      <div
        className='fixed inset-0 -z-10'
        style={{
          background: `radial-gradient(45% 45% at 15% 20%, ${brand.primarySoft} 0%, transparent 60%)`
        }}
      />

      <section className='relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        {/* HERO */}
        <header className='text-center'>
          <span
            className={badge}
            style={{
              color: brand.primary,
              border: `1px solid ${brand.primary}40`,
              background: brand.primarySoft
            }}
          >
            Spoken English @ HOPE TTC
          </span>

          <h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'>
            Speak with <span style={{ color: brand.primary }}>Confidence</span>.
            Communicate with <span style={{ color: '#7C3AED' }}>Clarity</span>.
          </h1>

          <p
            className='mx-auto mt-4 max-w-2xl text-base md:text-lg'
            style={{ color: brand.subText }}
          >
            Practical, conversation-first training for study, work, and daily
            life. Small groups, expert coaches, and lots of speaking time.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <Link
              href='/get-enrolled'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition shadow-sm'
              style={{ background: brand.primary, color: '#FFFFFF' }}
            >
              Enroll Now →
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition bg-white'
              style={{
                color: brand.primary,
                border: `1px solid ${brand.primary}66`
              }}
            >
              Talk to an Advisor
            </Link>
          </div>
        </header>

        {/* HIGHLIGHTS */}
        <div className='mt-12 grid gap-4 sm:grid-cols-3'>
          {[
            { k: 'Format', v: 'Live + Practice Labs' },
            { k: 'Focus', v: 'Fluency · Pronunciation · Grammar' },
            { k: 'Extras', v: 'Interview & Presentation' }
          ].map((h) => (
            <div
              key={h.k}
              className='rounded-2xl p-5 text-center'
              style={cardStyle}
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

        {/* LEVELS */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Choose Your Level
          </h2>
          <p className='mt-2' style={{ color: brand.subText }}>
            We map to CEFR (A1–C1). Take a quick assessment at enrollment.
          </p>

          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'Starter (A1–A2)',
                tag: 'Beginner',
                color: brand.primary,
                bullets: [
                  'Everyday phrases',
                  'Simple questions & answers',
                  'Basic grammar & vocab'
                ]
              },
              {
                title: 'Progress (B1–B2)',
                tag: 'Intermediate',
                color: '#7C3AED',
                bullets: [
                  'Fluency drills',
                  'Pronunciation polishing',
                  'Email & meeting English'
                ]
              },
              {
                title: 'Impact (C1)',
                tag: 'Advanced',
                color: '#EC4899',
                bullets: [
                  'Presentation & debate',
                  'Storytelling & tone',
                  'Interview masterclass'
                ]
              }
            ].map((t) => (
              <div
                key={t.title}
                className='relative rounded-2xl p-6'
                style={cardStyle}
              >
                <div
                  className='pointer-events-none absolute -inset-px rounded-2xl opacity-15'
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${t.color}, transparent)`
                  }}
                />
                <div className='relative'>
                  <div
                    className='inline-flex items-center gap-2 rounded-md px-2 py-1 text-[11px] font-semibold bg-[#FAFAFF]'
                    style={{
                      border: `1px solid ${brand.border}`,
                      color: t.color
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
                          style={{ background: t.color }}
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

        {/* SYLLABUS SNAPSHOT */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Syllabus Snapshot
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-2'>
            {[
              {
                title: 'Fluency & Conversation',
                items: [
                  'Role-plays & debates',
                  'Small talk to deep talk',
                  'Thinking in English'
                ]
              },
              {
                title: 'Pronunciation & Accent',
                items: [
                  'Stress & intonation',
                  'Clear sounds / minimal pairs',
                  'Connected speech'
                ]
              },
              {
                title: 'Grammar in Use',
                items: [
                  'Tense choice made easy',
                  'Prepositions that matter',
                  'Fix common mistakes'
                ]
              },
              {
                title: 'Work & Study English',
                items: [
                  'Presentations that land',
                  'Emails that persuade',
                  'Interview toolkit'
                ]
              }
            ].map((c, i) => (
              <div key={c.title} className='rounded-2xl p-6' style={cardStyle}>
                <h3
                  className='text-lg font-bold'
                  style={{
                    color: [brand.primary, '#7C3AED', '#EC4899', brand.primary][
                      i % 4
                    ]
                  }}
                >
                  {c.title}
                </h3>
                <ul
                  className='mt-3 space-y-2 text-sm'
                  style={{ color: brand.subText }}
                >
                  {c.items.map((it) => (
                    <li key={it} className='flex items-start gap-2'>
                      <span
                        className='mt-1 h-1.5 w-1.5 rounded-full'
                        style={{ background: '#7C3AED' }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            By the end, you will…
          </h2>
          <div className='mt-6 grid gap-4 sm:grid-cols-3'>
            {[
              'Speak for 2–3 minutes on common topics without long pauses',
              'Use natural connectors (however, actually, meanwhile, on top of that)',
              'Sound clearer with better stress, rhythm, and intonation',
              'Handle meetings, calls, and presentations with structure',
              'Fix frequent grammar slips and expand active vocabulary',
              'Build a daily practice routine you can keep'
            ].map((o) => (
              <div key={o} className='rounded-2xl p-5' style={cardStyle}>
                <div className='text-2xl'>🗣️</div>
                <p className='mt-2 text-sm' style={{ color: brand.subText }}>
                  {o}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SCHEDULE & FEES */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Schedule & Fees
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                plan: 'Weekday Evenings',
                info: 'Mon–Thu · 6:30–8:00 PM · 8 weeks',
                fee: 'BDT 8,500'
              },
              {
                plan: 'Weekend Batch',
                info: 'Fri–Sat · 10:00–12:00 · 8 weeks',
                fee: 'BDT 8,500'
              },
              {
                plan: 'Fast-Track',
                info: 'Tue–Sat · Daily 90 mins · 4 weeks',
                fee: 'BDT 9,500'
              }
            ].map((p) => (
              <div
                key={p.plan}
                className='rounded-2xl p-6 flex flex-col gap-2'
                style={cardStyle}
              >
                <div
                  className='text-sm font-semibold'
                  style={{ color: brand.primary }}
                >
                  {p.plan}
                </div>
                <div className='text-sm' style={{ color: brand.subText }}>
                  {p.info}
                </div>
                <div className='mt-2 text-xl font-extrabold'>{p.fee}</div>
              </div>
            ))}
          </div>
          <p className='mt-3 text-xs' style={{ color: brand.subText }}>
            *Includes placement test, course book (digital), speaking labs, and
            certificate.
          </p>
        </section>

        {/* FAQ */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>FAQ</h2>
          <div
            className='mt-6 divide-y rounded-2xl overflow-hidden'
            style={cardStyle}
          >
            {[
              {
                q: 'Is this different from IELTS Speaking?',
                a: 'Yes. This course builds everyday and workplace speaking skills. We also offer a dedicated IELTS course if you are test-focused.'
              },
              {
                q: 'How big are the classes?',
                a: 'Small groups (typically 10–14) so you get maximum speaking time and feedback.'
              },
              {
                q: 'Will I get a certificate?',
                a: 'Yes—students who complete the course and assessment receive a HOPE TTC certificate.'
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

        {/* CTA */}
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
                Ready to start speaking more confidently?
              </h3>
              <p className='text-sm' style={{ color: brand.subText }}>
                Book a free speaking assessment and get your level today.
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                href='/get-enrolled'
                className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition shadow-sm'
                style={{ background: brand.primary, color: '#FFFFFF' }}
              >
                Get Enrolled
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition bg-white'
                style={{
                  color: brand.primary,
                  border: `1px solid ${brand.primary}66`
                }}
              >
                Contact Team
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
