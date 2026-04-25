import { Link, useNavigate } from "react-router";
import { ArrowRight, Trophy, ExternalLink, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import PercentageRing from "../components/PercentageRing";
import { useAssessment } from "../context/AssessmentContext";

// O*NET placeholder data, replace with live API calls later
const onetData: Record<
  string,
  {
    code: string;
    title: string;
    brightOutlook: boolean;
    medianSalary: string;
    growth: string;
  }
> = {
  cybersecurity: {
    code: "15-1212.00",
    title: "Information Security Analysts",
    brightOutlook: true,
    medianSalary: "$112,000",
    growth: "+35%",
  },
  data_science: {
    code: "15-2051.00",
    title: "Data Scientists",
    brightOutlook: true,
    medianSalary: "$103,000",
    growth: "+36%",
  },
  software_engineering: {
    code: "15-1252.00",
    title: "Software Developers",
    brightOutlook: true,
    medianSalary: "$127,000",
    growth: "+25%",
  },
  web_development: {
    code: "15-1254.00",
    title: "Web Developers",
    brightOutlook: false,
    medianSalary: "$78,000",
    growth: "+16%",
  },
  cloud_computing: {
    code: "15-1244.00",
    title: "Cloud Engineers",
    brightOutlook: true,
    medianSalary: "$115,000",
    growth: "+28%",
  },
  networking: {
    code: "15-1241.00",
    title: "Network Architects",
    brightOutlook: false,
    medianSalary: "$120,000",
    growth: "+4%",
  },
  database_admin: {
    code: "15-1242.00",
    title: "Database Administrators",
    brightOutlook: false,
    medianSalary: "$101,000",
    growth: "+8%",
  },
  it_project_management: {
    code: "15-1299.09",
    title: "IT Project Managers",
    brightOutlook: false,
    medianSalary: "$98,000",
    growth: "+11%",
  },
  ux_ui_design: {
    code: "15-1255.00",
    title: "Web & Digital Interface Designers",
    brightOutlook: false,
    medianSalary: "$83,000",
    growth: "+16%",
  },
  ai_ml: {
    code: "15-2051.00",
    title: "Machine Learning Engineers",
    brightOutlook: true,
    medianSalary: "$136,000",
    growth: "+40%",
  },
  it_support: {
    code: "15-1232.00",
    title: "Computer User Support Specialists",
    brightOutlook: false,
    medianSalary: "$57,000",
    growth: "+6%",
  },
  information_systems: {
    code: "15-1211.00",
    title: "Computer Systems Analysts",
    brightOutlook: false,
    medianSalary: "$99,000",
    growth: "+10%",
  },
};

const rankConfig = [
  {
    border: "border-yellow-400",
    ringColor: "#FFBB00",
    badgeBg: "bg-yellow-400 text-black",
    headerBg: "from-black to-gray-900",
    label: "1st Match",
  },
  {
    border: "border-gray-400",
    ringColor: "#9CA3AF",
    badgeBg: "bg-gray-400 text-white",
    headerBg: "from-gray-700 to-gray-600",
    label: "2nd Match",
  },
  {
    border: "border-orange-400",
    ringColor: "#F97316",
    badgeBg: "bg-orange-500 text-white",
    headerBg: "from-orange-900 to-orange-700",
    label: "3rd Match",
  },
];

export default function SelfAssessment() {
  const { result, clearResult } = useAssessment();
  const navigate = useNavigate();

  // Not completed yet, prompt to take the assessment
  if (!result) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-xl text-gray-600 mb-6">
          You haven't completed the assessment yet.
        </p>
        <Link
          to="/assessment"
          className="inline-flex items-center gap-2 bg-[#FFBB00] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
        >
          Take the Assessment
          <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#FFBB00] p-3 rounded-lg">
            <Trophy size={32} className="text-black" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Step 1 — Results</div>
            <h1 className="text-4xl font-bold">Your Career Assessment Results</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600">
          Based on your answers, here are the CIS career paths that align best with you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">

          {/* Top 3 Career Matches */}
          {result.topThree.map((field, i) => {
            const onet = onetData[field.id];
            const config = rankConfig[i];
            return (
              <Card key={field.id} className={`border-4 ${config.border} shadow-lg`}>
                <CardHeader
                  className={`bg-gradient-to-r ${config.headerBg} text-white`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`px-4 py-1.5 rounded-full font-bold text-sm ${config.badgeBg}`}
                      >
                        {config.label}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{field.label}</CardTitle>
                        {onet?.brightOutlook && (
                          <span className="text-xs bg-green-400 text-black px-2 py-0.5 rounded-full font-bold mt-1 inline-block">
                            ⭐ Bright Outlook
                          </span>
                        )}
                      </div>
                    </div>
                    <PercentageRing
                      percentage={field.percentage}
                      color={config.ringColor}
                      size={90}
                      strokeWidth={8}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <p className="text-gray-700 leading-relaxed">{field.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-sm mb-3">Example Roles</h4>
                      <ul className="space-y-1.5">
                        {field.exampleRoles.map((role) => (
                          <li
                            key={role}
                            className="text-sm text-gray-700 flex items-center gap-1.5"
                          >
                            <div className="w-1.5 h-1.5 bg-[#FFBB00] rounded-full flex-shrink-0" />
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-sm mb-3">Key Skills</h4>
                      <ul className="space-y-1.5">
                        {field.skills.slice(0, 4).map((skill) => (
                          <li
                            key={skill}
                            className="text-sm text-gray-700 flex items-center gap-1.5"
                          >
                            <div className="w-1.5 h-1.5 bg-[#FFBB00] rounded-full flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-sm mb-3">Certifications</h4>
                      <ul className="space-y-1.5">
                        {field.certifications.map((cert) => (
                          <li
                            key={cert}
                            className="text-sm text-gray-700 flex items-center gap-1.5"
                          >
                            <div className="w-1.5 h-1.5 bg-[#FFBB00] rounded-full flex-shrink-0" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* O*NET Placeholder */}
                  {onet && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <h4 className="font-bold text-blue-900 text-sm">
                          O*NET Occupational Data
                        </h4>
                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded font-medium">
                          Placeholder — Live API coming soon
                        </span>
                      </div>
                      <p className="text-sm text-blue-800 font-medium mb-3">
                        {onet.title}
                      </p>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white rounded-lg p-3 text-center">
                          <div className="text-base font-bold text-blue-700">
                            {onet.medianSalary}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            Median Salary
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-center">
                          <div className="text-base font-bold text-green-600">
                            {onet.growth}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            10-yr Growth
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-center">
                          <div className="text-xs font-mono text-gray-600">
                            {onet.code}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            O*NET Code
                          </div>
                        </div>
                      </div>
                      <a
                        href={`https://www.onetonline.org/link/summary/${onet.code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-700 font-medium hover:underline flex items-center gap-1"
                      >
                        View full profile on O*NET
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {/* All Career Matches Dropdown */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200">
            <Accordion type="single" collapsible>
              <AccordionItem value="all" className="border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <span className="font-bold text-lg">All Career Match Scores</span>
                    <span className="text-sm text-gray-500 font-normal">
                      ({result.allResults.length} fields ranked)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {result.allResults.map((field, i) => (
                      <div
                        key={field.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 ${
                          i === 0
                            ? "border-yellow-400 bg-yellow-50"
                            : i === 1
                            ? "border-gray-400 bg-gray-50"
                            : i === 2
                            ? "border-orange-400 bg-orange-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <PercentageRing
                          percentage={field.percentage}
                          size={56}
                          strokeWidth={5}
                          color={
                            i === 0
                              ? "#FFBB00"
                              : i === 1
                              ? "#9CA3AF"
                              : i === 2
                              ? "#F97316"
                              : "#D1D5DB"
                          }
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm truncate">
                            {field.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {field.rawScore} pts · Rank #{i + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#FFBB00] rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">What's Next?</h3>
            <ul className="space-y-3">
              {[
                "Set goals around your top match",
                "Research roles and salaries",
                "Identify skills to develop",
                "Build your action plan",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 bg-white rounded-lg p-3 text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
            <h3 className="font-bold text-lg mb-2">Download Your Roadmap</h3>
            <p className="text-sm text-gray-600 mb-4">
              Save a personalized PDF of your results.
            </p>
            <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
              <Download size={16} />
              Download PDF
            </Button>
            <p className="text-xs text-gray-400 mt-2 text-center">Coming soon</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2">Retake Assessment</h3>
            <p className="text-sm text-gray-600 mb-4">
              Want to try different answers?
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-black hover:bg-black hover:text-white"
              onClick={() => {
                clearResult();
                navigate("/assessment");
              }}
            >
              Start Over
            </Button>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
        <button
          onClick={() => {
            clearResult();
            navigate("/assessment");
          }}
          className="text-gray-600 hover:text-black transition-colors"
        >
          ← Retake Assessment
        </button>
        <Link
          to="/goal-setting"
          className="flex items-center gap-2 bg-[#FFBB00] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
        >
          Next: Goal Setting
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
