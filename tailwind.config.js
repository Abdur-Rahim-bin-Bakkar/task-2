/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#06060b",
        surface: "#0c0c14",
        accent: "#22d3ee",
        "accent-secondary": "#a855f7",
        "accent-tertiary": "#3b82f6",
      },
    },
  },
  plugins: [],
};
