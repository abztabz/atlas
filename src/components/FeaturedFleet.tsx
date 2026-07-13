import { FLEET, whatsappEnquiryUrl } from '../data'
import type { FleetCar } from '../data'
import { FleetScene } from './scenes'
import { EngineIcon, SeatIcon, GearIcon, ChevronRightIcon } from './icons'

const SCENE_BY_CAR: Record<string, 'sunset' | 'night' | 'dusk'> = {
  'challenger-rt': 'sunset',
  'mustang-gt': 'night',
  'camaro-ss': 'dusk',
}

function FleetCard({ car }: { car: FleetCar }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-panel">
      <div className="relative h-52">
        <FleetScene
          kind={SCENE_BY_CAR[car.id] ?? 'night'}
          label={`${car.name} against a cinematic Dubai backdrop`}
          className="h-full w-full"
        />
        <span className="display-title absolute bottom-3 left-3 rounded bg-brand px-2 py-1 text-[12px] tracking-[0.1em] text-white">
          {car.badge}
        </span>
        <span
          className={`display-title absolute right-3 top-3 rounded px-2 py-1 text-[11px] tracking-[0.1em] ${
            car.available ? 'bg-black/70 text-whatsapp' : 'bg-black/70 text-neutral-400'
          }`}
        >
          {car.available ? 'AVAILABLE' : 'BOOKED'}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-[19px] font-bold text-white">{car.name}</h3>
        <ul className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-neutral-400">
          <li className="flex items-center gap-1.5">
            <EngineIcon className="h-4 w-4" />
            {car.engine}
          </li>
          <li className="flex items-center gap-1.5">
            <SeatIcon className="h-4 w-4" />
            {car.seats} seats
          </li>
          <li className="flex items-center gap-1.5">
            <GearIcon className="h-4 w-4" />
            {car.transmission}
          </li>
        </ul>
        <p className="mt-3">
          <span className="display-title italic text-[26px] text-brand">AED {car.pricePerDayAed}</span>
          <span className="ml-1.5 text-[13px] text-neutral-400">/ Day</span>
        </p>
        <a
          href={whatsappEnquiryUrl(
            `Hi Jav's Car House! I'd like to book the ${car.name} (AED ${car.pricePerDayAed}/day).`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="display-title italic mt-4 flex h-12 w-full items-center justify-between rounded-lg border border-line px-4 text-[15px] tracking-[0.1em] text-white transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          BOOK NOW
          <ChevronRightIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

export function FeaturedFleet() {
  return (
    <section id="fleet" className="bg-black px-4 py-9" aria-labelledby="fleet-title">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-end justify-between">
          <h2 id="fleet-title" className="display-title italic text-[26px] leading-none text-white">
            Featured <span className="text-brand">fleet</span>
          </h2>
          <a
            href="#fleet"
            className="display-title italic flex items-center gap-0.5 text-[13px] tracking-[0.1em] text-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            VIEW ALL CARS
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {FLEET.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
