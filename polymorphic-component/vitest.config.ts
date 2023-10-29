import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
    alias: {
      "@": "/src",
    },
    css: {
      modules: { classNameStrategy: "non-scoped" },
    },
  },
});
