import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <HowItWorks />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
