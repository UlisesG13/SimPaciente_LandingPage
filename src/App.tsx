import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemStats from './components/ProblemStats'
import Comparison from './components/Comparison'
import HowItWorks from './components/HowItWorks'
import MLArchitecture from './components/MLArchitecture'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Scope from './components/Scope'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStats />
        <Comparison />
        <HowItWorks />
        <MLArchitecture />
        <Features />
        <Benefits />
        <Scope />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
