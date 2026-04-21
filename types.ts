export type CareerField = {
    id: string;
    label: string;
    description: string;
    skills: string[];
    exampleRoles: string[];
    certifications: string[];
};

export type Answer = {
    id: string;
    text: string;
    weights: Record<string, number>;
};

export type Questions = {
    id: string;
    section: string;
    type: "single_choice" | "multi_select";
    answers: Answer[];
    maxSelections?: number;
};

export type ScoredField = CareerField & {
    rawScore: number;
    maxScore: number;
    percentage: number;
};

export type AssessmentResult = {
    topThree: ScoredField[];
    allResults: ScoredField[];
    warnings: string[];
};