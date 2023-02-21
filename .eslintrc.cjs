module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['node_modules', '*.test.js', './dist/'],
  rules: {
    semi: [2, 'always'],
    'no-unused-vars': ['error', { 'argsIgnorePattern':'^_' }]
  },
};
