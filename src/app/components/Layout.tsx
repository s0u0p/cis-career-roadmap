import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const steps = [
  { number: 1, title: "Self Assessment", path: "/self-assessment" },
  { number: 2, title: "Goal Setting", path: "/goal-setting" },
  { number: 3, title: "Research & Exploration", path: "/research-exploration" },
  { number: 4, title: "Skill Development", path: "/skill-development" },
  { number: 5, title: "Action Plan", path: "/action-plan" },
  { number: 6, title: "Adaptability & Flexibility", path: "/adaptability-flexibility" },
];

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#FFBB00] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-black">
                <h1 className="text-2xl font-bold">Towson University</h1>
                <p className="text-sm">CIS Career Roadmap</p>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-yellow-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === "/"
                    ? "bg-black text-white"
                    : "text-black hover:bg-yellow-300"
                }`}
              >
                Home
              </Link>
              {steps.map((step) => (
                <Link
                  key={step.number}
                  to={step.path}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    location.pathname === step.path
                      ? "bg-black text-white"
                      : "text-black hover:bg-yellow-300"
                  }`}
                >
                  Step {step.number}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === "/"
                    ? "bg-black text-white"
                    : "text-black hover:bg-yellow-300"
                }`}
              >
                Home
              </Link>
              {steps.map((step) => (
                <Link
                  key={step.number}
                  to={step.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === step.path
                      ? "bg-black text-white"
                      : "text-black hover:bg-yellow-300"
                  }`}
                >
                  Step {step.number}: {step.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3">Towson University: Department of Computer and Information Science</h3>
              <p className="text-sm text-gray-300">
                7800 York Road<br />
                Towson, MD 21252
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <p className="text-sm text-gray-300">
                Email: cisadvising@towson.edu<br />
                Phone: (410) 704-2633
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Hours</h3>
              <p className="text-sm text-gray-300">
                Monday - Friday: 8:00am - 5:00pm
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            
          </div>
        </div>
      </footer>
    </div>
  );
}
