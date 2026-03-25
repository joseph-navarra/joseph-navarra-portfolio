/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F0F14',
        'dark-light': '#1A1A24',
        cyan: {
          DEFAULT: '#00D9FF',
          glow: '#00D9FF40',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          glow: '#8B5CF640',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00D9FF40, 0 0 20px #00D9FF20' },
          '100%': { boxShadow: '0 0 10px #00D9FF60, 0 0 40px #00D9FF40' },
        },
      },
    },
  },
  plugins: [],
}
