import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'bellefair': ['var(--font-bellefair)'],
        'barlow': ['var(--font-barlow)'],
        'barlow-condensed': ['var(--font-barlow-condensed)'],
      },
      colors: {
        'dark-navy': 'hsl(230, 35%, 7%)',
        'light-blue': 'hsl(231, 77%, 90%)',
      }
    },
  },
  plugins: [],
};
export default config;
