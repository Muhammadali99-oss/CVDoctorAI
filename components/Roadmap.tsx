export default function Roadmap() {
  const stages = [
    {
      stage: '🪄 Idea',
      timeline: 'Aug–Sep 2025',
      milestones: 'Market validation, CV analysis model, survey'
    },
    {
      stage: '🔧 Prototype',
      timeline: 'Nov–Dec 2025',
      milestones: 'CV uploading → AI scoring → suggestion report'
    },
    {
      stage: '🚀 MVP Launch',
      timeline: 'Jan 2026',
      milestones: 'Role-based CV rewriting (Backend, Marketing, Finance)'
    },
    {
      stage: '🔄 Soft Launch',
      timeline: 'Feb 2026',
      milestones: 'University pilots, bootcamp partnerships'
    },
    {
      stage: '💼 B2B & Marketplace',
      timeline: 'Mar–Jun 2026',
      milestones: 'HR Mentor Marketplace, paid users, CV clinics'
    },
    {
      stage: '🌍 Expansion',
      timeline: 'Aug 2026',
      milestones: 'Scale to Kazakhstan, Kyrgyzstan, UAE, MENA market'
    }
  ]

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🗺️ Roadmap
          </h2>
          <p className="text-xl text-gray-600">Idea / Prototype / MVP / Launched</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 hidden md:block"></div>

          <div className="space-y-8">
            {stages.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">{item.stage}</h3>
                    <span className="text-primary-600 font-semibold text-lg">{item.timeline}</span>
                  </div>
                  <p className="text-gray-600">{item.milestones}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


