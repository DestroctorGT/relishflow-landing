import RevealSection from './RevealSection'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pb-20 pt-32"
      style={{
        background: 'linear-gradient(180deg, #08332F 0%, #0A2421 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="flowlines h-full w-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <path className="fl" d="M-50 230 C 300 230, 360 120, 720 120 S 1140 230, 1490 230" />
          <path className="fl" d="M-50 360 C 300 360, 360 250, 720 250 S 1140 360, 1490 360" />
          <path className="fl" d="M-50 490 C 300 490, 360 380, 720 380 S 1140 490, 1490 490" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-10">
        <RevealSection>
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1C443E] bg-[#11302C] px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-[#A9C0BC]">
              Hospitality OS
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1C443E] bg-[#11302C] px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-[#A9C0BC]">
              Menú QR
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1C443E] bg-[#11302C] px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-[#A9C0BC]">
              Sin fricción
            </span>
          </div>
        </RevealSection>

        <RevealSection>
          <h1 className="font-bricolage text-[clamp(48px,9vw,116px)] font-semibold leading-[0.96] tracking-[-0.035em] text-[#F6F2EA]">
            Hacer que la
            <br />
            <span className="italic text-[#66D8C0]">hospitalidad fluya.</span>
          </h1>
        </RevealSection>

        <RevealSection>
          <p className="mt-8 max-w-[60ch] text-[clamp(18px,2.2vw,25px)] leading-relaxed text-[#A9C0BC]">
            RelishFlow es el sistema operativo invisible que conecta tu restaurante: menú
            digital, pedidos en tiempo real, cocina y equipo en un solo flujo. Sin esperas. Sin
            errores. Sin complicaciones.
          </p>
        </RevealSection>

        <RevealSection>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-block rounded-full bg-[#0C5048] px-7 py-3.5 text-base font-semibold text-[#FCFAF5] no-underline transition-opacity hover:opacity-90"
            >
              Pedir demo
            </a>
            <a
              href="#como-funciona"
              className="inline-block rounded-full border border-[#1C443E] bg-transparent px-7 py-3.5 text-base font-semibold text-[#A9C0BC] no-underline transition-colors hover:border-[#4FB3A6] hover:text-[#F6F2EA]"
            >
              Ver cómo funciona
            </a>
          </div>
        </RevealSection>
      </div>

      <div className="cue-line absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden="true" />
    </section>
  )
}
