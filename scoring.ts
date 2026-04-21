/**
 * scoring.js
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
<<<<<<< HEAD
import questions from "./src/app/assessment/questions";
import type { AssessmentResult, Questions } from "./types";
=======
import questions from "./questions";
import type { AssessmentResult } from "./types";
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149

/**
 * Build a flat lookup map: answerId -> weights object
 * e.g. { "q1_a": { cybersecurity: 5, networking: 2 }, ... }
 */
function buildAnswerWeightMap() {
<<<<<<< HEAD
  const map:  Record<string, Record<string, number | undefined>> = {};
=======
  const map:  Record<string, Record<string, number>> = {};
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  for (const question of questions) {
    for (const answer of question.answers) {
      map[answer.id] = answer.weights;
    }
  }
  return map;
}

/**
 * Build a lookup map: answerId -> its parent question ID
 * Used to detect if the user answered the same question twice (shouldn't happen,
 * but useful for validation).
 */
function buildAnswerQuestionMap() {
<<<<<<< HEAD
  const map:  Record<string, string> = {};
=======
  const map:  Record<string, Record<string, number>> = {};
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  for (const question of questions) {
    for (const answer of question.answers) {
      map[answer.id] = question.id;
    }
  }
  return map;
}

/**
 * Main scoring function.
 *
 * @param {string[]} selectedAnswerIds - Array of answer IDs the user chose
 * @returns {{
 *   topThree: Array,
 *   allResults: Array,
 *   maxPossibleScore: number,
 *   warnings: string[]
 * }}
 */
<<<<<<< HEAD
function scoreAssessment(selectedAnswerIds: string[]) {
=======
function scoreAssessment(selectedAnswerIds) {
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  const answerWeightMap  = buildAnswerWeightMap();
  const answerQuestionMap = buildAnswerQuestionMap();
  const warnings = [];

  //1. Validate input
  const seenQuestions = new Set();
  const validAnswers  = [];

  for (const answerId of selectedAnswerIds) {
    if (!answerWeightMap[answerId]) {
      warnings.push(`Unknown answer ID skipped: "${answerId}"`);
      continue;
    }
    const qId = answerQuestionMap[answerId];
    if (seenQuestions.has(qId)) {
      warnings.push(`Duplicate answer for question "${qId}" skipped: "${answerId}"`);
      continue;
    }
    seenQuestions.add(qId);
    validAnswers.push(answerId);
  }

  // 2. Accumulate scores
  // Initialize all fields at 0
<<<<<<< HEAD
  const scores: Record<string, number> = {};
=======
  const scores = {};
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  for (const field of careerFields) {
    scores[field.id] = 0;
  }

  for (const answerId of validAnswers) {
<<<<<<< HEAD
  const weights = answerWeightMap[answerId];
  for (const [fieldId, points] of Object.entries(weights)) {
    if (scores[fieldId] !== undefined && points !== undefined) {
      scores[fieldId] += points;
    }
  }
}
=======
    const weights = answerWeightMap[answerId];
    for (const [fieldId, points] of Object.entries(weights)) {
      if (scores[fieldId] !== undefined) {
        scores[fieldId] += points;
      }
    }
  }
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149

  // 3. Calculate max possible score per field (for percentage display)
  // Max possible = if the user always picked the answer with the highest weight
  // toward that field. We use this to normalize scores into a 0–100% scale.
<<<<<<< HEAD
  const maxPossiblePerField: Record<string, number> = {};
=======
  const maxPossiblePerField = {};
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  for (const field of careerFields) {
    maxPossiblePerField[field.id] = 0;
  }

  for (const question of questions) {
    // For each question, find the highest weight each field could have received
<<<<<<< HEAD
    const bestPerField: Record <string, number> = {};
=======
    const bestPerField = {};
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
    for (const answer of question.answers) {
      for (const [fieldId, points] of Object.entries(answer.weights)) {
        if (!bestPerField[fieldId] || points > bestPerField[fieldId]) {
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

  //4. Build result objects
  const allResults = careerFields
    .map((field) => {
      const rawScore = scores[field.id];
      const maxScore = maxPossiblePerField[field.id];
      const percentage = maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0;

      return {
        ...field,
        rawScore,
        maxScore,
        percentage,
      };
    })
    .sort((a, b) => b.rawScore - a.rawScore); // sort highest to lowest

  const topThree = allResults.slice(0, 3);

  return {
    topThree,
    allResults,
    warnings,
  };
}

/**
 * Helper: given a question ID, return the full question object.
 */
<<<<<<< HEAD
function getQuestion(questionId: string) {
=======
function getQuestion(questionId) {
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  return questions.find((q) => q.id === questionId) || null;
}

/**
 * Helper: return all questions grouped by section name.
 */
function getQuestionsBySection() {
<<<<<<< HEAD
  const sections: Record<string, Questions[]> = {};
=======
  const sections = {};
>>>>>>> 3a54e718b9f12244b732ab7a62c4b2cdc1620149
  for (const q of questions) {
    if (!sections[q.section]) sections[q.section] = [];
    sections[q.section].push(q);
  }
  return sections;
}

export{
  scoreAssessment,
  getQuestion,
  getQuestionsBySection
};
