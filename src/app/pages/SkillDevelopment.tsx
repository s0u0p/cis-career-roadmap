import { Link } from "react-router";
import { useState } from "react";
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
  Briefcase,
  ExternalLink,
  Clock,
  ChevronDown,
} from "lucide-react";
import { useAssessment } from "../context/AssessmentContext";
import certifications from "../data/certifications";

const LEVEL_COLORS: Record<string, string> = {
  Entry: "bg-green-100 text-green-700",
  Associate: "bg-blue-100 text-blue-700",
  Intermediate: "bg-purple-100 text-purple-700",
  Professional: "bg-orange-100 text-orange-700",
  Specialty: "bg-red-100 text-red-700",
};

export default function SkillDevelopment() {
  const { result } = useAssessment();
  const top3 = result?.allResults.slice(0, 3) ?? [];
  const [openField, setOpenField] = useState<string | null>(top3[0]?.id ?? null);
  const [openSkills, setOpenSkills] = useState<Set<string>>(new Set());
  function toggleSkill(key: string) {
    setOpenSkills(prev => {
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
            <div className="space-y-4">
              {[
                {
                  key: "technical",
                  Icon: Laptop,
                  title: "Technical & Hard Skills",
                  desc: "Industry-specific knowledge and technical competencies required for your field",
                  items: ["Software proficiency (Microsoft Office, Adobe Suite, programming languages)","Data analysis and interpretation tools","Industry certifications and specialized training","Technical writing and documentation"],
                },
                {
                  key: "communication",
                  Icon: MessageSquare,
                  title: "Communication Skills",
                  desc: "The ability to effectively convey ideas and collaborate with others",
                  items: ["Verbal communication and public speaking","Written communication (emails, reports, presentations)","Active listening and empathy","Cross-cultural and virtual communication"],
                },
                {
                  key: "leadership",
                  Icon: Users2,
                  title: "Leadership & Teamwork",
                  desc: "Working effectively with others and inspiring positive outcomes",
                  items: ["Team collaboration and conflict resolution","Project management and delegation","Mentoring and coaching others","Decision-making and strategic thinking"],
                },
                {
                  key: "problemsolving",
                  Icon: Lightbulb,
                  title: "Critical Thinking & Problem Solving",
                  desc: "Analyzing situations and developing creative, effective solutions",
                  items: ["Analytical thinking and data-driven decision making","Creative thinking and innovation","Research and information gathering","Troubleshooting and adaptability"],
                },
              ].map(({ key, Icon, title, desc, items }) => (
                <div key={key} className="border-2 border-orange-200 rounded-lg">
                  <button
                    onClick={() => toggleSkill(key)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-orange-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold flex-1">{title}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${openSkills.has(key) ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSkills.has(key) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 mb-4">{desc}</p>
                      <div className="space-y-2">
                        {items.map(t => (
                          <div key={t} className="flex items-start gap-2">
                            <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-600">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
                <a href="https://www.towson.edu/technology/training/resources/linkedin-learning.html" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  LinkedIn Learning
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Coursera
                </a>
              </li>
              <li>
                <a href="https://www.toastmasters.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  Toastmasters (Public Speaking)
                </a>
              </li>
              <li>
                <a href="https://www.towson.edu/tutoring-learning/academic-support/workshops/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  TU Skills Workshops
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#FFBB00] rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Recommended Certifications</h3>
            {top3.length === 0 ? (
              <p className="text-sm bg-white rounded-lg p-3">
                Complete the assessment to see certifications tailored to your top career matches.
              </p>
            ) : (
              <div className="space-y-2">
                {top3.map((field) => {
                  const certs = certifications[field.id] ?? [];
                  const isOpen = openField === field.id;
                  return (
                    <div key={field.id} className="rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenField(isOpen ? null : field.id)}
                        className="w-full flex items-center justify-between bg-white bg-opacity-80 hover:bg-opacity-100 transition-all px-3 py-2.5 text-left"
                      >
                        <span className="font-semibold text-xs">{field.label}</span>
                        <ChevronDown
                          size={14}
                          className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="space-y-1.5 pt-1.5">
                          {certs.map((cert) => (
                            <a
                              key={cert.name}
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-white rounded-lg p-3 hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-start justify-between gap-1 mb-1">
                                <span className="font-semibold text-xs leading-tight">{cert.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium whitespace-nowrap flex-shrink-0 ${LEVEL_COLORS[cert.level]}`}>
                                  {cert.level}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-500 mb-1">{cert.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1 text-[10px] text-gray-400">
                                  <Clock size={10} />
                                  {cert.duration}
                                </span>
                                <span className="flex items-center gap-0.5 text-[10px] text-orange-600 font-medium">
                                  Learn More <ExternalLink size={9} />
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
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
