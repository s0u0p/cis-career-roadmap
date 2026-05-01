import { Link } from "react-router";
import { 
  ArrowRight, 
  TrendingUp, 
  GraduationCap, 
  Users2, 
  Award, 
  Laptop,
  MessageSquare,
  Lightbulb,
  Target,
  CheckCircle2,
  BookMarked,
  Briefcase
} from "lucide-react";

export default function SkillDevelopment() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
            <TrendingUp size={32} />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 4</div>
            <h1 className="text-4xl font-bold">Skill Development</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Build and enhance the competencies that will drive your career success
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Building Your Competitive Edge</h2>
            <p className="text-gray-600 mb-4">
              In today's dynamic job market, continuous skill development is essential.
              Employers seek candidates who demonstrate both technical expertise and
              transferable soft skills. Your ability to learn, adapt, and grow will
              set you apart from other candidates.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mt-4">
              <p className="text-sm font-medium">
                🎯 <strong>Key Insight:</strong> 80% of employers say soft skills are just
                as important as technical skills. Focus on developing both!
              </p>
            </div>
          </div>

          {/* Skill Gap Analysis */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Conduct a Skill Gap Analysis</h2>
            <p className="text-gray-600 mb-6">
              Identify the difference between your current skills and those required for your target career:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
                <h3 className="font-bold mb-2">Identify Target Skills</h3>
                <p className="text-sm text-gray-600">
                  Research job postings to find required skills
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
                <h3 className="font-bold mb-2">Assess Current Skills</h3>
                <p className="text-sm text-gray-600">
                  Honestly evaluate your current competency level
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
                <h3 className="font-bold mb-2">Create Action Plan</h3>
                <p className="text-sm text-gray-600">
                  Develop strategies to close the gaps
                </p>
              </div>
            </div>
          </div>

          {/* Skill Categories */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Essential Skill Categories</h2>
            <div className="space-y-6">
              {/* Technical Skills */}
              <div className="border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Laptop className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Technical & Hard Skills</h3>
                    <p className="text-gray-600 mb-4">
                      Industry-specific knowledge and technical competencies required for your field
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Software proficiency (Microsoft Office, Adobe Suite, programming languages)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Data analysis and interpretation tools
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Industry certifications and specialized training
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Technical writing and documentation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Skills */}
              <div className="border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MessageSquare className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Communication Skills</h3>
                    <p className="text-gray-600 mb-4">
                      The ability to effectively convey ideas and collaborate with others
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Verbal communication and public speaking
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Written communication (emails, reports, presentations)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Active listening and empathy
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Cross-cultural and virtual communication
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership & Teamwork */}
              <div className="border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Users2 className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Leadership & Teamwork</h3>
                    <p className="text-gray-600 mb-4">
                      Working effectively with others and inspiring positive outcomes
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Team collaboration and conflict resolution
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Project management and delegation
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Mentoring and coaching others
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Decision-making and strategic thinking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem Solving */}
              <div className="border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Lightbulb className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Critical Thinking & Problem Solving</h3>
                    <p className="text-gray-600 mb-4">
                      Analyzing situations and developing creative, effective solutions
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Analytical thinking and data-driven decision making
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Creative thinking and innovation
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Research and information gathering
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">
                          Troubleshooting and adaptability
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Strategies */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Skill Development Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <GraduationCap className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Academic Coursework</h3>
                    <p className="text-sm text-gray-600">
                      Choose electives and courses that align with your career goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Briefcase className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Internships & Co-ops</h3>
                    <p className="text-sm text-gray-600">
                      Gain hands-on experience and apply classroom knowledge
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users2 className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Student Organizations</h3>
                    <p className="text-sm text-gray-600">
                      Develop leadership skills through campus involvement
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <BookMarked className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Online Learning</h3>
                    <p className="text-sm text-gray-600">
                      Utilize platforms like Coursera, LinkedIn Learning, and Udemy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Award className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Certifications</h3>
                    <p className="text-sm text-gray-600">
                      Earn industry-recognized credentials to validate expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Target className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Volunteer Work</h3>
                    <p className="text-sm text-gray-600">
                      Build skills while making a positive community impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Learning Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  LinkedIn Learning
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Coursera
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Toastmasters (Public Speaking)
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Industry Certifications Guide
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  TU Skills Workshops
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-4">Skill Assessment Tools</h3>
            <p className="text-sm text-gray-600 mb-4">
              Use these tools to identify and track your skill development:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                Skills Inventory Worksheet
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                LinkedIn Skills Assessment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                Professional Development Tracker
              </li>
            </ul>
          </div>

          <div className="bg-orange-100 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Top Skills in Demand</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="font-bold mb-1">1. Data Analysis</div>
                <div className="text-xs text-gray-600">Growing 28% annually</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="font-bold mb-1">2. Digital Literacy</div>
                <div className="text-xs text-gray-600">Essential across all fields</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-xs text-gray-600">Top soft skill for leaders</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <Link to="/research-exploration" className="text-gray-600 hover:text-black transition-colors">
          ← Previous: Research & Exploration
        </Link>
        <Link
          to="/action-plan"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Next: Action Plan
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
