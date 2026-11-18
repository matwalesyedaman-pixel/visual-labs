import { useState } from 'react'
import { Link } from '../../router/RouterContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="brand-identity" onClick={closeMenu}>
          <span className="brand-symbol" aria-hidden="true">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="brand-svg"
            >
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.75" />
              <path
                d="M16 6V26M6 16H26"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />
              <circle
                cx="16"
                cy="16"
                r="4.5"
                fill="currentColor"
                fillOpacity="0.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="23" cy="11" r="2" fill="currentColor" />
            </svg>
          </span>
          <div className="brand-text">
            <span className="brand-title">Visual Labs</span>
            <span className="brand-subtitle">For Learning Science</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            <li>
              <Link to="/" exact className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/classes" className="nav-link">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/classes/11" className="nav-link">
                Class 11
              </Link>
            </li>
            <li>
              <Link to="/classes/11/physics" className="nav-link">
                Experiments
              </Link>
            </li>
          </ul>
          <Link to="/classes" className="btn btn-nav">
            Start Learning
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" exact onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/classes" onClick={closeMenu}>
                Class Selection
              </Link>
            </li>
            <li>
              <Link to="/classes/11" onClick={closeMenu}>
                Class 11 Subjects
              </Link>
            </li>
            <li>
              <Link to="/classes/11/physics" onClick={closeMenu}>
                Experiment Library
              </Link>
            </li>
            <li className="mobile-action-item">
              <Link
                to="/classes"
                className="btn btn-primary btn-block"
                onClick={closeMenu}
              >
                Start Learning
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
