module.exports = {
  root: true,
  env: {
		browser: true,
    node: true,
  },
	parserOptions: {
    parser: 'babel-eslint'
	},
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
	],
	plugins: [
    'prettier'
	],
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
