const { webpackPlugin } = require("./plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(webpackPlugin());
    return config;
  },
};

module.exports = nextConfig;
