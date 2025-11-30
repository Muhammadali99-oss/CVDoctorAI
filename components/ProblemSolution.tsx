export default function ProblemSolution() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🛠 Problem → Solution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Problem Section */}
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🚨</span>
              <h3 className="text-2xl font-bold text-gray-900">Problem</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              <strong>Central Asia, Russia, Kazakhstan, China</strong>
            </p>
            <p className="text-gray-700 mb-6">
              Most job seekers don't get rejected because they lack skills — they get rejected because their CVs are weak before anyone even reads them.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">❌</span>
                <div>
                  <p className="font-semibold text-gray-900">Messy formatting</p>
                  <p className="text-gray-600">→ Appears unprofessional → Auto rejection</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">❌</span>
                <div>
                  <p className="font-semibold text-gray-900">Same CV used for every job</p>
                  <p className="text-gray-600">→ Not role-specific → Irrelevant</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">❌</span>
                <div>
                  <p className="font-semibold text-gray-900">Poor English and achievement language</p>
                  <p className="text-gray-600">→ Lacks credibility</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">❌</span>
                <div>
                  <p className="font-semibold text-gray-900">Not ATS-ready</p>
                  <p className="text-gray-600">→ Even for bigger companies → Silently rejected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">💡</span>
              <h3 className="text-2xl font-bold text-gray-900">Solution</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg font-semibold">
              CVDoctor: AI-powered CV Diagnosis & Role-Based Fixing
            </p>
            <p className="text-gray-700 mb-6 italic">
              "Just like a doctor diagnoses your health, CVDoctor diagnoses and fixes your CV instantly."
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✔️</span>
                <p className="text-gray-700">Upload CV → AI Diagnosis (structure, clarity, impact, keywords)</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✔️</span>
                <p className="text-gray-700">Get CVDoctor Score, ATS Score, Recruiter Score</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✔️</span>
                <p className="text-gray-700">Get actionable suggestions & AI-generated corrections</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✔️</span>
                <p className="text-gray-700">Choose a job role (Backend Dev, Marketing, Finance, Project Management)</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✔️</span>
                <p className="text-gray-700">CVDoctor rewrites your CV to match that specific role</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✔️</span>
                <p className="text-gray-700">Export in Recruiter-Ready / ATS format (PDF, DOCX, LinkedIn-ready)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


