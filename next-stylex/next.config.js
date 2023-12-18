const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = stylexPlugin({
  rootDir,
  useCSSLayers: true,
})(nextConfig);
