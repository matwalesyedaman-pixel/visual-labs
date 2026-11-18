// Reused and elevated SubjectCard component
export default function SubjectCard({
  id,
  code,
  name,
  description,
  topics = [],
  moduleStatus,
  accent,
  onExplore,
}) {
  return (
    <article className="subject-card" style={{ '--card-accent': accent }}>
      <div className="card-top-meta">
        <span className="subject-code">{code}</span>
        {moduleStatus && <span className="sim-count">{moduleStatus}</span>}
      </div>

      <div className="subject-header">
        <h3 className="subject-name">{name}</h3>
        <p className="subject-description">{description}</p>
      </div>

      <div className="card-curriculum">
        <h4 className="curriculum-heading">Curriculum Focus</h4>
        <ul className="topic-list">
          {topics.map((topic, idx) => (
            <li key={idx} className="topic-item">
              <span className="topic-bullet" aria-hidden="true">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <button
          type="button"
          className="subject-explore-link"
          onClick={() => onExplore?.(id)}
          aria-label={`Open ${name} laboratory simulation`}
        >
          <span>Open {name} Workbench</span>
          <span className="arrow-icon" aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}
