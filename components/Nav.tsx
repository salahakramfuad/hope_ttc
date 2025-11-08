'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins'
})

type SubLink = { title: string; href: string }
type MenuItem = { title: string; href?: string; subLinks?: SubLink[] }

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(' ')
}

const normalize = (s = '') =>
  s.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/'

const isActive = (href?: string, current?: string) => {
  if (!href) return false
  const p = normalize(current ?? '')
  const h = normalize(href)
  if (h === '/') return p === '/'
  return p === h || p.startsWith(h + '/')
}

export default function Nav() {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [dropdownOpenIdx, setDropdownOpenIdx] = useState<number | null>(null)
  const [mobileDropdownOpenIdx, setMobileDropdownOpenIdx] = useState<
    number | null
  >(null)

  const navRef = useRef<HTMLElement | null>(null)
  const drawerRef = useRef<HTMLElement | null>(null)

  const menuItems: MenuItem[] = useMemo(
    () => [
      { title: 'Home', href: '/' },
      {
        title: 'Courses',
        subLinks: [
          { title: 'IELTS', href: '/ielts' }, // fixed path typo
          { title: 'SAT', href: '/sat' },
          { title: 'Spoken English', href: '/spoken-english' }
        ]
      },
      { title: 'Study Abroad', href: '/study_abroad' },
      { title: 'Admissions', href: '/admission' },
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' }
    ],
    []
  )

  // close dropdowns / drawer on outside click & esc
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const t = e.target as Node
      const insideNav = navRef.current?.contains(t)
      const insideDrawer = drawerRef.current?.contains(t)
      if (!insideNav) setDropdownOpenIdx(null)
      if (isDrawerOpen && !insideDrawer) setIsDrawerOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpenIdx(null)
        setIsDrawerOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocMouseDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [isDrawerOpen])

  // lock body scroll when drawer open
  useEffect(() => {
    if (!isDrawerOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isDrawerOpen])

  const toggleDropdown = (idx: number) =>
    setDropdownOpenIdx((prev) => (prev === idx ? null : idx))
  const toggleMobileDropdown = (idx: number) =>
    setMobileDropdownOpenIdx((prev) => (prev === idx ? null : idx))

  return (
    <header
      className={classNames(
        inter.variable,
        poppins.variable,
        // raise z-index to always sit above page content (incl. footer)
        'sticky top-0 z-70 backdrop-blur supports-backdrop-filter:bg-white/80 bg-white/95 border-b'
      )}
      style={{ borderColor: 'rgba(17,24,39,0.12)' }}
    >
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 mx-auto w-max rounded-lg bg-indigo-600 px-3 py-2 text-white'
      >
        Skip to content
      </a>

      <nav ref={navRef} aria-label='Primary' className='mx-auto max-w-7xl'>
        <div className='flex items-center justify-between px-4 py-3'>
          {/* Brand */}
          <Link
            href='/'
            className='flex items-center gap-3 group no-underline hover:no-underline focus:no-underline'
          >
            <Image
              src='/logo.jpg'
              alt='Hope TTC'
              width={48}
              height={48}
              priority
              className='rounded-full object-contain ring-1 ring-gray-200 group-hover:ring-indigo-200 transition'
            />
            <span
              className={classNames(
                'hidden md:block text-lg font-semibold leading-tight text-gray-900 tracking-tight',
                'font-(--font-poppins)'
              )}
            >
              Hope Training & Testing Center
            </span>
          </Link>

          {/* Desktop menu */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-2 text-[15px]'>
              {menuItems.map((item, idx) => {
                const active = isActive(item.href, pathname)
                const sectionActive = item.subLinks?.some((s) =>
                  isActive(s.href, pathname)
                )

                if (item.subLinks) {
                  return (
                    <li key={idx} className='relative'>
                      <button
                        type='button'
                        aria-haspopup='menu'
                        aria-expanded={dropdownOpenIdx === idx}
                        onClick={() => toggleDropdown(idx)}
                        onKeyDown={(
                          e: React.KeyboardEvent<HTMLButtonElement>
                        ) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            toggleDropdown(idx)
                          }
                        }}
                        className={classNames(
                          'flex items-center gap-2 py-2 px-3 rounded-lg transition-colors',
                          sectionActive
                            ? 'text-indigo-800 bg-indigo-50'
                            : 'text-gray-700 hover:text-indigo-800 hover:bg-indigo-50',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300'
                        )}
                      >
                        <span className='font-medium'>Courses</span>
                        <svg
                          className={classNames(
                            'w-4 h-4 transition-transform',
                            dropdownOpenIdx === idx && 'rotate-180'
                          )}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M19 9l-7 7-7-7'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>

                      {dropdownOpenIdx === idx && (
                        <div
                          role='menu'
                          className='absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-indigo-100/70'
                        >
                          <ul className='py-2 text-gray-800'>
                            {item.subLinks.map((sub, sIdx) => {
                              const subActive = isActive(sub.href, pathname)
                              return (
                                <li key={sIdx}>
                                  <Link
                                    href={sub.href}
                                    className={classNames(
                                      'block px-4 py-2 rounded-md transition-colors no-underline hover:no-underline focus:no-underline',
                                      subActive
                                        ? 'text-indigo-800 bg-indigo-50'
                                        : 'hover:bg-indigo-50 hover:text-indigo-800'
                                    )}
                                    onClick={() => setDropdownOpenIdx(null)}
                                  >
                                    {sub.title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                }

                return (
                  <li key={idx}>
                    <Link
                      href={item.href as string}
                      className={classNames(
                        'py-2 px-3 font-medium rounded-lg transition-colors no-underline hover:no-underline focus:no-underline',
                        active
                          ? 'text-indigo-800 bg-indigo-50'
                          : 'text-gray-700 hover:text-indigo-800 hover:bg-indigo-50'
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}

              {/* CTA */}
              <li className='ml-1'>
                <Link
                  href='/admission/apply'
                  className='inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 no-underline hover:no-underline focus:no-underline'
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className='lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-gray-700 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300'
            aria-controls='mobile-drawer'
            aria-expanded={isDrawerOpen}
            aria-label='Open main menu'
            type='button'
          >
            <svg
              className='w-5 h-5'
              viewBox='0 0 17 14'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M1 1h15M1 7h15M1 13h15'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop (above everything incl. footer) */}
      {isDrawerOpen && (
        <button
          aria-label='Close menu'
          onClick={() => setIsDrawerOpen(false)}
          // very high z-index so it never sits beneath sticky/footer elements
          className='fixed inset-0 z-80 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden'
          type='button'
        />
      )}

      {/* Drawer */}
      <aside
        id='mobile-drawer'
        ref={drawerRef}
        className={classNames(
          // full-height panel that cannot collide with footer
          'fixed inset-y-0 right-0 z-90 w-4/5 max-w-sm transform bg-white shadow-2xl transition-transform duration-200 lg:hidden',
          // use dynamic viewport height to avoid iOS/Android URL bar issues
          'h-dvh max-h-dvh overflow-hidden',
          // respect safe areas (top & bottom)
          'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role='dialog'
        aria-modal='true'
        aria-hidden={!isDrawerOpen}
        aria-label='Mobile Navigation'
        style={{ height: '100dvh' }}
      >
        {/* Drawer content as a flex column: non-scrolling header + scrolling body */}
        <div className='flex h-full flex-col'>
          {/* Drawer header */}
          <div className='px-4 pb-3 sticky top-0 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80:bg-white/80 border-b border-black/10 z-10'>
            <div className='flex items-center justify-between py-2'>
              <span
                className={classNames(
                  'font-semibold text-gray-900',
                  'font-(--font-poppins)'
                )}
              >
                Menu
              </span>
              <button
                type='button'
                aria-label='Close'
                onClick={() => setIsDrawerOpen(false)}
                className='inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-indigo-50'
              >
                <svg
                  className='w-4.5 h-4.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  aria-hidden='true'
                >
                  <path
                    d='M6 6l12 12M18 6L6 18'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className='flex-1 overflow-y-auto overscroll-contain px-4 py-4'>
            <nav className='grid gap-2' aria-label='Mobile navigation'>
              {menuItems.map((item, idx) => (
                <div key={idx} className='space-y-2'>
                  {item.subLinks ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(idx)}
                        className='flex w-full items-center justify-between p-2 text-sm font-medium rounded-lg hover:bg-indigo-50 text-gray-900'
                        aria-expanded={mobileDropdownOpenIdx === idx}
                        aria-controls={`mobile-sub-${idx}`}
                        type='button'
                      >
                        <span className='font-medium'>Courses</span>
                        <svg
                          className={classNames(
                            'w-4 h-4 transition-transform',
                            mobileDropdownOpenIdx === idx && 'rotate-180'
                          )}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M19 9l-7 7-7-7'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                      <div
                        id={`mobile-sub-${idx}`}
                        className={classNames(
                          mobileDropdownOpenIdx === idx ? 'block' : 'hidden',
                          'ml-3'
                        )}
                      >
                        {item.subLinks.map((sub, sIdx) => {
                          const activeSub = isActive(sub.href, pathname)
                          return (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setIsDrawerOpen(false)}
                              className={classNames(
                                'block p-2 text-sm rounded-md no-underline hover:no-underline focus:no-underline',
                                activeSub
                                  ? 'text-indigo-800 bg-indigo-50'
                                  : 'hover:bg-indigo-50 text-gray-800'
                              )}
                              aria-current={activeSub ? 'page' : undefined}
                            >
                              {sub.title}
                            </Link>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href as string}
                      onClick={() => setIsDrawerOpen(false)}
                      className={classNames(
                        'block p-2 text-sm font-medium rounded-lg no-underline hover:no-underline focus:no-underline',
                        isActive(item.href, pathname)
                          ? 'text-indigo-800 bg-indigo-50'
                          : 'hover:bg-indigo-50 text-gray-900'
                      )}
                      aria-current={
                        isActive(item.href, pathname) ? 'page' : undefined
                      }
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href='/admission/apply'
                onClick={() => setIsDrawerOpen(false)}
                className='mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 no-underline hover:no-underline focus:no-underline'
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </header>
  )
}
