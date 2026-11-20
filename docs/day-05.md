# Day 05 — CSS Fundamentals, Responsive Design and Styling Systems

**Project:** Visual Labs for Learning Science  
**Developer:** AMAN SYED  
**Date:** 19 November 2026  
**Learning Phase:** Frontend Development

---

## 1. Objective

The objective of Day 05 was to understand the CSS fundamentals that control the appearance, layout, and responsiveness of the Visual Labs application.

The focus was on understanding the existing styling system and learning how CSS rules work together, rather than making unnecessary changes to the project's established UI.

## 2. Concepts Covered

### 2.1 CSS Fundamentals

Learned the basic structure of a CSS rule:

- Selector — identifies the HTML element to style.
- Property — identifies what aspect should change.
- Value — specifies how that property should appear.

### 2.2 CSS Box Model

Studied the four parts of the CSS Box Model:

- Content
- Padding
- Border
- Margin

Understood the difference between `content-box` and `border-box`, including how padding and borders affect an element's final dimensions.

### 2.3 Flexbox and CSS Grid

Learned when to use different layout systems:

- Flexbox is primarily used for one-dimensional layouts, either a row or a column.
- CSS Grid is designed for two-dimensional layouts involving rows and columns.

### 2.4 Responsive Web Design

Studied responsive design and how websites adapt to different viewport sizes.

Learned how media queries apply styling rules based on viewport conditions:

- `max-width` applies at the specified width and below.
- `min-width` applies at the specified width and above.
- Multiple media queries can match simultaneously; the CSS cascade determines the final applied styles.

### 2.5 CSS Variables and Design Tokens

Understood the difference between design tokens and CSS variables:

- A design token represents a reusable design decision, such as a primary colour.
- A CSS variable is a mechanism for storing and reusing that value.

Inspected the existing `:root` variables in `src/index.css`, including the project's background, forest, sage, terracotta, and charcoal colour values.

### 2.6 CSS Specificity

Studied how CSS determines which selector takes precedence.

Reviewed the general specificity order:

1. ID selectors
2. Class, attribute, and pseudo-class selectors
3. Element and pseudo-element selectors

Also learned that specificity is considered alongside other cascade rules.

### 2.7 CSS Inheritance

Learned that some CSS properties, such as `color` and `font-family`, generally inherit from parent elements, while properties such as `margin` and `padding` generally do not.

### 2.8 CSS Cascade

Studied how the browser determines the final style when multiple CSS declarations target the same element.

Reviewed the roles of importance, origin and cascade layers, specificity, and source order.

## 3. Practical Work in Visual Labs

The learning and inspection work was performed directly in the main Visual Labs project.

**Files inspected:**

- `src/index.css` — inspected the global `:root` design variables.
- `src/App.css` — inspected the existing responsive media queries.

**Responsive breakpoints reviewed:**

| Breakpoint | Purpose observed |
|---|---|
| 1024px | Adjusts larger layouts, including the hero, subject grid, simulation showcase, philosophy section, and footer |
| 768px | Switches navigation behaviour for smaller screens and adjusts typography, simulation layout, and footer |
| 640px | Adjusts container spacing, section spacing, academic badges, and the simulation scope bar |

The existing responsive styling was reviewed to understand how the application adapts to different screen sizes.

## 4. Responsive Testing

A 390px viewport was tested.

The user reported the following observations:

- Navigation was functioning.
- No unexpected horizontal overflow was observed.
- Text remained readable.

Broader responsive checks had also been performed earlier, according to the project session.

**Note:** These are user-reported test observations, not an independently generated browser test report.

## 5. Code Changes

No CSS or UI modifications were made during Day 05.

This was intentional: the objective was to understand and inspect the existing styling architecture without making unnecessary changes to the established Visual Labs interface.

## 6. Key Learning Outcomes

By the end of Day 05, the following concepts were covered:

- CSS syntax and the Box Model.
- `content-box` and `border-box`.
- Flexbox and CSS Grid.
- Responsive design and viewport behaviour.
- Media queries and cumulative breakpoint matching.
- CSS variables and design tokens.
- CSS specificity and inheritance.
- The CSS cascade and source order.

## 7. Project Status

- Existing design system inspected.
- Global CSS variables identified.
- Responsive media queries reviewed.
- 390px viewport behaviour checked.
- No unnecessary UI changes introduced.
- Main Visual Labs project remains the source of truth.

## 8. Next Learning Stage

**Day 06 — Database Fundamentals and Data Modelling**

The next session will introduce database concepts and data modelling, connecting them to the needs of Visual Labs. The goal is to understand how experiment information, educational content, and application data can be organised and stored.

---

**Day 05 Status: COMPLETED**

**Project:** Visual Labs for Learning Science  
**Developer Attribution:** AMAN SYED