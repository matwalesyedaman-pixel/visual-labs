export default function PhilosophySection() {
  return (
    <section id="about" className="section philosophy-section">
      <div className="container">
        <div className="philosophy-layout">
          <div className="philosophy-text-column">
            <div className="editorial-eyebrow">
              <span className="eyebrow-rule" aria-hidden="true"></span>
              <span>Pedagogical Architecture</span>
            </div>
            <h2 className="philosophy-headline">
              Designed for Deep Conceptual Understanding
            </h2>
            <p className="philosophy-lead">
              Traditional STEM education often oscillates between rote algebraic manipulation and passive video demonstrations. Visual Labs introduces an empirical third way: open inquiry in a zero-hazard computational environment.
            </p>

            <div className="pillars-list">
              <div className="pillar-item">
                <span className="pillar-num">01</span>
                <div className="pillar-info">
                  <h4>Parametric Direct Manipulation</h4>
                  <p>
                    Learners change fundamental variables—string length, molarity, substrate concentration—and observe instant causality without the friction of physical apparatus errors.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">02</span>
                <div className="pillar-info">
                  <h4>Mathematically Faithful Solvers</h4>
                  <p>
                    Every simulation is evaluated using verified differential equations and equilibrium balances, preserving authentic physical laws and scientific accuracy.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">03</span>
                <div className="pillar-info">
                  <h4>Universal Classroom Access</h4>
                  <p>
                    Accessible on any modern web browser across desktop workstations, tablets, and interactive classroom displays without software installations or proprietary paywalls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="philosophy-aside-column">
            <div className="quote-card">
              <blockquote className="editorial-quote">
                “The primary purpose of scientific visualization is not decoration, but contemplation: creating conditions where mathematical patterns become tangible to the human eye.”
              </blockquote>
              <cite className="quote-attribution">
                — Visual Labs Pedagogical Framework
              </cite>
            </div>

            <div className="laboratory-notes-card">
              <div className="notes-header">
                <span>LABORATORY PROTOCOL GUIDELINES</span>
              </div>
              <ul className="notes-items">
                <li>
                  <strong>Formulate:</strong> State an initial hypothesis regarding variable interdependence.
                </li>
                <li>
                  <strong>Isolate:</strong> Keep secondary parameters constant while varying one target variable.
                </li>
                <li>
                  <strong>Record:</strong> Tabulate readouts across incremental parametric steps.
                </li>
                <li>
                  <strong>Synthesize:</strong> Compare empirical observations with theoretical formulas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
