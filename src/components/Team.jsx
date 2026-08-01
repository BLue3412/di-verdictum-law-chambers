import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { TEAM } from '../data/team.js'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="clause">Our Team</p>
          <h2 className="section-title">Advocates who bring depth, not just degrees</h2>
          <p className="section-sub">
            Select a profile to view full biography, practice areas, and professional credentials.
          </p>
        </Reveal>

        <div
          className="practice-grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {TEAM.map((member, i) => (
            <Reveal
              key={member.slug}
              delay={(i % 4) + 1}
              className="practice-card team-card"
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <Link to={`/team/${member.slug}`} className="team-card-link">
                <div className="team-card-media">
                  <img
                    src={member.photo}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                  />
                </div>
                <div style={{ padding: '24px 26px 28px' }}>
                  <h4 style={{ fontSize: 16.5 }}>{member.shortName}</h4>
                  <p style={{ marginTop: 8, fontSize: 13, color: 'var(--gold-deep)', fontWeight: 600, letterSpacing: '0.02em' }}>
                    {member.role}
                  </p>
                  <span className="practice-card-link" style={{ marginTop: 16 }}>
                    View Profile
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
