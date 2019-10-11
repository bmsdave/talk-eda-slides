import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    name: 'bmsdave'
  },
  plugins: [
    resolve(),
    commonjs({
        include: 'node_modules/**'
      })
  ]
};