import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AssessmentQuiz from "./pages/AssessmentQuiz";
import SelfAssessment from "./pages/SelfAssessment";
import GoalSetting from "./pages/GoalSetting";
import ResearchExploration from "./pages/ResearchExploration";
import SkillDevelopment from "./pages/SkillDevelopment";
import ActionPlan from "./pages/ActionPlan";
import AdaptabilityFlexibility from "./pages/AdaptabilityFlexibility";
import Layout from "./components/Layout";
import RequireAssessment from "./components/RequireAssessment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "assessment", Component: AssessmentQuiz },
      {
        // All pages below require the assessment to be completed first
        Component: RequireAssessment,
        children: [
          { path: "self-assessment", Component: SelfAssessment },
          { path: "goal-setting", Component: GoalSetting },
          { path: "research-exploration", Component: ResearchExploration },
          { path: "skill-development", Component: SkillDevelopment },
          { path: "action-plan", Component: ActionPlan },
          { path: "adaptability-flexibility", Component: AdaptabilityFlexibility },
        ],
      },
    ],
  },
]);
