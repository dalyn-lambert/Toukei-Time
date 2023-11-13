import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#EFBE37',
        pink: '#D39384',
        green: '#9DA25A',
        'dark-green': '#7d8148',
        gray: '#B7B6C1',
        'dark-gray': '#5A5353',
      },
    },
  },
  safelist: ['bg-yellow', 'bg-pink', 'bg-green', 'bg-gray'],
  plugins: [],
};
export default config;
