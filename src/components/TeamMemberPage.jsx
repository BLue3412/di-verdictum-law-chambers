import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Reveal from './Reveal.jsx'
import { getTeamMember } from '../data/team.js'

export default function TeamMemberPage() {
  const { slug } = useParams()
  const member = getTeamMember(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [slug])

  if (!member) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="profile-hero">
          <div className="container profile-hero-inner">
            <Reveal className="profile-photo-wrap">
              <img src={member.photo} alt={`Portrait of ${member.name}`} />
            </Reveal>
            <Reveal delay={1} className="profile-hero-text">
              <Link to="/#team" className="profile-back">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Our Team
              </Link>
              <p className="clause">{member.role}</p>
              <h1 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                {member.name}
              </h1>
              <p className="profile-credentials">{member.credentials}</p>

              {member.quote && (
                <div className="profile-quote">
                  <p className="profile-quote-original">&ldquo;{member.quote.original}&rdquo;</p>
                  <p className="profile-quote-translation">{member.quote.translation}</p>
                  <p className="profile-quote-attribution">&mdash; {member.quote.attribution}</p>
                </div>
              )}

              <Link to="/#contact" className="btn btn-gold" style={{ marginTop: 28 }}>
                Book a Consultation
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container profile-grid">
            <Reveal as="div">
              <p className="clause">Biography</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
                {member.shortName}
              </h2>
              <div className="profile-bio">
                {member.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1} as="div">
              {member.practicesBefore && (
                <div className="profile-sidebox">
                  <h4>Appears Before</h4>
                  <ul>
                    {member.practicesBefore.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="profile-sidebox">
                <h4>Areas of Practice</h4>
                <ul>
                  {member.practiceAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="profile-sidebox">
                <h4>Highlights &amp; Credentials</h4>
                <ul>
                  {member.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
