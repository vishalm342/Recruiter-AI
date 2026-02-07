/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // EXACT Hex Codes from PDF Page 2
        background: "#000000",      // "Primary BG" (Dark)
        card: "#404040",            // "Secondary BG" (Dark)
        primary: "#3B82F6",         // "Primary"
        muted: "#737373",           // "Secondary" (Text)
        
        // Accents
        accent1: "#A5D8FF",         // "Accent #1" (Blue)
        accent2: "#D0BCFF",         // "Accent #2" (Purple)
        accent3: "#B197FC",         // "Accent #3" (Deep Purple)
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};