module.exports = {
  darkMode: 'class',
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './**/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"IBM Plex Mono"', 'monospace'],  // adds your custom class
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
