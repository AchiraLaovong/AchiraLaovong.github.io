/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // ZZZ Dynamic Color System using CSS Variables
        'zzz-white': 'var(--zzz-white)',
        'zzz-black': 'var(--zzz-black)',
        'zzz-bg': 'var(--zzz-bg)',

        // ZZZ Grey Scale
        'zzz-grey-1': 'var(--zzz-grey-1)',
        'zzz-grey-2': 'var(--zzz-grey-2)',
        'zzz-grey-3': 'var(--zzz-grey-3)',
        'zzz-grey-4': 'var(--zzz-grey-4)',
        'zzz-grey-5': 'var(--zzz-grey-5)',
        'zzz-grey-6': 'var(--zzz-grey-6)',
        'zzz-grey-7': 'var(--zzz-grey-7)',
        'zzz-grey-8': 'var(--zzz-grey-8)',
        'zzz-grey-9': 'var(--zzz-grey-9)',

        // ZZZ Brand Colors
        'zzz-primary': 'var(--zzz-primary)',
        'zzz-primary-hover': '#3367d6',
        'zzz-primary-pressed': '#2b5ce6',
        'zzz-primary-light': 'var(--zzz-primary-light)',

        // ZZZ Accent Colors
        'zzz-yellow': 'var(--zzz-yellow)',
        'zzz-yellow-hover': '#ddbf21',
        'zzz-yellow-pressed': '#ceaf08',

        'zzz-green': 'var(--zzz-green)',
        'zzz-green-light': '#caf6e6',

        'zzz-red': 'var(--zzz-red)',
        'zzz-red-light': '#fcceca',

        'zzz-orange': 'var(--zzz-orange)',
        'zzz-orange-light': '#ffefc7',

        'zzz-purple': 'var(--zzz-purple)',
        'zzz-purple-light': '#cac7ff',

        'zzz-cyan': '#00bcd4',
        'zzz-cyan-light': '#c2fffd',

        'zzz-pink': '#e91e63',
        'zzz-pink-light': '#ffdbf9',
      },
      fontFamily: {
        'zzz': ['ZZZ', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Arial', 'sans-serif'],
        'zzz-custom': ['ZZZ', 'sans-serif'], // New custom font option
        'zzz-mono': ['ZZZ', 'Consolas', 'Monaco', 'monospace'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '48px',
        '12': '64px',
        '13': '80px',
      },
      borderRadius: {
        'zzz-1': '6px',
        'zzz-2': '12px',
        'zzz-3': '16px',
        'zzz-4': '20px',
        'zzz-5': '28px',
        'zzz-6': '40px',
        'zzz-7': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'zzz-card': '0 2px 8px var(--zzz-shadow)',
        'zzz-card-hover': '0 4px 16px var(--zzz-shadow-hover)',
        'zzz-button': '0 1px 4px var(--zzz-shadow)',
        'zzz-button-hover': '0 2px 8px var(--zzz-shadow-hover)',
      },
    },
  },
  plugins: [],
}
