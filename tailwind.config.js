/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans-serif': ['Roboto Flex', 'sans-serif'],
      'serif': ['Roboto Serif', 'serif'],
      'mono': ['Roboto Mono', 'monospace'],
    },
    colors: {
      'primary': '#A6E200',
      'black': 'black',
      'white': 'white'
    }
  },
  plugins: [],
}