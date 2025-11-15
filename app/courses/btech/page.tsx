// app/btech/page.tsx
import Link from 'next/link'
import React from 'react'

export default function BtecPage() {
  // BTEC palette aligned with #FAF5FF navbar/footer
  const brand = {
    primary: '#6D28D9', // softer violet
    primarySoft: 'rgba(109,40,217,0.05)',
    accent: '#7C3AED', // secondary violet
    accentSoft: 'rgba(124,58,237,0.04)',
    bg: '#F7F2FF', // slightly dimmer than #FAF5FF
    text: '#1F2933',
    subText: 'rgba(31,41,51,0.78)',
    border: 'rgba(15,23,42,0.06)'
  }

  const pill =
    'rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase'

  return (
    <main className='relative min-h-screen' style={{ color: brand.text }}>
      {/* Background */}
      <div className='fixed inset-0 -z-20' style={{ background: brand.bg }} />
      <div
        className='fixed inset-0 -z-10'
        style={{
          opacity: 1,
          background:
            `radial-gradient(45% 45% at 15% 20%, ${brand.primarySoft} 0%, transparent 60%),` +
            `radial-gradient(40% 40% at 85% 30%, ${brand.accentSoft} 0%, transparent 60%),` +
            `radial-gradient(35% 35% at 40% 85%, rgba(244,231,255,0.5) 0%, transparent 60%)`
        }}
      />

      <section className='relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        {/* HERO */}
        <header className='text-center'>
          <div className='inline-flex items-center gap-2'>
            <span
              className={pill}
              style={{
                color: brand.primary,
                border: `1px solid ${brand.primary}40`,
                background: brand.primarySoft
              }}
            >
              Pearson BTEC @ HOPE TTC
            </span>
            <span
              className={`${pill} text-[10px]`}
              style={{
                color: brand.accent,
                border: `1px solid ${brand.accent}40`,
                background: '#FFFFFF'
              }}
            >
              Coming Soon
            </span>
          </div>

          <h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'>
            Career-Focused{' '}
            <span style={{ color: brand.primary }}>BTEC Pathways</span> for
            Real-World Skills.
          </h1>

          <p
            className='mx-auto mt-4 max-w-3xl text-base md:text-lg'
            style={{ color: brand.subText }}
          >
            Pearson BTECs are practical, skills-based qualifications designed
            with employers and universities. At HOPE TTC, we&apos;re preparing
            industry-aligned BTEC programmes that help learners move confidently
            into higher study or work.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <Link
              href='/getEnrolled'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition shadow-sm'
              style={{
                background: brand.primary,
                color: '#FFFFFF',
                opacity: 0.7,
                cursor: 'not-allowed'
              }}
              aria-disabled='true'
            >
              BTEC Admissions – Coming Soon
            </Link>
            <Link
              href='/consult'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition bg-white'
              style={{
                color: brand.primary,
                border: `1px solid ${brand.primary}66`
              }}
            >
              Talk to an Advisor
            </Link>
          </div>

          <p
            className='mt-4 text-xs md:text-sm'
            style={{ color: brand.subText }}
          >
            Learn more about BTEC on the official Pearson site:{' '}
            <a
              href='https://qualifications.pearson.com/en/about-us/qualification-brands/btec.html'
              target='_blank'
              rel='noreferrer'
              className='underline underline-offset-2'
              style={{ color: brand.accent }}
            >
              Pearson BTEC Overview
            </a>
            .
          </p>
        </header>

        {/* HIGHLIGHTS */}
        <div className='mt-12 grid gap-4 sm:grid-cols-3'>
          {[
            {
              k: 'Career-Focused',
              v: 'Designed Around Real Work',
              desc: 'Assignments and projects mirror real industry scenarios instead of only final exams.'
            },
            {
              k: 'Employer-Backed',
              v: 'Developed With Industry',
              desc: 'Content shaped with employers and higher-education experts to match current skills needs.'
            },
            {
              k: 'Progression',
              v: 'Pathway to Study or Work',
              desc: 'Recognised by universities and employers worldwide for further study and employment routes.'
            }
          ].map((h) => (
            <div
              key={h.k}
              className='rounded-2xl p-5 bg-white text-left'
              style={{
                border: `1px solid ${brand.border}`,
                boxShadow: '0 1px 2px rgba(15,23,42,0.04)'
              }}
            >
              <div
                className='text-xs font-semibold tracking-wide uppercase'
                style={{ color: brand.subText }}
              >
                {h.k}
              </div>
              <div
                className='mt-1 text-lg font-extrabold'
                style={{ color: brand.primary }}
              >
                {h.v}
              </div>
              <p
                className='mt-2 text-xs md:text-sm'
                style={{ color: brand.subText }}
              >
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* WHAT IS A BTEC */}
        <section className='mt-14 grid gap-10 md:grid-cols-[1.4fr,1fr] items-start'>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
              What is a Pearson BTEC?
            </h2>
            <p
              className='mt-3 text-sm md:text-base'
              style={{ color: brand.subText }}
            >
              BTEC (Business &amp; Technology Education Council) qualifications
              are practical, vocational routes that blend theory with hands-on
              projects. Learners build knowledge, skills, and behaviours they
              can use directly in the workplace or in further study.
            </p>
            <p
              className='mt-3 text-sm md:text-base'
              style={{ color: brand.subText }}
            >
              Instead of relying only on one big exam at the end, most BTEC
              programmes are made up of themed units. Assessment typically
              includes coursework, projects, presentations, and scenario-based
              tasks that reflect real situations in business, IT, engineering,
              health, and many other sectors.
            </p>

            <div className='mt-5 grid gap-3 sm:grid-cols-3'>
              {[
                {
                  title: 'Skills-Based',
                  items: [
                    'Applied projects',
                    'Teamwork & communication',
                    'Problem-solving'
                  ]
                },
                {
                  title: 'Unit-Based',
                  items: [
                    'Themed units',
                    'Ongoing assessment',
                    'Clear progression'
                  ]
                },
                {
                  title: 'Globally Trusted',
                  items: [
                    'Used worldwide',
                    'Recognised by universities',
                    'Valued by employers'
                  ]
                }
              ].map((c) => (
                <div
                  key={c.title}
                  className='rounded-2xl p-4 bg-white'
                  style={{ border: `1px solid ${brand.border}` }}
                >
                  <h3
                    className='text-sm font-semibold'
                    style={{ color: brand.primary }}
                  >
                    {c.title}
                  </h3>
                  <ul className='mt-2 space-y-1 text-[11px]'>
                    {c.items.map((i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2'
                        style={{ color: brand.subText }}
                      >
                        <span
                          className='mt-1 h-1.5 w-1.5 rounded-full'
                          style={{ background: brand.accent }}
                        />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Status card */}
          <div
            className='rounded-3xl p-6 bg-white'
            style={{
              border: `1px solid ${brand.primary}33`,
              boxShadow: '0 10px 30px rgba(15,23,42,0.06)'
            }}
          >
            <div className='inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[rgba(34,197,94,0.06)] text-xs font-semibold text-emerald-700'>
              ● Centre Launch in Planning
            </div>
            <h3 className='mt-3 text-lg font-bold'>
              BTEC at HOPE TTC — Coming Soon
            </h3>
            <p className='mt-2 text-sm' style={{ color: brand.subText }}>
              We&apos;re designing Pearson-aligned BTEC pathways for Dhaka,
              focusing on practical learning, lab and project-based work, and
              clear routes into university and employment.
            </p>
            <ul
              className='mt-3 space-y-1.5 text-xs'
              style={{ color: brand.subText }}
            >
              <li>• Planned intakes for school leavers and adult learners</li>
              <li>• Focus on Business, IT, and Science-related fields</li>
              <li>• Industry-driven projects and mentoring</li>
            </ul>
            <Link
              href='/contact'
              className='mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs font-semibold'
              style={{
                background: brand.primary,
                color: '#FFFFFF'
              }}
            >
              Join the BTEC Waitlist
            </Link>
          </div>
        </section>

        {/* LEVELS & PATHWAYS */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Planned BTEC Pathways at HOPE TTC
          </h2>
          <p
            className='mt-2 text-sm md:text-base'
            style={{ color: brand.subText }}
          >
            BTEC offers routes from foundational learning up to advanced
            specialist study. At HOPE TTC we plan to start with internationally
            relevant programmes that support both university entry and direct
            employment.
          </p>

          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'BTEC Level 2 (Foundation / Firsts)',
                tag: 'Planned',
                level: 'Approx. equivalent to O-Level standard',
                bullets: [
                  'Introduce vocational skills in a chosen sector',
                  'Build confidence with applied projects',
                  'Prepare for Level 3 or entry-level roles'
                ]
              },
              {
                title: 'BTEC Level 3 (Nationals)',
                tag: 'Core Focus',
                level: 'Approx. equivalent to A-Levels',
                bullets: [
                  'Deep, specialist learning for 16+',
                  'Widely used for university admission',
                  'Strong portfolio of coursework and projects'
                ]
              },
              {
                title: 'Higher Nationals (HN)',
                tag: 'Future Phase',
                level: 'Early years of university-level study',
                bullets: [
                  'Advanced professional skills',
                  'Possible credit transfer to degrees',
                  'Ideal for work-ready qualifications'
                ]
              }
            ].map((t) => (
              <div
                key={t.title}
                className='relative rounded-2xl p-6 bg-white'
                style={{
                  border: `1px solid ${brand.border}`,
                  boxShadow: '0 1px 2px rgba(15,23,42,0.04)'
                }}
              >
                <div
                  className='pointer-events-none absolute -inset-px rounded-2xl opacity-15'
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${brand.primary}, transparent)`
                  }}
                />
                <div className='relative'>
                  <div className='flex items-center justify-between gap-2'>
                    <span
                      className='inline-flex items-center gap-2 rounded-md px-2 py-1 text-[11px] font-semibold bg-[#F9FAFB]'
                      style={{
                        border: `1px solid ${brand.border}`,
                        color: brand.primary
                      }}
                    >
                      {t.tag}
                    </span>
                    <span className='text-[10px] font-medium uppercase tracking-wide text-amber-600'>
                      Coming Soon
                    </span>
                  </div>
                  <h3 className='mt-3 text-lg font-bold'>{t.title}</h3>
                  <p className='mt-1 text-xs' style={{ color: brand.subText }}>
                    {t.level}
                  </p>
                  <ul
                    className='mt-3 space-y-2 text-sm'
                    style={{ color: brand.subText }}
                  >
                    {t.bullets.map((b) => (
                      <li key={b} className='flex items-start gap-2'>
                        <span
                          className='mt-1 h-1.5 w-1.5 rounded-full'
                          style={{ background: brand.accent }}
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

        {/* SUBJECT AREAS */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Subject Areas BTEC Covers
          </h2>
          <p
            className='mt-2 text-sm md:text-base'
            style={{ color: brand.subText }}
          >
            Globally, BTECs are available across more than a dozen sectors, from
            business and IT to creative media and healthcare. At HOPE TTC
            we&apos;ll start with a focused set of pathways and grow over time.
          </p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {[
              'Business & Entrepreneurship',
              'Information Technology',
              'Applied Science',
              'Health & Social Care',
              'Creative Media',
              'Engineering (future)',
              'Hospitality & Tourism (future)',
              'Sport & Fitness (future)'
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

        {/* PROGRESSION */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Progress with BTEC
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'University & Higher Study',
                desc: 'Use Level 3 BTEC Nationals to apply for degrees in related fields, often alongside other qualifications.'
              },
              {
                title: 'Employment & Apprenticeships',
                desc: 'Move directly into work or apprenticeships with practical skills, a portfolio of projects, and sector-specific knowledge.'
              },
              {
                title: 'Lifelong Upskilling',
                desc: 'Adults and professionals can use BTECs to reskill, switch careers, or gain industry-aligned qualifications while working.'
              }
            ].map((p) => (
              <div
                key={p.title}
                className='relative overflow-hidden rounded-2xl p-6 bg-white'
                style={{
                  border: `1px solid ${brand.border}`,
                  boxShadow: '0 1px 2px rgba(15,23,42,0.04)'
                }}
              >
                <div
                  className='pointer-events-none absolute -inset-px opacity-15 blur-2xl'
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${brand.accent}, transparent)`
                  }}
                />
                <div className='relative'>
                  <h3 className='text-lg font-bold'>{p.title}</h3>
                  <p className='mt-2 text-sm' style={{ color: brand.subText }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>FAQ</h2>
          <div
            className='mt-6 divide-y rounded-2xl overflow-hidden bg-white'
            style={{ border: `1px solid ${brand.border}` }}
          >
            {[
              {
                q: 'Are BTEC programmes available at HOPE TTC right now?',
                a: 'Not yet. We are preparing our Pearson-aligned BTEC offering and centre approvals. All programmes on this page are marked as “Coming Soon” to show they are planned, not currently running.'
              },
              {
                q: 'Who are BTECs suitable for?',
                a: 'BTECs work well for learners who prefer applied, coursework-led learning and want a clear line of sight to university, skilled employment, or apprenticeships.'
              },
              {
                q: 'How will assessment work?',
                a: 'Most BTEC units are assessed through assignments, projects, and practical tasks linked to real-life scenarios, with some externally set or marked components depending on the qualification.'
              },
              {
                q: 'How can I stay updated about launch dates?',
                a: 'Use the Contact Team or Join the BTEC Waitlist button above and we’ll email you once intakes, subjects, and entry requirements are confirmed.'
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
                Be the first to know when BTEC launches at HOPE TTC
              </h3>
              <p className='text-sm' style={{ color: brand.subText }}>
                Join our interest list and we&apos;ll share confirmed subjects,
                entry requirements, and intake dates as soon as they go live.
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                href='/getEnrolled'
                className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition shadow-sm'
                style={{ background: brand.primary, color: '#FFFFFF' }}
              >
                Join BTEC Waitlist
              </Link>
              <Link
                href='https://qualifications.pearson.com/en/about-us/qualification-brands/btec.html'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition bg-white'
                style={{
                  color: brand.primary,
                  border: `1px solid ${brand.primary}66`
                }}
              >
                Learn About BTEC
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
