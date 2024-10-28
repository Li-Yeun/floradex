import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        floragreen: '#00FF90',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: any }) {
      addVariant('filled', [
        '&::-webkit-progress-value',
        '&::-moz-progress-bar',
      ]);
      addVariant('unfilled', ['&::-webkit-progress-bar', '&']);
    }),
  ],
};
export default config;
