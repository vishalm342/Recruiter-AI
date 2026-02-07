/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          bg: '#EFF6FF',
        },
        accent: {
          1: '#A5D8FF',
          2: '#D0BCFF',
          3: '#B197FC',
        },
        dark: {
          primary: '#3B82F6',
          bg: '#000000',
          text: '#737373',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

