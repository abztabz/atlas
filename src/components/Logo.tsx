export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none select-none">
      <span
        className={`font-script text-white ${compact ? 'text-[22px]' : 'text-[30px]'}`}
        style={{ textShadow: '0 1px 0 #7a0a05' }}
      >
        Jav&rsquo;s{' '}
        <span className="text-brand" style={{ textShadow: 'none' }}>
          Car House
        </span>
      </span>
      <span
        className={`display-title mt-1 self-start border border-line bg-panel px-1.5 py-0.5 tracking-[0.22em] text-neutral-300 ${
          compact ? 'text-[7px]' : 'text-[9px]'
        }`}
      >
        MUSCLE CARS RENTAL
      </span>
    </span>
  )
}
