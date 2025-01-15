import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: "#00deb3",
        orange: "#F2780C",
        red: "#F21313",
        black: "#2F1E0E",
        white: "#fafae8",
      },
    },
  },
  plugins: [],
} satisfies Config;
