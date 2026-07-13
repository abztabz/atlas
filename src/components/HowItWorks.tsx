import { SteeringIcon, CalendarIcon, WhatsAppIcon, CarIcon } from './icons'

const STEPS = [
  {
    icon: SteeringIcon,
    title: 'Choose Your Car',
    caption: 'Browse our fleet and pick your favorite.',
  },
  {
    icon: CalendarIcon,
    title: 'Select Your Dates',
    caption: 'Set your pickup and return dates.',
  },
  {
    icon: WhatsAppIcon,
    title: 'Confirm on WhatsApp',
    caption: 'Finalize the details with our team.',
  },
  {
    icon: CarIcon,
    title: 'Drive the Legend',
    caption: 'Delivery to you, or pick up your car.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-night px-4 py-9" aria-labelledby="how-title">
      <div className="mx-auto max-w-5xl">
        <h2 id="how-title" className="display-title italic text-[26px] leading-none text-white">
          How it <span className="text-brand">works</span>
        </h2>
        <ol className="relative mt-8 grid grid-cols-4 gap-1.5">
          {/* dotted connector */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[15px] border-t-2 border-dotted border-brand/60"
            aria-hidden="true"
          />
          {STEPS.map(({ icon: Icon, title, caption }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="display-title z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[15px] text-white shadow-[0_0_16px_rgba(225,6,0,0.5)]">
                {i + 1}
              </span>
              <Icon className="mt-4 h-7 w-7 text-white" />
              <h3 className="display-title mt-2.5 text-[14px] leading-[1.05] tracking-[0.06em] text-white">
                {title}
              </h3>
              <p className="mt-1.5 text-[11px] leading-snug text-neutral-400">{caption}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
