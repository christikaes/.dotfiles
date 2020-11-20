module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  extends: [
    // start with the base-recommended rules
    'eslint:recommended',
    // adjusts the eslint:recommended rules to work with TS
    'plugin:@typescript-eslint/eslint-recommended',
    // adds recommended rules for TS
    'plugin:@typescript-eslint/recommended',
    // adds linting for import statements
    'plugin:import/errors',
    'plugin:import/warnings',
    // extends import-linting with support for TypeScript imports
    'plugin:import/typescript',
    // extends the prettier config (disables base eslint rules so they don't conflict with prettier)
    // enables the prettier plugin (enables eslint detecting prettier errors)
    // sets the "prettier/prettier" rule to "error" (enables red-highlighting of prettier errors)
    'plugin:prettier/recommended',
    // further disable linting rules from @typescript-eslint so that prettier can handle them
    'prettier/@typescript-eslint',
    // adds linting for react
    'plugin:react/recommended',
    // disable linting rules from react
    'prettier/react',
  ],
  plugins: [
    // additional linting for React hooks
    'react-hooks',
    // accessibility linting for jsx
    'jsx-a11y',
  ],
  rules: {
    // throws false positives when used with typescript
    'no-unused-vars': 'off',
    // allow typescript to infer return type of function
    '@typescript-eslint/explicit-function-return-type': 'off',
    // do not require marking class methods with 'public'/'private'
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // allow empty interfaces for semantic/placeholder purposes
    '@typescript-eslint/no-empty-interface': 'off',
    // error if any of the React hooks rules are violated
    'react-hooks/rules-of-hooks': 'error',
    // warn when hook-deps look wrong (this is almost always an error)
    'react-hooks/exhaustive-deps': ['warn', { additionalHooks: 'useAsyncEffect' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.ts', '*.spec.jsx', '*.spec.tsx'],
      env: {
        'jest/globals': true,
      },
      extends: [
        // adds linting for jest
        'plugin:jest/recommended',
      ],
      rules: {
        // tries to type-check the first arg for `describe` but doesn't allow string-typed variables :eye_roll:
        // let's leave the type-checking to TypeScript
        'jest/valid-describe': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
