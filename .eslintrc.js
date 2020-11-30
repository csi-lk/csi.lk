module.exports = {
  plugins: ['import', 'json', 'unicorn', 'sort-imports-es6-autofix', 'jest-dom'],
  extends: ['airbnb-base', 'plugin:unicorn/recommended', 'prettier', 'prettier/unicorn'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint', 'local'],
      rules: {
        'import/extensions': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        'local/jsx-uses-silk-pragma': 2,
        'local/jsx-uses-vars': 2,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
    },
  ],
}
