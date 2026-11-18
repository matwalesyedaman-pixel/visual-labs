import { Link } from '../router/RouterContext'

export default function HomePage() {
  // Static demonstrator constants for the Hero scientific preview plate
  const heroPendulumLen = 1.8
  const heroAngle = 22
  const heroRad = (heroAngle * Math.PI) / 180

  // Schematic coordinate math
  const lengthPx = 60 + heroPendulumLen * 45
  const bobX = 180 + lengthPx * Math.sin(heroRad)
  const bobY = 28 + lengthPx * Math.cos(heroRad)

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Interactive Virtual Science Platform</span>
            </div>

            <h1 className="hero-headline">
              Discover Science Beyond the Textbook.
            </h1>

            <p className="hero-description">
              Visual Labs bridges mathematical theory and empirical observation. By transforming textbook equations into responsive, browser-native computational models, students manipulate physical constants, observe equilibrium states, and build genuine scientific intuition.
            </p>

            <div className="hero-cta-group">
              <Link to="/classes" className="btn btn-primary">
                Start Learning
              </Link>
              <Link to="/classes/11/physics" className="btn btn-secondary">
                Explore Experiments
              </Link>
            </div>

            {/* Verified Academic Foundations */}
            <div className="hero-academic-badges">
              <div className="badge-item">
                <span className="badge-number">Zero Plugins</span>
                <span className="badge-label">Pure Open Web • HTML5 Canvas/SVG</span>
              </div>
              <div className="badge-item">
                <span className="badge-number">3 Modules</span>
                <span className="badge-label">Physics • Chemistry • Biology</span>
              </div>
              <div className="badge-item">
                <span className="badge-number">Live Solvers</span>
                <span className="badge-label">Deterministic Scientific Models</span>
              </div>
            </div>
          </div>

          {/* Science Visual Area: Laboratory Preview Plate */}
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

              <div className="plate-caption">
                <div className="caption-text">
                  <span>Harmonic Restoring Torque</span>
                  <span className="caption-sep" aria-hidden="true">•</span>
                  <span>T₀ = 2.69 s</span>
                  <span className="caption-sep" aria-hidden="true">•</span>
                  <span>L = 1.80 m</span>
                </div>
                <span className="caption-meta">VERIFIED SOLVER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Visual Labs Section */}
      <section className="section about-section">
        <div className="container">
          <div className="section-header">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>About Visual Labs</span>
            </div>
            <h2 className="section-title">An Open Virtual Laboratory for Science</h2>
            <p className="section-intro">
              Traditional science education often oscillates between dry algebraic memorization and passive video demonstrations. Visual Labs provides a third way: interactive virtual inquiry where learners manipulate physical variables and observe immediate mathematical causality in a risk-free virtual setting.
            </p>
          </div>

          <div className="pillars-list-grid">
            <div className="pillar-card">
              <div className="pillar-card-num">01</div>
              <h3 className="pillar-card-title">Parametric Direct Manipulation</h3>
              <p className="pillar-card-text">
                Students vary string lengths, projectile velocities, reagent volumes, and substrate concentrations via touch-friendly controls, building tangible mental models of natural laws.
              </p>
            </div>
            <div className="pillar-card-card pillar-card">
              <div className="pillar-card-num">02</div>
              <h3 className="pillar-card-title">Mathematically Faithful Solvers</h3>
              <p className="pillar-card-text">
                Every simulation computes exact differential kinematic equations, Henderson-Hasselbalch balances, and Michaelis-Menten rate laws in real time—no scripted pre-recorded animations.
              </p>
            </div>
            <div className="pillar-card-card pillar-card">
              <div className="pillar-card-num">03</div>
              <h3 className="pillar-card-title">Classroom-First Accessibility</h3>
              <p className="pillar-card-text">
                Engineered natively on standard web technologies. Operates seamlessly on desktop computers, tablets, and interactive classroom projectors without logins or plug-in installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Platform Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Platform Capabilities</span>
            </div>
            <h2 className="section-title">Designed for Complete Concept Mastery</h2>
            <p className="section-intro">
              Each laboratory combines conceptual theory, practical protocols, live interactive modeling, and verified observation tables into one cohesive dashboard.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item-card">
              <div className="feature-icon-badge">📐</div>
              <h4 className="feature-item-title">Conceptual Theory & Formulas</h4>
              <p className="feature-item-desc">
                Clear physical derivations, definitions, and equations aligned strictly with NCERT syllabus requirements.
              </p>
            </div>

            <div className="feature-item-card">
              <div className="feature-icon-badge">🧪</div>
              <h4 className="feature-item-title">Practical Instructions & Protocols</h4>
              <p className="feature-item-desc">
                Authentic laboratory aims, apparatus inventories, step-by-step procedures, and safety precautions.
              </p>
            </div>

            <div className="feature-item-card">
              <div className="feature-icon-badge">⚡</div>
              <h4 className="feature-item-title">Interactive Visual Solvers</h4>
              <p className="feature-item-desc">
                Live SVG vector rendering and numerical readouts with instant feedback as parameters are dialed.
              </p>
            </div>

            <div className="feature-item-card">
              <div className="feature-icon-badge">📊</div>
              <h4 className="feature-item-title">Observation Data & Results</h4>
              <p className="feature-item-desc">
                Pre-calculated reference tables, trend analyses, and interpretations linking empirical readings to scientific laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (The 5-Step Learning Journey) */}
      <section className="section journey-section">
        <div className="container">
          <div className="section-header">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Learning Journey</span>
            </div>
            <h2 className="section-title">How Learning Works in Visual Labs</h2>
            <p className="section-intro">
              From academic curriculum discovery to hands-on parametric experimentation in five focused steps:
            </p>
          </div>

          <div className="journey-steps-grid">
            <div className="journey-step-card">
              <span className="step-badge">STEP 1</span>
              <h4 className="step-title">Select Your Class</h4>
              <p className="step-desc">
                Choose your academic standard. Class 11 is currently active with core NCERT curriculum alignment.
              </p>
              <Link to="/classes" className="step-link">
                View Classes →
              </Link>
            </div>

            <div className="journey-step-card">
              <span className="step-badge">STEP 2</span>
              <h4 className="step-title">Choose a Subject</h4>
              <p className="step-desc">
                Select between Physics (Motion in a Plane), Chemistry (Mole Concept), and Biology (Plant Kingdom).
              </p>
              <Link to="/classes/11" className="step-link">
                View Subjects →
              </Link>
            </div>

            <div className="journey-step-card">
              <span className="step-badge">STEP 3</span>
              <h4 className="step-title">Explore Experiments</h4>
              <p className="step-desc">
                Browse core NCERT and extension laboratory modules equipped with mathematical solvers.
              </p>
              <Link to="/classes/11/physics" className="step-link">
                Browse Labs →
              </Link>
            </div>

            <div className="journey-step-card">
              <span className="step-badge">STEP 4</span>
              <h4 className="step-title">Study Theory & Protocol</h4>
              <p className="step-desc">
                Master the fundamental formulas, apparatus setups, and procedural guidelines before running simulations.
              </p>
              <span className="step-status">Guided Curriculum</span>
            </div>

            <div className="journey-step-card">
              <span className="step-badge">STEP 5</span>
              <h4 className="step-title">Simulate & Analyze</h4>
              <p className="step-desc">
                Adjust variables, verify numerical readouts, and compare live simulation observations with theoretical laws.
              </p>
              <span className="step-status">Live Interactive</span>
            </div>
          </div>

          {/* Prominent Journey Action Banner */}
          <div className="journey-cta-banner">
            <div className="journey-cta-content">
              <h3 className="journey-cta-headline">Ready to Begin Your Virtual Investigation?</h3>
              <p className="journey-cta-subtext">
                Explore Class 11 Physics, Chemistry, and Biology laboratories directly in your web browser.
              </p>
            </div>
            <Link to="/classes" className="btn btn-primary btn-cta">
              Enter Class Selection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
