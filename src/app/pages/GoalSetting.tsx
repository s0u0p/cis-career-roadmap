import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Target, Calendar, Award, Zap } from "lucide-react";

export default function GoalSetting() {
  const [shortTerm, setShortTerm] = useState("");
  const [midTerm, setMidTerm] = useState("");
  const [longTerm, setLongTerm] = useState("");

  useEffect(() => {
    setShortTerm(localStorage.getItem("goalShortTerm") || "");
    setMidTerm(localStorage.getItem("goalMidTerm") || "");
    setLongTerm(localStorage.getItem("goalLongTerm") || "");
  }, []);

  function handleChange(key: string, value: string, setter: (v: string) => void) {
    setter(value);
    localStorage.setItem(key, value);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-lg">
            <Target size={32} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 2</div>
            <h1 className="text-4xl font-bold">Goal Setting</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Transform your career aspirations into actionable objectives
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Why Set Career Goals?</h2>
            <p className="text-gray-600 mb-4">
              Clear goals provide direction, motivation, and a framework for measuring
              your progress. They help you make informed decisions about your education
              and career path.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">SMART Goal Framework</h2>
            <div className="space-y-4">
              {[
                { letter: "S", title: "Specific", desc: "Define exactly what you want to achieve" },
                { letter: "M", title: "Measurable", desc: "Establish criteria to track progress" },
                { letter: "A", title: "Achievable", desc: "Set realistic and attainable goals" },
                { letter: "R", title: "Relevant", desc: "Align with your values and career vision" },
                { letter: "T", title: "Time-bound", desc: "Set deadlines and timeframes" },
              ].map(({ letter, title, desc }) => (
                <div key={letter} className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600">{letter}</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Types of Career Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-green-200 rounded-lg p-4 text-center">
                <Zap className="text-green-600 mb-2 mx-auto" size={24} />
                <h3 className="font-bold mb-2">Short-term</h3>
                <p className="text-sm text-gray-600">0–1 year</p>
              </div>
              <div className="border-2 border-green-200 rounded-lg p-4 text-center">
                <Calendar className="text-green-600 mb-2 mx-auto" size={24} />
                <h3 className="font-bold mb-2">Mid-term</h3>
                <p className="text-sm text-gray-600">1–5 years</p>
              </div>
              <div className="border-2 border-green-200 rounded-lg p-4 text-center">
                <Award className="text-green-600 mb-2 mx-auto" size={24} />
                <h3 className="font-bold mb-2">Long-term</h3>
                <p className="text-sm text-gray-600">5+ years</p>
              </div>
            </div>
          </div>

          {/* Goal Input Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-2">Your Career Goals</h2>
            <p className="text-gray-500 text-sm mb-6">
              Write your personal goals below. These will be included in your PDF report.
            </p>
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 font-bold mb-1">
                  <Zap className="text-green-600" size={18} />
                  Short-term Goal
                  <span className="text-xs font-normal text-gray-400 ml-1">0–1 year</span>
                </label>
                <textarea
                  value={shortTerm}
                  onChange={(e) => handleChange("goalShortTerm", e.target.value, setShortTerm)}
                  placeholder="e.g. Land a summer internship in cybersecurity by May 2026"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 font-bold mb-1">
                  <Calendar className="text-green-600" size={18} />
                  Mid-term Goal
                  <span className="text-xs font-normal text-gray-400 ml-1">1–5 years</span>
                </label>
                <textarea
                  value={midTerm}
                  onChange={(e) => handleChange("goalMidTerm", e.target.value, setMidTerm)}
                  placeholder="e.g. Obtain a CompTIA Security+ certification and secure a full-time role as a security analyst"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 font-bold mb-1">
                  <Award className="text-green-600" size={18} />
                  Long-term Goal
                  <span className="text-xs font-normal text-gray-400 ml-1">5+ years</span>
                </label>
                <textarea
                  value={longTerm}
                  onChange={(e) => handleChange("goalLongTerm", e.target.value, setLongTerm)}
                  placeholder="e.g. Lead a cybersecurity team at a major tech company or start my own consulting firm"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Goal Setting Tips</h3>
            <ul className="space-y-3">
              <li>
                <div className="block p-3 bg-white rounded-lg text-sm">
                  <span className="font-semibold">Write it down.</span> Goals that are written out are significantly more likely to be achieved than ones kept only in your head.
                </div>
              </li>
              <li>
                <div className="block p-3 bg-white rounded-lg text-sm">
                  <span className="font-semibold">Start with the end in mind.</span> Picture where you want to be in 10 years, then work backwards to set milestones that get you there.
                </div>
              </li>
              <li>
                <div className="block p-3 bg-white rounded-lg text-sm">
                  <span className="font-semibold">Review and revise regularly.</span> Goals aren't set in stone. Revisit them each semester and adjust as your interests and opportunities evolve.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/self-assessment" className="text-gray-600 hover:text-black transition-colors">
          ← Previous: Self Assessment
        </Link>
        <Link
          to="/research-exploration"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Next: Research & Exploration
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
