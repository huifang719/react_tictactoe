module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    strict: ['error', 'global'],
    // 'func-style': ['error', 'expression'],
    'max-len': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-alert': 'off',
  },
};
