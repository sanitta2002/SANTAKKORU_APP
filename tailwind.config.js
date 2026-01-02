/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C2D",
        secondary: "#5B1D99",
        accent: "#FFD700",
        snow: "#F8FAFF",
        "santa-red": "#D42426",
      },
      fontFamily: {
        fantasy: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at center top, #1a2a6c, #b21f1f, #fdbb2d)', // Fallback / artistic
        'deep-space': 'linear-gradient(to bottom, #0B1C2D, #000000)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
