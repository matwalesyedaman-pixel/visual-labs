import { Link } from '../../router/RouterContext'

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1
            return (
              <li key={idx} className="breadcrumb-item">
                <span className="breadcrumb-separator" aria-hidden="true">/</span>
                {isLast || !item.path ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="breadcrumb-link">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
