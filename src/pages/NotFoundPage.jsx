import { Link } from '../router/RouterContext'
import Breadcrumbs from '../components/layout/Breadcrumbs'

export default function NotFoundPage({ path }) {
  const breadcrumbItems = [{ label: 'Page Not Found', path: null }]

  return (
    <div className="not-found-page">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="section not-found-section">
        <div className="container">
          <div className="not-found-card-full">
            <span className="not-found-code">404</span>
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Navigation Error</span>
            </div>
            <h1 className="not-found-headline">Laboratory Route Not Located</h1>
            <p className="not-found-text">
              The requested path <code>{path || 'specified URL'}</code> does not correspond to an active academic standard or laboratory experiment.
            </p>
            <div className="not-found-actions">
              <Link to="/classes" className="btn btn-primary">
                Browse Academic Classes
              </Link>
              <Link to="/classes/11" className="btn btn-secondary">
                Class 11 Science Modules
              </Link>
              <Link to="/" className="btn btn-secondary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
