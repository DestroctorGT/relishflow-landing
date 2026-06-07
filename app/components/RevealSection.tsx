'use client'

import { useRef, useEffect, type ReactNode } from 'react'

export default function RevealSection({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)

    if (el.getBoundingClientRect().top < window.innerHeight * 0.92 && el.getBoundingClientRect().bottom > 0) {
      el.classList.add('in')
    }

    setTimeout(() => el.classList.add('in'), 2500)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
