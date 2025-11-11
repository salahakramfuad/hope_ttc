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
    text: '#11181C'
  }

  return (
    <main
      className='relative min-h-screen overflow-hidden scroll-auto'
      style={{ color: brand.text }}
    >
      {/* ===== LIGHT, LOGO-FRIENDLY BACKGROUND (1 layer, GPU-friendly) ===== */}
      <div className='fixed inset-0 -z-20 bg-purple-50'>
        <div
          className='h-full w-full animate-bgShift will-change-transform'
          style={{
            background:
              // base
              `${brand.bg}, ` +
              // subtle brand gradients (static look; animation only moves background-position)
              `radial-gradient(48% 48% at 18% 20%, rgba(156,39,176,0.12) 0%, transparent 60%),` + // purple wash
              `radial-gradient(40% 40% at 82% 28%, rgba(139,92,246,0.10) 0%, transparent 60%),` + // violet wash
              `radial-gradient(36% 36% at 42% 88%, rgba(236,72,153,0.08) 0%, transparent 60%)`, // pink wash
            backgroundBlendMode: 'normal',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '140% 140%'
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <section className='relative w-full py-16 md:py-24 [content-visibility:auto]'>
        {/* HERO */}
        <header className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
          <span
            className='inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-sm'
            style={{
              color: brand.primary,
              border: `1px solid ${brand.primary}40`,
              background: 'rgba(156,39,176,0.10)'
            }}
          >
            Study Overseas
          </span>

          <h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'>
            Turn Your Global Dream Into a Plan
          </h1>
          <p className='mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-700'>
            University shortlisting, SOP &amp; essays, scholarships, and visa
            guidance — end-to-end support tailored to your profile.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <Link
              href='/get-enrolled'
              className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition shadow-sm'
              style={{ background: brand.primary }}
            >
              Get a Free Consultation <span>→</span>
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

        {/* Glass panel */}
        <div className='mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div
            className='bg-pink-50  rounded-3xl p-6 md:p-10 shadow-sm'
            style={{
              border: '1px solid rgba(0,0,0,0.08)'
            }}
          >
            {/* Highlights */}
            <div className='grid gap-4 sm:grid-cols-3'>
              {[
                { k: 'Admit Rate', v: '92%' },
                { k: 'Scholarship Wins', v: '300+' },
                { k: 'Destinations', v: '10+' }
              ].map((h) => (
                <div
                  key={h.k}
                  className='rounded-2xl p-4 text-center bg-white border border-black/10'
                >
                  <div className='text-2xl md:text-3xl font-extrabold'>
                    {h.v}
                  </div>
                  <div className='mt-1 text-xs font-medium tracking-wide text-slate-600'>
                    {h.k}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature grid */}
            <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: 'Smart Shortlisting',
                  desc: 'Match your profile to programs using outcomes, funding, and visa-friendliness.',
                  icon: '🎯'
                },
                {
                  title: 'SOP & Essays',
                  desc: 'Narrative-driven statements edited for impact, clarity, and compliance.',
                  icon: '📝'
                },
                {
                  title: 'Scholarships',
                  desc: 'Identify merit & need-based awards; optimize timelines and paperwork.',
                  icon: '🎓'
                },
                {
                  title: 'Application Ops',
                  desc: 'LORs, documents, portals — we keep the moving parts on track.',
                  icon: '🧩'
                },
                {
                  title: 'Visa Guidance',
                  desc: 'Country-specific checklists, mock interviews, and proof-of-funds tips.',
                  icon: '🛂'
                },
                {
                  title: 'Pre-Departure',
                  desc: 'Housing, banking, sims, packing lists, and arrival orientation.',
                  icon: '🧭'
                }
              ].map((f) => (
                <div
                  key={f.title}
                  className='rounded-2xl p-6 bg-white border border-black/10 hover:shadow transition'
                >
                  <div className='h-12 w-12 rounded-xl bg-[#FCFAFF] border border-black/10 flex items-center justify-center text-2xl'>
                    {f.icon}
                  </div>
                  <h3 className='mt-4 text-lg font-bold'>{f.title}</h3>
                  <p className='mt-2 text-sm leading-relaxed text-slate-700'>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Countries marquee */}
            <div className='mt-10 overflow-hidden'>
              <div className='whitespace-nowrap animate-marquee will-change-transform'>
                {[
                  'USA',
                  'UK',
                  'Canada',
                  'Australia',
                  'Germany',
                  'Netherlands',
                  'Japan',
                  'Malaysia',
                  'UAE',
                  'Sweden',
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
                ].map((c, i) => (
                  <span
                    key={i}
                    className='mx-6 inline-flex items-center gap-2 font-semibold text-slate-800'
                  >
                    <span
                      className='inline-block h-2 w-2 rounded-full'
                      style={{ background: brand.primary }}
                    />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className='mt-10 grid gap-6 lg:grid-cols-3'>
              {[
                {
                  step: '01',
                  title: 'Profile & Goals',
                  desc: 'We map academics, budgets, and timelines to your destination goals.'
                },
                {
                  step: '02',
                  title: 'Build & Apply',
                  desc: 'Shortlist, SOP/LOR, documents, portals — applications submitted.'
                },
                {
                  step: '03',
                  title: 'Decide & Prep',
                  desc: 'Offers reviewed, scholarships applied, visa prepared, fly out.'
                }
              ].map((s) => (
                <div
                  key={s.step}
                  className='rounded-2xl p-6 bg-white border border-black/10'
                >
                  <div className='text-xs font-bold tracking-widest text-slate-600'>
                    STEP {s.step}
                  </div>
                  <h4 className='mt-2 text-lg font-bold'>{s.title}</h4>
                  <p className='mt-2 text-sm text-slate-700 leading-relaxed'>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className='mt-10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white border border-black/10'>
              <div>
                <h3 className='text-xl md:text-2xl font-extrabold'>
                  Ready to shortlist universities?
                </h3>
                <p className='text-sm text-slate-700'>
                  Get a personalized roadmap and application timeline.
                </p>
              </div>
              <div className='flex gap-3'>
                <Link
                  href='/get-enrolled'
                  className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition shadow-sm'
                  style={{ background: brand.primary }}
                >
                  Start Free Assessment
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
          </div>

          {/* Gallery (Next/Image is lazy by default; only first is priority) */}
          <div className='mt-10 w-full [content-visibility:auto]'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className='relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-[#F5F3FA]'
                >
                  <Image
                    src={`https://picsum.photos/seed/overseas-${n}/800/500`}
                    alt={`Study overseas campus ${n}`}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 25vw'
                    priority={n === 1}
                  />
                </div>
              ))}
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
