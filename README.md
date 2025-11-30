# CVDoctor Demo Website

A modern, beautiful demo website for CVDoctor - an AI-powered CV diagnosis and role-based fixing platform.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly navigation
- 🚀 Built with Next.js 14 and TypeScript
- 💼 Complete presentation of:
  - Problem → Solution
  - Team members and roles
  - Why the team can solve it
  - Roadmap with timeline
  - Technical implementation plan

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── ProblemSolution.tsx
│   ├── Team.tsx
│   ├── WhyTeam.tsx
│   ├── Roadmap.tsx
│   ├── HowWeBuild.tsx
│   └── Footer.tsx
└── package.json
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, AWS, or DigitalOcean


