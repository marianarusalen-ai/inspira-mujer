import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

/** @type {import('typescript-eslint').ConfigArray} */
export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...astro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];
