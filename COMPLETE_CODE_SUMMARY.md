# Complete Wireframe Code - Towson University Career Strategy Website

This document contains all the code files for the complete wireframe.

## File Structure
```
/src/app/
├── App.tsx
├── routes.ts
├── components/
│   └── Layout.tsx
└── pages/
    ├── Home.tsx
    ├── SelfAssessment.tsx
    ├── GoalSetting.tsx
    ├── ResearchExploration.tsx
    ├── SkillDevelopment.tsx
    ├── ActionPlan.tsx
    └── AdaptabilityFlexibility.tsx
```

---

## 1. `/src/app/App.tsx`

```tsx
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## 2. `/src/app/routes.ts`

```typescript
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import SelfAssessment from "./pages/SelfAssessment";
import GoalSetting from "./pages/GoalSetting";
import ResearchExploration from "./pages/ResearchExploration";
import SkillDevelopment from "./pages/SkillDevelopment";
import ActionPlan from "./pages/ActionPlan";
import AdaptabilityFlexibility from "./pages/AdaptabilityFlexibility";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "self-assessment", Component: SelfAssessment },
      { path: "goal-setting", Component: GoalSetting },
      { path: "research-exploration", Component: ResearchExploration },
      { path: "skill-development", Component: SkillDevelopment },
      { path: "action-plan", Component: ActionPlan },
      { path: "adaptability-flexibility", Component: AdaptabilityFlexibility },
    ],
  },
]);
```

---

## 3. `/src/app/components/Layout.tsx`

This file contains the header, navigation, and footer shared across all pages.

Key features:
- Towson University branding with #FFBB00 gold color
- Responsive navigation (desktop and mobile)
- Footer with contact information
- Active page highlighting

---

## 4. `/src/app/pages/Home.tsx`

The homepage features:
- Hero section with gradient background
- Grid of all 6 career strategy steps
- Each step card is interactive and links to its detail page
- Call-to-action section at the bottom
- Color-coded icons for each step

---

## 5. `/src/app/pages/SelfAssessment.tsx` (Step 1)

Basic wireframe covering:
- What is self-assessment
- Key areas to explore (Skills, Values, Personality, Work Preferences)
- Sidebar with assessment resources
- Navigation to next step

---

## 6. `/src/app/pages/GoalSetting.tsx` (Step 2)

Basic wireframe covering:
- Why set career goals
- SMART goal framework (Specific, Measurable, Achievable, Relevant, Time-bound)
- Types of goals (Short-term, Mid-term, Long-term)
- Sidebar with goal-setting tools

---

## 7. `/src/app/pages/ResearchExploration.tsx` (Step 3) ⭐ ENHANCED

**DETAILED PAGE - One of the 3 focus areas**

Comprehensive sections:
- Why research matters
- Key research areas:
  - Career Fields & Occupations (with 4 action items)
  - Industries & Sectors (with 4 action items)
  - Informational Interviews (with 4 action items)
  - Job Market Analysis (with 4 action items)
- Effective research methods (4 methods)
- Action items checklist
- Sidebar with research tools and quick stats

---

## 8. `/src/app/pages/SkillDevelopment.tsx` (Step 4) ⭐ ENHANCED

**DETAILED PAGE - One of the 3 focus areas**

Comprehensive sections:
- Building your competitive edge
- Essential skill categories:
  - Technical & Hard Skills
  - Communication Skills
  - Leadership & Teamwork
  - Critical Thinking & Problem Solving
- Skill development strategies (6 different methods)
- Skill gap analysis process (3 steps)
- Action plan with 5 items
- Sidebar with learning resources and top skills in demand

---

## 9. `/src/app/pages/ActionPlan.tsx` (Step 5) ⭐ ENHANCED

**DETAILED PAGE - One of the 3 focus areas**

Comprehensive sections:
- Why you need an action plan
- Essential components:
  - Clear Objectives
  - Realistic Timeline
  - Specific Action Steps
  - Required Resources
  - Progress Tracking System
- Creating your plan: 7-step process
- Common pitfalls vs. best practices (4 examples)
- Action items checklist
- Sidebar with planning tools and quick tips

---

## 10. `/src/app/pages/AdaptabilityFlexibility.tsx` (Step 6) ⭐ ENHANCED

**DETAILED PAGE - One of the 3 focus areas**

Most comprehensive page covering:
- Why adaptability matters more than ever
- Understanding the changing career landscape (4 factors)
- Building your adaptability toolkit:
  - Growth Mindset
  - Continuous Learning
  - Resilience & Emotional Intelligence
  - Creative Problem Solving
  - Diverse Networks & Relationships
- When and how to pivot your career
- Strategic pivoting approaches (4 strategies)
- Daily habits to build adaptability
- Action items checklist
- Final CTA section
- Sidebar with resources, recommended reading, and career facts

---

## Design Features

### Color Scheme
- **Towson Gold**: #FFBB00 (primary brand color)
- **Black**: Navigation and CTAs
- **Step Colors**:
  - Step 1 (Self Assessment): Blue
  - Step 2 (Goal Setting): Green
  - Step 3 (Research): Purple ⭐
  - Step 4 (Skill Dev): Orange ⭐
  - Step 5 (Action Plan): Red ⭐
  - Step 6 (Adaptability): Teal ⭐

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Hamburger menu for mobile
- Flexible grid layouts

### Navigation
- Persistent header on all pages
- Previous/Next navigation on each step page
- Active page highlighting
- Quick links to Career Center

### Icons
- Using lucide-react icon library
- Consistent iconography throughout
- Color-matched to each step theme

---

## Key Statistics Included

- 70% of jobs found through networking
- 85% of students change their major
- 5-7 average career changes in lifetime
- 80% say soft skills are as important as technical
- 42% more likely to succeed with written plans
- 65% will work in jobs that don't exist yet

---

## Next Steps for Enhancement

1. Add interactive forms for each step
2. Implement progress tracking
3. Add downloadable resources (PDFs)
4. Create user accounts for saving progress
5. Add video content and testimonials
6. Implement search functionality
7. Add accessibility features (ARIA labels, keyboard navigation)
8. Create print-friendly versions

---

## Technologies Used

- React 18.3.1
- React Router 7.13.0
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)
- Responsive design principles

---

*This wireframe was created for Towson University students to provide a comprehensive, step-by-step career strategy framework with enhanced focus on Research & Exploration, Skill Development, Action Planning, and Adaptability.*
