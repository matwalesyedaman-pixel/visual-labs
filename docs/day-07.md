# Visual Labs for Learning Science
## Day 07 — MongoDB Learning Report

**Developer:** AMAN SYED  
**Learning Focus:** MongoDB Fundamentals and Practical Database Operations  
**Date:** 23 November 2026

---

### 1. Learning Objectives

- Understand MongoDB database architecture.
- Distinguish databases, collections, documents, fields and values.
- Perform CRUD operations using MongoDB Compass.
- Understand query filters and BSON data types.
- Understand embedding and referencing.
- Learn the purpose of indexes and unique indexes.
- Apply MongoDB concepts to Visual Labs for Learning Science.

### 2. Environment Setup

Successfully configured a local MongoDB development environment.

| Component | Configuration |
|---|---|
| MongoDB Server | 9.0.8 |
| Installation method | Official ZIP distribution |
| Installation directory | `C:\mongodb-win32-x86_64-windows-9.0.8` |
| Database storage | `C:\data\db` |
| Server address | `127.0.0.1:27017` |
| GUI | MongoDB Compass |
| Connection URI | `mongodb://127.0.0.1:27017` |

The server started successfully and reported that it was waiting for connections. MongoDB Compass connected successfully.

This is a local development database, not a remotely hosted database.

### 3. Database Creation

Created the following database structure:

- Database: `visual_labs`
- Collection: `users`

Created a fictional student document containing:
- name
- email
- class
- subjects
- isGuest

### 4. MongoDB Fundamentals

**Database:** A logical container for collections.

**Collection:** A group of related documents, conceptually similar to a SQL table.

**Document:** An individual record stored in BSON format.

**Field:** A named property in a document.

**Value:** The information stored under a field.

Example:

```json
{
  "name": "Aarav Sharma",
  "class": 11,
  "isGuest": false
}
```

Here, `class` is the field and `11` is its value.

### 5. CRUD Practical Exercises

| Operation | Practical work |
|---|---|
| Create | Inserted student documents |
| Read | Retrieved documents using Compass filters |
| Update | Changed Aarav's class from 11 to 12 |
| Delete | Deleted the sample Rahul document |

Example query filters:

```json
{ "class": 11 }
```

```json
{ "name": "Aarav Sharma" }
```

Important distinction: numeric values and string values are different. `{ "class": 11 }` does not match `{ "class": "11" }`.

### 6. Data Modelling

Studied two approaches:

**Embedding:** Store closely related information inside a document.

**Referencing:** Store related records separately and connect them through identifiers.

For Visual Labs, independently growing student progress and experiment records are candidates for separate collections connected through identifiers such as `userId`.

### 7. Indexes

Studied how indexes improve query efficiency.

An ascending index uses `1`; a descending index uses `-1`.

A unique index enforces uniqueness for indexed values, such as student email addresses.

A unique email index is a proposed production requirement. It should be created after checking existing data for duplicates.

### 8. Application to Visual Labs

MongoDB can support:

- Student accounts
- Guest sessions
- Experiment states
- Saved configurations
- Question attempts
- Concept progress
- Learning activities

The proposed architecture separates frontend interaction, backend business logic and persistent database storage.

React handles interactive simulations. Node.js and Express will provide APIs and validation. MongoDB will persist student-related information.

Experiment calculations should remain in application logic rather than being performed by the database.

### 9. Important Design Considerations

- Backend validation must be authoritative.
- Student records must be isolated by authenticated identity.
- Experiment state and explicitly saved configurations are separate concepts.
- Autosaving should avoid unnecessary writes.
- Progress events and derived progress summaries should be designed carefully.
- Indexes should reflect actual query patterns.
- Database transactions require a replica set or sharded cluster for multi-document transactions.

### 10. Completion Summary

Completed:
- Local MongoDB server setup.
- MongoDB Compass connection.
- Database and collection creation.
- Document insertion.
- Read queries and filters.
- Document update and deletion.
- Field-value understanding.
- Embedding versus referencing.
- Index and unique-index fundamentals.
- Application of MongoDB concepts to Visual Labs.

### 11. Next Learning Stage

**Day 08 — SQL and PostgreSQL**

The next stage will introduce relational database fundamentals and compare relational modelling with MongoDB's document-oriented approach.

---

**End of Day 07 Learning Report**