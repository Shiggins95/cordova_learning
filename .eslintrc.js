module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-await-in-loop': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-debugger': 'off',
    'no-plusplus': 'off',
    'max-len': ['error', { code: 120 }],
    'react/no-array-index-key': 'off',
    'no-restricted-syntax': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': ['error'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  overrides: [{ files: 'index.jsx', rules: { 'no-undef': 'off' } }],
};
