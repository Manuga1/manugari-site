/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',                      // enable class-based dark mode
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',     // adjust if needed
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1E293B',             // your soft blue‑gray
      },
    },
  },
  plugins: [],
};

