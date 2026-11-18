# Day 04 — React Fundamentals and Visual Labs UI Architecture Redesign

**Project:** Visual Labs for Learning Science  
**Developer:** AMAN SYED  
**Day:** 04  
**Focus:** React Components, Props, State, Events, Callbacks, Controlled Components, Reusable Components, and UI Architecture Redesign

---

## 1. Day 04 Overview

Day 04 focused on understanding the fundamental concepts of React and applying them to the Visual Labs for Learning Science project.

The learning session covered how React applications are structured using components, how data is transferred between components through props, how state manages changing information, and how callbacks allow child components to communicate user interactions to their parent components.

These concepts were applied practically by extracting a reusable `ParameterSlider` component and improving the subject-selection callback mechanism.

Alongside the React learning activities, the main Visual Labs application underwent a significant UI and navigation restructuring. The earlier interface was reorganized into a guided learning journey that takes students from the home page to class selection, subject selection, experiment libraries, and individual experiment dashboards.

The six existing scientific simulations were retained and integrated into the redesigned application structure.

---

## 2. Learning Objectives

The primary learning objectives were:

1. Understand React components and component composition.
2. Understand parent-child relationships between components.
3. Learn how props transfer information between components.
4. Understand state management using the `useState` Hook.
5. Learn how event handlers respond to user interactions.
6. Understand callback functions and communication between components.
7. Learn controlled components using range inputs.
8. Understand React's re-rendering process.
9. Identify repeated UI elements and extract reusable components.
10. Apply these concepts to the existing Visual Labs application.

---

## 3. React Concepts Studied

### 3.1 React Components

A component is an independent, reusable part of a React application's user interface.

Instead of writing an entire application inside one large component, React allows developers to divide the interface into smaller components.

Examples from Visual Labs include:

- Navbar
- Footer
- SubjectCard
- SubjectSection
- ParameterSlider
- ProjectileSimulation
- PendulumSimulation

**Simple example:**

```jsx
function Welcome() {
  return <h1>Welcome to Visual Labs</h1>;
}

function App() {
  return <Welcome />;
}
```

Here, `Welcome` is a component, and `App` renders it.

### 3.2 Component Composition and Parent-Child Relationships

Component composition means combining smaller components to create a larger interface.

For example, a subject section can contain multiple subject cards. A complete page can combine navigation, content sections, and a footer.

The component that renders another component acts as its parent in that particular component relationship.

This structure makes applications easier to organize, maintain, and extend.

### 3.3 Props

Props are used to pass information from a parent component to a child component.

They allow components to receive data and functions from other components.

**Simple example:**

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <Greeting name="Student" />;
}
```

Here:

- `App` is the parent.
- `Greeting` is the child.
- `name` is a prop.
- The parent provides the value, and the child displays it.

React generally follows one-way data flow: information is passed from parent to child.

### 3.4 State and useState

State is information that a component remembers and manages over time.

When state changes, React updates the affected interface by rendering it again.

The `useState` Hook allows function components to maintain state.

**Simple example:**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

In this example:

- `count` stores the current value.
- `setCount` updates the value.
- `useState(0)` initializes the value to zero.
- React renders the updated value after the state changes.

In Visual Labs, simulation components own experiment-specific state, such as projectile velocity, launch angle, pendulum length, and titrant volume.

### 3.5 Events and Event Handlers

Events represent user interactions with an application.

Examples include:

- Clicking a button.
- Moving a slider.
- Selecting a subject.
- Changing an input value.

An event handler is a function that executes when an event occurs.

**Simple example:**

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

Here, `handleClick` handles the button-click event.

### 3.6 Callback Functions

A callback is a function passed to another function or component so that it can be executed later.

In React, callback props are commonly used for communication from child components to parent components.

For example, a parent passes a function to a child. When the user interacts with the child, the child invokes that function. The parent then decides how to update its state.

The important concept is:

- Props transfer data from parent to child.
- Callback functions allow children to report interactions to parents.
- The parent retains ownership of its state.

### 3.7 Controlled Components

A controlled component is an input whose current value is managed by React state.

For example, a range slider receives its current value through a `value` prop and reports changes through an `onChange` callback.

In Visual Labs:

1. The simulation component owns the parameter value.
2. The parent passes the value to the slider.
3. The slider displays the value.
4. When the user moves the slider, it invokes the callback.
5. The parent updates its state.
6. React renders the updated value and dependent simulation output.

This keeps the input and simulation calculations synchronized.

### 3.8 React Re-rendering

Re-rendering is the process through which React updates the component output when relevant state or props change.

The interaction cycle studied was:

1. The user changes a slider.
2. The slider invokes its callback.
3. The parent updates its state.
4. React renders the affected component again.
5. The updated value appears in the interface.
6. Dependent simulation calculations use the new value.

Understanding this cycle is important when building interactive scientific simulations.

---

## 4. Practical React Implementation

### 4.1 Creating a Reusable ParameterSlider Component

During the project audit, repeated range-slider UI was identified across five simulation components.

Instead of maintaining similar slider markup separately, a reusable component was extracted.

**Created file:**

`src/components/common/ParameterSlider.jsx`

The component accepts configuration through props, including:

- `id`
- `label`
- `value`
- `min`
- `max`
- `step`
- `unit`
- `displayValue`
- `ticks`
- `onChange`

The parent simulation component owns the actual parameter state. The reusable slider is responsible for displaying the input and reporting changes.

**Seven slider instances were integrated across five simulations:**

| Simulation | Parameters |
|---|---|
| Projectile Motion | Initial velocity and launch angle |
| Mole Concept | Amount of substance in moles |
| Simple Pendulum | Length and initial angle |
| Acid–Base Titration | Titrant volume |
| Enzyme Activity | Substrate concentration |

An important implementation detail is that browser range-input values are received as strings. The implementation converts them using `Number(...)` before passing them to the parent component.

This ensures that simulation state receives numeric values rather than strings.

JavaScript uses floating-point numbers, so some decimal fractions cannot be represented with perfect binary precision.

### 4.2 Improving Subject Selection Through Callback Props

The subject-selection interaction was also improved.

Previously, `SubjectCard` emitted a display name through its callback, while `SubjectSection` adapted that value into the application's active-tab identifier.

The interaction was simplified so that:

- `SubjectCard` receives the subject's stable identifier.
- The selection callback is passed directly.
- The child reports the identifier when selected.
- The parent updates the active simulation tab.

The identifiers used are:

- `physics`
- `chemistry`
- `biology`

This is more reliable than using display labels as application identifiers because visible text can change independently of application logic.

---

## 5. Major UI and Navigation Redesign

A major part of Day 04 involved reorganizing the main Visual Labs interface.

The objective was to create a clearer learning journey rather than making students navigate through a less structured collection of content.

The redesigned application follows a multi-level navigation structure.

### 5.1 New Learning Journey

The main navigation hierarchy is:

**Home → Classes → Class 11 → Subjects → Experiment Library → Experiment Dashboard**

Each level has a specific responsibility.

**1. Home Page**

The landing page introduces the Visual Labs platform and provides the starting point for students.

**2. Classes Page**

Provides the class-selection entry point.

**3. Class 11 Page**

Provides access to the currently supported Class 11 learning area.

**4. Subject Selection Page**

Organizes learning content into three subjects:

- Physics
- Chemistry
- Biology

**5. Experiment Library Page**

Displays the experiments available under the selected subject.

**6. Experiment Dashboard**

Opens the workspace for the selected experiment.

This structure makes the application more organized and gives students a clearer understanding of where they are in the learning process.

### 5.2 New Experiment Dashboard Structure

Each experiment dashboard is organized into five sections:

| Section | Purpose |
|---|---|
| Theory | Understand the scientific concepts behind the experiment. |
| Practical | Explore the practical activity and its context. |
| Simulation | Interact with the scientific simulation. |
| Observations | Work with experiment observations. |
| Results | View and interpret the results section. |

The intention is to connect theoretical learning, practical activities, interactive exploration, observations, and results within one experiment-specific workspace.

### 5.3 Routing Architecture

The redesign introduced a routing layer to manage navigation between different pages.

Important files include:

- `src/router/routeMatcher.js`
- `src/router/RouterContext.jsx`

The route-matching module identifies supported paths and determines which page should be displayed.

The router context provides the current route and navigation context to the application.

Invalid paths are directed to a dedicated Not Found page.

The reported route verification covered:

- 12 valid routes.
- 23 invalid-route cases.

These checks help ensure that supported pages resolve correctly and invalid paths do not display unrelated content.

### 5.4 Shared Layout Components

The redesign introduced reusable layout components.

| Component | Responsibility |
|---|---|
| Navbar | Primary application navigation. |
| Breadcrumbs | Shows the learner's current position in the navigation hierarchy. |
| Footer | Shared footer across pages. |

These components reduce duplication and provide consistent layout behavior.

### 5.5 New Page Components

The following page-level components were introduced:

| File | Responsibility |
|---|---|
| `HomePage.jsx` | Landing page |
| `ClassSelectionPage.jsx` | Class selection |
| `SubjectSelectionPage.jsx` | Subject selection |
| `ExperimentLibraryPage.jsx` | Subject-specific experiment collection |
| `ExperimentDashboardPage.jsx` | Experiment workspace |
| `NotFoundPage.jsx` | Invalid-route destination |

The experiment information is organized in:

`src/data/experimentsData.js`

This central data structure helps maintain consistent experiment and subject identifiers across the application.

### 5.6 Integration of Existing Scientific Simulations

All six existing simulations were mapped into the redesigned experiment dashboard structure.

| Subject | Experiment | Simulation Component |
|---|---|---|
| Physics | Projectile Motion | ProjectileSimulation |
| Physics | Simple Pendulum | PendulumSimulation |
| Chemistry | Mole Concept | MoleConceptSimulation |
| Chemistry | Acid–Base Titration | TitrationSimulation |
| Biology | Plant Kingdom | PlantKingdomSimulation |
| Biology | Enzyme Activity | EnzymeSimulation |

The migration record reported that five of the six simulation component files were byte-for-byte unchanged.

The Plant Kingdom simulation received display-text improvements to make its diagnostic descriptions more complete.

The existing scientific simulation calculations and formulas were otherwise retained according to the migration review.

---

## 6. Main Project Files Involved

The following files and directories are important parts of the Day 04 implementation.

| File or Directory | Responsibility |
|---|---|
| `src/App.jsx` | Top-level application composition |
| `src/App.css` | Main layout and styling |
| `src/router/routeMatcher.js` | Route matching |
| `src/router/RouterContext.jsx` | Route and navigation context |
| `src/data/experimentsData.js` | Experiment metadata |
| `src/components/layout/Navbar.jsx` | Navigation component |
| `src/components/layout/Breadcrumbs.jsx` | Breadcrumb navigation |
| `src/components/layout/Footer.jsx` | Shared footer |
| `src/pages/` | Page-level components |
| `src/components/common/ParameterSlider.jsx` | Reusable slider |
| `src/components/SubjectCard.jsx` | Subject card and selection interaction |
| `src/components/SubjectSection.jsx` | Subject section and callback integration |
| `src/components/simulations/` | Scientific simulation components |

---

## 7. Testing and Verification

The implementation and migration were reviewed through build, lint, route, and code-level checks.

The recorded verification results were:

| Verification | Result |
|---|---|
| Production build | Passed |
| Build errors | 0 |
| Oxlint errors | 0 |
| Fast Refresh warnings | 2 |
| Valid routes checked | 12 |
| Invalid-route cases checked | 23 |
| Internal navigation links reported | 34 |
| Simulations integrated | 6 |

### Responsive and Browser Testing Limitations

Responsive CSS rules and breakpoints were inspected statically.

However, formal browser-based desktop and mobile visual testing was not available in the recorded QA process.

Therefore, the build and static checks should not be interpreted as proof that every page has been visually tested at all screen sizes.

A future browser QA pass should verify:

- Navigation behavior.
- Page layout at desktop and mobile widths.
- Experiment dashboard interactions.
- Breadcrumb navigation.
- Slider interactions.
- Invalid-route behavior.

---

## 8. Important Engineering Lessons

The main lessons from Day 04 were:

1. Components divide an application into reusable units.
2. Props allow parent components to configure child components.
3. State should belong to the component responsible for managing the data.
4. Callback props allow child components to communicate user interactions to parents.
5. Controlled components keep inputs synchronized with React state.
6. Reusable components reduce repeated UI code.
7. Stable identifiers are safer than display labels for application logic.
8. Routing, page composition, layout components, experiment data, and simulation logic should have distinct responsibilities.
9. A successful build does not replace browser-based visual testing.

---

## 9. Day 04 Knowledge Check

The following questions can be used to evaluate understanding of the concepts covered.

1. What is the difference between props and state?
2. Why should the simulation component own the slider value?
3. What is a callback prop, and why is it useful?
4. What makes a controlled component different from an ordinary input?
5. What happens after a React state update?
6. Why is a stable subject identifier better than using visible text?
7. What is the responsibility of the route-matching module?
8. Why were the experiment dashboards divided into five learning sections?
9. What is the difference between a successful production build and browser visual QA?

---

## 10. Day 04 Completion Summary

Day 04 established practical understanding of React's component model and interaction flow.

The learning concepts were applied to the Visual Labs project through reusable simulation controls and improved subject-selection communication.

The main application UI was also reorganized into a guided learning platform with:

- A multi-level class and subject navigation structure.
- Dedicated experiment libraries.
- Experiment-specific dashboards.
- Theory, Practical, Simulation, Observations, and Results sections.
- Reusable navigation and layout components.
- Route matching and invalid-route handling.
- Integration of all six existing scientific simulations.

The redesign changed the organization and navigation of the application while preserving the existing scientific simulation work.

### Next Roadmap Step

The next topic in the original 15-day roadmap is:

**Day 05 — Styling Systems and Responsive Design Fundamentals**

Since the current UI is being treated as frozen until the final project stage, the next learning session should focus on understanding and auditing the existing styling system rather than making discretionary visual changes.

---

## Project Attribution

**Developer:** AMAN SYED  
**Project:** Visual Labs for Learning Science