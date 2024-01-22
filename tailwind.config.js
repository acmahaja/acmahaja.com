/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans-serif': ['Roboto Flex', 'sans-serif'],
      'serif': ['Roboto Serif', 'serif'],
      'mono': ['Roboto Mono', 'monospace'],

    }
  },
  plugins: [],
}