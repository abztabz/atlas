import { ShieldCheckIcon, LicenseIcon, SteeringIcon } from './icons'

const TRUST_ITEMS = [
  { icon: ShieldCheckIcon, label: 'Trusted' },
  { icon: LicenseIcon, label: 'Licensed' },
  { icon: SteeringIcon, label: 'Professional' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-night px-4 py-8" aria-labelledby="trust-title">
      <div className="mx-auto max-w-5xl">
        <h2 id="trust-title" className="display-title italic text-center text-[22px] leading-none text-white">
          Trusted. <span className="text-brand">Licensed.</span> Professional.
        </h2>
        <ul className="mt-6 grid grid-cols-3">
          {TRUST_ITEMS.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`flex flex-col items-center gap-2 text-center ${
                i > 0 ? 'border-l border-line/70' : ''
              }`}
            >
              <Icon className="h-7 w-7 text-brand" />
              <span className="display-title text-[13px] tracking-[0.1em] text-white">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
