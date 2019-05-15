module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotemark: [true, 'single'],
    indent: ['error', 2],
    'interface-name': false,
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'no-consecutive-blank-lines': false,
    semicolon: [true, 'never'],
  },
}
