import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const QUICK_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Practice Areas', href: '/#practice-areas' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Legal Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
]

const PRACTICE_LINKS = [
  { label: 'Corporate & Business Advisory', href: '/#practice-areas' },
  { label: 'Civil & Commercial Litigation', href: '/#practice-areas' },
  { label: 'Criminal Law', href: '/#practice-areas' },
  { label: 'Matrimonial & Family Law', href: '/#practice-areas' },
  { label: 'Arbitration & Mediation', href: '/#practice-areas' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-about">
          <div className="footer-brand">
            <Logo variant="dark" />
            <span className="footer-brand-name">DI VERDICTUM<br />Law Chambers LLP</span>
          </div>
          <p>
            A full-service Indian law chamber advising individuals, families, and enterprises with
            trust, integrity, and legal excellence.
          </p>
          <p className="footer-advertising-note">
            In compliance with the rules of the Bar Council of India, this firm does not advertise or
            solicit work, including via social media.
          </p>
        </div>

        <div>
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-links">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}><Link to={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Practice Areas</p>
          <ul className="footer-links">
            {PRACTICE_LINKS.map((l) => (
              <li key={l.label}><Link to={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-office">
          <p className="footer-heading">Head Office</p>
          <p>
            <strong>Yavatmal</strong><br />
            Shop No. 1, Mahajan Market,<br />
            In front of Chintamani Travels,<br />
            Darwha Road, Station Road,<br />
            Yavatmal (M.S.) – 445001
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} DI VERDICTUM LAW CHAMBERS LLP. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Disclaimer shown on entry</span>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}