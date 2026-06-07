const ALL = [
  'Cliente',
  'Mesa',
  'Pedidos',
  'Cocina',
  'Runners',
  'Operador',
  'Pagos',
  'Cierre',
]

const CX = 400
const CY = 400
const RR = 260
const IR = 90
const PW = 110
const PH = 38
const D2R = Math.PI / 180

const NODES = ALL.map((label, i) => {
  const angle = -90 + i * 45
  const rad = angle * D2R
  return {
    label,
    cx: CX + RR * Math.cos(rad),
    cy: CY + RR * Math.sin(rad),
    lx: CX + IR * Math.cos(rad),
    ly: CY + IR * Math.sin(rad),
  }
})

function NodePill({
  cx,
  cy,
  label,
}: {
  cx: number
  cy: number
  label: string
}) {
  return (
    <g>
      <rect
        x={cx - PW / 2}
        y={cy - PH / 2}
        width={PW}
        height={PH}
        rx={PH / 2}
        fill="#0A2421"
        stroke="#1C443E"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        style={{ fontFamily: 'var(--font-bricolage)', fontSize: 14, fontWeight: 600, fill: '#F6F2EA' }}
      >
        {label}
      </text>
    </g>
  )
}

export default function FlowDiagram() {
  const arcPaths = NODES.map((n, i) => {
    const next = NODES[(i + 1) % NODES.length]
    return `M ${n.cx} ${n.cy} A ${RR} ${RR} 0 0 1 ${next.cx} ${next.cy}`
  }).join(' ')

  return (
    <>
      <div className="hidden w-full md:block">
        <svg viewBox="0 0 800 800" className="mx-auto h-auto w-full max-w-2xl lg:max-w-[700px]" fill="none">
          <defs>
            <marker id="fa" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
              <path d="M0 0 L7 3.5 L0 7 Z" fill="#66D8C0" />
            </marker>
          </defs>

          <circle cx={CX} cy={CY} r={RR} stroke="#1C443E" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
          <circle cx={CX} cy={CY} r={IR} stroke="#1C443E" strokeWidth="1" strokeDasharray="3 6" fill="none" />

          <g className="animate-flowdash" stroke="#4FB3A6" strokeWidth="1.5" strokeDasharray="5 9" strokeLinecap="round">
            {NODES.map((n) => (
              <line key={n.label} x1={n.lx} y1={n.ly} x2={n.cx} y2={n.cy} />
            ))}
          </g>

          <path
            d={arcPaths}
            stroke="#66D8C0"
            strokeWidth="2"
            strokeDasharray="6 10"
            strokeLinecap="round"
            className="animate-flowdash"
            markerMid="url(#fa)"
          />

          <circle
            cx={CX}
            cy={CY}
            r={32}
            fill="#0A2421"
            stroke="#4FB3A6"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
          <circle cx={CX} cy={CY} r={18} fill="#11302C" stroke="#66D8C0" strokeWidth="1" />

          <text
            x={CX}
            y={CY - 58}
            textAnchor="middle"
            style={{ fontFamily: 'var(--font-bricolage)', fontSize: 26, fontWeight: 700, fill: '#66D8C0' }}
          >
            RelishFlow
          </text>
          <text
            x={CX}
            y={CY - 36}
            textAnchor="middle"
            style={{ fontFamily: 'var(--font-hanken)', fontSize: 12, fontWeight: 500, fill: '#A9C0BC', letterSpacing: '0.04em' }}
          >
            Hospitality OS
          </text>

          {NODES.map((n) => (
            <NodePill key={n.label} cx={n.cx} cy={n.cy} label={n.label} />
          ))}
        </svg>
      </div>

      <div className="flex flex-col items-center gap-3 md:hidden">
        {ALL.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <span className="inline-block rounded-full border border-[#4FB3A6] bg-[#11302C] px-5 py-2 font-bricolage text-sm font-semibold text-[#F6F2EA]">
              {label}
            </span>
            {i < ALL.length - 1 && (
              <svg className="h-4 w-4 text-[#4FB3A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
