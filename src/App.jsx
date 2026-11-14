import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SubjectSection from './components/SubjectSection'
import SimulationShowcase from './components/SimulationShowcase'
import PhilosophySection from './components/PhilosophySection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [activeSimulationTab, setActiveSimulationTab] = useState('physics')

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectSubject = (tabKey) => {
    setActiveSimulationTab(tabKey)
    scrollToSection('simulations')
  }

  return (
    <div className="landing-page">
      {/* 1. Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onStartExploring={() => scrollToSection('subjects')}
          onExploreSimulations={() => scrollToSection('simulations')}
        />

        {/* 3. Subjects Section */}
        <SubjectSection onSelectSubject={handleSelectSubject} />

        {/* 4. Simulation Showcase (Physics, Chemistry, Biology Solvers) */}
        <SimulationShowcase
          activeTab={activeSimulationTab}
          onTabChange={setActiveSimulationTab}
        />

        {/* 5. Pedagogical Architecture & Guidelines */}
        <PhilosophySection />
      </main>

      {/* 6. Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  )
}
