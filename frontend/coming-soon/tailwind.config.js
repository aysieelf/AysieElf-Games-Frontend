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
          // main backgrounds
          'cream': '#FFF5E9',     // warm background, like morning light
          'shell': '#F2E3DB',     // for cards, sections (slightly darker cream)

          // accents
          'mint': '#A8D1C8',      // fresh, calming mint green
          'dusty-rose': '#E7B7C8', // soft pink, not too sweet
          'warm-wood': '#C4A484',  // natural wooden accents
          'sky-blue': '#B4D4E7',   // fresh blue, like window views

          // plant greens
          'leaf-dark': '#2F4538',  // deep forest green for mature leaves
          'leaf-mid': '#3A5F41',   // medium tone for variety
          'leaf-shadow': '#1B2921', // darkest green for depth

          // transparent overlays
          'frost': 'rgba(255, 255, 255, 0.65)',  // soft white overlay
          'morning': 'rgba(242, 227, 219, 0.45)', // warm overlay

          // text colors
          'text-dark': '#5C4033',  // warm brown for main text
          'text-soft': '#8B7355',  // softer brown for secondary text

          // interactive elements
          'hover': '#FFE4E1',     // slightly warmer on hover
          'active': '#DEB887',    // deeper tone for active states
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