import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  description: string
  href: string
  image: string
  badge?: string
  accent?: string
}

export default function CourseCard({
  title,
  description,
  href,
  image,
  badge,
  accent = '#0A7EA4'
}: Props) {
  return (
    <Link
      href={href}
      className='block w-64 overflow-hidden rounded-[28px] bg-white shadow-sm transition-all hover:shadow-xl'
      style={{
        border: `1px solid ${accent}22`,
        boxShadow: `0 10px 30px ${accent}14`
      }}
    >
      <div className='relative h-36 w-full'>
        <Image
          src={image}
          alt={title}
          fill
          sizes='256px'
          className='object-cover'
        />
        {badge && (
          <span
            className='absolute left-4 top-4 rounded-xl px-3 py-1 text-xs font-semibold'
            style={{
              color: accent,
              background: '#FFFFFFE6',
              border: `1px solid ${accent}33`
            }}
          >
            {badge}
          </span>
        )}
      </div>

      <div className='space-y-3 p-5'>
        <h3 className='text-xl font-semibold tracking-tight text-[#11181C]'>
          {title}
        </h3>
        <p className='text-[15px] leading-6 text-slate-600'>{description}</p>
        <span
          className='inline-flex items-center pt-1 text-[15px] font-semibold'
          style={{ color: accent }}
        >
          View details{' '}
          <span aria-hidden className='ml-1'>
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
