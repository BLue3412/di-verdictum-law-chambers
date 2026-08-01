import logo from '../assets/logo.jpeg'

/**
 * The firm's real logo (eagle + gavel emblem, supplied by the client).
 * The source file has a white square background, so we use CSS blend
 * modes to make it sit cleanly on both light and dark sections:
 *  - variant="light": use on white/ivory backgrounds (navbar once
 *    scrolled, disclaimer card, footer-on-light contexts).
 *  - variant="dark": use on charcoal/black backgrounds (hero,
 *    unscrolled navbar, footer) — inverts + screens so the white
 *    background disappears and the linework reads in ivory.
 */
export default function Logo({ variant = 'light', className = '' }) {
  return (
    <img
      src={logo}
      alt="DI VERDICTUM LAW CHAMBERS LLP official seal"
      className={`emblem logo logo--${variant} ${className}`.trim()}
    />
  )
}
