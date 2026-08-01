import Reveal from './Reveal.jsx'

const STATS = [
  { num: '25+', title: 'Years of Practice', text: 'Advising clients across India since our founding.' },
  { num: '1,200+', title: 'Matters Resolved', text: 'Across corporate, civil, and criminal jurisprudence.' },
  { num: '18', title: 'Partners & Associates', text: 'Specialist advocates across every core practice area.' },
  { num: '2', title: 'Courts of Practice', text: 'Bombay High Court, Nagpur Bench, and District & Sessions Courts.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section section--charcoal">
      <div className="container">
        <Reveal className="section-head section-head--center" style={{ margin: '0 auto 64px' }}>
          <p className="clause" style={{ justifyContent: 'center' }}>Why Choose Us</p>
          <h2 className="section-title">A chamber measured by outcomes, not promises</h2>
        </Reveal>

        <Reveal className="why-grid" as="div">
          {STATS.map((s) => (
            <div className="why-item" key={s.title}>
              <p className="why-num">{s.num}</p>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}