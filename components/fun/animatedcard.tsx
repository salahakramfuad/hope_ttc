export default function HeroIllustration() {
  return (
    <div className='relative w-full h-full min-h-[520px] antialiased'>
      <div className='relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-amber-200/60 shadow-[0_20px_60px_rgba(245,158,11,0.12)] dark:border-white/10'>
        {/* Soft backdrop */}
        <div className='relative h-[520px] bg-[radial-gradient(80%_60%_at_50%_20%,#fff7ed,transparent_70%)] dark:bg-[radial-gradient(80%_60%_at_50%_20%,#0b1220,transparent_70%)]'>
          {/* Subtle grid noise */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]'
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              color: 'rgb(15 23 42)' // slate-900-ish; dark mode handled by opacity
            }}
          />

          {/* Center badge */}
          <div className='absolute inset-0 m-auto h-[280px] w-[280px] rounded-full border border-amber-200/60 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:bg-white/5 dark:border-white/15' />

          {/* Cards */}
          <div className='absolute inset-0'>
            <div className='mx-auto flex h-full w-full max-w-4xl items-center justify-center gap-6 px-6'>
              <div className='hidden md:block basis-[32%]'>
                <ElegantCard
                  emoji='📚'
                  title='Live Classes'
                  text='Interactive sessions with expert tutors'
                  accent='from-rose-50 to-amber-50 dark:from-white/5 dark:to-white/0'
                  pillBg='bg-rose-100 text-rose-900 dark:bg-white/10 dark:text-white'
                />
              </div>
              <div className='basis-[36%]'>
                <ElegantCard
                  emoji='🎯'
                  title='Mock Tests'
                  text='Real exam simulations & analytics'
                  accent='from-amber-50 to-sky-50 dark:from-white/5 dark:to-white/0'
                  pillBg='bg-amber-100 text-amber-900 dark:bg-white/10 dark:text-white'
                  featured
                />
              </div>
              <div className='hidden md:block basis-[32%]'>
                <ElegantCard
                  emoji='✈️'
                  title='Study Abroad'
                  text='Application-to-visa guidance'
                  accent='from-sky-50 to-rose-50 dark:from-white/5 dark:to-white/0'
                  pillBg='bg-sky-100 text-sky-900 dark:bg-white/10 dark:text-white'
                />
              </div>
            </div>
          </div>

          {/* Footer ribbon */}
          <div className='absolute inset-x-0 bottom-6'>
            <div className='mx-auto w-fit rounded-full border border-amber-200/60 bg-white/70 px-4 py-1.5 text-[12px] font-semibold tracking-wide text-amber-900 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/90'>
              Hope TTC — Learn · Practice · Shine ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Elegant Card (simplified) ---------- */
function ElegantCard({
  emoji,
  title,
  text,
  accent = 'from-amber-50 to-rose-50',
  pillBg = 'bg-amber-100 text-amber-900',
  featured = false
}: {
  emoji: string
  title: string
  text: string
  accent?: string
  pillBg?: string
  featured?: boolean
}) {
  return (
    <div
      className={[
        'relative h-full min-h-[160px] rounded-2xl border bg-white/70 p-4 backdrop-blur-md',
        'border-amber-100/70 shadow-[0_10px_30px_rgba(245,158,11,0.10)]',
        'dark:bg-white/5 dark:border-white/10 dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]',
        featured ? 'ring-1 ring-amber-300/40 dark:ring-white/10' : ''
      ].join(' ')}
    >
      {/* top glow */}
      <div
        aria-hidden
        className={[
          'absolute inset-x-0 top-0 h-10 rounded-t-2xl opacity-60',
          'bg-linear-to-r',
          accent
        ].join(' ')}
      />

      <div className='relative z-10'>
        <div className='mb-2.5 flex items-center gap-2'>
          <div
            className={[
              'flex h-10 w-10 items-center justify-center rounded-full text-base',
              pillBg
            ].join(' ')}
          >
            {emoji}
          </div>
          <span className='text-[14px] font-extrabold tracking-tight text-amber-900 dark:text-white'>
            {title}
          </span>
        </div>
        <p className='text-[12.5px] leading-relaxed text-amber-900/80 dark:text-white/80'>
          {text}
        </p>
      </div>
    </div>
  )
}
