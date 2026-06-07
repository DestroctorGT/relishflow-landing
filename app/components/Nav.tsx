'use client'

import { useEffect, useState } from 'react'

function LogoFull({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 30" fill="none" aria-hidden="true">
      <path d="M6 20c7 0 8-11 17-11s10 11 17 11" stroke="#14837A" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="6" cy="20" r="2.5" fill="#0C5048"/>
      <circle cx="40" cy="20" r="2.5" fill="#66D8C0"/>
      <text x="50" y="21" fontFamily="Bricolage Grotesque" fontSize="15" fontWeight="600" letterSpacing="-0.5">
        <tspan fill="#0C1D1B">Relish</tspan>
        <tspan fill="#14837A">Flow</tspan>
      </text>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 transition-all duration-400 md:px-10 ${
        scrolled
          ? 'border-b border-[#DED5C5] bg-bone/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <a href="#hero" className="flex items-center gap-3 no-underline" aria-label="RelishFlow">
        <LogoFull className="h-7 w-auto" />
      </a>

      <div className="hidden items-center gap-1 md:flex">
        <a
          href="#como-funciona"
          className={`rounded-full px-3 py-2 text-sm no-underline transition-colors ${
            scrolled
              ? 'text-ink-soft hover:bg-bone-2 hover:text-ink'
              : 'text-[#A9C0BC] hover:bg-white/10 hover:text-[#F6F2EA]'
          }`}
        >
          Cómo funciona
        </a>
        <a
          href="#planes"
          className={`rounded-full px-3 py-2 text-sm no-underline transition-colors ${
            scrolled
              ? 'text-ink-soft hover:bg-bone-2 hover:text-ink'
              : 'text-[#A9C0BC] hover:bg-white/10 hover:text-[#F6F2EA]'
          }`}
        >
          Planes
        </a>
      </div>

      <a
        href="#cta"
        className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-surface no-underline transition-opacity hover:opacity-90"
      >
        Pedir demo
      </a>
    </nav>
  )
}
