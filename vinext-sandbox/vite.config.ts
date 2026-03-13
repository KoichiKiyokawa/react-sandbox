import vinext from "vinext";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    plugins: [vinext()],
    server: {
      allowedHosts: ["local.kiyoshiro.me"],
    },
  };
});
