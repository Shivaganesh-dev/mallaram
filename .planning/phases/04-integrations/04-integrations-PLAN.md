---
phase: 04
plan: 04-integrations
type: feature
autonomous: true
wave: 1
depends_on: [03-content]
requirements: [INT-01, INT-02, INT-03]
---

# Phase 04 Plan: Integrations

**Objective:** Complaint CTA + Contact + Maps — Google Forms, Google Maps, responsive polish

**Context:** @ROADMAP.md — PRD Section 6.6, 6.7

---

## Tasks

### Task 1: Complaint CTA Section

**Type:** `component:complaint`

**Requirements:** `[INT-01]`

**Behavior:**
- Create Complaint CTA component
- Highly visible, mobile-optimized
- CTA button links to Google Form

**Implementation:**

- CTA component: `components/CTA/CTA.tsx`
- Google Form placeholder URL
- Bold call-to-action design
- Mobile-optimized layout

**Verification:**
- CTA is prominently visible
- Button links to Google Form
- Works on mobile

**Blocked by:** Phase 03 complete

---

### Task 2: Contact Section

**Type:** `component:contact`

**Requirements:** `[INT-02]`

**Behavior:**
- Create Contact component
- Display Panchayat details, phone, address
- Include Google Maps embed

**Implementation:**

- Contact component: `components/Contact/Contact.tsx`
- Two-column layout (info + map)
- Google Maps iframe embed
- Contact information display

**Verification:**
- Contact section displays
- Maps embed renders
- Info is readable

---

### Task 3: Final Polish

**Type:** `polish:final`

**Requirements:** `[]`

**Behavior:**
- Ensure smooth scrolling works
- Verify all sections connect properly
- Test language toggle throughout

**Implementation:**
- Review all components for consistency
- Ensure i18n coverage
- Test responsiveness

**Verification:**
- Site runs without errors
- All sections render
- Language toggle works end-to-end

---

## Success Criteria

- [ ] Complaint CTA with Google Forms link
- [ ] Contact section with details
- [ ] Google Maps embed
- [ ] Final polish and testing
- [ ] All requirements: INT-01, INT-02, INT-03

---

## Output Spec

**Files created:**
- `components/CTA/CTA.tsx`
- `components/Contact/Contact.tsx`

**Files modified:**
- `app/[locale]/page.tsx`

---

## Summary One-Liner

Integrations — Complaint CTA with Google Forms, Contact with Google Maps, final polish