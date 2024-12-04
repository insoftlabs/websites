import type { Config } from 'tailwindcss';
import sharedConfig from '@insoftlabs/tailwind/tailwind.config';

const config: Config = {
  presets: [sharedConfig],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'ui-'
};

export default config;
