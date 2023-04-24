import { defineConfig, presetWind, presetAttributify } from "unocss"

export default defineConfig({
  presets: [presetWind(), presetAttributify()],
  cli: {
    entry: {
      patterns: ["./src/**/*.tsx"],
      outFile: "src/styles/uno.css",
    },
  },
})
