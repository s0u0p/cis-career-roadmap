import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { ArrowLeft, ArrowRight, UserCircle } from "lucide-react";
import questions from "../assessment/questions";
import { scoreAssessment } from "../assessment/scoring";
import { useAssessment } from "../context/AssessmentContext";

type Answers = Record<number, string | string[]>;

export default function AssessmentQuiz() {
  const navigate = useNavigate();
  const { setResult, isComplete } = useAssessment();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  // Already completed — redirect to results
  if (isComplete) return <Navigate to="/self-assessment" replace />;

  const current = questions[currentQuestion];
  const isMultiSelect = current.type === "multi_select";
  const maxSelections = current.maxSelections ?? 5;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const currentAnswer = answers[currentQuestion];
  const isAnswered = isMultiSelect
    ? Array.isArray(currentAnswer) && (currentAnswer as string[]).length > 0
    : currentAnswer !== undefined;

  const handleSingleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleMultiAnswer = (value: string) => {
    const selected = (answers[currentQuestion] as string[]) || [];
    if (selected.includes(value)) {
      setAnswers({ ...answers, [currentQuestion]: selected.filter((v) => v !== value) });
    } else {
      if (selected.length >= maxSelections) return;
      setAnswers({ ...answers, [currentQuestion]: [...selected, value] });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Build flat answer ID array from all responses
      const answerIds: string[] = [];
      questions.forEach((_, i) => {
        const a = answers[i];
        if (a !== undefined) {
          Array.isArray(a) ? answerIds.push(...a) : answerIds.push(a);
        }
      });
      const scored = scoreAssessment(answerIds);
      setResult(scored);
      navigate("/self-assessment");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
            <UserCircle size={32} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 1</div>
            <h1 className="text-4xl font-bold">Self Assessment</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Understanding yourself is the foundation of effective career planning
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b-2 border-[#FFBB00] shadow-sm rounded-xl mb-8 p-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-xs text-gray-500">Section: {current.section}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Question Card */}
        <div className="lg:col-span-2">
          <Card className="border-2 border-black shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#FFBB00] to-yellow-300">
              <CardTitle className="text-2xl sm:text-3xl text-black">
                {current.text}
              </CardTitle>
              {isMultiSelect && (
                <p className="text-sm text-black/70 mt-1">
                  Select up to {maxSelections} ·{" "}
                  {((answers[currentQuestion] as string[]) || []).length} selected
                </p>
              )}
            </CardHeader>
            <CardContent className="pt-8">
              {isMultiSelect ? (
                <div className="space-y-4">
                  {current.answers.map((answer) => {
                    const selected = (
                      (answers[currentQuestion] as string[]) || []
                    ).includes(answer.id);
                    const atMax =
                      ((answers[currentQuestion] as string[]) || []).length >=
                      maxSelections;
                    return (
                      <div
                        key={answer.id}
                        onClick={() =>
                          (!atMax || selected) && handleMultiAnswer(answer.id)
                        }
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selected
                            ? "border-[#FFBB00] bg-yellow-50"
                            : atMax
                            ? "border-gray-100 bg-gray-50 opacity-40 cursor-not-allowed"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <Checkbox
                          id={answer.id}
                          checked={selected}
                          disabled={atMax && !selected}
                          onCheckedChange={() =>
                            (!atMax || selected) && handleMultiAnswer(answer.id)
                          }
                        />
                        <Label
                          htmlFor={answer.id}
                          className="flex-1 text-base cursor-pointer leading-relaxed"
                        >
                          {answer.text}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <RadioGroup
                  value={(answers[currentQuestion] as string) || ""}
                  onValueChange={handleSingleAnswer}
                  className="space-y-4"
                >
                  {current.answers.map((answer) => (
                    <div
                      key={answer.id}
                      onClick={() => handleSingleAnswer(answer.id)}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        answers[currentQuestion] === answer.id
                          ? "border-[#FFBB00] bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <RadioGroupItem
                        value={answer.id}
                        id={answer.id}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={answer.id}
                        className="flex-1 text-base cursor-pointer leading-relaxed"
                      >
                        {answer.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              size="lg"
              className="border-2 border-black hover:bg-black hover:text-white disabled:opacity-30"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              size="lg"
              className="bg-[#FFBB00] text-black hover:bg-yellow-400 disabled:opacity-30"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Sidebar Progress Tracker */}
        <div>
          <div className="bg-[#FFBB00] rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Your Progress</h3>
            <div className="space-y-2">
              {questions.map((q, i) => {
                const answered =
                  answers[i] !== undefined &&
                  (Array.isArray(answers[i])
                    ? (answers[i] as string[]).length > 0
                    : true);
                return (
                  <div
                    key={q.id}
                    className={`p-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                      i < currentQuestion && answered
                        ? "bg-black text-white"
                        : i === currentQuestion
                        ? "bg-white text-black border-2 border-black"
                        : "bg-white text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        i < currentQuestion && answered
                          ? "bg-white text-black"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {i < currentQuestion && answered ? "✓" : i + 1}
                    </div>
                    <span className="truncate">{q.section}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
