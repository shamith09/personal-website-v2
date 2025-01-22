import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#692CF3',
        dark: '#121212',
        light: '#F9FAFB',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F9FAFB',
            a: {
              color: '#8B5CF6',
              '&:hover': {
                color: '#692CF3',
              },
            },
            h1: {
              color: '#F9FAFB',
            },
            h2: {
              color: '#F9FAFB',
            },
            h3: {
              color: '#F9FAFB',
            },
            strong: {
              color: '#F9FAFB',
            },
            code: {
              color: '#8B5CF6',
            },
            blockquote: {
              color: '#F9FAFB',
              borderLeftColor: '#8B5CF6',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
