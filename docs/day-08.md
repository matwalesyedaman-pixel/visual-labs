# Day 08 — SQL & PostgreSQL Database Engineering

**Project:** Visual Labs for Learning Science  
**Student:** Aman Syed  
**Date:** 26 November 2026  
**Database:** `visual_labs_sql`  
**PostgreSQL Version:** 17.12

## 1. Objective

Build a practical relational database for Visual Labs using PostgreSQL. Implement tables, relationships, data persistence, SQL queries, indexes, data integrity and student activity reporting.

This was a standalone database implementation. It has not yet been connected to the React application. Backend integration is planned for Day 09 using Node.js and Express.js.

## 2. Environment Setup

- PostgreSQL 17.12 — Windows ZIP installation.
- PostgreSQL binaries: `C:\pgsql`
- Database storage: `C:\pgdata`
- Server address: `127.0.0.1:5432`
- Database name: `visual_labs_sql`

Server startup:

```powershell
& "C:\pgsql\bin\pg_ctl.exe" -D "C:\pgdata" -l "C:\pgdata\server.log" start
```

Database connection:

```powershell
& "C:\pgsql\bin\psql.exe" -h 127.0.0.1 -p 5432 -U postgres -d visual_labs_sql
```

## 3. Database Architecture Implemented

Seven tables were created.

| Table | Purpose |
|---|---|
| students | Student information |
| subjects | Physics, Chemistry and Biology |
| experiments | Experiments associated with subjects |
| experiment_states | Latest experiment settings |
| saved_configurations | Multiple student-saved configurations |
| learning_progress | Subject-wise learning metrics |
| experiment_attempts | Student experiment activity and completion |

### Relationships

Nine foreign-key relationships were verified:

1. experiments → subjects
2. experiment_states → students
3. experiment_states → experiments
4. saved_configurations → students
5. saved_configurations → experiments
6. learning_progress → students
7. learning_progress → subjects
8. experiment_attempts → students
9. experiment_attempts → experiments

### Important design decisions

- Primary keys uniquely identify records.
- Foreign keys maintain referential integrity.
- A unique constraint on `(student_id, experiment_id)` prevents duplicate latest-state records.
- JSONB stores flexible simulation parameters.
- Latest experiment state and deliberately saved configurations are stored separately.
- Learning progress and experiment attempts are separate records and are not automatically synchronised yet.

## 4. Sample Data

Six experiments were added:

**Physics**
- Projectile Motion
- Pendulum

**Chemistry**
- Mole Concept
- Titration

**Biology**
- Plant Kingdom
- Enzyme Kinetics

Two fictional student records were used for database exercises.

## 5. SQL Operations Practised

- CREATE DATABASE
- CREATE TABLE
- INSERT
- SELECT
- WHERE
- UPDATE
- DELETE
- ORDER BY
- JOIN
- LEFT JOIN
- CROSS JOIN
- COUNT and SUM
- CREATE INDEX
- BEGIN and ROLLBACK

PostgreSQL inspection commands:

- `\dt` — list tables
- `\di` — list indexes
- `\d` — inspect table structure

## 6. JSONB Experiment Persistence

The `experiment_states` table stores flexible experiment parameters.

Example:

```json
{
  "velocity": 30,
  "angle": 45,
  "gravity": 9.8
}
```

The database enforces one latest-state record per student and experiment.

A duplicate insertion was rejected by the unique constraint. The existing record was updated instead.

## 7. Indexing and Data Integrity

The final audit confirmed:

- 7 tables
- 15 indexes
- 9 foreign-key relationships

Four additional indexes were explicitly created:

```sql
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_experiments_subject ON experiments(subject_id);
CREATE INDEX idx_progress_student ON learning_progress(student_id);
CREATE INDEX idx_saved_configs_student ON saved_configurations(student_id);
```

A foreign-key test attempted to insert an experiment referencing subject ID 999. PostgreSQL rejected the operation because that subject did not exist.

A transaction exercise demonstrated how `ROLLBACK` cancels uncommitted changes.

## 8. Final Database Audit

| Table | Records |
|---|---:|
| students | 2 |
| subjects | 3 |
| experiments | 6 |
| experiment_states | 1 |
| saved_configurations | 2 |
| learning_progress | 3 |
| experiment_attempts | 3 |

A multi-table dashboard query successfully generated student activity summaries across Physics, Chemistry and Biology.

The results represent sample data inserted during the exercises, not actual student learning activity.

## 9. Issues Encountered and Resolved

1. SQL commands were initially entered in PowerShell instead of the PostgreSQL terminal.
2. PostgreSQL server stopped after opening a new terminal; it was restarted using `pg_ctl`.
3. An existing experiments table was reused instead of recreated.
4. Duplicate experiment-state insertion was rejected by the unique constraint.
5. Invalid subject references were rejected by foreign-key enforcement.

## 10. Day 08 Outcome

Successfully created, populated, queried and audited a local PostgreSQL relational database for Visual Labs.

The database is currently a learning prototype, not a production-ready system. It is not yet integrated with the frontend or backend.

Authentication, authorisation, production migrations, automated progress aggregation, backup strategy and deployment configuration remain future implementation tasks.

## 11. Next — Day 09

**Node.js and Express.js Backend Development**

Planned work:

1. Understand Node.js runtime and package management.
2. Create an Express backend.
3. Build API routes and controllers.
4. Connect backend services to a database.
5. Implement request validation and error handling.
6. Prepare API integration with the React frontend.

The browser will communicate with the backend API rather than connecting directly to PostgreSQL.