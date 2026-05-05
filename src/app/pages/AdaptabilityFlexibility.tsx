import { Link } from "react-router";
import { useState } from "react";
import {
  RefreshCw,
  Wind,
  Compass,
  ArrowLeftRight,
  Shield,
  Sparkles,
  Brain,
  TrendingUp,
  RotateCcw,
  Lightbulb,
  Users,
  Target,
  ChevronDown,
} from "lucide-react";

export default function AdaptabilityFlexibility() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  function toggleSection(key: string) {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
            <RefreshCw size={32} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 6</div>
            <h1 className="text-4xl font-bold">Adaptability & Flexibility</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Learn to pivot, adjust, and thrive in an ever-changing career landscape
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Why Adaptability Matters More Than Ever</h2>
            <p className="text-gray-600 mb-4">
              The modern workplace is characterized by rapid change, technological disruption, 
              and evolving job requirements. Your ability to adapt and remain flexible isn't 
              just advantageous—it's essential for long-term career success.
            </p>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mt-4">
              <p className="text-sm font-medium">
                🌟 <strong>Career Reality:</strong> The average person will change careers 
                (not just jobs) 5-7 times during their working life. Adaptability is your 
                most valuable career asset.
              </p>
            </div>
          </div>

          {/* Key Adaptability Skills */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Building Your Adaptability Toolkit</h2>
            <div className="space-y-4">
              {[
                {
                  key: "mindset",
                  Icon: Brain,
                  title: "Growth Mindset",
                  desc: "Embrace challenges as opportunities to learn and develop new capabilities",
                  items: ["View setbacks as learning experiences, not failures","Believe in your capacity to develop new skills","Seek feedback and use it constructively","Celebrate effort and progress, not just outcomes"],
                },
                {
                  key: "learning",
                  Icon: TrendingUp,
                  title: "Continuous Learning",
                  desc: "Commit to lifelong learning and skill development",
                  items: ["Stay current with industry trends and emerging technologies","Pursue ongoing professional development and certifications","Learn adjacent skills to expand your career options","Develop both technical and soft skills continuously"],
                },
                {
                  key: "resilience",
                  Icon: Shield,
                  title: "Resilience & Emotional Intelligence",
                  desc: "Bounce back from setbacks and manage change with emotional strength",
                  items: ["Develop stress management and coping strategies","Build a strong support network for challenging times","Practice self-care and maintain work-life balance","Cultivate optimism and positive reframing skills"],
                },
                {
                  key: "problemsolving",
                  Icon: Lightbulb,
                  title: "Creative Problem Solving",
                  desc: "Find innovative solutions when faced with unexpected challenges",
                  items: ["Approach problems from multiple perspectives","Embrace experimentation and calculated risk-taking","Draw connections between seemingly unrelated ideas","Learn from failures and iterate quickly"],
                },
                {
                  key: "networks",
                  Icon: Users,
                  title: "Diverse Networks & Relationships",
                  desc: "Build connections across industries, roles, and backgrounds",
                  items: ["Cultivate relationships outside your immediate field","Stay connected with former colleagues and classmates","Seek mentors who can guide you through transitions","Share your knowledge and help others adapt"],
                },
              ].map(({ key, Icon, title, desc, items }) => (
                <div key={key} className="border-2 border-teal-200 rounded-lg">
                  <button
                    onClick={() => toggleSection(key)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-teal-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold flex-1">{title}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${openSections.has(key) ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSections.has(key) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 mb-4">{desc}</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {items.map(t => (
                          <li key={t} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Building Adaptability Habits */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Daily Habits to Build Adaptability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <RotateCcw className="text-teal-600 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-sm mb-1">Embrace Discomfort</h3>
                  <p className="text-xs text-gray-600">
                    Regularly try new things and step outside your comfort zone
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Wind className="text-teal-600 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-sm mb-1">Stay Informed</h3>
                  <p className="text-xs text-gray-600">
                    Follow industry trends and emerging opportunities daily
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sparkles className="text-teal-600 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-sm mb-1">Cultivate Curiosity</h3>
                  <p className="text-xs text-gray-600">
                    Ask questions and explore ideas outside your expertise
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Target className="text-teal-600 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-sm mb-1">Practice Flexibility</h3>
                  <p className="text-xs text-gray-600">
                    When plans change, adapt quickly rather than resist
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Adaptability Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Change Management Guide
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Career Pivot Planning Tool
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Resilience Building Workshop
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Industry Trend Reports
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Transferable Skills Assessment
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-4">Recommended Reading</h3>
            <ul className="space-y-3 text-sm">
              <li className="pb-3 border-b border-gray-200">
                <p className="font-medium mb-1">"Mindset: The New Psychology of Success"</p>
                <p className="text-xs text-gray-600">by Carol Dweck</p>
              </li>
              <li className="pb-3 border-b border-gray-200">
                <p className="font-medium mb-1">"The 7 Habits of Highly Effective People"</p>
                <p className="text-xs text-gray-600">by Spencer Johnson</p>
              </li>
              <li>
                <p className="font-medium mb-1">"The Lean Startup"</p>
                <p className="text-xs text-gray-600">by Eric Ries</p>
              </li>
            </ul>
          </div>

          <div className="bg-teal-100 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Career Facts</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-teal-600">5-7</div>
                <p className="text-sm text-gray-600">Average career changes in a lifetime</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">65%</div>
                <p className="text-sm text-gray-600">of students will work in jobs that don't exist yet</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">#1</div>
                <p className="text-sm text-gray-600">Adaptability is the top skill employers seek</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 sm:p-12 text-white text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Your Career Journey Starts Now
        </h2>
        <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
          🎊 Congratulations! You've completed all six steps of the Towson CIS Career Roadmap. 
          Remember: career development is not linear, it's an ongoing process of 
          growth, adaptation, and discovery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Review All Steps
          </Link>
          <a href="mailto:cisadvising@towson.edu" className="px-8 py-3 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          Schedule an advising pppointment
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/action-plan" className="text-gray-600 hover:text-black transition-colors">
          ← Previous: Action Plan
        </Link>
        <Link
          to="/report"
          className="bg-black text-[#FFBB00] font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          View My Report
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
