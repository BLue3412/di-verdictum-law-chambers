import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Reveal from './Reveal.jsx'
import { getInsight } from '../data/insights.js'

export default function InsightArticlePage() {
  const { slug } = useParams()
  const article = getInsight(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [slug])

  if (!article) {
    return <Navigate to="/#insights" replace />
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: 168, paddingBottom: 0 }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <Reveal>
              <Link to="/#insights" className="profile-back" style={{ color: 'var(--gold-deep)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Legal Insights
              </Link>
              <p className="insight-tag">{article.tag}</p>
              <h1 className="section-title" style={{ marginTop: 14, fontSize: 'clamp(28px, 4vw, 40px)' }}>
                {article.title}
              </h1>
              <p className="insight-meta" style={{ marginTop: 16 }}>
                {article.date} · {article.readTime}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <Reveal delay={1} className="article-banner">
              <img src={article.image} alt="" />
            </Reveal>

            <Reveal delay={2} className="profile-bio" style={{ marginTop: 40 }}>
              {article.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}