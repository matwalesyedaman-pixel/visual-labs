import { useState } from 'react'

export default function TitrationSimulation() {
  const [titrantVolume, setTitrantVolume] = useState(25.0) // mL of 0.1M NaOH added to 25.0mL 0.1M HCl

  // Mathematically exact chemical equilibrium calculation
  // Analyte: 25.0 mL (0.025 L) of 0.100 M HCl = 2.50e-3 mol H+
  const molesH0 = 0.025 * 0.1
  // Titrant: titrantVolume mL of 0.100 M NaOH
  const molesOH = (titrantVolume / 1000) * 0.1
  const totalVolumeL = (25.0 + titrantVolume) / 1000
  const delta = (molesH0 - molesOH) / totalVolumeL // net excess concentration [H+] - [OH-]

  // Exact quadratic root of [H+]^2 - delta*[H+] - Kw = 0 (Kw = 1.0e-14 at 25°C)
  const kw = 1.0e-14
  const concH = (delta + Math.sqrt(delta * delta + 4 * kw)) / 2
  const calculatedPh = (-Math.log10(concH)).toFixed(2)

  // Universal indicator color based on exact pH range
  const phNum = parseFloat(calculatedPh)
  let indicatorColor = '#3e7356' // neutral green
  let stateDescription = 'Equivalence Point (Neutral)'

  if (phNum < 3.0) {
    indicatorColor = '#a85437' // acidic terracotta red
    stateDescription = 'Strongly Acidic (Excess HCl)'
  } else if (phNum < 6.0) {
    indicatorColor = '#c27632' // moderately acidic amber
    stateDescription = 'Weakly Acidic (Approaching Endpoint)'
  } else if (phNum <= 8.0) {
    indicatorColor = '#3e7356' // equivalence neutral green
    stateDescription = 'Equivalence Point (Neutral NaCl)'
  } else if (phNum <= 11.0) {
    indicatorColor = '#2c5d88' // weakly basic blue
    stateDescription = 'Weakly Basic (Excess NaOH)'
  } else {
    indicatorColor = '#583b78' // strongly basic violet
    stateDescription = 'Strongly Alkaline (High [OH⁻])'
  }

  return (
    <div className="simulation-showcase-card">
      <div className="sim-details-pane">
        <div className="sim-meta">
          <span className="sim-badge">CHEMISTRY WORKBENCH • ANALYTICAL EQUILIBRIA</span>
          <span className="sim-model-id">SOLVER / CHM-204</span>
        </div>

        <h3 className="sim-title">Strong Acid & Strong Base Neutralization Equilibria</h3>
        <p className="sim-summary">
          Titrate 25.0 mL of standardized 0.10 M Hydrochloric Acid (HCl) with 0.10 M Sodium Hydroxide (NaOH). Observe the rapid inflection point around 25.0 mL where stoichiometric equivalence ([H⁺] = [OH⁻]) triggers a sharp pH transition.
        </p>

        <div className="sim-controls-panel">
          <div className="control-group">
            <div className="control-header">
              <label htmlFor="titrant-vol">Titrant Volume Added (0.10 M NaOH)</label>
              <span className="control-readout">{titrantVolume.toFixed(1)} mL</span>
            </div>
            <input
              id="titrant-vol"
              type="range"
              min="0"
              max="50"
              step="0.1"
              value={titrantVolume}
              onChange={(e) => setTitrantVolume(parseFloat(e.target.value))}
              className="editorial-slider"
            />
            <div className="slider-ticks">
              <span>0.0 mL (Pure Acid)</span>
              <span>25.0 mL (Equivalence)</span>
              <span>50.0 mL (Excess Base)</span>
            </div>
          </div>

          <div className="control-group">
            <label className="control-sublabel">Direct Volume Presets</label>
            <div className="gravity-preset-buttons">
              <button
                type="button"
                className={`preset-btn ${titrantVolume === 0 ? 'selected' : ''}`}
                onClick={() => setTitrantVolume(0.0)}
              >
                0.0 mL (Start)
              </button>
              <button
                type="button"
                className={`preset-btn ${titrantVolume === 20.0 ? 'selected' : ''}`}
                onClick={() => setTitrantVolume(20.0)}
              >
                20.0 mL
              </button>
              <button
                type="button"
                className={`preset-btn ${titrantVolume === 25.0 ? 'selected' : ''}`}
                onClick={() => setTitrantVolume(25.0)}
              >
                25.0 mL (Equivalence)
              </button>
              <button
                type="button"
                className={`preset-btn ${titrantVolume === 30.0 ? 'selected' : ''}`}
                onClick={() => setTitrantVolume(30.0)}
              >
                30.0 mL
              </button>
            </div>
          </div>
        </div>

        <div className="sim-readouts-grid">
          <div className="readout-box">
            <span className="readout-title">Solution pH</span>
            <span className="readout-stat" style={{ color: indicatorColor }}>
              {calculatedPh}
            </span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Equilibrium State</span>
            <span className="readout-stat" style={{ fontSize: '0.92rem' }}>
              {stateDescription}
            </span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Total Solution Vol</span>
            <span className="readout-stat">{(25.0 + titrantVolume).toFixed(1)} mL</span>
          </div>
        </div>
      </div>

      <div className="sim-viewport-pane">
        <div className="viewport-header">
          <span className="viewport-caption">VOLUMETRIC APPARATUS & ELECTRODE CELL</span>
          <span className="viewport-status">ANALYTICAL SOLVER</span>
        </div>

        <div className="viewport-canvas-wrapper titration-canvas">
          <svg viewBox="0 0 400 320" className="interactive-sim-svg" aria-label="Chemical titration apparatus simulation">
            <rect width="100%" height="100%" fill="#faf8f3" />

            {/* Retort stand */}
            <rect x="70" y="20" width="8" height="270" fill="#ded7c8" />
            <rect x="40" y="285" width="120" height="12" fill="#232724" rx="2" />
            <rect x="70" y="80" width="70" height="6" fill="#7d8780" />

            {/* Glass Burette Tube */}
            <rect x="135" y="30" width="22" height="140" fill="rgba(255,255,255,0.7)" stroke="#232724" strokeWidth="1.5" />

            {/* Liquid level inside burette (drops as volume is dispensed) */}
            <rect
              x="136"
              y={31 + (titrantVolume / 50) * 115}
              width="20"
              height={Math.max(2, 139 - (titrantVolume / 50) * 115)}
              fill="rgba(43, 77, 117, 0.22)"
            />

            {/* Burette graduations */}
            <line x1="148" y1="50" x2="156" y2="50" stroke="#7d8780" strokeWidth="1" />
            <line x1="148" y1="80" x2="156" y2="80" stroke="#7d8780" strokeWidth="1" />
            <line x1="148" y1="110" x2="156" y2="110" stroke="#7d8780" strokeWidth="1" />
            <line x1="148" y1="140" x2="156" y2="140" stroke="#7d8780" strokeWidth="1" />

            {/* Stopcock */}
            <polygon points="146,170 142,185 150,185" fill="#232724" />
            <circle cx="146" cy="177" r="4" fill="#a85437" />
            <line x1="146" y1="185" x2="146" y2="198" stroke="#232724" strokeWidth="1.5" />

            {/* Dispensed droplet */}
            <circle cx="146" cy="208" r="2.5" fill="#2b4d75" opacity="0.65" />

            {/* Conical Flask */}
            <polygon
              points="130,225 162,225 195,280 97,280"
              fill="rgba(255,255,255,0.85)"
              stroke="#232724"
              strokeWidth="1.8"
            />

            {/* Analyte liquid in flask with indicator color */}
            <polygon
              points="118,245 174,245 193,278 99,278"
              fill={indicatorColor}
              opacity="0.45"
            />

            {/* Digital pH Electrode Card */}
            <g transform="translate(230, 60)">
              <rect width="140" height="175" rx="4" fill="#ffffff" stroke="#ded7c8" strokeWidth="1.5" />
              <text x="16" y="26" fontSize="10" fontFamily="var(--font-mono)" fill="#7d8780">
                pH ELECTRODE
              </text>
              <text x="16" y="68" fontSize="36" fontFamily="var(--font-serif)" fill={indicatorColor} fontWeight="600">
                {calculatedPh}
              </text>
              <line x1="16" y1="84" x2="124" y2="84" stroke="#eae4d8" strokeWidth="1" />
              <text x="16" y="104" fontSize="10" fontFamily="var(--font-sans)" fill="#575e58">
                Indicator: Universal
              </text>
              <text x="16" y="124" fontSize="10" fontFamily="var(--font-sans)" fill="#575e58">
                Analyte: 25mL 0.1M HCl
              </text>
              <text x="16" y="144" fontSize="10" fontFamily="var(--font-sans)" fill="#575e58">
                Titrant: 0.1M NaOH
              </text>
            </g>
          </svg>
        </div>

        <div className="viewport-footer">
          <span className="equation-annotation">
            Equilibrium: <code>H⁺ + OH⁻ ⇌ H₂O • Kw = 1.0 × 10⁻¹⁴ • [H⁺] = (Δ + √(Δ² + 4Kw))/2</code>
          </span>
        </div>
      </div>
    </div>
  )
}
