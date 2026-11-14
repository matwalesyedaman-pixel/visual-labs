import PendulumSimulation from './simulations/PendulumSimulation'
import TitrationSimulation from './simulations/TitrationSimulation'
import EnzymeSimulation from './simulations/EnzymeSimulation'

export default function SimulationShowcase({ activeTab, onTabChange }) {
  return (
    <section id="simulations" className="section simulations-section">
      <div className="container">
        <div className="section-header">
          <div className="editorial-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true"></span>
            <span>Computational Workbench</span>
          </div>
          <h2 className="section-title">Interactive Simulation Showcase</h2>
          <p className="section-intro">
            Interact directly with live computational scientific apparatus. Adjust physical parameters in real time and observe immediate mathematical feedback as theoretical models react.
          </p>
        </div>

        {/* Simulation Tab Selector */}
        <div className="simulation-tabs-bar" role="tablist" aria-label="Simulations showcase selector">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'physics'}
            className={`sim-tab-btn ${activeTab === 'physics' ? 'active' : ''}`}
            onClick={() => onTabChange('physics')}
          >
            Physics: Simple Harmonic Motion
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'chemistry'}
            className={`sim-tab-btn ${activeTab === 'chemistry' ? 'active' : ''}`}
            onClick={() => onTabChange('chemistry')}
          >
            Chemistry: Acid-Base Titration
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'biology'}
            className={`sim-tab-btn ${activeTab === 'biology' ? 'active' : ''}`}
            onClick={() => onTabChange('biology')}
          >
            Biology: Michaelis-Menten Kinetics
          </button>
        </div>

        {/* Tab Panels */}
        {activeTab === 'physics' && <PendulumSimulation />}
        {activeTab === 'chemistry' && <TitrationSimulation />}
        {activeTab === 'biology' && <EnzymeSimulation />}
      </div>
    </section>
  )
}
