let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        modules: ['modules', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
      },
    ],
  ];
}

module.exports = {
  presets: defaultPresets.concat(['@babel/preset-react']),
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-runtime',
  ],
  ignore: [/@babel[\\|/]runtime/],
  env: {
    // test: {
    //   sourceMaps: 'both',
    //   plugins: [
    //     [
    //       'babel-plugin-module-resolver',
    //       {
    //         root: ['./'],
    //       },
    //     ],
    //   ],
    // },
    // coverage: {
    //   plugins: [
    //     'babel-plugin-istanbul',
    //     [
    //       'babel-plugin-module-resolver',
    //       {
    //         root: ['./'],
    //       },
    //     ],
    //   ],
    // },
    development: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            alias: {
              modules: './modules',
            },
          },
        ],
      ],
    },
    es: {
      plugins: [
        '@babel/transform-react-constant-elements',
        'transform-dev-warning',
        [
          'transform-react-remove-prop-types',
          {
            mode: 'unsafe-wrap',
          },
        ],
      ],
      // It's most likely a babel bug.
      // We are using this ignore option in the CLI command but that has no effect.
      ignore: ['**/*.test.js'],
    },
    production: {
      plugins: [
        '@babel/transform-react-constant-elements',
        'transform-dev-warning',
        [
          'transform-react-remove-prop-types',
          {
            mode: 'unsafe-wrap',
          },
        ],
      ],
      // It's most likely a babel bug.
      // We are using this ignore option in the CLI command but that has no effect.
      ignore: ['**/*.test.js'],
    },
    'production-umd': {
      plugins: [
        '@babel/transform-react-constant-elements',
        'transform-dev-warning',
        [
          'transform-react-remove-prop-types',
          {
            mode: 'unsafe-wrap',
          },
        ],
      ],
    },
  },
};
