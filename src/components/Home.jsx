import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import PracticeAreas from './PracticeAreas.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import Team from './Team.jsx'
import LegalProcess from './LegalProcess.jsx'
import OurCommitment from './OurCommitment.jsx'
import LegalInsights from './LegalInsights.jsx'
import FAQ from './FAQ.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
      }
    }
  }, [hash])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Team />
        <LegalProcess />
        <OurCommitment />
        <LegalInsights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}