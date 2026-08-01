import Reveal from './Reveal.jsx'

const TESTIMONIALS = [
  {
    text: 'Placeholder testimonial — the chambers guided our company through a complex merger with clarity and precision at every stage.',
    name: 'R. Malhotra',
    role: 'Director, Manufacturing Enterprise',
  },
  {
    text: 'Placeholder testimonial — we felt heard and represented with genuine care through a difficult family matter.',
    name: 'S. Iyer',
    role: 'Private Client',
  },
  {
    text: 'Placeholder testimonial — thorough, responsive, and always several steps ahead in preparation for our hearings.',
    name: 'K. Bhattacharya',
    role: 'Founder, Technology Startup',
  },
]

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head section-head--center" style={{ margin: '0 auto 64px' }}>
          <p className="clause" style={{ justifyContent: 'center' }}>Client Testimonials</p>
          <h2 className="section-title">The measure of our work, in our clients' words</h2>
        </Reveal>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) + 1} className="testimonial-card">
              <p className="testimonial-quote-mark">&ldquo;</p>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-person">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
