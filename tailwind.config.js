/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          deep: "#0f172a",
          surface: "rgba(15, 23, 42, 0.4)",
          border: "rgba(255, 255, 255, 0.1)",
          accent: {
            indigo: "#4f46e5",
            violet: "#7c3aed",
            cyan: "#0891b2"
          }
        }
      },
      animation: {
        'sweep': 'sweep 2.5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        sweep: {
          '0%': { left: '-100%' },
          '50%': { left: '125%' },
          '100%': { left: '125%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}


