import { Config } from "tailwindcss"

export default {
  content: {
    files: ["./src/app/**/*.{js,ts,jsx,tsx}"],
    transform: (code) => {
      const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g
      const variantGroupMatches = [...code.matchAll(variantGroupsRegex)]

      variantGroupMatches.forEach(([matchStr, variants, classes]) => {
        const parsedClasses = classes
          .split(" ")
          .map((cls) => variants + cls)
          .join(" ")

        code = code.replace(matchStr, parsedClasses)
      })
      return code
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
  // https://akashhamirwasia.com/blog/variant-groups-in-tailwindcss/
} satisfies Config
