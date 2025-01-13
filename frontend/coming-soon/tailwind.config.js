/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cozy': {
          'cream': '#FFF5E4',
          'peach': '#FFE3E1',
          'rose': '#FFD1D1',
          'dusty': '#FF9494',
          'text': '#635985',
        }
      },
      fontFamily: {
          'pixel': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}