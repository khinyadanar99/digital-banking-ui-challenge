import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ArticlesSection from './components/ArticlesSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
