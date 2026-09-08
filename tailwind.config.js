export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF8FB',
          100: '#FDF2F7',
          200: '#FBE3EE',
          300: '#F7CADD',
        },
        lilac: {
          50: '#FAF7FD',
          100: '#F4EEFB',
          200: '#EADFF6',
        },
        rosepink: {
          400: '#F0709F',
          500: '#E75A90',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
        },
        ink: {
          900: '#1C1D21',
          800: '#26272C',
          700: '#3F4048',
          500: '#63656F',
          400: '#8A8C96',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bodoni Moda"', '"DM Serif Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,29,33,0.04), 0 8px 24px -12px rgba(28,29,33,0.10)',
        lift: '0 2px 4px rgba(190,24,93,0.06), 0 18px 40px -18px rgba(190,24,93,0.28)',
        glass: '0 1px 1px rgba(255,255,255,0.6) inset, 0 10px 30px -14px rgba(190,24,93,0.24)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(10px,-10px,0)' },
        },
        'orbit-drift': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(6deg) scale(1.03)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slower 13s ease-in-out infinite',
        'orbit-drift': 'orbit-drift 18s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 11s ease-in-out infinite',
        twinkle: 'twinkle 5s ease-in-out infinite',
      },
    },
  },
}
