import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        '2000': '2000ms',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        black: "#000000",
        primary: "#0d0437",
        secondary: "#29eaad", 
      },
      fontFamily:{
        'primary': ["Poppins","sans-serif"],
        'secondery': ["Oswald","serif"],
        'exo':["Exo 2","sans-serif"],
        'gummy':["Sour Gummy","sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
