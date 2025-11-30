export default function WhyTeam() {
  const reasons = [
    {
      requirement: 'Understands ATS & hiring',
      why: 'HR specialist worked in Central Asian recruitment'
    },
    {
      requirement: 'Can build AI-powered product',
      why: 'CTO skilled in AI/NLP, OpenAI, FastAPI, microservices'
    },
    {
      requirement: 'Can build SaaS platform',
      why: 'Full-stack developer with Next.js, AWS, deployment experience'
    },
    {
      requirement: 'Has user understanding',
      why: 'Founder is working directly with Central Asian job seekers & universities'
    },
    {
      requirement: 'Localization & niche market access',
      why: 'Team speaks Uzbek, Russian, English — understands regional hiring culture'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            💪 Why This Team Can Solve It
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-lg rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-primary-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Requirement
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Why Our Team Fits
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reasons.map((reason, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-gray-900">{reason.requirement}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">{reason.why}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


