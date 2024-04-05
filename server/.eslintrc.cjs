module.exports = {
  env: {
    node: true,
  },
  extends: ['../.eslintrc.cjs', 'plugin:node/recommended'],
  rules: {
    'no-debugger': 0,
    'node/no-extraneous-require': 0,
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'node/no-extraneous-import': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
