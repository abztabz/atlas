import { useState } from 'react'
import { Logo } from './Logo'
import { MenuIcon, CloseIcon } from './icons'

const NAV_LINKS = [
  { href: '#fleet', label: 'Fleet' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#how', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4">
        <a href="#top" aria-label="Jav's Car House — home">
          <Logo compact />
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="display-title italic inline-flex h-9 items-center rounded bg-brand px-3.5 text-[13px] tracking-[0.08em] text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            BOOK A CAR
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded text-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-black">
          <ul className="mx-auto max-w-5xl px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line/60 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display-title block py-3 text-[17px] tracking-[0.1em] text-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
