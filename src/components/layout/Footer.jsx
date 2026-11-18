import { Link } from '../../router/RouterContext'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Visual Labs Footer">
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
            <h4 className="footer-heading">Class 11 Disciplines</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/classes/11/physics">
                  Physics: Motion in a Plane
                </Link>
              </li>
              <li>
                <Link to="/classes/11/chemistry">
                  Chemistry: Some Basic Concepts
                </Link>
              </li>
              <li>
                <Link to="/classes/11/biology">
                  Biology: Plant Kingdom
                </Link>
              </li>
              <li>
                <Link to="/classes/11">
                  All Class 11 Subjects
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Platform Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home Overview</Link>
              </li>
              <li>
                <Link to="/classes">Academic Class Catalog</Link>
              </li>
              <li>
                <Link to="/classes/11/physics/projectile-motion">
                  Projectile Motion Lab
                </Link>
              </li>
              <li>
                <Link to="/classes/11/chemistry/mole-concept">
                  Mole Concept Lab
                </Link>
              </li>
              <li>
                <Link to="/classes/11/biology/plant-kingdom">
                  Plant Kingdom Matrix
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Scientific Integrity</h4>
            <p className="footer-statement">
              Simulations evaluate deterministic analytical equations directly in the client browser with zero server roundtrips, preserving scientific reproducibility and universal classroom access.
            </p>
            <div className="footer-ncert-badge">
              <span>NCERT CLASS 11 ALIGNED</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-notice">
            © {CURRENT_YEAR} Visual Labs for Learning Science. Built on Open Web Standards.
          </div>
          <div className="footer-bottom-links">
            <Link to="/classes">Class Selection</Link>
            <span className="bullet-sep" aria-hidden="true">•</span>
            <Link to="/classes/11">Curriculum Focus</Link>
            <span className="bullet-sep" aria-hidden="true">•</span>
            <Link to="/classes/11/physics">Virtual Laboratory</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
