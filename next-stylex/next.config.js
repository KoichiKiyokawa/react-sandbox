const stylexPlugin = require("@stylexjs/nextjs-plugin");
const babelrc = require("./.babelrc.js");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === "@stylexjs/babel-plugin"
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

module.exports = stylexPlugin({
  rootDir,
  useCSSLayers: true,
})({});
