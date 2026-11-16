import { useState } from 'react'
import ProjectileSimulation from './simulations/ProjectileSimulation'
import MoleConceptSimulation from './simulations/MoleConceptSimulation'
import PlantKingdomSimulation from './simulations/PlantKingdomSimulation'
import PendulumSimulation from './simulations/PendulumSimulation'
import TitrationSimulation from './simulations/TitrationSimulation'
import EnzymeSimulation from './simulations/EnzymeSimulation'

export default function SimulationShowcase({ activeTab, onTabChange }) {
  const [curriculumScope, setCurriculumScope] = useState('ncert') // 'ncert' or 'supplementary'

  return (
    <section id="simulations" className="section simulations-section">
      <div className="container">
        <div className="section-header">
          <div className="editorial-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true"></span>
            <span>Class 11 NCERT Computational Workbench</span>
          </div>
          <h2 className="section-title">Interactive Simulation Showcase</h2>
          <p className="section-intro">
            Directly aligned with Class 11 NCERT Physics (Chapter 4), Chemistry (Chapter 1), and Biology (Chapter 3). Manipulate parameters in real time and observe immediate mathematical and empirical feedback.
          </p>
        </div>

        {/* Scope Selector: NCERT Core vs Supplementary Solvers */}
        <div className="simulation-scope-bar">
          <button
            type="button"
            className={`scope-pill-btn ${curriculumScope === 'ncert' ? 'selected' : ''}`}
            onClick={() => {
              setCurriculumScope('ncert')
              if (!['physics', 'chemistry', 'biology'].includes(activeTab)) {
                onTabChange('physics')
              }
            }}
          >
            ★ Class 11 NCERT Core
          </button>
          <button
            type="button"
            className={`scope-pill-btn ${curriculumScope === 'supplementary' ? 'selected' : ''}`}
            onClick={() => {
              setCurriculumScope('supplementary')
              if (!['pendulum', 'titration', 'enzyme'].includes(activeTab)) {
                onTabChange('pendulum')
              }
            }}
          >
            Supplementary Solvers
          </button>
        </div>

        {/* NCERT Core Tabs */}
        {curriculumScope === 'ncert' && (
          <div className="simulation-tabs-wrapper">
            <div className="simulation-tabs-bar" role="tablist" aria-label="Class 11 NCERT Simulation Selector">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'physics'}
                className={`sim-tab-btn ${activeTab === 'physics' ? 'active' : ''}`}
                onClick={() => onTabChange('physics')}
              >
                Physics (Ch. 4): Projectile Motion
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'chemistry'}
                className={`sim-tab-btn ${activeTab === 'chemistry' ? 'active' : ''}`}
                onClick={() => onTabChange('chemistry')}
              >
                Chemistry (Ch. 1): Mole Concept
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'biology'}
                className={`sim-tab-btn ${activeTab === 'biology' ? 'active' : ''}`}
                onClick={() => onTabChange('biology')}
              >
                Biology (Ch. 3): Plant Kingdom
              </button>
            </div>
          </div>
        )}

        {/* Supplementary Laboratory Tabs */}
        {curriculumScope === 'supplementary' && (
          <div>
            <div
              style={{
                backgroundColor: 'var(--bg-muted)',
                border: '1px solid var(--border-subtle)',
                padding: '10px 16px',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '16px',
                fontSize: '0.82rem',
                color: 'var(--color-charcoal-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <strong>Notice:</strong> The models below are supplementary reference solvers covering oscillations, volumetric titration, and enzyme kinetics. They are retained as extension modules outside the primary Class 11 NCERT chapters.
            </div>

            <div className="simulation-tabs-wrapper">
              <div className="simulation-tabs-bar" role="tablist" aria-label="Supplementary Laboratory Selector">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'pendulum'}
                  className={`sim-tab-btn ${activeTab === 'pendulum' ? 'active' : ''}`}
                  onClick={() => onTabChange('pendulum')}
                >
                  Supplementary: Simple Pendulum
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'titration'}
                  className={`sim-tab-btn ${activeTab === 'titration' ? 'active' : ''}`}
                  onClick={() => onTabChange('titration')}
                >
                  Supplementary: Acid-Base Titration
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'enzyme'}
                  className={`sim-tab-btn ${activeTab === 'enzyme' ? 'active' : ''}`}
                  onClick={() => onTabChange('enzyme')}
                >
                  Supplementary: Enzyme Kinetics
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Active Simulation Render */}
        {curriculumScope === 'ncert' && activeTab === 'physics' && <ProjectileSimulation />}
        {curriculumScope === 'ncert' && activeTab === 'chemistry' && <MoleConceptSimulation />}
        {curriculumScope === 'ncert' && activeTab === 'biology' && <PlantKingdomSimulation />}

        {curriculumScope === 'supplementary' && activeTab === 'pendulum' && <PendulumSimulation />}
        {curriculumScope === 'supplementary' && activeTab === 'titration' && <TitrationSimulation />}
        {curriculumScope === 'supplementary' && activeTab === 'enzyme' && <EnzymeSimulation />}
      </div>
    </section>
  )
}
