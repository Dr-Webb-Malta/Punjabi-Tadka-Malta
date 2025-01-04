/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff671f',      // Vibrant Indian Orange
        'primary-light': '#ff8244',
        'primary-dark': '#e65a1b',
        secondary: '#006341',    // Deep Forest Green
        'secondary-light': '#007d52',
        'secondary-dark': '#004d32',
        'accent-green': '#8fe2b0', // Light Fresh Green
        'accent-yellow': '#ffb81c', // Warm Yellow
        'surface': '#FFFFFF',    // Pure white
        'surface-light': '#F8F9FA',
        'surface-tint': '#ebdab6', // Warm Beige
        'text': '#1A1A1A',       // Near black for better contrast
        'text-light': '#4A4A4A', // Darker gray for better readability
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
        'gradient-orange': 'linear-gradient(135deg, #ff671f 0%, #ff8244 100%)',
        'gradient-green': 'linear-gradient(135deg, #006341 0%, #007d52 100%)',
        'gradient-warm': 'linear-gradient(135deg, #ff671f 0%, #ffb81c 100%)',
        'gradient-natural': 'linear-gradient(135deg, #006341 0%, #8fe2b0 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'orange': '0 4px 6px -1px rgba(255, 103, 31, 0.3)',
        'orange-hover': '0 8px 12px -3px rgba(255, 103, 31, 0.4)',
        'green': '0 4px 6px -1px rgba(0, 99, 65, 0.3)',
        'green-hover': '0 8px 12px -3px rgba(0, 99, 65, 0.4)',
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