import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { INSIGHTS } from '../data/insights.js'

export default function LegalInsights() {
  return (
    <section id="insights" className="section section--paper">
      <div className="container">
        <Reveal className="section-head">
          <p className="clause">Legal Insights</p>
          <h2 className="section-title">Perspectives from our chambers</h2>
          <p className="section-sub">
            Commentary on developments in Indian law — placeholder articles to be replaced with the
            firm's published insights.
          </p>
        </Reveal>

        <div className="insights-grid">
          {INSIGHTS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) + 1} className="insight-card" as="article">
              <Link to={`/insights/${a.slug}`} style={{ display: 'block', color: 'inherit' }}>
                <div className="insight-media">
                  <img src={a.image} alt="" />
                </div>
                <div className="insight-body">
                  <p className="insight-tag">{a.tag}</p>
                  <h4>{a.title}</h4>
                  <p className="insight-meta">{a.date} · {a.readTime}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}