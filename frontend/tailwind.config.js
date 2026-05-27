/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#0B0B15',
          dark: '#121225',
          light: '#1F1F35',
          accent: '#7D5FFF'
        },
        brand: {
          primary: '#00F0FF',
          secondary: '#7000FF',
          tertiary: '#FF0055'
        }
      },
      boxShadow: {
        'glass-hover': '0 0 20px rgba(0, 0, 0, 0.5)',
        'neon': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0B0B15, #121225)',
        'glass-panel': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
