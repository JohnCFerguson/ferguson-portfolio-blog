const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        h1: {fontSize: theme('fontSize.2xl')},
        h2: {fontSize: theme('fontSize.xl')},
        h3: {fontSize: theme('fontSize.lg')}
      })
    })
  ]
}
