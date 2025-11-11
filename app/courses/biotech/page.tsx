// app/biotech/page.tsx
import Link from 'next/link'
import React from 'react'

export default function BiotechPage() {
  // HOPE TTC light palette
  const brand = {
    primary: '#9C27B0',
    primarySoft: 'rgba(156,39,176,0.10)',
    violet: '#7C3AED',
    pink: '#EC4899',
    bg: '#FCFAFF',
    text: '#11181C',
    subText: 'rgba(17,24,28,0.75)',
    border: 'rgba(0,0,0,0.08)'
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
            `radial-gradient(40% 40% at 85% 30%, rgba(124,58,237,0.10) 0%, transparent 60%),` +
            `radial-gradient(35% 35% at 40% 85%, rgba(236,72,153,0.08) 0%, transparent 60%)`
        }}
      />

      <section className='relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        {/* HERO */}
        <header className='text-center'>
          <span
            className={pill}
            style={{
              color: brand.primary,
              border: `1px solid ${brand.primary}40`,
              background: brand.primarySoft
            }}
          >
            Biotechnology @ HOPE TTC
          </span>

          <h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'>
            Learn <span style={{ color: brand.primary }}>Biotech</span>. Master{' '}
            <span style={{ color: brand.violet }}>Wet-Lab & Data</span>. Build{' '}
            <span style={{ color: brand.pink }}>Real-world Skills</span>.
          </h1>

          <p
            className='mx-auto mt-4 max-w-2xl text-base md:text-lg'
            style={{ color: brand.subText }}
          >
            From pipettes to Python—foundations of molecular biology,
            bioinformatics, and lab practices through project-based learning.
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
            { k: 'Project-First', v: '10+ Experiments' },
            { k: 'Dual Focus', v: 'Wet-Lab + Bioinfo' },
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

        {/* TRACKS */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Learning Tracks
          </h2>
          <p className='mt-2' style={{ color: brand.subText }}>
            Choose your entry point. Each track finishes with a showcase
            project.
          </p>

          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'Molecular Biology',
                tag: 'Beginner',
                color: brand.primary,
                bullets: [
                  'DNA/RNA basics',
                  'PCR, Gel Electrophoresis',
                  'Sterile technique & safety'
                ]
              },
              {
                title: 'Bioinformatics',
                tag: 'Intermediate',
                color: brand.violet,
                bullets: [
                  'FASTA/BLAST, NCBI',
                  'Python & Pandas basics',
                  'Sequence alignment & visualization'
                ]
              },
              {
                title: 'Applied Biotech',
                tag: 'Advanced',
                color: brand.pink,
                bullets: [
                  'Synthetic biology intro',
                  'qPCR & quantification',
                  'Small project design & reporting'
                ]
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

        {/* CURRICULUM SNAPSHOT */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Curriculum Snapshot
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-2'>
            {[
              {
                title: 'Core Lab Skills',
                items: [
                  'Pipetting & calibration',
                  'Buffer prep & pH',
                  'Aseptic technique'
                ]
              },
              {
                title: 'Molecular Techniques',
                items: [
                  'DNA extraction',
                  'PCR optimization',
                  'Gel imaging & analysis'
                ]
              },
              {
                title: 'Data & Bioinformatics',
                items: [
                  'FASTA/FASTQ basics',
                  'BLAST & Clustal Ω',
                  'Intro to Python & Pandas'
                ]
              },
              {
                title: 'Ethics & Safety',
                items: [
                  'Lab safety & PPE',
                  'Biosafety levels',
                  'Data integrity & reporting'
                ]
              }
            ].map((c, i) => (
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
                  style={{
                    color: [
                      brand.primary,
                      brand.violet,
                      brand.pink,
                      brand.primary
                    ][i % 4]
                  }}
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

        {/* LABS & TOOLS */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Labs & Tools You’ll Use
          </h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            {[
              'PCR',
              'Gel Electrophoresis',
              'Centrifuge',
              'Micropipettes',
              'Spectrophotometer',
              'Agarose & Buffers',
              'NCBI / BLAST',
              'Clustal Ω',
              'Python',
              'Pandas',
              'Biopython'
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

        {/* PROJECTS */}
        <section className='mt-14'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
            Capstone Projects
          </h2>
          <div className='mt-6 grid gap-6 md:grid-cols-3'>
            {[
              {
                title: 'PCR & Gel Report',
                desc: 'Amplify a target gene and quantify bands with ImageJ.',
                color: brand.primary
              },
              {
                title: 'Sequence Explorer',
                desc: 'Fetch sequences via NCBI and run BLAST + alignment.',
                color: brand.violet
              },
              {
                title: 'Mini-Research Poster',
                desc: 'Design a poster summarizing methods, results, and ethics.',
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
                  <div className='text-5xl'>🧬</div>
                  <h3 className='mt-3 text-lg font-bold'>{p.title}</h3>
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
                q: 'Do I need prior lab experience?',
                a: 'No—Beginners start with safety, pipetting, and core lab skills.'
              },
              {
                q: 'Are lab materials provided?',
                a: 'Core consumables are available in-center; you’ll receive a checklist before class.'
              },
              {
                q: 'Will I learn coding?',
                a: 'Yes—bioinformatics introduces Python for sequence handling and analysis.'
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
                Start your Biotech journey today
              </h3>
              <p className='text-sm' style={{ color: brand.subText }}>
                Book a free counseling call and get the detailed syllabus.
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
