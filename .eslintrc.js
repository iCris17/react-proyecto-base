module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],

  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
