interface IconProps {
  className?: string
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 15.5V13l1.6-4.2A1.8 1.8 0 0 1 7.3 7.5h9.4a1.8 1.8 0 0 1 1.7 1.3L20 13v2.5" />
      <path d="M4 13h16" />
      <circle cx="7.2" cy="15.8" r="1.7" />
      <circle cx="16.8" cy="15.8" r="1.7" />
    </svg>
  )
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H13L13 3Z" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 21s-6.5-5.5-6.5-10.3A6.4 6.4 0 0 1 12 4.2a6.4 6.4 0 0 1 6.5 6.5C18.5 15.5 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.2" />
    </svg>
  )
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 4h7.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-5.2 5.2a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 4 11.2V4Z" />
      <circle cx="8.5" cy="8.5" r="1.3" />
    </svg>
  )
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </svg>
  )
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  )
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m10 7 5 5-5 5" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.4A9.5 9.5 0 0 0 3.8 16.7L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.4Zm0 17.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.9.8.8-2.8-.2-.3a7.8 7.8 0 1 1 7 3.7Zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7.1 7.1 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.1 3.7.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
    </svg>
  )
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 3 5 5.8v5.2c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V5.8L12 3Z" />
      <path d="m9 11.8 2.1 2.1 3.9-4" />
    </svg>
  )
}

export function LicenseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M7 3.5h7.5L19 8v12.5H7V3.5Z" />
      <path d="M14 3.5V8.5h5M9.8 12.5h6M9.8 16h6" />
    </svg>
  )
}

export function StarIcon({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.6L12 16.5l-5.1 2.7 1-5.6-4.1-4 5.7-.8L12 3.6Z" />
    </svg>
  )
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M14.5 6.5a4 4 0 0 0 5 5L14 17a4 4 0 0 1-5-5l5.5-5.5Z" transform="rotate(90 12 12)" />
      <path d="m3.5 20.5 6-6M14.7 3.6a4.3 4.3 0 0 1 5.7 5.7l-3-1.1-1.6-1.6-1.1-3Z" />
    </svg>
  )
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </svg>
  )
}

export function DocCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6.5 3.5h8L18 7v13.5H6.5V3.5Z" />
      <path d="m9.5 13.5 2 2 3.5-3.7" />
    </svg>
  )
}

export function SteeringIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M3.6 10.8c2.7-1.2 14.1-1.2 16.8 0M12 14.4v6M9.8 13.8l-5.4 4.4M14.2 13.8l5.4 4.4" />
    </svg>
  )
}

export function SeatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M8 4.5 9.5 14h7l-1 5.5H8.5" />
      <path d="M8 4.5a2 2 0 0 0-2 2.4L7.6 14" />
    </svg>
  )
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 4.5v15M12 4.5V12M18 4.5V12M6 12h12" />
      <circle cx="6" cy="4.5" r="0.4" />
      <circle cx="12" cy="4.5" r="0.4" />
      <circle cx="18" cy="4.5" r="0.4" />
    </svg>
  )
}

export function EngineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M7 8V6h4v2M3 11v5M3 13.5h2.5M5.5 10h2L9 8.5h6l2 2.5h2.5v6H17L15 19H9.5L7.5 17h-2v-7Z" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6.8 4h3l1.2 4-2 1.4a11.5 11.5 0 0 0 5.6 5.6L16 13l4 1.2v3a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 4.8 6.2 2 2 0 0 1 6.8 4Z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M9.5 6.5C6.7 8 5 10.4 5 13.7c0 2.3 1.4 3.8 3.2 3.8 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.7-2.8h-.4c.3-1.6 1.3-2.9 3-3.9L9.5 6.5Zm8 0c-2.8 1.5-4.5 3.9-4.5 7.2 0 2.3 1.4 3.8 3.2 3.8 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.7-2.8h-.4c.3-1.6 1.3-2.9 3-3.9l-1.6-1.3Z" />
    </svg>
  )
}
