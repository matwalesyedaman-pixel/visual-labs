/**
 * Visual Labs Experiment Registry & Educational Content
 * Authentic scientific explanations, practical protocols, formulas and observation data.
 */

export const EXPERIMENTS = [
  // --------------------------------------------------------------------------
  // PHYSICS
  // --------------------------------------------------------------------------
  {
    id: 'projectile-motion',
    subjectId: 'physics',
    classId: '11',
    title: 'Projectile Motion & 2D Kinematics',
    subtitle: 'Parabolic Trajectory, Vector Independence & Range Optimization',
    category: 'Class 11 NCERT Chapter 4',
    scope: 'ncert',
    badge: 'CORE NCERT EXPERIMENT',
    description:
      'Analyze the two-dimensional motion of an object launched into space under constant gravitational acceleration. Observe how horizontal velocity remains uniform while vertical velocity experiences constant downward acceleration.',
    theory: {
      overview:
        'When an object is thrown with an initial velocity v₀ at an angle θ with the horizontal, it moves along a curved path called a parabola under the action of gravity alone (neglecting air resistance). This motion can be resolved into two mutually independent one-dimensional motions: uniform velocity along the horizontal X-axis, and uniformly accelerated motion along the vertical Y-axis.',
      principles: [
        'Principle of Physical Independence of Motions: Horizontal motion and vertical motion do not interfere with each other.',
        'Zero Horizontal Acceleration: With no horizontal force acting, ax = 0 and vx = v₀ cos(θ) remains constant.',
        'Constant Vertical Acceleration: Downward gravitational acceleration ay = -g acts uniformly throughout flight.',
        'Trajectory Invariance: The trajectory is an inverted parabola described by y = x tan(θ) - [g x² / (2 v₀² cos²(θ))].',
      ],
      formulas: [
        {
          symbol: 'T',
          name: 'Time of Flight',
          formula: 'T = (2 · v₀ · sin θ) / g',
          explanation: 'Total duration the projectile remains in air before returning to launch elevation.',
        },
        {
          symbol: 'H',
          name: 'Maximum Height',
          formula: 'H = (v₀² · sin² θ) / (2 · g)',
          explanation: 'The highest vertical displacement above launch origin, achieved when vertical velocity vy = 0.',
        },
        {
          symbol: 'R',
          name: 'Horizontal Range',
          formula: 'R = (v₀² · sin 2θ) / g',
          explanation: 'Total horizontal distance traversed. Maximum range R_max = v₀²/g occurs at θ = 45°.',
        },
      ],
      objectives: [
        'Verify that horizontal displacement proceeds at constant velocity while vertical displacement accelerates at -g.',
        'Demonstrate that complementary launch angles (θ and 90° - θ) achieve identical horizontal ranges.',
        'Determine the optimum launch angle for maximum horizontal range under constant launch energy.',
      ],
    },
    practical: {
      aim: 'To investigate the dependence of maximum height, time of flight, and horizontal range on launch angle and initial velocity.',
      apparatus: [
        'Spring-loaded ballistic projectile launcher with angular protractor',
        'High-speed optical photogate sensors for muzzle velocity measurement',
        'Carbon paper and white meter-scale landing recording sheet',
        'Plumb line, spirit level, and digital stopwatch',
      ],
      procedure: [
        'Level the launcher base horizontally on a vibration-damped workbench using a spirit level.',
        'Calibrate the photogate sensors at the muzzle to record the precise initial launch speed v₀.',
        'Set the launcher angle to 15° using the Vernier protractor scale.',
        'Perform three test launches; record the point of impact on the carbon landing paper.',
        'Measure the horizontal distance from the launcher plumb line to the mean impact mark.',
        'Repeat measurements in increments of 15° across the range from 15° to 75° at fixed launch speed.',
        'Compare the empirical range values against theoretical calculations from R = (v₀² sin 2θ) / g.',
      ],
      precautions: [
        'Ensure the launch origin and landing target remain at identical horizontal elevations.',
        'Avoid standing in front of the trajectory arc during spring release.',
        'Minimize ambient drafts or air currents across the ballistic path.',
      ],
    },
    observations: {
      description:
        'Theoretical reference readings evaluated at standard Earth gravitational acceleration (g = 9.8 m/s²) and initial velocity v₀ = 25 m/s across classical NCERT launch angles.',
      tableHeaders: ['Launch Angle (θ)', 'Horizontal Vel (v₀ₓ)', 'Vertical Vel (v₀y)', 'Time of Flight (T)', 'Max Height (H)', 'Horizontal Range (R)'],
      tableRows: [
        ['15°', '24.1 m/s', '6.5 m/s', '1.32 s', '2.1 m', '31.9 m'],
        ['30° (Complementary)', '21.7 m/s', '12.5 m/s', '2.55 s', '8.0 m', '55.2 m'],
        ['45° (Optimal Range)', '17.7 m/s', '17.7 m/s', '3.61 s', '15.9 m', '63.8 m'],
        ['60° (Complementary)', '12.5 m/s', '21.7 m/s', '4.42 s', '24.0 m', '55.2 m'],
        ['75°', '6.5 m/s', '24.1 m/s', '4.93 s', '29.7 m', '31.9 m'],
      ],
      notes:
        'Notice that θ = 30° and θ = 60° achieve the exact same horizontal range (55.2 m) because sin(2 · 30°) = sin(60°) = sin(120°) = sin(2 · 60°), directly confirming the complementary angle theorem.',
    },
    results: {
      interpretation:
        'The parabolic path emerges from the superposition of constant horizontal velocity (v₀ cos θ) and uniformly decelerated vertical motion under gravity. The horizontal range reaches its absolute peak at θ = 45°, whereas maximum apex height scales monotonically with sin²(θ).',
      conclusion:
        'Experimental observations strictly confirm NCERT Class 11 Chapter 4 kinematics: motion in a plane can be completely decoupled into orthogonal components with zero cross-axis interference.',
    },
  },

  {
    id: 'pendulum',
    subjectId: 'physics',
    classId: '11',
    title: 'Simple Pendulum & Oscillatory Dynamics',
    subtitle: 'Periodic Time, Gravitational Acceleration & Small-Angle Correction',
    category: 'Supplementary Physics Laboratory',
    scope: 'supplementary',
    badge: 'HARMONIC OSCILLATIONS',
    description:
      'Investigate the periodic oscillatory motion of a concentrated point mass suspended from a rigid pivot by an inextensible cord. Verify how oscillation period depends on pendulum length and local gravitational acceleration.',
    theory: {
      overview:
        'A simple pendulum consists of a small heavy mass (bob) suspended from a rigid support by a light, inextensible string. When displaced sideways from its mean equilibrium position and released, the restoring torque exerted by the tangential component of gravity causes the bob to oscillate about its mean position.',
      principles: [
        'Restoring Force: Tangential restoring acceleration is a_t = -g sin(θ). For small displacements (θ < 15°), sin(θ) ≈ θ (in radians).',
        'Simple Harmonic Motion: Under the small-angle approximation, the restoring acceleration is directly proportional to displacement, yielding true SHM.',
        'Independence of Mass: The oscillation period is completely independent of the mass or composition of the bob.',
        'Finite Amplitude Correction: For larger angles, the period increases slightly according to T ≈ T₀ · (1 + θ²/16).',
      ],
      formulas: [
        {
          symbol: 'T₀',
          name: 'Ideal Period (Small Angle)',
          formula: 'T₀ = 2π · √(L / g)',
          explanation: 'Natural oscillation period for infinitesimal angular amplitude.',
        },
        {
          symbol: 'T_corrected',
          name: 'Finite-Amplitude Period',
          formula: 'T ≈ 2π · √(L / g) · [1 + (θ² / 16)]',
          explanation: 'First-order correction accounting for non-linear pendulum dynamics at moderate launch angles.',
        },
        {
          symbol: 'f',
          name: 'Natural Frequency',
          formula: 'f = 1 / T',
          explanation: 'Number of complete back-and-forth oscillation cycles completed per second (Hz).',
        },
      ],
      objectives: [
        'Determine the acceleration due to gravity (g) using a length-variable pendulum.',
        'Demonstrate that period T is proportional to the square root of string length L (T ∝ √L).',
        'Observe the divergence between linear SHM and non-linear periodic motion as initial deflection angle exceeds 20°.',
      ],
    },
    practical: {
      aim: 'To study the relationship between the length of a simple pendulum and its oscillation period, and to estimate local gravitational acceleration g.',
      apparatus: [
        'Metallic spherical bob with hook and knurled clamping screw',
        'Inextensible, low-torsion braided thread',
        'Precision split cork support clamp and rigid laboratory retort stand',
        'High-resolution digital optical timer with precision ±0.01 s',
        'Steel meter rule and Vernier caliper for bob radius determination',
      ],
      procedure: [
        'Measure the diameter of the spherical bob using a Vernier caliper to determine its radius r.',
        'Secure the thread between two halves of a split cork firmly held in a laboratory clamp.',
        'Set effective length L = string length + hook length + bob radius to 1.00 m.',
        'Displace the bob sideways by a small angle (θ ≤ 15°) to preserve small-angle linearity.',
        'Release smoothly without imparting lateral twist or spin.',
        'Record the time taken for 20 complete oscillations using the digital timer; compute mean period T.',
        'Repeat for lengths L = 0.5 m, 1.0 m, 1.5 m, 2.0 m, and 2.5 m.',
        'Plot a graph of L versus T²; determine slope to compute g = 4π² · (L / T²).',
      ],
      precautions: [
        'Ensure the support stand is firmly clamped to prevent secondary wobbling or energy dissipation.',
        'Keep amplitude small (under 15°) during experimental g determinations.',
        'Ensure the bob oscillates in a single vertical plane without conical precession.',
      ],
    },
    observations: {
      description:
        'Calculated oscillation periods across celestial gravitational fields (Earth g=9.81 m/s², Moon g=1.62 m/s², Mars g=3.72 m/s²) at L = 1.8 m and θ = 15°.',
      tableHeaders: ['Environment', 'Gravitational Accel (g)', 'Pendulum Length (L)', 'Small-Angle Period (T₀)', 'Corrected Period (T)', 'Frequency (f)'],
      tableRows: [
        ['Earth', '9.81 m/s²', '1.80 m', '2.69 s', '2.70 s', '0.37 Hz'],
        ['Mars', '3.72 m/s²', '1.80 m', '4.37 s', '4.39 s', '0.23 Hz'],
        ['Moon', '1.62 m/s²', '1.80 m', '6.62 s', '6.65 s', '0.15 Hz'],
        ['Earth (Short L)', '9.81 m/s²', '0.50 m', '1.42 s', '1.42 s', '0.70 Hz'],
        ['Earth (Long L)', '9.81 m/s²', '2.50 m', '3.17 s', '3.18 s', '0.31 Hz'],
      ],
      notes:
        'A pendulum on the Moon oscillates more than twice as slowly as on Earth because period scales inversely with the square root of gravity (T ∝ 1/√g).',
    },
    results: {
      interpretation:
        'Oscillation period T is strictly governed by string length L and gravitational field strength g. Mass variations show zero impact on frequency, verifying Galileo’s isochronism law for simple pendula.',
      conclusion:
        'The physical pendulum is a mathematically verifiable harmonic solver that directly reflects fundamental physical constants.',
    },
  },

  // --------------------------------------------------------------------------
  // CHEMISTRY
  // --------------------------------------------------------------------------
  {
    id: 'mole-concept',
    subjectId: 'chemistry',
    classId: '11',
    title: 'The Mole Concept & Avogadro Constant',
    subtitle: 'Stoichiometric Masses, Particle Counting & Molar Gas Volumes',
    category: 'Class 11 NCERT Chapter 1',
    scope: 'ncert',
    badge: 'CORE NCERT EXPERIMENT',
    description:
      'Bridge the atomic microscopic scale with measurable macroscopic laboratory mass. Quantify elementary entities—atoms, molecules, and ions—using Avogadro’s constant (NA = 6.022 × 10²³ mol⁻¹) and standard molar volumes.',
    theory: {
      overview:
        'In chemistry, atoms and molecules are extraordinarily small, making it impossible to weigh individual particles directly in a classroom laboratory. The mole (symbol: mol) is the SI base unit for amount of substance. One mole contains exactly 6.02214076 × 10²³ elementary entities. This number is the fixed numerical value of the Avogadro constant NA.',
      principles: [
        'Unified Atomic Mass Unit (u): 1 u is defined as a mass exactly equal to 1/12th of the mass of one carbon-12 atom.',
        'Molar Mass (M): The mass of one mole of a substance in grams is numerically equal to its atomic or molecular mass in unified mass units (u).',
        'Particle Equivalence: One mole of any substance contains exactly 6.022 × 10²³ elementary entities, regardless of chemical state.',
        'Molar Volume of Gases: At STP (273.15 K, 1 bar), 1 mole of any ideal gas occupies 22.71 L (or 22.4 L at 1 atm standard pressure).',
      ],
      formulas: [
        {
          symbol: 'm',
          name: 'Sample Mass',
          formula: 'm = n · M',
          explanation: 'Macroscopic mass in grams obtained by multiplying mole count (n) by molar mass (M).',
        },
        {
          symbol: 'N',
          name: 'Total Particle Count',
          formula: 'N = n · NA',
          explanation: 'Total number of constituent atoms, molecules, or formula units in the sample.',
        },
        {
          symbol: 'V_STP',
          name: 'Molar Gas Volume (STP)',
          formula: 'V = n · 22.7 L',
          explanation:
            'Volume occupied by n moles of gaseous substance under modern IUPAC / NCERT STP (273.15 K, 1 bar = 22.7 L/mol; legacy 1 atm = 22.4 L/mol).',
        },
      ],
      objectives: [
        'Understand the relationship between microscopic atomic mass (u) and macroscopic molar mass (g/mol).',
        'Calculate total constituent particles for elements, molecular compounds, and ionic lattices.',
        'Apply stoichiometric relationships to gas volume conversions under standard conditions.',
      ],
    },
    practical: {
      aim: 'To determine the mass and particle count of various pure substances and evaluate stoichiometric molar conversions.',
      apparatus: [
        'Analytical balance with readability to ±0.001 g',
        'Weighing boats, stainless steel spatulas, and camel-hair brush',
        'Pure analytical-grade samples: Graphite/Carbon, Water, NaCl, Glucose',
        'Gas burette and pneumatic trough for volumetric gas displacement',
      ],
      procedure: [
        'Calibrate the digital analytical balance using standard calibrated brass masses.',
        'Tare an empty, clean, dry glass weighing boat on the pan.',
        'Accurately weigh out 18.015 g of distilled water (H₂O) into a volumetric flask.',
        'Calculate the number of moles present using n = m / M (18.015 g / 18.015 g·mol⁻¹ = 1.000 mol).',
        'Calculate the total water molecules: N = 1.000 × 6.022 × 10²³ = 6.022 × 10²³ molecules.',
        'Calculate total hydrogen atoms present: 2 × NA = 1.204 × 10²⁴ atoms.',
        'Repeat the weighing for stoichiometric presets: 0.5 mol, 1.0 mol, and 2.0 mol of NaCl (58.44 g/mol).',
      ],
      precautions: [
        'Do not touch weighing boats or analytical weights with bare hands; use clean forceps.',
        'Ensure hygroscopic solids such as NaCl are kept sealed in desiccators before measurement.',
        'Zero the balance drafts before recording final mass figures.',
      ],
    },
    observations: {
      description:
        'Standard stoichiometric conversions across representative chemical substances at 1.00 mol sample quantity.',
      tableHeaders: ['Substance', 'Formula', 'Entity Classification', 'Molar Mass (M)', 'Sample Mass (1.0 mol)', 'Total Particles (N)'],
      tableRows: [
        ['Carbon-12', 'C', 'Element (Atoms)', '12.01 g/mol', '12.01 g', '6.022 × 10²³ atoms'],
        ['Water', 'H₂O', 'Molecular Compound', '18.02 g/mol', '18.02 g', '6.022 × 10²³ molecules'],
        ['Sodium Chloride', 'NaCl', 'Ionic Solid (Lattice)', '58.44 g/mol', '58.44 g', '6.022 × 10²³ formula units'],
        ['Carbon Dioxide', 'CO₂', 'Gas (22.7 L at STP)', '44.01 g/mol', '44.01 g', '6.022 × 10²³ molecules'],
        ['Glucose', 'C₆H₁₂O₆', 'Molecular Solid', '180.16 g/mol', '180.16 g', '6.022 × 10²³ molecules'],
      ],
      notes:
        'Although 1 mole of carbon-12 weighs 12.01 g and 1 mole of glucose weighs 180.16 g, both samples contain the exact same number of fundamental entities: 6.022 × 10²³.',
    },
    results: {
      interpretation:
        'Molar mass functions as a universal conversion factor connecting laboratory mass balances with particulate atomic counts. The constant NA connects macroscopic stoichiometric chemistry with microscopic molecular structure.',
      conclusion:
        'Mastery of the mole concept provides the foundational numerical grammar for all quantitative Class 11 chemical analysis.',
    },
  },

  {
    id: 'titration',
    subjectId: 'chemistry',
    classId: '11',
    title: 'Acid-Base Volumetric Titration',
    subtitle: 'Neutralization Stoichiometry, Equivalence Point & pH Indicators',
    category: 'Supplementary Chemistry Laboratory',
    scope: 'supplementary',
    badge: 'ANALYTICAL CHEMISTRY',
    description:
      'Simulate the volumetric titration of a strong acid (0.10 M HCl) with a strong base (0.10 M NaOH). Observe the sharp pH inflection around stoichiometric equivalence and monitor universal indicator color transitions.',
    theory: {
      overview:
        'Acid-base titration is an analytical volumetric method used to determine the unknown concentration of an acid or base solution by neutralizing it with a standard solution of known concentration (titrant). For a strong acid (HCl) titrated with a strong base (NaOH), the fundamental chemical reaction is H⁺(aq) + OH⁻(aq) → H₂O(l).',
      principles: [
        'Stoichiometric Equivalence Point: The exact point where moles of added titrant base equal moles of initial analyte acid (n_acid = n_base).',
        'Logarithmic pH Scale: pH = -log₁₀[H⁺]. In aqueous solution at 25°C, pH + pOH = 14.00.',
        'Sharp Equivalence Inflection: Around 25.0 mL, the addition of a single drop of NaOH causes the pH to surge from ~3.5 to ~10.5.',
        'Visual Indicator Transition: Universal indicator undergoes a distinct spectrum transition: red/orange (acidic) → green (neutral pH 7) → blue/violet (alkaline).',
      ],
      formulas: [
        {
          symbol: 'pH (Pre-Equiv)',
          name: 'Acid Region pH',
          formula: 'pH = -log₁₀ [(moles H⁺ - moles OH⁻) / V_total]',
          explanation: 'Governed by excess unneutralized hydrochloric acid before equivalence.',
        },
        {
          symbol: 'pH_eq',
          name: 'Equivalence pH',
          formula: 'pH = 7.00 (at 25°C)',
          explanation: 'At equivalence point for strong acid + strong base, neutral salt (NaCl) does not hydrolyze.',
        },
        {
          symbol: 'pH (Post-Equiv)',
          name: 'Alkaline Region pH',
          formula: 'pH = 14.0 - {-log₁₀ [(moles OH⁻ - moles H⁺) / V_total]}',
          explanation: 'Governed by unreacted excess hydroxide ions past the 25.0 mL equivalence point.',
        },
      ],
      objectives: [
        'Understand the mathematical basis of strong acid–strong base titration curves.',
        'Pinpoint the exact stoichiometric equivalence point and observe the steep pH transition slope.',
        'Correlate digital glass electrode pH readouts with universal indicator color changes.',
      ],
    },
    practical: {
      aim: 'To determine the concentration of a hydrochloric acid solution by titrating it against a standardized 0.10 M sodium hydroxide solution using visual indicator monitoring.',
      apparatus: [
        '50 mL precision glass burette with PTFE stopcock (graduated to 0.1 mL)',
        '25 mL volumetric transfer pipette with rubber pipette filler bulb',
        '250 mL conical titration flask (Erlenmeyer flask)',
        'Digital laboratory pH meter with combination glass electrode',
        'Wash bottle with deionized water and white porcelain tile',
      ],
      procedure: [
        'Rinse and fill the burette with standardized 0.10 M NaOH solution; expel air bubbles from the tip.',
        'Pipette exactly 25.0 mL of 0.10 M HCl into the conical flask using a volumetric pipette.',
        'Add 2–3 drops of universal indicator solution; place flask over a white tile.',
        'Record the initial burette reading to two decimal places.',
        'Slowly dispense NaOH while swirling the conical flask continuously.',
        'As the equivalence point nears (around 24 mL), add titrant dropwise until the solution turns permanently green (pH 7).',
        'Record the final burette volume and calculate the analyte molarity using M₁V₁ = M₂V₂.',
      ],
      precautions: [
        'Read the burette at eye level aligned with the bottom of the liquid meniscus.',
        'Swirl the titration flask continuously during titrant addition to prevent localized pooling.',
        'Wash down drops clinging to the flask neck with deionized water before reaching end-point.',
      ],
    },
    observations: {
      description:
        'Calculated pH curve and equilibrium state during titration of 25.0 mL 0.10 M HCl with 0.10 M NaOH.',
      tableHeaders: ['Titrant Volume (NaOH)', 'Total Volume', 'Net Ions Present', 'Solution pH', 'Indicator Color', 'Equilibrium Regime'],
      tableRows: [
        ['0.0 mL', '25.0 mL', '0.0025 mol H⁺', '1.00', 'Crimson Red', 'Pure Strong Acid'],
        ['10.0 mL', '35.0 mL', '0.0015 mol H⁺', '1.37', 'Red-Orange', 'Partial Neutralization'],
        ['20.0 mL', '45.0 mL', '0.0005 mol H⁺', '1.95', 'Orange-Yellow', 'Buffered Acid Slurry'],
        ['24.9 mL', '49.9 mL', '0.00001 mol H⁺', '3.70', 'Yellow-Green', 'Inflection Region'],
        ['25.0 mL', '50.0 mL', '[H⁺] = [OH⁻]', '7.00', 'Forest Green', 'Stoichiometric Equivalence'],
        ['25.1 mL', '50.1 mL', '0.00001 mol OH⁻', '10.30', 'Cyan Blue', 'Excess Base Transition'],
        ['30.0 mL', '55.0 mL', '0.0005 mol OH⁻', '11.96', 'Deep Blue', 'Strong Alkaline Slurry'],
        ['50.0 mL', '75.0 mL', '0.0025 mol OH⁻', '12.52', 'Royal Violet', 'Excess Base Plateau'],
      ],
      notes:
        'Notice the extreme pH surge between 24.9 mL (pH 3.70) and 25.1 mL (pH 10.30), demonstrating why volumetric indicators must switch colors cleanly within the vertical inflection zone.',
    },
    results: {
      interpretation:
        'Because both HCl and NaOH are strong electrolytes that dissociate completely, the salt NaCl does not undergo cation or anion hydrolysis. Consequently, the true stoichiometric equivalence point occurs at exactly pH 7.00 at 25°C.',
      conclusion:
        'Volumetric titration enables analytical determination of solution concentrations with precision exceeding ±0.1%.',
    },
  },

  // --------------------------------------------------------------------------
  // BIOLOGY
  // --------------------------------------------------------------------------
  {
    id: 'plant-kingdom',
    subjectId: 'biology',
    classId: '11',
    title: 'Plant Kingdom & Evolutionary Botany',
    subtitle: 'Thallophytes to Angiosperms: Morphological & Reproductive Transitions',
    category: 'Class 11 NCERT Chapter 3',
    scope: 'ncert',
    badge: 'CORE NCERT EXPERIMENT',
    description:
      'Explore the evolutionary classification of Kingdom Plantae across the five major divisions: Algae, Bryophytes, Pteridophytes, Gymnosperms, and Angiosperms. Analyze morphological differentiation, emergence of vascular bundles, seed habit, and reproductive adaptations.',
    theory: {
      overview:
        'Class 11 NCERT Chapter 3 classifies the Plant Kingdom into five evolutionary divisions. The classification reflects the evolutionary transition of photosynthetic autotrophs from aquatic thalloid organisms relying on external water for swimming gametes, to fully terrestrial vascular seed plants capable of internal siphonogamous fertilization and double fertilization.',
      principles: [
        'Body Differentiation: From simple undifferentiated thallus (Algae) to true roots, stems, leaves (Pteridophytes onward).',
        'Vascular Bundles: Emergence of tracheary xylem and phloem in Pteridophytes enabled upright land colonization.',
        'Seed Habit & Heterospory: Evolution from spore-forming Cryptogams to naked-seeded Gymnosperms and fruit-enclosed Angiosperms.',
        'Alternation of Generations: Progressive reduction of the free-living haploid gametophyte (n) in favor of a dominant diploid sporophyte (2n).',
        'Double Fertilization: Unique angiosperm hallmark: syngamy produces a 2n zygote while triple fusion yields 3n endosperm.',
      ],
      formulas: [
        {
          symbol: 'n / 2n',
          name: 'Haplontic Life Cycle',
          formula: 'Gametophyte (n) Dominant; Zygote (2n) is only diploid stage',
          explanation: 'Characteristic of green algae such as Chlamydomonas, Spirogyra, and Volvox.',
        },
        {
          symbol: 'n ⇄ 2n',
          name: 'Haplo-diplontic Cycle',
          formula: 'Alternation between multi-cellular Gametophyte and Sporophyte',
          explanation: 'Found in Bryophytes (dominant gametophyte) and Pteridophytes (dominant sporophyte).',
        },
        {
          symbol: '2n',
          name: 'Diplontic Life Cycle',
          formula: 'Sporophyte (2n) Dominant; Gametophyte reduced to pollen/embryo sac',
          explanation: 'Standard cycle for all seed-bearing plants (Gymnosperms and Angiosperms).',
        },
      ],
      objectives: [
        'Trace the morphological evolutionary timeline across the 5 botanical divisions.',
        'Identify key diagnostic features: vascular tissue, seed habit, and flagellated gametes.',
        'Distinguish between life cycle strategies (haplontic, diplontic, haplo-diplontic) using NCERT specimens.',
      ],
    },
    practical: {
      aim: 'To study and identify characteristic specimens of the five divisions of Kingdom Plantae using morphological and anatomical diagnostic criteria.',
      apparatus: [
        'Compound optical research microscope (10x, 40x, 100x oil immersion)',
        'Prepared permanent slides of Spirogyra, Marchantia, Funaria, Fern prothallus, Pinus needle, Dicot root',
        'Fresh or preserved laboratory specimens of Chlorella, Funaria, Nephrolepis (Fern), Cycas ovule, Pea flower',
        'Dissecting needles, razor blades for cross-sections, watch glasses, safranin and fast green stains',
      ],
      procedure: [
        'Examine filamentous green algae (Spirogyra) under low power; observe unbranched filament and spiral chloroplasts.',
        'Examine liverwort thallus (Marchantia); note dorsiventral symmetry, rhizoids, and gemma cups.',
        'Examine fern sporophyte; identify rhizome, compound fronds, and sori bearing sporangia on the lower leaf surface.',
        'Examine male and female cones of Pinus; observe winged microspores and naked ovules on megasporophylls.',
        'Dissect an angiosperm flower (Pisum sativum / Pea); identify calyx, corolla, stamens, and ovary containing enclosed ovules.',
        'Record diagnostic morphological features in comparative botanical matrix.',
      ],
      precautions: [
        'Use fine dissecting needles to avoid crushing delicate moss archegonia or fern prothalli.',
        'Keep fresh botanical sections immersed in water on watch glasses to prevent cellular shrinkage.',
        'Ensure cover slips are mounted smoothly without trapping refractive air bubbles.',
      ],
    },
    observations: {
      description:
        'Comparative diagnostic matrix across all five NCERT Plant Kingdom divisions.',
      tableHeaders: ['Division', 'Body Form', 'Vascular Tissue', 'Dominant Phase', 'Seed Habit', 'Fertilization Water', 'Life Cycle'],
      tableRows: [
        ['Algae', 'Thalloid (No true roots/stems)', 'Absent', 'Gametophyte (n)', 'Absent (Spore-forming)', 'Essential (Swimming flagella)', 'Haplontic'],
        ['Bryophytes', 'Thalloid or Leafy (Rhizoids)', 'Absent', 'Gametophyte (n)', 'Absent (Cryptogam)', 'Essential (Swimming antherozoids)', 'Haplo-diplontic'],
        ['Pteridophytes', 'True Roots, Stems, Leaves', 'Present (Tracheids)', 'Sporophyte (2n)', 'Absent (Cryptogam)', 'Essential (Moist prothallus)', 'Haplo-diplontic'],
        ['Gymnosperms', 'Woody Trees/Shrubs', 'Present (Xylem lacks vessels)', 'Sporophyte (2n)', 'Present (Naked Ovules)', 'Not Required (Pollen tube)', 'Diplontic'],
        ['Angiosperms', 'Highly Differentiated', 'Advanced Vessels & Companion Cells', 'Sporophyte (2n)', 'Present (Enclosed in Fruits)', 'Not Required (Siphonogamy)', 'Diplontic'],
      ],
      notes:
        'Bryophytes are aptly called the "Amphibians of the Plant Kingdom" because while their vegetative thallus survives on land, water is indispensable for flagellated antherozoids to swim to the archegonium.',
    },
    results: {
      interpretation:
        'Botanical evolution represents a coordinated sequence of terrestrial adaptations: cuticle and stomata for desiccation resistance, vascular bundles for long-distance sap transport, and seeds for embryonic nourishment and drought survival.',
      conclusion:
        'Kingdom Plantae demonstrates a clear continuum from aquatic haplontic Cryptogams to dominant terrestrial diplontic Phanerogams.',
    },
  },

  {
    id: 'enzyme-kinetics',
    subjectId: 'biology',
    classId: '11',
    title: 'Enzyme Kinetics & Michaelis-Menten Catalysis',
    subtitle: 'Reaction Velocity, Active Site Saturation & Michaelis Constant (Km)',
    category: 'Supplementary Biology Laboratory',
    scope: 'supplementary',
    badge: 'BIOCHEMICAL SOLVER',
    description:
      'Investigate the kinetics of biological catalysts under varying substrate concentrations. Observe the mathematical transition from first-order linear velocity to asymptotic zero-order active-site saturation (Vmax).',
    theory: {
      overview:
        'Enzymes are biocatalysts that accelerate chemical reactions in living organisms by lowering the activation energy barrier without being consumed in the process. The relationship between substrate concentration [S] and the initial rate of an enzyme-catalyzed reaction (V) is described by the Michaelis-Menten kinetic model.',
      principles: [
        'Enzyme-Substrate Complex: The enzyme (E) reversibly binds substrate (S) to form an ES intermediate: E + S ⇄ ES → E + P.',
        'First-Order Kinetics: At low substrate concentration ([S] ≪ Km), active sites are largely unoccupied; velocity V increases linearly with [S].',
        'Zero-Order Saturation: At high substrate concentration ([S] ≫ Km), virtually all enzyme molecules exist as ES; reaction rate plateaus at Vmax.',
        'Michaelis Constant (Km): The specific substrate concentration at which reaction velocity is exactly half of maximum (V = Vmax / 2). A lower Km indicates higher substrate affinity.',
      ],
      formulas: [
        {
          symbol: 'V',
          name: 'Michaelis-Menten Velocity',
          formula: 'V = (V_max · [S]) / (K_m + [S])',
          explanation: 'Instantaneous catalytic rate as a function of substrate concentration [S].',
        },
        {
          symbol: 'K_m',
          name: 'Michaelis Constant',
          formula: '[S] when V = 0.5 · V_max',
          explanation: 'Characteristic kinetic fingerprint reflecting enzyme-substrate binding affinity.',
        },
        {
          symbol: '% Sat',
          name: 'Active Site Saturation',
          formula: 'Saturation % = (V / V_max) · 100',
          explanation: 'Fraction of total enzyme active sites actively engaged in catalytic turnover.',
        },
      ],
      objectives: [
        'Demonstrate that reaction velocity V follows a rectangular hyperbola as substrate concentration rises.',
        'Determine Km graphically as the abscissa corresponding to half-maximal velocity (Vmax/2).',
        'Distinguish between diffusion-limited first-order kinetics and saturation-limited zero-order regimes.',
      ],
    },
    practical: {
      aim: 'To study the effect of substrate concentration on the catalytic activity of salivary amylase / catalase and determine Vmax and Km.',
      apparatus: [
        'UV-Visible double-beam spectrophotometer with quartz cuvettes',
        'Thermostatically regulated water bath maintained at 37.0°C ± 0.1°C',
        'Precision micropipettes (10–100 µL, 100–1000 µL) and disposable tips',
        'Standard enzyme stock solution and buffered substrate dilution series',
        'Stopwatch, vortex mixer, and borosilicate test tube rack',
      ],
      procedure: [
        'Prepare a substrate concentration series ([S] = 0.5, 1.0, 2.0, 3.0, 5.0, 10.0, 15.0, 20.0 mM) in 0.1 M phosphate buffer (pH 7.0).',
        'Equilibrate all test tubes in the water bath at 37°C for 5 minutes.',
        'Initiate the reaction by pipetting 100 µL of enzyme into the substrate tube; start the timer immediately.',
        'Monitor absorbance change at the designated wavelength over the linear initial 60 seconds.',
        'Calculate initial velocity V (µmol of product formed per minute).',
        'Plot V versus [S] to generate the Michaelis-Menten hyperbolic curve.',
        'Extract Vmax from the horizontal asymptote and estimate Km at V = Vmax / 2.',
      ],
      precautions: [
        'Maintain constant incubation temperature at 37°C throughout all kinetic assay runs.',
        'Measure velocity strictly during the initial linear rate phase before substrate depletion occurs.',
        'Keep enzyme stock solutions chilled on crushed ice prior to assay initiation.',
      ],
    },
    observations: {
      description:
        'Simulated catalytic velocity readings at Vmax = 120.0 µmol/min and Km = 3.0 mM across substrate concentrations.',
      tableHeaders: ['Substrate Conc [S]', 'Reaction Velocity (V)', 'Fractional Vmax', 'Saturation %', 'Kinetic Order'],
      tableRows: [
        ['0.0 mM', '0.0 µmol/min', '0.00', '0%', 'Zero Rate'],
        ['0.5 mM (Low [S])', '17.1 µmol/min', '0.14', '14%', 'First-Order (Linear)'],
        ['1.5 mM', '40.0 µmol/min', '0.33', '33%', 'Mixed-Order'],
        ['3.0 mM (= Km)', '60.0 µmol/min', '0.50', '50%', 'Half-Maximal Velocity'],
        ['6.0 mM', '80.0 µmol/min', '0.67', '67%', 'Approaching Saturation'],
        ['12.0 mM', '96.0 µmol/min', '0.80', '80%', 'Near Asymptote'],
        ['15.0 mM', '100.0 µmol/min', '0.83', '83%', 'Zero-Order Plateau'],
        ['20.0 mM', '104.3 µmol/min', '0.87', '87%', 'Active Site Saturated'],
      ],
      notes:
        'When [S] equals Km (3.0 mM), exactly 50% of enzyme active sites are occupied, generating exactly 60.0 µmol/min (half of Vmax = 120 µmol/min).',
    },
    results: {
      interpretation:
        'At low substrate concentrations, collision frequency between substrate and unoccupied enzyme active sites limits the reaction rate. At saturating substrate concentrations, the rate-limiting step becomes the catalytic turnover constant (kcat) of the enzyme itself.',
      conclusion:
        'The Michaelis-Menten formulation provides a rigorous quantitative framework for assessing enzymatic efficiency and substrate affinity in biological systems.',
    },
  },
]

export const CLASS_11_INFO = {
  id: '11',
  name: 'Class 11 Science',
  curriculum: 'Central Board of Secondary Education (CBSE) / NCERT Syllabus',
  description:
    'Rigorous interactive laboratories mapped to Class 11 NCERT textbooks across Physics, Chemistry, and Biology. Manipulate real mathematical and physical constants with instant empirical feedback.',
  subjectsCount: 3,
  experimentsCount: 6,
  subjects: [
    {
      id: 'physics',
      name: 'Physics',
      chapter: 'Chapter 4: Motion in a Plane',
      code: 'NCERT-PHY-11-04',
      accent: 'var(--color-forest)',
      description: 'Two-dimensional kinematics, vector resolution, projectile mechanics, and oscillatory systems.',
      experiments: ['projectile-motion', 'pendulum'],
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      chapter: 'Chapter 1: Some Basic Concepts of Chemistry',
      code: 'NCERT-CHM-11-01',
      accent: 'var(--color-terracotta)',
      description: 'The mole concept, Avogadro particle counts, molar gas volumes, and volumetric titration analysis.',
      experiments: ['mole-concept', 'titration'],
    },
    {
      id: 'biology',
      name: 'Biology',
      chapter: 'Chapter 3: Plant Kingdom',
      code: 'NCERT-BIO-11-03',
      accent: 'var(--color-sage)',
      description: 'Evolutionary botany from thallophytes to angiosperms, and biochemical enzyme kinetics.',
      experiments: ['plant-kingdom', 'enzyme-kinetics'],
    },
  ],
}

export function getExperiment(subjectId, experimentId) {
  return EXPERIMENTS.find(
    (exp) => exp.subjectId === subjectId && exp.id === experimentId
  )
}

export function getExperimentsBySubject(subjectId) {
  return EXPERIMENTS.filter((exp) => exp.subjectId === subjectId)
}
