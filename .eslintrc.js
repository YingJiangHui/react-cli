module.exports = {
  extends: ['react-app'],
  rules:{
    'react/jsx-uses-react': [2],
    'react/react-in-jsx-scope': [2],
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: './tsconfig.json',
    },
    extends: ['airbnb-typescript'],
    rules: {
      'no-console':[0],
      'eol-last':[0],
      'consistent-return':[0],
      '@typescript-eslint/comma-dangle':[0],
      'no-trailing-spaces':[0],
      '@typescript-eslint/comma-spacing':[0],
      '@typescript-eslint/object-curly-spacing': [0],
      'import/prefer-default-export': [0],
    }
  }]
}