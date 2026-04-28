import { Link } from "react-router";
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
  Target
} from "lucide-react";

export default function AdaptabilityFlexibility() {
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
            <div className="space-y-6">
              {/* Growth Mindset */}
              <div className="border-2 border-teal-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Brain className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Growth Mindset</h3>
                    <p className="text-gray-600 mb-4">
                      Embrace challenges as opportunities to learn and develop new capabilities
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        View setbacks as learning experiences, not failures
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Believe in your capacity to develop new skills
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Seek feedback and use it constructively
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Celebrate effort and progress, not just outcomes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Continuous Learning */}
              <div className="border-2 border-teal-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <TrendingUp className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-gray-600 mb-4">
                      Commit to lifelong learning and skill development
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Stay current with industry trends and emerging technologies
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Pursue ongoing professional development and certifications
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Learn adjacent skills to expand your career options
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Develop both technical and soft skills continuously
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resilience */}
              <div className="border-2 border-teal-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Shield className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Resilience & Emotional Intelligence</h3>
                    <p className="text-gray-600 mb-4">
                      Bounce back from setbacks and manage change with emotional strength
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Develop stress management and coping strategies
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Build a strong support network for challenging times
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Practice self-care and maintain work-life balance
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Cultivate optimism and positive reframing skills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Creative Problem Solving */}
              <div className="border-2 border-teal-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Lightbulb className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Creative Problem Solving</h3>
                    <p className="text-gray-600 mb-4">
                      Find innovative solutions when faced with unexpected challenges
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Approach problems from multiple perspectives
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Embrace experimentation and calculated risk-taking
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Draw connections between seemingly unrelated ideas
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Learn from failures and iterate quickly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Networking & Relationships */}
              <div className="border-2 border-teal-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Users className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Diverse Networks & Relationships</h3>
                    <p className="text-gray-600 mb-4">
                      Build connections across industries, roles, and backgrounds
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Cultivate relationships outside your immediate field
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Stay connected with former colleagues and classmates
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Seek mentors who can guide you through transitions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        Share your knowledge and help others adapt
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pivoting Strategies */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">When and How to Pivot Your Career</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Compass className="text-teal-600" size={20} />
                  Signs It Might Be Time to Pivot
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    Your industry is experiencing significant decline or disruption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    You've outgrown your current role with no advancement opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    Your values and interests have evolved in a new direction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    You've discovered a passion for a different field or role
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    Economic or life circumstances require a change
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <ArrowLeftRight className="text-teal-600" size={20} />
                  Strategic Pivoting Approaches
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">The Bridge Strategy</h4>
                    <p className="text-sm text-gray-600">
                      Identify transferable skills and experiences that connect your current 
                      role to your desired role. Build a narrative that shows logical progression.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">The Side Hustle Transition</h4>
                    <p className="text-sm text-gray-600">
                      Test new career directions through part-time work, freelancing, or 
                      volunteer projects before making a full commitment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">The Upskilling Pivot</h4>
                    <p className="text-sm text-gray-600">
                      Invest in education, certifications, or training to make yourself 
                      competitive in a new field before transitioning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">The Industry Shift</h4>
                    <p className="text-sm text-gray-600">
                      Keep your role but change industries, leveraging your functional 
                      expertise in a different context.
                    </p>
                  </div>
                </div>
              </div>
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
                <p className="font-medium mb-1">"Mindset" by Carol Dweck</p>
                <p className="text-xs text-gray-600">The power of growth mindset</p>
              </li>
              <li className="pb-3 border-b border-gray-200">
                <p className="font-medium mb-1">"Who Moved My Cheese?"</p>
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
          You've completed all six steps of the Towson Career Strategy Framework. 
          Remember: career development is not linear—it's an ongoing process of 
          growth, adaptation, and discovery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Review All Steps
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/action-plan" className="text-gray-600 hover:text-black transition-colors">
          ← Previous: Action Plan
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
