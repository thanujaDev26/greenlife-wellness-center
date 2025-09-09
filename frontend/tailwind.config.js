/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f9f7',
          100: '#eff3ef',
          200: '#dae5da',
          300: '#b8d0b8',
          400: '#8fb18f',
          500: '#6b8e6b',
          600: '#4a6b4a',
          700: '#3d553d',
          800: '#334533',
          900: '#2b3a2b',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f1',
          200: '#e8e7e2',
          300: '#d5d4cd',
          400: '#b8b6ad',
          500: '#9c9a8f',
          600: '#7f7d72',
          700: '#66645b',
          800: '#54524a',
          900: '#48463f',
        },
        cream: '#faf8f5',
        sage: '#9caa8f',
        gold: '#d4af37',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};