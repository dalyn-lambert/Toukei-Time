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
        listening: '#52489C', // purple
        reading: '#CE6D8B', // pink
        watching: '#FA8334', // orange
        playing: '#018E42', // green
        speaking: '#247BA0', // blue
      },
    },
  },
  safelist: [
    'bg-yellow',
    'bg-pink',
    'bg-green',
    'bg-gray',
    'bg-listening',
    'bg-reading',
    'bg-watching',
    'bg-playing',
    'bg-speaking',
  ],
  plugins: [],
};
export default config;
