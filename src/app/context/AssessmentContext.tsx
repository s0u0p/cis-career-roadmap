import { createContext, useContext, useState, type ReactNode } from "react";
import type { AssessmentResult } from "../assessment/types";

type AssessmentContextType = {
  result: AssessmentResult | null;
  isComplete: boolean;
  setResult: (result: AssessmentResult) => void;
  clearResult: () => void;
};

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [result, setResultState] = useState<AssessmentResult | null>(() => {
    try {
      const stored = localStorage.getItem("assessment_result");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const setResult = (newResult: AssessmentResult) => {
    setResultState(newResult);
    localStorage.setItem("assessment_result", JSON.stringify(newResult));
  };

  const clearResult = () => {
    setResultState(null);
    localStorage.removeItem("assessment_result");
  };

  return (
    <AssessmentContext.Provider
      value={{ result, isComplete: result !== null, setResult, clearResult }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used inside AssessmentProvider");
  return ctx;
}
