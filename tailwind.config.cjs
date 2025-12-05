/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#FF6B35',
        'dark': '#0F172A',
        'light': '#F8FAFC',
        'gray': '#64748B',
        'secondary': '#3B82F6',
      },
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'stagger-1': 'fade-in-up 0.8s ease-out 0.1s forwards',
        'stagger-2': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'stagger-3': 'fade-in-up 0.8s ease-out 0.3s forwards',
        'stagger-4': 'fade-in-up 0.8s ease-out 0.4s forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}

