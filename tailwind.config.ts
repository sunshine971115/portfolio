import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0b0f1a',
          soft: '#111827',
          card: '#151b2b',
        },
        accent: {
          DEFAULT: '#03B0FD',
          soft: '#6fc5ff',
          deep: '#0284c7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(3,176,253,0.45)',
      },
      animation: {
        'wave-1': 'wave 1s ease-in-out infinite',
        'wave-2': 'wave 1s ease-in-out 0.1s infinite',
        'wave-3': 'wave 1s ease-in-out 0.2s infinite',
        'wave-4': 'wave 1s ease-in-out 0.3s infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { height: '10px' },
          '50%': { height: '50px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
