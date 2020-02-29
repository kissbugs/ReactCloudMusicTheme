module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ['react-hooks', 'react', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['warn'],
    'react/prop-types': false,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'camelcas': 0
  }
}