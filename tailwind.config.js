/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#f3f0e8",
          elevated: "#e8e4d9",
        },
        steel: "#cfc8b8",
        fog: "#6f6a62",
        mist: "#3f3c38",
        paper: "#161412",
        lantern: {
          DEFAULT: "#8f5314",
          hot: "#6e3f0e",
        },
        glass: "rgba(243, 240, 232, 0.86)",
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        rise: {
          '0%': { transform: 'translateY(12px)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        }
      },
      animation: {
        slideUp: 'slideUp 0.8s ease-out forwards',
        rise: 'rise 0.35s ease-out forwards'
      }
    },
  },
  plugins: [],
}
