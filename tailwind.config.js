/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'roboto-mono': ['Roboto Mono', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#ffffff'
        },
        secondary: {
          50: '#343a3f',
          100: '#262c30'
        }
      },
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
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('current', '&.active')
    })
  ]
}
