export default function Hero({ onStartExploring, onExploreSimulations }) {
  // Static demonstrator constants for the Hero scientific plate
  const heroPendulumLen = 1.8
  const heroGravity = 9.81
  const heroAngle = 22
  const heroRad = (heroAngle * Math.PI) / 180
  const heroPeriod = (2 * Math.PI * Math.sqrt(heroPendulumLen / heroGravity)).toFixed(2)
  const heroFreq = (1 / parseFloat(heroPeriod)).toFixed(2)

  // Schematic coordinate math
  const lengthPx = 60 + heroPendulumLen * 45
  const bobX = 180 + lengthPx * Math.sin(heroRad)
  const bobY = 28 + lengthPx * Math.cos(heroRad)

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="editorial-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true"></span>
            <span>Interactive Virtual Inquiry</span>
          </div>

          <h1 className="hero-headline">
            Discover Science Beyond the Textbook.
          </h1>

          <p className="hero-description">
            Visual Labs bridges mathematical theory and empirical observation. By transforming textbook equations into responsive, browser-native computational models, students manipulate physical constants, observe equilibrium states, and build genuine scientific intuition.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onStartExploring}
            >
              Start Exploring
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onExploreSimulations}
            >
              Explore Simulations
            </button>
          </div>

          {/* Genuine, verified academic foundations */}
          <div className="hero-academic-badges">
            <div className="badge-item">
              <span className="badge-number">100%</span>
              <span className="badge-label">Open Web Standards • No Plugins</span>
            </div>
            <div className="badge-item">
              <span className="badge-number">3 Modules</span>
              <span className="badge-label">Physics • Chemistry • Biology</span>
            </div>
            <div className="badge-item">
              <span className="badge-number">Live Solvers</span>
              <span className="badge-label">Mathematically Verifiable</span>
            </div>
          </div>
        </div>

        {/* Science Visual Area: Editorial Laboratory Preview Plate */}
        <div className="hero-visual-area">
          <div className="visual-plate">
            <div className="plate-header">
              <div className="plate-tag">FIGURE 1.0 — OSCILLATORY MECHANICS</div>
              <div className="plate-status">
                <span className="status-indicator"></span>
                <span>NUMERICAL SOLVER</span>
              </div>
            </div>

            <div className="plate-canvas-frame">
              <svg
                className="plate-diagram"
                viewBox="0 0 360 220"
                preserveAspectRatio="xMidYMid meet"
                aria-label="Scientific plate illustration of oscillatory mechanics"
              >
                <defs>
                  <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(35, 39, 36, 0.05)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />

                {/* Ceiling support */}
                <line x1="80" y1="20" x2="280" y2="20" stroke="var(--color-charcoal)" strokeWidth="2.5" />
                <line x1="180" y1="20" x2="180" y2="28" stroke="var(--color-charcoal)" strokeWidth="2" />

                {/* Equilibrium vertical centerline */}
                <line x1="180" y1="28" x2="180" y2="190" stroke="var(--color-charcoal-subtle)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Trajectory arc */}
                <path
                  d={`M ${180 - lengthPx * Math.sin(heroRad)} ${bobY} Q 180 ${bobY + 12} ${bobX} ${bobY}`}
                  fill="none"
                  stroke="var(--border-editorial)"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />

                {/* String line */}
                <line x1="180" y1="28" x2={bobX} y2={bobY} stroke="var(--color-forest)" strokeWidth="2" />
                <circle cx="180" cy="28" r="3.5" fill="var(--color-forest)" />

                {/* Mass bob */}
                <circle cx={bobX} cy={bobY} r="14" fill="var(--bg-warm-ivory)" stroke="var(--color-forest)" strokeWidth="2.5" />
                <circle cx={bobX} cy={bobY} r="3" fill="var(--color-terracotta)" />

                {/* Tension vector arrow */}
                <line
                  x1={bobX}
                  y1={bobY}
                  x2={bobX - 22 * Math.sin(heroRad)}
                  y2={bobY - 22 * Math.cos(heroRad)}
                  stroke="var(--color-terracotta)"
                  strokeWidth="1.5"
                />

                <text x="190" y="55" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-charcoal-muted)">
                  θ = {heroAngle}°
                </text>
              </svg>
            </div>

            <div className="plate-parameters">
              <div className="param-column">
                <span className="param-label">Period (T)</span>
                <span className="param-value">{heroPeriod} s</span>
              </div>
              <div className="param-column">
                <span className="param-label">Frequency (f)</span>
                <span className="param-value">{heroFreq} Hz</span>
              </div>
              <div className="param-column">
                <span className="param-label">Length (L)</span>
                <span className="param-value">{heroPendulumLen.toFixed(1)} m</span>
              </div>
            </div>

            <div className="plate-caption">
              <span>Calculated via <code>T = 2π√(L/g)</code> for harmonic displacement.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
