import { WhyScene } from './scenes'
import { CheckCircleIcon } from './icons'

const REASONS = [
  'Muscle-car specialists',
  'Transparent pricing before confirmation',
  'Delivery across selected Dubai areas',
  'Fast WhatsApp support',
]

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden border-y border-line" aria-labelledby="why-title">
      <WhyScene className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" aria-hidden="true" />
      <div className="relative mx-auto min-h-[400px] max-w-5xl px-5 py-9">
        <h2 id="why-title" className="display-title italic text-[26px] leading-none text-white">
          Why choose <span className="text-brand">Jav&rsquo;s Car House</span>?
        </h2>
        <ul className="mt-6 space-y-4">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-center gap-3">
              <CheckCircleIcon className="h-6 w-6 shrink-0 text-brand" />
              <span className="text-[15px] font-medium text-white">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
