import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    transform: (code) => {
      const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g;
      const variantGroupMatches = Array.from(code.matchAll(variantGroupsRegex));

      variantGroupMatches.forEach(([matchStr, variants, classes]) => {
        const parsedClasses = classes
          .split(" ")
          .map((cls) => variants + cls)
          .join(" ");

        code = code.replace(matchStr, parsedClasses);
      });

      return code;
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
