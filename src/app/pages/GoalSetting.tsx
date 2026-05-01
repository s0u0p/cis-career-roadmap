import { Link } from "react-router";
import { ArrowRight, Target, Calendar, Award, Zap } from "lucide-react";

export default function GoalSetting() {
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
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">S</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Specific</h3>
                  <p className="text-sm text-gray-600">Define exactly what you want to achieve</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">M</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Measurable</h3>
                  <p className="text-sm text-gray-600">Establish criteria to track progress</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">A</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Achievable</h3>
                  <p className="text-sm text-gray-600">Set realistic and attainable goals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">R</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Relevant</h3>
                  <p className="text-sm text-gray-600">Align with your values and career vision</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">T</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Time-bound</h3>
                  <p className="text-sm text-gray-600">Set deadlines and timeframes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Types of Career Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-green-200 rounded-lg p-4 text-center">
                <Zap className="text-green-600 mb-2 mx-auto" size={24} />
                <h3 className="font-bold mb-2">Short-term</h3>
                <p className="text-sm text-gray-600">0-1 year</p>
              </div>
              <div className="border-2 border-green-200 rounded-lg p-4 text-center">
                <Calendar className="text-green-600 mb-2 mx-auto" size={24} />
                <h3 className="font-bold mb-2">Mid-term</h3>
                <p className="text-sm text-gray-600">1-5 years</p>
              </div>
              <div className="border-2 border-green-200 rounded-lg p-4 text-center">
                <Award className="text-green-600 mb-2 mx-auto" size={24} />
                <h3 className="font-bold mb-2">Long-term</h3>
                <p className="text-sm text-gray-600">5+ years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Tools</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Goal Setting Worksheet
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Vision Board Template
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Career Timeline Planner
                </a>
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
