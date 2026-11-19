/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#14213D',
          secondaryNavy: '#20365B',
          blue: '#356AE6',
          lightBlue: '#EAF1FF',
          white: '#FFFFFF',
          bg: '#F7F9FC',
          text: '#202B3C',
          muted: '#687386',
          border: '#E5EAF1',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(20, 33, 61, 0.05), 0 1px 2px -1px rgba(20, 33, 61, 0.03)',
        card: '0 4px 6px -1px rgba(20, 33, 61, 0.04), 0 2px 4px -2px rgba(20, 33, 61, 0.02)',
        cardHover: '0 10px 15px -3px rgba(20, 33, 61, 0.08), 0 4px 6px -4px rgba(20, 33, 61, 0.04)',
      },
    },
  },
  plugins: [],
};
