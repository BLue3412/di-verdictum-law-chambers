import { useState } from 'react'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    q: 'What areas of law does DI VERDICTUM LAW CHAMBERS LLP practice?',
    a: 'Our chambers advise on corporate and commercial law, civil litigation, criminal defence, family and matrimonial matters, real estate, intellectual property, taxation, arbitration, and banking and finance. Placeholder text — expand with the firm\'s full scope.',
  },
  {
    q: 'How do I schedule a consultation?',
    a: 'You may book a consultation using the form in our Contact section, or by calling our chambers directly. A member of our team will confirm a suitable time within one business day.',
  },
  {
    q: 'Do you take on matters outside Yavatmal?',
    a: 'Yes. While our chambers are based in Yavatmal, we regularly appear before the Bombay High Court, Nagpur Bench, District and Sessions Courts, and various judicial and quasi-judicial authorities across Maharashtra.',
  },
  {
    q: 'What should I bring to my first consultation?',
    a: 'Any relevant documents, correspondence, or agreements related to your matter are helpful, though not required for an initial discussion. Our advocates will guide you on what is needed thereafter.',
  },
  {
    q: 'How are legal fees structured?',
    a: 'Fees vary by the nature and complexity of the matter and are discussed transparently during your consultation, before any engagement begins. Placeholder text — replace with the firm\'s actual fee policy.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head section-head--center" style={{ margin: '0 auto 56px' }}>
          <p className="clause" style={{ justifyContent: 'center' }}>Frequently Asked Questions</p>
          <h2 className="section-title">Answers before you ask</h2>
        </Reveal>

        <Reveal className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}