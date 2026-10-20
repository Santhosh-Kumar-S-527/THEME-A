/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: {
          base: 'var(--color-background-base, #FFFFFF)',
          soft: 'var(--color-background-soft, #FAF7F5)',
          tint: 'var(--color-background-tint, #FDEEE8)',
          dark: 'var(--color-background-dark, #050708)',
          'dark-raised': 'var(--color-background-dark-raised, #111519)',
        },
        border: {
          DEFAULT: 'var(--color-border-default, #E6E2DF)',
          strong: 'var(--color-border-strong, #CFC9C5)',
          dark: 'var(--color-border-dark, #293036)',
        },
        accent: {
          primary: 'var(--color-accent-primary, #E7430B)',
          bright: 'var(--color-accent-bright, #F4511E)',
          coral: 'var(--color-accent-coral, #F05B36)',
          soft: 'var(--color-accent-soft, rgba(240, 91, 54, 0.12))',
          'gradient-start': 'var(--color-accent-gradient-start, #F4511E)',
          'gradient-end': 'var(--color-accent-gradient-end, #FF8A5C)',
        },
        text: {
          primary: 'var(--color-text-primary, #111315)',
          secondary: 'var(--color-text-secondary, #4A5157)',
          muted: 'var(--color-text-muted, #6B737A)',
          'on-dark': 'var(--color-text-on-dark, #F7F8F8)',
          'on-accent': 'var(--color-text-on-accent, #FFFFFF)',
        },
        rating: {
          star: 'var(--color-rating-star, #F5B301)',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Sora', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        full: '9999px',
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
};
