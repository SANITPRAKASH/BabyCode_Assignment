import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App