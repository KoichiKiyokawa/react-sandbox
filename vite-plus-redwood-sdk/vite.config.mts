import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      host: "localhost",
      port: 5173,
      clientPort: 5173,
      protocol: "ws",
    },
  },
  plugins: [
    cloudflare({
      viteEnvironment: { name: "worker" },
    }),
    tailwindcss(),
    redwood(),
  ],
});
