import { useState } from 'react'
import type { FormEvent } from 'react'
import { FLEET, whatsappEnquiryUrl } from '../data'
import { CalendarIcon, ChevronDownIcon, WhatsAppIcon, ShieldCheckIcon } from './icons'

interface FormState {
  pickupDate: string
  returnDate: string
  car: string
  whatsapp: string
}

const EMPTY: FormState = { pickupDate: '', returnDate: '', car: '', whatsapp: '' }

export function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [confirmed, setConfirmed] = useState(false)

  function set<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
    setConfirmed(false)
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.pickupDate) next.pickupDate = 'Pickup date is required.'
    if (!form.returnDate) next.returnDate = 'Return date is required.'
    if (form.pickupDate && form.returnDate && form.returnDate < form.pickupDate) {
      next.returnDate = 'Return date must be on or after the pickup date.'
    }
    if (!form.car) next.car = 'Please choose a car.'
    if (!form.whatsapp) {
      next.whatsapp = 'WhatsApp number is required.'
    } else if (!/^\+?[0-9\s-]{7,16}$/.test(form.whatsapp.trim())) {
      next.whatsapp = 'Enter a valid phone number, e.g. +971 5X XXX XXXX.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) return
    setConfirmed(true)
    const carName = FLEET.find((c) => c.id === form.car)?.name ?? form.car
    const message =
      `Hi Jav's Car House! I'd like to check availability.\n` +
      `Car: ${carName}\nPickup: ${form.pickupDate}\nReturn: ${form.returnDate}\n` +
      `My WhatsApp: ${form.whatsapp.trim()}`
    window.open(whatsappEnquiryUrl(message), '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'h-12 w-full rounded-lg border border-line bg-panel-2 px-3.5 pr-11 text-[15px] text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none [color-scheme:dark]'

  return (
    <section id="book" className="bg-black px-4 py-8" aria-labelledby="booking-title">
      <div className="mx-auto max-w-5xl rounded-2xl border border-brand/50 bg-panel p-5 shadow-[0_0_40px_rgba(225,6,0,0.12)]">
        <h2 id="booking-title" className="display-title italic text-[26px] leading-none text-white">
          Book your <span className="text-brand">legend</span>
        </h2>
        <p className="mt-1 text-[13px] text-neutral-400">Fast. Easy. Secure.</p>

        <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
          <div>
            <label htmlFor="pickup-date" className="mb-1.5 block text-[13px] font-medium text-white">
              Pickup date
            </label>
            <div className="relative">
              <input
                id="pickup-date"
                type="date"
                required
                value={form.pickupDate}
                onChange={(e) => set('pickupDate', e.target.value)}
                aria-invalid={Boolean(errors.pickupDate)}
                aria-describedby={errors.pickupDate ? 'pickup-date-error' : undefined}
                className={fieldClass}
              />
              <CalendarIcon className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            </div>
            {errors.pickupDate && (
              <p id="pickup-date-error" role="alert" className="mt-1 text-[12px] text-brand">
                {errors.pickupDate}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="return-date" className="mb-1.5 block text-[13px] font-medium text-white">
              Return date
            </label>
            <div className="relative">
              <input
                id="return-date"
                type="date"
                required
                value={form.returnDate}
                min={form.pickupDate || undefined}
                onChange={(e) => set('returnDate', e.target.value)}
                aria-invalid={Boolean(errors.returnDate)}
                aria-describedby={errors.returnDate ? 'return-date-error' : undefined}
                className={fieldClass}
              />
              <CalendarIcon className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            </div>
            {errors.returnDate && (
              <p id="return-date-error" role="alert" className="mt-1 text-[12px] text-brand">
                {errors.returnDate}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="preferred-car" className="mb-1.5 block text-[13px] font-medium text-white">
              Preferred car
            </label>
            <div className="relative">
              <select
                id="preferred-car"
                required
                value={form.car}
                onChange={(e) => set('car', e.target.value)}
                aria-invalid={Boolean(errors.car)}
                aria-describedby={errors.car ? 'preferred-car-error' : undefined}
                className={`${fieldClass} appearance-none ${form.car ? '' : 'text-neutral-500'}`}
              >
                <option value="" disabled>
                  Select a car
                </option>
                {FLEET.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name} — AED {car.pricePerDayAed}/day
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            </div>
            {errors.car && (
              <p id="preferred-car-error" role="alert" className="mt-1 text-[12px] text-brand">
                {errors.car}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="whatsapp-number" className="mb-1.5 block text-[13px] font-medium text-white">
              WhatsApp number
            </label>
            <div className="relative">
              <input
                id="whatsapp-number"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="+971 5X XXX XXXX"
                value={form.whatsapp}
                onChange={(e) => set('whatsapp', e.target.value)}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? 'whatsapp-number-error' : undefined}
                className={fieldClass}
              />
              <WhatsAppIcon className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            </div>
            {errors.whatsapp && (
              <p id="whatsapp-number-error" role="alert" className="mt-1 text-[12px] text-brand">
                {errors.whatsapp}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="display-title italic h-13 w-full rounded-lg bg-brand py-4 text-[17px] leading-none tracking-[0.1em] text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            CHECK AVAILABILITY
          </button>

          {confirmed && (
            <p role="status" className="rounded-lg border border-whatsapp/40 bg-whatsapp/10 px-3 py-2.5 text-[13px] text-neutral-200">
              Request received — we&rsquo;re opening WhatsApp so you can confirm your
              enquiry with our team.
            </p>
          )}

          <p className="flex items-center justify-center gap-1.5 text-[12px] text-neutral-400">
            <ShieldCheckIcon className="h-4 w-4" />
            No payment required now
          </p>
        </form>
      </div>
    </section>
  )
}
