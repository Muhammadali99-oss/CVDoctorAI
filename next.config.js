/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGitHubPages ? '/Presentation' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


