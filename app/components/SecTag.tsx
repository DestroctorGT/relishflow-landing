export default function SecTag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`sec-tag ${light ? 'light' : ''}`}>{children}</span>
}
