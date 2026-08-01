import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Practice Areas', href: '/#practice-areas' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Legal Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/#home" className="navbar-brand" aria-label="DI VERDICTUM LAW CHAMBERS LLP — Home">
            <Logo variant={scrolled ? 'light' : 'dark'} />
            <span className="navbar-brand-text">
              <span className="navbar-brand-name">DI VERDICTUM</span>
              <span className="navbar-brand-sub">Law Chambers LLP</span>
            </span>
          </Link>

          <nav className="navbar-menu" aria-label="Primary">
            {LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="navbar-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/#contact" className="btn btn-gold navbar-cta">
            Book Consultation
          </Link>

          <button
            className="navbar-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`navbar-scrim ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />

      <aside className={`navbar-mobile ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile menu">
        <button className="navbar-mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          &times;
        </button>
        {LINKS.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link to="/#contact" className="btn btn-gold btn-block" onClick={() => setMenuOpen(false)}>
          Book Consultation
        </Link>
      </aside>
    </>
  )
}
