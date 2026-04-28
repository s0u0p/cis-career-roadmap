import { createContext, useContext, useState, type ReactNode } from "react";
import type { AssessmentResult } from "../assessment/types";

type StudentInfo = {
  name: string;
  major: string;
};

type AssessmentContextType = {
  result: AssessmentResult | null;
  studentInfo: StudentInfo | null;
  isComplete: boolean;
  setResult: (result: AssessmentResult) => void;
  setStudentInfo: (info: StudentInfo) => void;
  clearResult: () => void;
};

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  // Result persists in localStorage so page refreshes don't lose it
  const [result, setResultState] = useState<AssessmentResult | null>(() => {
    try {
      const stored = localStorage.getItem("assessment_result");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Name and major are session-only, stored in React state, never in localStorage
  // They disappear automatically when the browser tab is closed
  const [studentInfo, setStudentInfoState] = useState<StudentInfo | null>(null);

  const setResult = (newResult: AssessmentResult) => {
    setResultState(newResult);
    localStorage.setItem("assessment_result", JSON.stringify(newResult));
  };

  const setStudentInfo = (info: StudentInfo) => {
    setStudentInfoState(info);
  };

  const clearResult = () => {
    setResultState(null);
    setStudentInfoState(null);
    localStorage.removeItem("assessment_result");
  };

  return (
    <AssessmentContext.Provider
      value={{
        result,
        studentInfo,
        isComplete: result !== null,
        setResult,
        setStudentInfo,
        clearResult,
      }}
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
