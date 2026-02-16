/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)',
        'fluid-2xl': 'clamp(2rem, 1.5rem + 2.5vw, 3.5rem)',
        'fluid-3xl': 'clamp(2.5rem, 2rem + 2.5vw, 4.5rem)',
        'fluid-4xl': 'clamp(3rem, 2.5rem + 2.5vw, 6rem)',
        'fluid-5xl': 'clamp(3.5rem, 3rem + 2.5vw, 7rem)',
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem)',
        'fluid-sm': 'clamp(1rem, 0.95rem + 0.25vw, 1.5rem)',
        'fluid-md': 'clamp(2rem, 1.5rem + 2.5vw, 4rem)',
        'fluid-lg': 'clamp(3rem, 2rem + 5vw, 6rem)',
        'fluid-xl': 'clamp(4rem, 3rem + 5vw, 8rem)',
        'fluid-2xl': 'clamp(6rem, 4rem + 10vw, 12rem)',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '1.75',
        'extra-loose': '2',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'blur-in': 'blurIn 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'clip-in': 'clipIn 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(20px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        clipIn: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
    },
  },
  plugins: [],
}