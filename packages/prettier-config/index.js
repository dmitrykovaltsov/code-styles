module.exports = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    overrides: [
      {
        files: ['*.scss', '*.css'],
        options: {
          tabWidth: 4,
        },
      },
      {
        files: ['*.md'],
        options: {
          tabWidth: 4,
        },
      },
      {
        files: ['*.html'],
        options: {
          tabWidth: 4,
          useTabs: true,
        },
      },
    ],
  }
