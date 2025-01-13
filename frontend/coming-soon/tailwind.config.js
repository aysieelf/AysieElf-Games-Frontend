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
          'bg': '#1A1B26',
          'darker': '#16161E',
          'accent': '#FFB5D0',
          'text': '#A9B1D6',
          'highlight': '#92B4FF'
        }
      },
      fontFamily: {
        'pixel': ['"VT323"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}