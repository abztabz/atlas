import { CarIcon, BoltIcon, PinIcon, TagIcon } from './icons'

const BENEFITS = [
  { icon: CarIcon, label: 'Premium', sub: 'Cars' },
  { icon: BoltIcon, label: 'Fast', sub: 'Booking' },
  { icon: PinIcon, label: 'Dubai', sub: 'Delivery' },
  { icon: TagIcon, label: 'Transparent', sub: 'Pricing' },
]

export function BenefitStrip() {
  return (
    <section aria-label="Key benefits" className="border-b border-line bg-night">
      <ul className="mx-auto grid max-w-5xl grid-cols-4 px-2 py-5">
        {BENEFITS.map(({ icon: Icon, label, sub }, i) => (
          <li
            key={label}
            className={`flex flex-col items-center gap-1.5 px-1 text-center ${
              i > 0 ? 'border-l border-line/70' : ''
            }`}
          >
            <Icon className="h-6 w-6 text-brand" />
            <span className="text-[12px] leading-tight">
              <span className="display-title block text-[13px] tracking-[0.06em] text-white">
                {label}
              </span>
              <span className="block text-[11px] text-neutral-400">{sub}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
