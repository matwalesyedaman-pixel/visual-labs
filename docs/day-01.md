# VISUAL LABS FOR LEARNING SCIENCE
## DAY 01 — COMPREHENSIVE PROJECT DEVELOPMENT REPORT

**Project:** Visual Labs for Learning Science  
**Report Period:** Day 1 — Project Foundation and Initial Implementation  
**Project Category:** Educational Technology / Interactive Science Learning  
**Development Environment:** Windows, Visual Studio Code, React, Vite  
**Version Control:** Git and GitHub  
**Repository:** https://github.com/matwalesyedaman-pixel/visual-labs  
**Branch:** `master`  
**Development Status:** Initial foundation established; further functional and academic verification required.

---

# 1. EXECUTIVE SUMMARY

Visual Labs for Learning Science is an interactive educational web application intended to make science concepts easier to understand through structured learning content, visual demonstrations and interactive simulations.

The initial development phase focused on establishing the application foundation, selecting the frontend technology stack, understanding the React application structure, organizing the codebase into reusable components and developing the first set of subject-oriented learning interfaces.

The project was initialized using React and Vite. Its initial application architecture was subsequently organized into modular interface sections, subject data and individual simulation components.

The initial development established the following foundations:

- React-based application structure.
- Modular frontend component architecture.
- Separate curriculum data organization.
- Physics, Chemistry and Biology learning sections.
- Initial interactive simulation components.
- A consistent visual design direction.
- Development and production-build verification.
- Git version control and remote repository publication.

The work established a foundation for further development. The next phase focuses on improving the actual learning experience, verifying interactions, refining the interface and aligning educational activities with the selected Class 11 NCERT curriculum.

# 2. PROJECT VISION AND OBJECTIVES

## 2.1 Vision

To develop a science-learning platform that helps students understand scientific concepts through visual representation, interactive exploration and structured explanations rather than relying exclusively on text-based learning.

## 2.2 Core Objectives

1. Develop an accessible, structured science-learning website.
2. Organize educational content into Physics, Chemistry and Biology.
3. Present scientific concepts through visual and interactive learning experiences.
4. Develop reusable frontend components for future expansion.
5. Establish a foundation for curriculum-aligned educational modules.
6. Prepare the architecture for future learning-assistant functionality.
7. Maintain a structured and maintainable codebase.

## 2.3 Target Learning Experience

The intended platform experience combines:

- Subject-based navigation.
- Structured educational content.
- Visual demonstrations.
- Interactive scientific simulations.
- Guided explanations.
- Future AI-assisted learning support.

These are the product objectives; not all capabilities are implemented or verified at this stage.

# 3. DEVELOPMENT ENVIRONMENT

The initial development environment was established on Windows.

| Component | Version / Configuration | Purpose |
|---|---|---|
| Operating System | Windows | Development environment |
| Code Editor | Visual Studio Code | Source-code development |
| Runtime | Node.js v26.11.1 | JavaScript execution environment |
| Package Manager | npm 11.20.0 | Dependency management |
| Version Control | Git 2.56.0.windows.2 | Source-code tracking |
| Frontend Framework | React | Component-based application development |
| Build Tool | Vite 8.3.5 | Development server and production build |
| Linter | Oxlint | Static code analysis |
| Browser | Google Chrome | Application testing |

## 3.1 Project Initialization

The application was scaffolded using the Vite React template.

```bash
npm create vite@latest visual-labs -- --template react
```

The project dependencies were installed and the local development server was started.

```bash
npm run dev
```

The local development address was:

`http://localhost:5173/`

## 3.2 Environment Configuration Issue

An initial PowerShell execution-policy restriction prevented the npm PowerShell script from running.

The issue was addressed using a user-level execution-policy configuration:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

The environment was subsequently checked using:

```bash
node --version
npm --version
git --version
```

The local development server also encountered an `ERR_CONNECTION_REFUSED` browser error. The issue was resolved by restarting the Vite development server and reloading the application.

# 4. TECHNOLOGY STACK

## 4.1 Frontend Technologies

**React**

Used to structure the application into reusable functional components and manage interface state.

**JavaScript**

Used for application logic, data handling, event handling and simulation calculations.

**HTML**

Provides the underlying document structure through the React application entry point.

**CSS**

Used for layout, typography, spacing, responsive presentation and visual styling.

## 4.2 Development and Build Tools

**Vite**

Provides the development server and production build process.

**Node.js and npm**

Provide the JavaScript runtime and package-management environment.

**Oxlint**

Used for static analysis and identifying potential code-quality issues.

## 4.3 Version Control

**Git** maintains the local development history.

**GitHub** hosts the remote project repository.

## 4.4 Architecture Considerations

The current implementation is frontend-focused.

Backend services, persistent storage, database integration, deployment infrastructure and AI API integration remain future development areas.

The final database architecture has not been established. MongoDB and PostgreSQL should only be introduced if their respective data requirements justify their use.

# 5. INITIAL REACT APPLICATION STRUCTURE

The initial React project was inspected to understand how the application starts and how its main files work together.

The primary application flow is:

`index.html → src/main.jsx → src/App.jsx → Application Components`

## 5.1 Main Application Files

| File | Responsibility |
|---|---|
| `index.html` | Main HTML document and React root element |
| `src/main.jsx` | React entry point |
| `src/App.jsx` | Root application component |
| `src/App.css` | Application-level styling |
| `src/index.css` | Global styling |
| `package.json` | Project dependencies, metadata and scripts |
| `package-lock.json` | Resolved dependency information |
| `vite.config.js` | Vite configuration |
| `.gitignore` | Files excluded from Git tracking |
| `.oxlintrc.json` | Oxlint configuration |

## 5.2 React Entry Point

The React entry point uses `createRoot` to connect the React application to the browser document.

The initial application structure uses:

- React's `StrictMode`.
- ReactDOM's `createRoot`.
- The HTML element identified by `root`.
- The main `App` component.

This establishes the rendering connection between the HTML document and the React component tree.

## 5.3 Core React Concepts Covered

The following concepts were introduced and applied:

**Functional Components:** JavaScript functions that return React UI.

**JSX:** A JavaScript syntax extension used to describe interface elements.

**Fragments:** Used to group elements without introducing an additional DOM element.

**Props:** Used to pass information from parent components to child components.

**State:** Used to represent data that can change during application interaction.

**useState:** React Hook used to introduce component state.

**Event Handling:** Used to respond to user actions such as button clicks.

**Component Composition:** Used to assemble larger interfaces from smaller reusable components.

# 6. FRONTEND ARCHITECTURE AND CODE ORGANIZATION

As the application developed, the initial interface structure was reorganized into smaller components with separate responsibilities.

The reported application structure is:

```text
visual-labs/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── public/
│
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    │
    ├── assets/
    │
    ├── data/
    │   └── curriculumData.js
    │
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── SubjectCard.jsx
        ├── SubjectSection.jsx
        ├── SimulationShowcase.jsx
        ├── PhilosophySection.jsx
        ├── Footer.jsx
        │
        └── simulations/
            ├── PendulumSimulation.jsx
            ├── TitrationSimulation.jsx
            └── EnzymeSimulation.jsx
```

*Note: This is the structure recorded in the implementation handoff, not a fresh inspection of every file.*

## 6.1 Root Application Component

`App.jsx` acts as the root application orchestrator.

Its responsibility is to compose the major application sections rather than contain all interface logic and presentation in one large component.

## 6.2 Curriculum Data

`curriculumData.js` separates curriculum-related information from the visual components.

This supports a cleaner separation between educational content and its presentation.

## 6.3 Reusable Interface Components

The following components were created or reported as part of the modular implementation:

| Component | Responsibility |
|---|---|
| `Navbar.jsx` | Main navigation interface |
| `Hero.jsx` | Main introductory section |
| `SubjectCard.jsx` | Reusable subject presentation |
| `SubjectSection.jsx` | Subject-related content section |
| `SimulationShowcase.jsx` | Simulation presentation section |
| `PhilosophySection.jsx` | Project philosophy and educational approach |
| `Footer.jsx` | Footer section |

## 6.4 Simulation Components

Individual simulation components were separated into their own files under:

`src/components/simulations/`

This organization allows individual scientific learning modules to be maintained and refined independently.

# 7. VISUAL DESIGN SYSTEM

## 7.1 Design Direction

The initial visual direction was established as:

**Natural Editorial + Modern Academic**

The design emphasizes a calm, readable and academically oriented interface.

The intention is to avoid an overly decorative appearance and provide an environment suitable for extended educational use.

## 7.2 Colour Palette

| Colour | Hex Code | Intended Use |
|---|---|---|
| Warm Ivory | `#faf8f3` | Primary background |
| Forest Green | `#1b3a2b` | Primary dark accent |
| Sage Green | `#496b56` | Secondary accent |
| Muted Beige | `#f3efe6` | Supporting surfaces |
| Charcoal | `#232724` | Primary text |

## 7.3 Typography and Presentation

The reported design direction includes:

- Editorial-style serif headings.
- Clear and readable body text.
- Restrained borders.
- Natural shadows.
- Consistent spacing.
- A balanced visual hierarchy.

The visual identity should remain consistent during subsequent development unless a redesign is deliberately approved.

# 8. INITIAL SCIENCE LEARNING MODULES

Three simulation components were included in the initial implementation report.

These represent initial simulation work, not a completed or academically validated simulation library.

## 8.1 Physics — Pendulum Simulation

The reported pendulum simulation uses the mathematical relationship between pendulum length, gravitational acceleration and oscillation period.

The small-angle approximation is:

\[
T_0 = 2\pi\sqrt{\frac{L}{g}}
\]

A first-order finite-amplitude correction was also reported:

\[
T \approx 2\pi\sqrt{\frac{L}{g}}
\left(1+\frac{\theta_0^2}{16}\right)
\]

Where:

- \(T\) = oscillation period.
- \(L\) = pendulum length.
- \(g\) = gravitational acceleration.
- \(\theta_0\) = initial angular amplitude in radians.

The reported implementation also includes frequency:

\[
f = \frac{1}{T}
\]

The gravitational acceleration options were reported as:

| Environment | Gravitational Acceleration |
|---|---:|
| Earth | 9.81 m/s² |
| Moon | 1.62 m/s² |
| Mars | 3.72 m/s² |

**Verification note:** The displayed mathematical labels were previously observed rendering literal notation such as `($L$)` and `($\theta$)` rather than formatted mathematical expressions. This presentation issue requires further review.

## 8.2 Chemistry — Acid-Base Titration Simulation

The reported initial titration model uses:

| Parameter | Value |
|---|---:|
| Acid | HCl |
| Base | NaOH |
| Acid concentration | 0.100 M |
| Base concentration | 0.100 M |
| Initial acid volume | 25.0 mL |
| Temperature | 25°C |
| Water ionization constant | \(10^{-14}\) |

The model calculates pH using the excess acid or base concentration.

The reported expression for hydrogen-ion concentration is:

\[
[H^+] =
\frac{\Delta+\sqrt{\Delta^2+4K_w}}{2}
\]

Where:

- \(\Delta\) represents the acid-equivalent concentration difference.
- \(K_w\) represents the ionization constant of water.

For equal acid and base concentrations, the reported equivalence volume is 25 mL, with an equivalence-point pH of 7.00 under the stated idealized conditions.

**Verification note:** A browser runtime error was observed in `TitrationSimulation.jsx` at line 51:

`Uncaught ReferenceError: H is not defined`

A subsequent implementation report stated that a string-serialization correction addressed the error. Static checks reportedly passed afterward, but a successful browser interaction following the correction was not independently confirmed. This module must be retested.

## 8.3 Biology — Enzyme Kinetics Simulation

The reported enzyme kinetics model uses the Michaelis–Menten equation:

\[
V = \frac{V_{\max}[S]}{K_m+[S]}
\]

Reported parameters:

| Parameter | Value |
|---|---:|
| Maximum reaction velocity | 120 μmol/min |
| Michaelis constant | 3.0 mM |

The model is intended to demonstrate how reaction velocity changes with substrate concentration and approaches the maximum reaction velocity.

**Verification note:** The implementation and its scientific behaviour require further browser testing and academic review.

# 9. ACADEMIC CURRICULUM DIRECTION

The educational scope was subsequently defined around the Class 11 NCERT curriculum.

The selected chapters are:

| Subject | NCERT Chapter | Chapter Title |
|---|---:|---|
| Physics | Chapter 4 | Motion in a Plane |
| Chemistry | Chapter 1 | Some Basic Concepts of Chemistry |
| Biology | Chapter 3 | Plant Kingdom |

## 9.1 Physics

**Chapter:** Motion in a Plane

Future activities should focus on concepts such as:

- Scalars and vectors.
- Vector representation.
- Position and displacement.
- Velocity and acceleration in two dimensions.
- Motion in a plane.
- Projectile motion.

A projectile-motion visualization is a proposed direction for the Physics learning module.

## 9.2 Chemistry

**Chapter:** Some Basic Concepts of Chemistry

Future learning activities should focus on:

- Nature of matter.
- Laws of chemical combination.
- Dalton's atomic theory.
- Atomic and molecular masses.
- Mole concept.
- Molar mass.
- Percentage composition.
- Empirical and molecular formulae.
- Stoichiometry.

A mole-concept and particle-counting visualization is a proposed direction for the Chemistry module.

## 9.3 Biology

**Chapter:** Plant Kingdom

Future learning activities should focus on:

- Classification of plants.
- Major plant groups.
- Characteristic features of different groups.
- Comparative identification and classification.

A plant classification and specimen-exploration activity is a proposed direction for the Biology module.

## 9.4 Curriculum Alignment Requirement

All educational explanations and practical activities should remain student-friendly and aligned with the selected NCERT chapters.

Supplementary explanations and simulations should be clearly distinguished from prescribed textbook content.

The initial pendulum, titration and enzyme kinetics modules should therefore be reviewed against the selected curriculum before being treated as final chapter-aligned learning activities.

# 10. ENGINEERING CHALLENGES AND RESOLUTIONS

## 10.1 PowerShell Execution Policy

**Issue:** npm PowerShell script execution was initially restricted.

**Resolution:** A user-level execution-policy adjustment was applied.

**Outcome:** npm commands became available in the development environment.

## 10.2 Local Development Server Connection

**Issue:** Chrome displayed `ERR_CONNECTION_REFUSED` when accessing the local application.

**Cause:** The Vite development server was not available at the requested address.

**Resolution:** The development server was restarted and the page reloaded.

**Outcome:** Local application access was restored.

## 10.3 Chemistry Runtime Error

**Issue:** An undefined `H` reference caused a runtime error in the titration simulation.

**Location:** `TitrationSimulation.jsx:51:20`

**Reported resolution:** A later implementation update stated that the string-serialization issue was corrected.

**Remaining action:** Confirm the Chemistry module works in the browser and that the browser console contains no related runtime error.

## 10.4 Mathematical Label Rendering

**Issue:** Some mathematical labels appeared as literal notation instead of formatted expressions.

**Remaining action:** Review the displayed labels and use a supported presentation method that does not introduce unnecessary dependencies.

# 11. QUALITY ASSURANCE AND BUILD VERIFICATION

The implementation handoff recorded the following results.

| Verification Activity | Reported Result |
|---|---|
| Oxlint static analysis | 0 warnings and 0 errors |
| Files checked by Oxlint | 14 |
| Vite production build | Successful |
| Modules transformed | 28 |
| Additional npm dependencies | None reported |

These results indicate that the reported static analysis and production build completed successfully.

However, successful linting and compilation do not independently prove that every page, simulation or interaction works correctly in the browser.

The following verification activities remain necessary:

- Test all navigation destinations.
- Test Physics, Chemistry and Biology modules.
- Verify simulation calculations and control behaviour.
- Check browser-console errors.
- Inspect mathematical notation.
- Test responsive layouts.
- Review keyboard navigation and control labels.
- Check content accuracy against the selected NCERT chapters.

# 12. VERSION CONTROL AND REPOSITORY MANAGEMENT

Git was configured for the project and used to record the initial development milestone.

## 12.1 Repository Information

**Repository URL:**

https://github.com/matwalesyedaman-pixel/visual-labs

**Branch:** `master`

**Recorded Git author:**

Aman Syed

## 12.2 Initial Commit

**Commit ID:** `e5fec7a`

**Commit message:**

`Day 1: Visual Labs foundation and interactive simulations`

The commit was created after the initial modular implementation.

The recorded Git status showed a clean working tree following the commit.

A subsequent project checkpoint also showed the branch tracking `origin/master` and the repository up to date.

## 12.3 Version-Control Practices

The project follows a milestone-based version-control approach:

- Record meaningful development changes.
- Use descriptive commit messages.
- Review repository status before committing.
- Keep generated dependencies out of source control where appropriate.
- Maintain project documentation alongside the application.

# 13. DEVELOPMENT STATUS

The following table distinguishes established work from reported implementation and remaining verification.

| Area | Status | Notes |
|---|---|---|
| Development environment | Established | Node.js, npm, Git and Vite |
| React project initialization | Established | Vite React application |
| Initial React learning | Completed | Entry point, components, JSX and state introduced |
| Modular frontend architecture | Reported implemented | Requires current source inspection |
| Curriculum data separation | Reported implemented | `curriculumData.js` |
| Main interface components | Reported implemented | Navbar, Hero, subject sections and supporting sections |
| Physics simulation | Reported implemented | Browser and academic verification required |
| Chemistry simulation | Reported implemented | Runtime fix requires browser confirmation |
| Biology simulation | Reported implemented | Browser and academic verification required |
| Design direction | Established | Natural Editorial + Modern Academic |
| Static analysis | Reported successful | Oxlint |
| Production build | Reported successful | Vite |
| Git version control | Established | Initial commit recorded |
| Remote repository | Established | GitHub repository |
| NCERT curriculum direction | Established | Class 11 chapters selected |
| Responsive verification | Pending | Requires browser testing |
| Complete academic validation | Pending | Chapter-level review required |
| Backend and database | Not implemented | Future development |
| AI learning assistant | Not implemented | Future development |
| Deployment | Pending | Future development |

# 14. LEARNING AND DEVELOPMENT OUTCOMES

The first development phase introduced the fundamentals required to continue building a React application.

The concepts covered included:

1. Understanding the purpose of Node.js and npm.
2. Initializing a React project using Vite.
3. Understanding the relationship between HTML and the React entry point.
4. Understanding the responsibilities of React and ReactDOM.
5. Understanding the purpose of `main.jsx` and `App.jsx`.
6. Learning the structure of functional components.
7. Understanding JSX and React Fragments.
8. Understanding props and reusable components.
9. Introducing state through `useState`.
10. Understanding event handling.
11. Separating interface components and curriculum data.
12. Understanding basic Git operations and repository management.

## 14.1 Recorded Understanding Assessment

An initial assessment on the React entry point was recorded as:

**Score: 11/20 — 55%**

The assessment covered:

- Application entry point.
- React versus ReactDOM.
- DOM and React root.
- `getElementById`.
- React StrictMode.

The score identifies areas for continued practice. Rendering a component successfully should not be treated as proof of complete conceptual mastery.

Further retrieval questions and practical exercises are required to assess independent understanding.

# 15. PROJECT GOVERNANCE AND DEVELOPMENT PRINCIPLES

The following principles guide continued development:

- Maintain a modular and understandable codebase.
- Keep educational content separate from presentation logic.
- Avoid unsupported numerical claims and misleading product statements.
- Preserve the established visual identity unless a redesign is approved.
- Avoid unnecessary dependencies.
- Verify functionality in the browser rather than relying exclusively on build output.
- Maintain academic accuracy.
- Make small, reviewable changes.
- Track meaningful milestones using Git.
- Document technical decisions and unresolved issues.

# 16. NEXT DEVELOPMENT MILESTONE

The next phase focuses on improving the website's overall quality and completing the landing-page experience.

## Priority 1 — Functional Verification

- Inspect the complete landing page.
- Verify navigation links and destinations.
- Test all three subject areas.
- Retest the Chemistry simulation.
- Inspect the browser console.
- Review mathematical label rendering.

## Priority 2 — Interface Refinement

- Review spacing and alignment.
- Improve section transitions.
- Maintain typography consistency.
- Verify visual hierarchy.
- Inspect desktop, tablet and mobile layouts.

## Priority 3 — Interaction and Accessibility

- Verify button and slider behaviour.
- Check keyboard navigation.
- Review control labels.
- Check text contrast.
- Ensure interactive controls produce the expected results.

## Priority 4 — Academic Refinement

- Align Physics content with Motion in a Plane.
- Align Chemistry content with Some Basic Concepts of Chemistry.
- Align Biology content with Plant Kingdom.
- Review the relevance of the existing simulations.
- Identify suitable chapter-level interactive activities.

## Priority 5 — Documentation and Version Control

- Maintain daily development records.
- Record significant technical decisions.
- Track verified fixes and unresolved issues.
- Commit meaningful changes.
- Keep the repository documentation current.

# 17. DAY 1 CONCLUSION

The first development milestone established the technical foundation for Visual Labs for Learning Science.

The project moved from an initial React/Vite scaffold toward a modular educational application structure, with separate interface components, curriculum data organization and initial science simulation modules.

The development environment and version-control workflow were established, and the initial project milestone was recorded in Git.

The project is now positioned for further frontend refinement, functional verification and curriculum-aligned educational development.

The next phase will focus on turning the established application foundation into a reliable, responsive and academically relevant science-learning experience.

---

**PROJECT:** Visual Labs for Learning Science  
**DOCUMENT:** Day 01 — Comprehensive Project Development Report  
**REPORT STATUS:** Recorded  
**NEXT MILESTONE:** Frontend Refinement and Functional Verification

**End of Report**