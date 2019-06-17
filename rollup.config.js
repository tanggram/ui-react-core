import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const input = './src/index.js';
const name = 'tanggram-ui-react-core';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};
const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  // configFile: './babel.config.js',
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    './node_modules/react-is/index.js': [
      'isElement',
      'isValidElementType',
      'ForwardRef',
    ],
  },
};

export default [
  {
    input,
    output: { file: `build/umd/${name}.development.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    output: { file: `build/umd/${name}.production.min.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify(),
    ],
  },
];
