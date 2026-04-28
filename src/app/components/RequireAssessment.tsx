import { Navigate, Outlet } from "react-router";
import { useAssessment } from "../context/AssessmentContext";

export default function RequireAssessment() {
  const { isComplete } = useAssessment();
  return isComplete ? <Outlet /> : <Navigate to="/assessment" replace />;
}
