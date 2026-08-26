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
          DEFAULT: "#0b1018",
          elevated: "#121820",
        },
        steel: "#2a3544",
        fog: "#8ba3b8",
        mist: "#c5d4e0",
        paper: "#e8eef4",
        lantern: {
          DEFAULT: "#e8a44a",
          hot: "#f0c36e",
        },
        glass: "rgba(11, 16, 24, 0.72)",
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
