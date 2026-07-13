import { Logo } from './Logo'
import { BUSINESS, WHATSAPP_URL } from '../data'
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon, WhatsAppIcon } from './icons'

const QUICK_LINKS = [
  { href: '#fleet', label: 'Fleet' },
  { href: '#why', label: 'About' },
  { href: '#how', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
  { href: '#contact', label: 'Rental Terms' },
  { href: '#contact', label: 'Privacy Policy' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-night px-5 pb-6 pt-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Logo compact />
            <p className="mt-3 max-w-[240px] text-[13px] leading-relaxed text-neutral-400">
              Dubai&rsquo;s premium muscle car rental service. Iconic cars, delivered
              across selected Dubai areas.
            </p>
            <a
              href="https://instagram.com"
              aria-label="Instagram (placeholder)"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line text-neutral-300 transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          <nav aria-label="Quick links">
            <h3 className="display-title italic text-[15px] tracking-[0.12em] text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-neutral-400 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="display-title italic text-[15px] tracking-[0.12em] text-white">
              Contact Us
            </h3>
            <ul className="mt-3 space-y-2.5 text-[13px] text-neutral-400">
              <li>
                <a
                  href={`tel:+${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2.5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <PhoneIcon className="h-4 w-4 text-brand" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2.5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <MailIcon className="h-4 w-4 text-brand" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PinIcon className="h-4 w-4 text-brand" />
                {BUSINESS.location}
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                  Message us on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-line pt-4 text-center text-[12px] text-neutral-500">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
