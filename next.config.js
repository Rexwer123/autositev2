/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['userstyles.org'],
    unoptimized: true
  }
}

module.exports = nextConfig
