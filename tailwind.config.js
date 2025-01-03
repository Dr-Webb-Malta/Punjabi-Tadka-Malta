/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',    // Premium gold
        secondary: '#1A1A1A',  // Rich dark background
        accent: '#FFFFFF',     // White
        'primary-dark': '#B69121',  // Darker gold for hover states
        'primary-light': '#E5C65C',  // Lighter gold for highlights
      },
      fontFamily: {
        'display': ['Marcellus', 'serif'],
        'body': ['Mulish', 'sans-serif'],
        'accent': ['Italiana', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.15' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-fade': 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
      },
      boxShadow: {
        'gold': '0 4px 14px -2px rgba(212, 175, 55, 0.1)',
        'gold-lg': '0 10px 25px -3px rgba(212, 175, 55, 0.1)',
      },
    },
  },
  plugins: [],
}