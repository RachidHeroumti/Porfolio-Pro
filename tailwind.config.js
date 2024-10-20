/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customDark: '#171c28',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        '1.5r': '1.5',    
        '0.7rem': '0.7rem',  
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}

