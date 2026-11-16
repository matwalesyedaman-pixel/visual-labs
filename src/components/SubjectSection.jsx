import SubjectCard from './SubjectCard'
import { CURRICULUM_SUBJECTS } from '../data/curriculumData'

export default function SubjectSection({ onSelectSubject }) {
  return (
    <section id="subjects" className="section subjects-section">
      <div className="container">
        <div className="section-header">
          <div className="editorial-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true"></span>
            <span>Class 11 NCERT Syllabus Alignment</span>
          </div>
          <h2 className="section-title">Core Class 11 Chapter Modules</h2>
          <p className="section-intro">
            Targeted interactive learning experiences mapped directly to Class 11 NCERT textbooks: Motion in a Plane (Physics Chapter 4), Some Basic Concepts of Chemistry (Chemistry Chapter 1), and Plant Kingdom (Biology Chapter 3).
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
