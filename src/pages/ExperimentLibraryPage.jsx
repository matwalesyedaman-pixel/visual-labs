import { Link } from '../router/RouterContext'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import NotFoundPage from './NotFoundPage'
import { CURRICULUM_SUBJECTS } from '../data/curriculumData'
import { getExperimentsBySubject } from '../data/experimentsData'

export default function ExperimentLibraryPage({ classId = '11', subjectId }) {
  if (classId !== '11') {
    return <NotFoundPage path={`/classes/${classId}/${subjectId || ''}`} />
  }

  // Strict validation: do not fall back to Physics on invalid subject
  const currentSubject = CURRICULUM_SUBJECTS.find((s) => s.activeTab === subjectId)
  if (!currentSubject) {
    return <NotFoundPage path={`/classes/11/${subjectId || ''}`} />
  }

  const experiments = getExperimentsBySubject(currentSubject.activeTab)

  const breadcrumbItems = [
    { label: 'Classes', path: '/classes' },
    { label: 'Class 11 Science', path: '/classes/11' },
    {
      label: currentSubject.name.split(':')[0],
      path: `/classes/11/${currentSubject.activeTab}`,
    },
  ]

  return (
    <div className="experiment-library-page">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="section page-header-section">
        <div className="container">
          <div className="section-header">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Level 3 • Virtual Science Laboratory</span>
            </div>
            <h1 className="section-title">
              {currentSubject.name}: Experiment Library
            </h1>
            <p className="section-intro">
              {currentSubject.description}
            </p>
          </div>

          {/* Quick Subject Switching Navigation Strip */}
          <div className="subject-pills-bar" role="navigation" aria-label="Discipline Selector">
            {CURRICULUM_SUBJECTS.map((sub) => {
              const isActive = sub.activeTab === currentSubject.activeTab
              return (
                <Link
                  key={sub.activeTab}
                  to={`/classes/11/${sub.activeTab}`}
                  className={`subject-pill-link ${isActive ? 'active' : ''}`}
                  style={{ '--sub-accent': sub.accent }}
                >
                  <span className="pill-dot"></span>
                  <span>{sub.name.split(':')[0]}</span>
                  <span className="pill-chap-tag">({sub.moduleStatus.split(' ')[2] || ''})</span>
                </Link>
              )
            })}
          </div>

          {/* Experiment Cards Grid */}
          <div className="experiments-grid">
            {experiments.map((exp) => {
              const dashboardRoute = `/classes/11/${currentSubject.activeTab}/${exp.id}`
              const isNcertCore = exp.scope === 'ncert'

              return (
                <article
                  key={exp.id}
                  className={`experiment-card ${isNcertCore ? 'core-card' : 'supplementary-card'}`}
                  style={{ '--exp-accent': currentSubject.accent }}
                >
                  <div className="card-top-meta">
                    <span className="exp-badge">{exp.badge}</span>
                    <span className="exp-category">{exp.category}</span>
                  </div>

                  <div className="exp-header">
                    <h2 className="exp-title">{exp.title}</h2>
                    <p className="exp-subtitle">{exp.subtitle}</p>
                    <p className="exp-description">{exp.description}</p>
                  </div>

                  <div className="exp-formulas-preview">
                    <span className="formulas-label">Key Analytical Relationships:</span>
                    <div className="formulas-list">
                      {exp.theory.formulas.slice(0, 2).map((f, idx) => (
                        <div key={idx} className="formula-chip">
                          <code className="chip-code">{f.formula}</code>
                          <span className="chip-name">{f.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="exp-dashboard-sections-tag">
                    <span className="tag-label">Includes:</span>
                    <span className="tag-item">Theory</span>
                    <span className="tag-sep">•</span>
                    <span className="tag-item">Practical Protocol</span>
                    <span className="tag-sep">•</span>
                    <span className="tag-item">Interactive Solver</span>
                    <span className="tag-sep">•</span>
                    <span className="tag-item">Data Observations</span>
                  </div>

                  <div className="card-footer">
                    <Link
                      to={dashboardRoute}
                      className="btn btn-primary btn-block"
                      aria-label={`Open ${exp.title} dashboard`}
                    >
                      <span>Open Experiment Dashboard</span>
                      <span className="arrow-icon" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
