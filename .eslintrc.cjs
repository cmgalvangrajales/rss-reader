module.exports = {
  // verbose: true,
  root: true,
  // env: { browser: true, es2020: true, jest: true },
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'react', '@typescript-eslint'],
  settings: {
    react: {
      version: '17',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {},
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    curly: ['error', 'all'],
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    'react/function-component-definition': 'off',
  },
  overrides: [
    {
      files: ['*.test.{ts, tsx}'],
      rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
      },
    },
  ],
};
