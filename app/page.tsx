import Nav from './components/Nav'
import RevealSection from './components/RevealSection'
import CountUp from './components/CountUp'
import FlowDiagram from './components/FlowDiagram'
import {
  QRCode,
  Dashboard,
  Kitchen,
  Runner,
  Analytics,
  Check,
  MenuBook,
} from './components/Icons'

function SecTag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`sec-tag ${light ? 'light' : ''}`}>{children}</span>
}

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

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="rounded-[22px] border border-[#DED5C5] bg-[#FCFAF5] p-8">
      <div className="mb-4 h-6 w-6 text-brand-500">
        <Icon />
      </div>
      <h3 className="mb-2 font-bricolage text-xl font-semibold tracking-tight text-ink">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  )
}

function PlanCard({
  name,
  description,
  features,
  highlighted,
}: {
  name: string
  description: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <div
      className={`flex flex-col rounded-[32px] border p-8 md:p-10 ${
        highlighted
          ? 'border-brand-500 bg-[#FCFAF5] shadow-[0_18px_50px_-28px_rgba(12,80,72,0.5)]'
          : 'border-[#DED5C5] bg-[#FCFAF5]'
      }`}
    >
      <h3 className="font-bricolage text-2xl font-semibold tracking-tight text-ink">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>

      <ul className="mt-8 flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
            <Check className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-[#DED5C5] pt-6">
        <div className="font-bricolage text-lg font-semibold tracking-tight text-ink-faint">
          Próximamente
        </div>
        <p className="mt-1 text-xs text-ink-faint">Te avisamos cuando esté disponible</p>
      </div>

      <a
        href="#cta"
        className={`mt-6 inline-block rounded-full px-6 py-3 text-center text-sm font-semibold no-underline transition-opacity hover:opacity-90 ${
          highlighted
            ? 'bg-brand-700 text-surface'
            : 'border border-[#DED5C5] bg-surface text-ink'
        }`}
      >
        Avisarme
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ============ HERO ============ */}
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

        {/* ============ PROBLEMA ============ */}
        <section id="como-funciona" className="bg-[#EFE9DD] py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <RevealSection>
              <SecTag>El problema</SecTag>
              <h2 className="font-bricolage text-[clamp(34px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.02em] text-[#0C1D1B]">
                El caos silencioso
                <br />
                de tu restaurante
              </h2>
              <p className="mt-4 max-w-[64ch] text-lg leading-relaxed text-[#334A47]">
                Hoy probablemente operás con WhatsApp, papel, memoria y comunicación verbal. La
                tecnología no debería reemplazar la hospitalidad — debería potenciarla. Pero sin las
                herramientas adecuadas, el caos se vuelve invisible.
              </p>
            </RevealSection>

            <RevealSection>
              <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: 'Errores en pedidos', desc: 'Anotaciones que se pierden, platos que llegan mal, clientes que esperan de más.' },
                  { title: 'Tiempos muertos', desc: 'Mozos que cruzan la sala sin información, cocina que espera, mesas que se enfrían.' },
                  { title: 'Sobrecarga del equipo', desc: 'Tu equipo corre apagando incendios en vez de concentrarse en atender bien.' },
                  { title: 'Esperas innecesarias', desc: 'Clientes que esperan para pedir, para pagar, para recibir la cuenta.' },
                  { title: 'Dependencia de procesos manuales', desc: 'Todo depende de "quién se acuerde" y "quién pregunte". No hay sistema.' },
                  { title: 'Mala experiencia del cliente', desc: 'El servicio se siente lento, descoordinado y frustrante para todos.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[#DED5C5] bg-[#FCFAF5] p-6"
                  >
                    <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#0C1D1B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#334A47]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection>
              <div className="mt-12 max-w-[760px]">
                <p className="text-lg italic leading-relaxed text-[#334A47]">
                  {"“La tecnología no debe reemplazar la hospitalidad. Debe potenciarla.”"}
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ============ SOLUCIÓN / HOSPITALITY OS ============ */}
        <section
          className="py-24 md:py-32"
          style={{ background: 'linear-gradient(180deg, #0C1D1B 0%, #08332F 100%)', color: '#A9C0BC' }}
        >
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <RevealSection>
              <SecTag light>La solución</SecTag>
              <h2 className="font-bricolage text-[clamp(34px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.02em] text-[#F6F2EA]">
                El sistema operativo
                <br />
                de tu hospitalidad
              </h2>
              <p className="mt-4 max-w-[64ch] text-lg leading-relaxed text-[#A9C0BC]">
                RelishFlow conecta cada parte del flujo operativo de tu restaurante en un solo
                sistema invisible. No es una herramienta aislada — es la corriente que organiza
                todo.
              </p>
            </RevealSection>

            <RevealSection>
              <div className="mt-16">
                <FlowDiagram />
              </div>
            </RevealSection>

            <RevealSection>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {[
                  { title: 'Flow', desc: 'La corriente operativa que conecta a todos. Coordinación, movimiento, infraestructura invisible que hace que el servicio fluya sin interrupciones.' },
                  { title: 'Hospitality', desc: 'El lado humano: el placer de atender bien, la calidez que el cliente recuerda. Tu equipo concentrado en lo que importa.' },
                  { title: 'Service', desc: 'Cada nodo enlazado: cliente, mesa, cocina, runners, operador, pagos, cierre. Un sistema que organiza y acelera sin añadir complejidad.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[22px] border border-[#1C443E] bg-[#11302C] p-8">
                    <h3 className="font-bricolage text-xl font-semibold tracking-tight text-[#F6F2EA]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#A9C0BC]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ============ MÉTRICAS ============ */}
        <section className="border-b border-[#DED5C5] border-t border-[#DED5C5] bg-[#FCFAF5] py-8">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10 px-5 md:gap-16 md:px-10">
            <div className="text-center">
              <div className="font-bricolage text-3xl font-semibold tracking-tight text-[#0C5048] md:text-4xl">
                <CountUp end={32} prefix="-" suffix="%" />
              </div>
              <div className="mt-1 text-xs text-[#6A807C]">tiempo de espera</div>
            </div>
            <div className="text-center">
              <div className="font-bricolage text-3xl font-semibold tracking-tight text-[#0C5048] md:text-4xl">
                <CountUp end={18} prefix="+" suffix="%" />
              </div>
              <div className="mt-1 text-xs text-[#6A807C]">ticket medio</div>
            </div>
            <div className="text-center">
              <div className="font-bricolage text-3xl font-semibold tracking-tight text-[#0C5048] md:text-4xl">
                <CountUp end={12} suffix=" min" />
              </div>
              <div className="mt-1 text-xs text-[#6A807C]">servicio promedio</div>
            </div>
            <div className="text-center">
              <div className="font-bricolage text-3xl font-semibold tracking-tight text-[#0C5048] md:text-4xl">
                <CountUp end={2400} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-[#6A807C]">salones activos</div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="bg-[#F6F2EA] py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <RevealSection>
              <SecTag>Para todo tu equipo</SecTag>
              <h2 className="font-bricolage text-[clamp(34px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.02em] text-[#0C1D1B]">
                Cada rol,
                <br />
                conectado
              </h2>
            </RevealSection>

            <RevealSection>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard icon={MenuBook} title="Menú QR digital" description="Tus clientes acceden al menú desde su celular escaneando un código QR. Sin apps, sin esperar al mozo, sin fricción." />
                <FeatureCard icon={QRCode} title="Pedidos desde la mesa" description="Cada mesa puede hacer su pedido al instante. Directo a cocina. Sin anotaciones, sin errores de comunicación." />
                <FeatureCard icon={Dashboard} title="Dashboard en vivo" description="KPIs en tiempo real: mesas activas, pedidos pendientes, tiempos de servicio, ingresos del turno. Todo de un vistazo." />
                <FeatureCard icon={Kitchen} title="Coordinación de cocina" description="Los pedidos llegan organizados con prioridades y tiempos. Sin tickets de papel, sin gritos, sin pérdidas." />
                <FeatureCard icon={Runner} title="Runners y mozos" description="Información accionable para saber qué llevar, a dónde y cuándo. Coordinación perfecta entre sala y cocina." />
                <FeatureCard icon={Analytics} title="Analítica y reportes" description="Datos claros para entender tu operación: platos más vendidos, horas pico, ticket promedio. Decisiones informadas." />
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ============ POSICIONAMIENTO ============ */}
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
              <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                      Naranja dominante — energía, urgencia, “pedí ya”
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

        {/* ============ PLANES ============ */}
        <section id="planes" className="bg-[#EFE9DD] py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <RevealSection>
              <SecTag>Planes</SecTag>
              <h2 className="font-bricolage text-[clamp(34px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.02em] text-[#0C1D1B]">
                Elegí el plan que se adapte
                <br />
                a tu operación
              </h2>
            </RevealSection>

            <RevealSection>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <PlanCard
                  name="Relish"
                  description="Para arrancar con lo esencial. Digitalizá tu menú y recibí pedidos directos desde la mesa."
                  features={[
                    'Menú QR digital con fotos y categorías',
                    'Pedidos directos desde el celular del cliente',
                    'Gestión de pedidos en tiempo real',
                    'Sin comisiones por pedido',
                  ]}
                />
                <PlanCard
                  name="Flow"
                  description="La operación completa. Conectá cada parte de tu restaurante en un solo sistema."
                  features={[
                    'Todo lo de Relish',
                    'Dashboard operativo con KPIs en vivo',
                    'Coordinación de cocina, runners y mozos',
                    'Panel de analítica y reportes',
                    'Integración de pagos',
                    'Cierre de servicio automatizado',
                  ]}
                  highlighted
                />
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section
          id="cta"
          className="relative overflow-hidden py-24 md:py-32"
          style={{ background: 'linear-gradient(180deg, #08332F 0%, #0A2421 100%)' }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <svg
              className="flowlines h-full w-full"
              viewBox="0 0 1440 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <path className="fl" d="M-50 200 C 300 200, 360 100, 720 100 S 1140 200, 1490 200" />
              <path className="fl" d="M-50 350 C 300 350, 360 250, 720 250 S 1140 350, 1490 350" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-10">
            <RevealSection>
              <h2 className="font-bricolage text-[clamp(34px,5vw,52px)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#F6F2EA]">
                ¿Listo para hacer que tu
                <br />
                <span className="italic text-[#66D8C0]">hospitalidad fluya</span>?
              </h2>
            </RevealSection>

            <RevealSection>
              <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-[#A9C0BC]">
                Sé de los primeros en probar RelishFlow. Te mostramos cómo funciona en tu
                restaurante, sin compromiso.
              </p>
            </RevealSection>

            <RevealSection>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-full bg-[#0C5048] px-8 py-4 text-base font-semibold text-[#FCFAF5] no-underline transition-opacity hover:opacity-90"
                >
                  Pedir demo
                </a>
                <p className="mt-4 text-xs text-[#6A807C]">
                  Sin compromiso. Te mostramos cómo funciona en tu restaurante.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
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
            <p className="text-xs text-[#6A807C]">
              &copy; {new Date().getFullYear()} RelishFlow. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
