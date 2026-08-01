import Reveal from './Reveal.jsx'

const PILLARS = [
  {
    num: '§ 01',
    title: 'Preventive Counsel',
    text: 'Good legal counsel begins long before a dispute arises — identifying risks, protecting rights, and helping clients make informed decisions early.',
  },
  {
    num: '§ 02',
    title: 'Strategic Advocacy',
    text: 'Every matter is handled with rigorous analysis and a long-term perspective, balancing legal rights with practical, commercial realities.',
  },
  {
    num: '§ 03',
    title: 'Legal Literacy',
    text: 'Through seminars, workshops, and publications, we work to make the law understandable and accessible beyond the courtroom.',
  },
  {
    num: '§ 04',
    title: 'Lasting Commitment',
    text: 'Honest advice, clear communication, and meticulous preparation — in service of solutions that are legally sound and enduring.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-media" as="div">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop"
            alt="Rows of leather-bound law volumes in the firm's chambers library"
          />
          <div className="about-media-tag">
            <strong>20+</strong>
            <span>Years in Practice</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="clause">Building Trust Through Law, Strategy &amp; Prevention</p>
            <h2 className="section-title">
              We believe the best legal dispute is the one that never happens
            </h2>
            <p className="section-sub" style={{ marginTop: 22 }}>
              For many people, a lawyer is someone they approach only after receiving a legal
              notice or becoming involved in litigation — by which point valuable time,
              relationships, and resources may already be lost. We see the role of a lawyer
              differently: identifying risks, protecting rights, and helping clients make informed
              decisions before problems arise, so that whatever the matter, our focus remains the
              same — protecting our clients' future.
            </p>
          </Reveal>

          <div className="about-pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) + 1} className="pillar">
                <p className="pillar-num">{p.num}</p>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
