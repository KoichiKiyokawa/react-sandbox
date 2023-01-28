/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    swcPlugins: [
      [
        "next-superjson-plugin",
        {
          excluded: [],
        },
      ],
    ],
  },
}

module.exports = nextConfig
