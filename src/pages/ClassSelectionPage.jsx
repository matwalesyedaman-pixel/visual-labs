import { Link } from '../router/RouterContext'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import { CLASS_11_INFO } from '../data/experimentsData'

export default function ClassSelectionPage() {
  const breadcrumbItems = [{ label: 'Academic Classes', path: '/classes' }]

  return (
    <div className="class-selection-page">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="section page-header-section">
        <div className="container">
          <div className="section-header">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Level 1 • Academic Standard Catalog</span>
            </div>
            <h1 className="section-title">Select Your Academic Standard</h1>
            <p className="section-intro">
              Visual Labs provides dedicated virtual science laboratories mapped directly to national school science curricula. Choose your standard below to enter the subject directory.
            </p>
          </div>

          {/* Genuine Curriculum Availability Notice */}
          <div className="curriculum-notice-bar">
            <span className="notice-icon" aria-hidden="true">ℹ</span>
            <span className="notice-text">
              <strong>Active Standard:</strong> Currently, <strong>Class 11 Science</strong> is fully implemented with authentic NCERT Chapter models across Physics, Chemistry, and Biology. Additional classes will only be published when experimentally and mathematically complete.
            </span>
          </div>

          {/* Classes Catalog Grid */}
          <div className="classes-grid">
            <article className="class-card active-card">
              <div className="class-card-top">
                <span className="class-card-tag">CBSE / NCERT ALIGNED</span>
                <span className="class-card-badge">ACTIVE CURRICULUM</span>
              </div>

              <div className="class-card-body">
                <h2 className="class-card-title">{CLASS_11_INFO.name}</h2>
                <p className="class-card-description">
                  {CLASS_11_INFO.description}
                </p>

                <div className="class-meta-metrics">
                  <div className="meta-metric-item">
                    <span className="metric-val">{CLASS_11_INFO.subjectsCount}</span>
                    <span className="metric-lbl">Core Subjects</span>
                  </div>
                  <div className="meta-metric-item">
                    <span className="metric-val">{CLASS_11_INFO.experimentsCount}</span>
                    <span className="metric-lbl">Virtual Labs</span>
                  </div>
                  <div className="meta-metric-item">
                    <span className="metric-val">NCERT</span>
                    <span className="metric-lbl">Curriculum Aligned</span>
                  </div>
                </div>

                <div className="class-subjects-preview">
                  <h4 className="preview-heading">Disciplines Included:</h4>
                  <ul className="preview-subject-pills">
                    {CLASS_11_INFO.subjects.map((sub) => (
                      <li key={sub.id} className="preview-pill" style={{ '--pill-accent': sub.accent }}>
                        <span className="pill-dot"></span>
                        <span className="pill-title">{sub.name}</span>
                        <span className="pill-sub">({sub.chapter.split(':')[0]})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="class-card-footer">
                <Link to="/classes/11" className="btn btn-primary btn-block">
                  <span>Explore Class 11 Subjects</span>
                  <span className="arrow-icon" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
