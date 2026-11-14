import { useState } from 'react'

export default function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigate(sectionId)
  }

  return (
    <header className="site-header">
      <div className="container header-container">
        <a
          href="#home"
          className="brand-identity"
          onClick={(e) => handleNavClick(e, 'home')}
        >
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
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#subjects" onClick={(e) => handleNavClick(e, 'subjects')}>
                Subjects
              </a>
            </li>
            <li>
              <a href="#simulations" onClick={(e) => handleNavClick(e, 'simulations')}>
                Simulations
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                About
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-nav"
            onClick={(e) => handleNavClick(e, 'subjects')}
          >
            Explore Labs
          </button>
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
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#subjects" onClick={(e) => handleNavClick(e, 'subjects')}>
                Subjects
              </a>
            </li>
            <li>
              <a href="#simulations" onClick={(e) => handleNavClick(e, 'simulations')}>
                Simulations
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                About
              </a>
            </li>
            <li className="mobile-action-item">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={(e) => handleNavClick(e, 'subjects')}
              >
                Explore Labs
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
