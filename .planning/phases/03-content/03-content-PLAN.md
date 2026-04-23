---
phase: 03
plan: 03-content
type: feature
autonomous: true
wave: 1
depends_on: [02-sections]
requirements: [UI-05, UI-06, UI-07]
---

# Phase 03 Plan: Content Sections

**Objective:** Gallery + Events + Footer — visual storytelling and navigation

**Context:** @ROADMAP.md — PRD Section 6.4, 6.5, 6.8

---

## Tasks

### Task 1: Gallery Section

**Type:** `component:gallery`

**Requirements:** `[UI-05]`

**Behavior:**
- Create Gallery component with grid/masonry layout
- Display village images in responsive grid
- Lazy loading for performance

**Implementation:**

- Gallery component: `components/Gallery/Gallery.tsx`
- Grid layout: 2 cols mobile, 3 tablet, 4 desktop
- Placeholder images from Unsplash
- Simple hover effect on images

**Verification:**
- Gallery renders with multiple images
- Responsive grid works
- Lazy loading implemented

**Blocked by:** Phase 02 complete

---

### Task 2: Events Section

**Type:** `component:events`

**Requirements:** `[UI-06]`

**Behavior:**
- Create Events component
- Display festivals and local events
- Card layout for events

**Implementation:**

- Events component: `components/Events/Events.tsx`
- Event cards with images and descriptions
- Responsive layout (1 col mobile, 2 cols tablet)

**Verification:**
- Events section displays
- Cards show festival/event info
- Responsive layout works

---

### Task 3: Footer

**Type:** `component:footer`

**Requirements:** `[UI-07]`

**Behavior:**
- Create Footer component
- Include copyright, quick links, language toggle

**Implementation:**

- Footer component: `components/Footer/Footer.tsx`
- Three-column layout (logo, links, language)
- Responsive (stack on mobile)

**Verification:**
- Footer renders in all pages
- Quick links work
- Language toggle in footer

---

## Success Criteria

- [ ] Gallery section with responsive image grid
- [ ] Events section with event cards
- [ ] Footer with quick links + language toggle
- [ ] All sections use i18n
- [ ] All requirements: UI-05, UI-06, UI-07

---

## Output Spec

**Files created:**
- `components/Gallery/Gallery.tsx`
- `components/Events/Events.tsx`
- `components/Footer/Footer.tsx`

**Files modified:**
- `app/[locale]/page.tsx`

---

## Summary One-Liner

Content Sections — Gallery with image grid, Events with cards, Footer with links