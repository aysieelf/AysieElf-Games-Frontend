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
          'pastel-rose': '#F4D9E3', // lighter pink for highlights
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
          'text-mid-brown': '#7A5A4B', // mid-tone brown for variety
          'text-soft': '#8B7355',  // softer brown for secondary text
          'text-light': '#BAA892',  // light brown for highlights

          // interactive elements
          'hover': '#FFE4E1',     // slightly warmer on hover
          'active': '#DEB887',    // deeper tone for active states
        }
      },
      fontFamily: {
        // Gaming & Pixel art
        'pixel': ['VT323', 'monospace'], // for pixel art
        'courier_new': ['Courier New', 'monospace'],    // for titles
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-in',
        'moveCloud': 'moveCloud 150s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // gently floating the text
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },      // slowly swaying the plants
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },       // pulse effect
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
          moveCloud: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(10000%)' }
        },
      }
    },
  },
  plugins: [],
}