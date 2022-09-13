/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['userstyles.org', 'autostolitsa.ru'],
    unoptimized: true
  }
}

module.exports = nextConfig
