import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#090b11',
        surface: '#121725',
        surfaceSoft: '#1a2132',
        textMuted: '#afbbd5',
        primary: '#6d8dff'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(6,8,14,0.55)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
