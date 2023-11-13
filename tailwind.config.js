/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  extend: {
    fontFamily: {
      ibmplex: ["ibmplex", "monospace"],
    },
  },
}

