import { WhatsAppIcon } from './icons'
import { whatsappEnquiryUrl } from '../data'

export function WhatsAppCard() {
  return (
    <section className="bg-black px-4 py-9" aria-labelledby="whatsapp-title">
      <div className="mx-auto max-w-5xl rounded-2xl border border-line bg-panel p-5">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-whatsapp/50 bg-whatsapp/10">
            <WhatsAppIcon className="h-7 w-7 text-whatsapp" />
          </span>
          <div>
            <h2 id="whatsapp-title" className="display-title italic text-[20px] leading-tight text-white">
              Need help choosing a car?
            </h2>
            <p className="mt-1 text-[13px] leading-snug text-neutral-400">
              Chat with our team on WhatsApp for availability and rental details.
            </p>
          </div>
        </div>
        <a
          href={whatsappEnquiryUrl("Hi Jav's Car House! I need help choosing a car.")}
          target="_blank"
          rel="noopener noreferrer"
          className="display-title italic mt-5 flex h-12 w-full items-center justify-center rounded-lg bg-brand text-[16px] tracking-[0.1em] text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          CHAT ON WHATSAPP
        </a>
      </div>
    </section>
  )
}
