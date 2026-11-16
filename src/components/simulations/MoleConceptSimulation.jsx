import { useState } from 'react'

const SUBSTANCES = [
  {
    id: 'carbon',
    name: 'Carbon-12 (¹²C)',
    formula: 'C',
    type: 'Element (Atoms)',
    molarMass: 12.011,
    unitName: 'carbon atoms',
    isGas: false,
    description: 'The standard reference for atomic mass unit (1 u = 1/12th mass of a ¹²C atom).',
  },
  {
    id: 'water',
    name: 'Water (H₂O)',
    formula: 'H₂O',
    type: 'Molecular Compound',
    molarMass: 18.015,
    unitName: 'H₂O molecules',
    isGas: false,
    description: '1 mole contains 6.022 × 10²³ water molecules (2 × NA H atoms and 1 × NA O atoms).',
  },
  {
    id: 'nacl',
    name: 'Sodium Chloride (NaCl)',
    formula: 'NaCl',
    type: 'Ionic Solid',
    molarMass: 58.44,
    unitName: 'formula units',
    isGas: false,
    description: 'Ionic compounds form crystal lattices; the mole expresses formula units of Na⁺ and Cl⁻.',
  },
  {
    id: 'co2',
    name: 'Carbon Dioxide (CO₂)',
    formula: 'CO₂',
    type: 'Gas (Molar Volume)',
    molarMass: 44.01,
    unitName: 'CO₂ molecules',
    isGas: true,
    description: 'At STP (273.15 K, 1 bar), 1 mole of any ideal gas occupies 22.7 L (or 22.4 L at 1 atm).',
  },
  {
    id: 'glucose',
    name: 'Glucose (C₆H₁₂O₆)',
    formula: 'C₆H₁₂O₆',
    type: 'Molecular Solid',
    molarMass: 180.16,
    unitName: 'glucose molecules',
    isGas: false,
    description: '1 mole of glucose weighs 180.16 g and delivers 24 × NA total constituent atoms.',
  },
]

export default function MoleConceptSimulation() {
  const [selectedSubstanceId, setSelectedSubstanceId] = useState('water')
  const [moles, setMoles] = useState(1.0) // moles (0.1 to 5.0)

  const NA = 6.02214076e23 // Avogadro Constant (mol^-1)
  const substance = SUBSTANCES.find((s) => s.id === selectedSubstanceId) || SUBSTANCES[1]

  // NCERT Class 11 Chapter 1 calculations
  // Mass: m = n * M
  const totalMass = moles * substance.molarMass
  // Total particle count: N = n * NA (expressed in scientific exponent × 10²³)
  const particleMantissa = (moles * (NA / 1e23)).toFixed(3)
  // STP Volume for gas (NCERT standard 22.7 L/mol at 1 bar, 273.15 K)
  const stpVolume = (moles * 22.7).toFixed(1)

  return (
    <div className="simulation-showcase-card">
      <div className="sim-details-pane">
        <div className="sim-meta">
          <span className="sim-badge">CHEMISTRY • CLASS 11 NCERT CHAPTER 1</span>
          <span className="sim-model-id">SOME BASIC CONCEPTS OF CHEMISTRY</span>
        </div>

        <h3 className="sim-title">Mole Concept & Avogadro Constant (NA)</h3>
        <p className="sim-summary">
          One mole is the amount of substance containing exactly 6.022 × 10²³ elementary entities (atoms, molecules, or ions). This bridges the atomic micro-scale with the measurable macroscopic mass in grams via Molar Mass (M).
        </p>

        <div className="sim-controls-panel">
          <div className="control-group">
            <label className="control-sublabel">Select Substance</label>
            <div className="gravity-preset-buttons">
              {SUBSTANCES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`preset-btn ${selectedSubstanceId === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedSubstanceId(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <div className="control-header">
              <label htmlFor="mole-slider">Amount of Substance (n)</label>
              <span className="control-readout">{moles.toFixed(2)} mol</span>
            </div>
            <input
              id="mole-slider"
              type="range"
              min="0.1"
              max="5.0"
              step="0.1"
              value={moles}
              onChange={(e) => setMoles(parseFloat(e.target.value))}
              className="editorial-slider"
            />
            <div className="slider-ticks">
              <span>0.1 mol</span>
              <span>1.0 mol (Standard)</span>
              <span>5.0 mol</span>
            </div>
          </div>

          <div className="control-group">
            <label className="control-sublabel">Quick Stoichiometric Presets</label>
            <div className="gravity-preset-buttons">
              <button
                type="button"
                className={`preset-btn ${moles === 0.5 ? 'selected' : ''}`}
                onClick={() => setMoles(0.5)}
              >
                0.5 mol (Half Molar)
              </button>
              <button
                type="button"
                className={`preset-btn ${moles === 1.0 ? 'selected' : ''}`}
                onClick={() => setMoles(1.0)}
              >
                1.0 mol (Standard NA)
              </button>
              <button
                type="button"
                className={`preset-btn ${moles === 2.0 ? 'selected' : ''}`}
                onClick={() => setMoles(2.0)}
              >
                2.0 mol (Double Molar)
              </button>
            </div>
          </div>
        </div>

        <div className="sim-readouts-grid">
          <div className="readout-box">
            <span className="readout-title">Measured Mass (m = n × M)</span>
            <span className="readout-stat">{totalMass.toFixed(2)} g</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Molar Mass (M)</span>
            <span className="readout-stat">{substance.molarMass} g/mol</span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Entities (N = n × NA)</span>
            <span className="readout-stat">{particleMantissa} × 10²³</span>
          </div>
        </div>
      </div>

      <div className="sim-viewport-pane">
        <div className="viewport-header">
          <span className="viewport-caption">ANALYTICAL BALANCE & AVOGADRO QUANTIFICATION</span>
          <span className="viewport-status">STOICHIOMETRIC SOLVER</span>
        </div>

        <div className="viewport-canvas-wrapper">
          <svg viewBox="0 0 400 300" className="interactive-sim-svg" aria-label="Laboratory analytical balance for mole concept">
            <rect width="100%" height="100%" fill="#faf8f3" />

            {/* Laboratory Balance Base */}
            <rect x="60" y="240" width="280" height="24" rx="3" fill="#232724" />
            <rect x="80" y="264" width="30" height="8" rx="2" fill="#7d8780" />
            <rect x="290" y="264" width="30" height="8" rx="2" fill="#7d8780" />

            {/* Digital Readout Screen on Balance */}
            <rect x="130" y="244" width="140" height="16" rx="2" fill="#1b3a2b" />
            <text x="200" y="256" fontSize="11" fontFamily="var(--font-mono)" fill="#faf8f3" textAnchor="middle">
              {totalMass.toFixed(2)} g
            </text>

            {/* Central Weighing Pillar and Pan */}
            <rect x="194" y="165" width="12" height="75" fill="#ded7c8" />
            <rect x="110" y="160" width="180" height="8" rx="2" fill="#7d8780" />

            {/* Beaker / Container on Pan */}
            <polygon points="150,85 250,85 240,160 160,160" fill="rgba(255,255,255,0.75)" stroke="#232724" strokeWidth="1.8" />
            {/* Graduations */}
            <line x1="165" y1="105" x2="175" y2="105" stroke="#7d8780" strokeWidth="1" />
            <line x1="163" y1="125" x2="177" y2="125" stroke="#7d8780" strokeWidth="1" />
            <line x1="161" y1="145" x2="179" y2="145" stroke="#7d8780" strokeWidth="1" />

            {/* Substance Content in Beaker (Height scales with moles) */}
            {(() => {
              const fillHeight = 15 + Math.min(50, moles * 10)
              const topY = 160 - fillHeight
              return (
                <rect
                  x="165"
                  y={topY}
                  width="70"
                  height={fillHeight}
                  rx="2"
                  fill="var(--color-forest)"
                  opacity="0.35"
                />
              )
            })()}

            {/* Substance Label Tag */}
            <text x="200" y="130" fontSize="12" fontFamily="var(--font-serif)" fill="#1b3a2b" textAnchor="middle" fontWeight="600">
              {substance.formula}
            </text>

            {/* Floating Educational Callout Card */}
            <g transform="translate(30, 16)">
              <rect
                width="340"
                height={substance.isGas ? 66 : 52}
                rx="4"
                fill="#ffffff"
                stroke="#ded7c8"
                strokeWidth="1.2"
              />
              <text x="14" y="18" fontSize="9.5" fontFamily="var(--font-mono)" fill="#7d8780">
                STOICHIOMETRIC CONVERSION
              </text>
              <text x="14" y="36" fontSize="11" fontFamily="var(--font-sans)" fill="#232724" fontWeight="500">
                {moles.toFixed(2)} mol {substance.formula} = {particleMantissa} × 10²³ {substance.unitName}
              </text>
              {substance.isGas && (
                <text x="14" y="52" fontSize="9.5" fontFamily="var(--font-mono)" fill="#a85437">
                  Gas Volume at STP (273.15 K, 1 bar) = {stpVolume} L
                </text>
              )}
            </g>
          </svg>
        </div>

        <div className="viewport-footer">
          <span className="equation-annotation">
            Fundamental Relations: <code>n = m / M</code> • <code>N = n × NA</code> • <code>NA = 6.022 × 10²³ mol⁻¹</code>
          </span>
        </div>
      </div>
    </div>
  )
}
