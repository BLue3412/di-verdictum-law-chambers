import Reveal from './Reveal.jsx'

const ICONS = {
  corporate: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 42V14l14-8 14 8v28" strokeLinejoin="round" />
      <path d="M18 42V24h12v18" strokeLinejoin="round" />
      <path d="M6 42h36" strokeLinecap="round" />
    </svg>
  ),
  litigation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M24 8v26" strokeLinecap="round" />
      <path d="M12 12h24" strokeLinecap="round" />
      <path d="M6 18l-4 8a6 6 0 0 0 12 0z" />
      <path d="M42 18l-4 8a6 6 0 0 0 12 0z" />
      <path d="M16 42h16" strokeLinecap="round" />
      <path d="M24 34v8" />
    </svg>
  ),
  family: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="17" cy="14" r="5" />
      <circle cx="31" cy="14" r="5" />
      <path d="M6 38c0-7 5-12 11-12s11 5 11 12" strokeLinecap="round" />
      <path d="M20 38c0-7 5-12 11-12s11 5 11 12" strokeLinecap="round" />
    </svg>
  ),
  ip: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="24" cy="24" r="17" />
      <path d="M24 15v18" strokeLinecap="round" />
      <path d="M17 20a7 6 0 0 1 14 0" strokeLinecap="round" />
    </svg>
  ),
  realEstate: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M8 22 24 8l16 14" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M12 20v20h24V20" strokeLinejoin="round" />
      <path d="M20 40V28h8v12" strokeLinejoin="round" />
    </svg>
  ),
  taxation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <path d="M17 16h14M17 24h14M17 32h8" strokeLinecap="round" />
    </svg>
  ),
  arbitration: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M8 30 20 18l6 6-12 12z" strokeLinejoin="round" />
      <path d="M40 8 28 20l-6-6L34 2z" strokeLinejoin="round" />
      <path d="M8 40h32" strokeLinecap="round" />
    </svg>
  ),
  criminal: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M24 6l16 6v8c0 12-7 20-16 22C15 40 8 32 8 20v-8z" strokeLinejoin="round" />
      <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  banking: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M6 18 24 8l18 10" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M9 18v18M18 18v18M30 18v18M39 18v18" strokeLinecap="round" />
      <path d="M6 42h36" strokeLinecap="round" />
    </svg>
  ),
}

const AREAS = [
  {
    icon: 'litigation',
    title: 'Civil & Commercial Litigation',
    text: 'Representation before Indian courts and tribunals in civil and commercial disputes, from trial through appeal.',
  },
  {
    icon: 'family',
    title: 'Matrimonial & Family Law',
    text: 'Compassionate, private counsel through divorce, custody, and family dispute matters.',
  },
  {
    icon: 'realEstate',
    title: 'Property & Real Estate Matters',
    text: 'Due diligence, title resolution, and dispute counsel across residential and commercial property.',
  },
  {
    icon: 'ip',
    title: 'Succession Planning & Estate Administration',
    text: 'Structuring succession and estate affairs wisely, to protect family assets and prevent future disputes.',
  },
  {
    icon: 'criminal',
    title: 'Criminal Law',
    text: 'Rigorous, discreet defence and representation before criminal courts across Maharashtra.',
  },
  {
    icon: 'corporate',
    title: 'Corporate & Business Advisory',
    text: 'Structuring, compliance, and business advisory counsel for enterprises at every stage of growth.',
  },
  {
    icon: 'taxation',
    title: 'Contract Drafting & Legal Documentation',
    text: 'Careful drafting, vetting, and due diligence on agreements and legal documentation.',
  },
  {
    icon: 'banking',
    title: 'Constitutional & Writ Jurisdiction',
    text: 'Representation in constitutional matters and writ petitions before the High Court and other authorities.',
  },
  {
    icon: 'arbitration',
    title: 'Arbitration, Mediation & ADR',
    text: 'Alternative dispute resolution designed to preserve relationships and resolve matters efficiently.',
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="section section--paper">
      <div className="container">
        <Reveal className="section-head section-head--center" style={{ margin: '0 auto 64px' }}>
          <p className="clause" style={{ justifyContent: 'center' }}>Areas of Practice</p>
          <h2 className="section-title">Counsel across the breadth of Indian law</h2>
          <p className="section-sub" style={{ margin: '18px auto 0' }}>
            Our chambers bring together specialist advocates so that clients receive coordinated,
            considered counsel — whatever the nature of the matter.
          </p>
        </Reveal>

        <div className="practice-grid">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={(i % 4) + 1} className="practice-card">
              <div className="practice-icon">{ICONS[area.icon]}</div>
              <h4>{area.title}</h4>
              <p>{area.text}</p>
              <a href="#contact" className="practice-card-link">
                Enquire
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
