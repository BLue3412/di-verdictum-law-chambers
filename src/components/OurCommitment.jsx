import Reveal from './Reveal.jsx'

const ICONS = {
  confidentiality: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M24 6l16 6v8c0 12-7 20-16 22C15 40 8 32 8 20v-8z" strokeLinejoin="round" />
      <rect x="17" y="21" width="14" height="11" rx="1.5" strokeLinejoin="round" />
      <path d="M20 21v-4a4 4 0 0 1 8 0v4" strokeLinecap="round" />
    </svg>
  ),
  transparency: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M24 12c8 0 14 6 17 12-3 6-9 12-17 12S10 30 7 24c3-6 9-12 17-12z" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5.5" />
    </svg>
  ),
  responsiveness: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="24" cy="24" r="17" />
      <path d="M24 14v10l7 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ethics: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M24 6v34" strokeLinecap="round" />
      <path d="M13 10h22" strokeLinecap="round" />
      <path d="M6 16l-4 8a6 6 0 0 0 12 0z" strokeLinejoin="round" />
      <path d="M42 16l-4 8a6 6 0 0 0 12 0z" strokeLinejoin="round" />
      <path d="M16 40h16" strokeLinecap="round" />
    </svg>
  ),
}

const COMMITMENTS = [
  {
    icon: 'confidentiality',
    title: 'Confidentiality',
    text: 'Every matter entrusted to our chambers is handled with strict confidentiality, safeguarding client information at all times.',
  },
  {
    icon: 'transparency',
    title: 'Transparency',
    text: 'Clear communication on strategy, process, and fees, so clients always understand where a matter stands.',
  },
  {
    icon: 'responsiveness',
    title: 'Responsiveness',
    text: 'Accessible counsel and timely updates, so no client is left wondering about the progress of their matter.',
  },
  {
    icon: 'ethics',
    title: 'Ethical Representation',
    text: 'Advocacy conducted strictly within the bounds of professional ethics and the rules of the Bar Council of India.',
  },
]

export default function OurCommitment() {
  return (
    <section id="commitment" className="section">
      <div className="container">
        <Reveal className="section-head section-head--center" style={{ margin: '0 auto 64px' }}>
          <p className="clause" style={{ justifyContent: 'center' }}>Our Commitment</p>
          <h2 className="section-title">What every client can expect from our chambers</h2>
          <p className="section-sub" style={{ margin: '18px auto 0' }}>
            A statement of the principles that govern how we work — not a promise of outcomes, but
            of how every matter, large or small, will be handled.
          </p>
        </Reveal>

        <div className="practice-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {COMMITMENTS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) + 1} className="practice-card">
              <div className="practice-icon">{ICONS[item.icon]}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}