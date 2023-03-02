/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2025',
        secondary: '#202932',
        secondary_light: '#8C9AA9',
        accent: '#AAFE2C',
      }
    },
  },
  plugins: [],
}
