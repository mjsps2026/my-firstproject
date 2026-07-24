/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Lao"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eefdf6', 100: '#d6fbeb', 200: '#b0f5d6', 300: '#79ebba',
          400: '#3fd996', 500: '#16c07a', 600: '#0aa163', 700: '#0a8152',
          800: '#0c6543', 900: '#0c5339', 950: '#042f20',
        },
        sky: {
          50: '#eff9ff', 100: '#def2ff', 200: '#b6ecff', 300: '#75dfff',
          400: '#2ccaff', 500: '#06acf0', 600: '#008bcd', 700: '#0070a4',
          800: '#075d86', 900: '#0b4d6f',
        },
        ink: {
          50: '#f6f8fa', 100: '#eaeef2', 200: '#d4dbe2', 300: '#aebac7',
          400: '#7d8b9d', 500: '#5b6877', 600: '#48535f', 700: '#3a434d',
          800: '#323843', 900: '#1e222a', 950: '#0f1216',
        },
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(16 24 40 / 0.04), 0 1px 3px 0 rgb(16 24 40 / 0.06)',
        soft: '0 4px 24px -8px rgb(16 24 40 / 0.10)',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-up': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'scale-in': { from: { opacity: '0', transform: 'scale(0.96)' }, to: { opacity: '1', transform: 'scale(1)' } },
        'shimmer': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.35s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'shimmer': 'shimmer 1.6s linear infinite',
      },
    },
  },
  plugins: [],
};
