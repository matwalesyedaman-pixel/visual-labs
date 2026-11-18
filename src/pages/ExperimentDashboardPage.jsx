import { useState } from 'react'
import { Link } from '../router/RouterContext'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import NotFoundPage from './NotFoundPage'
import { getExperiment, getExperimentsBySubject } from '../data/experimentsData'
import { CURRICULUM_SUBJECTS } from '../data/curriculumData'

// Import the verified six interactive simulation modules
import ProjectileSimulation from '../components/simulations/ProjectileSimulation'
import PendulumSimulation from '../components/simulations/PendulumSimulation'
import MoleConceptSimulation from '../components/simulations/MoleConceptSimulation'
import TitrationSimulation from '../components/simulations/TitrationSimulation'
import PlantKingdomSimulation from '../components/simulations/PlantKingdomSimulation'
import EnzymeSimulation from '../components/simulations/EnzymeSimulation'

export default function ExperimentDashboardPage({ classId = '11', subjectId, experimentId }) {
  const [activeSection, setActiveSection] = useState('simulation')

  if (classId !== '11') {
    return <NotFoundPage path={`/classes/${classId}/${subjectId}/${experimentId}`} />
  }

  const experiment = getExperiment(subjectId, experimentId)
  const currentSubject = CURRICULUM_SUBJECTS.find((s) => s.activeTab === subjectId)

  if (!experiment || !currentSubject) {
    return <NotFoundPage path={`/classes/11/${subjectId}/${experimentId}`} />
  }

  const siblingExperiments = getExperimentsBySubject(subjectId)
  const currentIndex = siblingExperiments.findIndex((e) => e.id === experimentId)
  const prevExperiment = currentIndex > 0 ? siblingExperiments[currentIndex - 1] : null
  const nextExperiment =
    currentIndex < siblingExperiments.length - 1 ? siblingExperiments[currentIndex + 1] : null

  const breadcrumbItems = [
    { label: 'Classes', path: '/classes' },
    { label: 'Class 11 Science', path: '/classes/11' },
    { label: currentSubject.name.split(':')[0], path: `/classes/11/${subjectId}` },
    { label: experiment.title.split('&')[0].trim(), path: null },
  ]

  // Render the appropriate live simulation component
  const renderSimulationComponent = () => {
    switch (experiment.id) {
      case 'projectile-motion':
        return <ProjectileSimulation />
      case 'pendulum':
        return <PendulumSimulation />
      case 'mole-concept':
        return <MoleConceptSimulation />
      case 'titration':
        return <TitrationSimulation />
      case 'plant-kingdom':
        return <PlantKingdomSimulation />
      case 'enzyme-kinetics':
        return <EnzymeSimulation />
      default:
        return <div>Simulation solver not loaded.</div>
    }
  }

  return (
    <div className="experiment-dashboard-page" style={{ '--dash-accent': currentSubject.accent }}>
      <Breadcrumbs items={breadcrumbItems} />

      {/* Dashboard Top Banner */}
      <header className="dashboard-header-section">
        <div className="container">
          <div className="dashboard-meta-strip">
            <span className="dash-badge">{experiment.badge}</span>
            <span className="dash-category">{experiment.category}</span>
            <span className="dash-subject-pill">{currentSubject.name.split(':')[0]}</span>
          </div>

          <h1 className="dashboard-title">{experiment.title}</h1>
          <p className="dashboard-subtitle">{experiment.subtitle}</p>

          {/* Section Navigation Tabs */}
          <nav className="dashboard-section-tabs" aria-label="Experiment Dashboard Sections">
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'simulation' ? 'active' : ''}`}
              onClick={() => setActiveSection('simulation')}
            >
              <span className="tab-icon">⚡</span>
              <span>Simulation</span>
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'theory' ? 'active' : ''}`}
              onClick={() => setActiveSection('theory')}
            >
              <span className="tab-icon">📖</span>
              <span>Theory</span>
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'practical' ? 'active' : ''}`}
              onClick={() => setActiveSection('practical')}
            >
              <span className="tab-icon">🧪</span>
              <span>Practical</span>
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'observations' ? 'active' : ''}`}
              onClick={() => setActiveSection('observations')}
            >
              <span className="tab-icon">📊</span>
              <span>Observations</span>
            </button>
            <button
              type="button"
              className={`section-tab-btn ${activeSection === 'results' ? 'active' : ''}`}
              onClick={() => setActiveSection('results')}
            >
              <span className="tab-icon">🎯</span>
              <span>Results</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Dashboard Main Content Area */}
      <main className="dashboard-main-content">
        <div className="container">
          {/* 1. SIMULATION TAB */}
          {activeSection === 'simulation' && (
            <div className="dashboard-tab-panel simulation-panel">
              <div className="simulation-live-wrapper">
                {renderSimulationComponent()}
              </div>

              <div className="simulation-guide-callout">
                <div className="callout-icon">💡</div>
                <div className="callout-body">
                  <h4>Interactive Laboratory Instructions</h4>
                  <p>
                    Adjust numerical sliders, toggle presets, and observe real-time parametric recomputation.
                    To cross-check empirical outputs with scientific principles, open the{' '}
                    <button
                      type="button"
                      className="inline-tab-link"
                      onClick={() => setActiveSection('theory')}
                    >
                      Theory
                    </button>{' '}
                    or{' '}
                    <button
                      type="button"
                      className="inline-tab-link"
                      onClick={() => setActiveSection('observations')}
                    >
                      Observations
                    </button>{' '}
                    tabs above.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. THEORY TAB */}
          {activeSection === 'theory' && (
            <div className="dashboard-tab-panel theory-panel">
              <div className="panel-card">
                <h2 className="panel-card-title">Conceptual Overview</h2>
                <p className="panel-prose">{experiment.theory.overview}</p>
              </div>

              <div className="panel-card">
                <h3 className="panel-card-title">Fundamental Scientific Principles</h3>
                <ul className="principles-list">
                  {experiment.theory.principles.map((pr, idx) => (
                    <li key={idx} className="principle-item">
                      <span className="principle-num">0{idx + 1}</span>
                      <span className="principle-text">{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel-card">
                <h3 className="panel-card-title">Governing Mathematical Formulas</h3>
                <div className="formulas-grid">
                  {experiment.theory.formulas.map((f, idx) => (
                    <div key={idx} className="formula-card">
                      <div className="formula-header">
                        <span className="formula-sym">{f.symbol}</span>
                        <span className="formula-title">{f.name}</span>
                      </div>
                      <code className="formula-display">{f.formula}</code>
                      <p className="formula-desc">{f.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-card">
                <h3 className="panel-card-title">Curriculum Learning Objectives</h3>
                <ul className="objectives-list">
                  {experiment.theory.objectives.map((obj, idx) => (
                    <li key={idx} className="objective-item">
                      <span className="check-bullet" aria-hidden="true">✓</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 3. PRACTICAL TAB */}
          {activeSection === 'practical' && (
            <div className="dashboard-tab-panel practical-panel">
              <div className="panel-card">
                <h2 className="panel-card-title">Experimental Aim</h2>
                <div className="aim-box">
                  <p>{experiment.practical.aim}</p>
                </div>
              </div>

              <div className="panel-card">
                <h3 className="panel-card-title">Apparatus & Laboratory Materials</h3>
                <ul className="apparatus-list">
                  {experiment.practical.apparatus.map((item, idx) => (
                    <li key={idx} className="apparatus-item">
                      <span className="apparatus-bullet" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel-card">
                <h3 className="panel-card-title">Step-by-Step Laboratory Procedure</h3>
                <ol className="procedure-steps">
                  {experiment.practical.procedure.map((step, idx) => (
                    <li key={idx} className="step-item">
                      <span className="step-counter">{idx + 1}</span>
                      <p className="step-instruction">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="panel-card precautions-card">
                <h3 className="panel-card-title">Safety & Experimental Precautions</h3>
                <ul className="precautions-list">
                  {experiment.practical.precautions.map((prec, idx) => (
                    <li key={idx} className="precaution-item">
                      <span className="precaution-bullet" aria-hidden="true">⚠️</span>
                      <span>{prec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 4. OBSERVATIONS TAB */}
          {activeSection === 'observations' && (
            <div className="dashboard-tab-panel observations-panel">
              <div className="panel-card">
                <h2 className="panel-card-title">Experimental Observation Matrix</h2>
                <p className="panel-prose">{experiment.observations.description}</p>

                <div className="observation-table-wrapper">
                  <table className="observation-table">
                    <thead>
                      <tr>
                        {experiment.observations.tableHeaders.map((head, idx) => (
                          <th key={idx}>{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {experiment.observations.tableRows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {experiment.observations.notes && (
                  <div className="observation-notes-box">
                    <strong>Analytical Note:</strong> {experiment.observations.notes}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 5. RESULTS TAB */}
          {activeSection === 'results' && (
            <div className="dashboard-tab-panel results-panel">
              <div className="panel-card">
                <h2 className="panel-card-title">Scientific Interpretation</h2>
                <p className="panel-prose">{experiment.results.interpretation}</p>
              </div>

              <div className="panel-card conclusion-card">
                <h3 className="panel-card-title">Final Pedagogical Conclusion</h3>
                <div className="conclusion-box">
                  <p>{experiment.results.conclusion}</p>
                </div>
              </div>
            </div>
          )}

          {/* Sibling Experiment Navigation Footer */}
          <div className="dashboard-pagination-bar">
            {prevExperiment ? (
              <Link
                to={`/classes/11/${subjectId}/${prevExperiment.id}`}
                className="btn btn-secondary pagination-btn"
              >
                <span>← Previous Lab: {prevExperiment.title.split('&')[0].trim()}</span>
              </Link>
            ) : (
              <Link to={`/classes/11/${subjectId}`} className="btn btn-secondary pagination-btn">
                <span>← Back to {currentSubject.name.split(':')[0]} Library</span>
              </Link>
            )}

            {nextExperiment ? (
              <Link
                to={`/classes/11/${subjectId}/${nextExperiment.id}`}
                className="btn btn-primary pagination-btn"
              >
                <span>Next Lab: {nextExperiment.title.split('&')[0].trim()} →</span>
              </Link>
            ) : (
              <Link to="/classes/11" className="btn btn-primary pagination-btn">
                <span>View All Class 11 Subjects →</span>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
