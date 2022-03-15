module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["'DM Sans'", 'sans-serif'],
        firaCode: ["'Fira Code'", 'monospace'],
      },
    },
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/line-clamp', '@tailwindcss/typography'],
}
