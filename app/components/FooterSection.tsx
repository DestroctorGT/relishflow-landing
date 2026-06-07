function LogoDark() {
  return (
    <svg viewBox="0 0 160 30" fill="none" className="h-7 w-auto" aria-hidden="true">
      <path d="M6 20c7 0 8-11 17-11s10 11 17 11" stroke="#66D8C0" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="6" cy="20" r="2.5" fill="#4FB3A6"/>
      <circle cx="40" cy="20" r="2.5" fill="#66D8C0"/>
      <text x="50" y="21" fontFamily="Bricolage Grotesque" fontSize="15" fontWeight="600" letterSpacing="-0.5">
        <tspan fill="#F6F2EA">Relish</tspan>
        <tspan fill="#66D8C0">Flow</tspan>
      </text>
    </svg>
  )
}

export default function FooterSection() {
  return (
    <footer className="bg-[#0C1D1B] py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#hero" aria-label="RelishFlow">
            <LogoDark />
          </a>
          <p className="max-w-[56ch] text-sm leading-relaxed text-[#A9C0BC]">
            Hacer que la hospitalidad fluya.
          </p>
          <div className="flex gap-8 text-sm text-[#6A807C]">
            <a href="#como-funciona" className="no-underline transition-colors hover:text-[#66D8C0]">
              Cómo funciona
            </a>
            <a href="#planes" className="no-underline transition-colors hover:text-[#66D8C0]">
              Planes
            </a>
            <a href="#cta" className="no-underline transition-colors hover:text-[#66D8C0]">
              Contacto
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-[#1C443E] pt-6 text-center">
          <p className="text-xs text-[#6A807C]" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} RelishFlow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
