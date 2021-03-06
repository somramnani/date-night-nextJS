module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    'cypress/globals': true,
  },
  parserOptions: { ecmaVersion: 8 },
  extends: ['next/core-web-vitals', 'eslint:recommended'],
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js', '*.d.ts'],
  plugins: ['react-hooks', 'lodash', 'cypress', 'sequelize', 'autofix'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'plugin:lodash/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:cypress/recommended',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
        'cypress/no-async-tests': 'error',
        'sequelize/create-indexes-concurrently': 'error',
        'autofix/no-debugger': 'error',
      },
    },
  ],
}
