import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Team from '@/components/Team'
import WhyTeam from '@/components/WhyTeam'
import Roadmap from '@/components/Roadmap'
import HowWeBuild from '@/components/HowWeBuild'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Team />
      <WhyTeam />
      <Roadmap />
      <HowWeBuild />
    </main>
  )
}


