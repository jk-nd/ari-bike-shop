module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off', // Turn off unused vars check
    '@typescript-eslint/no-unused-vars': 'off', // Turn off TypeScript unused vars check
  },
}
