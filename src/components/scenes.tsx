import { useId } from 'react'

/**
 * Hand-built cinematic vector scenes. External image CDNs are unavailable in
 * this environment, so the approved photographic art direction (Dubai night
 * skyline, dominant muscle car, driver figure) is reproduced as stylised
 * vector artwork with the same composition and lighting.
 */

function SkylineDubai({ id, y = 0, opacity = 1 }: { id: string; y?: number; opacity?: number }) {
  return (
    <g transform={`translate(0 ${y})`} opacity={opacity}>
      {/* Burj Khalifa */}
      <path
        d="M545 320 L549 120 L551 60 L553 120 L557 320 Z M535 320 L541 190 L541 320 Z M561 320 L557 190 L563 320 Z"
        fill={`url(#${id}-tower)`}
      />
      {/* surrounding towers */}
      <rect x="60" y="240" width="34" height="90" fill={`url(#${id}-tower)`} />
      <rect x="104" y="215" width="26" height="115" fill={`url(#${id}-tower)`} />
      <path d="M150 330 V235 l14 -18 14 18 v95 Z" fill={`url(#${id}-tower)`} />
      <rect x="205" y="250" width="30" height="80" fill={`url(#${id}-tower)`} />
      <rect x="250" y="222" width="20" height="108" fill={`url(#${id}-tower)`} />
      <path d="M300 330 V210 h18 l6 14 v106 Z" fill={`url(#${id}-tower)`} />
      <rect x="352" y="245" width="34" height="85" fill={`url(#${id}-tower)`} />
      <rect x="400" y="200" width="24" height="130" fill={`url(#${id}-tower)`} />
      <path d="M440 330 V232 l12 -26 12 26 v98 Z" fill={`url(#${id}-tower)`} />
      <rect x="600" y="228" width="26" height="102" fill={`url(#${id}-tower)`} />
      <path d="M640 330 V214 h20 v-16 h8 v16 h6 v116 Z" fill={`url(#${id}-tower)`} />
      <rect x="690" y="248" width="34" height="82" fill={`url(#${id}-tower)`} />
      {/* lit windows */}
      <g fill="#ffd9a0" opacity="0.5">
        {[
          [66, 250], [80, 262], [70, 285], [110, 226], [118, 250], [110, 274],
          [158, 246], [166, 266], [212, 260], [222, 280], [255, 235], [258, 262],
          [306, 226], [312, 250], [360, 258], [372, 276], [406, 214], [412, 240],
          [406, 268], [448, 246], [452, 270], [548, 140], [546, 170], [550, 200],
          [548, 235], [552, 265], [606, 240], [614, 262], [648, 226], [658, 252],
          [698, 258], [708, 278],
        ].map(([x, yy], i) => (
          <rect key={i} x={x} y={yy} width="3.5" height="5" />
        ))}
      </g>
    </g>
  )
}

function sceneDefs(id: string) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#150a0c" />
        <stop offset="0.55" stopColor="#241014" />
        <stop offset="1" stopColor="#0b0709" />
      </linearGradient>
      <linearGradient id={`${id}-tower`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1f1a1e" />
        <stop offset="1" stopColor="#0e0b0d" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#ff2d1e" stopOpacity="0.55" />
        <stop offset="1" stopColor="#ff2d1e" stopOpacity="0" />
      </radialGradient>
      <filter id={`${id}-blur`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="7" />
      </filter>
    </defs>
  )
}

/** Cinematic hero: Dubai night, driver figure, dominant red muscle car (front view). */
export function HeroScene({ className }: { className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <svg
      viewBox="0 0 780 980"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      role="img"
      aria-label="Red muscle car in front of the Dubai skyline at night with a driver holding a racing helmet"
    >
      {sceneDefs(id)}
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4d4e57" />
          <stop offset="0.45" stopColor="#26262c" />
          <stop offset="1" stopColor="#0e0e11" />
        </linearGradient>
        <linearGradient id={`${id}-hood`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5c5d66" />
          <stop offset="1" stopColor="#1b1b20" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3f4d" />
          <stop offset="1" stopColor="#0c0d12" />
        </linearGradient>
        <linearGradient id={`${id}-suit`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2326" />
          <stop offset="1" stopColor="#140f11" />
        </linearGradient>
      </defs>

      <rect width="780" height="980" fill={`url(#${id}-sky)`} />
      <ellipse cx="390" cy="270" rx="440" ry="210" fill={`url(#${id}-glow)`} opacity="0.65" />
      <SkylineDubai id={id} y={60} />

      {/* driver figure, standing behind the car, right of centre */}
      <g transform="translate(505 285)">
        {/* head */}
        <circle cx="55" cy="24" r="22" fill="#191215" />
        {/* shoulders + torso */}
        <path d="M6 74 C20 50 90 50 104 74 L112 205 H-2 Z" fill={`url(#${id}-suit)`} />
        {/* subtle suit seams */}
        <path d="M26 62 L36 200 M84 62 L74 200" stroke="#7a0e08" strokeWidth="3" fill="none" opacity="0.55" />
        {/* left arm cradling helmet */}
        <path d="M2 82 C-12 110 -14 148 -4 172 l24 -4 C12 142 16 112 26 92 Z" fill={`url(#${id}-suit)`} />
        <circle cx="4" cy="188" r="26" fill="#211619" />
        <path d="M-15 180 a26 26 0 0 1 36 -14" stroke="#b1130c" strokeWidth="3.5" fill="none" opacity="0.85" />
        {/* right arm */}
        <path d="M108 84 C118 110 120 146 112 170 l-22 -4 c8 -26 4 -60 -2 -78 Z" fill={`url(#${id}-suit)`} />
        {/* rim light on the lit side */}
        <path d="M74 8 a22 22 0 0 1 2 30 M104 74 L110 198" stroke="#ff7a63" strokeWidth="2" fill="none" opacity="0.65" />
      </g>

      {/* ground with soft horizon fade */}
      <linearGradient id={`${id}-groundfade`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#070506" stopOpacity="0" />
        <stop offset="1" stopColor="#070506" stopOpacity="1" />
      </linearGradient>
      <rect x="0" y="420" width="780" height="100" fill={`url(#${id}-groundfade)`} />
      <rect x="0" y="518" width="780" height="462" fill="#070506" />
      <ellipse cx="390" cy="920" rx="480" ry="200" fill="#120a0b" />

      {/* muscle car — front three-quarter, dominant */}
      <g transform="translate(30 470)">
        {/* under-glow */}
        <ellipse cx="360" cy="420" rx="330" ry="44" fill="#000" opacity="0.85" />
        <ellipse cx="360" cy="418" rx="300" ry="30" fill="#e10600" opacity="0.14" filter={`url(#${id}-blur)`} />

        {/* greenhouse */}
        <path
          d="M170 128 C210 52 250 28 356 28 C470 28 520 54 560 130 L520 150 C470 132 260 132 210 150 Z"
          fill={`url(#${id}-glass)`}
        />
        <path d="M180 122 C218 58 256 36 356 36" stroke="#8a93a8" strokeWidth="3" fill="none" opacity="0.7" />

        {/* body */}
        <path
          d="M60 214 C64 176 92 152 140 142 C200 128 520 128 590 142 C640 152 664 178 668 214 L676 300 C678 336 668 366 640 380 L92 380 C62 366 52 336 54 300 Z"
          fill={`url(#${id}-body)`}
        />
        {/* hood with twin racing stripes */}
        <path d="M150 148 C220 134 508 134 578 148 L560 216 C460 202 268 202 168 216 Z" fill={`url(#${id}-hood)`} />
        <path d="M296 139 l-8 68 M338 137 l-6 70" stroke="#cfd0d6" strokeWidth="18" opacity="0.85" />
        <path d="M434 139 l8 68 M392 137 l6 70" stroke="#cfd0d6" strokeWidth="18" opacity="0.85" />
        {/* hood scoop */}
        <path d="M312 162 h106 l-6 22 h-94 Z" fill="#0b0b0d" opacity="0.8" />

        {/* front fascia */}
        <path d="M96 250 C180 232 548 232 632 250 L638 316 C520 300 208 300 90 316 Z" fill="#120809" />
        {/* grille mesh */}
        <path d="M180 252 h368 l6 44 H176 Z" fill="#050304" />
        <g stroke="#1c1315" strokeWidth="2">
          <path d="M186 262 h360 M184 274 h364 M182 286 h366" />
        </g>
        {/* headlights */}
        <g>
          <path d="M108 250 h62 l-4 28 h-60 Z" fill="#fffdf6" />
          <path d="M108 250 h62 l-4 28 h-60 Z" fill="#ffe9b8" filter={`url(#${id}-blur)`} />
          <path d="M616 250 h-62 l4 28 h60 Z" fill="#fffdf6" />
          <path d="M616 250 h-62 l4 28 h60 Z" fill="#ffe9b8" filter={`url(#${id}-blur)`} />
        </g>
        {/* splitter + plate */}
        <path d="M88 322 C210 306 518 306 640 322 L636 362 C520 348 208 348 92 362 Z" fill="#0a0506" />
        <rect x="318" y="322" width="96" height="30" rx="4" fill="#e9e4da" />
        <text
          x="366"
          y="344"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="21"
          fontWeight="700"
          fill="#232021"
        >
          JAVS
        </text>

        {/* wheels peeking out */}
        <g fill="#0a0809">
          <path d="M50 300 a56 66 0 0 1 56 -40 l-6 120 h-44 Z" />
          <path d="M678 300 a56 66 0 0 0 -56 -40 l6 120 h44 Z" />
        </g>
        {/* mirrors */}
        <path d="M148 150 l-26 -14 l-6 12 24 14 Z" fill="#26262b" />
        <path d="M580 150 l26 -14 6 12 -24 14 Z" fill="#26262b" />
        {/* red rim light on roof, thrown by the scene */}
        <path d="M188 118 C240 100 490 100 542 118" stroke="#ff4a38" strokeWidth="3" fill="none" opacity="0.8" />
      </g>
    </svg>
  )
}

type FleetSceneKind = 'sunset' | 'night' | 'dusk'

const FLEET_SCENES: Record<
  FleetSceneKind,
  { skyTop: string; skyMid: string; horizon: string; body: string; bodyDark: string; stripes: boolean }
> = {
  sunset: {
    skyTop: '#2a1116',
    skyMid: '#8a2f18',
    horizon: '#e8823c',
    body: '#17141a',
    bodyDark: '#080709',
    stripes: true,
  },
  night: {
    skyTop: '#0b0e18',
    skyMid: '#1c2438',
    horizon: '#41537a',
    body: '#2e3542',
    bodyDark: '#12151c',
    stripes: false,
  },
  dusk: {
    skyTop: '#180a0e',
    skyMid: '#4a1017',
    horizon: '#a3222a',
    body: '#c01310',
    bodyDark: '#5c0805',
    stripes: false,
  },
}

/** Cinematic side-profile muscle car for fleet cards. */
export function FleetScene({
  kind,
  label,
  className,
}: {
  kind: FleetSceneKind
  label: string
  className?: string
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const s = FLEET_SCENES[kind]
  return (
    <svg
      viewBox="0 0 640 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s.skyTop} />
          <stop offset="0.72" stopColor={s.skyMid} />
          <stop offset="1" stopColor={s.horizon} />
        </linearGradient>
        <linearGradient id={`${id}-car`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s.body} />
          <stop offset="1" stopColor={s.bodyDark} />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aab6c6" stopOpacity="0.85" />
          <stop offset="1" stopColor="#1a1d24" />
        </linearGradient>
        <radialGradient id={`${id}-sun`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={s.horizon} stopOpacity="0.95" />
          <stop offset="1" stopColor={s.horizon} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <rect width="640" height="252" fill={`url(#${id}-sky)`} />
      <circle cx="470" cy="240" r="130" fill={`url(#${id}-sun)`} />
      {/* distant skyline strip */}
      <g fill="#0d0a0c" opacity="0.9">
        <rect x="20" y="206" width="26" height="46" />
        <rect x="58" y="192" width="18" height="60" />
        <path d="M96 252 v-52 l10 -12 10 12 v52 Z" />
        <rect x="136" y="212" width="24" height="40" />
        <path d="M540 252 l4 -120 2 -36 2 36 4 120 Z" />
        <rect x="572" y="204" width="22" height="48" />
        <rect x="608" y="218" width="18" height="34" />
      </g>
      {/* road */}
      <rect x="0" y="252" width="640" height="108" fill="#0b0a0c" />
      <path d="M0 258 h640" stroke="#241d1f" strokeWidth="2" />

      {/* reflection */}
      <g transform="translate(0 596) scale(1 -1)" opacity="0.14">
        <CarSideBody id={id} stripes={s.stripes} />
      </g>
      {/* shadow */}
      <ellipse cx="322" cy="300" rx="252" ry="16" fill="#000" opacity="0.7" />
      <CarSideBody id={id} stripes={s.stripes} />
      {/* headlight beam */}
      <path d="M586 236 L640 226 v22 l-54 -8 Z" fill="#ffd9a0" opacity="0.35" filter={`url(#${id}-blur)`} />
    </svg>
  )
}

function CarSideBody({ id, stripes }: { id: string; stripes: boolean }) {
  return (
    <g>
      {/* body silhouette */}
      <path
        d="M74 296 C62 294 56 284 56 268 C56 250 62 240 78 234 C92 229 112 226 136 223 C168 200 206 184 258 180 C330 174 386 182 424 200 C470 202 522 210 556 222 C580 230 588 242 588 258 C588 278 580 290 566 294 Z"
        fill={`url(#${id}-car)`}
      />
      {/* greenhouse */}
      <path
        d="M172 222 C200 196 236 186 282 184 C336 182 380 190 410 204 L400 222 C330 214 240 216 172 222 Z"
        fill={`url(#${id}-glass)`}
      />
      <path d="M292 185 l4 36" stroke="#0c0d12" strokeWidth="5" />
      {/* rim light along roof */}
      <path d="M170 220 C206 190 268 180 330 182" stroke="#ffb88e" strokeWidth="2.5" fill="none" opacity="0.8" />
      {stripes && (
        <>
          <path d="M238 181 C300 175 350 180 396 196 l-6 10 c-46 -14 -96 -18 -156 -12 Z" fill="#d8d3cc" opacity="0.9" />
          <path d="M120 232 h150 v10 H116 Z" fill="#d8d3cc" opacity="0.75" />
        </>
      )}
      {/* door line + handle */}
      <path d="M300 220 l-6 72 M340 236 h30" stroke="#000" strokeWidth="2" opacity="0.45" fill="none" />
      {/* sills */}
      <path d="M120 292 h420" stroke="#000" strokeWidth="4" opacity="0.5" />
      {/* tail light */}
      <path d="M58 246 h16 v20 H58 Z" fill="#ff2d1e" />
      <path d="M58 246 h16 v20 H58 Z" fill="#ff2d1e" filter={`url(#${id}-blur)`} opacity="0.9" />
      {/* headlight */}
      <path d="M568 234 h18 v14 h-18 Z" fill="#ffe9c4" />
      {/* wheels */}
      <g>
        <circle cx="176" cy="292" r="42" fill="#060506" />
        <circle cx="176" cy="292" r="24" fill="#191a1e" />
        <circle cx="176" cy="292" r="23" fill="none" stroke="#4b4e57" strokeWidth="3" />
        <circle cx="176" cy="292" r="7" fill="#33353c" />
        <circle cx="472" cy="292" r="42" fill="#060506" />
        <circle cx="472" cy="292" r="24" fill="#191a1e" />
        <circle cx="472" cy="292" r="23" fill="none" stroke="#4b4e57" strokeWidth="3" />
        <circle cx="472" cy="292" r="7" fill="#33353c" />
      </g>
    </g>
  )
}

/** Rear view of a muscle car against the Dubai night skyline (Why Choose Us backdrop). */
export function WhyScene({ className }: { className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <svg
      viewBox="0 0 780 560"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {sceneDefs(id)}
      <rect width="780" height="560" fill={`url(#${id}-sky)`} />
      <ellipse cx="560" cy="240" rx="320" ry="200" fill={`url(#${id}-glow)`} opacity="0.35" />
      <SkylineDubai id={id} y={30} />
      <rect x="0" y="358" width="780" height="202" fill="#070506" />

      {/* car rear, offset right like the reference */}
      <g transform="translate(330 300)">
        <ellipse cx="230" cy="238" rx="250" ry="26" fill="#000" opacity="0.8" />
        <ellipse cx="230" cy="232" rx="220" ry="18" fill="#e10600" opacity="0.2" filter={`url(#${id}-blur)`} />
        {/* greenhouse */}
        <path d="M118 60 C150 14 176 0 230 0 C286 0 312 14 344 60 L318 72 C280 60 180 60 144 72 Z" fill="#101318" />
        {/* body */}
        <path
          d="M62 118 C66 92 84 76 116 68 C160 56 300 56 346 68 C378 76 394 94 398 118 L404 176 C406 200 398 216 378 224 L84 224 C62 216 54 200 56 176 Z"
          fill="#121013"
        />
        {/* full-width tail light bar */}
        <path d="M92 116 h278 v26 H92 Z" fill="#3a0503" />
        <path d="M98 121 h266 v16 H98 Z" fill="#ff2214" />
        <path d="M98 121 h266 v16 H98 Z" fill="#ff2214" filter={`url(#${id}-blur)`} />
        {/* plate */}
        <rect x="196" y="158" width="70" height="24" rx="3" fill="#e9e4da" />
        <text
          x="231"
          y="176"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#232021"
        >
          JAVS
        </text>
        {/* bumper */}
        <path d="M80 190 C160 180 302 180 382 190 l-4 30 H86 Z" fill="#0a0708" />
        {/* wheels */}
        <path d="M56 170 a48 56 0 0 1 40 -32 l-6 86 h-30 Z" fill="#08070a" />
        <path d="M406 170 a48 56 0 0 0 -40 -32 l6 86 h30 Z" fill="#08070a" />
      </g>
    </svg>
  )
}
