import type { Config } from 'tailwindcss';
import sharedConfig from '@insoftlabs/tailwind/tailwind.config';

const config: Config = {
  presets: [sharedConfig],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
        inter: ['var(--font-inter)'],
        days: ['var(--font-days-one)'],
        tight: ['Inter Tight Variable']
      }
    }
  }
};

export default config;
