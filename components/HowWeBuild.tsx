export default function HowWeBuild() {
  const steps = [
    'CV Upload (PDF, DOCX)',
    'NLP Parsing (spaCy, HuggingFace) → Extract sections, keywords, formatting',
    'AI Role Classification → Backend? Marketing? Finance?',
    'ATS Keyword Matching (custom library)',
    'AI Stylist → Rewrite using role-specific keywords, metrics, structure',
    'CVDoctor Scoring → ATS Score + Recruiter Score + Professionalism Score',
    'AI-Generated Corrected CV & Export (PDF/Docx/LinkedIn format)'
  ]

  const techStack = {
    backend: ['FastAPI', 'Python'],
    nlp: ['spaCy', 'GPT-4', 'LangChain', 'HuggingFace models'],
    frontend: ['React/Next.js'],
    database: ['PostgreSQL', 'Redis'],
    deployment: ['AWS', 'DigitalOcean'],
    future: ['LinkedIn API', 'Telegram Bot', 'HR Mentorship & Marketplace']
  }

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⚙️ How We Plan to Build It
          </h2>
          <p className="text-xl text-gray-600">Tech + AI + Execution</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Process Steps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Steps</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Stack</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">NLP</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.nlp.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.database.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.deployment.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Future</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.future.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


