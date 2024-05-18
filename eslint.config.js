import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': 'off',
    'no-console': 'warn',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
  formatters: {
    css: true,
  },

})
