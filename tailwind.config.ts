import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Брендовая палитра Esep
        navy: {
          DEFAULT: '#0F2B46',
          50: '#F0F4F8',
          100: '#D9E2EC',
          400: '#486581',
          500: '#334E68',
          600: '#243B53',
          700: '#1E3A5F',
          900: '#0F2B46',
          950: '#082238',
        },
        sky: {
          DEFAULT: '#0EA5E9',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        accent: {
          green: '#22C55E',
          amber: '#F59E0B',
          rose: '#F43F5E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh':
          'radial-gradient(at 0% 0%, rgba(14,165,233,0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(34,197,94,0.10) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(15,43,70,0.20) 0px, transparent 50%)',
        'gradient-hero':
          'linear-gradient(135deg, #0F2B46 0%, #1E3A5F 50%, #0F2B46 100%)',
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
