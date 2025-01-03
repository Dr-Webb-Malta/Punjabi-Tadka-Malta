/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8d636',      // Your bright yellow
        'primary-light': '#FFE57F',
        'primary-dark': '#E5C118',
        secondary: '#6A1B9A',    // Rich purple
        'secondary-light': '#8E24AA',
        'secondary-dark': '#4A148C',
        'accent-orange': '#FF9F43',
        'accent-red': '#FF5252',
        'surface': '#FFFFFF',    // Pure white
        'surface-light': '#F8F9FA',
        'surface-tint': '#FFF8E1',
        'text': '#2D3436',       // Main text
        'text-light': '#636E72', // Secondary text
        'text-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Marcellus', 'serif'],
        'body': ['Mulish', 'sans-serif'],
        'accent': ['Italiana', 'serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1' }],
      },
      backgroundImage: {
        'gradient-yellow': 'linear-gradient(135deg, #f8d636 0%, #FFE57F 100%)',
        'gradient-purple': 'linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF9F43 0%, #FFBE76 100%)',
        'gradient-bright': 'linear-gradient(45deg, #f8d636 0%, #FF9F43 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'yellow': '0 4px 6px -1px rgba(248, 214, 54, 0.3)',
        'yellow-hover': '0 8px 12px -3px rgba(248, 214, 54, 0.4)',
        'purple': '0 4px 6px -1px rgba(106, 27, 154, 0.3)',
        'purple-hover': '0 8px 12px -3px rgba(106, 27, 154, 0.4)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}