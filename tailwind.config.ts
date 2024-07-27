import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monts: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        noto: ['Noto Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#732B80',
        secondary: '#DBB7C9',
        third: '#FAE55D',
        fourth: '#FF9C99',
        fifth: '#F8F7F3',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
