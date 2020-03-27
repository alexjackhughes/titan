module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      "plugin:react/recommended",
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:meteor/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
        }
      },
    rules: {'@typescript-eslint/member-delimiter-style': 0},
    settings: {
        react: {
          version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
      }
  };