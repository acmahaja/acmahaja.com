/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Roboto Flex', 'sans-serif'],
        'serif': ['Roboto Serif', 'serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      colors: {
        'background': '#F3EFE7',
        'primary': '#A6E200',
        'black': '#000',
        'white': '#fff',
        'green': '#E9F4C4',
      }
    }
  },
  plugins: [require('@tailwindcss/typography'),
  ],
}
