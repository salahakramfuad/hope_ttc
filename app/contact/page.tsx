// app/contact/page.tsx
import React from 'react'

export default function ContactPage() {
  const brand = { primary: '#9C27B0' } // Hope TTC purple

  return (
    <main className='relative min-h-screen overflow-hidden scroll-smooth'>
      {/* Soft gradient background */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-br from-purple-50 via-rose-50 to-emerald-50' />
        <div
          aria-hidden
          className='absolute -top-24 -left-24 h-56 w-56 rounded-full blur-3xl opacity-30 sm:h-72 sm:w-72'
          style={{ background: brand.primary }}
        />
        <div
          aria-hidden
          className='absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20 sm:h-80 sm:w-80'
          style={{ background: '#22c55e' }}
        />
      </div>

      {/* Page content */}
      <div className='relative'>
        {/* Hero */}
        <section className='mx-auto max-w-6xl px-4 pt-12 pb-6 text-center sm:px-6 sm:pt-16 sm:pb-8 md:pt-20'>
          <h1
            className='text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl'
            style={{ color: brand.primary }}
          >
            Contact Hope TTC
          </h1>
          <p className='mx-auto mt-3 max-w-2xl text-gray-700 text-base sm:text-lg'>
            Hope TTC is a true international level training &amp; testing
            center. We offer: IELTS, Coding.
          </p>

          {/* Quick actions */}
          <div className='mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center'>
            <a
              href='tel:01949308141'
              className='w-full sm:w-auto rounded-xl px-4 py-3 text-center text-white shadow-sm ring-1 ring-black/5'
              style={{ background: brand.primary }}
            >
              Call: 01949-308141
            </a>
            <a
              href='mailto:info@hopettc.com'
              className='w-full sm:w-auto rounded-xl px-4 py-3 text-center text-purple-700 bg-white/80 backdrop-blur ring-1 ring-black/10 hover:bg-white'
            >
              Email: info@hopettc.com
            </a>
            <a
              href='https://hopettc.com'
              target='_blank'
              rel='noreferrer'
              className='w-full sm:w-auto rounded-xl px-4 py-3 text-center text-purple-700 bg-white/80 backdrop-blur ring-1 ring-black/10 hover:bg-white'
            >
              Visit Website
            </a>
          </div>
        </section>

        {/* Info */}
        <section className='mx-auto max-w-6xl px-4 pb-10 sm:px-6'>
          <div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3'>
            <div className='rounded-2xl bg-white/80 backdrop-blur p-4 sm:p-5 shadow-md ring-1 ring-black/10'>
              <h2
                className='text-base sm:text-lg font-semibold'
                style={{ color: brand.primary }}
              >
                Address
              </h2>
              <p className='mt-1 text-gray-700 text-sm sm:text-base'>
                Plot-7, Road-6, Sector-4,
                <br />
                Uttara, Dhaka, Bangladesh
              </p>
            </div>

            <div className='rounded-2xl bg-white/80 backdrop-blur p-4 sm:p-5 shadow-md ring-1 ring-black/10'>
              <h2
                className='text-base sm:text-lg font-semibold'
                style={{ color: brand.primary }}
              >
                Contact
              </h2>
              <ul className='mt-1 space-y-1 text-gray-700 text-sm sm:text-base'>
                <li>
                  Phone:{' '}
                  <a
                    href='tel:01949308141'
                    className='underline decoration-purple-200 hover:text-purple-700'
                  >
                    01949-308141
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a
                    href='mailto:info@hopettc.com'
                    className='underline decoration-purple-200 hover:text-purple-700'
                  >
                    info@hopettc.com
                  </a>
                </li>
                <li>
                  Website:{' '}
                  <a
                    href='https://hopettc.com'
                    target='_blank'
                    rel='noreferrer'
                    className='underline decoration-purple-200 hover:text-purple-700 break-all'
                  >
                    hopettc.com
                  </a>
                </li>
              </ul>
            </div>

            <div className='rounded-2xl bg-white/80 backdrop-blur p-4 sm:p-5 shadow-md ring-1 ring-black/10'>
              <h2
                className='text-base sm:text-lg font-semibold'
                style={{ color: brand.primary }}
              >
                Hours &amp; Rating
              </h2>
              <p className='mt-1 text-gray-700 text-sm sm:text-base'>
                Open now
              </p>
              <p className='text-gray-500 text-xs sm:text-sm'>
                Not yet rated (2 Reviews)
              </p>
              <p className='mt-3 text-gray-500 text-xs sm:text-sm'>
                Page · Test Preparation Center
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className='mx-auto max-w-6xl px-4 pb-16 sm:px-6'>
          <h2
            className='mb-3 text-lg sm:text-xl font-semibold'
            style={{ color: brand.primary }}
          >
            Find us on Google Maps
          </h2>
          <div className='rounded-2xl border border-black/10 shadow-md overflow-hidden bg-white/80 backdrop-blur'>
            {/* Responsive 16:9 wrapper */}
            <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
              <iframe
                className='absolute inset-0 h-full w-full'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.797609401389!2d90.39961447556766!3d23.861319578594973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42256771bad%3A0x662d13081edbb710!2sInternational%20Hope%20School%20Bangladesh!5e0!3m2!1sen!2sbd!4v1762722433203!5m2!1sen!2sbd'
                style={{ border: 0 }}
                loading='lazy'
                allowFullScreen
                referrerPolicy='no-referrer-when-downgrade'
                title='Hope TTC Location'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
