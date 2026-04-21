import { Link } from "react-router";
import { 
  ArrowRight, 
  Search, 
  Briefcase, 
  Building2, 
  Users, 
  Globe, 
  BookOpen,
  Network,
  TrendingUp,
  FileText
} from "lucide-react";

export default function ResearchExploration() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
            <Search size={32} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 3</div>
            <h1 className="text-4xl font-bold">Research & Exploration</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Investigate career paths, industries, and opportunities that align with your goals
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Why Research Matters</h2>
            <p className="text-gray-600 mb-4">
              Thorough research helps you make informed decisions about your career path. 
              Understanding different industries, roles, and market trends ensures you're 
              prepared for the realities of your chosen field.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mt-4">
              <p className="text-sm font-medium">
                💡 <strong>Pro Tip:</strong> The more you explore, the more opportunities you'll discover. 
                Don't limit yourself to one path—keep an open mind!
              </p>
            </div>
          </div>

          {/* Research Areas */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Key Research Areas</h2>
            <div className="space-y-6">
              {/* Career Fields */}
              <div className="border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Briefcase className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Career Fields & Occupations</h3>
                    <p className="text-gray-600 mb-4">
                      Explore different career paths and understand day-to-day responsibilities, 
                      qualifications, and career progression opportunities.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Research job descriptions and required qualifications
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Review salary ranges and compensation packages
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Understand typical career progression paths
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Identify related and alternative career options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Industries */}
              <div className="border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Building2 className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Industries & Sectors</h3>
                    <p className="text-gray-600 mb-4">
                      Understand different industry landscapes, growth trends, and organizational cultures.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Study industry growth projections and market trends
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Research major companies and employers in the field
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Understand industry challenges and opportunities
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Follow industry news and professional publications
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Networking */}
              <div className="border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Informational Interviews</h3>
                    <p className="text-gray-600 mb-4">
                      Connect with professionals to gain insider perspectives and build your network.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Identify alumni and professionals in your target field
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Prepare thoughtful questions about their career journey
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Learn about unwritten rules and cultural norms
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Build relationships for future opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job Market */}
              <div className="border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TrendingUp className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Job Market Analysis</h3>
                    <p className="text-gray-600 mb-4">
                      Understand employment trends, demand, and geographic considerations.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Review Bureau of Labor Statistics data and projections
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Analyze job posting trends and required skills
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Research geographic hotspots for your field
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Identify emerging roles and future opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Methods */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Effective Research Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <BookOpen className="text-purple-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Online Resources</h3>
                <p className="text-sm text-gray-600">
                  Use O*NET, LinkedIn, Glassdoor, and industry-specific websites
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Network className="text-purple-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Professional Networks</h3>
                <p className="text-sm text-gray-600">
                  Attend career fairs, industry events, and professional association meetings
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Globe className="text-purple-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Company Research</h3>
                <p className="text-sm text-gray-600">
                  Study company websites, annual reports, and employee reviews
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <FileText className="text-purple-600 mb-2" size={24} />
                <h3 className="font-bold mb-2">Job Shadowing</h3>
                <p className="text-sm text-gray-600">
                  Observe professionals in action to understand daily work realities
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Research Tools</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  O*NET Online
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Bureau of Labor Statistics
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  LinkedIn Industry Insights
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Glassdoor Company Reviews
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Industry Association Directory
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-purple-100 rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-purple-600">70%</div>
                <p className="text-sm text-gray-600">of jobs are found through networking</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">85%</div>
                <p className="text-sm text-gray-600">of students change their major at least once</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">5-7</div>
                <p className="text-sm text-gray-600">average career changes in a lifetime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/goal-setting" className="text-gray-600 hover:text-black transition-colors">
          ← Previous: Goal Setting
        </Link>
        <Link
          to="/skill-development"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Next: Skill Development
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
