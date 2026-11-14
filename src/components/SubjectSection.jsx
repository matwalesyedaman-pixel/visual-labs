import SubjectCard from './SubjectCard'
import { CURRICULUM_SUBJECTS } from '../data/curriculumData'

export default function SubjectSection({ onSelectSubject }) {
  return (
    <section id="subjects" className="section subjects-section">
      <div className="container">
        <div className="section-header">
          <div className="editorial-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true"></span>
            <span>Disciplines of Inquiry</span>
          </div>
          <h2 className="section-title">Explore Core Scientific Fields</h2>
          <p className="section-intro">
            Each scientific discipline provides dedicated computational modules built to uncover invisible forces, macroscopic laws, and molecular equilibria.
          </p>
        </div>

        <div className="subjects-grid">
          {CURRICULUM_SUBJECTS.map((subject) => (
            <SubjectCard
              key={subject.code}
              code={subject.code}
              name={subject.name}
              description={subject.description}
              topics={subject.topics}
              moduleStatus={subject.moduleStatus}
              accent={subject.accent}
              onExplore={() => onSelectSubject(subject.activeTab)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
