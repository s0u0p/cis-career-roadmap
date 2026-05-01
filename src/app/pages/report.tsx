import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FileDown, ArrowLeft, Trophy, Star, ChevronRight } from "lucide-react";
import { scoreAssessment } from "../assessment/scoring";
import { generatePDF } from "../../generatePDF";
import type { ScoredField } from "../assessment/types";

export default function Report() {
  const navigate = useNavigate();
  const [topThree, setTopThree] = useState<ScoredField[]>([]);
  const [studentName, setStudentName] = useState("");
  const [major, setMajor] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    // Load saved answers from localStorage (set during AssessmentQuiz)
    const savedAnswers = localStorage.getItem("assessmentAnswers");
    const savedName = localStorage.getItem("studentName") || "";
    const savedMajor = localStorage.getItem("studentMajor") || "";

    if (!savedAnswers) {
      navigate("/assessment");
      return;
    }

    const answers: string[] = JSON.parse(savedAnswers);
    const { topThree } = scoreAssessment(answers);
    setTopThree(topThree);
    setStudentName(savedName);
    setMajor(savedMajor);
  }, [navigate]);

  function handleDownload() {
    if (!studentName.trim()) {
      alert("Please enter your name before downloading.");
      return;
    }
    if (!major.trim()) {
      alert("Please enter your major before downloading.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      generatePDF({ studentName, major, topThree, summary });
      setLoading(false);
      setDownloaded(true);
    }, 300);
  }

  const rankColors = [
    "bg-yellow-100 text-yellow-700 border-yellow-300",
    "bg-gray-100 text-gray-600 border-gray-300",
    "bg-orange-100 text-orange-600 border-orange-300",
  ];

  const barColors = ["bg-[#FFBB00]", "bg-gray-400", "bg-orange-400"];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFBB00] to-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-black/70 hover:text-black mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-black text-[#FFBB00] p-3 rounded-xl">
              <Trophy size={28} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Your Career Report</h1>
              <p className="text-black/70 mt-1">Based on your assessment results</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* Student Info Form */}
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent">
          <h2 className="text-xl font-bold mb-4">Student Information</h2>
          <p className="text-gray-500 text-sm mb-4">
            This will appear on your official Towson University PDF report.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Major <span className="text-red-500">*</span>
              </label>
              <select
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
              >
                <option value="">Select your major</option>
                <option>Computer Science</option>
                <option>Information Systems</option>
                <option>Cybersecurity</option>
                <option>Computer Networks</option>
                <option>Applied Information Technology</option>
              </select>
            </div>
          </div>
        </div>

        {/* Career Match Results */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-1">Career Match Results</h2>
          <p className="text-gray-500 text-sm mb-6">Your top 3 matches based on your assessment</p>

          <div className="space-y-6">
            {topThree.map((result, i) => (
              <div key={result.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${rankColors[i]}`}>
                      #{i + 1}
                    </span>
                    <span className="font-semibold text-gray-800">{result.label}</span>
                    {i === 0 && <Star size={16} className="text-yellow-500 fill-yellow-400" />}
                  </div>
                  <span className="text-sm font-bold text-gray-600">{result.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`${barColors[i]} h-2.5 rounded-full transition-all duration-700`}
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Match Detail */}
        {topThree[0] && (
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-[#FFBB00]">
            <div className="flex items-center gap-2 mb-1">
              <Star size={18} className="text-yellow-500 fill-yellow-400" />
              <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">Top Match</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{topThree[0].label}</h2>
            <p className="text-gray-600 mb-6">{topThree[0].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Skills */}
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {topThree[0].skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Roles */}
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Example Roles</h3>
                <ul className="space-y-1.5">
                  {topThree[0].exampleRoles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight size={14} className="text-[#FFBB00]" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Certifications</h3>
                <ul className="space-y-1.5">
                  {topThree[0].certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight size={14} className="text-[#FFBB00]" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-1">Personal Summary</h2>
          <p className="text-gray-500 text-sm mb-4">
            Optional: add a note about your goals or strengths to include in the PDF.
          </p>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="e.g. I am passionate about cybersecurity and hope to pursue a role in threat intelligence after graduation..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFBB00] resize-none"
          />
        </div>

        {/* Download Button */}
        <div className="bg-black text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Download Your Official Report</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Generates a Towson University official PDF with your career results, skills, roles, and next steps.
          </p>
          <button
            onClick={handleDownload}
            disabled={loading}
            className="inline-flex items-center gap-3 bg-[#FFBB00] text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <FileDown size={20} />
            {loading ? "Generating PDF…" : downloaded ? "Download Again" : "Download PDF Report"}
          </button>
          {downloaded && (
            <p className="text-green-400 text-sm mt-4">
              ✓ Report downloaded successfully!
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
