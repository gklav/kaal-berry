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
        teal: 'var(--color-teal)',
        orange: 'var(--color-orange)',
        red: 'var(--color-red)',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      plugins: [],
    },
  },
} satisfies Config;
