/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: process.env.NODE_ENV === "production" ? "edge" : "nodejs",
    serverActions: true,
  },
}

module.exports = nextConfig
