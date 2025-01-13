/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gaming': {
            // main
            'dark': '#141423',     // for background
            'navy': '#22224A',     // for cards, sections

            // accents
            'neon-blue': '#00F5FF',    // borders, highlights
            'pastel-pink': '#FFB5E8',  // headers, accents
            'pastel-purple': '#DCD3FF', // secondary elements

            // transparent
            'glass': 'rgba(255, 255, 255, 0.1)',  // transparent container
            'glow': 'rgba(0, 245, 255, 0.15)',    // neon effects

            // text
            'text-light': '#E2E8F0',  // main text
            'text-dim': '#94A3B8',    // secondary text
        }
      },
      fontFamily: {
          'pixel': ['VT323', 'monospace'],
          'old': ['Press Start 2P', 'cursive'],
          'bubble': ['Bubblegum Sans', 'monospace'],
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