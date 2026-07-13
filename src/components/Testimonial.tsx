import { TESTIMONIAL } from '../data'
import { StarIcon, QuoteIcon } from './icons'

export function Testimonial() {
  return (
    <section className="bg-black px-4 py-9" aria-labelledby="testimonial-title">
      <div className="mx-auto max-w-5xl">
        <h2 id="testimonial-title" className="display-title italic text-[26px] leading-none text-white">
          What our <span className="text-brand">clients</span> say
        </h2>
        <figure className="relative mt-5 rounded-2xl border border-line bg-panel p-5">
          <QuoteIcon className="absolute left-4 top-4 h-7 w-7 text-brand/70" aria-hidden="true" />
          <QuoteIcon className="absolute right-4 top-4 h-7 w-7 rotate-180 text-brand/70" aria-hidden="true" />
          <div
            className="flex justify-center gap-1 pt-1 text-amber-400"
            role="img"
            aria-label="Rated 5 out of 5 stars"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} className="h-4.5 w-4.5" />
            ))}
          </div>
          <blockquote className="mt-4 text-center text-[15px] leading-relaxed text-neutral-200">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="display-title flex h-10 w-10 items-center justify-center rounded-full border border-brand/60 bg-panel-2 text-[14px] text-white"
            >
              {TESTIMONIAL.customer
                .split(' ')
                .map((part) => part[0])
                .join('')}
            </span>
            <span className="text-left">
              <span className="block text-[14px] font-semibold text-white">
                &ndash; {TESTIMONIAL.customer}
              </span>
              <span className="block text-[12px] text-neutral-400">{TESTIMONIAL.vehicle}</span>
            </span>
          </figcaption>
          <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
          </div>
        </figure>
      </div>
    </section>
  )
}
