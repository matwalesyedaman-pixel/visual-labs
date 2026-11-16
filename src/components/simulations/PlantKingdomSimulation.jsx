import { useState } from 'react'

const PLANT_DIVISIONS = [
  {
    id: 'algae',
    name: 'Algae (Thallophyta)',
    bodyType: 'Thalloid (Undifferentiated)',
    vascularTissue: 'Absent',
    dominantPhase: 'Gametophyte (Haploid, n)',
    seeds: 'Absent (Spore-forming Cryptogam)',
    waterForFertilization: 'Essential (Flagellated male gametes)',
    pigments: 'Chlorophyll a, b (Green); Fucoxanthin (Brown); r-Phycoerythrin (Red)',
    lifeCycle: 'Haplontic',
    ncertExamples: 'Chlamydomonas, Volvox, Ulothrix, Spirogyra, Fucus, Polysiphonia',
    summary:
      'Simple, autotrophic, largely aquatic organisms lacking true roots, stems, leaves, and vascular tissues. Divided into Chlorophyceae, Phaeophyceae, and Rhodophyceae based on major pigments and stored food.',
  },
  {
    id: 'bryophytes',
    name: 'Bryophytes (Mosses & Liverworts)',
    bodyType: 'Thalloid or Leafy (Rhizoids present)',
    vascularTissue: 'Absent',
    dominantPhase: 'Gametophyte (Haploid, n)',
    seeds: 'Absent (Spore-forming Cryptogam)',
    waterForFertilization: 'Essential (Antherozoids swim to Archegonium)',
    pigments: 'Chlorophyll a, b',
    lifeCycle: 'Haplo-diplontic',
    ncertExamples: 'Marchantia (Liverwort), Funaria, Sphagnum (Peat Moss)',
    summary:
      'Known as the "Amphibians of the Plant Kingdom" because they live on soil but require water for sexual reproduction. The free-living gametophyte supports a dependent sporophyte consisting of foot, seta, and capsule.',
  },
  {
    id: 'pteridophytes',
    name: 'Pteridophytes (Ferns & Horsetails)',
    bodyType: 'Differentiated (True Roots, Stems, Leaves)',
    vascularTissue: 'Present (Xylem with tracheids, Phloem)',
    dominantPhase: 'Sporophyte (Diploid, 2n)',
    seeds: 'Absent (Spore-forming Cryptogam)',
    waterForFertilization: 'Essential (Flagellated antherozoids)',
    pigments: 'Chlorophyll a, b',
    lifeCycle: 'Haplo-diplontic',
    ncertExamples: 'Selaginella, Equisetum, Dryopteris, Pteris, Adiantum',
    summary:
      'The first terrestrial plants to evolve vascular tissues (xylem and phloem). The main plant body is a diploid sporophyte possessing true roots and leaves. Gametophyte is a small, photosynthetic prothallus requiring moist conditions.',
  },
  {
    id: 'gymnosperms',
    name: 'Gymnosperms (Naked-Seeded Plants)',
    bodyType: 'Woody Trees & Shrubs (Needle-like leaves)',
    vascularTissue: 'Present (Xylem lacks true vessels)',
    dominantPhase: 'Sporophyte (Diploid, 2n)',
    seeds: 'Present (Naked ovules; No Ovary / No Fruit)',
    waterForFertilization: 'Not required (Wind pollination / Pollen tube)',
    pigments: 'Chlorophyll a, b',
    lifeCycle: 'Diplontic',
    ncertExamples: 'Pinus, Cycas, Ginkgo, Sequoia (Giant Redwood)',
    summary:
      'Plants in which the ovules are not enclosed by any ovary wall and remain exposed both before and after fertilization. Adapted to xerophytic conditions with sunken stomata, thick cuticles, and wind-borne pollen.',
  },
  {
    id: 'angiosperms',
    name: 'Angiosperms (Flowering Plants)',
    bodyType: 'Highly Differentiated (Flowers, Fruits, Seeds)',
    vascularTissue: 'Advanced (True Vessels in Xylem, Companion Cells in Phloem)',
    dominantPhase: 'Sporophyte (Diploid, 2n)',
    seeds: 'Present (Enclosed within Fruits)',
    waterForFertilization: 'Not required (Siphonogamy via pollen tube)',
    pigments: 'Chlorophyll a, b, Carotenoids',
    lifeCycle: 'Diplontic',
    ncertExamples: 'Pisum (Pea), Brassica (Mustard), Triticum (Wheat), Eucalyptus',
    summary:
      'The most diverse and dominant land plants, distinguished by flowers and double fertilization (producing a 2n zygote and 3n endosperm). Subdivided into Monocotyledons (single cotyledon) and Dicotyledons (two cotyledons).',
  },
]

export default function PlantKingdomSimulation() {
  const [selectedDivisionId, setSelectedDivisionId] = useState('algae')
  const [activeTraitHighlight, setActiveTraitHighlight] = useState('all')

  const division = PLANT_DIVISIONS.find((d) => d.id === selectedDivisionId) || PLANT_DIVISIONS[0]

  return (
    <div className="simulation-showcase-card">
      <div className="sim-details-pane">
        <div className="sim-meta">
          <span className="sim-badge">BIOLOGY • CLASS 11 NCERT CHAPTER 3</span>
          <span className="sim-model-id">PLANT KINGDOM (PLANTAE)</span>
        </div>

        <h3 className="sim-title">Evolutionary Classification of Kingdom Plantae</h3>
        <p className="sim-summary">
          Class 11 NCERT Chapter 3 classifies the Plant Kingdom into five evolutionary divisions based on body differentiation, vascular tissue emergence, seed habit, and reproductive adaptations from aquatic thalli to flowering land plants.
        </p>

        {/* Division Selector Buttons */}
        <div className="sim-controls-panel">
          <label className="control-sublabel">Select Plant Division</label>
          <div className="gravity-preset-buttons">
            {PLANT_DIVISIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`preset-btn ${selectedDivisionId === item.id ? 'selected' : ''}`}
                onClick={() => setSelectedDivisionId(item.id)}
              >
                {item.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="control-group" style={{ marginTop: '14px' }}>
            <label className="control-sublabel">Highlight Key NCERT Evolutionary Milestone</label>
            <div className="gravity-preset-buttons">
              <button
                type="button"
                className={`preset-btn ${activeTraitHighlight === 'all' ? 'selected' : ''}`}
                onClick={() => setActiveTraitHighlight('all')}
              >
                All Divisions
              </button>
              <button
                type="button"
                className={`preset-btn ${activeTraitHighlight === 'vascular' ? 'selected' : ''}`}
                onClick={() => setActiveTraitHighlight('vascular')}
              >
                Vascular Tissues (Xylem/Phloem)
              </button>
              <button
                type="button"
                className={`preset-btn ${activeTraitHighlight === 'seeds' ? 'selected' : ''}`}
                onClick={() => setActiveTraitHighlight('seeds')}
              >
                Seed Habit (Phanerogams)
              </button>
              <button
                type="button"
                className={`preset-btn ${activeTraitHighlight === 'doubleFert' ? 'selected' : ''}`}
                onClick={() => setActiveTraitHighlight('doubleFert')}
              >
                Double Fertilization
              </button>
            </div>
          </div>
        </div>

        {/* Selected Division Detailed Diagnostic Card */}
        <div className="sim-readouts-grid">
          <div className="readout-box">
            <span className="readout-title">Plant Body Form</span>
            <span className="readout-stat" style={{ fontSize: '0.9rem' }}>
              {division.bodyType}
            </span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Vascular Bundles</span>
            <span className="readout-stat" style={{ fontSize: '0.9rem' }}>
              {division.vascularTissue}
            </span>
          </div>
          <div className="readout-box">
            <span className="readout-title">Dominant Generation</span>
            <span className="readout-stat" style={{ fontSize: '0.9rem' }}>
              {division.dominantPhase}
            </span>
          </div>
        </div>
      </div>

      <div className="sim-viewport-pane">
        <div className="viewport-header">
          <span className="viewport-caption">NCERT COMPARATIVE DIVISION MATRIX</span>
          <span className="viewport-status">DIAGNOSTIC SYSTEM</span>
        </div>

        <div className="viewport-canvas-wrapper plant-kingdom-canvas-wrapper">
          {/* Active Division Summary Callout */}
          <div className="active-division-card">
            <h4 className="active-division-title">{division.name}</h4>
            <p className="active-division-summary">{division.summary}</p>
            <div className="active-division-genera">
              <strong>Representative NCERT Genera:</strong> <em>{division.ncertExamples}</em>
            </div>
          </div>

          {/* Comparative Matrix Table with Controlled Horizontal Scroll */}
          <div className="table-responsive-wrapper">
            <div className="table-scroll-hint" aria-hidden="true">
              <span className="scroll-hint-icon">⇄</span>
              <span>Scroll horizontally to view complete matrix</span>
            </div>
            <div className="table-scroll-container">
              <table className="ncert-matrix-table">
                <thead>
                  <tr>
                    <th>Division</th>
                    <th>Vascular Tissue</th>
                    <th>Dominant Phase</th>
                    <th>Seeds / Fruit</th>
                    <th>Water for Fertilization</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANT_DIVISIONS.map((item) => {
                    const isSelected = item.id === selectedDivisionId
                    let isMilestoneMatch = false
                    if (activeTraitHighlight === 'vascular') {
                      isMilestoneMatch =
                        item.id === 'pteridophytes' ||
                        item.id === 'gymnosperms' ||
                        item.id === 'angiosperms'
                    }
                    if (activeTraitHighlight === 'seeds') {
                      isMilestoneMatch =
                        item.id === 'gymnosperms' || item.id === 'angiosperms'
                    }
                    if (activeTraitHighlight === 'doubleFert') {
                      isMilestoneMatch = item.id === 'angiosperms'
                    }

                    return (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedDivisionId(item.id)}
                        className={`matrix-row ${isSelected ? 'row-selected' : ''} ${isMilestoneMatch ? 'row-milestone' : ''}`}
                      >
                        <td className="cell-division">
                          {item.name.split(' ')[0]} {isSelected && '•'}
                        </td>
                        <td
                          className={
                            item.vascularTissue.startsWith('Present') ||
                            item.vascularTissue.startsWith('Advanced')
                              ? 'cell-present'
                              : 'cell-muted'
                          }
                        >
                          {item.vascularTissue.split(' ')[0]}
                        </td>
                        <td className="cell-dominant">{item.dominantPhase.split(' ')[0]}</td>
                        <td
                          className={
                            item.seeds.startsWith('Present') ? 'cell-highlight' : 'cell-muted'
                          }
                        >
                          {item.seeds.startsWith('Present') ? 'Seeds Present' : 'Seedless'}
                        </td>
                        <td
                          className={
                            item.waterForFertilization.startsWith('Essential')
                              ? 'cell-highlight'
                              : 'cell-present'
                          }
                        >
                          {item.waterForFertilization.split(' ')[0]}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="viewport-footer">
          <span className="equation-annotation">
            NCERT Evolutionary Sequence: <code>Thallophyta → Bryophyta → Pteridophyta → Gymnospermae → Angiospermae</code>
          </span>
        </div>
      </div>
    </div>
  )
}
