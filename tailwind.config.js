/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
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
      },
      backgroundImage: {
        'grid-slate':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'grid-slate-dark':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'light-mode': "url('./src/assets/lm-bg.jpg')",
        'light-mode2': "url('./src/assets/lm-bg-2.jpg')",
        'dark-mode': "url('./src/assets/dm-bg.jpg')",
        'linear-gradient': 'linear-gradient( -45deg, #bd34fe 50%, #47caff 50% )'
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('current', '&.active')
    }),
    import('flowbite/plugin')
  ]
}
