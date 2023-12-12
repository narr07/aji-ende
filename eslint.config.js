// eslint.config.js

import antfu from '@antfu/eslint-config'

export default antfu({
  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    './fixtures',
    // ...globs
  ],
  formatters: {
    css: true,
    html: true,
    toml: 'dprint',
    markdown: 'prettier',
  },
  overrides: {
    typescript: {
      'ts/consistent-type-definitions': ['error', 'interface'],
    },
    vue: {
      'vue/operator-linebreak': ['error', 'before'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': ['error'],
    },
    css: {
      'css/indent': ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': ['error'],
      'css/at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
        },
      ],
    },
  },

})
