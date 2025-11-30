'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              CVDoctor
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#problem" className="text-gray-700 hover:text-primary-600 transition">Problem</a>
            <a href="#team" className="text-gray-700 hover:text-primary-600 transition">Team</a>
            <a href="#roadmap" className="text-gray-700 hover:text-primary-600 transition">Roadmap</a>
            <a href="#solution" className="text-gray-700 hover:text-primary-600 transition">Solution</a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#problem" className="block py-2 text-gray-700 hover:text-primary-600">Problem</a>
            <a href="#team" className="block py-2 text-gray-700 hover:text-primary-600">Team</a>
            <a href="#roadmap" className="block py-2 text-gray-700 hover:text-primary-600">Roadmap</a>
            <a href="#solution" className="block py-2 text-gray-700 hover:text-primary-600">Solution</a>
          </div>
        </div>
      )}
    </nav>
  )
}


