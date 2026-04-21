import { Link } from "react-router";
import { ArrowRight, UserCircle, Brain, Heart, Sparkles } from "lucide-react";

export default function SelfAssessment() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
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

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">What is Self Assessment?</h2>
            <p className="text-gray-600 mb-4">
              Self-assessment is the process of examining your interests, values, skills, 
              and personality to better understand what careers align with who you are.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Key Areas to Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <Brain className="text-blue-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Skills & Strengths</h3>
                <p className="text-sm text-gray-600">What are you naturally good at?</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <Heart className="text-blue-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Values & Interests</h3>
                <p className="text-sm text-gray-600">What matters most to you?</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <Sparkles className="text-blue-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Personality Traits</h3>
                <p className="text-sm text-gray-600">How do you interact with the world?</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <UserCircle className="text-blue-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Work Preferences</h3>
                <p className="text-sm text-gray-600">What environment suits you best?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Myers-Briggs Assessment
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  StrengthsFinder
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Career Interest Inventory
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/" className="text-gray-600 hover:text-black transition-colors">
          ← Back to Home
        </Link>
        <Link
          to="/goal-setting"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Next: Goal Setting
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
