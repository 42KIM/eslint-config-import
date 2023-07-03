module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'index',
          'sibling',
          'object',
        ],
      },
    ],
  }
}