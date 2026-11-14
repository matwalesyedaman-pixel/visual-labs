import { useState } from 'react'

export default function EnzymeSimulation() {
  const [substrateConc, setSubstrateConc] = useState(4.5) // mM (0 to 20 mM)
  const vMax = 120.0 // umol / min
  const km = 3.0 // mM (Michaelis constant)

  // Mathematically exact Michaelis-Menten enzyme catalysis calculation
  // V = (V_max * [S]) / (K_m + [S])
  const velocity = (vMax * substrateConc) / (km + substrateConc)
  const saturationPercent = ((substrateConc / (km + substrateConc)) * 100).toFixed(1)

  // Kinetic regime determination
  let kineticRegime = 'Mixed-Order Transition'
  if (substrateConc < 0.2 * km) {
    kineticRegime = 'First-Order (Rate ∝ [S])'
  } else if (substrateConc > 5.0 * km) {
    kineticRegime = 'Zero-Order (Enzyme Saturated)'
  }

  // Exact SVG curve coordinates
  // Origin at (60, 270), X max (20 mM) at 360, Y max (120 umol/min) at 70
  const originX = 60
  const originY = 270
  const widthPx = 300
  const heightPx = 200

  // Generate smooth SVG curve path from exact formula
  const curvePoints = []
  for (let s = 0; s <= 20; s += 0.5) {
    const v = (vMax * s) / (km + s)
    const px = originX + (s / 20) * widthPx
    const py = originY - (v / vMax) * heightPx
    curvePoints.push(`${px.toFixed(1)},${py.toFixed(1)}`)
  }
  const curvePathD = `M ${originX} ${originY} L ` + curvePoints.join(' L ')

  // Dynamic operating point position
  const activePointX = originX + (substrateConc / 20) * widthPx
  const activePointY = originY - (velocity / vMax) * heightPx

  // Km position (3.0 mM, half V_max = 60)
  const kmX = originX + (km / 20) * widthPx
  const halfVmaxY = originY - 0.5 * heightPx

  return (
    <div className="simulation-showcase-card">
      <div className="sim-details-pane">
        <div className="sim-meta">
          <span className="sim-badge">BIOLOGY WORKBENCH • BIOCHEMICAL KINETICS</span>
          <span className="sim-model-id">SOLVER / BIO-301</span>
        </div>

        <h3 className="sim-title">Enzymatic Catalysis & Michaelis-Menten Kinetics</h3>
        <p className="sim-summary">
          Investigate how substrate concentration ([S]) dictates catalytic reaction rate (V). Observe the transition from first-order linear kinetics at low [S] to asymptotic enzyme active-site saturation (V_max) at high [S].
        </p>

        <div className="sim-controls-panel">
          <div className="control-group">
            <div className="control-header">
              <label htmlFor="substrate-slider">Substrate Concentration ($[S]$)</label>
              <span className="control-readout">{substrateConc.toFixed(1)} mM</span>
            </div>
            <input
              id="substrate-slider"
              type="range"
              min="0"
              max="20"
              step="0.2"
              value={substrateConc}
              onChange={(e) => setSubstrateConc(parseFloat(e.target.value))}
              className="editorial-slider"
            />
            <div className="slider-ticks">
              <span>0 mM (Zero Rate)</span>
              <span>3.0 mM (Km)</span>
              <span>20 mM (Near V_max)</span>
            </div>
          </div>

          <div className="control-group">
            <label className="control-sublabel">Concentration Presets</label>
            <div className="gravity-preset-buttons">
              <button
                type="button"
                className={`preset-btn ${substrateConc === 0.5 ? 'selected' : ''}`}
                onClick={() => setSubstrateConc(0.5)}
              >
                0.5 mM (First-Order)
              </button>
              <button
                type="button"
                className={`preset-btn ${substrateConc === 3.0 ? 'selected' : ''}`}
                onClick={() => setSubstrateConc(3.0)}
              >
                3.0 mM (Half V_max)
              </button>
              <button
                type="button"
                className={`preset-btn ${substrateConc === 15.0 ? 'selected' : ''}`}
                onClick={() => setSubstrateConc(15.0)}
              >
                15.0 mM (Saturation)
              </button>
            </div>
          </div>
        </div>

        <div className="sim-readouts-grid">
          <div className="readout-box">
            <span className="readout-title">Reaction Rate ($V$)</span>
            <span className="readout-stat">{velocity.toFixed(1)} µmol/min</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Active Site Saturation</span>
            <span className="readout-stat">{saturationPercent}%</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Kinetic Regime</span>
            <span className="readout-stat" style={{ fontSize: '0.85rem' }}>
              {kineticRegime}
            </span>
          </div>
        </div>
      </div>

      <div className="sim-viewport-pane">
        <div className="viewport-header">
          <span className="viewport-caption">REACTION VELOCITY HYPERBOLA</span>
          <span className="viewport-status">KINETIC SOLVER</span>
        </div>

        <div className="viewport-canvas-wrapper">
          <svg viewBox="0 0 400 320" className="interactive-sim-svg" aria-label="Enzyme Michaelis-Menten velocity plot">
            <rect width="100%" height="100%" fill="#faf8f3" />

            {/* Axes */}
            <line x1={originX} y1={originY} x2="380" y2={originY} stroke="#232724" strokeWidth="1.5" />
            <line x1={originX} y1={originY} x2={originX} y2="40" stroke="#232724" strokeWidth="1.5" />
            <text x="320" y="295" fontSize="10" fontFamily="var(--font-mono)" fill="#575e58">
              [S] (mM)
            </text>
            <text x="16" y="50" fontSize="10" fontFamily="var(--font-mono)" fill="#575e58">
              V (µmol/min)
            </text>

            {/* V_max Asymptote Line */}
            <line x1={originX} y1="70" x2="380" y2="70" stroke="#7d8780" strokeWidth="1" strokeDasharray="3 3" />
            <text x="70" y="64" fontSize="10" fontFamily="var(--font-mono)" fill="#7d8780">
              V_max Asymptote (120 µmol/min)
            </text>

            {/* Half V_max dashed line */}
            <line x1={originX} y1={halfVmaxY} x2={kmX} y2={halfVmaxY} stroke="#c08832" strokeWidth="1" strokeDasharray="2 2" />
            <line x1={kmX} y1={halfVmaxY} x2={kmX} y2={originY} stroke="#c08832" strokeWidth="1" strokeDasharray="2 2" />
            <text x={kmX - 6} y="286" fontSize="10" fontFamily="var(--font-mono)" fill="#c08832">
              Km
            </text>

            {/* Exact Michaelis-Menten Hyperbolic Curve */}
            <path d={curvePathD} fill="none" stroke="#496b56" strokeWidth="2.75" />

            {/* Active operating point indicator */}
            <line
              x1={originX}
              y1={activePointY}
              x2={activePointX}
              y2={activePointY}
              stroke="#a85437"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <line
              x1={activePointX}
              y1={activePointY}
              x2={activePointX}
              y2={originY}
              stroke="#a85437"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle cx={activePointX} cy={activePointY} r="5" fill="#a85437" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="viewport-footer">
          <span className="equation-annotation">
            Equation: <code>V = (V_max × [S]) / (K_m + [S])</code> • Km = 3.0 mM, V_max = 120 µmol/min
          </span>
        </div>
      </div>
    </div>
  )
}
