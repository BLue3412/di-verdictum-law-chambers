export default function Emblem({ className = '' }) {
  return (
    <svg
      className={`emblem ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DI VERDICTUM LAW CHAMBERS LLP emblem"
    >
      <circle className="emblem-ring" cx="50" cy="50" r="47" strokeWidth="0.75" />
      <circle className="emblem-ring" cx="50" cy="50" r="41" strokeWidth="0.5" />

      {/* Scales of justice */}
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <line x1="50" y1="24" x2="50" y2="60" />
        <line x1="32" y1="32" x2="68" y2="32" />
        <line x1="50" y1="60" x2="50" y2="66" />
        <path d="M40 66 H60" />
        <path d="M25 32 L20 44 A7 7 0 0 0 32 44 Z" />
        <path d="M75 32 L70 44 A7 7 0 0 0 82 44 Z" />
        <line x1="25" y1="32" x2="25" y2="26" />
        <line x1="75" y1="32" x2="75" y2="26" />
      </g>
      <circle cx="50" cy="32" r="2" fill="currentColor" />

      {/* Laurel flourishes */}
      <g stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.85">
        <path d="M18 58 C 24 66, 24 76, 34 82" />
        <path d="M21 61 C 25 61, 27 64, 26 68" />
        <path d="M25 68 C 29 68, 31 71, 30 75" />
        <path d="M30 75 C 33 75, 35 77, 34 80" />
        <path d="M82 58 C 76 66, 76 76, 66 82" />
        <path d="M79 61 C 75 61, 73 64, 74 68" />
        <path d="M75 68 C 71 68, 69 71, 70 75" />
        <path d="M70 75 C 67 75, 65 77, 66 80" />
      </g>

      {/* Monogram */}
      <text
        x="50"
        y="76"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontSize="13"
        fill="currentColor"
      >
        D · V
      </text>
    </svg>
  )
}
