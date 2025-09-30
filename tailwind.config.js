const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1E293B',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
