/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com']
  },
}

module.exports = nextConfig
