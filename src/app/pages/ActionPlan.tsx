import { Link } from "react-router";
import { 
  ArrowRight, 
  CheckCircle, 
  Calendar,
  ClipboardList,
  BarChart3,
  ListChecks,
  Flag,
  Clock,
  MapPin,
  Zap,
  FileText,
  Edit3
} from "lucide-react";

export default function ActionPlan() {
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
            <div className="space-y-6">
              {/* Clear Objectives */}
              <div className="border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Flag className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Clear Objectives</h3>
                    <p className="text-gray-600 mb-4">
                      Define specific, measurable outcomes you want to achieve
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">Example:</p>
                      <p className="text-sm text-gray-600">
                        "Secure a marketing internship at a mid-to-large sized company by May 2026"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Calendar className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Realistic Timeline</h3>
                    <p className="text-gray-600 mb-4">
                      Break down your goals into short-term, mid-term, and long-term milestones
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          <strong>This Month:</strong> Update resume and LinkedIn profile
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          <strong>Next 3 Months:</strong> Apply to 10 internships, attend 2 networking events
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          <strong>Next 6 Months:</strong> Complete internship, build portfolio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Steps */}
              <div className="border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <ListChecks className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Specific Action Steps</h3>
                    <p className="text-gray-600 mb-4">
                      List concrete tasks that move you toward your objectives
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Review and update your resume by March 15
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Attend Marketing Club meetings every Tuesday
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Complete Google Analytics certification by April 1
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Conduct 3 informational interviews with marketing professionals
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <BarChart3 className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Progress Tracking System</h3>
                    <p className="text-gray-600 mb-4">
                      Establish methods to monitor and measure your advancement
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          1
                        </div>
                        <span className="text-sm text-gray-600">
                          Weekly review of completed tasks and upcoming deadlines
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          2
                        </div>
                        <span className="text-sm text-gray-600">
                          Monthly assessment of goal progress and adjustments needed
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          3
                        </div>
                        <span className="text-sm text-gray-600">
                          Quarterly big-picture evaluation and strategy refinement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

            <div>
              <h3 className="text-xl font-bold mb-3 text-teal-700">Adaptability & Growth Actions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    Identify one area outside your comfort zone and commit to learning about it this month
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    Create a "Plan B" for your career—identify alternative paths if your current plan changes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    Join a professional group or community in an adjacent field to broaden your perspective
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <p className="text-gray-700">
                    Practice mindfulness or stress-management techniques to build emotional resilience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    5
                  </div>
                  <p className="text-gray-700">
                    Reflect quarterly on your skills and identify emerging trends that might affect your career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Planning Tools</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText size={18} />
                  <span className="text-sm">Action Plan Template</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar size={18} />
                  <span className="text-sm">Timeline Builder</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <BarChart3 size={18} />
                  <span className="text-sm">Progress Tracker</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <Edit3 size={18} />
                  <span className="text-sm">Goal Setting Worksheet</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-4">Quick Tips</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Clock className="text-red-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium mb-1">Start Small</p>
                  <p className="text-xs text-gray-600">
                    Begin with one achievable task to build momentum
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="text-red-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium mb-1">Be Specific</p>
                  <p className="text-xs text-gray-600">
                    Vague plans lead to vague results
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Zap className="text-red-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium mb-1">Take Action Now</p>
                  <p className="text-xs text-gray-600">
                    Perfect plans aren't as valuable as imperfect action
                  </p>
                </div>
              </div>
            </div>
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
