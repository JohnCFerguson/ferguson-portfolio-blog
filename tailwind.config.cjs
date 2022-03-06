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
  plugins: []
}
