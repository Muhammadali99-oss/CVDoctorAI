export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              CVDoctor
            </h3>
            <p className="text-gray-400">
              AI-powered CV diagnosis and role-based fixing for job seekers in Central Asia, Russia, Kazakhstan, and China.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#problem" className="hover:text-white transition">Problem & Solution</a></li>
              <li><a href="#team" className="hover:text-white transition">Team</a></li>
              <li><a href="#roadmap" className="hover:text-white transition">Roadmap</a></li>
              <li><a href="#solution" className="hover:text-white transition">How We Build</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Ready to transform your CV?
            </p>
            <button className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CVDoctor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


