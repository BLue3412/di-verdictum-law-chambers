import Logo from './Logo.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1800&auto=format&fit=crop"
          alt="Interior of a grand Indian courtroom with columns and warm light"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-content">
        <Logo variant="dark" />
        <p className="hero-eyebrow">Advocates &amp; Solicitors · Yavatmal, Maharashtra</p>
        <h1 className="hero-name">
          DI VERDICTUM <span>Law Chambers LLP</span>
        </h1>
        <p className="hero-tagline">
          Where diligence meets discernment. A full-service Indian law chamber built on
          trust, integrity, and an unwavering commitment to justice.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-gold">Book a Consultation</a>
          <a href="#practice-areas" className="btn btn-outline">Explore Practice Areas</a>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to learn more">
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}