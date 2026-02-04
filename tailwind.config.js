/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFCF5',
        secondary: '#3D0418',
        accent: '#4F4F4F',
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

