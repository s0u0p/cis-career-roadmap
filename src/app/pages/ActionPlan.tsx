import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  BarChart3,
  ListChecks,
  Flag,
  FileDown,
  ChevronDown,
} from "lucide-react";
import { scoreAssessment } from "../assessment/scoring";
import { generatePDF } from "../../generatePDF";

const MAX_CHARS = 500;

export default function ActionPlan() {
  const [actionPlan, setActionPlan] = useState("");
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  function toggleSection(key: string) {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    setActionPlan(localStorage.getItem("actionPlan") || "");
  }, []);

  function handleActionPlanChange(value: string) {
    if (value.length > MAX_CHARS) return;
    setActionPlan(value);
    localStorage.setItem("actionPlan", value);
  }

  function handleDownload() {
    const savedAnswers = localStorage.getItem("assessmentAnswers");
    const studentName = localStorage.getItem("studentName") || "";
    const major = localStorage.getItem("studentMajor") || "";

    if (!studentName.trim() || !major.trim() || !savedAnswers) {
      alert("Please complete the assessment and fill in your name and major on the Report page first.");
      return;
    }

    const answers: string[] = JSON.parse(savedAnswers);
    const { topThree } = scoreAssessment(answers);
    const summary = localStorage.getItem("studentSummary") || "";
    const shortTermGoal = localStorage.getItem("goalShortTerm") || "";
    const midTermGoal = localStorage.getItem("goalMidTerm") || "";
    const longTermGoal = localStorage.getItem("goalLongTerm") || "";

    setLoading(true);
    setTimeout(() => {
      generatePDF({ studentName, major, topThree, summary, shortTermGoal, midTermGoal, longTermGoal, actionPlan });
      setLoading(false);
      setDownloaded(true);
    }, 300);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 text-red-600 p-3 rounded-lg">
            <CheckCircle size={32} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 5</div>
            <h1 className="text-4xl font-bold">Action Plan</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Create a strategic roadmap to turn your career goals into reality
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Why You Need an Action Plan</h2>
            <p className="text-gray-600 mb-4">
              An action plan transforms your career aspirations from ideas into concrete steps. 
              It provides structure, accountability, and a clear path forward. Without a plan, 
              even the best goals remain unfulfilled dreams.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4">
              <p className="text-sm font-medium">
                ⚡ <strong>Success Factor:</strong> Students with written action plans are 42% 
                more likely to achieve their career goals than those without formal plans.
              </p>
            </div>
          </div>

          {/* Action Plan Components */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Essential Components of Your Action Plan</h2>
            <div className="space-y-4">
              {[
                {
                  key: "objectives",
                  Icon: Flag,
                  title: "Clear Objectives",
                  body: (
                    <>
                      <p className="text-gray-600 mb-4">Define specific, measurable outcomes you want to achieve</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium mb-2">Example:</p>
                        <p className="text-sm text-gray-600">"Secure a marketing internship at a mid-to-large sized company by May 2026"</p>
                      </div>
                    </>
                  ),
                },
                {
                  key: "timeline",
                  Icon: Calendar,
                  title: "Realistic Timeline",
                  body: (
                    <>
                      <p className="text-gray-600 mb-4">Break down your goals into short-term, mid-term, and long-term milestones</p>
                      <div className="space-y-2">
                        {[["This Month","Update resume and LinkedIn profile"],["Next 3 Months","Apply to 10 internships, attend 2 networking events"],["Next 6 Months","Complete internship, build portfolio"]].map(([label, text]) => (
                          <div key={label} className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-600"><strong>{label}:</strong> {text}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ),
                },
                {
                  key: "steps",
                  Icon: ListChecks,
                  title: "Specific Action Steps",
                  body: (
                    <>
                      <p className="text-gray-600 mb-4">List concrete tasks that move you toward your objectives</p>
                      <ul className="space-y-2">
                        {["Review and update your resume by March 15","Attend Marketing Club meetings every Tuesday","Complete Google Analytics certification by April 1","Conduct 3 informational interviews with marketing professionals"].map(t => (
                          <li key={t} className="flex items-start gap-2">
                            <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-600">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ),
                },
                {
                  key: "tracking",
                  Icon: BarChart3,
                  title: "Progress Tracking System",
                  body: (
                    <>
                      <p className="text-gray-600 mb-4">Establish methods to monitor and measure your advancement</p>
                      <div className="space-y-3">
                        {["Weekly review of completed tasks and upcoming deadlines","Monthly assessment of goal progress and adjustments needed","Quarterly big-picture evaluation and strategy refinement"].map((t, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                            <span className="text-sm text-gray-600">{t}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ),
                },
              ].map(({ key, Icon, title, body }) => (
                <div key={key} className="border-2 border-red-200 rounded-lg">
                  <button
                    onClick={() => toggleSection(key)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold flex-1">{title}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${openSections.has(key) ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSections.has(key) && (
                    <div className="px-6 pb-6">{body}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Common Pitfalls */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Common Action Planning Pitfalls to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-red-600 mb-2">❌ Too Vague</h3>
                <p className="text-sm text-gray-600 mb-2">"Get a job in marketing"</p>
                <h3 className="font-bold text-green-600 mb-2">✓ Specific</h3>
                <p className="text-sm text-gray-600">"Secure digital marketing coordinator role at tech startup by June 2026"</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-red-600 mb-2">❌ Unrealistic</h3>
                <p className="text-sm text-gray-600 mb-2">"Become CMO in 6 months"</p>
                <h3 className="font-bold text-green-600 mb-2">✓ Achievable</h3>
                <p className="text-sm text-gray-600">"Gain 1-2 years experience, then pursue management training"</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-red-600 mb-2">❌ No Deadlines</h3>
                <p className="text-sm text-gray-600 mb-2">"Update resume sometime"</p>
                <h3 className="font-bold text-green-600 mb-2">✓ Time-bound</h3>
                <p className="text-sm text-gray-600">"Complete resume revision by Friday, March 20"</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-red-600 mb-2">❌ No Tracking</h3>
                <p className="text-sm text-gray-600 mb-2">Set plan and forget it</p>
                <h3 className="font-bold text-green-600 mb-2">✓ Monitored</h3>
                <p className="text-sm text-gray-600">Weekly check-ins, monthly reviews, quarterly assessments</p>
              </div>
            </div>
          </div>

          {/* Comprehensive Action Items */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Your Comprehensive Action Plan</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-red-700">Research & Exploration Actions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    Identify 3-5 career paths that interest you and research each thoroughly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    Conduct at least 2 informational interviews with professionals in your field
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    Create a comparison chart of different career options with pros and cons
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <p className="text-gray-700">
                    Subscribe to industry newsletters and follow thought leaders on LinkedIn
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-orange-700">Skill Development Actions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    Complete a skills inventory to identify your current strengths and areas for growth
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    Enroll in at least one skill-building course, workshop, or training program this semester
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    Join a student organization or take on a leadership role to develop soft skills
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <p className="text-gray-700">
                    Apply for internships or part-time positions to gain practical experience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    5
                  </div>
                  <p className="text-gray-700">
                    Document your skill development in a portfolio or professional development plan
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-red-700">Action Planning Steps</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    Create your action plan template and organize your goals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    List your top 3 career goals for the next 12 months
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    Break each goal into 5-7 specific action steps with deadlines
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <p className="text-gray-700">
                    Schedule your first task in your calendar for this week
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    5
                  </div>
                  <p className="text-gray-700">
                    Share your plan with a mentor or accountability partner for feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Planning Tips</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-sm">Start small - Begin with one achievable task to build momentum</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-sm">Be specific - Vague plans lead to vague results</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-sm">Take action now - Perfect plans aren't as valuable as imperfect action</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-sm">Track your progress - Document what you do so you can look back on it later</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-red-100 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Success Metrics</h3>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-red-600">90%</div>
                <p className="text-xs text-gray-600">Students who track progress reach their goals</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">42%</div>
                <p className="text-xs text-gray-600">More likely to succeed with written plans</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">3x</div>
                <p className="text-xs text-gray-600">Faster goal achievement with accountability</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Action Plan */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-1">My Action Plan</h2>
        <p className="text-gray-500 text-sm mb-4">
          Summarize your personal action plan in 200 characters or fewer. This will appear in your PDF report.
        </p>
        <textarea
          value={actionPlan}
          onChange={(e) => handleActionPlanChange(e.target.value)}
          placeholder="e.g. Update resume, apply to 5 internships, and complete one certification by end of semester."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
        />
        <div className={`text-right text-xs mt-1 ${actionPlan.length >= MAX_CHARS ? "text-red-500 font-semibold" : "text-gray-400"}`}>
          {actionPlan.length} / {MAX_CHARS}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/skill-development" className="text-gray-600 hover:text-black transition-colors">
          ← Previous: Skill Development
        </Link>
        <Link
          to="/adaptability-flexibility"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Next: Adaptability & Flexibility
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
