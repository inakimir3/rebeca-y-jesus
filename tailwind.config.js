/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FAF5EB',
        secondary: '#BF9E82',
        accent: '#787878',
      },
      fontFamily: {
        inter: ['Inter Variable'],
        garamond: ['EB Garamond Variable'],
        cormorant: ['Cormorant Garamond Variable'],
        infant: ['Cormorant Infant Variable'],
        alexBrush: ['Alex Brush'],
      },
    },
  },
  plugins: [],
}

