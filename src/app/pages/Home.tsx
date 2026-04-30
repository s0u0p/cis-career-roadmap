import { useAssessment } from "../context/AssessmentContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { 
  UserCircle, 
  Target, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  RefreshCw,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Self Assessment",
    description: "Discover your strengths, interests, values, and personality traits",
    icon: UserCircle,
    path: "/self-assessment",
    color: "bg-blue-100 text-blue-600",
  },
  {
    number: 2,
    title: "Goal Setting",
    description: "Define clear, achievable career objectives and milestones",
    icon: Target,
    path: "/goal-setting",
    color: "bg-green-100 text-green-600",
  },
  {
    number: 3,
    title: "Research & Exploration",
    description: "Investigate career paths, industries, and opportunities",
    icon: Search,
    path: "/research-exploration",
    color: "bg-purple-100 text-purple-600",
  },
  {
    number: 4,
    title: "Skill Development",
    description: "Build and enhance the competencies needed for your career",
    icon: TrendingUp,
    path: "/skill-development",
    color: "bg-orange-100 text-orange-600",
  },
  {
    number: 5,
    title: "Action Plan",
    description: "Create a strategic roadmap to achieve your career goals",
    icon: CheckCircle,
    path: "/action-plan",
    color: "bg-red-100 text-red-600",
  },
  {
    number: 6,
    title: "Adaptability & Flexibility",
    description: "Learn to pivot and adjust to changing career landscapes",
    icon: RefreshCw,
    path: "/adaptability-flexibility",
    color: "bg-teal-100 text-teal-600",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FFBB00] to-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your CIS Career Roadmap
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              A comprehensive 6-step guide to help Towson University CIS students 
              navigate their career journey with confidence and purpose.
            </p>
            <Link
              to="/research-exploration"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Six Steps to Career Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow this proven framework to build a strong foundation for your professional future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Link
                key={step.number}
                to={step.path}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-[#FFBB00]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${step.color} p-3 rounded-lg`}>
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Step {step.number}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FFBB00] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center gap-2 text-[#FFBB00] font-medium">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-black text-white rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Take Control of Your Career?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              The Towson University CIS Department is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/self-assessment"
                className="px-8 py-3 bg-[#FFBB00] text-black rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Start from beginning
              </Link>
              <a
                href="mailto:cisadvising@towson.edu"
                className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                Schedule an advising pppointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
