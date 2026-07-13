import { HeroScene } from './scenes'
import { WhatsAppIcon, ChevronRightIcon } from './icons'
import { WHATSAPP_URL } from '../data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="hero-title">
      <HeroScene className="absolute inset-0 h-full w-full" />
      {/* dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.25)_78%,rgba(0,0,0,0.85)_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col justify-end px-5 pb-9 pt-40">
        <p className="display-title italic mb-2 text-[15px] font-bold tracking-[0.1em]">
          <span className="text-brand">Rent the power.</span>{' '}
          <span className="text-white/90">Live the legend.</span>
        </p>
        <h1 id="hero-title" className="display-title italic text-[42px] leading-[0.95] text-white">
          Dubai <span className="text-brand">muscle cars.</span>
          <br />
          Built for the road.
        </h1>
        <p className="mt-3.5 max-w-[280px] text-[14.5px] leading-relaxed text-neutral-300">
          Drive iconic American muscle cars with fast booking and delivery across
          selected Dubai areas.
        </p>
        <div className="mt-6 flex flex-col items-start gap-3">
          <a
            href="#fleet"
            className="display-title italic inline-flex h-12 items-center gap-2 rounded bg-brand px-6 text-[16px] tracking-[0.08em] text-white shadow-[0_6px_24px_rgba(225,6,0,0.45)] transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            VIEW FLEET
            <ChevronRightIcon className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="display-title italic inline-flex h-12 items-center gap-2.5 rounded border border-white/40 bg-black/50 px-6 text-[16px] tracking-[0.08em] text-white backdrop-blur-sm transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
