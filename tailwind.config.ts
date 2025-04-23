import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'godara-gold': '#c9a750',
      },
      fontFamily: {
        'libre-baskerville': ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config