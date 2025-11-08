'use client'

import Link from 'next/link'
import Image from 'next/image'

const COPYRIGHT_YEAR = new Date().getFullYear()

const BRAND = {
  base: '#92278F',
  hover: '#7E1F7B',
  tint: '#C96AD1',
  border: 'rgba(17,24,39,0.12)'
}

function SocialIcon({ name }: { name: 'Facebook' | 'Instagram' | 'LinkedIn' }) {
  const common = 'h-5 w-5'
  switch (name) {
    case 'Facebook':
      return (
        <svg
          className={common}
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.9v-9.294H9.934v-3.62H12.9V8.414c0-2.94 1.794-4.544 4.414-4.544 1.261 0 2.584.226 2.584.226v2.84h-1.456c-1.436 0-1.885.89-1.885 1.804v2.145h3.205l-.512 3.62h-2.693V24h5.12C23.41 24 24 23.41 24 22.675V1.325C24 .59 23.41 0 22.675 0z' />
        </svg>
      )
    case 'Instagram':
      return (
        <svg
          className={common}
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M12 2.2c3.2 0 3.6.01 4.9.07 1.3.06 2.4.3 3.3 1.2.9.9 1.2 2 1.2 3.3.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.06 1.3-.3 2.4-1.2 3.3-.9.9-2 1.2-3.3 1.2-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.3-.06-2.4-.3-3.3-1.2-.9-.9-1.2-2-1.2-3.3C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.9c.06-1.3.3-2.4 1.2-3.3.9-.9 2-1.2 3.3-1.2C8.4 2.21 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 100 13.4 6.7 6.7 0 000-13.4zm7-1.2a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0zM12 8a4 4 0 110 8 4 4 0 010-8z' />
        </svg>
      )
    case 'LinkedIn':
      return (
        <svg
          className={common}
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M20.451 20.451h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.355V9h3.412v1.561h.048c.476-.9 1.64-1.852 3.375-1.852 3.611 0 4.279 2.378 4.279 5.469v6.273zM5.337 7.433a2.061 2.061 0 110-4.122 2.061 2.061 0 010 4.122zM6.96 20.451H3.71V9h3.25v11.451z' />
        </svg>
      )
  }
}

export default function Footer() {
  return (
    <footer role='contentinfo' className='bg-white'>
      {/* Top: Brand + Nav + Contact */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10'>
          {/* Brand & blurb */}
          <div className='lg:col-span-4'>
            <Link
              href='/'
              className='inline-flex items-center gap-3'
              aria-label='HOPE TTC Home'
            >
              <span className='relative inline-flex'>
                <Image
                  src='/logo.jpg'
                  alt='HOPE TTC logo'
                  width={64}
                  height={64}
                  className='object-contain rounded-full'
                  priority={false}
                />
              </span>
              <span className='text-2xl font-extrabold tracking-wide text-gray-900 leading-tight'>
                HOPE <span style={{ color: BRAND.base }}>TTC</span>
              </span>
            </Link>

            <p className='mt-4 text-sm leading-6 text-gray-600'>
              Training & Test Center for IELTS, SAT, Spoken English, and
              end-to-end Study Abroad support.
            </p>

            {/* Socials (with real icons) */}
            <div
              className='mt-6 flex items-center gap-3'
              aria-label='Social links'
            >
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/HopeTTC' },
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${s.label} (opens in a new tab)`}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border text-gray-600 transition-colors'
                  style={{ borderColor: BRAND.border }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = BRAND.base)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#4B5563')
                  }
                >
                  <SocialIcon
                    name={s.label as 'Facebook' | 'Instagram' | 'LinkedIn'}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (from navbar) */}
          <nav
            className='lg:col-span-5 grid grid-cols-2 gap-8'
            aria-label='Footer navigation'
          >
            <div>
              <h3 className='text-sm font-semibold tracking-wide text-gray-900'>
                Explore
              </h3>
              <ul className='mt-4 space-y-2 text-gray-700'>
                <li>
                  <Link
                    href='/'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/study_abroad'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link
                    href='/admission'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-sm font-semibold tracking-wide text-gray-900'>
                Courses
              </h3>
              <ul className='mt-4 space-y-2 text-gray-700'>
                <li>
                  <Link
                    href='/itels'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    IELTS
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sat'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    SAT
                  </Link>
                </li>
                <li>
                  <Link
                    href='/spokenEnglish'
                    className='hover:underline hover:decoration-2'
                    style={{ textDecorationColor: BRAND.base }}
                  >
                    Spoken English
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Contact */}
          <div className='lg:col-span-3'>
            <h3 className='text-sm font-semibold tracking-wide text-gray-900'>
              Get in touch
            </h3>
            <address className='not-italic mt-4 text-sm text-gray-600 space-y-2'>
              <p>
                <strong className='text-gray-900'>Address:</strong> Plot 7, Road
                6, Sector 4, Uttara, Dhaka-1230
              </p>
              <p>
                <strong className='text-gray-900'>Phone:</strong>{' '}
                <a
                  href='tel:+8801700000000'
                  className='underline decoration-1 underline-offset-2 hover:decoration-2'
                  style={{ textDecorationColor: BRAND.base }}
                >
                  +880 1700 000 000
                </a>
              </p>
              <p>
                <strong className='text-gray-900'>Email:</strong>{' '}
                <a
                  href='mailto:info@hopettc.com'
                  className='underline decoration-1 underline-offset-2 hover:decoration-2'
                  style={{ textDecorationColor: BRAND.base }}
                >
                  info@hopettc.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Soft divider */}
        <div
          className='mt-12 h-px w-full'
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(17,24,39,0.12), transparent)'
          }}
        />

        {/* Bottom bar */}
        <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600'>
          <p>&copy; {COPYRIGHT_YEAR} HOPE TTC. All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <Link href='/privacy' className='hover:text-gray-900'>
              Privacy
            </Link>
            <Link href='/terms' className='hover:text-gray-900'>
              Terms
            </Link>
            <a
              href='mailto:info@hopettc.com'
              className='inline-flex items-center gap-2 hover:text-gray-900'
            >
              <span
                className='h-1.5 w-1.5 rounded-full'
                style={{ backgroundColor: BRAND.base }}
              />
              info@hopettc.com
            </a>
          </div>
        </div>
      </div>

      {/* Elegant gradient accent */}
      <div
        className='h-1 w-full'
        style={{
          backgroundImage: `linear-gradient(90deg, ${BRAND.base}, ${BRAND.tint})`
        }}
      />
    </footer>
  )
}
