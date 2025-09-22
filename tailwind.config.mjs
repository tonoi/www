import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e0edff',
          200: '#bcd9ff',
          300: '#8abaff',
          400: '#5296ff',
          500: '#1f6fff',
          600: '#0f54e6',
          700: '#0c44b4',
          800: '#0c3b8f',
          900: '#0e326f'
        }
      },
      fontFamily: {
        sans: ['\"Noto Sans JP\"', 'Inter', ...fontFamily.sans],
        serif: ['\"Noto Serif JP\"', ...fontFamily.serif]
      },
      boxShadow: {
        soft: '0 18px 40px -15px rgba(16, 38, 100, 0.45)'
      }
    }
  },
  plugins: []
};
