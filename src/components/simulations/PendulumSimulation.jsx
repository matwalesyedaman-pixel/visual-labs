import { useState } from 'react'

export default function PendulumSimulation() {
  const [pendulumLength, setPendulumLength] = useState(1.8) // meters (0.5 to 3.0)
  const [gravity, setGravity] = useState(9.81) // m/s^2 (Earth: 9.81, Moon: 1.62, Mars: 3.72)
  const [pendulumAngle, setPendulumAngle] = useState(25) // degrees (5 to 45)

  // Mathematically accurate physical calculations
  const thetaRad = (pendulumAngle * Math.PI) / 180

  // Small-angle period T0 = 2*pi*sqrt(L/g)
  const t0 = 2 * Math.PI * Math.sqrt(pendulumLength / gravity)

  // First-order finite amplitude correction: T ≈ T0 * (1 + (1/16)*theta^2)
  const tCorrected = t0 * (1 + (1 / 16) * Math.pow(thetaRad, 2))
  const frequency = 1 / tCorrected

  // Tangential restoring acceleration at maximum displacement: a_t = g * sin(theta)
  const restoringAccel = gravity * Math.sin(thetaRad)

  // Geometrical vector computation for the SVG diagram
  const pivotX = 200
  const pivotY = 30
  const lengthPx = 60 + pendulumLength * 55 // visual scale
  const bobX = pivotX + lengthPx * Math.sin(thetaRad)
  const bobY = pivotY + lengthPx * Math.cos(thetaRad)

  // Tangential restoring vector (directed along circular arc towards equilibrium)
  const vectorScale = 40
  const restoringVecX = bobX - vectorScale * Math.cos(thetaRad)
  const restoringVecY = bobY + vectorScale * Math.sin(thetaRad)

  return (
    <div className="simulation-showcase-card">
      <div className="sim-details-pane">
        <div className="sim-meta">
          <span className="sim-badge">PHYSICS WORKBENCH • CLASSICAL MECHANICS</span>
          <span className="sim-model-id">SOLVER / PHY-102</span>
        </div>

        <h3 className="sim-title">Simple Harmonic Motion & Gravitational Dynamics</h3>
        <p className="sim-summary">
          Investigate how string length ($L$), initial angular deflection ($\theta$), and local gravitational field ($g$) govern the period of an ideal pendulum. Compare finite-amplitude period corrections against the standard small-angle approximation.
        </p>

        <div className="sim-controls-panel">
          <div className="control-group">
            <div className="control-header">
              <label htmlFor="pendulum-len">Pendulum Length ($L$)</label>
              <span className="control-readout">{pendulumLength.toFixed(1)} m</span>
            </div>
            <input
              id="pendulum-len"
              type="range"
              min="0.5"
              max="3.0"
              step="0.1"
              value={pendulumLength}
              onChange={(e) => setPendulumLength(parseFloat(e.target.value))}
              className="editorial-slider"
            />
            <div className="slider-ticks">
              <span>0.5 m</span>
              <span>1.8 m</span>
              <span>3.0 m</span>
            </div>
          </div>

          <div className="control-group">
            <div className="control-header">
              <label htmlFor="pendulum-angle">Initial Deflection Angle ($\theta$)</label>
              <span className="control-readout">{pendulumAngle}°</span>
            </div>
            <input
              id="pendulum-angle"
              type="range"
              min="5"
              max="45"
              step="1"
              value={pendulumAngle}
              onChange={(e) => setPendulumAngle(parseInt(e.target.value, 10))}
              className="editorial-slider"
            />
            <div className="slider-ticks">
              <span>5° (Harmonic)</span>
              <span>25°</span>
              <span>45° (Non-linear)</span>
            </div>
          </div>

          <div className="control-group">
            <label className="control-sublabel">Gravitational Environment ($g$)</label>
            <div className="gravity-preset-buttons">
              <button
                type="button"
                className={`preset-btn ${gravity === 9.81 ? 'selected' : ''}`}
                onClick={() => setGravity(9.81)}
              >
                Earth (9.81 m/s²)
              </button>
              <button
                type="button"
                className={`preset-btn ${gravity === 1.62 ? 'selected' : ''}`}
                onClick={() => setGravity(1.62)}
              >
                Moon (1.62 m/s²)
              </button>
              <button
                type="button"
                className={`preset-btn ${gravity === 3.72 ? 'selected' : ''}`}
                onClick={() => setGravity(3.72)}
              >
                Mars (3.72 m/s²)
              </button>
            </div>
          </div>
        </div>

        <div className="sim-readouts-grid">
          <div className="readout-box">
            <span className="readout-title">Oscillation Period ($T$)</span>
            <span className="readout-stat">{tCorrected.toFixed(2)} s</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Natural Frequency ($f$)</span>
            <span className="readout-stat">{frequency.toFixed(2)} Hz</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Restoring Accel ($a_t$)</span>
            <span className="readout-stat">{restoringAccel.toFixed(2)} m/s²</span>
          </div>
        </div>
      </div>

      <div className="sim-viewport-pane">
        <div className="viewport-header">
          <span className="viewport-caption">FREE-BODY & TRAJECTORY SCHEMATIC</span>
          <span className="viewport-status">NUMERICAL SOLVER</span>
        </div>

        <div className="viewport-canvas-wrapper">
          <svg viewBox="0 0 400 320" className="interactive-sim-svg" aria-label="Pendulum physical simulation diagram">
            <rect width="100%" height="100%" fill="#faf8f3" />

            {/* Ceiling support structure */}
            <line x1="50" y1="30" x2="350" y2="30" stroke="#232724" strokeWidth="3" />
            <line x1="200" y1="30" x2="200" y2="295" stroke="#ded7c8" strokeWidth="1" strokeDasharray="4 4" />

            {/* Trajectory circular arc */}
            <path
              d={`M ${pivotX - lengthPx * Math.sin(thetaRad)} ${bobY} Q ${pivotX} ${bobY + 12} ${bobX} ${bobY}`}
              fill="none"
              stroke="#ded7c8"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />

            {/* String rod */}
            <line x1={pivotX} y1={pivotY} x2={bobX} y2={bobY} stroke="#1b3a2b" strokeWidth="2.5" />
            <circle cx={pivotX} cy={pivotY} r="4.5" fill="#1b3a2b" />

            {/* Bob mass */}
            <circle cx={bobX} cy={bobY} r="18" fill="#ffffff" stroke="#1b3a2b" strokeWidth="2.5" />
            <circle cx={bobX} cy={bobY} r="4" fill="#a85437" />

            {/* Tangential Restoring Force Vector */}
            <line
              x1={bobX}
              y1={bobY}
              x2={restoringVecX}
              y2={restoringVecY}
              stroke="#a85437"
              strokeWidth="2"
            />
            <polygon
              points={`${restoringVecX},${restoringVecY} ${restoringVecX + 6},${restoringVecY + 4} ${restoringVecX + 3},${restoringVecY + 8}`}
              fill="#a85437"
            />
            <text
              x={restoringVecX - 10}
              y={restoringVecY - 6}
              fontSize="11"
              fontFamily="var(--font-mono)"
              fill="#a85437"
              fontWeight="600"
            >
              F_t
            </text>

            {/* Gravity vector (downward) */}
            <line
              x1={bobX}
              y1={bobY}
              x2={bobX}
              y2={bobY + 36}
              stroke="#7d8780"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <text
              x={bobX + 6}
              y={bobY + 36}
              fontSize="10"
              fontFamily="var(--font-mono)"
              fill="#7d8780"
            >
              F_g
            </text>

            {/* Angle annotation */}
            <text x="210" y="65" fontSize="11" fontFamily="var(--font-mono)" fill="#575e58">
              θ = {pendulumAngle}°
            </text>
          </svg>
        </div>

        <div className="viewport-footer">
          <span className="equation-annotation">
            Model: <code>T = 2π√(L/g) [1 + (1/16)θ²]</code> • Small-angle $T_0$ = {t0.toFixed(2)} s
          </span>
        </div>
      </div>
    </div>
  )
}
