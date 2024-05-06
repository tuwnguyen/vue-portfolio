/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        showMenu: {
          '0%': {
            transform: 'scaleY(0)'
          },
          '100%': {
            transform: 'scaleY(1)'
          }
        },
        fadeOut: {
          '0%': {
            transform: 'scaleY(1)'
          },
          '100%': {
            transform: 'scaleY(0)'
          }
        }
      },
      animation: {
        showMenu: 'showMenu 0.3s ease-in-out forwards',
        fadeOut: 'fadeOut 0.3s ease-in-out backwards'
      }
    }
  },
  plugins: []
}
