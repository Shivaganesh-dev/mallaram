---
phase: 02
plan: 02-sections
type: feature
autonomous: true
wave: 1
depends_on: [01-foundation]
requirements: [UI-01, UI-02, UI-03, UI-04]
---

# Phase 02 Plan: Static Sections

**Objective:** Hero + About + Facilities — core page sections with content

**Context:** @ROADMAP.md — Design System, PRD Section 6

---

## Tasks

### Task 1: Hero Section

**Type:** `component:hero`

**Requirements:** `[UI-01]`

**Behavior:**
- Create Hero component with village name, tagline, subtitle
- Add image slider (auto + manual navigation)
- Add CTA button for complaints
- Add Language toggle

**Implementation:**

- Hero component: `components/Hero/Hero.tsx`
- Image slider with 3-5 placeholder images
- Smooth fade transitions using Framer Motion

**Verification:**
- Village name "Mallaram" displays
- Tagline "Mana Ooru" displays
- Image slider auto-advances every 5 seconds
- Manual navigation (prev/next) works
- CTA button visible and styled

**Blocked by:** Foundation complete

---

### Task 2: About Village Section

**Type:** `component:about`

**Requirements:** `[UI-02]`

**Behavior:**
- Create About component with village overview
- Include Smart Village recognition mention
- Describe natural beauty

**Implementation:**

- About component: `components/About/About.tsx`
- Two-column layout (text + placeholder image)
- Content from PRD section 6.2

**Verification:**
- Section title renders via i18n
- Description text displays correctly

---

### Task 3: Facilities Section

**Type:** `component:facilities`

**Requirements:** `[UI-03]`

**Behavior:**
- Create Facilities component with 5 items
- Display: Schools, Healthcare, Roads, Water, Electricity
- Grid layout for mobile-first

**Implementation:**

- Facilities component: `components/Facilities/Facilities.tsx`
- Icon + label for each facility
- Responsive grid (2 cols mobile, 3 tablet, 5 desktop)

**Verification:**
- All 5 facilities display
- Icons render correctly
- Responsive layout works

---

### Task 4: Navigation Header

**Type:** `component:navigation`

**Requirements:** `[UI-04]`

**Behavior:**
- Create Navigation component
- Include all nav links from PRD
- Language toggle integrated

**Implementation:**

- Navigation component: `components/Navigation/Navigation.tsx`
- Sticky header with backdrop blur
- Mobile hamburger menu

**Verification:**
- All navigation links present
- Language toggle renders and switches locale
- Sticky behavior works

---

## Success Criteria

- [ ] Hero section with image slider + CTA
- [ ] About section with village overview
- [ ] Facilities section with 5 items (grid)
- [ ] Navigation with language toggle
- [ ] All sections use i18n translations
- [ ] All requirements: UI-01, UI-02, UI-03, UI-04

---

## Output Spec

**Files created:**
- `components/Hero/Hero.tsx`
- `components/About/About.tsx`
- `components/Facilities/Facilities.tsx`
- `components/Navigation/Navigation.tsx`

**Files modified:**
- `app/[locale]/page.tsx`

---

## Summary One-Liner

Static Sections — Hero with slider, About, Facilities grid, Navigation with language toggle