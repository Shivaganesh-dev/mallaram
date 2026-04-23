---
phase: 01
plan: 01-foundation
type: feature
autonomous: true
wave: 1
depends_on: []
requirements: [TECH-01, TECH-02, TECH-03, I18N-01]
---

# Phase 01 Plan: Foundation

**Objective:** Scaffolding — project setup, routing, layout, design system, i18n core

**Context:** @ROADMAP.md — Technical Stack, Design System, User Decisions

---

## Tasks

### Task 1: Initialize Next.js Project with Tailwind CSS

**Type:** `init:setup`

**Requirements:** `[TECH-01]`

**Behavior:**
- Initialize Next.js app with App Router and TypeScript
- Configure Tailwind CSS with design tokens from PRD
- Set up folder structure (app/, components/, public/, locales/)

**Verification:**
- `npm run dev` starts without errors
- Tailwind classes apply correctly
- Folder structure matches PRD

---

### Task 2: Configure Mobile-First Responsive Layout

**Type:** `config:layout`

**Requirements:** `[TECH-02]`

**Behavior:**
- Set up base layout with mobile-first breakpoints
- Configure Tailwind theme for responsive design
- Create root layout with proper metadata

**Verification:**
- Layout renders correctly at 375px, 768px, 1024px, 1440px
- No horizontal scroll on any breakpoint

---

### Task 3: Set Up Framer Motion Integration

**Type:** `config:integration`

**Requirements:** `[TECH-03]`

**Behavior:**
- Install Framer Motion
- Create motion config with minimal animations
- Add utility components for animations

**Verification:**
- Framer Motion imports work without errors
- Basic animation test passes

---

### Task 4: Set Up i18n Core (Telugu + English)

**Type:** `core:i18n`

**Requirements:** `[I18N-01]`

**Behavior:**
- Set up i18n routing ( NEXT_LOCALE, getStaticPaths, getStaticProps pattern for App Router )
- Create locale JSON files (en.json, te.json)
- Create i18n context and hooks
- Implement language toggle component

**Verification:**
- Language toggle renders
- Switching language updates content
- Both Telugu and English text loads correctly

**Blocked by:** Task 1

---

## Success Criteria

- [ ] Next.js app runs with Tailwind CSS
- [ ] Mobile-first responsive layout works
- [ ] Framer Motion integrated
- [ ] Language toggle (Telugu + English) functional
- [ ] All requirements: TECH-01, TECH-02, TECH-03, I18N-01

---

## Output Spec

**Files created/modified:**
- `package.json`
- `tailwind.config.ts`
- `app/layout.tsx`
- `app/[locale]/page.tsx`
- `locales/en.json`
- `locales/te.json`
- `app/i18n.ts`
- `components/LanguageToggle.tsx`
- `.env.local`

---

## Key Decisions

| Decision | Value | Rationale |
|----------|-------|-----------|
| i18n routing | Path-based ( `/en/`, `/te/` ) | SEO-friendly, shareable URLs |
| Animation approach | Minimal, purposeful | PRD says "limited animations" |
| Base font | Inter | Clean, readable, widely supported |

---

## Summary One-Liner

Foundation — Next.js + Tailwind + i18n (Telugu + English) with mobile-first responsive layout