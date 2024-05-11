import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': 'off',
    'no-console': 'warn',
  },
  formatters: {
    css: true,
  },

})
