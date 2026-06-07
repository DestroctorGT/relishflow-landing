import RevealSection from './RevealSection'
import SecTag from './SecTag'

export default function PositioningSection() {
  return (
    <section className="bg-[#FCFAF5] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <RevealSection>
          <SecTag>Diferenciación</SecTag>
          <h2 className="font-bricolage text-[clamp(34px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.02em] text-[#0C1D1B]">
            No competimos contra
            <br />
            software. Competimos
            <br />
            contra la fricción.
          </h2>
        </RevealSection>

        <RevealSection>
          {/* Mobile: single card con dos columnas */}
          <div className="mt-12 md:hidden">
            <div className="overflow-hidden rounded-[22px] border border-[#DED5C5]">
              <div className="flex">
                <div className="flex-1 border-r border-[#DED5C5] bg-[#FBEEE3] p-4">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#C2622A]">
                    La categoría hoy
                  </span>
                  <h3 className="mt-1 font-bricolage text-sm font-semibold leading-snug tracking-tight text-[#0C1D1B]">
                    Naranja, ruidoso,<br />transaccional
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    <li className="flex gap-2 text-xs leading-relaxed text-[#9A6A4A]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-[#9A6A4A]" />
                      <span className="flex-1">Naranja dominante — energía, urgencia, &#x201C;pedí ya&#x201D;</span>
                    </li>
                    <li className="flex gap-2 text-xs leading-relaxed text-[#9A6A4A]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-[#9A6A4A]" />
                      <span className="flex-1">Estética de app de delivery: descuentos, badges, ruido</span>
                    </li>
                    <li className="flex gap-2 text-xs leading-relaxed text-[#9A6A4A]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-[#9A6A4A]" />
                      <span className="flex-1">Habla de funciones y precio, no de experiencia</span>
                    </li>
                    <li className="flex gap-2 text-xs leading-relaxed text-[#9A6A4A]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-[#9A6A4A]" />
                      <span className="flex-1">Una herramienta más que el equipo tolera</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-[#FCFAF5] p-4">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#14837A]">
                    RelishFlow
                  </span>
                  <h3 className="mt-1 font-bricolage text-sm font-semibold leading-snug tracking-tight text-[#0C1D1B]">
                    Calmo, premium,<br />humano-técnico
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    <li className="flex gap-2 text-xs leading-relaxed text-[#334A47]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-brand-500" />
                      <span className="flex-1"><b className="text-[#0C1D1B]">Verdigris + neutros cálidos</b> — frescura gastronómica sin gritar</span>
                    </li>
                    <li className="flex gap-2 text-xs leading-relaxed text-[#334A47]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-brand-500" />
                      <span className="flex-1"><b className="text-[#0C1D1B]">Infraestructura premium</b> — espacio, precisión, una sola chispa cálida</span>
                    </li>
                    <li className="flex gap-2 text-xs leading-relaxed text-[#334A47]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-brand-500" />
                      <span className="flex-1"><b className="text-[#0C1D1B]">Habla de resultados</b> — atender mejor y vender más</span>
                    </li>
                    <li className="flex gap-2 text-xs leading-relaxed text-[#334A47]">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-brand-500" />
                      <span className="flex-1"><b className="text-[#0C1D1B]">Aliado invisible</b> — el equipo lo agradece, no lo tolera</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: dos cards separadas */}
          <div className="mt-12 hidden md:grid md:grid-cols-2 md:gap-6">
            <div className="rounded-[22px] border border-[#F1D8C2] bg-[#FBEEE3] p-8">
              <span className="mb-4 block font-mono text-[12px] uppercase tracking-[0.12em] text-[#C2622A]">
                La categoría hoy
              </span>
              <h3 className="font-bricolage text-xl font-semibold tracking-tight text-[#0C1D1B]">
                Naranja, ruidoso, transaccional
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-sm text-[#9A6A4A]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#9A6A4A]" />
                  Naranja dominante — energía, urgencia, &#x201C;pedí ya&#x201D;
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#9A6A4A]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#9A6A4A]" />
                  Estética de app de delivery: descuentos, badges, ruido
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#9A6A4A]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#9A6A4A]" />
                  Habla de funciones y precio, no de experiencia
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#9A6A4A]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#9A6A4A]" />
                  Una herramienta más que el equipo tolera
                </li>
              </ul>
            </div>

            <div className="rounded-[22px] border border-[#4FB3A6] bg-[#FCFAF5] p-8">
              <span className="mb-4 block font-mono text-[12px] uppercase tracking-[0.12em] text-[#14837A]">
                RelishFlow
              </span>
              <h3 className="font-bricolage text-xl font-semibold tracking-tight text-[#0C1D1B]">
                Calmo, premium, humano-técnico
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-sm text-[#334A47]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <b className="text-[#0C1D1B]">Verdigris + neutros cálidos</b> — frescura gastronómica sin gritar
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#334A47]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <b className="text-[#0C1D1B]">Infraestructura premium</b> — espacio, precisión, una sola chispa cálida
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#334A47]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <b className="text-[#0C1D1B]">Habla de resultados</b> — atender mejor y vender más
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#334A47]">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <b className="text-[#0C1D1B]">Aliado invisible</b> — el equipo lo agradece, no lo tolera
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="mt-12 max-w-[64ch]">
            <p className="text-lg leading-relaxed text-[#334A47]">
              <strong className="text-[#0C1D1B]">En una categoría que grita en naranja, el silencio es diferenciación.</strong>{' '}
              Ser la marca calmada y premium es un territorio vacío y defendible.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
