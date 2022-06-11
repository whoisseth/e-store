module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#2874f0',
        brand: '#FF7D20',
        // brand: '#3b82f6',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
