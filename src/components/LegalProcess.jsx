import Reveal from './Reveal.jsx'

const STEPS = [
  { n: '01', title: 'Consultation', text: 'A confidential first meeting to understand your matter in full.' },
  { n: '02', title: 'Case Assessment', text: 'Our advocates review facts, documents, and applicable law.' },
  { n: '03', title: 'Strategy', text: 'A clear course of action is proposed, with timelines and costs.' },
  { n: '04', title: 'Representation', text: 'We advocate on your behalf before courts, tribunals, or counterparties.' },
  { n: '05', title: 'Resolution', text: 'We see the matter through to judgment, settlement, or closure.' },
]

export default function LegalProcess() {
  return (
    <section className="section section--paper">
      <div className="container">
        <Reveal className="section-head section-head--center" style={{ margin: '0 auto 80px' }}>
          <p className="clause" style={{ justifyContent: 'center' }}>Our Legal Process</p>
          <h2 className="section-title">A disciplined path from first consultation to resolution</h2>
        </Reveal>

        <div className="process-track">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={(i % 4) + 1} className="process-step">
              <div className="process-dot">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
