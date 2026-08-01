import { useState } from 'react'
import Reveal from './Reveal.jsx'

const OFFICE_INFO = [
  {
    title: 'Office — Yavatmal',
    text: 'Shop No. 1, Mahajan Market, In front of Chintamani Travels, Darwha Road, Station Road, Yavatmal (M.S.) – 445001',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Telephone',
    text: '9371129739 / 9422892752',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5c0 8.5 6.5 15 15 15l3-4-6-3-2 2c-2.5-1.3-4.7-3.5-6-6l2-2-3-6z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Email',
    text: 'mohit@acchavakil.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Chamber Hours',
    text: 'Monday – Saturday, 10:00 AM – 7:00 PM IST',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section--paper">
      <div className="container">
        <Reveal className="section-head">
          <p className="clause">Contact</p>
          <h2 className="section-title">Begin with a confidential consultation</h2>
          <p className="section-sub">
            Share a few details about your matter and a member of our team will respond within one
            business day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div">
            {OFFICE_INFO.map((item) => (
              <div className="contact-info-item" key={item.title}>
                <span className="contact-info-icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

            <div className="contact-map">
              <iframe
                title="DI VERDICTUM LAW CHAMBERS LLP — Office Location"
                src="https://www.google.com/maps?q=Mahajan+Market,+Station+Road,+Darwha+Road,+Yavatmal,+Maharashtra+445001&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
            {submitted ? (
              <div className="contact-form">
                <div className="form-success">
                  Thank you. Your inquiry has been received — a member of our chambers will reach out
                  shortly to confirm your consultation.
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input id="fullName" name="fullName" type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="practiceArea">Practice Area</label>
                    <select id="practiceArea" name="practiceArea" defaultValue="">
                      <option value="" disabled>Select an area</option>
                      <option>Corporate &amp; Commercial Law</option>
                      <option>Civil Litigation</option>
                      <option>Criminal Defence</option>
                      <option>Family &amp; Matrimonial Law</option>
                      <option>Real Estate &amp; Property Law</option>
                      <option>Intellectual Property</option>
                      <option>Taxation &amp; Regulatory</option>
                      <option>Arbitration &amp; Mediation</option>
                      <option>Banking &amp; Finance</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us about your matter</label>
                  <textarea id="message" name="message" placeholder="Please share relevant details of your matter" required />
                </div>

                <button type="submit" className="btn btn-gold btn-block">
                  Submit Inquiry
                </button>

                <p className="form-note">
                  Submitting this form does not create an advocate–client relationship. Information
                  shared is kept strictly confidential.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}