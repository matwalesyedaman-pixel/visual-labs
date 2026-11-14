const CURRENT_YEAR = new Date().getFullYear()

export default function Footer({ onNavigate }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    onNavigate(sectionId)
  }

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="brand-symbol" aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="brand-svg"
                >
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.75" />
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
              <span className="footer-brand-name">Visual Labs</span>
            </div>
            <p className="footer-mission">
              Visual Labs is an open educational initiative dedicated to making complex physical, chemical, and biological phenomena intuitive, observable, and universally accessible through mathematically rigorous web simulations.
            </p>
            <div className="academic-edition-tag">
              <span>ACADEMIC FOUNDATION • OPEN INQUIRY</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Disciplines</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#subjects" onClick={(e) => handleNavClick(e, 'subjects')}>
                  Physics Modules
                </a>
              </li>
              <li>
                <a href="#subjects" onClick={(e) => handleNavClick(e, 'subjects')}>
                  Chemistry Labs
                </a>
              </li>
              <li>
                <a href="#subjects" onClick={(e) => handleNavClick(e, 'subjects')}>
                  Biology Workbench
                </a>
              </li>
              <li>
                <a href="#simulations" onClick={(e) => handleNavClick(e, 'simulations')}>
                  Interactive Solvers
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Curriculum</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#simulations" onClick={(e) => handleNavClick(e, 'simulations')}>
                  Harmonic Oscillations
                </a>
              </li>
              <li>
                <a href="#simulations" onClick={(e) => handleNavClick(e, 'simulations')}>
                  Acid-Base Titration
                </a>
              </li>
              <li>
                <a href="#simulations" onClick={(e) => handleNavClick(e, 'simulations')}>
                  Michaelis-Menten Kinetics
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                  Pedagogical Framework
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links-list">
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
                  About Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {CURRENT_YEAR} Visual Labs for Learning Science. Crafted for scholarly inquiry and scientific learning.
          </div>
          <div className="footer-bottom-links">
            <span>Pure React + Vite</span>
            <span className="dot-separator">•</span>
            <span>Open Science</span>
            <span className="dot-separator">•</span>
            <span>Accessibility First</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
