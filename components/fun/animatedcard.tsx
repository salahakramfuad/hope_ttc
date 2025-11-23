'use client'

import { motion } from 'framer-motion'

export default function HeroIllustration() {
  return (
    <div className='relative w-full h-full min-h-[520px] antialiased'>
      <motion.div
        className='relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-amber-200/60 shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-white/10'
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Soft backdrop */}
        <div className='relative h-[520px] overflow-hidden bg-linear-to-br from-amber-50 via-rose-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
          {/* Vivid radial washes */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 mix-blend-screen opacity-80 dark:opacity-60'
            style={{
              background:
                'radial-gradient(70% 60% at 18% 22%, rgba(251,191,36,0.55) 0%, rgba(251,191,36,0.15) 38%, transparent 70%), radial-gradient(65% 55% at 82% 72%, rgba(244,114,182,0.55) 0%, rgba(244,114,182,0.1) 40%, transparent 70%)'
            }}
          />

          {/* Subtle static grid (no animation) */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.14]'
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.7) 1px, transparent 1px)',
              backgroundSize: '22px 22px'
            }}
          />

          {/* Orbit ring (static now) */}
          <div
            aria-hidden
            className='absolute inset-0 m-auto h-[360px] w-[360px] rounded-full border border-amber-200/40 dark:border-amber-400/20'
            style={{
              boxShadow:
                '0 0 120px rgba(251,191,36,0.45), 0 0 220px rgba(56,189,248,0.3)'
            }}
          />

          {/* Core badge (single gentle pulse) */}
          <motion.div
            className='absolute inset-0 m-auto h-[260px] w-[260px] rounded-full border border-white/70 bg-white/60 backdrop-blur-xl shadow-[0_18px_70px_rgba(15,23,42,0.18)] dark:bg-white/5 dark:border-white/15'
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              aria-hidden
              className='absolute inset-10 rounded-full bg-linear-to-br from-amber-100/70 via-white/40 to-sky-100/60 dark:from-amber-400/20 dark:via-transparent dark:to-sky-400/20 blur-[1px]'
            />
            <div className='relative flex h-full flex-col items-center justify-center text-center'>
              <span className='text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700/90 dark:text-amber-200/80'>
                Premium IELTS & SAT Prep
              </span>
            </div>
          </motion.div>

          {/* Floating accent chips (only entrance animation) */}
          <motion.div
            className='absolute left-8 top-10 hidden text-[11px] md:flex'
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div className='rounded-full border border-amber-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-800 shadow-sm backdrop-blur dark:border-white/20 dark:bg-white/5 dark:text-slate-100'>
              9.0 Band Faculty · Small Batches
            </div>
          </motion.div>

          <motion.div
            className='absolute right-8 bottom-16 hidden text-[11px] md:flex'
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className='flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-800 shadow-sm backdrop-blur dark:border-emerald-400/30 dark:bg-white/5 dark:text-slate-100'>
              <span className='inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse' />
              4.9 ★ Average Student Rating
            </div>
          </motion.div>

          {/* Cards row */}
          <div className='absolute inset-0'>
            <motion.div
              className='mx-auto flex h-full w-full max-w-4xl items-center justify-center gap-6 px-6'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delayChildren: 0.3, staggerChildren: 0.15 }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 }
                }}
                className='hidden md:block basis-[32%]'
              >
                <ElegantCard
                  emoji='📚'
                  title='Live Classes'
                  text='Daily live lessons, doubt-clearing rooms, and structured homework.'
                  accent='from-rose-50 to-amber-50 dark:from-white/5 dark:to-white/0'
                  pillBg='bg-rose-100 text-rose-900 dark:bg-white/10 dark:text-white'
                  floatDelay={0}
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 }
                }}
                className='basis-[36%]'
              >
                <ElegantCard
                  emoji='🎯'
                  title='Mock Tests'
                  text='Adaptive mocks, band-score predictions, and topic-wise analytics.'
                  accent='from-amber-50 to-sky-50 dark:from-white/5 dark:to-white/0'
                  pillBg='bg-amber-100 text-amber-900 dark:bg-white/10 dark:text-white'
                  featured
                  floatDelay={0.1}
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 }
                }}
                className='hidden md:block basis-[32%]'
              >
                <ElegantCard
                  emoji='✈️'
                  title='Study Abroad'
                  text='Shortlist universities, craft SOPs, and prepare for visa interviews.'
                  accent='from-sky-50 to-rose-50 dark:from-white/5 dark:to-white/0'
                  pillBg='bg-sky-100 text-sky-900 dark:bg-white/10 dark:text-white'
                  floatDelay={0.2}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Light sparkles */}
          <SparkleDot className='left-10 top-1/2' delay={0.2} />
          <SparkleDot className='right-16 top-1/3' delay={0.6} />
          <SparkleDot className='left-1/2 bottom-10' delay={1} />

          <div className='absolute inset-x-0 bottom-6'>
            <motion.div
              className='mx-auto w-fit rounded-full border border-amber-200/60 bg-white/80 px-5 py-1.5 text-[12px] font-semibold tracking-wide text-amber-900 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white/90'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
            >
              HOPE TTC · IELTS · SAT · Spoken English ✨
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

type ElegantCardProps = {
  emoji: string
  title: string
  text: string
  accent?: string
  pillBg?: string
  featured?: boolean
  floatDelay?: number
}

function ElegantCard({
  emoji,
  title,
  text,
  accent = 'from-amber-50 to-rose-50',
  pillBg = 'bg-amber-100 text-amber-900',
  featured = false,
  floatDelay = 0
}: ElegantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + (floatDelay || 0),
        ease: 'easeOut'
      }}
      whileHover={{
        y: -10,
        scale: 1.04,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      className={[
        'relative h-full min-h-[160px] rounded-2xl border bg-white/80 p-4 backdrop-blur-xl',
        'border-amber-100/70 shadow-[0_14px_40px_rgba(15,23,42,0.16)]',
        'dark:bg-white/5 dark:border-white/10 dark:shadow-[0_18px_55px_rgba(0,0,0,0.55)]',
        featured ? 'ring-1 ring-amber-300/50 dark:ring-amber-200/20' : ''
      ].join(' ')}
    >
      <div
        aria-hidden
        className={[
          'absolute inset-x-0 top-0 h-10 rounded-t-2xl opacity-70',
          'bg-linear-to-r',
          accent
        ].join(' ')}
      />

      <div className='relative z-10'>
        <div className='mb-2.5 flex items-center gap-2'>
          <div
            className={[
              'flex h-10 w-10 items-center justify-center rounded-full text-base shadow-sm',
              pillBg
            ].join(' ')}
          >
            {emoji}
          </div>
          <span className='text-[14px] font-semibold tracking-tight text-slate-900 dark:text-white'>
            {title}
          </span>
        </div>
        <p className='text-[12.5px] leading-relaxed text-slate-700/90 dark:text-slate-200/80'>
          {text}
        </p>
      </div>

      {featured && (
        <div
          aria-hidden
          className='pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-full bg-amber-200/40 blur-2xl dark:bg-amber-400/20'
        />
      )}
    </motion.div>
  )
}

function SparkleDot({
  className,
  delay = 0
}: {
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-amber-400/90 shadow-[0_0_18px_rgba(251,191,36,0.9)] dark:bg-amber-300 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    />
  )
}
