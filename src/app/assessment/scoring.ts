/**
 * scoring.ts
 *
 * Core assessment scoring engine.
 *
 * INPUT:  An array of answer IDs the user selected, e.g.:
 *         ["q1_a", "q2_c", "q3_b", ...]
 *
 * OUTPUT: Sorted array of career fields with their accumulated scores,
 *         plus a `topThree` convenience property.
 *
 * Usage:
 *   const { topThree, allResults } = scoreAssessment(["q1_a", "q2_c", ...]);
 */

import careerFields from "./careerFields";
import questions from "./questions";
import type { AssessmentResult, Questions } from "./types";

/**
 * Build a flat lookup map: answerId -> weights object
 * e.g. { "q1_a": { cybersecurity: 5, networking: 2 }, ... }
 */
function buildAnswerWeightMap(): Record<string, Record<string, number | undefined>> {
  const map: Record<string, Record<string, number | undefined>> = {};
  for (const question of questions) {
    for (const answer of question.answers) {
      map[answer.id] = answer.weights;
    }
  }
  return map;
}

/**
 * Build a lookup map: answerId -> its parent question ID
 * Used to detect if the user answered the same question twice.
 */
function buildAnswerQuestionMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const question of questions) {
    for (const answer of question.answers) {
      map[answer.id] = question.id;
    }
  }
  return map;
}

/**
 * Build a lookup map: questionId -> question type
 * Used to allow multiple answers from multi_select questions.
 */
function buildQuestionTypeMap(): Record<string, Questions["type"]> {
  const map: Record<string, Questions["type"]> = {};
  for (const question of questions) {
    map[question.id] = question.type;
  }
  return map;
}

/**
 * Main scoring function.
 *
 * @param selectedAnswerIds - Array of answer IDs the user chose
 * @returns AssessmentResult with topThree, allResults, and warnings
 */
export function scoreAssessment(selectedAnswerIds: string[]): AssessmentResult {
  const answerWeightMap = buildAnswerWeightMap();
  const answerQuestionMap = buildAnswerQuestionMap();
  const questionTypeMap = buildQuestionTypeMap();
  const warnings: string[] = [];
  const seenQuestions = new Set<string>();
  const validAnswers: string[] = [];

  // 1. Validate input — allow multiple answers from multi_select questions
  for (const answerId of selectedAnswerIds) {
    if (!answerWeightMap[answerId]) {
      warnings.push(`Unknown answer ID skipped: "${answerId}"`);
      continue;
    }
    const qId = answerQuestionMap[answerId];
    const isMultiSelect = questionTypeMap[qId] === "multi_select";

    // Only block duplicates for single_choice questions
    if (!isMultiSelect && seenQuestions.has(qId)) {
      warnings.push(`Duplicate answer for question "${qId}" skipped: "${answerId}"`);
      continue;
    }
    seenQuestions.add(qId);
    validAnswers.push(answerId);
  }

  // 2. Accumulate scores — initialize all fields at 0
  const scores: Record<string, number> = {};
  for (const field of careerFields) {
    scores[field.id] = 0;
  }

  for (const answerId of validAnswers) {
    const weights = answerWeightMap[answerId];
    for (const [fieldId, points] of Object.entries(weights)) {
      if (scores[fieldId] !== undefined && points !== undefined) {
        scores[fieldId] += points;
      }
    }
  }

  // 3. Calculate max possible score per field for percentage normalization
  const maxPossiblePerField: Record<string, number> = {};
  for (const field of careerFields) {
    maxPossiblePerField[field.id] = 0;
  }

  for (const question of questions) {
    const bestPerField: Record<string, number> = {};
    for (const answer of question.answers) {
      for (const [fieldId, points] of Object.entries(answer.weights)) {
        if (points !== undefined && (!bestPerField[fieldId] || points > bestPerField[fieldId])) {
          bestPerField[fieldId] = points;
        }
      }
    }
    for (const [fieldId, best] of Object.entries(bestPerField)) {
      if (maxPossiblePerField[fieldId] !== undefined) {
        maxPossiblePerField[fieldId] += best;
      }
    }
  }

  // 4. Build result objects
  const allResults = careerFields
    .map((field) => {
      const rawScore = scores[field.id];
      const maxScore = maxPossiblePerField[field.id];
      const percentage = maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0;
      return { ...field, rawScore, maxScore, percentage };
    })
    .sort((a, b) => b.rawScore - a.rawScore);

  return {
    topThree: allResults.slice(0, 3),
    allResults,
    warnings,
  };
}

/**
 * Helper: given a question ID, return the full question object.
 */
export function getQuestion(questionId: string) {
  return questions.find((q) => q.id === questionId) || null;
}

/**
 * Helper: return all questions grouped by section name.
 */
export function getQuestionsBySection(): Record<string, Questions[]> {
  const sections: Record<string, Questions[]> = {};
  for (const q of questions) {
    if (!sections[q.section]) sections[q.section] = [];
    sections[q.section].push(q);
  }
  return sections;
}
