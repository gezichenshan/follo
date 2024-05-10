import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    curly: 'off',
  },
  formatters: {
    css: true,
  },

})
