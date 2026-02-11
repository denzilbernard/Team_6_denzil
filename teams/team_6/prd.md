# Product Requirements Document (PRD)

> **Instructions:** This is your team's project specification. Fill in the sections below to define what you're building.

---

## Project Overview

**Project Name:** Birthday GIF Generator

**One-line Description:** Generate personalized birthday GIF cards from name and birthday that you can copy and share.

**Type:** Web App (React)

---

## Guidelines

### Keep It Small!
- Your MVP should be buildable in **10 minutes** by one person
- Think "proof of concept" not "production ready"
- If it sounds ambitious, make it simpler
- **Use Cursor to help you plan this!** You need a project that has at least 5 features so everyone on your team can pick one and add it
- Feel free to take one of the ideas below — this exercise is about learning the git flow, collaborating as a team, and understanding where Cursor's features fit into the SDLC

### Good Project Ideas

**Pong** — classic paddle-and-ball game
- _Example features:_ scoreboard, sound effects, difficulty/speed settings

**Memory Card Match** — flip cards to find matching pairs
- _Example features:_ move counter, timer, win animation/confetti

**Drawing Pad** — simple canvas you can sketch on
- _Example features:_ color picker, brush size slider, eraser tool

**Typing Speed Game** — type a passage and measure your words per minute
- _Example features:_ WPM display, accuracy tracker, difficulty levels

**Trivia Quiz** — multiple choice questions with score tracking
- _Example features:_ timer per question, category selector, results summary screen

### Bad Project Ideas (Too Big!)
- Anything with a database -- tell cursor to avoid this
- Anything requiring authentication
- Anything with multiple pages/screens
- Anything that "needs" an API

---

## Team Members & Tasks

> **Important:** Each team member MUST have their own task. Tasks should be independent features that can be built in parallel without stepping on each other's toes.

| Name | Task | Description |
|------|------|-------------|
| _[Name 1]_ | Birth Month Theme Picker | Select accent colors and vibe based on birth month |
| _[Name 2]_ | Name Overlay | Render "Happy Birthday, [Name]!" with clean typography |
| _[Name 3]_ | Share Buttons | Download PNG and Copy to clipboard via html2canvas |
| _[Name 4]_ | Birthday Puns | Clever message based on zodiac/month |
| _[Name 5]_ | GIF Card Background | Curated GIF library as card background |

### Task Guidelines
- Each task should add something **visible** to the project
- Tasks should be **independent** — no dependencies on other tasks
- Think: new button, new section, new color scheme, new text, etc.
- Everyone should be able to work at the same time without conflicts

---

## Base MVP (Phase 2)

> **One person** creates the foundation that everyone else builds on.

**What the MVP includes:**
- Vite + React app in `teams/team_6/base_mvp/`
- Input form: Name (text) and Birthday (date picker)
- BirthdayCard container with `ref={cardRef}` for html2canvas capture
- 5 stub components (BirthMonthThemes, NameOverlay, ShareButtons, BirthdayPuns, GifCardBackground)
- 1–2 sample GIFs in `public/gifs/` as placeholders
- All components wired in App.jsx — teammates only edit their own stub files

**What it does NOT include:**
- Theme picker logic (Workstream 1)
- Styled name overlay (Workstream 2)
- Working share/download buttons (Workstream 3)
- Birthday puns/messages (Workstream 4)
- GIF selection and background (Workstream 5)

---

## Feature Slots (Phase 3)

> These are the features team members will add. Design them to be **independent** so people can work in parallel.

### Feature 1: Birth Month Theme Picker
- **Assigned to:** _[Team member]_
- **Description:** Theme picker that selects accent colors and vibe based on birth month. Optional UI to switch themes manually.
- **Files to modify/create:** `src/components/BirthMonthThemes.jsx` only

### Feature 2: Name Overlay
- **Assigned to:** _[Team member]_
- **Description:** Renders "Happy Birthday, [Name]!" and formatted birth date with clean typography. Semi-transparent backdrop for readability.
- **Files to modify/create:** `src/components/NameOverlay.jsx` only

### Feature 3: Share Buttons
- **Assigned to:** _[Team member]_
- **Description:** "Download PNG" and "Copy to clipboard" using html2canvas. May add `html2canvas` to package.json if not in MVP.
- **Files to modify/create:** `src/components/ShareButtons.jsx`, possibly `package.json`

### Feature 4: Birthday Puns
- **Assigned to:** _[Team member]_
- **Description:** Cute, clever message based on birthday (zodiac or month). Hardcoded BIRTHDAY_MESSAGES mapping.
- **Files to modify/create:** `src/components/BirthdayPuns.jsx` only

### Feature 5: GIF Card Background
- **Assigned to:** _[Team member]_
- **Description:** 5–8 birthday GIFs in `public/gifs/`, selected by birth month. Full-bleed background for the card.
- **Files to modify/create:** `src/components/GifCardBackground.jsx`, `public/gifs/*` (new assets)

---

## Success Criteria

- [ ] MVP runs locally
- [ ] Each team member has merged at least one PR
- [ ] All features work together without breaking the app
