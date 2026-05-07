import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2D5A',
        green: {
          hero: '#7EAB78',
          mid:  '#A8C9A3',
          light:'#D4E8D1',
          pale: '#EDF5EC',
        },
        yellow: '#F5D535',
        muted:  '#6B7A99',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

export default config
