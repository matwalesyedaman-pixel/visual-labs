import { useState } from 'react'
import ParameterSlider from '../common/ParameterSlider'

export default function ProjectileSimulation() {
  const [velocity, setVelocity] = useState(25) // m/s (10 to 50)
  const [angle, setAngle] = useState(45) // degrees (15 to 75)
  const g = 9.8 // m/s^2 (standard Earth gravity per NCERT)

  // Trigonometric conversion
  const angleRad = (angle * Math.PI) / 180
  const v0x = velocity * Math.cos(angleRad)
  const v0y = velocity * Math.sin(angleRad)

  // Kinematic calculations (NCERT Class 11 Chapter 4)
  // Time of flight: T = 2 * v0y / g
  const timeOfFlight = (2 * v0y) / g
  // Maximum height: H = (v0y^2) / (2 * g)
  const maxHeight = Math.pow(v0y, 2) / (2 * g)
  // Horizontal range: R = (v0^2 * sin(2*theta)) / g
  const horizontalRange = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / g

  // SVG canvas scaling
  // Viewbox: 400 wide x 300 high
  // Origin at (40, 260)
  const originX = 40
  const originY = 260
  const plotWidth = 330
  const plotHeight = 220

  // Max reference range for scale: v=50, theta=45 gives R_max = 50^2/9.8 ≈ 255m
  const scaleX = plotWidth / 260
  // Max height: v=50, theta=75 gives H_max ≈ 118m
  const scaleY = plotHeight / 130

  // Generate trajectory points for SVG polyline
  const points = []
  const steps = 50
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * timeOfFlight
    const x = v0x * t
    const y = v0y * t - 0.5 * g * Math.pow(t, 2)
    const px = originX + x * scaleX
    const py = originY - y * scaleY
    points.push(`${px.toFixed(1)},${py.toFixed(1)}`)
  }
  const trajectoryD = `M ${originX} ${originY} L ` + points.join(' L ')

  // Coordinates of apex (max height)
  const apexX = originX + (horizontalRange / 2) * scaleX
  const apexY = originY - maxHeight * scaleY

  // Coordinates of landing point
  const landingX = originX + horizontalRange * scaleX

  // Vector arrow coordinates at launch
  const vectorLength = 45
  const vecHeadX = originX + vectorLength * Math.cos(angleRad)
  const vecHeadY = originY - vectorLength * Math.sin(angleRad)
  const vxHeadX = originX + vectorLength * Math.cos(angleRad)
  const vyHeadY = originY - vectorLength * Math.sin(angleRad)

  return (
    <div className="simulation-showcase-card">
      <div className="sim-details-pane">
        <div className="sim-meta">
          <span className="sim-badge">PHYSICS • CLASS 11 NCERT CHAPTER 4</span>
          <span className="sim-model-id">MOTION IN A PLANE</span>
        </div>

        <h3 className="sim-title">Projectile Motion & 2D Kinematics</h3>
        <p className="sim-summary">
          A projectile launched with initial velocity (v₀) at an angle (θ) executes parabolic motion under constant downward gravitational acceleration (g = 9.8 m/s²). The horizontal motion proceeds at constant velocity while the vertical motion experiences constant deceleration.
        </p>

        <div className="sim-controls-panel">
          <ParameterSlider
            id="proj-velocity"
            label="Initial Velocity (v₀)"
            value={velocity}
            min={10}
            max={50}
            step={1}
            unit="m/s"
            ticks={['10 m/s', '25 m/s', '50 m/s']}
            onChange={setVelocity}
          />

          <ParameterSlider
            id="proj-angle"
            label="Launch Angle (θ)"
            value={angle}
            min={15}
            max={75}
            step={1}
            unit="°"
            ticks={['15°', '45° (Max Range)', '75°']}
            onChange={setAngle}
          />

          <div className="control-group">
            <label className="control-sublabel">Classical NCERT Launch Presets</label>
            <div className="preset-button-group">
              <button
                type="button"
                className={`preset-btn ${angle === 30 ? 'selected' : ''}`}
                onClick={() => setAngle(30)}
              >
                30° (Comp. 60°)
              </button>
              <button
                type="button"
                className={`preset-btn ${angle === 45 ? 'selected' : ''}`}
                onClick={() => setAngle(45)}
              >
                45° (Max Range)
              </button>
              <button
                type="button"
                className={`preset-btn ${angle === 60 ? 'selected' : ''}`}
                onClick={() => setAngle(60)}
              >
                60° (High Arc)
              </button>
            </div>
          </div>
        </div>

        <div className="sim-readouts-grid" aria-live="polite" aria-atomic="true">
          <div className="readout-box">
            <span className="readout-title">Horizontal Range (R)</span>
            <span className="readout-stat">{horizontalRange.toFixed(1)} m</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Maximum Height (H)</span>
            <span className="readout-stat">{maxHeight.toFixed(1)} m</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Time of Flight (T)</span>
            <span className="readout-stat">{timeOfFlight.toFixed(2)} s</span>
          </div>
        </div>
      </div>

      <div className="sim-viewport-pane">
        <div className="viewport-header">
          <span className="viewport-caption">PARABOLIC TRAJECTORY & VECTOR DECOMPOSITION</span>
          <span className="viewport-status">ANALYTIC SOLVER</span>
        </div>

        <div className="viewport-canvas-wrapper">
          <svg viewBox="0 0 400 300" className="interactive-sim-svg" aria-label="Parabolic projectile trajectory diagram">
            <rect width="100%" height="100%" fill="var(--bg-warm-ivory)" />

            {/* Measurement Grid */}
            <defs>
              <pattern id="proj-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(35, 39, 36, 0.04)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#proj-grid)" />

            {/* Ground line */}
            <line x1="20" y1={originY} x2="380" y2={originY} stroke="var(--color-charcoal)" strokeWidth="2" />
            <line x1={originX} y1="30" x2={originX} y2={originY} stroke="var(--color-charcoal-subtle)" strokeWidth="1" strokeDasharray="3 3" />

            {/* Parabolic Trajectory Path */}
            <path d={trajectoryD} fill="none" stroke="var(--color-forest)" strokeWidth="2.5" />

            {/* Launch vector v0 */}
            <line x1={originX} y1={originY} x2={vecHeadX} y2={vecHeadY} stroke="var(--color-terracotta)" strokeWidth="2" />
            <polygon
              points={`${vecHeadX},${vecHeadY} ${vecHeadX - 6 * Math.cos(angleRad - 0.4)},${vecHeadY + 6 * Math.sin(angleRad - 0.4)} ${vecHeadX - 6 * Math.cos(angleRad + 0.4)},${vecHeadY + 6 * Math.sin(angleRad + 0.4)}`}
              fill="var(--color-terracotta)"
            />
            <text x={vecHeadX + 4} y={vecHeadY - 4} fontSize="11" fontFamily="var(--font-mono)" fill="var(--color-terracotta)" fontWeight="600">
              v₀
            </text>

            {/* Component vectors (v0x and v0y) */}
            <line x1={originX} y1={originY} x2={vxHeadX} y2={originY} stroke="var(--color-sage)" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x={vxHeadX - 10} y={originY + 14} fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-sage)">
              v₀ₓ={v0x.toFixed(1)}
            </text>

            <line x1={originX} y1={originY} x2={originX} y2={vyHeadY} stroke="var(--color-sage)" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x={originX - 35} y={vyHeadY + 10} fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-sage)">
              v₀y={v0y.toFixed(1)}
            </text>

            {/* Apex (H_max) marker */}
            <line x1={originX} y1={apexY} x2={apexX} y2={apexY} stroke="var(--color-amber)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1={apexX} y1={apexY} x2={apexX} y2={originY} stroke="var(--color-amber)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={apexX} cy={apexY} r="4" fill="var(--color-amber)" />
            <text x={apexX - 15} y={apexY - 8} fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-amber)">
              H={maxHeight.toFixed(1)}m
            </text>

            {/* Landing marker (Range R) */}
            <circle cx={landingX} cy={originY} r="4" fill="var(--color-forest)" />
            <text x={landingX - 15} y={originY + 16} fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-forest)" fontWeight="600">
              R={horizontalRange.toFixed(1)}m
            </text>

            {/* Launch Origin point */}
            <circle cx={originX} cy={originY} r="4" fill="var(--color-charcoal)" />
          </svg>
        </div>

        <div className="viewport-footer">
          <span className="equation-annotation">
            Trajectory: <code>y = x tan(θ) - [g x² / (2 v₀² cos²(θ))]</code> • Range: <code>R = (v₀² sin 2θ) / g</code>
          </span>
        </div>
      </div>
    </div>
  )
}
