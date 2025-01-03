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
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}