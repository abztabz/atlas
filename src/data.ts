export const BUSINESS = {
  name: "Jav's Car House",
  phoneDisplay: '+971 56 447 7471',
  phoneRaw: '971564477471',
  email: 'bookings@javscarhouse.ae',
  location: 'Dubai, UAE',
} as const

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.phoneRaw}`

export function whatsappEnquiryUrl(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export interface FleetCar {
  id: string
  name: string
  badge: string
  pricePerDayAed: number
  transmission: string
  seats: number
  engine: string
  available: boolean
}

/** Placeholder fleet data — replace with live inventory before launch. */
export const FLEET: FleetCar[] = [
  {
    id: 'challenger-rt',
    name: 'Dodge Challenger R/T',
    badge: 'R/T',
    pricePerDayAed: 599,
    transmission: 'Automatic',
    seats: 4,
    engine: '5.7L HEMI V8',
    available: true,
  },
  {
    id: 'mustang-gt',
    name: 'Ford Mustang GT',
    badge: 'GT',
    pricePerDayAed: 649,
    transmission: 'Automatic',
    seats: 4,
    engine: '5.0L V8 · 480 HP',
    available: true,
  },
  {
    id: 'camaro-ss',
    name: 'Chevrolet Camaro SS',
    badge: 'SS',
    pricePerDayAed: 699,
    transmission: 'Automatic',
    seats: 4,
    engine: '6.2L V8 · 455 HP',
    available: true,
  },
]

/** PLACEHOLDER testimonial — not a real customer review. Replace before launch. */
export const TESTIMONIAL = {
  placeholder: true,
  quote:
    'Booking was fast, the car arrived clean, and the entire process was straightforward.',
  customer: 'Ahmed K.',
  vehicle: 'Ford Mustang GT',
} as const
