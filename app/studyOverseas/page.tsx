// app/studyoverseass/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function StudyOverseasPage() {
  // HOPE TTC brand tokens
  const brand = {
    primary: '#9C27B0', // logo purple
    violet: '#8B5CF6',
    pink: '#EC4899',
    bg: '#FCFAFF', // soft lavender-white
    text: '#11181C',
    border: 'rgba(15,23,42,0.08)',
    surface: 'rgba(255,255,255,0.88)'
  }

  const stats = [
    { k: 'Admit Rate', v: '92%' },
    { k: 'Scholarship Wins', v: '300+' },
    { k: 'Destinations', v: '10+' }
  ]

  const features = [
    {
      title: 'Smart Shortlisting',
      desc: 'Match your profile with programs using outcomes, funding, safety, and visa-friendliness — not just rankings.',
      icon: '🎯'
    },
    {
      title: 'SOP & Essays',
      desc: 'Narrative-driven documents edited for impact, clarity, and academic integrity standards.',
      icon: '📝'
    },
    {
      title: 'Scholarships',
      desc: 'Track merit and need-based awards, with support for documentation and deadline planning.',
      icon: '🎓'
    },
    {
      title: 'Application Ops',
      desc: 'LORs, documents, and portals — we keep every moving part organized and on time.',
      icon: '🧩'
    },
    {
      title: 'Visa Guidance',
      desc: 'Country-specific checklists, mock interviews, and proof-of-funds guidance.',
      icon: '🛂'
    },
    {
      title: 'Pre-Departure',
      desc: 'Housing, banking, SIMs, packing lists, and arrival orientation for a confident start.',
      icon: '🧭'
    }
  ]

  const steps = [
    {
      step: '01',
      title: 'Profile & Goals',
      desc: 'We map academics, scores, budget, and timelines to your destination goals.'
    },
    {
      step: '02',
      title: 'Build & Apply',
      desc: 'Shortlist, SOP/LOR, documents, and portals — applications submitted on time.'
    },
    {
      step: '03',
      title: 'Decide & Prep',
      desc: 'Compare offers, secure funding, prepare visas, and get pre-departure support.'
    }
  ]

  const countries = [
    'USA',
    'UK',
    'Canada',
    'Australia',
    'Germany',
    'Netherlands',
    'Japan',
    'Malaysia',
    'UAE',
    'Sweden'
  ]

  return (
    <main
      className='relative min-h-screen overflow-hidden'
      style={{ color: brand.text }}
    >
      {/* ===== BACKGROUND ===== */}
      <div className='fixed inset-0 -z-20 bg-purple-50'>
        <div
          className='h-full w-full animate-bgShift will-change-transform'
          style={{
            background:
              `${brand.bg}, ` +
              `radial-gradient(48% 48% at 18% 20%, rgba(156,39,176,0.12) 0%, transparent 60%),` +
              `radial-gradient(40% 40% at 82% 28%, rgba(139,92,246,0.12) 0%, transparent 60%),` +
              `radial-gradient(36% 36% at 42% 88%, rgba(236,72,153,0.10) 0%, transparent 60%)`,
            backgroundBlendMode: 'normal',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '140% 140%'
          }}
        />
      </div>

      {/* SOFT GRID OVERLAY */}
      <div className='pointer-events-none fixed inset-0 -z-10 opacity-[0.12]'>
        <div className='h-full w-full bg-[radial-gradient(circle_at_top,#ffffff_0,transparent_55%),linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)]' />
      </div>

      {/* ===== CONTENT ===== */}
      <section className='relative w-full py-16 md:py-24 [content-visibility:auto]'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* HERO */}
          <header className='grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center'>
            {/* Left: copy */}
            <div>
              <span
                className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-sm bg-white/80 backdrop-blur'
                style={{
                  color: brand.primary,
                  border: `1px solid ${brand.primary}33`
                }}
              >
                <span
                  className='h-2 w-2 rounded-full'
                  style={{ background: brand.primary }}
                />
                Study Overseas with HOPE TTC
              </span>

              <h1 className='mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight'>
                Turn your&nbsp;
                <span className='whitespace-nowrap'>
                  global dream
                  <span
                    className='ml-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold align-middle'
                    style={{
                      background: 'rgba(156,39,176,0.10)',
                      color: brand.primary,
                      border: `1px solid ${brand.primary}33`
                    }}
                  >
                    into a plan
                  </span>
                </span>
              </h1>

              <p className='mt-4 max-w-xl text-base md:text-lg text-slate-700'>
                University shortlisting, SOP &amp; essays, scholarships, and
                visa guidance — end-to-end support shaped around your profile,
                not templates.
              </p>

              <div className='mt-8 flex flex-wrap items-center gap-4'>
                <Link
                  href='/consult'
                  className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md'
                  style={{ background: brand.primary }}
                >
                  Get a Free Consultation <span>→</span>
                </Link>
              </div>

              <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-600'>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                  1:1 strategy calls for serious applicants
                </span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-sky-500' />
                  Support for IELTS, foundation, and undergrad pathways
                </span>
              </div>
            </div>

            {/* Right: hero visual */}
            <div className='relative'>
              <div
                className='relative overflow-hidden rounded-3xl border shadow-[0_24px_70px_rgba(148,27,181,0.28)] bg-white/80 backdrop-blur-xl'
                style={{ borderColor: brand.border }}
              >
                <div className='border-b border-slate-200/70 px-5 py-3 flex items-center justify-between text-xs text-slate-500'>
                  <span className='font-semibold text-slate-700'>
                    Study Overseas Dashboard
                  </span>
                  <span className='inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5'>
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                    Live Support
                  </span>
                </div>

                <div className='grid gap-5 p-5'>
                  {/* Stats row */}
                  <div className='grid grid-cols-3 gap-3'>
                    {stats.map((h) => (
                      <div
                        key={h.k}
                        className='rounded-2xl border bg-slate-50/60 px-3 py-3 text-center'
                        style={{ borderColor: brand.border }}
                      >
                        <div className='text-lg md:text-xl font-extrabold text-slate-900'>
                          {h.v}
                        </div>
                        <div className='mt-0.5 text-[11px] font-medium tracking-wide text-slate-600'>
                          {h.k}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini timeline */}
                  <div
                    className='rounded-2xl border bg-linear-to-br from-white via-purple-50/60 to-pink-50/60 p-4 text-xs leading-relaxed'
                    style={{ borderColor: brand.border }}
                  >
                    <div className='mb-2 flex items-center justify-between text-[11px] font-semibold text-slate-600'>
                      <span>Sample Roadmap</span>
                      <span className='rounded-full bg-white/70 px-2 py-0.5'>
                        Fall 2026 Intake
                      </span>
                    </div>
                    <ol className='space-y-2'>
                      <li className='flex gap-3'>
                        <span className='mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-700 flex items-center justify-center'>
                          1
                        </span>
                        <p>
                          Profile review, country fit, and budget alignment.
                        </p>
                      </li>
                      <li className='flex gap-3'>
                        <span className='mt-1 h-5 w-5 shrink-0 rounded-full bg-sky-500/10 text-[10px] font-bold text-sky-700 flex items-center justify-center'>
                          2
                        </span>
                        <p>
                          Shortlist universities, plan tests, and draft
                          SOP/LORs.
                        </p>
                      </li>
                      <li className='flex gap-3'>
                        <span className='mt-1 h-5 w-5 shrink-0 rounded-full bg-purple-500/10 text-[10px] font-bold text-purple-700 flex items-center justify-center'>
                          3
                        </span>
                        <p>
                          Submit applications, track decisions, and prepare
                          visas.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* GLASS PANEL SECTION */}
          <div className='mt-14 lg:mt-16'>
            <div
              className='rounded-3xl border bg-white/80 p-6 md:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl'
              style={{ borderColor: brand.border }}
            >
              {/* Destinations marquee */}
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <div>
                  <h2 className='text-xl md:text-2xl font-bold tracking-tight'>
                    Where can you go with HOPE TTC?
                  </h2>
                  <p className='mt-1 text-sm text-slate-600 max-w-xl'>
                    Explore safe, realistic options across top destinations —
                    not just the headlines.
                  </p>
                </div>
                <div className='relative w-full md:w-auto overflow-hidden rounded-full border bg-slate-50/80 px-4 py-2 text-xs text-slate-700'>
                  <div className='whitespace-nowrap animate-marquee will-change-transform'>
                    {countries.concat(countries).map((c, i) => (
                      <span
                        key={i}
                        className='mx-4 inline-flex items-center gap-2 font-medium'
                      >
                        <span
                          className='inline-block h-1.5 w-1.5 rounded-full'
                          style={{ background: brand.primary }}
                        />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feature grid */}
              <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {features.map((f) => (
                  <div
                    key={f.title}
                    className='group rounded-2xl border bg-white/90 p-6 transition hover:-translate-y-1 hover:shadow-lg'
                    style={{ borderColor: brand.border }}
                  >
                    <div
                      className='flex h-11 w-11 items-center justify-center rounded-xl border bg-[#FCFAFF] text-2xl'
                      style={{ borderColor: brand.border }}
                    >
                      {f.icon}
                    </div>
                    <h3 className='mt-4 text-base md:text-lg font-semibold text-slate-900'>
                      {f.title}
                    </h3>
                    <p className='mt-2 text-sm leading-relaxed text-slate-700'>
                      {f.desc}
                    </p>
                    <div className='mt-3 h-px w-12 rounded-full bg-linear-to-r from-purple-500/70 via-pink-500/70 to-amber-400/70 opacity-70 group-hover:opacity-100' />
                  </div>
                ))}
              </div>

              {/* Steps + Who it's for */}
              <div className='mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]'>
                {/* Steps */}
                <div className='space-y-4'>
                  <h2 className='text-lg md:text-xl font-bold tracking-tight'>
                    Your journey, in three clear stages
                  </h2>
                  <div className='grid gap-4 md:grid-cols-3'>
                    {steps.map((s) => (
                      <div
                        key={s.step}
                        className='rounded-2xl border bg-slate-50/80 p-5 text-sm'
                        style={{ borderColor: brand.border }}
                      >
                        <div className='text-[11px] font-semibold tracking-[0.16em] text-slate-600'>
                          STEP {s.step}
                        </div>
                        <h4 className='mt-1 text-sm font-semibold text-slate-900'>
                          {s.title}
                        </h4>
                        <p className='mt-2 text-xs leading-relaxed text-slate-700'>
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who it's for */}
                <div
                  className='rounded-2xl border bg-linear-to-br from-purple-50/90 via-white/90 to-pink-50/90 p-5 text-sm'
                  style={{ borderColor: brand.border }}
                >
                  <h3 className='text-sm font-semibold text-slate-900'>
                    Who is this for?
                  </h3>
                  <p className='mt-2 text-xs leading-relaxed text-slate-700'>
                    Ideal for students who:
                  </p>
                  <ul className='mt-3 space-y-2 text-xs leading-relaxed text-slate-700'>
                    <li>
                      • Want a realistic global plan that fits their grades and
                      budget.
                    </li>
                    <li>
                      • Need guidance on essays, paperwork, and deadlines.
                    </li>
                    <li>
                      • Are targeting scholarships or safe backup options.
                    </li>
                    <li>
                      • Prefer 1:1 mentorship over generic consultancy scripts.
                    </li>
                  </ul>
                  <div
                    className='mt-4 rounded-xl bg-white/80 px-3 py-2 text-[11px] text-slate-700 border'
                    style={{ borderColor: brand.border }}
                  >
                    “We are not just filling forms — we are building
                    applications that make sense to admissions committees.”
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className='mt-10 rounded-2xl border bg-slate-50/80 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'
                style={{ borderColor: brand.border }}
              >
                <div>
                  <h3 className='text-lg md:text-xl font-extrabold text-slate-900'>
                    Ready to shortlist universities and scholarships?
                  </h3>
                  <p className='mt-1 text-sm text-slate-700 max-w-xl'>
                    Share your scores and goals — we will send a structured
                    roadmap with potential countries, intakes, and next steps.
                  </p>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <Link
                    href='/consult'
                    className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md'
                    style={{ background: brand.primary }}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className='mt-10 w-full [content-visibility:auto]'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className='relative aspect-16/10 overflow-hidden rounded-2xl border bg-[#F5F3FA]'
                    style={{ borderColor: brand.border }}
                  >
                    <Image
                      src={`https://picsum.photos/seed/overseas-${n}/800/500`}
                      alt={`Study overseas campus ${n}`}
                      fill
                      className='object-cover transition duration-500 hover:scale-105'
                      sizes='(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 25vw'
                      priority={n === 1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyframes + reduced motion */}
      <style jsx>{`
        @keyframes bgShift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-bgShift {
          animation: bgShift 18s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-bgShift,
          .animate-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  )
}
