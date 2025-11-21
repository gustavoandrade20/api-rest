module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    indent: ['error', 2],
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
