# Complete Wireframe Code - Towson University Career Strategy Website

This document contains all the code files for the complete wireframe.

## File Structure
```
/src/
├── main.tsx
├── onetApi.ts
├── generatePDF.ts
├── vite-env.d.ts
├── styles/
│   ├── index.css
│   ├── fonts.css
│   ├── tailwind.css
│   └── theme.css
├── assets/
│   └── fonts/(Proxima Nova & Kandal font families)
└── app/
    ├── App.tsx
    ├── routes.ts
    ├── assessment/
    │   ├── types.ts
    │   ├── careerFields.ts
    │   ├── questions.ts
    │   └── scoring.ts
    ├── context/
    │   └── AssessmentContext.tsx
    ├── data/
    │   └── certifications.ts
    ├── components/
    │   ├── Layout.tsx
    │   ├── PercentageRing.tsx
    │   ├── RequireAssessment.tsx
    │   └── ui/(shadcn/ui component library)
    └── pages/
        ├── Home.tsx
        ├── AssessmentQuiz.tsx
        ├── SelfAssessment.tsx
        ├── GoalSetting.tsx
        ├── ResearchExploration.tsx
        ├── SkillDevelopment.tsx
        ├── ActionPlan.tsx
        ├── AdaptabilityFlexibility.tsx
        └── Report.tsx
```

---

## Core Entry Points

### `src/main.tsx`
Renders the React app into the DOM. Wraps `<App />` with `<AssessmentProvider>` so assessment state is available site-wide.

### `src/app/App.tsx`
Renders `<RouterProvider router={router} />`. No other logic.

### `src/app/routes.ts`
Defines all client-side routes using React Router v7. Key structure:
- `/` → `Home`
- `/assessment` → `AssessmentQuiz` (public)
- All other routes are wrapped in `RequireAssessment`, which redirects to `/assessment` if the quiz hasn't been completed:
  - `/self-assessment` → `SelfAssessment` (Step 1)
  - `/goal-setting` → `GoalSetting` (Step 2)
  - `/research-exploration` → `ResearchExploration` (Step 3)
  - `/skill-development` → `SkillDevelopment` (Step 4)
  - `/action-plan` → `ActionPlan` (Step 5)
  - `/adaptability-flexibility` → `AdaptabilityFlexibility` (Step 6)
  - `/report` → `Report`

---

## Assessment Engine (`/src/app/assessment/`)

### `types.ts`
TypeScript type definitions shared across the assessment system:
- `CareerField` — a career path with id, label, onetCode, description, skills, exampleRoles, certifications
- `Answer` — a quiz answer with id, text, and a weights map (fieldId → points)
- `Questions` — a quiz question with id, section, type (`single_choice` | `multi_select`), text, answers, and optional maxSelections
- `ScoredField` — a `CareerField` extended with rawScore, maxScore, and percentage
- `AssessmentResult` — contains topThree (ScoredField[]), allResults (ScoredField[]), and warnings (string[])

### `careerFields.ts`
Defines the 12 CIS career paths that the assessment scores against. Each entry includes:
- `id` — unique key (e.g. `"cybersecurity"`)
- `label` — display name
- `onetCode` — O*NET occupation code for live API data
- `description`, `skills[]`, `exampleRoles[]`, `certifications[]`

The 12 fields are:
1. Cybersecurity (15-1212.00)
2. Data Science & Analytics (15-2051.00)
3. Software Engineering (15-1252.00)
4. Web Development (15-1254.00)
5. Cloud Computing & DevOps (15-1241.00)
6. Networking & Systems Administration (15-1244.00)
7. Database Administration & Engineering (15-1243.00)
8. IT Project Management (13-1082.00)
9. UX/UI Design & Human-Computer Interaction (15-1255.00)
10. Artificial Intelligence & Machine Learning (15-1221.00)
11. IT Support & Help Desk (15-1232.00)
12. Information Systems & Business Analysis (15-1211.00)

### `questions.ts`
Contains the full bank of quiz questions organized into sections. Questions are either `single_choice` or `multi_select`. Each answer has a `weights` map that assigns point values to career fields.

### `scoring.ts`
The core scoring engine. Key exports:
- `scoreAssessment(selectedAnswerIds)` — takes an array of selected answer IDs, validates them, accumulates weighted scores across all 12 career fields, normalizes scores to percentages against the maximum possible score per field, and returns a sorted `AssessmentResult`
- `getQuestion(questionId)` — helper to look up a single question
- `getQuestionsBySection()` — helper to group questions by section name

---

## State Management

### `src/app/context/AssessmentContext.tsx`
React context providing assessment state to the entire app. State includes:
- `result: AssessmentResult | null` — the scored quiz result (persisted in `sessionStorage` so page refreshes don't lose it; cleared when the tab closes)
- `studentInfo: { name, major } | null` — student name and major (React state only, not persisted)
- `isComplete: boolean` — true when result is non-null

Exports: `AssessmentProvider`, `useAssessment()`

### localStorage keys (cross-page persistence)
Several pages read/write directly to `localStorage` to sync user-entered text across pages:

| Key | Used by |
|-----|---------|
| `studentName` | Report |
| `studentMajor` | Report |
| `studentSummary` | Report |
| `goalShortTerm` | GoalSetting, ActionPlan, Report |
| `goalMidTerm` | GoalSetting, ActionPlan, Report |
| `goalLongTerm` | GoalSetting, ActionPlan, Report |
| `actionPlan` | ActionPlan, Report |

---

## API Integration

### `src/onetApi.ts`
Calls the O*NET Web Services v2 API (`api-v2.onetcenter.org`) to fetch live occupation data. Uses `VITE_ONET_API_KEY` from environment variables (set in `.env` locally, set in Vercel dashboard for production).

- `getOnetOccupation(onetCode)` — fetches occupation title and description for a given O*NET code. Also attempts to fetch wages data from a `/summary/wages` sub-endpoint; if successful, adds a `medianSalary` field to the returned object.

### `src/generatePDF.ts`
Generates a downloadable PDF career report using jsPDF. Accepts a `PDFReportData` object containing:
- `studentName`, `studentMajor`, `studentSummary`
- `shortTermGoal`, `midTermGoal`, `longTermGoal`
- `actionPlan`
- `topThree` — the top 3 scored career fields

The PDF spans two pages and includes a branded header with an embedded base64 template image, career match results, career goals, and the action plan.

---

## Components

### `src/app/components/Layout.tsx`
Shared header, navigation, and footer rendered on every page via React Router's outlet. Features:
- Towson gold (`#FFBB00`) branding
- Desktop nav with links to all 6 steps plus a **Report** button (black/gold, opens `/report`)
- Mobile hamburger menu with the same links
- `ScrollToTop` component: watches the route pathname and calls `window.scrollTo(0, 0)` on every navigation
- Footer with project info

### `src/app/components/RequireAssessment.tsx`
Route guard component. Reads `isComplete` from `AssessmentContext`. If the assessment hasn't been completed, redirects to `/assessment`. Otherwise renders `<Outlet />` to show the requested page.

### `src/app/components/PercentageRing.tsx`
SVG circular progress ring used on the Self Assessment results page. Props:
- `percentage` — number to display and fill the arc
- `size` (default 80), `strokeWidth` (default 7)
- `color` (default `#FFBB00`) — arc color
- `textColor` (default `#FFFFFF`) — label color (pass `#000000` for rings on white backgrounds)

### `src/app/data/certifications.ts`
Data file listing 3 certifications per career field (36 total). Each entry includes name, description, URL, duration, and level (Entry / Associate / Intermediate / Professional / Specialty). Used by the SkillDevelopment page sidebar.

---

## Pages

### `Home.tsx`
Landing page. Features:
- Hero section with a call-to-action linking to `/assessment`
- Grid of 6 step cards, each linking to its respective page
- Report link lives in the navbar, not on this page

### `AssessmentQuiz.tsx`
Multi-step career assessment quiz. Features:
- Collects student name and major on the first screen
- Renders questions section by section from `questions.ts`
- Supports both `single_choice` and `multi_select` question types
- On completion, calls `scoreAssessment()`, stores the result via `AssessmentContext`, and navigates to `/self-assessment` (Step 1)

### `SelfAssessment.tsx` — Step 1
Displays the career assessment results. Features:
- Top 3 career match cards ranked by score (gold/silver/bronze styling)
- Each card shows: career label, match percentage ring, description, example roles, key skills, certifications, and O*NET occupational data
- O*NET data is fetched live via `getOnetOccupation()` and merged over static fallback data
- Static fallback `onetData` map covers all 12 fields with hardcoded salary and growth figures (sourced from O*NET/BLS, updated annually)
- "All Career Match Scores" accordion showing all 12 fields ranked
- Sidebar with "What's Next?" checklist and "Retake Assessment" button
- "Next: Goal Setting" navigation button

### `GoalSetting.tsx` — Step 2
Goal-setting page with interactive inputs. Features:
- "Your Career Goals" card with three textareas (short-term, mid-term, long-term) that persist to `localStorage`
- SMART goals framework explanation
- "Goal Setting Tips" sidebar with 3 practical tips in styled boxes
- Previous/Next navigation

### `ResearchExploration.tsx` — Step 3
Research guidance page. Features:
- "Key Research Areas" accordion with 4 sections: Career Fields & Occupations, Industries & Sectors, Informational Interviews, Job Market Analysis
- Effective research methods section
- Action items checklist
- Sidebar with 5 real external research tool links (O*NET, BLS, LinkedIn, Glassdoor, Handshake) opening in new tabs
- Previous/Next navigation

### `SkillDevelopment.tsx` — Step 4
Skill development guidance page. Features:
- "Essential Skill Categories" accordion with 4 sections: Technical & Hard Skills, Communication Skills, Leadership & Teamwork, Critical Thinking & Problem Solving
- Skill development strategies section
- Skill gap analysis process
- "Recommended Certifications" sidebar accordion — shows 3 certifications for each of the user's top 3 career matches (pulled from `certifications.ts` via `useAssessment()`)
- "Learning Resources" sidebar with 4 real external links (Coursera, LinkedIn Learning, Pluralsight, freeCodeCamp)
- Previous/Next navigation

### `ActionPlan.tsx` — Step 5
Action planning page with a user-input textarea. Features:
- "Essential Components" accordion with 4 sections: Clear Objectives, Realistic Timeline, Specific Action Steps, Progress Tracking
- "My Action Plan" textarea (500 character limit) that persists to `localStorage`
- Character counter
- **Download PDF** button (black/gold) that reads all `localStorage` values and calls `generatePDF()`
- Previous/Next navigation

### `AdaptabilityFlexibility.tsx` — Step 6
Adaptability and career flexibility page. Features:
- "Building Your Adaptability Toolkit" accordion with 5 sections: Growth Mindset, Continuous Learning, Resilience & Emotional Intelligence, Creative Problem Solving, Diverse Networks & Relationships
- Career pivoting strategies section
- Daily habits section
- "View My Report" button (black/gold) at the bottom
- Previous / Back to Home / View My Report navigation

### `Report.tsx`
Comprehensive career report page. Features:
- Student info section: name, major, personal summary — all editable textareas synced bidirectionally with `localStorage`
- Career Assessment Results section: displays top 3 matches from `AssessmentContext`
- Career Goals section: three textareas (short-term, mid-term, long-term) synced with `localStorage` — changes here reflect on GoalSetting and vice versa
- My Action Plan section: textarea (500 character limit) synced with `localStorage`
- **Download PDF** button that calls `generatePDF()` with all current data

---

## Design System

### Color Scheme
- **Towson Gold**: `#FFBB00` (primary brand color — buttons, accents, rings)
- **Black**: Navigation, CTAs, headings
- **Step accent colors**: Blue (Step 1), Green (Step 2), Purple (Step 3), Orange (Step 4), Red (Step 5), Teal (Step 6)

### UI Components
Built on **shadcn/ui** (Radix UI primitives + Tailwind). Key components used: `Card`, `Button`, `Accordion`, `AccordionItem/Trigger/Content`.

### Typography
Custom font families loaded from `/src/assets/fonts/`:
- **Proxima Nova** (primary body font) — Thin, Light, Regular, Medium, Semibold, Bold, Extrabold, Black
- **Kandal** (display/heading font) — Book, Book Bold, Medium, Black, and italic variants

### Icons
**Lucide React** icon library throughout. Icons are color-matched to their section theme.

### Responsive Design
- Mobile-first with Tailwind breakpoints: `sm`, `md`, `lg`
- Hamburger menu on mobile
- Single-column stacked layouts on small screens, 2–3 column grids on desktop

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_ONET_API_KEY` | O*NET Web Services API key for live occupation data |

Set in `.env` locally (not committed to git). Set via **Vercel Dashboard → Settings → Environment Variables** for production.

---

## Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI framework |
| React Router | 7.13.0 | Client-side routing |
| TypeScript | — | Type safety (transpiled by Vite/esbuild) |
| Tailwind CSS | 4.1.12 | Utility-first styling |
| Vite | 6.3.5 | Build tool and dev server |
| shadcn/ui (Radix UI) | various | Accessible UI primitives |
| Lucide React | 0.487.0 | Icon library |
| jsPDF | 4.2.1 | PDF generation |
| pnpm | 10.x | Package manager |

---

## Deployment

- **Platform**: Vercel
- **Build command**: `vite build`
- **Output directory**: `dist`
- **Package manager**: pnpm (detected via `pnpm-lock.yaml`)
- Auto-deploys on every push to the `master` branch
```
