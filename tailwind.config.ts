import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1369D9',
        secondary: '#3A8DFF',
        background: '#F5F7FA',
        border: '#E0E8F2',
        textPrimary: '#5A5F69',
        textSecondary: '#848A93',
        textDark: '#3A3F45',
        inputPrimary: '#c3d9fa',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: '14px',
        sm: '12px',
        md: '16px',
        xl: '22px',
        '2xl': '25px',
      },
    },
  },
  plugins: [],
} satisfies Config;
