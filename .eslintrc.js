module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'cypress'],
  rules: {
    indent: ['error', 4],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jest/expect-expect': 'off'
  }
}
