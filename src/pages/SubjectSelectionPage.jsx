import { Link } from '../router/RouterContext'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import NotFoundPage from './NotFoundPage'
import { CURRICULUM_SUBJECTS } from '../data/curriculumData'
import { getExperimentsBySubject } from '../data/experimentsData'

export default function SubjectSelectionPage({ classId = '11' }) {
  if (classId !== '11') {
    return <NotFoundPage path={`/classes/${classId}`} />
  }

  const breadcrumbItems = [
    { label: 'Classes', path: '/classes' },
    { label: 'Class 11 Science', path: '/classes/11' },
  ]

  return (
    <div className="subject-selection-page">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="section page-header-section">
        <div className="container">
          <div className="section-header">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Level 2 • Class 11 Science Modules</span>
            </div>
            <h1 className="section-title">Class 11 Subject Curriculum</h1>
            <p className="section-intro">
              Directly aligned with Class 11 NCERT textbooks. Each subject offers primary chapter laboratories and supplementary analytical solvers. Select a discipline below to enter its dedicated experiment library.
            </p>
          </div>

          <div className="subjects-grid">
            {CURRICULUM_SUBJECTS.map((subject) => {
              const experiments = getExperimentsBySubject(subject.activeTab)
              const targetRoute = `/classes/11/${subject.activeTab}`

              return (
                <article
                  key={subject.activeTab}
                  className="subject-card"
                  style={{ '--card-accent': subject.accent }}
                >
                  <div className="card-top-meta">
                    <span className="subject-code">{subject.code}</span>
                    <span className="sim-count">{experiments.length} Laboratories</span>
                  </div>

                  <div className="subject-header">
                    <h2 className="subject-name">{subject.name}</h2>
                    <p className="subject-description">{subject.description}</p>
                  </div>

                  <div className="card-curriculum">
                    <h3 className="curriculum-heading">Curriculum Focus Topics</h3>
                    <ul className="topic-list">
                      {subject.topics.map((topic, idx) => (
                        <li key={idx} className="topic-item">
                          <span className="topic-bullet" aria-hidden="true">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-experiment-preview">
                    <span className="preview-label">Available Interactive Labs:</span>
                    <div className="preview-lab-tags">
                      {experiments.map((exp) => (
                        <span key={exp.id} className="preview-lab-tag">
                          {exp.title.split('&')[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer">
                    <Link
                      to={targetRoute}
                      className="btn btn-primary btn-block"
                      aria-label={`Open ${subject.name} experiment library`}
                    >
                      <span>Explore {subject.name.split(':')[0]} Labs</span>
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
